/* dashboard.js — dashboard privé (Shift+S) */
/* ═══════════════════════════════════════
   TRACKING PRIVÉ — Shift+S
   ✅ FIX #1 : hash SHA-256 du code
   ✅ FIX #2 : blocage après 3 tentatives
   ═══════════════════════════════════════ */
const SECRET_HASH='7a957a1f2d87600e950bbbc973aed5ed9c5bd3eb1013797ba66669b243fee41a';
let dashDB=null,dashAuth=false;
let pinAttempts=0,pinBlocked=false,pinBlockUntil=0;

// ✅ FIX #1 : vérification par hash (sans exposer le code en clair)
async function hashStr(str){
  const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

async function initDashDB(){
  try{dashDB=await claude.use('db');}catch(e){dashDB=null;}
}
async function recordVisit(){
  if(!dashDB)return;
  try{
    const now=new Date(),dateKey=now.toISOString().split('T')[0],ts=now.toISOString();
    let g;try{g=await dashDB.doc('stats/global').get();}catch(e){g=null;}
    const gd=g?g.data:{total:0};gd.total=(gd.total||0)+1;gd.lastVisit=ts;
    await dashDB.doc('stats/global').set(gd);
    let day;try{day=await dashDB.doc('days/'+dateKey).get();}catch(e){day=null;}
    const dd=day?day.data:{count:0};dd.count=(dd.count||0)+1;
    await dashDB.doc('days/'+dateKey).set(dd);
    let log;try{log=await dashDB.doc('stats/log').get();}catch(e){log=null;}
    const ld=log?log.data:{visits:[]};if(!ld.visits)ld.visits=[];
    ld.visits.unshift({ts,date:dateKey});
    if(ld.visits.length>20)ld.visits=ld.visits.slice(0,20);
    await dashDB.doc('stats/log').set(ld);
  }catch(e){}
}

function openDash(){
  document.getElementById('dash-overlay').classList.add('open');
  document.body.style.overflow='hidden';
  if(!dashAuth){showPinScreen();}else{showStatsScreen();}
}
function closeDash(){
  document.getElementById('dash-overlay').classList.remove('open');
  document.body.style.overflow='';
}
function showPinScreen(){
  document.getElementById('pin-screen').style.display='block';
  document.getElementById('stats-screen').style.display='none';
  document.getElementById('pin-error').style.display='none';
  document.getElementById('pin-input').value='';
  setTimeout(()=>document.getElementById('pin-input').focus(),150);
}

// ✅ FIX #2 : blocage après 3 tentatives
async function checkPin(){
  if(pinBlocked){
    const rem=Math.ceil((pinBlockUntil-Date.now())/1000);
    showPinError(`⏳ Trop de tentatives. Réessaie dans ${rem}s.`);
    return;
  }
  const v=document.getElementById('pin-input').value;
  const h=await hashStr(v);
  if(h===SECRET_HASH){
    dashAuth=true;pinAttempts=0;
    document.getElementById('pin-screen').style.display='none';
    document.getElementById('stats-screen').style.display='block';
    showStatsScreen();
  }else{
    pinAttempts++;
    const rem=3-pinAttempts;
    const inp=document.getElementById('pin-input');
    inp.classList.add('error');inp.value='';
    if(rem>0){showPinError(`❌ Code incorrect. ${rem} tentative${rem>1?'s':''} restante${rem>1?'s':''}.`);}
    else{
      pinBlocked=true;pinBlockUntil=Date.now()+300000; // 5 min
      showPinError('🔒 Accès bloqué pendant 5 minutes.');
      setTimeout(()=>{pinBlocked=false;pinAttempts=0;showPinError('');},300000);
    }
    setTimeout(()=>{inp.classList.remove('error');inp.focus();},1000);
  }
}
function showPinError(msg){
  const el=document.getElementById('pin-error');
  el.textContent=msg;el.style.display=msg?'block':'none';
}
function showStatsScreen(){loadDashStats();}

async function loadDashStats(){
  if(!dashDB){['ds-total','ds-today','ds-week','ds-last'].forEach(id=>document.getElementById(id).textContent='N/A');return;}
  try{
    let g;try{g=await dashDB.doc('stats/global').get();}catch(e){g=null;}
    const gd=g?g.data:{total:0,lastVisit:null};
    document.getElementById('ds-total').textContent=gd.total||0;
    if(gd.lastVisit){
      const diff=Math.floor((Date.now()-new Date(gd.lastVisit).getTime())/60000);
      let lbl=diff<1?'À l\'instant':diff<60?diff+'min':diff<1440?Math.floor(diff/60)+'h':Math.floor(diff/1440)+'j';
      document.getElementById('ds-last').textContent=lbl;
    }else{document.getElementById('ds-last').textContent='—';}
    const today=new Date(),jours=['dim','lun','mar','mer','jeu','ven','sam'];
    const days7=[];let weekTotal=0,todayCount=0;
    for(let i=6;i>=0;i--){
      const d=new Date(today);d.setDate(d.getDate()-i);
      const key=d.toISOString().split('T')[0],lbl=i===0?'auj.':jours[d.getDay()];
      let dd;try{dd=await dashDB.doc('days/'+key).get();}catch(e){dd=null;}
      const cnt=dd?(dd.data.count||0):0;
      days7.push({label:lbl,count:cnt,isToday:i===0});
      weekTotal+=cnt;if(i===0)todayCount=cnt;
    }
    document.getElementById('ds-today').textContent=todayCount;
    document.getElementById('ds-week').textContent=weekTotal;
    const maxV=Math.max(...days7.map(d=>d.count),1);
    const chartEl=document.getElementById('ds-chart');chartEl.innerHTML='';
    days7.forEach(d=>{
      const h=Math.max((d.count/maxV)*100,3);
      const w=document.createElement('div');w.className='bar-wrap';
      w.innerHTML=`<div class="bar-val">${d.count||''}</div><div class="bar${d.isToday?' today':''}" style="height:${h}%"></div><div class="bar-day">${d.label}</div>`;
      chartEl.appendChild(w);
    });
    let log;try{log=await dashDB.doc('stats/log').get();}catch(e){log=null;}
    const visits=log?(log.data.visits||[]):[];
    const logEl=document.getElementById('ds-log');logEl.innerHTML='';
    const todayKey=today.toISOString().split('T')[0];
    if(!visits.length){logEl.innerHTML='<p style="color:var(--muted);font-size:0.82rem;text-align:center;padding:1rem">Aucune visite enregistrée.</p>';}
    else{
      visits.slice(0,8).forEach((v,i)=>{
        const d=new Date(v.ts);
        const ds=d.toLocaleDateString('fr-FR',{day:'2-digit',month:'short'});
        const ts=d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
        const isT=v.date===todayKey;
        const el=document.createElement('div');el.className='visit-item';
        el.innerHTML=`<span style="color:var(--text)">#${i+1} — Visiteur</span><span class="visit-time">${ds} à ${ts}</span><span class="visit-tag${isT?' today':''}">${isT?'auj.':'passé'}</span>`;
        logEl.appendChild(el);
      });
    }
  }catch(e){showToast('Erreur de chargement');}
}

async function dashReset(){
  if(!confirm('⚠️ Effacer TOUTES les données de visites ? Action irréversible.'))return;
  if(!dashDB)return;
  try{
    await dashDB.doc('stats/global').set({total:0,lastVisit:null});
    await dashDB.doc('stats/log').set({visits:[]});
    showToast('✅ Données réinitialisées');loadDashStats();
  }catch(e){showToast('Erreur lors de la réinitialisation');}
}
function dashLogout(){dashAuth=false;showPinScreen();}

function showToast(msg,ms=2500){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),ms);
}

// Shift+S
document.addEventListener('keydown',e=>{
  if(e.shiftKey&&(e.key==='S'||e.key==='s')){
    e.preventDefault();
    document.getElementById('dash-overlay').classList.contains('open')?closeDash():openDash();
  }
});
document.getElementById('dash-overlay').addEventListener('click',e=>{
  if(e.target===document.getElementById('dash-overlay'))closeDash();
});

// Démarrage
(async()=>{await initDashDB();await recordVisit();})();
