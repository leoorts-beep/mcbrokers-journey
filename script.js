// ── Isotipo SVG (burbuja de diálogo — versión blanca para fondos azules) ───────

const ISOTIPO_COLOR = `
  <svg viewBox="0 0 200 175" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Cola inferior-izquierda -->
    <circle cx="8"   cy="168" r="2.5" fill="rgba(255,255,255,0.15)"/>
    <circle cx="13"  cy="155" r="3.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="20"  cy="140" r="5"   fill="rgba(255,255,255,0.20)"/>
    <circle cx="28"  cy="124" r="7"   fill="rgba(255,255,255,0.22)"/>
    <!-- Fila 5 -->
    <circle cx="46"  cy="110" r="8"   fill="rgba(255,255,255,0.18)"/>
    <circle cx="64"  cy="107" r="10"  fill="rgba(255,255,255,0.22)"/>
    <circle cx="83"  cy="110" r="6"   fill="rgba(255,255,255,0.16)"/>
    <circle cx="96"  cy="112" r="4"   fill="rgba(255,255,255,0.14)"/>
    <!-- Fila 4 -->
    <circle cx="22"  cy="88"  r="7"   fill="rgba(255,255,255,0.18)"/>
    <circle cx="40"  cy="85"  r="9"   fill="rgba(255,255,255,0.22)"/>
    <circle cx="60"  cy="84"  r="8.5" fill="rgba(255,255,255,0.20)"/>
    <circle cx="78"  cy="85"  r="6.5" fill="rgba(255,255,255,0.16)"/>
    <circle cx="92"  cy="87"  r="11"  fill="rgba(255,255,255,0.24)"/>
    <circle cx="112" cy="85"  r="9"   fill="rgba(255,255,255,0.20)"/>
    <circle cx="128" cy="87"  r="4.5" fill="rgba(255,255,255,0.14)"/>
    <circle cx="142" cy="84"  r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="158" cy="83"  r="5.5" fill="rgba(255,255,255,0.14)"/>
    <!-- Fila 3 — la más ancha -->
    <circle cx="38"  cy="57"  r="15"  fill="rgba(255,255,255,0.28)"/>
    <circle cx="75"  cy="54"  r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="98"  cy="52"  r="22"  fill="rgba(255,255,255,0.32)"/>
    <circle cx="128" cy="57"  r="10"  fill="rgba(255,255,255,0.22)"/>
    <circle cx="150" cy="60"  r="18"  fill="rgba(255,255,255,0.26)"/>
    <circle cx="178" cy="55"  r="13"  fill="rgba(255,255,255,0.22)"/>
    <!-- Fila 2 -->
    <circle cx="55"  cy="33"  r="19"  fill="rgba(255,255,255,0.24)"/>
    <circle cx="80"  cy="25"  r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="96"  cy="26"  r="10"  fill="rgba(255,255,255,0.20)"/>
    <circle cx="112" cy="25"  r="4.5" fill="rgba(255,255,255,0.14)"/>
    <circle cx="126" cy="27"  r="10"  fill="rgba(255,255,255,0.20)"/>
    <circle cx="142" cy="25"  r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="158" cy="25"  r="5.5" fill="rgba(255,255,255,0.14)"/>
    <!-- Fila 1 — top -->
    <circle cx="88"  cy="9"   r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="104" cy="6"   r="6.5" fill="rgba(255,255,255,0.16)"/>
    <circle cx="120" cy="9"   r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="136" cy="6"   r="6"   fill="rgba(255,255,255,0.16)"/>
    <circle cx="150" cy="10"  r="4.5" fill="rgba(255,255,255,0.13)"/>
  </svg>
`;

// ── Testimonios de clientes ──────────────────────────────────────────────────

const MCB_TESTIMONIOS = [
  {
    nombre: 'Patricia M.',
    texto: 'En menos de 24 horas me contactaron y me explicaron todo con claridad. ¡Increíble servicio!',
    stars: 5
  },
  {
    nombre: 'Roberto A.',
    texto: 'Pensé que contratar un seguro era complicado. MCBrokers lo hizo facilísimo y conseguí mejor precio.',
    stars: 5
  },
  {
    nombre: 'Claudia R.',
    texto: 'Lo que más me gustó es que nunca sentí que me estaban "vendiendo" — me asesoraron de verdad.',
    stars: 5
  }
];

// ── Definición de pasos ───────────────────────────────────────────────────────

const STEPS = {

  // Landing page — primera pantalla
  landing: {
    id: 'landing',
    type: 'landing'
  },

  // Pantalla de entrada — selección de perfil de cliente
  welcome: {
    id: 'welcome',
    type: 'client-type',
    question: '¿Cómo te describes mejor?',
    hint: 'Así personalizamos tu experiencia desde el inicio.',
    options: [
      { value: 'familia',     label: 'Familia',        desc: 'Quiero proteger a los míos',          emoji: '👨‍👩‍👧' },
      { value: 'profesional', label: 'Profesional',    desc: 'Trabajo duro, cuido lo que construí', emoji: '💼' },
      { value: 'empresa',     label: 'Empresa',        desc: 'Tengo un negocio que proteger',       emoji: '🏢' },
      { value: 'adulto',      label: 'Adulto Mayor',   desc: 'Priorizo mi salud y tranquilidad',    emoji: '🌿' }
    ]
  },

  name: {
    id: 'name', type: 'text',
    section: 'Datos personales', icon: '👤',
    question: '¿Cuál es tu nombre?',
    hint: 'Así te llamaremos durante todo el proceso.',
    placeholder: 'Ej: María González'
  },

  insurance_type: {
    id: 'insurance_type', type: 'single-described',
    section: 'Tu seguro', icon: '🛡️',
    question: '¿Qué te gustaría proteger?',
    hint: 'No hay respuesta incorrecta. Te orientamos en cualquier camino.',
    options: [
      { value: 'auto',  label: '🚗  Mi auto',                 desc: 'Protege tu vehículo contra daños, robo y accidentes' },
      { value: 'vida',  label: '💙  Mi salud y vida',          desc: 'Cuida tu bienestar y el futuro de quienes más quieres' },
      { value: 'ambos', label: '✨  Ambas cosas me interesan', desc: 'Te asesoramos en los dos tipos de seguro' }
    ]
  },

  // Intersticial de confianza
  trust: {
    id: 'trust',
    type: 'trust-screen'
  },

  // ── Rama Auto ──────────────────────────────────────────────────────────────
  auto_brand: {
    id: 'auto_brand', type: 'text',
    section: 'Tu vehículo', icon: '🚗',
    question: '¿Cuál es la marca y modelo de tu auto?',
    hint: 'Escribe el nombre tal como aparece en tus documentos.',
    placeholder: 'Ej: Toyota Corolla'
  },

  auto_year: {
    id: 'auto_year', type: 'single',
    section: 'Tu vehículo', icon: '📅',
    question: '¿De qué año es tu auto?',
    options: [
      { value: '2021+',      label: '2021 o más reciente' },
      { value: '2016-2020',  label: '2016 – 2020' },
      { value: '2010-2015',  label: '2010 – 2015' },
      { value: 'antes-2010', label: 'Antes de 2010' }
    ]
  },

  auto_use: {
    id: 'auto_use', type: 'single',
    section: 'Tu vehículo', icon: '🗺️',
    question: '¿Para qué usas principalmente tu auto?',
    options: [
      { value: 'personal', label: '🏠  Uso personal y familia' },
      { value: 'trabajo',  label: '💼  Traslados al trabajo' },
      { value: 'negocio',  label: '📦  Negocio o reparto' }
    ]
  },

  auto_accidents: {
    id: 'auto_accidents', type: 'single',
    section: 'Tu vehículo', icon: '📋',
    question: '¿Has tenido algún siniestro o reclamación en los últimos 3 años?',
    hint: 'En MCBrokers somos tu aliado, no tu juez. Esta información solo nos ayuda a darte el mejor plan.',
    options: [
      { value: 'ninguno', label: '✅  No, ninguno' },
      { value: 'uno',     label: '1️⃣  Sí, uno' },
      { value: 'varios',  label: '⚠️  Sí, más de uno' }
    ]
  },

  // Selector visual de cobertura
  auto_coverage: {
    id: 'auto_coverage',
    type: 'coverage-visual',
    section: 'Tu vehículo', icon: '🛡️',
    question: '¿Qué protección buscas para tu auto?',
    hint: 'Elige el nivel que más se adapte a ti.',
    options: [
      {
        value: 'basica',
        label: 'Básica',
        badge: 'Económica',
        color: '#2B4FAF',
        covers: ['Daños a terceros', 'Responsabilidad civil', 'Asistencia vial'],
        notCovers: ['Daños propios', 'Robo total']
      },
      {
        value: 'amplia',
        label: 'Amplia',
        badge: 'La más popular',
        color: '#79A73A',
        covers: ['Todo lo de Básica', 'Daños propios', 'Robo parcial'],
        notCovers: ['Robo total']
      },
      {
        value: 'total',
        label: 'Total',
        badge: 'Máxima tranquilidad',
        color: '#1D3885',
        covers: ['Todo lo de Amplia', 'Robo total', 'Gastos médicos', 'Auto sustituto'],
        notCovers: []
      }
    ]
  },

  // ── Rama Vida / Salud ──────────────────────────────────────────────────────
  vida_age: {
    id: 'vida_age', type: 'single',
    section: 'Vida y Salud', icon: '🎂',
    question: '¿En qué rango de edad te encuentras?',
    options: [
      { value: '18-30', label: '18 – 30 años' },
      { value: '31-45', label: '31 – 45 años' },
      { value: '46-60', label: '46 – 60 años' },
      { value: '60+',   label: 'Más de 60 años' }
    ]
  },

  vida_dependents: {
    id: 'vida_dependents', type: 'multi',
    section: 'Vida y Salud', icon: '👨‍👩‍👧',
    question: '¿Quiénes dependen económicamente de ti?',
    hint: 'Puedes seleccionar varias opciones.',
    options: [
      { value: 'hijos',   label: '👧  Hijos' },
      { value: 'pareja',  label: '💑  Pareja o cónyuge' },
      { value: 'padres',  label: '👴  Padres' },
      { value: 'ninguno', label: '🙋  Nadie por ahora' }
    ]
  },

  vida_health: {
    id: 'vida_health', type: 'single',
    section: 'Vida y Salud', icon: '🏥',
    question: '¿Tienes alguna condición de salud preexistente?',
    hint: 'Tu privacidad es lo primero. MCBrokers está certificada ISO 27001 en seguridad de datos.',
    options: [
      { value: 'no',         label: '✅  No, ninguna' },
      { value: 'controlada', label: '💊  Sí, está controlada' },
      { value: 'privado',    label: '🔒  Prefiero no compartirlo' }
    ]
  },

  vida_priority: {
    id: 'vida_priority', type: 'single',
    section: 'Vida y Salud', icon: '⭐',
    question: '¿Qué es lo más importante para ti en tu seguro de salud?',
    options: [
      { value: 'hospitalizacion', label: '🏨  Hospitalización y urgencias' },
      { value: 'especialistas',   label: '👨‍⚕️  Médicos especialistas' },
      { value: 'medicamentos',    label: '💊  Medicamentos y estudios' },
      { value: 'todo',            label: '🌟  Cobertura completa' }
    ]
  },

  vida_budget: {
    id: 'vida_budget', type: 'single',
    section: 'Vida y Salud', icon: '💰',
    question: '¿Cuál es tu presupuesto mensual aproximado para tu seguro?',
    hint: 'Esto nos ayuda a mostrarte opciones reales y accesibles para tu situación.',
    options: [
      { value: 'menos-500',  label: 'Menos de $500 / mes' },
      { value: '500-1500',   label: '$500 – $1,500 / mes' },
      { value: '1500-3000',  label: '$1,500 – $3,000 / mes' },
      { value: 'mas-3000',   label: 'Más de $3,000 / mes' }
    ]
  },

  // Pantalla de carga animada
  loading: {
    id: 'loading',
    type: 'loading-screen'
  },

  // Gráfica de cobertura en el tiempo
  coverage_chart: {
    id: 'coverage_chart',
    type: 'coverage-chart'
  },

  summary: { id: 'summary', type: 'summary' }
};

const COMMON_PATH = ['landing', 'welcome', 'name', 'insurance_type'];
const AUTO_PATH   = ['auto_brand', 'auto_year', 'auto_use', 'auto_accidents', 'auto_coverage'];
const VIDA_PATH   = ['vida_age', 'vida_dependents', 'vida_health', 'vida_priority', 'vida_budget'];

// ── Estado ────────────────────────────────────────────────────────────────────

const state = {
  fullPath: [...COMMON_PATH],
  currentIndex: 0,
  answers: {},
  animating: false
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function currentStep() { return STEPS[state.fullPath[state.currentIndex]]; }
function pause(ms)     { return new Promise(r => setTimeout(r, ms)); }

const NON_QUESTION_TYPES = ['landing', 'client-type', 'welcome', 'trust-screen', 'loading-screen', 'coverage-chart', 'summary'];
function isQuestion(s) { return !NON_QUESTION_TYPES.includes(s.type); }

function progressInfo() {
  const questions = state.fullPath.filter(id => isQuestion(STEPS[id]));
  const idx = questions.indexOf(state.fullPath[state.currentIndex]);
  return { current: idx + 1, total: questions.length, pct: ((idx + 1) / questions.length) * 100 };
}

function getLabelFor(stepId, value) {
  if (!value) return '';
  const step = STEPS[stepId];
  if (!step || !step.options) return value;
  const opt = step.options.find(o => o.value === value);
  return opt ? opt.label : value;
}

function getMultiLabels(stepId, values) {
  if (!values || !values.length) return [];
  return values.map(v => getLabelFor(stepId, v));
}

// ── Construcción de ruta ──────────────────────────────────────────────────────

function buildPath(insuranceType) {
  let path = [...COMMON_PATH, 'trust'];
  if (insuranceType === 'auto')  path = [...path, ...AUTO_PATH];
  if (insuranceType === 'vida')  path = [...path, ...VIDA_PATH];
  if (insuranceType === 'ambos') path = [...path, ...AUTO_PATH, ...VIDA_PATH];
  path.push('loading');
  path.push('coverage_chart');
  path.push('summary');
  state.fullPath = path;
}

// ── Cálculos de perfil ────────────────────────────────────────────────────────

function calcularPerfilRiesgo() {
  const tipo       = state.answers['insurance_type'];
  const cobertura  = state.answers['auto_coverage'];
  const accidentes = state.answers['auto_accidents'];
  const salud      = state.answers['vida_health'];
  const dependientes = state.answers['vida_dependents'] || [];

  let puntos = 0;

  if (cobertura === 'total')   puntos += 3;
  else if (cobertura === 'amplia') puntos += 2;
  else if (cobertura === 'basica') puntos += 1;

  if (accidentes === 'ninguno') puntos += 2;
  else if (accidentes === 'uno') puntos += 1;

  if (tipo === 'vida' || tipo === 'ambos') puntos += 2;
  if (salud === 'no') puntos += 1;

  if (dependientes.length > 0 && !dependientes.includes('ninguno')) puntos += 1;

  const maxPuntos = 9;
  const nivel = Math.round((puntos / maxPuntos) * 100);

  let categoria, descripcion, color, emoji;
  if (nivel >= 75) {
    categoria   = 'Protección Alta';
    descripcion = 'Excelente cobertura para ti y los tuyos';
    color       = '#79A73A';
    emoji       = '✅';
  } else if (nivel >= 45) {
    categoria   = 'Protección Media';
    descripcion = 'Buena base, con oportunidades de mejora';
    color       = '#E8A020';
    emoji       = '⚠️';
  } else {
    categoria   = 'Protección Básica';
    descripcion = 'Podemos ayudarte a mejorar tu cobertura';
    color       = '#A33050';
    emoji       = '🔵';
  }

  return { nivel, categoria, descripcion, color, emoji };
}

function calcularTipoPerfil() {
  const tipo    = state.answers['insurance_type'];
  const cliente = state.answers['client_type'];
  const uso     = state.answers['auto_use'];

  if (cliente === 'empresa') return { tipo: 'Empresarial',     icono: '🏢' };
  if (cliente === 'adulto')  return { tipo: 'Senior Plus',     icono: '🌿' };
  if (tipo === 'ambos')      return { tipo: 'Protección 360°', icono: '🛡️' };
  if (tipo === 'auto' && uso === 'negocio') return { tipo: 'Comercial', icono: '📦' };
  if (tipo === 'vida')       return { tipo: 'Salud y Futuro',  icono: '💙' };
  return { tipo: 'Familiar', icono: '👨‍👩‍👧' };
}

// ── Renderizado principal ─────────────────────────────────────────────────────

function render() {
  const step = currentStep();
  const app  = document.getElementById('app');

  if      (step.type === 'landing')         app.innerHTML = renderLanding();
  else if (step.type === 'client-type')    app.innerHTML = renderClientType(step);
  else if (step.type === 'trust-screen')   app.innerHTML = renderTrustScreen();
  else if (step.type === 'coverage-visual') app.innerHTML = renderCoverageVisual(step);
  else if (step.type === 'loading-screen') app.innerHTML = renderLoadingScreen();
  else if (step.type === 'coverage-chart') app.innerHTML = renderCoverageChart();
  else if (step.type === 'summary')        app.innerHTML = renderSummary();
  else                                     app.innerHTML = renderQuestion(step);

  updateProgress();
  focusInput();

  if (step.type === 'loading-screen')  requestAnimationFrame(startLoadingAnimation);
  if (step.type === 'coverage-chart')  requestAnimationFrame(startChartAnimation);
}

// ── Pantalla 0: Landing ───────────────────────────────────────────────────────

function renderLanding() {
  return `
    <div class="card card--landing">

      <div class="landing-logo">
        <div class="landing-iso-wrap">${ISOTIPO_COLOR}</div>
        <div class="landing-brand-block">
          <span class="landing-brand-name">MCBrokers</span>
          <span class="landing-brand-tag">CREAMOS TRANQUILIDAD</span>
        </div>
      </div>

      <div class="char-scene">
        <img class="char-img char-img--hero"
          src="assets/MCB Branding/PERSONAJES/4.png"
          alt="Familia MCBrokers">
      </div>

      <div class="landing-hero">
        <h1 class="landing-title">Juntos creamos<br>tu tranquilidad</h1>
        <p class="landing-sub">
          Completa este breve perfil y te mostraremos el seguro perfecto
          para ti y tu familia — sin letra chica, con total claridad.
        </p>
      </div>

      <div class="landing-features">
        <div class="landing-feature">
          <span class="landing-feature-icon">⏱️</span>
          <span class="landing-feature-text">Solo 5 minutos</span>
        </div>
        <div class="landing-feature">
          <span class="landing-feature-icon">🔒</span>
          <span class="landing-feature-text">100% confidencial</span>
        </div>
        <div class="landing-feature">
          <span class="landing-feature-icon">🤝</span>
          <span class="landing-feature-text">Sin compromiso</span>
        </div>
      </div>

      <button class="btn btn--landing-cta" onclick="handleNext()">
        Descubrir mi cobertura ideal
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>

      <div class="landing-iso-row">
        <span class="landing-iso-badge">ISO 9001:2015</span>
        <span class="landing-iso-badge">ISO 37001:2016</span>
        <span class="landing-iso-badge">ISO 27001</span>
      </div>
      <p class="landing-iso-issuer">Certificados por ACCM</p>

    </div>
  `;
}

// ── Pantalla 1: Tipo de cliente ───────────────────────────────────────────────

function renderClientType(step) {
  return `
    <div class="card card--welcome">
      <div class="welcome-char-row">
        <img class="char-img char-img--small"
          src="assets/MCB Branding/PERSONAJES/1.png"
          alt="Asesora MCBrokers">
        <div class="welcome-char-bubble">
          <p>¡Hola! Soy tu asesora. En minutos tendrás tu perfil de cobertura ideal.</p>
        </div>
      </div>
      <div class="welcome-body">
        <h1 class="welcome-title">${step.question}</h1>
        <p class="welcome-subtitle">${step.hint}</p>
        <div class="client-type-grid">
          ${step.options.map(opt => `
            <button class="client-type-card" onclick="handleClientType('${opt.value}')">
              <span class="client-type-emoji">${opt.emoji}</span>
              <span class="client-type-label">${opt.label}</span>
              <span class="client-type-desc">${opt.desc}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ── Pantalla 2: Intersticial de confianza ─────────────────────────────────────

function renderTrustScreen() {
  return `
    <div class="card card--trust">
      <div class="trust-char-row">
        <div class="trust-char-col">
          <img class="char-img char-img--medium"
            src="assets/MCB Branding/PERSONAJES/2.png"
            alt="Asesora MCBrokers">
        </div>
        <div class="trust-content-col">
          <div class="trust-stat">
            <span class="trust-number">+500</span>
            <span class="trust-label">familias protegidas en México</span>
          </div>
          <p class="trust-message">
            Más de 40 años de experiencia.<br>
            Auditados y certificados internacionalmente.
          </p>
        </div>
      </div>
      <div class="trust-iso-row">
        <div class="trust-iso-badge">
          <span class="trust-iso-num">ISO<br>9001</span>
          <span class="trust-iso-desc">Calidad</span>
        </div>
        <div class="trust-iso-badge">
          <span class="trust-iso-num">ISO<br>37001</span>
          <span class="trust-iso-desc">Antisoborno</span>
        </div>
        <div class="trust-iso-badge">
          <span class="trust-iso-num">ISO<br>27001</span>
          <span class="trust-iso-desc">Datos seguros</span>
        </div>
      </div>
      <p class="trust-issuer">Emitidos por ACCM</p>
      <div class="trust-actions">
        <button class="btn btn--primary btn--large" onclick="handleNext()">
          Entendido, continuar <span class="btn-arrow">→</span>
        </button>
      </div>
    </div>
  `;
}

// ── Preguntas estándar ────────────────────────────────────────────────────────

function renderQuestion(step) {
  const saved = state.answers[step.id];
  let inputHTML = '';

  if (step.type === 'text') {
    inputHTML = `
      <div class="text-input-wrap">
        <input
          class="text-input" id="textInput" type="text"
          placeholder="${step.placeholder || ''}"
          value="${(saved || '').replace(/"/g, '&quot;')}"
          autocomplete="off" spellcheck="false"
          onkeydown="if(event.key==='Enter') handleNext()"
        />
        <p class="input-error" id="inputError">Por favor escribe tu respuesta antes de continuar.</p>
      </div>
    `;
  }

  if (step.type === 'single' || step.type === 'single-described') {
    const fullWidth = step.options.length <= 3;
    const described = step.type === 'single-described';
    inputHTML = `
      <div class="options-grid ${fullWidth || described ? 'options-grid--full' : ''}">
        ${step.options.map(opt => {
          const sel = saved === opt.value;
          return described ? `
            <button class="option-btn option-btn--described ${sel ? 'selected' : ''}" data-value="${opt.value}"
              onclick="handleSingle(this, '${opt.value}')">
              <div class="option-row">
                <span class="option-label">${opt.label}</span>
                ${checkSVG()}
              </div>
              <span class="option-desc">${opt.desc || ''}</span>
            </button>
          ` : `
            <button class="option-btn ${sel ? 'selected' : ''}" data-value="${opt.value}"
              onclick="handleSingle(this, '${opt.value}')">
              ${opt.label}
              ${checkSVG()}
            </button>
          `;
        }).join('')}
      </div>
      <p class="input-error" id="inputError">Por favor selecciona una opción.</p>
    `;
  }

  if (step.type === 'multi') {
    const selectedArr = saved || [];
    inputHTML = `
      <div class="options-grid options-grid--full">
        ${step.options.map(opt => {
          const sel = selectedArr.includes(opt.value);
          return `
            <button class="option-btn ${sel ? 'selected' : ''}" data-value="${opt.value}"
              onclick="handleMulti(this, '${opt.value}', '${step.id}')">
              ${opt.label}
              ${checkSVG()}
            </button>
          `;
        }).join('')}
      </div>
      <p class="input-error" id="inputError">Por favor selecciona al menos una opción.</p>
    `;
  }

  const showContinue = step.type !== 'single' && step.type !== 'single-described';

  return `
    <div class="card">
      <div class="step-meta">
        <span class="step-icon">${step.icon}</span>
        <span class="step-section">${step.section}</span>
      </div>
      <h2 class="step-question">${step.question}</h2>
      ${step.hint ? `<p class="step-hint">${step.hint}</p>` : ''}
      ${inputHTML}
      <div class="actions">
        ${state.currentIndex > 0
          ? `<button class="btn btn--ghost" onclick="handleBack()">← Volver</button>`
          : `<span></span>`}
        ${showContinue
          ? `<button class="btn btn--primary" onclick="handleNext()">
               Continuar <span class="btn-arrow">→</span>
             </button>`
          : ''}
      </div>
    </div>
  `;
}

// ── Selector visual de cobertura ──────────────────────────────────────────────

function renderCoverageVisual(step) {
  const saved = state.answers[step.id];
  return `
    <div class="card">
      <div class="step-meta">
        <span class="step-icon">${step.icon}</span>
        <span class="step-section">${step.section}</span>
      </div>
      <h2 class="step-question">${step.question}</h2>
      ${step.hint ? `<p class="step-hint">${step.hint}</p>` : ''}
      <div class="coverage-grid">
        ${step.options.map(opt => {
          const sel = saved === opt.value;
          return `
            <div class="coverage-card ${sel ? 'selected' : ''}"
              onclick="handleCoverageSelect(this, '${opt.value}')"
              data-value="${opt.value}">
              ${opt.badge ? `<span class="coverage-badge" style="background:${opt.color}">${opt.badge}</span>` : ''}
              <div class="coverage-level" style="color:${opt.color}">${opt.label}</div>
              <div class="coverage-shield">
                <svg viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="52">
                  <path d="M24 2L4 10v16c0 12.7 8.6 24.6 20 28 11.4-3.4 20-15.3 20-28V10L24 2z"
                    fill="${sel ? opt.color : '#EEF2FB'}"
                    stroke="${opt.color}" stroke-width="2.5"
                    style="transition: fill 200ms"/>
                  <path d="M16 28l6 6 10-12"
                    stroke="${sel ? '#fff' : opt.color}"
                    stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <ul class="coverage-list">
                ${opt.covers.map(c => `<li class="coverage-item coverage-item--yes">✓ ${c}</li>`).join('')}
                ${opt.notCovers.map(c => `<li class="coverage-item coverage-item--no">✗ ${c}</li>`).join('')}
              </ul>
            </div>
          `;
        }).join('')}
      </div>
      <p class="input-error" id="inputError">Por favor selecciona una cobertura.</p>
      <div class="actions">
        <button class="btn btn--ghost" onclick="handleBack()">← Volver</button>
      </div>
    </div>
  `;
}

// ── Pantalla de loading ───────────────────────────────────────────────────────

function renderLoadingScreen() {
  const idx   = Math.floor(Math.random() * MCB_TESTIMONIOS.length);
  const testi = MCB_TESTIMONIOS[idx];
  const stars = '★'.repeat(testi.stars);
  return `
    <div class="card card--loading">
      <div class="loading-circle-wrap">
        <svg class="loading-circle-svg" viewBox="0 0 100 100" width="120" height="120">
          <circle cx="50" cy="50" r="42" fill="none" stroke="var(--mcb-gris-borde)" stroke-width="6"/>
          <circle cx="50" cy="50" r="42" fill="none" stroke="var(--mcb-azul)" stroke-width="6"
            stroke-linecap="round"
            stroke-dasharray="264"
            stroke-dashoffset="264"
            transform="rotate(-90 50 50)"
            id="loadingArc"/>
        </svg>
        <div class="loading-pct" id="loadingPct">0%</div>
      </div>
      <p class="loading-title">Construyendo tu plan de tranquilidad…</p>
      <div class="loading-char-wrap">
        <img class="char-img char-img--medium"
          src="assets/MCB Branding/PERSONAJES/5.png"
          alt="Pareja MCBrokers">
      </div>
      <div class="loading-social">
        <span class="loading-social-num">+500</span>
        <span class="loading-social-label">familias ya confían en MCBrokers</span>
      </div>
      <div class="loading-testi">
        <div class="loading-stars">${stars}</div>
        <p class="loading-testi-text">"${testi.texto}"</p>
        <p class="loading-testi-name">— ${testi.nombre}</p>
      </div>
    </div>
  `;
}

function startLoadingAnimation() {
  const arc   = document.getElementById('loadingArc');
  const pctEl = document.getElementById('loadingPct');
  if (!arc || !pctEl) return;

  const totalMs     = 3600;
  const circumference = 264;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const pct     = Math.min(elapsed / totalMs, 1);
    const offset  = circumference * (1 - pct);
    arc.setAttribute('stroke-dashoffset', offset);
    pctEl.textContent = Math.round(pct * 100) + '%';

    // Cambiar color del arco según avance
    if (pct > 0.66)      arc.setAttribute('stroke', '#79A73A');
    else if (pct > 0.33) arc.setAttribute('stroke', '#E8A020');

    if (pct < 1) {
      requestAnimationFrame(step);
    } else {
      setTimeout(() => goTo(state.currentIndex + 1, 'forward'), 450);
    }
  }
  requestAnimationFrame(step);
}

// ── Gráfica de cobertura en el tiempo ────────────────────────────────────────

function renderCoverageChart() {
  const name  = (state.answers['name'] || 'Cliente').split(' ')[0];
  const tipo  = state.answers['insurance_type'];

  const today      = new Date();
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + 30);
  const dateStr = targetDate.toLocaleDateString('es-MX', { day: 'numeric', month: 'long' });
  const todayStr = today.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });

  const tipoLabel = tipo === 'auto'
    ? 'tu auto'
    : tipo === 'vida'
    ? 'tu salud y vida'
    : 'tu auto y tu salud';

  return `
    <div class="card">
      <h2 class="coverage-chart-title">
        El plan que <em style="font-style:normal;color:var(--mcb-verde)">transforma</em><br>tu tranquilidad
      </h2>
      <p class="coverage-chart-sub">
        Estimamos que estarás <strong style="color:var(--mcb-azul)">100% protegido en ${tipoLabel}</strong><br>
        a partir del <strong style="color:var(--mcb-azul)">${dateStr}</strong>
      </p>

      <div class="cov-chart-wrap">
        <div class="cov-chart-label-y">
          <span>100%</span>
          <span>50%</span>
          <span>0%</span>
        </div>
        <svg class="cov-chart-svg" viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" overflow="visible">
          <defs>
            <linearGradient id="covGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stop-color="#A33050"/>
              <stop offset="40%"  stop-color="#E8A020"/>
              <stop offset="100%" stop-color="#79A73A"/>
            </linearGradient>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stop-color="#79A73A" stop-opacity="0.18"/>
              <stop offset="100%" stop-color="#79A73A" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <!-- Líneas de referencia -->
          <line x1="20" y1="60" x2="265" y2="60" stroke="#DDE0EE" stroke-width="1" stroke-dasharray="4,3"/>
          <!-- Área bajo la curva -->
          <path d="M20,115 C60,112 100,90 155,38 C190,15 230,7 262,5 L262,118 L20,118 Z"
            fill="url(#areaGrad)" opacity="0" id="covArea"
            style="transition: opacity 400ms ease 200ms"/>
          <!-- Línea principal -->
          <path d="M20,115 C60,112 100,90 155,38 C190,15 230,7 262,5"
            stroke="url(#covGrad)" stroke-width="3.5" fill="none"
            stroke-linecap="round"
            stroke-dasharray="420" stroke-dashoffset="420"
            id="covLine"/>
          <!-- Punto inicio -->
          <circle cx="20" cy="115" r="5" fill="white" stroke="#A33050" stroke-width="2" opacity="0" id="covDotStart"/>
          <!-- Punto final (meta) -->
          <circle cx="262" cy="5" r="6" fill="white" stroke="#79A73A" stroke-width="2.5" opacity="0" id="covDot"/>
          <!-- Tooltip meta -->
          <rect x="218" y="-16" width="58" height="19" rx="5" fill="#2B4FAF" opacity="0" id="covTooltipBg"/>
          <text x="247" y="-3" text-anchor="middle" font-size="9" fill="white" font-weight="700"
            font-family="Poppins, sans-serif" opacity="0" id="covTooltipTxt">100% protegido</text>
        </svg>
        <div class="cov-chart-label-x">
          <span>${todayStr}</span>
          <span>${dateStr}</span>
        </div>
      </div>

      <p class="cov-chart-disclaimer">*Estimación basada en el plan más adecuado para tu perfil. Los tiempos varían según la aseguradora.</p>

      <div class="actions" style="justify-content:center; margin-top:28px;">
        <button class="btn btn--primary btn--large" onclick="handleNext()">
          Ver mi resumen completo <span class="btn-arrow">→</span>
        </button>
      </div>
    </div>
  `;
}

function startChartAnimation() {
  const line       = document.getElementById('covLine');
  const dot        = document.getElementById('covDot');
  const dotStart   = document.getElementById('covDotStart');
  const area       = document.getElementById('covArea');
  const tooltipBg  = document.getElementById('covTooltipBg');
  const tooltipTxt = document.getElementById('covTooltipTxt');
  if (!line) return;

  const duration = 1600;
  let start = null;

  function step(ts) {
    if (!start) start = ts;
    const pct  = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - pct, 3);

    line.setAttribute('stroke-dashoffset', 420 * (1 - ease));

    if (pct > 0.05 && dotStart) dotStart.setAttribute('opacity', '1');

    if (pct >= 1) {
      if (dot)        dot.setAttribute('opacity', '1');
      if (area)       area.setAttribute('opacity', '1');
      if (tooltipBg)  tooltipBg.setAttribute('opacity', '1');
      if (tooltipTxt) tooltipTxt.setAttribute('opacity', '1');
    } else {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

// ── Resumen final con widgets ─────────────────────────────────────────────────

function renderSummary() {
  const name      = (state.answers['name'] || 'Cliente').split(' ')[0];
  const tipo      = state.answers['insurance_type'];
  const perfil    = calcularPerfilRiesgo();
  const tipoPerfil = calcularTipoPerfil();
  const sliderPct = perfil.nivel;

  return `
    <div class="card summary-card">

      <div class="summary-hero-row">
        <div class="summary-hero-text">
          <!-- Check animado -->
          <div class="summary-check">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M7 17l7 7 13-13" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="summary-brand-tag">MCBrokers — CREAMOS TRANQUILIDAD</p>
          <h2 class="summary-title">¡Listo, ${name}!<br>Aquí está tu perfil.</h2>
          <p class="summary-subtitle">
            Tu asesor revisará todo esto<br>
            y te contactará en menos de 24 horas.
          </p>
        </div>
        <div class="summary-char-wrap">
          <img class="char-img char-img--medium"
            src="assets/MCB Branding/PERSONAJES/7.png"
            alt="MCBrokers">
        </div>
      </div>

      <!-- ★ Widget: Perfil de tranquilidad ★ -->
      <div class="tranquilidad-widget">
        <div class="tranquilidad-header">
          <span class="tranquilidad-icon">${tipoPerfil.icono}</span>
          <div>
            <div class="tranquilidad-tipo">Perfil: ${tipoPerfil.tipo}</div>
            <div class="tranquilidad-sub">Nivel de protección estimado</div>
          </div>
        </div>

        <!-- Slider de nivel de protección -->
        <div class="prot-slider-wrap">
          <div class="prot-slider-bar">
            <div class="prot-slider-fill" id="protFill" style="width:0%; background:${perfil.color}"></div>
            <div class="prot-slider-marker" id="protMarker" style="left:0%">
              <div class="prot-slider-tooltip" style="background:${perfil.color}" id="protTooltip">0%</div>
            </div>
          </div>
          <div class="prot-slider-labels">
            <span>Básica</span><span>Media</span><span>Alta</span><span>Total</span>
          </div>
        </div>

        <!-- Badge de categoría -->
        <div class="prot-badge" style="border-color:${perfil.color}; color:${perfil.color}; background:${perfil.color}18">
          ${perfil.emoji}&nbsp;<strong>${perfil.categoria}</strong> — ${perfil.descripcion}
        </div>

        <!-- Profile cards -->
        <div class="prot-cards">
          <div class="prot-card">
            <span class="prot-card-icon">🛡️</span>
            <span class="prot-card-label">Tipo de seguro</span>
            <span class="prot-card-value">${getLabelFor('insurance_type', tipo).replace(/[🚗💙✨]\s+/g, '')}</span>
          </div>
          ${state.answers['auto_coverage'] ? `
          <div class="prot-card">
            <span class="prot-card-icon">⚙️</span>
            <span class="prot-card-label">Cobertura auto</span>
            <span class="prot-card-value">${getLabelFor('auto_coverage', state.answers['auto_coverage'])}</span>
          </div>` : ''}
          ${state.answers['vida_budget'] ? `
          <div class="prot-card">
            <span class="prot-card-icon">💰</span>
            <span class="prot-card-label">Presupuesto</span>
            <span class="prot-card-value">${getLabelFor('vida_budget', state.answers['vida_budget'])}</span>
          </div>` : ''}
          <div class="prot-card">
            <span class="prot-card-icon">📋</span>
            <span class="prot-card-label">Perfil</span>
            <span class="prot-card-value">${tipoPerfil.tipo}</span>
          </div>
        </div>
      </div>

      <!-- Datos recopilados -->
      <div class="summary-section">
        <p class="summary-section-title">👤 Datos personales</p>
        ${summaryRow('Nombre', [state.answers['name']])}
        ${summaryRow('Seguro de interés', [getLabelFor('insurance_type', tipo).replace(/[🚗💙✨]\s+/g,'')])}
      </div>

      ${(tipo === 'auto' || tipo === 'ambos') ? `
        <div class="summary-section">
          <p class="summary-section-title">🚗 Seguro de Auto</p>
          ${summaryRow('Vehículo', [state.answers['auto_brand']])}
          ${summaryRow('Año', [getLabelFor('auto_year', state.answers['auto_year'])])}
          ${summaryRow('Uso', [getLabelFor('auto_use', state.answers['auto_use']).replace(/[🏠💼📦]\s+/g,'')])}
          ${summaryRow('Siniestros previos', [getLabelFor('auto_accidents', state.answers['auto_accidents']).replace(/[✅1️⃣⚠️]\s+/g,'')])}
          ${summaryRow('Cobertura deseada', [getLabelFor('auto_coverage', state.answers['auto_coverage'])])}
        </div>
      ` : ''}

      ${(tipo === 'vida' || tipo === 'ambos') ? `
        <div class="summary-section">
          <p class="summary-section-title">💙 Vida y Gastos Médicos</p>
          ${summaryRow('Rango de edad', [getLabelFor('vida_age', state.answers['vida_age'])])}
          ${summaryRow('Dependientes', getMultiLabels('vida_dependents', state.answers['vida_dependents']).map(l => l.replace(/[👧💑👴🙋]\s+/g,'')))}
          ${summaryRow('Salud preexistente', [getLabelFor('vida_health', state.answers['vida_health']).replace(/[✅💊🔒]\s+/g,'')])}
          ${summaryRow('Prioridad', [getLabelFor('vida_priority', state.answers['vida_priority']).replace(/[🏨👨‍⚕️💊🌟]\s+/g,'')])}
          ${summaryRow('Presupuesto mensual', [getLabelFor('vida_budget', state.answers['vida_budget'])])}
        </div>
      ` : ''}

      <!-- Nota de contacto -->
      <div class="summary-note">
        📞 Un asesor de <strong>MCBrokers</strong> revisará tu perfil y te contactará en menos de 24 horas.
        Somos tu aliado, no tu vendedor.
        <div class="summary-iso">
          <span class="iso-badge">ISO 9001:2015</span>
          <span class="iso-badge">ISO 37001:2016</span>
          <span class="iso-badge">ISO 27001</span>
        </div>
      </div>

      <div class="summary-actions">
        <button class="btn btn--outline" onclick="window.print()">🖨️ Imprimir resumen</button>
        <button class="btn btn--primary" onclick="handleRestart()">Iniciar de nuevo</button>
      </div>
    </div>
  `;
}

function animateSlider(targetPct) {
  const fill    = document.getElementById('protFill');
  const marker  = document.getElementById('protMarker');
  const tooltip = document.getElementById('protTooltip');
  if (!fill) return;

  const duration = 900;
  let start = null;

  function step(ts) {
    if (!start) start = ts;
    const pct  = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - pct, 3);
    const cur  = Math.round(ease * targetPct);

    fill.style.width       = cur + '%';
    marker.style.left      = cur + '%';
    if (tooltip) tooltip.textContent = cur + '%';

    if (pct < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function checkSVG() {
  return `
    <svg class="option-check" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="rgba(255,255,255,0.22)"/>
      <path d="M5 9l3 3 5-5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function summaryRow(label, values) {
  const filtered = (values || []).filter(Boolean);
  if (!filtered.length) return '';
  const tags = filtered.map(v => `<span class="summary-tag">${v}</span>`).join('');
  return `
    <div class="summary-row">
      <span class="summary-row-label">${label}</span>
      <span class="summary-row-value">${tags}</span>
    </div>
  `;
}

// ── Progreso ──────────────────────────────────────────────────────────────────

function updateProgress() {
  const container = document.getElementById('progressContainer');
  const step      = currentStep();

  if (!isQuestion(step)) { container.style.display = 'none'; return; }

  container.style.display = 'block';
  const { current, total, pct } = progressInfo();
  document.getElementById('progressSection').textContent = step.section || 'Paso';
  document.getElementById('progressCount').textContent   = `${current} de ${total}`;
  document.getElementById('progressFill').style.width    = `${pct}%`;
}

// ── Manejadores de eventos ────────────────────────────────────────────────────

function handleClientType(value) {
  if (state.animating) return;
  state.answers['client_type'] = value;
  goTo(state.currentIndex + 1, 'forward');
}

function handleBack() {
  if (state.currentIndex > 0) goTo(state.currentIndex - 1, 'backward');
}

function handleNext() {
  const step = currentStep();

  // Pasos que avanzan directo sin validación
  if (['landing', 'trust-screen', 'loading-screen', 'coverage-chart'].includes(step.type)) {
    goTo(state.currentIndex + 1, 'forward');
    return;
  }

  if (!validate(step)) return;
  save(step);
  if (state.currentIndex < state.fullPath.length - 1) {
    goTo(state.currentIndex + 1, 'forward');
  }
}

function handleSingle(btn, value) {
  if (state.animating) return;
  const step = currentStep();

  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.answers[step.id] = value;

  if (step.id === 'insurance_type') buildPath(value);

  setTimeout(() => {
    if (state.currentIndex < state.fullPath.length - 1) {
      goTo(state.currentIndex + 1, 'forward');
    }
  }, 360);
}

function handleCoverageSelect(card, value) {
  if (state.animating) return;
  const step = currentStep();

  document.querySelectorAll('.coverage-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  state.answers[step.id] = value;

  // Re-render shield SVGs para reflejar el estado seleccionado
  const shields = document.querySelectorAll('.coverage-shield svg path:first-child');
  document.querySelectorAll('.coverage-card').forEach(c => {
    const optValue = c.dataset.value;
    const opt = step.options.find(o => o.value === optValue);
    if (!opt) return;
    const isSelected = optValue === value;
    const shieldPath  = c.querySelector('.coverage-shield svg path:first-child');
    const checkPath   = c.querySelector('.coverage-shield svg path:last-child');
    if (shieldPath) shieldPath.setAttribute('fill', isSelected ? opt.color : '#EEF2FB');
    if (checkPath)  checkPath.setAttribute('stroke', isSelected ? '#fff' : opt.color);
  });

  setTimeout(() => {
    if (state.currentIndex < state.fullPath.length - 1) {
      goTo(state.currentIndex + 1, 'forward');
    }
  }, 380);
}

function handleMulti(btn, value, stepId) {
  btn.classList.toggle('selected');

  if (value === 'ninguno' && btn.classList.contains('selected')) {
    document.querySelectorAll('.option-btn').forEach(b => {
      if (b.dataset.value !== 'ninguno') b.classList.remove('selected');
    });
    state.answers[stepId] = ['ninguno'];
    return;
  }

  if (value !== 'ninguno') {
    const ningunoBtn = document.querySelector('.option-btn[data-value="ninguno"]');
    if (ningunoBtn) ningunoBtn.classList.remove('selected');
  }

  state.answers[stepId] = Array.from(document.querySelectorAll('.option-btn.selected'))
    .map(b => b.dataset.value);
}

function handleRestart() {
  Object.assign(state, {
    fullPath: [...COMMON_PATH],
    currentIndex: 0,
    answers: {},
    animating: false
  });
  render();
}

// ── Validación ────────────────────────────────────────────────────────────────

function validate(step) {
  const err = document.getElementById('inputError');
  if (step.type === 'text') {
    const inp = document.getElementById('textInput');
    if (!inp || !inp.value.trim()) {
      if (err) err.classList.add('visible');
      if (inp) inp.focus();
      return false;
    }
  }
  if (step.type === 'multi') {
    if (!document.querySelector('.option-btn.selected')) {
      if (err) err.classList.add('visible');
      return false;
    }
  }
  if (step.type === 'coverage-visual') {
    if (!state.answers[step.id]) {
      if (err) err.classList.add('visible');
      return false;
    }
  }
  if (err) err.classList.remove('visible');
  return true;
}

function save(step) {
  if (step.type === 'text') {
    const inp = document.getElementById('textInput');
    if (inp) state.answers[step.id] = inp.value.trim();
  }
}

// ── Animación y navegación ────────────────────────────────────────────────────

async function goTo(newIndex, direction) {
  if (state.animating) return;
  state.animating = true;

  const app     = document.getElementById('app');
  const current = app.querySelector('.card');

  if (current) {
    const x = direction === 'forward' ? '-42px' : '42px';
    current.style.transition = 'transform 160ms ease-in, opacity 160ms ease-in';
    current.style.transform  = `translateX(${x})`;
    current.style.opacity    = '0';
    await pause(160);
  }

  state.currentIndex = newIndex;
  render();

  const next = app.querySelector('.card');
  if (next) {
    const x = direction === 'forward' ? '42px' : '-42px';
    next.style.transform  = `translateX(${x})`;
    next.style.opacity    = '0';
    next.style.transition = 'none';
    void next.offsetWidth;
    next.style.transition = 'transform 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 280ms ease-out';
    next.style.transform  = 'translateX(0)';
    next.style.opacity    = '1';
    await pause(320);
    next.style.transition = '';
    next.style.transform  = '';
    next.style.opacity    = '';
  }

  state.animating = false;

  // Animar slider del summary después de que la tarjeta entra
  if (currentStep().type === 'summary') {
    const perfil = calcularPerfilRiesgo();
    setTimeout(() => animateSlider(perfil.nivel), 200);
  }
}

function focusInput() {
  const inp = document.getElementById('textInput');
  if (inp) inp.focus();
}

// ── Inicio ────────────────────────────────────────────────────────────────────

render();
