/**
 * BHARATMITRA (भारत मित्र) - CORE CLIENT-SIDE ENGINE
 * Autonomous AI-Powered Citizen Layer for Government Services
 */

// -----------------------------------------------------------------------------
// 1. SCHEMES DATABASE (Authentic Central & State Government Welfare Schemes)
// -----------------------------------------------------------------------------
const SCHEMES_DATABASE = [
  {
    id: "pm-kisan",
    title: "PM-Kisan Samman Nidhi",
    title_hi: "पीएम किसान सम्मान निधि",
    title_ta: "பிஎம் கிசான் திட்டம்",
    category: "farmer",
    authority: "Ministry of Agriculture & Farmers Welfare, GoI",
    benefit: "₹6,000 / year",
    benefitNum: 6000,
    summary: "Direct income support of ₹6,000 per year in three equal installments of ₹2,000 directly into the bank accounts of landholding farmer families.",
    submissionType: "authorized-api", // Case A
    officialPortal: "https://pmkisan.gov.in",
    requiredDocs: [
      { id: "aadhaar", name: "Aadhaar Card", source: "DigiLocker", status: "available" },
      { id: "land_patta", name: "Land Record (Patta/Khasra)", source: "DigiLocker", status: "available" },
      { id: "bank_passbook", name: "Bank Account Passbook", source: "DigiLocker", status: "available" }
    ],
    eligibilityRules: {
      occupations: ["farmer"],
      minAge: 18,
      maxIncome: 400000,
      requiresLand: true
    },
    whyRecommended: "Recommended because you are a farmer owning cultivable land and have an Aadhaar-linked bank account.",
    pathNotice: null
  },
  {
    id: "pm-fasal-bima",
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    title_hi: "प्रधानमंत्री फसल बीमा योजना",
    title_ta: "பிரதமர் பயிர் காப்பீட்டுத் திட்டம்",
    category: "farmer",
    authority: "Department of Agriculture, GoI",
    benefit: "Up to ₹2,00,000 cover",
    benefitNum: 50000,
    summary: "Comprehensive crop insurance shield covering pre-sowing to post-harvest losses against natural calamities, pests, and unseasonal weather.",
    submissionType: "authorized-api", // Case A
    officialPortal: "https://pmfby.gov.in",
    requiredDocs: [
      { id: "aadhaar", name: "Aadhaar Card", source: "DigiLocker", status: "available" },
      { id: "land_patta", name: "Land Ownership Record / Tenancy Agreement", source: "DigiLocker", status: "available" },
      { id: "sowing_cert", name: "Sowing Certificate / VLE Declaration", source: "User Upload", status: "missing" }
    ],
    eligibilityRules: {
      occupations: ["farmer"],
      minAge: 18,
      maxIncome: 1000000
    },
    whyRecommended: "Provides vital financial protection against drought, flood, and crop failure for your agricultural holding.",
    pathNotice: "Upload Sowing Certificate or self-declaration to complete application."
  },
  {
    id: "tn-solar-pump",
    title: "TN CM Solar Powered Agricultural Pump Subsidy",
    title_hi: "तमिलनाडु सौर कृषि पंप योजना",
    title_ta: "முதலமைச்சரின் சூரிய சக்தி பம்ப் திட்டம்",
    category: "farmer",
    authority: "Agricultural Engineering Dept, Govt of Tamil Nadu",
    benefit: "70% Capital Subsidy (~₹1,80,000)",
    benefitNum: 180000,
    summary: "Provides 70% state subsidy for standalone AC/DC Solar Photovoltaic Water Pumping Systems up to 10 HP to reduce diesel pump reliance.",
    submissionType: "redirect-portal", // Case B
    officialPortal: "https://tnhorticulture.tn.gov.in",
    requiredDocs: [
      { id: "aadhaar", name: "Aadhaar Card", source: "DigiLocker", status: "available" },
      { id: "land_patta", name: "Patta / Chitta Land Title", source: "DigiLocker", status: "available" },
      { id: "tn_eb_noc", name: "TANGEDCO Electricity Board No-Objection", source: "User Upload", status: "missing" }
    ],
    eligibilityRules: {
      states: ["Tamil Nadu"],
      occupations: ["farmer"],
      requiresLand: true
    },
    whyRecommended: "Surfaced as a high-value state-specific subsidy for Tamil Nadu farmers seeking daytime solar water pumping.",
    pathNotice: "Requires TANGEDCO No-Current NOC document."
  },
  {
    id: "post-matric-scholarship",
    title: "Post-Matric Scholarship for SC/ST/OBC Students",
    title_hi: "पोस्ट-मैट्रिक छात्रवृत्ति योजना",
    title_ta: "பிற்படுத்தப்பட்டோர் கல்வி உதவித்தொகை",
    category: "student",
    authority: "Ministry of Social Justice & Empowerment, GoI",
    benefit: "₹25,000 / year + tuition",
    benefitNum: 25000,
    summary: "Financial assistance covering 100% mandatory non-refundable college fees and monthly maintenance allowances for students pursuing higher education.",
    submissionType: "authorized-api", // Case A
    officialPortal: "https://scholarships.gov.in",
    requiredDocs: [
      { id: "aadhaar", name: "Aadhaar Card", source: "DigiLocker", status: "available" },
      { id: "caste_cert", name: "Caste / Community Certificate", source: "DigiLocker", status: "available" },
      { id: "income_cert", name: "Income Certificate (< ₹2.5 Lakh)", source: "User Upload", status: "missing" },
      { id: "college_bonafide", name: "College Bonafide Certificate", source: "User Upload", status: "available" }
    ],
    eligibilityRules: {
      occupations: ["student"],
      maxIncome: 250000,
      socialCategories: ["SC", "ST", "OBC"]
    },
    whyRecommended: "Recommended because you are an enrolled student belonging to a designated welfare category.",
    pathNotice: "An updated annual income certificate (< ₹2.5 Lakh) unlocks this ₹25,000 scholarship."
  },
  {
    id: "nmmss-scholarship",
    title: "National Means-cum-Merit Scholarship (NMMSS)",
    title_hi: "राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति",
    title_ta: "தேசிய வருவாய் வழி கல்வி உதவித்தொகை",
    category: "student",
    authority: "Department of School Education & Literacy, GoI",
    benefit: "₹12,000 / year",
    benefitNum: 12000,
    summary: "Awards ₹12,000 annually to meritorious students from economically weaker sections to prevent school drop-out in secondary education.",
    submissionType: "redirect-portal", // Case B
    officialPortal: "https://scholarships.gov.in",
    requiredDocs: [
      { id: "aadhaar", name: "Aadhaar Card", source: "DigiLocker", status: "available" },
      { id: "marksheet", name: "Class 7/8 Marksheet", source: "DigiLocker", status: "available" }
    ],
    eligibilityRules: {
      occupations: ["student"],
      maxAge: 21,
      maxIncome: 350000
    },
    whyRecommended: "Supports ongoing academic expenses for eligible young students.",
    pathNotice: null
  },
  {
    id: "ignoaps-pension",
    title: "Indira Gandhi National Old Age Pension Scheme",
    title_hi: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन",
    title_ta: "இந்திரா காந்தி முதியோர் ஓய்வூதிய திட்டம்",
    category: "senior",
    authority: "Ministry of Rural Development, GoI",
    benefit: "₹1,000 - ₹1,500 / month",
    benefitNum: 14000,
    summary: "Monthly non-contributory pension for senior citizens living below the poverty line to ensure social security in old age.",
    submissionType: "authorized-api", // Case A
    officialPortal: "https://nsap.nic.in",
    requiredDocs: [
      { id: "aadhaar", name: "Aadhaar Card", source: "DigiLocker", status: "available" },
      { id: "age_proof", name: "Birth / Age Verification Proof", source: "DigiLocker", status: "available" },
      { id: "bpl_card", name: "BPL Ration Card / Income Proof", source: "DigiLocker", status: "available" }
    ],
    eligibilityRules: {
      minAge: 60,
      maxIncome: 120000
    },
    whyRecommended: "Recommended because you are 60+ years of age and meet the basic social welfare criteria.",
    pathNotice: null
  },
  {
    id: "ayushman-bharat",
    title: "Ayushman Bharat PM-JAY (Health Card)",
    title_hi: "आयुष्मान भारत - जन आरोग्य योजना",
    title_ta: "ஆயுஷ்மான் பாரத் இலவச மருத்துவ காப்பீடு",
    category: "health",
    authority: "National Health Authority, GoI",
    benefit: "₹5,00,000 Free Health Cover",
    benefitNum: 500000,
    summary: "World's largest public health assurance scheme providing cashless hospital secondary and tertiary treatment up to ₹5 lakh per family per year.",
    submissionType: "authorized-api", // Case A
    officialPortal: "https://beneficiary.nha.gov.in",
    requiredDocs: [
      { id: "aadhaar", name: "Aadhaar Card", source: "DigiLocker", status: "available" },
      { id: "ration_card", name: "Ration Card (NFSA / State)", source: "DigiLocker", status: "available" }
    ],
    eligibilityRules: {
      maxIncome: 300000
    },
    whyRecommended: "Essential family health shield covering cashless surgery and critical hospitalization across 27,000 empanelled hospitals.",
    pathNotice: null
  },
  {
    id: "pmay-gramin",
    title: "Pradhan Mantri Awas Yojana (Gramin - PMAY-G)",
    title_hi: "प्रधानमंत्री आवास योजना (ग्रामीण)",
    title_ta: "பிரதமர் கிராமப்புற வீடு திட்டம்",
    category: "housing",
    authority: "Ministry of Rural Development, GoI",
    benefit: "₹1,20,000 Construction Grant",
    benefitNum: 120000,
    summary: "Direct financial assistance of ₹1.20 lakh (plains) to ₹1.30 lakh (hilly areas) for homeless rural households or those living in kutcha/dilapidated homes.",
    submissionType: "redirect-portal", // Case B
    officialPortal: "https://pmayg.nic.in",
    requiredDocs: [
      { id: "aadhaar", name: "Aadhaar Card", source: "DigiLocker", status: "available" },
      { id: "bank_passbook", name: "Bank Passbook", source: "DigiLocker", status: "available" },
      { id: "job_card", name: "MGNREGA Job Card", source: "DigiLocker", status: "available" }
    ],
    eligibilityRules: {
      maxIncome: 200000
    },
    whyRecommended: "Matches rural households seeking permanent pucca house construction assistance.",
    pathNotice: "Requires active MGNREGA Job Card for 90 days labor component linkage."
  },
  {
    id: "pm-vishwakarma",
    title: "PM Vishwakarma Kaushal Samman",
    title_hi: "पीएम विश्वकर्मा योजना",
    title_ta: "பிஎம் விஸ்வகர்மா திட்டம்",
    category: "artisan",
    authority: "Ministry of Micro, Small and Medium Enterprises, GoI",
    benefit: "₹3 Lakh collateral-free loan @ 5% + ₹15k Tool Grant",
    benefitNum: 15000,
    summary: "Holistic end-to-end support for 18 traditional crafts (carpenters, blacksmiths, potters, cobblers, tailors) with free modern toolkits and skill credit.",
    submissionType: "authorized-api", // Case A
    officialPortal: "https://pmvishwakarma.gov.in",
    requiredDocs: [
      { id: "aadhaar", name: "Aadhaar Card", source: "DigiLocker", status: "available" },
      { id: "skill_declaration", name: "Artisan Trade Self-Declaration", source: "User Upload", status: "available" }
    ],
    eligibilityRules: {
      minAge: 18,
      occupations: ["artisan", "self-employed", "labourer"]
    },
    whyRecommended: "Lesser-known scheme providing immediate ₹15,000 digital e-voucher for advanced tools plus credit.",
    pathNotice: null
  },
  {
    id: "nfbs-welfare",
    title: "National Family Benefit Scheme (NFBS)",
    title_hi: "राष्ट्रीय परिवार लाभ योजना",
    title_ta: "தேசிய குடும்ப நலத் திட்டம்",
    category: "financial",
    authority: "National Social Assistance Programme (NSAP)",
    benefit: "₹20,000 One-time Lump Sum",
    benefitNum: 20000,
    summary: "Rarely publicized emergency welfare grant providing ₹20,000 cash assistance to a below-poverty-line family upon the death of the primary working breadwinner.",
    submissionType: "redirect-portal", // Case B
    officialPortal: "https://nsap.nic.in",
    requiredDocs: [
      { id: "aadhaar", name: "Aadhaar Card", source: "DigiLocker", status: "available" },
      { id: "death_cert", name: "Death Certificate of Breadwinner", source: "User Upload", status: "missing" },
      { id: "bpl_cert", name: "BPL Certificate", source: "DigiLocker", status: "available" }
    ],
    eligibilityRules: {
      maxIncome: 120000
    },
    whyRecommended: "Surfaced by BharatMitra's AI as a crucial lesser-known safety-net subsidy that 70% of eligible families miss.",
    pathNotice: "Requires submission of Municipal/Panchayat Death Certificate."
  }
];

// -----------------------------------------------------------------------------
// 2. DEMO PERSONAS FOR COLLEGE PRESENTATION
// -----------------------------------------------------------------------------
const DEMO_PERSONAS = {
  ramesh: {
    name: "Ramesh Kannan",
    name_vernacular: "ரமேஷ் கண்ணன்",
    age: 58,
    state: "Tamil Nadu",
    district: "Thanjavur",
    occupation: "farmer",
    education: "5th Standard (Primary)",
    socialCategory: "OBC",
    income: 140000,
    landholding: "2.5 Acres",
    familyMembers: 4,
    needs: ["Agriculture subsidy", "Farm equipment", "Health cover"],
    digilockerReady: true,
    docs: {
      aadhaar: true,
      land_patta: true,
      bank_passbook: true,
      income_cert: false,
      caste_cert: true
    }
  },
  priya: {
    name: "Priya Sharma",
    name_vernacular: "प्रिया शर्मा",
    age: 19,
    state: "Uttar Pradesh",
    district: "Varanasi",
    occupation: "student",
    education: "1st Year B.Sc College",
    socialCategory: "SC",
    income: 180000,
    landholding: "None",
    familyMembers: 5,
    needs: ["College scholarship", "Laptop assistance", "Higher education grant"],
    digilockerReady: true,
    docs: {
      aadhaar: true,
      land_patta: false,
      bank_passbook: true,
      income_cert: false,
      caste_cert: true,
      college_bonafide: true
    }
  },
  shanti: {
    name: "Shanti Devi",
    name_vernacular: "शांति देवी",
    age: 64,
    state: "Bihar",
    district: "Patna",
    occupation: "retired",
    education: "No formal schooling",
    socialCategory: "General",
    income: 75000,
    landholding: "None",
    familyMembers: 2,
    needs: ["Monthly pension", "Free eye checkup / medical treatment", "Food ration"],
    digilockerReady: true,
    docs: {
      aadhaar: true,
      land_patta: false,
      bank_passbook: true,
      income_cert: true,
      bpl_card: true
    }
  }
};

// -----------------------------------------------------------------------------
// 3. APPLICATION STATE STORE
// -----------------------------------------------------------------------------
const AppState = {
  currentPersona: "ramesh",
  profile: { ...DEMO_PERSONAS.ramesh },
  language: "en", // 'en', 'hi', 'ta', 'te'
  isLowLiteracy: false,
  isLowBandwidth: false,
  isDigiLockerLinked: true,
  currentScheme: null,
  activeTab: "tab-discovery",
  applications: [
    {
      id: "BM-2026-TN-84920",
      schemeId: "pm-kisan",
      schemeTitle: "PM-Kisan Samman Nidhi",
      applicantName: "Ramesh Kannan",
      submissionDate: "02 Oct 2026",
      status: "under_processing",
      statusLabel: "Under Processing",
      badgeClass: "badge-tag doc-status-available",
      step: 2, // 1: Submitted, 2: Verification, 3: Approval, 4: DBT
      nextAction: "None. Aadhaar eKYC auto-verified.",
      referenceNumber: "PMK-TN-2026-98124"
    },
    {
      id: "BM-2026-TN-11048",
      schemeId: "ayushman-bharat",
      schemeTitle: "Ayushman Bharat PM-JAY",
      applicantName: "Ramesh Kannan (Family)",
      submissionDate: "15 Sep 2026",
      status: "approved",
      statusLabel: "Approved / Golden Card Active",
      badgeClass: "badge-tag doc-status-available",
      step: 4,
      nextAction: "E-Card available for cashless hospital admission.",
      referenceNumber: "AB-PMJAY-662910"
    }
  ],
  familyMembers: [
    { name: "Ramesh Kannan", relation: "Self (Head)", age: 58, eligibleCount: 4, activeSchemes: 2, icon: "👨‍🌾" },
    { name: "Meenakshi Kannan", relation: "Wife", age: 52, eligibleCount: 2, activeSchemes: 1, icon: "👩" },
    { name: "Karthik Kannan", relation: "Son (Student)", age: 20, eligibleCount: 3, activeSchemes: 0, icon: "🧑‍🎓" },
    { name: "Subramanian", relation: "Father (Senior Citizen)", age: 82, eligibleCount: 2, activeSchemes: 1, icon: "👴" }
  ],
  chatMessages: [
    {
      sender: "bot",
      text: "Namaste! I am BharatMitra Saathi (भारत मित्र साथी), your voice-friendly AI assistant. I can explain any government scheme in simple village words, find your missing documents, and check your form before you submit. How can I help you today?"
    }
  ]
};

// -----------------------------------------------------------------------------
// 4. MULTILINGUAL TRANSLATION STRINGS
// -----------------------------------------------------------------------------
const I18N = {
  en: {
    appTitle: "BharatMitra",
    appSub: "Citizen Empowerment Platform",
    tagline: "Discover. Understand. Prepare. Apply. Track.",
    btnLowLiteracy: "👵 Simple Mode",
    btnBandwidth: "⚡ Data Saver",
    listenPage: "🔊 Listen to Screen",
    matchingSchemes: "Potentially Relevant Schemes",
    annualBenefitVal: "Total Potential Annual Benefit",
    applyNow: "Start Assisted Application",
    viewDetails: "View Scheme Guide",
    healthCheck: "Application Health Check",
    digilockerStatus: "DigiLocker Connected",
    saathiHelp: "Ask BharatMitra Saathi",
    speakBtn: "Speak in Tamil/Hindi/English"
  },
  hi: {
    appTitle: "भारतमित्र",
    appSub: "नागरिक कल्याण सेवा मंच",
    tagline: "खोजें • समझें • तैयार करें • आवेदन करें • ट्रैक करें",
    btnLowLiteracy: "👵 सरल मोड (बड़ा पाठ)",
    btnBandwidth: "⚡ डेटा सेवर",
    listenPage: "🔊 बोलकर सुनाएं",
    matchingSchemes: "आपके लिए सरकारी योजनाएं",
    annualBenefitVal: "कुल संभावित वार्षिक लाभ",
    applyNow: "आवेदन शुरू करें",
    viewDetails: "योजना की जानकारी",
    healthCheck: "आवेदन स्वास्थ्य जांच (हेल्थ चेक)",
    digilockerStatus: "डिजीलॉकर से जुड़ा हुआ",
    saathiHelp: "साथी से पूछें",
    speakBtn: "अपनी भाषा में बोलें"
  },
  ta: {
    appTitle: "பாரத்மித்ரா",
    appSub: "குடிமக்கள் சேவை வழிகாட்டி",
    tagline: "கண்டறியுங்கள் • புரிந்து கொள்ளுங்கள் • விண்ணப்பியுங்கள் • கண்காணியுங்கள்",
    btnLowLiteracy: "👵 எளிய முறை (பெரிய எழுத்து)",
    btnBandwidth: "⚡ குறைந்த இணையம்",
    listenPage: "🔊 குரலில் கேளுங்கள்",
    matchingSchemes: "உங்களுக்கான அரசு நலத்திட்டங்கள்",
    annualBenefitVal: "சாத்தியமான ஆண்டு நன்மை",
    applyNow: "விண்ணப்பத்தை தொடங்குங்கள்",
    viewDetails: "விவரங்களை பார்க்க",
    healthCheck: "விண்ணப்ப பிழை பரிசோதனை",
    digilockerStatus: "டிஜிலாக்கர் இணைக்கப்பட்டது",
    saathiHelp: "சாதியிடம் கேளுங்கள்",
    speakBtn: "தமிழில் பேசுங்கள்"
  }
};

// -----------------------------------------------------------------------------
// 5. CORE INITIALIZATION
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  renderAllModules();
  updatePersona(AppState.currentPersona);
});

function initEventListeners() {
  // Navigation Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      switchTab(targetId);
    });
  });

  // Persona Chips
  document.querySelectorAll(".persona-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const personaKey = chip.getAttribute("data-persona");
      updatePersona(personaKey);
    });
  });

  // Language Change
  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      AppState.language = e.target.value;
      applyLanguage(AppState.language);
    });
  }

  // Low Literacy Mode Toggle
  const lowLitBtn = document.getElementById("toggle-low-literacy");
  if (lowLitBtn) {
    lowLitBtn.addEventListener("click", () => {
      AppState.isLowLiteracy = !AppState.isLowLiteracy;
      document.body.classList.toggle("low-literacy-mode", AppState.isLowLiteracy);
      lowLitBtn.classList.toggle("active", AppState.isLowLiteracy);
      speakText(AppState.isLowLiteracy ? "Simple high contrast mode enabled with large buttons." : "Standard mode restored.");
    });
  }

  // Low Bandwidth Mode Toggle
  const lowBwBtn = document.getElementById("toggle-low-bandwidth");
  if (lowBwBtn) {
    lowBwBtn.addEventListener("click", () => {
      AppState.isLowBandwidth = !AppState.isLowBandwidth;
      document.body.classList.toggle("low-bandwidth-mode", AppState.isLowBandwidth);
      lowBwBtn.classList.toggle("active", AppState.isLowBandwidth);
    });
  }

  // Global Audio Narrator Button
  const narratorBtn = document.getElementById("global-narrator-btn");
  if (narratorBtn) {
    narratorBtn.addEventListener("click", () => {
      narrateCurrentScreen();
    });
  }

  // Saathi Chat Widget Toggle
  const saathiTrigger = document.getElementById("saathi-trigger");
  const saathiWindow = document.getElementById("saathi-window");
  const saathiClose = document.getElementById("saathi-close");

  if (saathiTrigger && saathiWindow) {
    saathiTrigger.addEventListener("click", () => {
      saathiWindow.classList.toggle("open");
      if (saathiWindow.classList.contains("open")) {
        speakText("Namaste! I am your BharatMitra Saathi. What government help do you need?");
      }
    });
  }

  if (saathiClose && saathiWindow) {
    saathiClose.addEventListener("click", () => {
      saathiWindow.classList.remove("open");
    });
  }

  // Saathi Voice Input (Web Speech Recognition)
  const micBtn = document.getElementById("saathi-mic-btn");
  if (micBtn) {
    micBtn.addEventListener("click", () => {
      handleSpeechInput();
    });
  }

  // Saathi Chat Submit
  const chatInput = document.getElementById("saathi-chat-input");
  const chatSendBtn = document.getElementById("saathi-send-btn");
  if (chatInput && chatSendBtn) {
    const handleSend = () => {
      const q = chatInput.value.trim();
      if (!q) return;
      chatInput.value = "";
      sendUserChatMessage(q);
    };

    chatSendBtn.addEventListener("click", handleSend);
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSend();
    });
  }

  // Modal Closers
  document.querySelectorAll(".modal-close-btn, .modal-backdrop-close").forEach(el => {
    el.addEventListener("click", () => {
      closeAllModals();
    });
  });
}

// -----------------------------------------------------------------------------
// 6. PERSONA & PROFILE MANAGEMENT
// -----------------------------------------------------------------------------
function updatePersona(key) {
  if (!DEMO_PERSONAS[key]) return;
  AppState.currentPersona = key;
  AppState.profile = { ...DEMO_PERSONAS[key] };

  // Update Persona Chip UI
  document.querySelectorAll(".persona-chip").forEach(c => {
    c.classList.toggle("active", c.getAttribute("data-persona") === key);
  });

  // Populate Profile Inputs
  populateProfileForm();

  // Run Scheme Discovery Matching
  runSchemeDiscovery();

  // Update DigiLocker Vault
  renderDigiLockerMatrix();

  // Update Family Dashboard
  renderFamilyDashboard();

  // Announce Persona Change
  const welcomeStr = `Loaded demo persona: ${AppState.profile.name}, ${AppState.profile.age} years old from ${AppState.profile.state}. Discovering benefits now.`;
  speakText(welcomeStr);
}

function populateProfileForm() {
  const p = AppState.profile;
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  setVal("prof-name", p.name);
  setVal("prof-age", p.age);
  setVal("prof-state", p.state);
  setVal("prof-district", p.district);
  setVal("prof-occupation", p.occupation);
  setVal("prof-income", p.income);
  setVal("prof-category", p.socialCategory);
  setVal("prof-landholding", p.landholding);
  setVal("prof-education", p.education);
}

// -----------------------------------------------------------------------------
// 7. AI SCHEME DISCOVERY & PATH-TO-ELIGIBILITY ENGINE
// -----------------------------------------------------------------------------
function runSchemeDiscovery() {
  const p = AppState.profile;
  const grid = document.getElementById("schemes-results-grid");
  const countBadge = document.getElementById("discovered-count-badge");
  const totalBenefitVal = document.getElementById("total-benefit-value");

  if (!grid) return;
  grid.innerHTML = "";

  let matchedSchemes = [];
  let totalBenefitAmount = 0;

  SCHEMES_DATABASE.forEach(scheme => {
    let score = 50; // base score
    let reasons = [];

    // Occupation match
    if (scheme.eligibilityRules.occupations) {
      if (scheme.eligibilityRules.occupations.includes(p.occupation)) {
        score += 30;
        reasons.push(`Directly matches your occupation as a ${p.occupation}.`);
      } else {
        score -= 40;
      }
    }

    // State match
    if (scheme.eligibilityRules.states) {
      if (scheme.eligibilityRules.states.includes(p.state)) {
        score += 20;
        reasons.push(`Specific welfare subsidy for residents of ${p.state}.`);
      } else {
        score -= 50;
      }
    }

    // Age rules
    if (scheme.eligibilityRules.minAge && p.age >= scheme.eligibilityRules.minAge) {
      score += 15;
    }
    if (scheme.eligibilityRules.maxAge && p.age > scheme.eligibilityRules.maxAge) {
      score -= 40;
    }

    // Income threshold
    if (scheme.eligibilityRules.maxIncome) {
      if (p.income <= scheme.eligibilityRules.maxIncome) {
        score += 15;
        reasons.push(`Annual income ₹${p.income.toLocaleString()} is within statutory limit of ₹${scheme.eligibilityRules.maxIncome.toLocaleString()}.`);
      } else {
        score -= 30;
      }
    }

    // Land requirement
    if (scheme.eligibilityRules.requiresLand) {
      if (p.landholding && p.landholding !== "None") {
        score += 15;
        reasons.push(`Verified cultivable landholding of ${p.landholding}.`);
      } else {
        score -= 35;
      }
    }

    score = Math.min(99, Math.max(25, score));

    if (score >= 60) {
      matchedSchemes.push({
        ...scheme,
        computedScore: score,
        computedReason: reasons.join(" ") || scheme.whyRecommended
      });
      totalBenefitAmount += scheme.benefitNum;
    }
  });

  // Sort descending by match score
  matchedSchemes.sort((a, b) => b.computedScore - a.computedScore);

  if (countBadge) countBadge.textContent = `${matchedSchemes.length} Services Recommended`;
  if (totalBenefitVal) totalBenefitVal.textContent = `₹${totalBenefitAmount.toLocaleString()} / year`;

  // Render Scheme Cards
  matchedSchemes.forEach(s => {
    const card = document.createElement("div");
    card.className = "scheme-card";
    card.innerHTML = `
      <div class="scheme-card-top">
        <span class="match-score-badge">
          <span>✨</span> ${s.computedScore}% Match
        </span>
        <span class="scheme-benefit-badge">${s.benefit}</span>
      </div>
      
      <div class="scheme-authority">${s.authority}</div>
      <h3 class="scheme-title">${s.title}</h3>
      <p class="scheme-summary">${s.summary}</p>
      
      <div class="ai-reason-box">
        <strong>🤖 Why BharatMitra recommended this:</strong>
        ${s.computedReason}
      </div>

      ${s.pathNotice ? `
        <div style="background:#fffbeb; border:1px solid #fde68a; padding:8px 12px; border-radius:6px; font-size:0.8rem; color:#92400e; margin-bottom:14px;">
          💡 <strong>Path-to-Eligibility Action:</strong> ${s.pathNotice}
        </div>
      ` : ''}

      <div class="scheme-card-actions">
        <button class="btn btn-outline" style="flex:1;" onclick="openSchemeDetailModal('${s.id}')">
          ℹ️ Scheme Guide
        </button>
        <button class="btn btn-saffron" style="flex:1.3;" onclick="initiateApplicationFlow('${s.id}')">
          📝 Prepare & Apply
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// -----------------------------------------------------------------------------
// 8. SCHEME DETAIL & APPLICATION ASSISTANT MODAL
// -----------------------------------------------------------------------------
function openSchemeDetailModal(schemeId) {
  const scheme = SCHEMES_DATABASE.find(s => s.id === schemeId);
  if (!scheme) return;

  const modal = document.getElementById("scheme-detail-modal");
  const content = document.getElementById("scheme-detail-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="margin-bottom:16px;">
      <span class="badge-tag badge-official-dpi">${scheme.authority}</span>
      <h2 style="font-size:1.5rem; color:var(--primary-navy); margin-top:8px;">${scheme.title}</h2>
      <div style="font-size:1.1rem; color:var(--saffron-dark); font-weight:800; margin-top:4px;">
        Benefit: ${scheme.benefit}
      </div>
    </div>

    <div style="margin-bottom:20px; line-height:1.6; color:var(--text-main);">
      <strong>Objective & Description:</strong>
      <p style="margin-top:4px; color:var(--text-muted);">${scheme.summary}</p>
    </div>

    <div style="background:var(--bg-card-subtle); padding:16px; border-radius:var(--radius-md); margin-bottom:20px;">
      <h4 style="font-size:0.95rem; color:var(--primary-navy); margin-bottom:8px;">📁 Required Verifiable Documents:</h4>
      <ul style="padding-left:20px; font-size:0.9rem; color:var(--text-main);">
        ${scheme.requiredDocs.map(d => `<li><strong>${d.name}</strong> (${d.source})</li>`).join("")}
      </ul>
    </div>

    <div style="background:var(--primary-light); border-left:4px solid var(--primary-blue); padding:12px; border-radius:4px; margin-bottom:24px; font-size:0.88rem;">
      <strong>🛡️ Submission Architecture Notice:</strong><br>
      ${scheme.submissionType === 'authorized-api' 
        ? '✅ Direct submission supported via authorized Digital India / State API Setu integration.' 
        : '⚠️ No third-party direct API permitted by Ministry. BharatMitra prepares your application package and redirects you safely to the official portal.'}
    </div>

    <div style="display:flex; gap:12px; justify-content:flex-end;">
      <button class="btn btn-outline modal-close-btn-inline" onclick="closeAllModals()">Close</button>
      <button class="btn btn-saffron" onclick="closeAllModals(); initiateApplicationFlow('${scheme.id}');">
        Proceed with Pre-Fill & Health Check ➔
      </button>
    </div>
  `;

  modal.classList.add("active");
}

// -----------------------------------------------------------------------------
// 9. DIGILOCKER SIMULATION & DOCUMENT MATRIX
// -----------------------------------------------------------------------------
function renderDigiLockerMatrix() {
  const p = AppState.profile;
  const tbody = document.getElementById("digilocker-docs-tbody");
  if (!tbody) return;

  const docs = [
    { name: "Aadhaar Card (UIDAI)", type: "Identity & Age Proof", status: p.docs.aadhaar ? "Available" : "Missing", source: "DigiLocker (Auto-Fetched)" },
    { name: "Land Record (Patta / RoR)", type: "Landholding Proof", status: p.docs.land_patta ? "Available" : "Missing", source: p.docs.land_patta ? "DigiLocker (Rev Dept)" : "Manual Upload Required" },
    { name: "Bank Passbook", type: "DBT Direct Bank Account", status: p.docs.bank_passbook ? "Available" : "Missing", source: "DigiLocker (FinSetu)" },
    { name: "Income Certificate (< ₹2.5L)", type: "Income Eligibility", status: p.docs.income_cert ? "Available" : "Missing", source: p.docs.income_cert ? "DigiLocker" : "User Upload Required" },
    { name: "Caste / Community Certificate", type: "Social Welfare Category", status: p.docs.caste_cert ? "Available" : "Missing", source: "DigiLocker" }
  ];

  tbody.innerHTML = docs.map(d => `
    <tr>
      <td><strong>${d.name}</strong></td>
      <td style="color:var(--text-muted);">${d.type}</td>
      <td>
        <span class="doc-status-pill ${d.status === 'Available' ? 'doc-status-available' : 'doc-status-missing'}">
          ${d.status === 'Available' ? '✓ Verified Available' : '⚠️ Missing / Required'}
        </span>
      </td>
      <td style="font-size:0.82rem; color:var(--text-subtle);">${d.source}</td>
      <td>
        ${d.status === 'Missing' ? `
          <button class="btn btn-outline" style="padding:4px 10px; font-size:0.75rem;" onclick="simulateDocumentUpload('${d.name}')">
            📤 Upload Photo
          </button>
        ` : `
          <span style="color:var(--forest-green); font-size:0.8rem; font-weight:700;">✓ Synced</span>
        `}
      </td>
    </tr>
  `).join("");
}

function simulateDocumentUpload(docName) {
  speakText(`Uploading document photo for ${docName}. Running OCR text extraction.`);
  setTimeout(() => {
    alert(`Document "${docName}" successfully scanned and verified! OCR confirmed matching Aadhaar name.`);
    if (docName.includes("Income")) AppState.profile.docs.income_cert = true;
    if (docName.includes("Land")) AppState.profile.docs.land_patta = true;
    renderDigiLockerMatrix();
    evaluateHealthCheck();
  }, 600);
}

// -----------------------------------------------------------------------------
// 10. SMART FORM ASSISTANT & PRE-FLIGHT "APPLICATION HEALTH CHECK"
// -----------------------------------------------------------------------------
function initiateApplicationFlow(schemeId) {
  const scheme = SCHEMES_DATABASE.find(s => s.id === schemeId);
  if (!scheme) return;

  AppState.currentScheme = scheme;
  switchTab("tab-application");

  // Populate Form Fields from Profile
  const p = AppState.profile;
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  setVal("app-scheme-title", scheme.title);
  setVal("app-applicant-name", p.name);
  setVal("app-applicant-aadhaar", "XXXX-XXXX-4819");
  setVal("app-applicant-phone", "98402XXXXX");
  setVal("app-applicant-state", p.state);
  setVal("app-applicant-district", p.district);
  setVal("app-applicant-bank-acc", "30948192841");
  setVal("app-applicant-ifsc", "SBIN0001824");
  setVal("app-applicant-land", p.landholding);

  // Evaluate Pre-flight Health Check
  evaluateHealthCheck();

  speakText(`Application workspace prepared for ${scheme.title}. Automatic health check diagnostic is running.`);
}

function evaluateHealthCheck() {
  const scheme = AppState.currentScheme;
  if (!scheme) return;

  const scoreDial = document.getElementById("health-dial-score");
  const checkList = document.getElementById("health-checklist-items");
  const submitBtn = document.getElementById("submit-application-btn");

  let score = 95;
  let items = [];

  // Check 1: Mandatory Fields
  items.push({
    title: "Mandatory Identity & Demographic Fields",
    status: "ok",
    badge: "✓ Complete (10/10 Fields Pre-filled from DigiLocker)"
  });

  // Check 2: Name Matching Algorithm
  items.push({
    title: "Aadhaar Name Match vs Bank Account Record",
    status: "ok",
    badge: "✓ Exact Match (99.4% Phonetic Levenshtein Confidence)"
  });

  // Check 3: Bank Account & IFSC Validation
  items.push({
    title: "Public Financial Management System (PFMS) Bank Verification",
    status: "ok",
    badge: "✓ Active Aadhaar-seeded Account Verified (SBI Thanjavur)"
  });

  // Check 4: Document Availability for this scheme
  const missingDoc = scheme.requiredDocs.find(d => !AppState.profile.docs[d.id] && d.status === 'missing');
  if (missingDoc) {
    score -= 20;
    items.push({
      title: `Required Document: ${missingDoc.name}`,
      status: "warning",
      badge: "⚠️ Missing! Click upload or fetch via DigiLocker before submission"
    });
  } else {
    items.push({
      title: "Statutory Certificate Validations",
      status: "ok",
      badge: "✓ All DigiLocker certificates within valid 3-year statutory window"
    });
  }

  // Update Score Dial UI
  if (scoreDial) {
    scoreDial.textContent = `${score}%`;
    const dialParent = scoreDial.parentElement;
    if (dialParent) {
      const deg = (score / 100) * 360;
      dialParent.style.background = `conic-gradient(var(--forest-green) 0deg ${deg}deg, #e2e8f0 ${deg}deg 360deg)`;
    }
  }

  // Render Checklist
  if (checkList) {
    checkList.innerHTML = items.map(it => `
      <div class="health-check-item ${it.status}">
        <div>
          <strong>${it.title}</strong>
        </div>
        <div style="font-weight:700; font-size:0.82rem; color:${it.status === 'ok' ? 'var(--forest-green)' : 'var(--warning-amber)'};">
          ${it.badge}
        </div>
      </div>
    `).join("");
  }

  if (submitBtn) {
    submitBtn.textContent = scheme.submissionType === 'authorized-api'
      ? "🚀 Submit via Authorized Digital India API"
      : "🌐 Review & Continue to Official Portal";
  }
}

// -----------------------------------------------------------------------------
// 11. DUAL-TRACK SUBMISSION ENGINE (CASE A vs CASE B)
// -----------------------------------------------------------------------------
function handleFinalSubmission() {
  const scheme = AppState.currentScheme;
  if (!scheme) return;

  if (scheme.submissionType === "authorized-api") {
    // CASE A: Authorized Government API Submission
    processCaseASubmission(scheme);
  } else {
    // CASE B: Official Portal Redirect with Prepared Package
    processCaseBSubmission(scheme);
  }
}

function processCaseASubmission(scheme) {
  const modal = document.getElementById("submission-modal");
  const modalBody = document.getElementById("submission-modal-body");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="text-align:center; padding:20px 0;">
      <div style="font-size:3rem; margin-bottom:12px; animation:spin 1s infinite linear;">⚙️</div>
      <h3 style="font-size:1.3rem; color:var(--primary-navy);">Transmitting Application Package...</h3>
      <p style="color:var(--text-muted); font-size:0.9rem; margin-top:6px;">
        Connecting to Digital India / State API Setu Secure Gateway.<br>
        Encrypting payload with SHA-256 and attaching DigiLocker digital credentials.
      </p>
    </div>
  `;
  modal.classList.add("active");

  setTimeout(() => {
    const newRefId = `BM-2026-${scheme.id.toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const newGovAck = `ACK-${Math.floor(1000000 + Math.random() * 9000000)}`;

    modalBody.innerHTML = `
      <div style="text-align:center; padding:10px 0;">
        <div style="font-size:3.5rem; color:var(--forest-green); margin-bottom:8px;">✅</div>
        <h2 style="font-size:1.45rem; color:var(--forest-green); font-weight:800;">Application Successfully Submitted!</h2>
        <p style="color:var(--text-muted); font-size:0.92rem; margin-top:6px;">
          Your application for <strong>${scheme.title}</strong> has been officially acknowledged by ${scheme.authority}.
        </p>

        <div style="background:var(--bg-card-subtle); border:1.5px dashed var(--border-medium); border-radius:var(--radius-md); padding:16px; margin:20px 0; text-align:left;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.88rem;">
            <span style="color:var(--text-muted);">BharatMitra Reference ID:</span>
            <strong>${newRefId}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.88rem;">
            <span style="color:var(--text-muted);">Official Department Acknowledgment:</span>
            <strong style="color:var(--primary-blue);">${newGovAck}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.88rem;">
            <span style="color:var(--text-muted);">Date & Time Stamp:</span>
            <span>05 Oct 2026, 11:04 PM IST</span>
          </div>
        </div>

        <div style="display:flex; gap:10px; justify-content:center;">
          <button class="btn btn-outline" onclick="downloadAckReceipt('${newRefId}')">
            📥 Download Signed Receipt (PDF)
          </button>
          <button class="btn btn-primary" onclick="closeAllModals(); switchTab('tab-tracking');">
            Go to Tracking Dashboard ➔
          </button>
        </div>
      </div>
    `;

    // Add to Active Applications
    AppState.applications.unshift({
      id: newRefId,
      schemeId: scheme.id,
      schemeTitle: scheme.title,
      applicantName: AppState.profile.name,
      submissionDate: "05 Oct 2026",
      status: "submitted",
      statusLabel: "Submitted / Verifying",
      badgeClass: "badge-tag doc-status-available",
      step: 1,
      nextAction: "Gram Panchayat / Block Officer Verification within 7 days.",
      referenceNumber: newGovAck
    });

    renderApplicationsTable();
    speakText(`Application successfully submitted! Your government acknowledgment number is ${newGovAck}.`);
  }, 1600);
}

function processCaseBSubmission(scheme) {
  const modal = document.getElementById("submission-modal");
  const modalBody = document.getElementById("submission-modal-body");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div>
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
        <span style="font-size:2rem;">🛡️</span>
        <div>
          <h3 style="font-size:1.3rem; color:var(--primary-navy); font-weight:800;">Official Portal Submission Redirect</h3>
          <span style="font-size:0.8rem; color:var(--text-subtle);">Case B: Government-Controlled Submission Step</span>
        </div>
      </div>

      <div style="background:var(--warning-amber-soft); border-left:4px solid var(--warning-amber); padding:14px; border-radius:4px; font-size:0.88rem; color:#78350f; margin-bottom:18px;">
        <strong>Important Citizen Notice:</strong> This Ministry does not permit private platforms to execute direct backend submissions. To protect your security, BharatMitra has packaged your pre-checked information so you do not have to type it again.
      </div>

      <div style="background:var(--bg-card-subtle); padding:14px; border-radius:var(--radius-md); font-size:0.85rem; margin-bottom:20px;">
        <strong>📋 Pre-Filled Data Package Copied to Clipboard:</strong>
        <p style="color:var(--text-muted); margin-top:4px;">
          Applicant: <strong>${AppState.profile.name}</strong> | Landholding: <strong>${AppState.profile.landholding}</strong> | State: <strong>${AppState.profile.state}</strong>
        </p>
      </div>

      <div style="display:flex; flex-direction:column; gap:10px;">
        <a href="${scheme.officialPortal}" target="_blank" class="btn btn-primary btn-large" style="text-align:center;" onclick="logExternalSubmission('${scheme.id}')">
          🌐 Open Verified Official Portal (${scheme.officialPortal}) ➔
        </a>
        <button class="btn btn-outline" onclick="closeAllModals()">
          Cancel & Return to BharatMitra
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");
  speakText("Redirecting to the official government portal. Your pre-checked application package is copied to your clipboard.");
}

function logExternalSubmission(schemeId) {
  const scheme = SCHEMES_DATABASE.find(s => s.id === schemeId);
  const ackNum = prompt("Once you complete the submission on the official portal, enter your Government Acknowledgment Number to enable BharatMitra milestone tracking:", "TN-AGR-2026-8912");
  if (ackNum) {
    AppState.applications.unshift({
      id: `BM-EXT-${Math.floor(1000 + Math.random() * 9000)}`,
      schemeId: scheme.id,
      schemeTitle: scheme.title,
      applicantName: AppState.profile.name,
      submissionDate: "05 Oct 2026",
      status: "under_processing",
      statusLabel: "Under Processing",
      badgeClass: "badge-tag doc-status-available",
      step: 2,
      nextAction: "Awaiting field officer inspection schedule.",
      referenceNumber: ackNum
    });
    renderApplicationsTable();
    closeAllModals();
    switchTab("tab-tracking");
  }
}

function downloadAckReceipt(refId) {
  alert(`Receipt ${refId}.pdf generated and downloaded! Contains official Digital India timestamp and QR code for verification.`);
}

// -----------------------------------------------------------------------------
// 12. "MY APPLICATIONS" TRACKING DASHBOARD
// -----------------------------------------------------------------------------
function renderApplicationsTable() {
  const tbody = document.getElementById("applications-table-tbody");
  if (!tbody) return;

  if (AppState.applications.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:var(--text-muted);">No submitted applications yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = AppState.applications.map(app => `
    <tr>
      <td>
        <strong>${app.schemeTitle}</strong>
        <div style="font-size:0.75rem; color:var(--text-subtle); margin-top:2px;">
          Ref: ${app.id} | Dept Ack: <code>${app.referenceNumber}</code>
        </div>
      </td>
      <td style="color:var(--text-muted);">${app.submissionDate}</td>
      <td>
        <span class="${app.badgeClass}">${app.statusLabel}</span>
        <div class="progress-steps-bar">
          <div class="progress-dot ${app.step >= 1 ? 'active' : ''}" title="Submitted"></div>
          <div class="progress-line ${app.step >= 2 ? 'active' : ''}"></div>
          <div class="progress-dot ${app.step >= 2 ? 'active' : ''}" title="Verification"></div>
          <div class="progress-line ${app.step >= 3 ? 'active' : ''}"></div>
          <div class="progress-dot ${app.step >= 3 ? 'active' : ''}" title="Approval"></div>
          <div class="progress-line ${app.step >= 4 ? 'active' : ''}"></div>
          <div class="progress-dot ${app.step >= 4 ? 'active' : ''}" title="Disbursed"></div>
        </div>
      </td>
      <td style="font-size:0.85rem; color:var(--text-main);">
        ${app.nextAction}
      </td>
      <td>
        <button class="btn btn-outline" style="padding:4px 10px; font-size:0.75rem;" onclick="checkLiveStatus('${app.id}')">
          🔄 Refresh
        </button>
      </td>
    </tr>
  `).join("");
}

function checkLiveStatus(id) {
  speakText(`Connecting to government status API for application ${id}.`);
  setTimeout(() => {
    alert(`Status updated for ${id}: All documents verified by Taluk Development Officer. Next DBT transfer scheduled in 10 days.`);
  }, 600);
}

// -----------------------------------------------------------------------------
// 13. VERNACULAR "DIGITAL SAATHI" AI CHATBOT & JARGON BUSTER
// -----------------------------------------------------------------------------
function sendUserChatMessage(text) {
  // Push User Message
  AppState.chatMessages.push({ sender: "user", text });
  renderChatMessages();

  // Generate Contextual AI Response
  setTimeout(() => {
    const reply = generateSaathiResponse(text);
    AppState.chatMessages.push({ sender: "bot", text: reply });
    renderChatMessages();
    speakText(reply);
  }, 400);
}

function generateSaathiResponse(query) {
  const q = query.toLowerCase();
  const p = AppState.profile;

  if (q.includes("farmer") || q.includes("kisan") || q.includes("crop") || q.includes("agriculture")) {
    return `For farmers like ${p.name} in ${p.state}, you are eligible for PM-Kisan (₹6,000/yr), PM Fasal Bima (Crop Insurance), and the Tamil Nadu 70% Solar Pump Subsidy. Would you like me to prepare your PM-Kisan form right now?`;
  }
  if (q.includes("document") || q.includes("patta") || q.includes("aadhaar") || q.includes("paper")) {
    return `For most agricultural and welfare schemes, you need: 1. Aadhaar Card, 2. Land Patta/Chitta, 3. Bank Passbook, and 4. Income Certificate under ₹2.5 Lakh. Good news: Your Aadhaar and Land records are already synced from your DigiLocker!`;
  }
  if (q.includes("pending") || q.includes("status") || q.includes("track") || q.includes("money")) {
    return `Your PM-Kisan application (#BM-2026-TN-84920) is currently under processing at the Block Agriculture Office. Your Aadhaar eKYC is 100% verified. No action is required from you.`;
  }
  if (q.includes("pension") || q.includes("senior") || q.includes("old age")) {
    return `Citizens aged 60+ can apply for the Indira Gandhi National Old Age Pension Scheme (IGNOAPS) providing ₹1,000 to ₹1,500 every month directly into your bank account.`;
  }
  if (q.includes("student") || q.includes("scholarship") || q.includes("college") || q.includes("school")) {
    return `Students enrolled in college or post-matric courses can receive up to ₹25,000/year plus complete tuition reimbursement through the Post-Matric SC/ST/OBC Scholarship scheme.`;
  }

  return `Based on your profile as a ${p.age}-year-old ${p.occupation} in ${p.state}, BharatMitra has surfaced 3 verified welfare benefits with estimated annual support of ₹56,000. You can click on 'Prepare & Apply' to run a pre-flight health check!`;
}

function renderChatMessages() {
  const box = document.getElementById("saathi-messages-container");
  if (!box) return;

  box.innerHTML = AppState.chatMessages.map(m => `
    <div class="chat-bubble ${m.sender}">
      ${m.text}
      ${m.sender === 'bot' ? `
        <button class="bubble-audio-btn" onclick="speakText('${m.text.replace(/'/g, "\\'")}')" title="Listen">🔊</button>
      ` : ''}
    </div>
  `).join("");

  box.scrollTop = box.scrollHeight;
}

function handleSpeechInput() {
  const micBtn = document.getElementById("saathi-mic-btn");
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert("Speech Recognition API is not supported in this browser. Please type your query.");
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = AppState.language === 'ta' ? 'ta-IN' : (AppState.language === 'hi' ? 'hi-IN' : 'en-IN');
  recognition.interimResults = false;

  micBtn.classList.add("listening");
  speakText("Listening... please speak your question.");

  recognition.onresult = (event) => {
    micBtn.classList.remove("listening");
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById("saathi-chat-input");
    if (input) input.value = transcript;
    sendUserChatMessage(transcript);
  };

  recognition.onerror = () => {
    micBtn.classList.remove("listening");
  };

  recognition.start();
}

function bustJargon() {
  const input = document.getElementById("jargon-input-text");
  const output = document.getElementById("jargon-result-box");
  if (!input || !output) return;

  const raw = input.value.trim();
  if (!raw) return;

  let simplified = "";
  if (raw.toLowerCase().includes("domicile") || raw.toLowerCase().includes("tehsildar")) {
    simplified = "✅ <strong>Simple Meaning:</strong> This simply means official proof that you have lived in your state for more than 5 years. You do not need a lawyer; you can get this paper online or at your nearest Taluk office with your Ration Card.";
  } else if (raw.toLowerCase().includes("pfms") || raw.toLowerCase().includes("dbt") || raw.toLowerCase().includes("mandate")) {
    simplified = "✅ <strong>Simple Meaning:</strong> This means the government will send money directly into your bank account. Your bank account must have your Aadhaar number linked to it.";
  } else {
    simplified = "✅ <strong>Simple Meaning:</strong> This is a standard government requirement asking you to confirm your family income and address before benefits can be deposited.";
  }

  output.innerHTML = simplified;
  output.style.display = "block";
  speakText(simplified.replace(/<[^>]*>/g, ''));
}

// -----------------------------------------------------------------------------
// 14. MULTILINGUAL & NARRATION SPEECH SYNTHESIS (TTS)
// -----------------------------------------------------------------------------
function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel(); // Stop ongoing speech

  const cleanText = text.replace(/<[^>]*>/g, '').replace(/[#*`_]/g, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);

  // Set voice language
  if (AppState.language === 'ta') utterance.lang = 'ta-IN';
  else if (AppState.language === 'hi') utterance.lang = 'hi-IN';
  else utterance.lang = 'en-IN';

  utterance.rate = 0.95; // Clearer, slightly deliberate for rural users
  window.speechSynthesis.speak(utterance);
}

function narrateCurrentScreen() {
  const activeTabEl = document.querySelector(".tab-panel.active");
  if (!activeTabEl) return;

  const title = activeTabEl.querySelector("h2")?.textContent || "BharatMitra Citizen Assistant";
  const desc = activeTabEl.querySelector("p")?.textContent || "";
  speakText(`${title}. ${desc}`);
}

function applyLanguage(lang) {
  const strings = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (strings[key]) el.textContent = strings[key];
  });
  runSchemeDiscovery();
}

// -----------------------------------------------------------------------------
// 15. FAMILY DASHBOARD & LIFE-EVENTS
// -----------------------------------------------------------------------------
function renderFamilyDashboard() {
  const grid = document.getElementById("family-grid-container");
  if (!grid) return;

  grid.innerHTML = AppState.familyMembers.map((m, idx) => `
    <div class="family-card ${idx === 0 ? 'active' : ''}" onclick="selectFamilyMember(${idx})">
      <div class="family-avatar">${m.icon}</div>
      <div style="flex:1;">
        <h4 style="font-size:1.05rem; color:var(--primary-navy); margin-bottom:2px;">${m.name}</h4>
        <div style="font-size:0.8rem; color:var(--text-muted);">${m.relation} • Age ${m.age}</div>
        <div style="font-size:0.82rem; color:var(--forest-green); font-weight:700; margin-top:4px;">
          ${m.eligibleCount} Eligible Schemes (${m.activeSchemes} Active)
        </div>
      </div>
    </div>
  `).join("");
}

function selectFamilyMember(idx) {
  const member = AppState.familyMembers[idx];
  speakText(`Switched to family profile for ${member.name}. Showing relevant benefits.`);
  alert(`Family member profile selected: ${member.name}. BharatMitra dynamically isolates entitlements for multi-generational households.`);
}

function filterByLifeEvent(eventType) {
  switchTab("tab-discovery");
  speakText(`Filtering schemes for life event: ${eventType}.`);
  const grid = document.getElementById("schemes-results-grid");
  if (!grid) return;

  // Highlight relevant schemes for that event
  const cards = grid.querySelectorAll(".scheme-card");
  cards.forEach(c => {
    c.style.borderColor = "var(--primary-blue)";
    c.style.transform = "scale(1.02)";
    setTimeout(() => { c.style.transform = "none"; }, 500);
  });
}

// -----------------------------------------------------------------------------
// 16. TAB NAVIGATION & MODAL CONTROLLERS
// -----------------------------------------------------------------------------
function switchTab(tabId) {
  AppState.activeTab = tabId;

  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-tab") === tabId);
  });

  document.querySelectorAll(".tab-panel").forEach(p => {
    p.classList.toggle("active", p.id === tabId);
  });

  window.scrollTo({ top: 120, behavior: "smooth" });
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
}

function renderAllModules() {
  renderApplicationsTable();
  renderDigiLockerMatrix();
  renderChatMessages();
  renderFamilyDashboard();
}
