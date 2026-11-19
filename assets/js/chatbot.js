/* chatbot.js — FAQ et logique du chatbot (FR/EN) */
// ── CHATBOT STATIQUE ENRICHI ──
const FAQ = {
  fr: [
    // Identité
    { k:['qui es-tu','qui est ahmed','présente-toi','tell me about','c\'est qui','parle-moi de toi','about you','who are you','who is ahmed'],
      r:'Ahmed Riahi est un ingénieur en mécatronique basé à Bizerte, Tunisie. Spécialisé en robotique autonome, vision par ordinateur et IA embarquée. Actuellement en Cycle Ingénieur à ESPRIT (2ème de classe, 14.99/20). 🤖' },
    // Contact
    { k:['contact','email','mail','joindre','reach','linkedin','github','réseaux'],
      r:'📧 ahmed.riahi@esprit.tn\n💼 linkedin.com/in/riahi-ahmed\n💻 github.com/ahmedriaahi\nN\'hésite pas à le contacter pour toute opportunité !' },
    // Disponibilité
    { k:['disponible','disponibilité','quand','stage','internship','alternance','embauche','recruit','hire','open to'],
      r:'✅ Ahmed est disponible à partir de Janvier 2027 pour un stage de recherche, une alternance ou une offre d\'emploi — opportunités nationales et internationales bienvenues !' },
    // Mitacs
    { k:['mitacs','globalink','canada','recherche','research'],
      r:'Ahmed est candidat au programme Mitacs Globalink pour un stage de recherche au Canada en robotique ou vision par ordinateur. Ce programme connecte les étudiants internationaux avec des universités canadiennes. 🍁' },
    // Formation ESPRIT
    { k:['esprit','ingénieur','mécatronique','electromécanique','cycle ingénieur','engineering'],
      r:'Ahmed suit le Cycle Ingénieur Électromécanique/Mécatronique à ESPRIT (El Ghazella) depuis 2025. Il est classé 2ème de sa classe avec une moyenne de 14.99/20. 🎓' },
    // Formation ISET
    { k:['iset','master','robotique','intelligence artificielle','licence','génie électrique','formation','études','education','degree'],
      r:'Parcours d\'Ahmed :\n🎓 2025–2027 : Ingénieur Mécatronique — ESPRIT (2ème/classe, 14.99/20)\n🎓 2023–2025 : Master Robotique & IA — ISET Bizerte\n🎓 2020–2023 : Licence Génie Électrique — ISET Bizerte\n🎓 2019–2020 : Bac Mathématiques' },
    // Compétences générales
    { k:['compétence','skill','technologie','stack','maîtrise','what can','what do you know','languages','outils','tools'],
      r:'🛠️ Stack d\'Ahmed :\n• Frameworks : ROS2, OpenCV, TensorFlow, YOLOv8\n• Langages : Python, C++, C, MATLAB\n• Outils : Docker, Qt6, Linux, GitHub\n• Simulation : Gazebo, RViz, Webots, SolidWorks' },
    // ROS
    { k:['ros','ros2','ros 2','robotic operating','navigation','nav2'],
      r:'Ahmed maîtrise ROS2 (Humble) et ROS1 (Noetic). Il l\'utilise pour la navigation autonome, le SLAM, la gestion de capteurs (LIDAR, IMU, GPS) et l\'intégration de modèles 3D URDF. 🤖' },
    // OpenCV / Vision
    { k:['opencv','vision','computer vision','image','traitement','detection','détection','yolo','yolov8'],
      r:'Ahmed est expert en vision par ordinateur avec OpenCV et YOLOv8. Il a développé des systèmes de détection temps réel : reconnaissance gestuelle, identification d\'utilisateurs, calibration par marqueurs ArUco et détection de mauvaises herbes. 👁️' },
    // Python
    { k:['python','programmation','code','coding','développement'],
      r:'Python est le langage principal d\'Ahmed. Il l\'utilise pour la vision par ordinateur (OpenCV), le deep learning (TensorFlow), les interfaces GUI (Qt6/PyQt) et le développement ROS2. 🐍' },
    // SLAM
    { k:['slam','cartographie','mapping','navigation autonome','autonomous','lidar','localisation'],
      r:'Ahmed a implémenté le SLAM gmapping sous ROS2/Gazebo pour son projet de robot autonome R.PX0. Le robot génère des cartes 2D et navigue de façon autonome grâce à un LIDAR virtuel et une fusion multi-capteurs. 🗺️' },
    // Docker
    { k:['docker','conteneur','container','déploiement','deployment'],
      r:'Ahmed utilise Docker pour le déploiement conteneurisé de ses applications. Il l\'a utilisé notamment pour son système de reconnaissance d\'utilisateurs (TensorFlow), garantissant la portabilité sur tous les environnements. 🐳' },
    // MATLAB / Simscape
    { k:['matlab','simscape','simulation','simulink','cinématique','kinematics'],
      r:'Ahmed maîtrise MATLAB/Simscape pour la modélisation et simulation dynamique. Son projet phare : un bras robotique 4DOF avec cinématique directe et inverse. ⚙️' },
    // SolidWorks
    { k:['solidworks','cad','cao','3d','conception','design mécanique'],
      r:'Ahmed utilise SolidWorks pour la conception 3D mécanique. Il a conçu le robot mobile R.PX0 sous SolidWorks, puis l\'a exporté en format URDF pour la simulation ROS2/Gazebo. 🔩' },
    // TensorFlow / Deep Learning
    { k:['tensorflow','deep learning','réseau de neurones','neural network','cnn','apprentissage','machine learning','ml','ia','ai','intelligence artificielle'],
      r:'Ahmed travaille avec TensorFlow et les CNNs pour la reconnaissance et classification d\'images. Son système de reconnaissance d\'utilisateurs atteint 92.26% de précision sur son propre visage et 100% sur Messi ! 🧠' },
    // Qt6
    { k:['qt','qt6','interface','gui','interface graphique','ihm'],
      r:'Ahmed développe des interfaces graphiques avec Qt6/PyQt. Chez WEMAKER, il a créé un GUI complet pour le système de calibration automatique de pièces imprimées 3D. 🖥️' },
    // Projets général
    { k:['projet','projects','réalisation','work','portfolio'],
      r:'Ahmed a 6 projets majeurs :\n🦾 Bras Robotique 4DOF (MATLAB/Simscape)\n🤖 Robot Mobile SLAM (ROS2/Gazebo)\n✋ Reconnaissance Gestuelle (OpenCV)\n👤 Reconnaissance Utilisateurs (TensorFlow/Docker)\n📏 Mesure Distance ArUco (OpenCV)\n🚗 ANPR IoT — Détection d\'Infractions (YOLO+MQTT)\nClique sur un projet pour les détails !' },
    // Bras robotique
    { k:['bras','arm','4dof','dof','robotic arm','simscape'],
      r:'🦾 Bras Robotique 4DOF : Ahmed a conçu et simulé un bras robotique à 4 degrés de liberté sous MATLAB/Simscape. Inclut la modélisation cinématique directe/inverse et l\'analyse dynamique des mouvements.\n→ github.com/ahmedriaahi/4DOF-Robotic-Arm-Simscape-MATLAB' },
    // Robot SLAM
    { k:['r.px0','rpx0','robot mobile','slam robot','désherbage','weed','gazebo robot'],
      r:'🤖 Robot R.PX0 : Robot mobile autonome de désherbage. Conçu sous SolidWorks, simulé sous ROS2/Gazebo. Intègre SLAM gmapping, YOLOv8 pour la détection de mauvaises herbes, et une fusion LIDAR/GPS/IMU/caméra.\n→ github.com/ahmedriaahi/R_PX0-autonomous-robot' },
    // Geste
    { k:['geste','gesture','doigt','finger','main','hand','mediapipe'],
      r:'✋ Reconnaissance Gestuelle : Système de détection du nombre de doigts levés en temps réel par vision artificielle. Utilise OpenCV pour le traitement d\'image et la détection des contours de la main.' },
    // User Recognition
    { k:['reconnaissance utilisateur','user recognition','identification','visage','face','biométrie'],
      r:'👤 Reconnaissance Utilisateurs : Identification en temps réel avec TensorFlow. Précision : Ahmed 92.26%, Messi 100% 🎯. Déploiement conteneurisé avec Docker.\n→ github.com/ahmedriaahi/Real-Time-User-Recognition-' },
    // ArUco
    { k:['aruco','marqueur','marker','distance','mesure','calibration caméra','camera calibration'],
      r:'📏 Mesure Distance ArUco : Système temps réel de détection et estimation de distance par marqueurs ArUco. Inclut la calibration caméra automatique. Projet en cours de développement 🚧' },
    // ANPR
    { k:['anpr','plaque','immatriculation','infraction','sens interdit','nodered','node-red','mqtt','iot','esp32','easyocr','bytetrack','sqlite'],
      r:'🚗 ANPR IoT (nouveau projet) : Système complet de détection de véhicules en sens interdit et lecture automatique de plaques. YOLO + ByteTrack pour la détection, EasyOCR pour la lecture OCR (arabe+anglais), stockage SQLite, dashboard Node-RED via MQTT. Capteurs ESP32 intégrés (GPS, temp, gaz...).\n→ github.com/ahmedriaahi/ANPR_Infraction' },
    // WeMake
    { k:['wemaker','wemake','startup','stage ingénieur','impression 3d','3d printing','calibration'],
      r:'🏭 Chez WEMAKER (07–08/2026) : Ahmed a développé un système de calibration automatique pour pièces imprimées 3D. Résultat : débit passé de 7 à 95 pièces/jour (+1257% !) grâce à la vision par ordinateur et les marqueurs ArUco.' },
    // ISET Mémoire
    { k:['mémoire','fin d\'études','pfe','thesis','iset projet','robot désherbage'],
      r:'📚 Mémoire ISET (02–06/2025) : Robot mobile autonome de désherbage combinant YOLOv8 (détection temps réel) + SLAM sous ROS2/Gazebo. Multi-capteurs : LIDAR, GPS, IMU, caméra. Projet de fin de Master Robotique & IA.' },
    // Tech Power
    { k:['tech power','techpower','siemens','automate','plc','ladder','tia portal','step7','hmi'],
      r:'🏭 Tech Power Electronics Group :\n• Stage PFE (03–05/2023) : Automatisation machine Charge-Lames en Ladder (TIA Portal/STEP7), automate Siemens S7, HMI KTP600\n• Stage Perfectionnement (01–02/2022) : Analyse & programmation machine Soudure-de-Lames' },
    // Certifications
    { k:['certification','certificat','nvidia','azure','microsoft','cisco','coursera','stanford','delf','diplôme'],
      r:'🏆 Certifications d\'Ahmed :\n• NVIDIA — AI for Predictive Maintenance (2026)\n• Microsoft Azure AI Fundamentals (2024)\n• Cisco Cybersecurity (2024)\n• ML Specialization — Stanford/DeepLearning.AI (2024)\n• DELF B2 Français (2023)' },
    // Langues
    { k:['langue','language','français','french','anglais','english','arabe','arabic','parle','speak','bilingue'],
      r:'🌍 Ahmed parle :\n• Arabe : langue maternelle\n• Français : courant (DELF B2 certifié)\n• Anglais : professionnel' },
    // Localisation
    { k:['où','where','location','tunisie','tunisia','bizerte','basé','based'],
      r:'📍 Ahmed est basé à Bizerte, Tunisie. Il est ouvert aux opportunités locales et internationales, y compris la mobilité complète pour les stages et offres d\'emploi à l\'étranger.' },
    // Salutation
    { k:['bonjour','salut','hello','hi','hey','bonsoir','coucou','salam'],
      r:'Bonjour ! 👋 Je suis l\'assistant d\'Ahmed Riahi. Pose-moi une question sur ses compétences, projets, formation ou expériences !' },
    // Remerciement
    { k:['merci','thank','thanks','super','génial','cool','parfait','bravo','excellent'],
      r:'Avec plaisir ! 😊 N\'hésite pas si tu as d\'autres questions sur Ahmed.' },
    // Default
    { k:[], r:'' }
  ],
  en: [
    { k:['who are you','who is ahmed','about you','tell me about','introduce'],
      r:'Ahmed Riahi is a mechatronics engineer based in Bizerte, Tunisia. Specialized in autonomous robotics, computer vision and embedded AI. Currently in Engineering Cycle at ESPRIT (2nd in class, 14.99/20). 🤖' },
    { k:['contact','email','linkedin','github','reach','social'],
      r:'📧 ahmed.riahi@esprit.tn\n💼 linkedin.com/in/riahi-ahmed\n💻 github.com/ahmedriaahi\nFeel free to reach out for any opportunity!' },
    { k:['available','availability','internship','job','hire','recruit','open to','work'],
      r:'✅ Ahmed is available from January 2027 for a research internship, work-study or job offer — national and international opportunities welcome!' },
    { k:['mitacs','globalink','canada','research'],
      r:'Ahmed is applying to the Mitacs Globalink program for a research internship in Canada in robotics or computer vision. 🍁' },
    { k:['skill','technology','stack','tools','languages','know','expertise'],
      r:'🛠️ Ahmed\'s Stack:\n• Frameworks: ROS2, OpenCV, TensorFlow, YOLOv8\n• Languages: Python, C++, C, MATLAB\n• Tools: Docker, Qt6, Linux, GitHub\n• Simulation: Gazebo, RViz, Webots, SolidWorks' },
    { k:['education','degree','university','esprit','iset','master','bachelor','formation'],
      r:'Ahmed\'s Background:\n🎓 2025–2027: Mechatronics Engineering — ESPRIT (2nd/class, 14.99/20)\n🎓 2023–2025: Master Robotics & AI — ISET Bizerte\n🎓 2020–2023: Bachelor Electrical Engineering — ISET Bizerte' },
    { k:['ros','ros2','navigation','autonomous'],
      r:'Ahmed masters ROS2 (Humble) and ROS1 (Noetic) for autonomous navigation, SLAM, sensor management (LIDAR, IMU, GPS) and 3D URDF integration. 🤖' },
    { k:['opencv','vision','computer vision','yolo','detection'],
      r:'Ahmed is an expert in computer vision with OpenCV and YOLOv8: gesture recognition, user identification, ArUco marker calibration and weed detection. 👁️' },
    { k:['slam','mapping','lidar','localization','autonomous navigation'],
      r:'Ahmed implemented SLAM gmapping under ROS2/Gazebo for the autonomous R.PX0 robot. It generates 2D maps and navigates autonomously with virtual LIDAR and multi-sensor fusion. 🗺️' },
    { k:['anpr','license plate','infraction','wrong way','node-red','mqtt','iot','esp32','easyocr','bytetrack','sqlite'],
      r:'🚗 ANPR IoT (new project): Full IoT system for wrong-way vehicle detection and automatic license plate reading. YOLO + ByteTrack for detection, EasyOCR for OCR (Arabic+English), SQLite storage, Node-RED dashboard via MQTT. ESP32 sensors integrated (GPS, temp, gas...).\n→ github.com/ahmedriaahi/ANPR_Infraction' },
    { k:['project','projects','portfolio','work','realisation'],
      r:'Ahmed\'s 6 major projects:\n🦾 4DOF Robotic Arm (MATLAB/Simscape)\n🤖 Mobile SLAM Robot (ROS2/Gazebo)\n✋ Gesture Recognition (OpenCV)\n👤 User Recognition (TensorFlow/Docker)\n📏 ArUco Distance Measurement (OpenCV)\n🚗 ANPR IoT Infraction System (YOLO+MQTT)' },
    { k:['wemaker','startup','3d printing','calibration','internship engineer'],
      r:'🏭 At WEMAKER (07–08/2026): Ahmed built an automatic calibration system for 3D printed parts. Output went from 7 to 95 parts/day (+1257%!) using computer vision and ArUco markers.' },
    { k:['certification','nvidia','azure','microsoft','cisco','coursera','stanford','delf'],
      r:'🏆 Ahmed\'s Certifications:\n• NVIDIA — Generative AI with Diffusion Models (2026)\n• NVIDIA — AI for Predictive Maintenance (2026)\n• Microsoft Azure AI Fundamentals (2024)\n• Cisco Cybersecurity (2024)\n• ML Specialization — Stanford/DeepLearning.AI (2024)\n• DELF B2 French (2023)' },
    { k:['language','french','english','arabic','speak','bilingual'],
      r:'🌍 Ahmed speaks:\n• Arabic: native\n• French: fluent (DELF B2)\n• English: professional' },
    { k:['where','location','tunisia','bizerte','based'],
      r:'📍 Ahmed is based in Bizerte, Tunisia. Open to local and international opportunities, including full mobility for internships and jobs abroad.' },
    { k:['hello','hi','hey','good morning','good evening'],
      r:'Hello! 👋 I\'m Ahmed Riahi\'s assistant. Ask me about his skills, projects, education or experience!' },
    { k:['thank','thanks','great','awesome','perfect','cool'],
      r:'You\'re welcome! 😊 Feel free to ask more questions about Ahmed.' },
    { k:[], r:'' }
  ]
};

function toggleChat() {
  const c = document.getElementById('chatbot');
  const isOpen = c.style.display === 'flex';
  c.style.display = isOpen ? 'none' : 'flex';
  if (!isOpen) setTimeout(() => document.getElementById('chat-input').focus(), 100);
}

function sendMsg() {
  const inp = document.getElementById('chat-input');
  const msg = inp.value.trim();
  if (!msg) return;
  addMsg(msg, 'user');
  inp.value = '';

  setTimeout(() => {
    const reply = getReply(msg);
    addMsg(reply, 'bot');
  }, 400);
}

function getReply(msg) {
  const low = msg.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const dict = lang === 'en' ? FAQ.en : FAQ.fr;

  for (const entry of dict) {
    if (entry.k.length === 0) continue;
    if (entry.k.some(k => low.includes(k.normalize('NFD').replace(/[\u0300-\u036f]/g, '')))) {
      return entry.r;
    }
  }

  // Réponse par défaut bilingue
  return lang === 'fr'
    ? '🤔 Je n\'ai pas compris ta question. Essaie par exemple :\n• "Quelles sont tes compétences ?"\n• "Parle-moi de tes projets"\n• "Tu es disponible quand ?"\n• "Comment te contacter ?"'
    : '🤔 I didn\'t understand. Try for example:\n• "What are your skills?"\n• "Tell me about your projects"\n• "When are you available?"\n• "How to contact you?"';
}

function addMsg(text, type) {
  const m = document.getElementById('chat-messages');
  const d = document.createElement('div');
  d.className = 'chat-msg ' + type;
  // Supporter les sauts de ligne dans les réponses
  d.style.whiteSpace = 'pre-line';
  d.textContent = text;
  m.appendChild(d);
  m.scrollTop = m.scrollHeight;
}
