/* main.js — thème, langue, modals projets/certificats, animations, GitHub stats */
/* ═══════════════════════════════════════
   PORTFOLIO — Ahmed Riahi · 2026
   ═══════════════════════════════════════ */

// ── FADE IN ──
(function(){
  const els=document.querySelectorAll('.fade-in');
  const show=()=>els.forEach(e=>e.classList.add('visible'));
  if('IntersectionObserver' in window){
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}
    }),{threshold:0.05});
    els.forEach(e=>obs.observe(e));
  }else{show();}
  setTimeout(show,2500);
})();

// ── MODAL DATA ──
const modals={
  wemaker:{title:'Stage Ingénieur — WEMAKER (Startup)',gallery:[`<img src="assets/wemaker1.jpeg" alt="WeMake Lab" loading="lazy">`],desc:`Développé un système de calibration automatique post-production pour pièces imprimées 3D, augmentant le débit de 7 à 95 pièces/jour (+1257%). Conçu un pipeline d'analyse dimensionnelle avec évaluation de précision ±200%, intégré dans une interface GUI Qt6/Python. Utilisation de marqueurs ArUco pour la calibration automatique de la caméra.`,tags:['OpenCV','Qt6','Python','ArUco','Computer Vision','3D Printing'],links:[]},
  iset:{title:'Mémoire de fin d\'études — ISET Bizerte',gallery:[`<img src="assets/iset1.jpg" alt="Simulation Gazebo" loading="lazy">`,`<img src="assets/iset2.png" alt="Robot navigation" loading="lazy">`,`<img src="assets/iset3.png" alt="YOLOv8" loading="lazy">`,`<img src="assets/iset4.png" alt="Robot désherbage" loading="lazy">`],desc:`Développé un robot mobile autonome de désherbage combinant détection temps réel (YOLOv8) et navigation SLAM sous ROS2/Gazebo avec intégration multi-capteurs (LIDAR, GPS, IMU, caméra).`,tags:['ROS2','YOLOv8','Gazebo','SLAM','LIDAR','GPS','IMU','Python'],links:[]},
  techpower:{title:'Stage de Fin d\'Études — Tech Power Electronics Group',gallery:[`<img src="assets/techpower1.png" alt="Machine Siemens" loading="lazy">`],desc:`Rénovation et personnalisation de la machine Charge-Lames pour toutes gammes de lames. Automatisation en Ladder (TIA Portal/STEP7) augmentant la cadence de production.`,tags:['TIA Portal','STEP7','Ladder','Siemens S7','HMI','Automatisation'],links:[]},
  techpower2:{title:'Stage de Perfectionnement — Tech Power Electronics Group',gallery:[`<img src="assets/techpower2.jpg" alt="Machine Soudure" loading="lazy">`],desc:`Étude et analyse fonctionnelle de la machine Soudure-de-Lames. Programmation du cycle de fonctionnement en Ladder pour une efficacité optimale.`,tags:['Ladder','Siemens','Automatisation','Analyse fonctionnelle'],links:[]},
  arm:{title:'Bras Robotique 4DOF — MATLAB/Simscape',gallery:[`<video controls src="https://github.com/ahmedriaahi/4DOF-Robotic-Arm-Simscape-MATLAB/raw/main/Simulation/VID_20260519_151532.mp4"></video>`],desc:`Conception et programmation du contrôle d'un bras robotique 4 degrés de liberté. Simulation dynamique et analyse des mouvements sous MATLAB/Simscape. Modélisation cinématique directe et inverse.`,tags:['MATLAB','Simscape','Robotics','Kinematics','Control Systems'],links:[{label:'→ GitHub',url:'https://github.com/ahmedriaahi/4DOF-Robotic-Arm-Simscape-MATLAB'}]},
  slam:{title:'Robot Mobile Autonome — SLAM',gallery:[`<img src="assets/slam1.png" alt="Robot R.PX0" loading="lazy">`,`<img src="assets/slam2.png" alt="Navigation RViz" loading="lazy">`],desc:`Conception du robot mobile R.PX0 en 3D sous SolidWorks exporté en URDF. Implémentation du SLAM gmapping pour la génération de cartes 2D et la navigation autonome sous Gazebo.`,tags:['ROS2','Gazebo','RViz','SLAM','SolidWorks','URDF','LIDAR'],links:[{label:'→ GitHub',url:'https://github.com/ahmedriaahi/R_PX0-autonomous-robot'}]},
  gesture:{title:'Reconnaissance Gestuelle par Vision Artificielle',gallery:[`<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7298771712739803136" allowfullscreen></iframe>`],desc:`Développé un système de reconnaissance gestuelle pour détecter le nombre de doigts levés en temps réel par vision artificielle. Utilisation d'OpenCV pour le traitement d'image.`,tags:['OpenCV','Python','Computer Vision','Real-time','MediaPipe'],links:[{label:'→ Voir démo LinkedIn',url:'https://www.linkedin.com/feed/update/urn:li:activity:7298771712739803136'}]},
  user:{title:'Système de Reconnaissance d\'Utilisateurs',gallery:[`<img src="assets/user1.png" alt="Ahmed 92.26%" loading="lazy">`,`<img src="assets/user2.jpg" alt="Messi 100%" loading="lazy">`],desc:`Identification en temps réel via TensorFlow (Ahmed: 92.26%, Messi: 100%). Déploiement conteneurisé avec Docker pour la portabilité du système.`,tags:['TensorFlow','OpenCV','Docker','Python','Deep Learning','CNN'],links:[{label:'→ GitHub',url:'https://github.com/ahmedriaahi/Real-Time-User-Recognition-'}]},
  aruco:{title:'Système de Mesure de Distance — ArUco',gallery:[`<video controls src="https://github.com/ahmedriaahi/ahmedriaahi.github.io/raw/main/assets/VID_20260630_123937_1.mp4"></video>`],desc:`Développement d'un système temps réel de détection et d'estimation de distance par marqueurs ArUco avec calibration caméra intégrée. 🚧 Projet en cours — images coming soon.`,tags:['OpenCV','ArUco','Python','Camera Calibration','Real-time'],links:[]},
  anpr:{title:'ANPR — Détection d\'Infractions IoT',gallery:[`<video controls src="https://github.com/ahmedriaahi/ANPR_Infraction/raw/main/preuves/Node-RED%20Dashboard.mp4"></video>`],desc:`Système IoT complet de détection de véhicules en sens interdit et lecture automatique de plaques d'immatriculation.\n\n🔍 Détection : modèle YOLO (carplater) + ByteTrack pour le suivi multi-objets. Algorithme de sens interdit basé sur la variation de surface de la boîte détectée (+25% minimum).\n\n📖 Lecture OCR : EasyOCR (arabe + anglais) avec CLAHE et vote 2/7 pour valider la lecture. Formats TUN, RS et français gérés.\n\n💾 Stockage : SQLite + images preuves horodatées, recherche propriétaire via CSV.\n\n📡 IoT : diffusion JSON sur MQTT (Cedalo), flux caméra temps réel 8 img/s. Dashboard Node-RED complet : contrôle caméra, alertes infractions, capteurs ESP32 (température, humidité, gaz, GPS, IR).\n\n📊 Résultats : 45 infractions enregistrées, 30 plaques lues correctement.`,tags:['YOLOv8','EasyOCR','MQTT','Node-RED','IoT','ESP32','SQLite','ByteTrack','Python','OpenCV'],links:[{label:'→ GitHub',url:'https://github.com/ahmedriaahi/ANPR_Infraction'}]}
};

function openModal(id){
  const d=modals[id];
  document.getElementById('modal-title').textContent=d.title;
  document.getElementById('modal-gallery').innerHTML=d.gallery.length?d.gallery.join(''):'<p style="color:var(--muted);padding:1rem">🚧 Images coming soon</p>';
  document.getElementById('modal-desc').textContent=d.desc;
  document.getElementById('modal-tags').innerHTML=d.tags.map(t=>`<span class="tag">${t}</span>`).join('');
  document.getElementById('modal-links').innerHTML=d.links.map(l=>`<a href="${l.url}" class="modal-link" target="_blank" rel="noopener">${l.label}</a>`).join('');
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){document.getElementById('modal-overlay').classList.remove('open');document.body.style.overflow='';}

// ── TYPEWRITER ──
const phrases=['Robotics Engineer','Computer Vision Dev','ROS2 Specialist','AI Enthusiast','Autonomous Systems Dev'];
let pi=0,ci=0,del=false;
function tw(){
  const el=document.getElementById('typewriter-text');if(!el)return;
  const ph=phrases[pi];
  if(!del){el.textContent=ph.substring(0,ci+1);ci++;if(ci===ph.length){del=true;setTimeout(tw,1800);return;}}
  else{el.textContent=ph.substring(0,ci-1);ci--;if(ci===0){del=false;pi=(pi+1)%phrases.length;}}
  setTimeout(tw,del?60:100);
}
tw();

// ── SCROLL ──
window.addEventListener('scroll',()=>{
  const max=document.body.scrollHeight-window.innerHeight;
  document.getElementById('progress-bar').style.width=(max>0?window.scrollY/max*100:0)+'%';
  window.scrollY>400?document.getElementById('back-top').classList.add('show'):document.getElementById('back-top').classList.remove('show');
},{passive:true});

// ── THEME & LANG ──
function toggleTheme(){
  const d=document.documentElement,dark=d.getAttribute('data-theme')==='dark';
  d.setAttribute('data-theme',dark?'light':'dark');
  document.getElementById('theme-btn').textContent=dark?'🌙':'☀️';
}
let lang='fr';
function toggleLang(){
  lang=lang==='fr'?'en':'fr';
  document.body.className='lang-'+lang;
  document.getElementById('lang-btn').textContent=lang==='fr'?'EN':'FR';
  // ✅ FIX #11 : placeholder chatbot bilingue
  document.getElementById('chat-input').placeholder=lang==='fr'?'Posez une question...':'Ask something...';
}

// ✅ FIX #10 : Menu hamburger
function toggleMobileMenu(){
  const m=document.getElementById('mobile-menu'),h=document.getElementById('hamburger');
  m.classList.toggle('open');h.classList.toggle('open');
}
function closeMobileMenu(){
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ── CERTIFICATIONS ──
function openCert(img,title,issuer,link){
  const el=document.getElementById('cert-modal-img');
  const base=img.replace(/\.[^.]+$/,'');
  const candidates=[img,...['jpg','jpeg','png','webp'].map(e=>base+'.'+e)];
  let i=0;
  el.onerror=()=>{i++;if(i<candidates.length){el.src='assets/'+candidates[i];}else{el.onerror=null;el.alt='Image non disponible';}};
  el.src='assets/'+candidates[0];
  document.getElementById('cert-modal-title').textContent=title;
  document.getElementById('cert-modal-issuer').textContent=issuer;
  const lk=document.getElementById('cert-modal-link');
  if(link&&link.startsWith('http')){lk.href=link;lk.style.display='inline-block';}else{lk.style.display='none';}
  document.getElementById('cert-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCert(){document.getElementById('cert-overlay').classList.remove('open');document.body.style.overflow='';}

// ── GITHUB STATS ──
async function loadGH(){
  try{
    const r=await fetch('https://api.github.com/users/ahmedriaahi'),d=await r.json();
    if(d.message)return; // rate limit
    document.getElementById('gh-repos').textContent=d.public_repos??'—';
    document.getElementById('gh-followers').textContent=d.followers??'—';
    document.getElementById('gh-following').textContent=d.following??'—';
    const rp=await fetch('https://api.github.com/users/ahmedriaahi/repos?per_page=100'),rd=await rp.json();
    document.getElementById('gh-stars').textContent=Array.isArray(rd)?rd.reduce((s,r)=>s+(r.stargazers_count||0),0):'—';
  }catch(e){}
}
loadGH();

// ✅ FIX #6 : 3D Tilt optimisé (throttle + desactivé sur mobile)
if(window.innerWidth>768){
  document.querySelectorAll('.project-card').forEach(card=>{
    let ticking=false;
    card.addEventListener('mousemove',e=>{
      if(!ticking){
        requestAnimationFrame(()=>{
          const r=card.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
          card.style.transform=`perspective(600px) rotateY(${x/20}deg) rotateX(${-y/20}deg) scale(1.03)`;
          ticking=false;
        });
        ticking=true;
      }
    });
    card.addEventListener('mouseleave',()=>{card.style.transform='none';});
  });
}

// ✅ FIX #6 : Particles optimisées (moins de points + throttle connexions)
(function(){
  const canvas=document.getElementById('particles');if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let mouse={x:null,y:null};
  function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
  resize();
  window.addEventListener('resize',resize,{passive:true});
  window.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY;},{passive:true});
  const isMobile=window.innerWidth<768;
  const COUNT=isMobile?20:45; // ✅ réduit de 60→45 desktop, 25→20 mobile
  const pts=[];
  for(let i=0;i<COUNT;i++)pts.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,size:Math.random()*1.8+.4,alpha:Math.random()*.35+.08});
  const LINK_DIST=90; // ✅ réduit de 100→90
  function anim(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach(p=>{
      if(mouse.x){const dx=mouse.x-p.x,dy=mouse.y-p.y,d=dx*dx+dy*dy;if(d<14400){p.vx-=dx*.00025;p.vy-=dy*.00025;}}
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>canvas.width)p.vx*=-1;
      if(p.y<0||p.y>canvas.height)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
      ctx.fillStyle=`rgba(99,102,241,${p.alpha})`;ctx.fill();
    });
    // ✅ Connexions uniquement si pas mobile
    if(!isMobile){
      for(let i=0;i<pts.length;i++){
        for(let j=i+1;j<pts.length;j++){
          const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
          if(d<LINK_DIST){
            ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);
            ctx.strokeStyle=`rgba(99,102,241,${.1*(1-d/LINK_DIST)})`;ctx.lineWidth=.5;ctx.stroke();
          }
        }
      }
    }
    requestAnimationFrame(anim);
  }
  anim();
})();

// ── ESCAPE ──
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeModal();closeCert();closeDash();}
});
