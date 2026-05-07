// ── Isotipo SVG ───────────────────────────────────────────────────────────────

const ISOTIPO_COLOR = `
  <svg viewBox="0 0 200 175" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8"   cy="168" r="2.5" fill="rgba(255,255,255,0.15)"/>
    <circle cx="13"  cy="155" r="3.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="20"  cy="140" r="5"   fill="rgba(255,255,255,0.20)"/>
    <circle cx="28"  cy="124" r="7"   fill="rgba(255,255,255,0.22)"/>
    <circle cx="46"  cy="110" r="8"   fill="rgba(255,255,255,0.18)"/>
    <circle cx="64"  cy="107" r="10"  fill="rgba(255,255,255,0.22)"/>
    <circle cx="83"  cy="110" r="6"   fill="rgba(255,255,255,0.16)"/>
    <circle cx="96"  cy="112" r="4"   fill="rgba(255,255,255,0.14)"/>
    <circle cx="22"  cy="88"  r="7"   fill="rgba(255,255,255,0.18)"/>
    <circle cx="40"  cy="85"  r="9"   fill="rgba(255,255,255,0.22)"/>
    <circle cx="60"  cy="84"  r="8.5" fill="rgba(255,255,255,0.20)"/>
    <circle cx="78"  cy="85"  r="6.5" fill="rgba(255,255,255,0.16)"/>
    <circle cx="92"  cy="87"  r="11"  fill="rgba(255,255,255,0.24)"/>
    <circle cx="112" cy="85"  r="9"   fill="rgba(255,255,255,0.20)"/>
    <circle cx="128" cy="87"  r="4.5" fill="rgba(255,255,255,0.14)"/>
    <circle cx="142" cy="84"  r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="158" cy="83"  r="5.5" fill="rgba(255,255,255,0.14)"/>
    <circle cx="38"  cy="57"  r="15"  fill="rgba(255,255,255,0.28)"/>
    <circle cx="75"  cy="54"  r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="98"  cy="52"  r="22"  fill="rgba(255,255,255,0.32)"/>
    <circle cx="128" cy="57"  r="10"  fill="rgba(255,255,255,0.22)"/>
    <circle cx="150" cy="60"  r="18"  fill="rgba(255,255,255,0.26)"/>
    <circle cx="178" cy="55"  r="13"  fill="rgba(255,255,255,0.22)"/>
    <circle cx="55"  cy="33"  r="19"  fill="rgba(255,255,255,0.24)"/>
    <circle cx="80"  cy="25"  r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="96"  cy="26"  r="10"  fill="rgba(255,255,255,0.20)"/>
    <circle cx="112" cy="25"  r="4.5" fill="rgba(255,255,255,0.14)"/>
    <circle cx="126" cy="27"  r="10"  fill="rgba(255,255,255,0.20)"/>
    <circle cx="142" cy="25"  r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="158" cy="25"  r="5.5" fill="rgba(255,255,255,0.14)"/>
    <circle cx="88"  cy="9"   r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="104" cy="6"   r="6.5" fill="rgba(255,255,255,0.16)"/>
    <circle cx="120" cy="9"   r="7.5" fill="rgba(255,255,255,0.18)"/>
    <circle cx="136" cy="6"   r="6"   fill="rgba(255,255,255,0.16)"/>
    <circle cx="150" cy="10"  r="4.5" fill="rgba(255,255,255,0.13)"/>
  </svg>
`;

// ── Testimonios ───────────────────────────────────────────────────────────────

const MCB_TESTIMONIOS = [
  { nombre: 'Patricia M.', texto: 'En menos de 24 horas me contactaron y me explicaron todo con claridad. ¡Increíble servicio!', stars: 5 },
  { nombre: 'Roberto A.', texto: 'Pensé que contratar un seguro era complicado. MCBrokers lo hizo facilísimo y conseguí mejor precio.', stars: 5 },
  { nombre: 'Claudia R.', texto: 'Lo que más me gustó es que nunca sentí que me estaban "vendiendo" — me asesoraron de verdad.', stars: 5 }
];

// ── Opciones dinámicas de seguro por tipo de cliente ─────────────────────────

const INSURANCE_LABELS = {
  auto:     '🚗  Mi auto',
  gmm:      '🏥  Gastos Médicos Mayores',
  vida:     '💙  Vida y Protección',
  casa:     '🏠  Casa y Patrimonio',
  mascotas: '🐾  Mascotas',
  multi:    '✨  Varias coberturas',
  ambos:    '✨  Auto y Vida'
};

function getInsuranceOptions(clientType) {
  const opts = {
    familia: [
      { value: 'auto',     label: '🚗  Seguro de Auto',                        desc: 'Mi auto y los de los míos, siempre protegidos' },
      { value: 'gmm',      label: '🏥  Seguro de Gastos Médicos Mayores',       desc: 'La salud de mi familia, lo más valioso que tengo' },
      { value: 'vida',     label: '💙  Seguro de Vida y Protección',            desc: 'La vida y el futuro de los míos, asegurados' },
      { value: 'casa',     label: '🏠  Seguro de Hogar',                        desc: 'Mi casa y patrimonio, el espacio donde vive todo lo que importa' },
      { value: 'mascotas', label: '🐾  Seguro para Mascotas',                   desc: 'Para que tu compañero siempre esté atendido' },
      { value: 'multi',    label: '✨  Varias coberturas',                      desc: 'Me interesan varias opciones, quiero orientación' }
    ],
    profesional: [
      { value: 'auto',     label: '🚗  Seguro de Auto',                        desc: 'Mi auto, cubierto para uso personal o laboral' },
      { value: 'gmm',      label: '🏥  Seguro de Gastos Médicos Mayores',       desc: 'Mi salud, el activo más importante de mi carrera' },
      { value: 'vida',     label: '💙  Seguro de Vida y Protección',            desc: 'Mi vida, mis ingresos y quienes dependen de mí' },
      { value: 'casa',     label: '🏠  Seguro de Hogar',                        desc: 'Mi casa o departamento, el patrimonio que construí' },
      { value: 'mascotas', label: '🐾  Seguro para Mascotas',                   desc: 'Para que tu compañero siempre esté atendido' },
      { value: 'multi',    label: '✨  Varias coberturas',                      desc: 'Varias cosas, quiero orientación de un experto' }
    ],
    empresa: [
      { value: 'gmm',      label: '🏥  Seguro de Gastos Médicos Mayores Colectivo', desc: 'El mejor beneficio de salud para mi equipo' },
      { value: 'auto',     label: '🚗  Seguro de Flotilla Vehicular',               desc: 'Todos los vehículos de la empresa, protegidos' },
      { value: 'vida',     label: '💙  Seguro de Vida Colectivo',                   desc: 'Un beneficio que cuida y motiva a mis colaboradores' },
      { value: 'casa',     label: '🏭  Seguro de Activos e Instalaciones',          desc: 'Los bienes y propiedades de la empresa, seguros' },
      { value: 'multi',    label: '✨  Varias coberturas',                          desc: 'Necesitamos un diagnóstico integral para la empresa' }
    ],
    adulto: [
      { value: 'gmm',      label: '🏥  Seguro de Gastos Médicos Mayores', desc: 'Mi salud es lo primero' },
      { value: 'vida',     label: '💙  Seguro de Vida y Protección',      desc: 'Proteger lo que construí toda una vida' },
      { value: 'casa',     label: '🏠  Seguro de Hogar',                  desc: 'Mi casa y mis bienes, el patrimonio de toda una vida' },
      { value: 'mascotas', label: '🐾  Seguro para Mascotas',             desc: 'Para que tu compañero siempre esté atendido' }
    ]
  };
  return opts[clientType] || opts.familia;
}

// ── Pasos del journey ─────────────────────────────────────────────────────────

const STEPS = {

  // ── Pantallas especiales ───────────────────────────────────────────────────

  landing: { id: 'landing', type: 'landing' },

  welcome: {
    id: 'welcome', type: 'client-type',
    question: '¿Cómo te describes mejor?',
    hint: 'Así personalizamos tu experiencia desde el inicio.',
    options: [
      { value: 'familia',     label: 'Familia',       desc: 'Quiero proteger a los míos',          emoji: '👨‍👩‍👧' },
      { value: 'profesional', label: 'Profesional',   desc: 'Trabajo duro, cuido lo que construí', emoji: '💼' },
      { value: 'empresa',     label: 'Empresa',       desc: 'Tengo un negocio que proteger',       emoji: '🏢' },
      { value: 'adulto',      label: 'Adulto Mayor',  desc: 'Priorizo mi salud y tranquilidad',    emoji: '🌿' }
    ]
  },

  name: {
    id: 'name', type: 'text',
    section: 'Datos personales', icon: '👤',
    question: '¿Cuál es tu nombre?',
    hint: 'Así te llamaremos durante todo el proceso.',
    placeholder: 'Ej: María González'
  },

  trust:          { id: 'trust',          type: 'trust-screen'    },
  loading:        { id: 'loading',        type: 'loading-screen'  },
  coverage_chart: { id: 'coverage_chart', type: 'coverage-chart'  },
  contacto:       { id: 'contacto',       type: 'contact-capture' },
  summary:        { id: 'summary',        type: 'summary'         },

  // ── Selección de ramo (opciones dinámicas según tipo de cliente) ───────────

  insurance_type: {
    id: 'insurance_type', type: 'single-described',
    section: 'Tu seguro', icon: '🛡️',
    question: '¿Qué quieres proteger?',
    hint: 'No hay respuesta incorrecta. Te orientamos en cualquier camino.',
    options: [] // se inyectan dinámicamente en render()
  },

  // ── BLOQUE PERFIL: FAMILIA ─────────────────────────────────────────────────

  fam_composicion: {
    id: 'fam_composicion', type: 'single',
    section: 'Tu familia', icon: '👨‍👩‍👧',
    question: '¿Cuántas personas conforman tu familia?',
    options: [
      { value: 'solo',      label: '👫  Solo yo (o yo y mi pareja)' },
      { value: 'pequena',   label: '👨‍👩‍👦  Somos 3 o 4 personas' },
      { value: 'grande',    label: '👨‍👩‍👧‍👦  Somos 5 o más personas' },
      { value: 'extendida', label: '🏡  Familia extendida (abuelos, padres, etc.)' }
    ]
  },

  fam_etapa: {
    id: 'fam_etapa', type: 'single',
    section: 'Tu familia', icon: '🌱',
    question: '¿En qué etapa está tu familia hoy?',
    options: [
      { value: 'nueva',              label: '🌱  Recién formada o planeando crecer' },
      { value: 'hijos_pequenos',     label: '👶  Hijos pequeños en casa (0–12 años)' },
      { value: 'hijos_adolescentes', label: '🎒  Hijos adolescentes (13–18 años)' },
      { value: 'independientes',     label: '🎓  Mis hijos ya son independientes' }
    ]
  },

  fam_preocupacion: {
    id: 'fam_preocupacion', type: 'single',
    section: 'Tu familia', icon: '❤️',
    question: '¿Cuál es tu mayor preocupación para tu familia?',
    hint: 'Esto nos ayuda a priorizar lo que más importa.',
    options: [
      { value: 'ingresos',   label: '😟  Que algo me pase y queden sin ingresos' },
      { value: 'salud',      label: '🏥  Una enfermedad grave con gastos enormes' },
      { value: 'auto',       label: '🚗  Perder el auto o sufrir un accidente' },
      { value: 'patrimonio', label: '🏠  Algo que afecte nuestra casa o bienes' },
      { value: 'todo',       label: '🌟  Todo me preocupa por igual' }
    ]
  },

  // ── BLOQUE PERFIL: PROFESIONAL ─────────────────────────────────────────────

  pro_situacion: {
    id: 'pro_situacion', type: 'single',
    section: 'Tu perfil', icon: '💼',
    question: '¿Cómo describes tu situación laboral?',
    options: [
      { value: 'empleado',      label: '💼  Empleado en empresa (con nómina fija)' },
      { value: 'independiente', label: '🧑‍💻  Profesionista independiente o freelancer' },
      { value: 'dueno',         label: '🏢  Dueño de un negocio pequeño o mediano' },
      { value: 'ejecutivo',     label: '👔  Ejecutivo o directivo' }
    ]
  },

  pro_beneficios: {
    id: 'pro_beneficios', type: 'single',
    section: 'Tu perfil', icon: '📋',
    question: '¿Tu empresa o actividad te proporciona algún beneficio de seguros?',
    hint: 'Esto nos ayuda a encontrar exactamente lo que te falta.',
    options: [
      { value: 'ninguno', label: '❌  No, no tengo ninguna cobertura' },
      { value: 'imss',    label: '🔵  Solo IMSS o seguridad social básica' },
      { value: 'basico',  label: '🟡  Tengo seguro de empresa, pero es básico' },
      { value: 'bueno',   label: '🟢  Tengo buenos beneficios, quiero complementar' }
    ]
  },

  pro_prioridad: {
    id: 'pro_prioridad', type: 'single',
    section: 'Tu perfil', icon: '🎯',
    question: '¿Qué es lo que más quieres proteger en este momento?',
    options: [
      { value: 'ingresos',  label: '💪  Mi capacidad de trabajo y mis ingresos' },
      { value: 'salud',     label: '🏥  Mi salud y la de mi familia' },
      { value: 'bienes',    label: '🚗  Mis bienes materiales (auto, casa)' },
      { value: 'integral',  label: '🌟  Quiero una protección integral' }
    ]
  },

  // ── BLOQUE PERFIL: EMPRESA ─────────────────────────────────────────────────

  emp_tamano: {
    id: 'emp_tamano', type: 'single',
    section: 'Tu empresa', icon: '🏢',
    question: '¿Cuántos colaboradores tiene la empresa?',
    options: [
      { value: '1-10',    label: '👤  1 a 10 colaboradores' },
      { value: '11-50',   label: '👥  11 a 50 colaboradores' },
      { value: '51-200',  label: '🏢  51 a 200 colaboradores' },
      { value: 'mas-200', label: '🏭  Más de 200 colaboradores' }
    ]
  },

  emp_giro: {
    id: 'emp_giro', type: 'single',
    section: 'Tu empresa', icon: '🏭',
    question: '¿En qué industria opera tu empresa?',
    options: [
      { value: 'tech',         label: '🖥️  Tecnología / Digital' },
      { value: 'comercio',     label: '🏪  Comercio / Retail' },
      { value: 'manufactura',  label: '🏭  Manufactura / Industria' },
      { value: 'servicios',    label: '💼  Servicios profesionales' },
      { value: 'salud',        label: '🩺  Salud / Bienestar' },
      { value: 'construccion', label: '🏗️  Construcción / Inmobiliaria' },
      { value: 'otro',         label: '🔧  Otro giro' }
    ]
  },

  emp_urgencia: {
    id: 'emp_urgencia', type: 'single',
    section: 'Tu empresa', icon: '⚡',
    question: '¿Qué es lo más urgente para tu empresa hoy?',
    options: [
      { value: 'salud_equipo', label: '👥  Dar beneficios de salud a mis colaboradores' },
      { value: 'flotilla',     label: '🚗  Proteger los vehículos de la empresa' },
      { value: 'activos',      label: '🏭  Proteger activos e instalaciones' },
      { value: 'obligacion',   label: '⚖️  Cumplir requisitos legales o contractuales' },
      { value: 'varios',       label: '✨  Necesitamos varias coberturas' }
    ]
  },

  // ── BLOQUE PERFIL: ADULTO MAYOR ────────────────────────────────────────────

  adu_situacion: {
    id: 'adu_situacion', type: 'single',
    section: 'Tu situación', icon: '🌿',
    question: '¿Cuál es tu situación actual?',
    options: [
      { value: 'jubilado',      label: '🏖️  Jubilado o pensionado' },
      { value: 'cerca_retiro',  label: '🔄  Trabajando, cerca del retiro' },
      { value: 'independiente', label: '💼  Tengo mi propio negocio o actividad' },
      { value: 'ahorros',       label: '🌿  Retirado, vivo de mis ahorros' }
    ]
  },

  adu_dependientes: {
    id: 'adu_dependientes', type: 'single',
    section: 'Tu situación', icon: '👨‍👩‍👧',
    question: '¿Hay alguien que dependa de ti económicamente hoy?',
    options: [
      { value: 'pareja',        label: '💑  Sigo apoyando a mi pareja' },
      { value: 'hijos_nietos',  label: '👨‍👩‍👧  Apoyo a hijos o nietos' },
      { value: 'compartido',    label: '🤝  Comparto gastos, no soy el único sustento' },
      { value: 'independiente', label: '🙋  No, soy independiente económicamente' }
    ]
  },

  adu_prioridad: {
    id: 'adu_prioridad', type: 'single',
    section: 'Tu situación', icon: '⭐',
    question: '¿Cuál es tu prioridad en esta etapa de tu vida?',
    options: [
      { value: 'salud',    label: '🏥  Tener acceso a la mejor atención médica' },
      { value: 'carga',    label: '💰  No ser una carga económica para mi familia' },
      { value: 'bienes',   label: '🏠  Proteger los bienes que construí' },
      { value: 'herencia', label: '🕊️  Dejar algo a mis seres queridos' },
      { value: 'todo',     label: '🌟  Todo lo anterior me importa' }
    ]
  },

  // ── BLOQUE FINANCIERO: INDIVIDUOS (familia, profesional, adulto) ───────────

  ingreso_anual: {
    id: 'ingreso_anual', type: 'single-described',
    section: 'Situación financiera', icon: '💰',
    question: '¿En qué rango están tus ingresos anuales aproximados?',
    hint: 'Esto nos permite recomendarte coberturas que realmente se ajusten a tu capacidad — sin sobrar ni faltar.',
    options: [
      { value: 'menos-200k', label: 'Menos de $200,000 / año',       desc: 'Hasta ~$16,600 al mes' },
      { value: '200k-500k',  label: '$200,000 – $500,000 / año',     desc: '~$16,600 a $41,600 al mes' },
      { value: '500k-1m',    label: '$500,000 – $1,000,000 / año',   desc: '~$41,600 a $83,300 al mes' },
      { value: 'mas-1m',     label: 'Más de $1,000,000 / año',       desc: 'Más de $83,300 al mes' }
    ]
  },

  gasto_recurrente: {
    id: 'gasto_recurrente', type: 'multi',
    section: 'Situación financiera', icon: '📋',
    question: '¿Cuáles son tus principales gastos recurrentes?',
    hint: 'Selecciona todos los que apliquen. Esto nos ayuda a entender tu margen real para un seguro.',
    options: [
      { value: 'hipoteca',     label: '🏗️  Hipoteca o crédito de vivienda' },
      { value: 'renta',        label: '🏠  Renta mensual' },
      { value: 'colegiaturas', label: '🎒  Colegiaturas o educación' },
      { value: 'auto_credito', label: '🚗  Crédito de auto' },
      { value: 'prestamos',    label: '💳  Préstamos personales o de negocio' },
      { value: 'medicos',      label: '🏥  Gastos médicos frecuentes' },
      { value: 'ninguno',      label: '✅  Sin compromisos fijos importantes' }
    ]
  },

  // ── RAMO: AUTO ─────────────────────────────────────────────────────────────

  auto_cantidad: {
    id: 'auto_cantidad', type: 'single',
    section: 'Tu vehículo', icon: '🚗',
    question: '¿Cuántos autos tiene tu familia?',
    options: [
      { value: 'uno',  label: '🚗  Un auto' },
      { value: 'dos',  label: '🚗🚗  Dos autos' },
      { value: 'mas',  label: '🚙  Más de dos autos' }
    ]
  },

  auto_brand: {
    id: 'auto_brand', type: 'text',
    section: 'Tu vehículo', icon: '🚗',
    question: '¿Cuál es la marca y modelo de tu auto principal?',
    hint: 'Escribe el nombre tal como aparece en tus documentos.',
    placeholder: 'Ej: Toyota Corolla'
  },

  auto_year: {
    id: 'auto_year', type: 'single',
    section: 'Tu vehículo', icon: '📅',
    question: '¿De qué año es tu auto?',
    options: [
      { value: '2022+',      label: '2022 o más reciente' },
      { value: '2018-2021',  label: '2018 – 2021' },
      { value: '2013-2017',  label: '2013 – 2017' },
      { value: 'antes-2013', label: 'Antes de 2013' }
    ]
  },

  auto_use: {
    id: 'auto_use', type: 'single',
    section: 'Tu vehículo', icon: '🗺️',
    question: '¿Para qué usas principalmente tu auto?',
    options: [
      { value: 'personal',   label: '🏠  Uso personal y familiar' },
      { value: 'trabajo',    label: '💼  Traslados al trabajo' },
      { value: 'negocio',    label: '📦  Negocio o reparto' },
      { value: 'plataforma', label: '🚕  Plataforma de transporte (Uber, DiDi)' }
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

  auto_coverage: {
    id: 'auto_coverage', type: 'coverage-visual',
    section: 'Tu vehículo', icon: '🛡️',
    question: '¿Qué protección buscas para tu auto?',
    hint: 'Elige el nivel que más se adapte a ti.',
    options: [
      {
        value: 'basica', label: 'Básica', badge: 'Económica', color: '#2B4FAF',
        covers: ['Daños a terceros', 'Responsabilidad civil', 'Asistencia vial'],
        notCovers: ['Daños propios', 'Robo total']
      },
      {
        value: 'amplia', label: 'Amplia', badge: 'La más popular', color: '#79A73A',
        covers: ['Todo lo de Básica', 'Daños propios', 'Robo parcial'],
        notCovers: ['Robo total']
      },
      {
        value: 'total', label: 'Total', badge: 'Máxima tranquilidad', color: '#1D3885',
        covers: ['Todo lo de Amplia', 'Robo total', 'Gastos médicos', 'Auto sustituto'],
        notCovers: []
      }
    ]
  },

  // ── RAMO: GMM ──────────────────────────────────────────────────────────────

  gmm_integrantes: {
    id: 'gmm_integrantes', type: 'single',
    section: 'Gastos Médicos', icon: '👨‍👩‍👧',
    question: '¿A cuántas personas quieres incluir en la póliza?',
    options: [
      { value: 'solo',    label: '🙋  Solo a mí' },
      { value: 'pareja',  label: '💑  Yo y mi pareja' },
      { value: 'familia', label: '👨‍👩‍👧  Familia completa (pareja e hijos)' },
      { value: 'yo_hijos',label: '👩‍👧  Yo y mis hijos' }
    ]
  },

  gmm_edad: {
    id: 'gmm_edad', type: 'single',
    section: 'Gastos Médicos', icon: '🎂',
    question: '¿En qué rango de edad está el titular?',
    options: [
      { value: '18-30', label: '18 – 30 años' },
      { value: '31-45', label: '31 – 45 años' },
      { value: '46-55', label: '46 – 55 años' },
      { value: '56-65', label: '56 – 65 años' }
    ]
  },

  gmm_cobertura_actual: {
    id: 'gmm_cobertura_actual', type: 'single',
    section: 'Gastos Médicos', icon: '📋',
    question: '¿Tienen cobertura médica actualmente?',
    hint: 'Esto nos ayuda a encontrar el complemento perfecto para tu situación.',
    options: [
      { value: 'ninguna',  label: '❌  No tenemos cobertura privada' },
      { value: 'imss',     label: '🔵  IMSS o ISSSTE, queremos complementar' },
      { value: 'basico',   label: '🟡  Seguro básico de empresa, quiero mejorarlo' },
      { value: 'comparar', label: '🟢  Ya tengo GMM, quiero comparar opciones' }
    ]
  },

  gmm_preexistente: {
    id: 'gmm_preexistente', type: 'single',
    section: 'Gastos Médicos', icon: '🏥',
    question: '¿Algún integrante tiene una condición de salud preexistente?',
    hint: 'Tu privacidad es lo primero. MCBrokers está certificada ISO 27001 en seguridad de datos.',
    options: [
      { value: 'no',           label: '✅  No, todos estamos sanos' },
      { value: 'si_controlada',label: '💊  Sí, está controlada' },
      { value: 'privado',      label: '🔒  Prefiero no compartirlo por ahora' }
    ]
  },

  gmm_red: {
    id: 'gmm_red', type: 'single',
    section: 'Gastos Médicos', icon: '🏨',
    question: '¿Qué tipo de atención médica prefieren?',
    options: [
      { value: 'estandar', label: '🏥  Red hospitalaria estándar' },
      { value: 'premium',  label: '⭐  Hospitales de primer nivel (Ángeles, Médica Sur)' },
      { value: 'libre',    label: '🌟  Sin restricción, libertad de elección' }
    ]
  },

  gmm_presupuesto: {
    id: 'gmm_presupuesto', type: 'single',
    section: 'Gastos Médicos', icon: '💰',
    question: '¿Cuál es el presupuesto mensual para el seguro médico?',
    hint: 'Esto nos ayuda a mostrarte opciones reales y accesibles.',
    options: [
      { value: 'menos-800', label: 'Menos de $800 / mes' },
      { value: '800-2000',  label: '$800 – $2,000 / mes' },
      { value: '2000-4000', label: '$2,000 – $4,000 / mes' },
      { value: 'mas-4000',  label: 'Más de $4,000 / mes' }
    ]
  },

  // ── RAMO: VIDA ─────────────────────────────────────────────────────────────

  vida_etapa: {
    id: 'vida_etapa', type: 'single',
    section: 'Vida y Protección', icon: '🌱',
    question: '¿En qué etapa de vida te encuentras?',
    options: [
      { value: 'joven',        label: '🌱  Empezando (18–30 años)' },
      { value: 'construyendo', label: '🏗️  Construyendo (31–45 años)' },
      { value: 'consolidando', label: '🔒  Consolidando (46–60 años)' },
      { value: 'maduro',       label: '🌟  Maduro (60+ años)' }
    ]
  },

  vida_dependientes: {
    id: 'vida_dependientes', type: 'multi',
    section: 'Vida y Protección', icon: '👨‍👩‍👧',
    question: '¿Quiénes dependen económicamente de ti?',
    hint: 'Puedes seleccionar varias opciones.',
    options: [
      { value: 'hijos',     label: '👧  Hijos menores de edad' },
      { value: 'pareja',    label: '💑  Mi pareja o cónyuge' },
      { value: 'padres',    label: '👴  Mis padres' },
      { value: 'empleados', label: '🏢  Empleados de mi negocio' },
      { value: 'ninguno',   label: '🙋  Nadie, pero quiero estar preparado' }
    ]
  },

  vida_deudas: {
    id: 'vida_deudas', type: 'single',
    section: 'Vida y Protección', icon: '📋',
    question: '¿Tienes alguna deuda o compromiso financiero importante?',
    hint: 'Un seguro de vida bien diseñado puede cubrir exactamente estos compromisos.',
    options: [
      { value: 'hipoteca', label: '🏠  Tengo hipoteca' },
      { value: 'credito',  label: '🚗  Tengo crédito de auto u otro crédito' },
      { value: 'negocio',  label: '💼  Tengo compromisos de mi negocio' },
      { value: 'no',       label: '✅  No tengo deudas importantes' }
    ]
  },

  vida_preexistente: {
    id: 'vida_preexistente', type: 'single',
    section: 'Vida y Protección', icon: '🏥',
    question: '¿Tienes alguna condición de salud preexistente?',
    hint: 'Tu privacidad es lo primero. MCBrokers está certificada ISO 27001.',
    options: [
      { value: 'no',        label: '✅  No, ninguna' },
      { value: 'controlada',label: '💊  Sí, está controlada' },
      { value: 'privado',   label: '🔒  Prefiero no compartirlo' }
    ]
  },

  vida_objetivo: {
    id: 'vida_objetivo', type: 'single',
    section: 'Vida y Protección', icon: '⭐',
    question: '¿Cuál es tu objetivo principal con un seguro de vida?',
    options: [
      { value: 'proteger_familia', label: '🛡️  Que mi familia esté protegida si llegara a faltarme' },
      { value: 'ahorro',           label: '💰  Un plan con componente de ahorro o inversión' },
      { value: 'cubrir_deudas',    label: '📋  Cubrir mis deudas o compromisos específicos' },
      { value: 'integral',         label: '🌟  Un plan integral que cubra todo' }
    ]
  },

  vida_presupuesto: {
    id: 'vida_presupuesto', type: 'single',
    section: 'Vida y Protección', icon: '💰',
    question: '¿Cuál es tu presupuesto mensual para este seguro?',
    hint: 'Esto nos ayuda a mostrarte opciones reales y accesibles.',
    options: [
      { value: 'menos-300', label: 'Menos de $300 / mes' },
      { value: '300-800',   label: '$300 – $800 / mes' },
      { value: '800-2000',  label: '$800 – $2,000 / mes' },
      { value: 'mas-2000',  label: 'Más de $2,000 / mes' }
    ]
  },

  // ── RAMO: CASA ─────────────────────────────────────────────────────────────

  casa_tenencia: {
    id: 'casa_tenencia', type: 'single',
    section: 'Tu hogar', icon: '🏠',
    question: '¿La vivienda es tuya o la rentas?',
    options: [
      { value: 'propia',    label: '🏠  Es propia (escriturada o en crédito hipotecario)' },
      { value: 'rentada',   label: '🔑  La rento' },
      { value: 'comprando', label: '🏗️  La estoy comprando o construyendo' }
    ]
  },

  casa_tipo: {
    id: 'casa_tipo', type: 'single',
    section: 'Tu hogar', icon: '🏡',
    question: '¿Qué tipo de inmueble es?',
    options: [
      { value: 'casa',  label: '🏠  Casa habitación' },
      { value: 'depto', label: '🏢  Departamento en edificio' },
      { value: 'campo', label: '🌅  Casa de campo o de playa' }
    ]
  },

  casa_valor: {
    id: 'casa_valor', type: 'single',
    section: 'Tu hogar', icon: '💵',
    question: '¿Cuál es el valor aproximado del inmueble?',
    hint: 'Un estimado es suficiente — tu asesor te ayuda a calcularlo con precisión.',
    options: [
      { value: 'menos-1m', label: 'Menos de $1,000,000' },
      { value: '1m-3m',    label: '$1,000,000 – $3,000,000' },
      { value: '3m-6m',    label: '$3,000,000 – $6,000,000' },
      { value: 'mas-6m',   label: 'Más de $6,000,000' }
    ]
  },

  casa_zona: {
    id: 'casa_zona', type: 'single',
    section: 'Tu hogar', icon: '📍',
    question: '¿En qué tipo de zona está tu vivienda?',
    hint: 'México tiene diferentes niveles de riesgo según la ubicación.',
    options: [
      { value: 'urbana',     label: '🏙️  Ciudad o zona urbana tranquila' },
      { value: 'costera',    label: '🌊  Zona costera' },
      { value: 'sismica',    label: '⚡  Zona sísmica (CDMX, Oaxaca, Guerrero...)' },
      { value: 'inundacion', label: '🌧️  Zona con historial de inundaciones' }
    ]
  },

  casa_objetivo: {
    id: 'casa_objetivo', type: 'single',
    section: 'Tu hogar', icon: '🛡️',
    question: '¿Qué quieres proteger principalmente?',
    options: [
      { value: 'estructura', label: '🏗️  La estructura del inmueble' },
      { value: 'contenido',  label: '📦  El contenido (muebles, electrodomésticos)' },
      { value: 'ambos',      label: '🌟  Ambos' },
      { value: 'rc',         label: '⚖️  También responsabilidad civil (daños a vecinos)' }
    ]
  },

  // ── RAMO: MASCOTAS ─────────────────────────────────────────────────────────

  mascota_tipo: {
    id: 'mascota_tipo', type: 'single',
    section: 'Tus mascotas', icon: '🐾',
    question: '¿Qué tipo de mascota tienes?',
    options: [
      { value: 'perro', label: '🐶  Perro' },
      { value: 'gato',  label: '🐱  Gato' },
      { value: 'ambos', label: '🐶🐱  Perro y gato' },
      { value: 'otra',  label: '🐠  Otra mascota' }
    ]
  },

  mascota_edad: {
    id: 'mascota_edad', type: 'single',
    section: 'Tus mascotas', icon: '🎂',
    question: '¿Cuántos años tiene tu mascota?',
    options: [
      { value: 'cachorro', label: '🐣  Cachorro / Gatito (0–2 años)' },
      { value: 'adulto',   label: '🐾  Adulto joven (2–7 años)' },
      { value: 'senior',   label: '🐕  Senior (más de 7 años)' }
    ]
  },

  mascota_raza: {
    id: 'mascota_raza', type: 'single',
    section: 'Tus mascotas', icon: '🏷️',
    question: '¿Tu mascota es de raza o mestiza?',
    options: [
      { value: 'mestiza', label: '🐾  Mestiza o criolla' },
      { value: 'raza',    label: '🏆  De raza (pura o mixta)' }
    ]
  },

  mascota_cobertura: {
    id: 'mascota_cobertura', type: 'single',
    section: 'Tus mascotas', icon: '🛡️',
    question: '¿Qué tipo de cobertura te interesa?',
    options: [
      { value: 'emergencias', label: '🚨  Solo emergencias y cirugías' },
      { value: 'consultas',   label: '🏥  Consultas + emergencias' },
      { value: 'completa',    label: '🌟  Cobertura completa (vacunas, dental, nutrición)' },
      { value: 'economica',   label: '💰  La opción más económica disponible' }
    ]
  }
};

// ── Rutas ─────────────────────────────────────────────────────────────────────

const COMMON_PATH = ['landing', 'welcome', 'name'];

const PROFILE_PATHS = {
  familia:     ['fam_composicion', 'fam_etapa', 'fam_preocupacion', 'ingreso_anual', 'gasto_recurrente'],
  profesional: ['pro_situacion', 'pro_beneficios', 'pro_prioridad', 'ingreso_anual', 'gasto_recurrente'],
  empresa:     ['emp_tamano', 'emp_giro', 'emp_urgencia'],
  adulto:      ['adu_situacion', 'adu_dependientes', 'adu_prioridad', 'ingreso_anual', 'gasto_recurrente']
};

const AUTO_PATH     = ['auto_cantidad', 'auto_brand', 'auto_year', 'auto_use', 'auto_accidents', 'auto_coverage'];
const GMM_PATH      = ['gmm_integrantes', 'gmm_edad', 'gmm_cobertura_actual', 'gmm_preexistente', 'gmm_red', 'gmm_presupuesto'];
const VIDA_PATH     = ['vida_etapa', 'vida_dependientes', 'vida_deudas', 'vida_preexistente', 'vida_objetivo', 'vida_presupuesto'];
const CASA_PATH     = ['casa_tenencia', 'casa_tipo', 'casa_valor', 'casa_zona', 'casa_objetivo'];
const MASCOTAS_PATH = ['mascota_tipo', 'mascota_edad', 'mascota_raza', 'mascota_cobertura'];

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

const NON_QUESTION_TYPES = ['landing', 'client-type', 'trust-screen', 'contact-capture', 'loading-screen', 'coverage-chart', 'summary'];
function isQuestion(s) { return !NON_QUESTION_TYPES.includes(s.type); }

function progressInfo() {
  const questions = state.fullPath.filter(id => isQuestion(STEPS[id]));
  const idx = questions.indexOf(state.fullPath[state.currentIndex]);
  return { current: idx + 1, total: questions.length, pct: ((idx + 1) / questions.length) * 100 };
}

function getLabelFor(stepId, value) {
  if (!value) return '';
  if (stepId === 'insurance_type') return INSURANCE_LABELS[value] || value;
  const step = STEPS[stepId];
  if (!step || !step.options) return value;
  const opt = step.options.find(o => o.value === value);
  return opt ? opt.label : value;
}

function getMultiLabels(stepId, values) {
  if (!values || !values.length) return [];
  return values.map(v => getLabelFor(stepId, v));
}

// ── Construcción de rutas ─────────────────────────────────────────────────────

function buildProfilePath(clientType) {
  const profile = PROFILE_PATHS[clientType] || [];
  state.fullPath = [...COMMON_PATH, ...profile, 'insurance_type'];
}

function buildPath(insuranceType) {
  const clientType = state.answers['client_type'];
  const profile    = PROFILE_PATHS[clientType] || [];

  let path = [...COMMON_PATH, ...profile, 'insurance_type', 'trust'];

  if      (insuranceType === 'auto')     path = [...path, ...AUTO_PATH];
  else if (insuranceType === 'gmm')      path = [...path, ...GMM_PATH];
  else if (insuranceType === 'vida')     path = [...path, ...VIDA_PATH];
  else if (insuranceType === 'casa')     path = [...path, ...CASA_PATH];
  else if (insuranceType === 'mascotas') path = [...path, ...MASCOTAS_PATH];
  else if (insuranceType === 'multi') {
    // Routing inteligente basado en la respuesta de preocupación/prioridad
    const signal = state.answers['fam_preocupacion']
                || state.answers['pro_prioridad']
                || state.answers['adu_prioridad']
                || state.answers['emp_urgencia'];
    const routeMap = {
      ingresos: VIDA_PATH, salud: GMM_PATH, auto: AUTO_PATH, patrimonio: CASA_PATH,
      salud_equipo: GMM_PATH, flotilla: AUTO_PATH, activos: CASA_PATH,
      bienes: AUTO_PATH, integral: [...AUTO_PATH, ...VIDA_PATH]
    };
    path = [...path, ...(routeMap[signal] || [...AUTO_PATH, ...VIDA_PATH])];
  }
  else if (insuranceType === 'ambos') path = [...path, ...AUTO_PATH, ...VIDA_PATH];

  path.push('contacto', 'loading', 'coverage_chart', 'summary');
  state.fullPath = path;
}

// ── Cálculos de perfil ────────────────────────────────────────────────────────

function calcularPerfilRiesgo() {
  const tipo   = state.answers['insurance_type'];
  let puntos   = 0;
  const max    = 9;

  if (tipo === 'auto') {
    const cob = state.answers['auto_coverage'];
    const acc = state.answers['auto_accidents'];
    puntos += cob === 'total' ? 3 : cob === 'amplia' ? 2 : 1;
    puntos += acc === 'ninguno' ? 3 : acc === 'uno' ? 1 : 0;
    puntos += 3;
  } else if (tipo === 'gmm') {
    const red   = state.answers['gmm_red'];
    const preex = state.answers['gmm_preexistente'];
    const cob   = state.answers['gmm_cobertura_actual'];
    puntos += red === 'libre' ? 3 : red === 'premium' ? 2 : 1;
    puntos += preex === 'no' ? 2 : 1;
    puntos += cob === 'ninguna' ? 1 : 2;
  } else if (tipo === 'vida') {
    const deps = state.answers['vida_dependientes'] || [];
    const obj  = state.answers['vida_objetivo'];
    puntos += obj === 'integral' ? 3 : obj === 'ahorro' ? 2 : 1;
    puntos += (deps.length > 0 && !deps.includes('ninguno')) ? 2 : 1;
    puntos += state.answers['vida_deudas'] !== 'no' ? 2 : 1;
  } else if (tipo === 'casa') {
    const obj  = state.answers['casa_objetivo'];
    const zona = state.answers['casa_zona'];
    puntos += obj === 'rc' ? 3 : obj === 'ambos' ? 2 : 1;
    puntos += (zona === 'sismica' || zona === 'inundacion' || zona === 'costera') ? 3 : 1;
    puntos += 2;
  } else if (tipo === 'mascotas') {
    const edad = state.answers['mascota_edad'];
    const cob  = state.answers['mascota_cobertura'];
    puntos += cob === 'completa' ? 3 : cob === 'consultas' ? 2 : 1;
    puntos += edad === 'senior' ? 3 : edad === 'cachorro' ? 2 : 1;
    puntos += 2;
  } else {
    puntos = 6;
  }

  const nivel = Math.min(Math.round((puntos / max) * 100), 100);
  let categoria, descripcion, color, emoji;
  if (nivel >= 75) {
    categoria = 'Protección Alta';   descripcion = 'Excelente cobertura para ti y los tuyos';
    color = '#79A73A'; emoji = '✅';
  } else if (nivel >= 45) {
    categoria = 'Protección Media';  descripcion = 'Buena base, con oportunidades de mejora';
    color = '#E8A020'; emoji = '⚠️';
  } else {
    categoria = 'Protección Básica'; descripcion = 'Podemos ayudarte a mejorar tu cobertura';
    color = '#A33050'; emoji = '🔵';
  }
  return { nivel, categoria, descripcion, color, emoji };
}

function calcularTipoPerfil() {
  const tipo    = state.answers['insurance_type'];
  const cliente = state.answers['client_type'];
  const uso     = state.answers['auto_use'];

  if (cliente === 'empresa')                    return { tipo: 'Empresarial',           icono: '🏢' };
  if (cliente === 'adulto')                     return { tipo: 'Senior Plus',            icono: '🌿' };
  if (tipo === 'gmm' && cliente === 'familia')  return { tipo: 'Familia Saludable',      icono: '🏥' };
  if (tipo === 'gmm')                           return { tipo: 'Salud Protegida',        icono: '🏥' };
  if (tipo === 'vida' && cliente === 'profesional') return { tipo: 'Profesional Protegido', icono: '💼' };
  if (tipo === 'vida')                          return { tipo: 'Familia Protegida',      icono: '💙' };
  if (tipo === 'casa')                          return { tipo: 'Patrimonio Seguro',      icono: '🏠' };
  if (tipo === 'mascotas')                      return { tipo: 'Familia con Mascotas',   icono: '🐾' };
  if (tipo === 'auto' && uso === 'plataforma')  return { tipo: 'Conductor Activo',       icono: '🚕' };
  if (tipo === 'multi' || tipo === 'ambos')     return { tipo: 'Protección 360°',        icono: '🛡️' };
  return { tipo: 'Familiar', icono: '👨‍👩‍👧' };
}

function calcularPresupuestoSeguro() {
  const ingreso = state.answers['ingreso_anual'];
  if (!ingreso) return null;

  const midpoints = {
    'menos-200k': 150000,
    '200k-500k':  350000,
    '500k-1m':    750000,
    'mas-1m':     1500000
  };

  const anual = midpoints[ingreso];
  const gastos = state.answers['gasto_recurrente'] || [];
  const gastosCuenta = gastos.filter(g => g !== 'ninguno').length;

  // Ajuste conservador por compromisos existentes
  const factor = gastosCuenta >= 4 ? 0.80
               : gastosCuenta >= 3 ? 0.85
               : gastosCuenta >= 2 ? 0.90
               : 1.0;

  const minMensual = Math.round((anual * 0.10 * factor) / 12 / 100) * 100;
  const maxMensual = Math.round((anual * 0.15 * factor) / 12 / 100) * 100;

  const ingresoLabels = {
    'menos-200k': 'Menos de $200K/año',
    '200k-500k':  '$200K – $500K/año',
    '500k-1m':    '$500K – $1M/año',
    'mas-1m':     'Más de $1M/año'
  };

  return { minMensual, maxMensual, gastosCuenta, ingresoLabel: ingresoLabels[ingreso] };
}

function getRecomendacionCopy() {
  const name    = (state.answers['name'] || '').split(' ')[0];
  const tipo    = state.answers['insurance_type'];
  const cliente = state.answers['client_type'];

  const copies = {
    auto_familia:     `${name}, sabemos que tu auto no es solo un vehículo — es el que lleva a tu familia cada día. Un buen seguro no es un gasto: es saber que, pase lo que pase en el camino, todos siguen adelante.`,
    auto_profesional: `Construiste lo que tienes trabajando duro. Tu auto forma parte de eso. Tener la cobertura correcta no es solo proteger la inversión — es no perder ni un día de trabajo por un imprevisto que pudo estar cubierto.`,
    auto_empresa:     `Una flotilla protegida es un equipo que nunca se detiene. Tu asesor especializado en empresas revisará tu perfil y te presentará las opciones ideales para tu negocio.`,
    auto_adulto:      `Tu tranquilidad al volante vale mucho. Un buen seguro de auto es la certeza de que cualquier imprevisto en el camino tiene solución — sin que tengas que preocuparte por los costos.`,
    gmm_familia:      `Hay una tranquilidad que no tiene precio: poder decirle a los tuyos "ve al mejor médico, yo me encargo". Un plan de Gastos Médicos Mayores es exactamente eso — la certeza de que el dinero no será el obstáculo cuando más los necesites.`,
    gmm_profesional:  `Tú inviertes en tu carrera, en tu crecimiento, en lo que construyes cada día. Cuidar tu salud es la inversión más inteligente de todas — porque sin ella, todo lo demás se detiene.`,
    gmm_empresa:      `Un equipo que sabe que su salud está protegida trabaja diferente. Ofrecer un plan médico a tus colaboradores no es solo un beneficio — es el mensaje más claro de que los valoras. Y eso se nota en la cultura de una empresa.`,
    gmm_adulto:       `Esta etapa de la vida merece ser vivida con calma, no con preocupación. Un buen seguro médico es el regalo que te das a ti mismo: el poder de recibir la mejor atención, sin que nadie en tu familia tenga que sacrificar nada para dártela.`,
    vida_familia:     `Nadie quiere imaginar ese escenario. Pero los que más te quieren merecen que lo hayas pensado por ellos. Un seguro de vida no es hablar de la muerte — es hablar del amor más concreto que existe: el que planifica, el que cuida, el que dice "si llego a faltar, ustedes estarán bien".`,
    vida_profesional: `Lo que construyes cada día tiene un responsable: tú. Y lo haces bien. Pero hay una pregunta que vale la pena responder hoy: ¿qué pasaría con todo eso si tú no pudieras estar? Un seguro de vida bien diseñado es la respuesta más tranquilizadora que existe.`,
    vida_adulto:      `Lo que construiste en toda una vida merece seguir ahí, cuidando a quienes más quieres, incluso cuando tú ya no puedas hacerlo. Hablar de esto no es triste — es el acto de amor más generoso que alguien puede tener.`,
    casa_default:     `Tu casa no es solo cuatro paredes. Es donde todo sucede: las mañanas, las cenas, los cumpleaños, los momentos que no cambiarías por nada. Protegerla es cuidar el espacio donde vive todo lo que te importa.`,
    mascotas_default: `Ellos no entienden de seguros. Pero tú sí entiendes lo que significan para ti. Un seguro para tu mascota es la forma en que le dices, sin palabras, que siempre vas a estar ahí — que nunca tendrás que elegir entre tu bolsillo y su bienestar.`,
    multi_default:    `${name}, tienes claro lo que importa. Y proteger varias cosas a la vez no es complicado cuando tienes al asesor correcto. Hemos identificado tus prioridades y tu asesor MCBrokers llegará con propuestas concretas para cada una.`,
  };

  return copies[`${tipo}_${cliente}`]
      || copies[`${tipo}_default`]
      || copies[`${tipo}_familia`]
      || copies['multi_default'];
}

// ── Cálculo de tiempo estimado de emisión ────────────────────────────────────

function calcularTiempoEmision() {
  const tipo = state.answers['insurance_type'];

  if (tipo === 'auto') {
    return {
      minTiempo: 2, maxTiempo: 4, unidad: 'horas',
      razones: ['Verificación de disponibilidad y registro de los datos del vehículo']
    };
  }

  if (tipo === 'casa') {
    return {
      minTiempo: 2, maxTiempo: 4, unidad: 'horas',
      razones: ['Registro y validación de los datos del inmueble']
    };
  }

  if (tipo === 'vida') return calcularTiempoVida();
  if (tipo === 'gmm')  return calcularTiempoGMM();

  if (tipo === 'mascotas') {
    return {
      minTiempo: 1, maxTiempo: 3, unidad: 'días hábiles',
      razones: ['Registro y validación de los datos de tu mascota']
    };
  }

  if (tipo === 'multi' || tipo === 'ambos') return calcularTiempoMulti();

  return { minTiempo: 2, maxTiempo: 5, unidad: 'días hábiles', razones: ['Evaluación general de tu perfil'] };
}

function calcularTiempoVida() {
  const preex = state.answers['vida_preexistente'];
  const etapa = state.answers['vida_etapa'];
  let razones = [];
  let complicado = false;

  if (preex && preex !== 'no') {
    complicado = true;
    razones.push('Se realizará una valoración considerando tu historial de salud para ofrecerte las mejores condiciones');
  }
  if (etapa === 'maduro') {
    complicado = true;
    razones.push('Tu rango de edad requiere una revisión complementaria por parte de la aseguradora');
  }

  if (complicado) {
    razones.unshift('Proceso de suscripción con revisión detallada');
    return { minTiempo: 10, maxTiempo: 15, unidad: 'días hábiles', razones };
  }

  return {
    minTiempo: 2, maxTiempo: 3, unidad: 'días hábiles',
    razones: ['Proceso estándar de suscripción — sin complicaciones identificadas']
  };
}

function calcularTiempoGMM() {
  const preex = state.answers['gmm_preexistente'];

  if (preex && preex !== 'no') {
    return {
      minTiempo: 10, maxTiempo: 15, unidad: 'días hábiles',
      razones: [
        'Revisión del cuestionario médico',
        'La aseguradora realizará una valoración complementaria considerando los antecedentes reportados'
      ]
    };
  }

  return {
    minTiempo: 2, maxTiempo: 5, unidad: 'días hábiles',
    razones: ['Revisión del cuestionario médico y validación con la aseguradora']
  };
}

function calcularTiempoMulti() {
  let maxMin = 0, maxMax = 0;
  let usaDias = false;
  let razones = [];

  if (state.answers['auto_coverage']) {
    razones.push('Verificación y registro de datos del vehículo');
  }

  if (state.answers['casa_objetivo']) {
    razones.push('Registro y validación de datos del inmueble');
  }

  if (state.answers['gmm_preexistente']) {
    usaDias = true;
    if (state.answers['gmm_preexistente'] !== 'no') {
      maxMin = Math.max(maxMin, 10); maxMax = Math.max(maxMax, 15);
      razones.push('Valoración médica complementaria por parte de la aseguradora');
    } else {
      maxMin = Math.max(maxMin, 2); maxMax = Math.max(maxMax, 5);
      razones.push('Revisión del cuestionario médico');
    }
  }

  if (state.answers['vida_etapa']) {
    usaDias = true;
    const preex = state.answers['vida_preexistente'];
    const etapa = state.answers['vida_etapa'];
    if ((preex && preex !== 'no') || etapa === 'maduro') {
      maxMin = Math.max(maxMin, 10); maxMax = Math.max(maxMax, 15);
      razones.push('Revisión detallada para el seguro de vida');
    } else {
      maxMin = Math.max(maxMin, 2); maxMax = Math.max(maxMax, 3);
      razones.push('Proceso estándar de suscripción de vida');
    }
  }

  if (!usaDias) {
    return { minTiempo: 2, maxTiempo: 4, unidad: 'horas', razones: razones.length ? razones : ['Evaluación general de tu perfil'] };
  }

  return {
    minTiempo: maxMin || 2,
    maxTiempo: maxMax || 5,
    unidad: 'días hábiles',
    razones: razones.length ? razones : ['Evaluación general de tu perfil']
  };
}

// ── Renderizado principal ─────────────────────────────────────────────────────

function render() {
  const step = currentStep();
  const app  = document.getElementById('app');

  // Inyectar opciones dinámicas para insurance_type
  let renderStep = step;
  if (step.id === 'insurance_type') {
    renderStep = { ...step, options: getInsuranceOptions(state.answers['client_type']) };
  }

  if      (step.type === 'landing')          app.innerHTML = renderLanding();
  else if (step.type === 'client-type')      app.innerHTML = renderClientType(step);
  else if (step.type === 'trust-screen')     app.innerHTML = renderTrustScreen();
  else if (step.type === 'coverage-visual')  app.innerHTML = renderCoverageVisual(step);
  else if (step.type === 'contact-capture')  app.innerHTML = renderContactCapture();
  else if (step.type === 'loading-screen')   app.innerHTML = renderLoadingScreen();
  else if (step.type === 'coverage-chart')   app.innerHTML = renderCoverageChart();
  else if (step.type === 'summary')          app.innerHTML = renderSummary();
  else                                       app.innerHTML = renderQuestion(renderStep);

  updateProgress();
  focusInput();

  if (step.type === 'loading-screen') requestAnimationFrame(startLoadingAnimation);
  if (step.type === 'coverage-chart') requestAnimationFrame(startChartAnimation);
}

// ── Landing ───────────────────────────────────────────────────────────────────

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
        <img class="char-img char-img--hero" src="assets/MCB Branding/PERSONAJES/4.png" alt="Familia MCBrokers">
      </div>
      <div class="landing-hero">
        <h1 class="landing-title">Juntos creamos<br>tu tranquilidad</h1>
        <p class="landing-sub">
          Cada respuesta que das construye un perfil único.
          Lo que verás al final está hecho solo para ti.
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
    </div>
  `;
}

// ── Tipo de cliente ───────────────────────────────────────────────────────────

function renderClientType(step) {
  return `
    <div class="card card--welcome">
      <div class="welcome-char-row">
        <img class="char-img char-img--small" src="assets/MCB Branding/PERSONAJES/1.png" alt="Asesora MCBrokers">
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

// ── Pantalla de confianza ─────────────────────────────────────────────────────

function renderTrustScreen() {
  return `
    <div class="card card--trust">
      <div class="trust-char-row">
        <div class="trust-char-col">
          <img class="char-img char-img--medium" src="assets/MCB Branding/PERSONAJES/2.png" alt="Asesora MCBrokers">
        </div>
        <div class="trust-content-col">
          <div class="trust-stat">
            <span class="trust-number">+40</span>
            <span class="trust-label">años de experiencia en seguros</span>
          </div>
          <p class="trust-message">
            Detrás de cada póliza hay una persona que confió en nosotros.<br>
            Esa confianza es lo que nos mueve cada día.
          </p>
        </div>
      </div>
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
        <input class="text-input" id="textInput" type="text"
          placeholder="${step.placeholder || ''}"
          value="${(saved || '').replace(/"/g, '&quot;')}"
          autocomplete="off" spellcheck="false"
          onkeydown="if(event.key==='Enter') handleNext()"/>
        <p class="input-error" id="inputError">Por favor escribe tu respuesta antes de continuar.</p>
      </div>
    `;
  }

  if (step.type === 'single' || step.type === 'single-described') {
    const described = step.type === 'single-described';
    inputHTML = `
      <div class="options-grid ${described ? 'options-grid--full' : ''}">
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

  const savedDetalle = state.answers['vida_preexistente_detalle'] || '';
  const showDetalle  = step.id === 'vida_preexistente' && state.answers['vida_preexistente'] === 'controlada';
  const detalleHTML  = step.id === 'vida_preexistente' ? `
    <div id="preexDetalleWrap" style="display:${showDetalle ? 'block' : 'none'}; margin-top:16px;">
      <p class="step-hint" style="margin-bottom:10px;">¿Podrías contarnos un poco más? Esta información nos ayuda a encontrar las mejores condiciones para ti.</p>
      <textarea id="preexDetalle" class="text-input" rows="3"
        placeholder="Ej: diabetes tipo 2 controlada con medicamento"
        style="resize:none; line-height:1.55; font-size:15px;"
      >${savedDetalle}</textarea>
      <div style="display:flex; justify-content:flex-end; margin-top:14px;">
        <button class="btn btn--primary" onclick="handlePreexDetalleContinuar()">
          Continuar <span class="btn-arrow">→</span>
        </button>
      </div>
    </div>
  ` : '';

  return `
    <div class="card">
      <div class="step-meta">
        <span class="step-icon">${step.icon}</span>
        <span class="step-section">${step.section}</span>
      </div>
      <h2 class="step-question">${step.question}</h2>
      ${step.hint ? `<p class="step-hint">${step.hint}</p>` : ''}
      ${inputHTML}
      ${detalleHTML}
      <div class="actions">
        ${state.currentIndex > 0
          ? `<button class="btn btn--ghost" onclick="handleBack()">← Volver</button>`
          : `<span></span>`}
        ${showContinue
          ? `<button class="btn btn--primary" onclick="handleNext()">Continuar <span class="btn-arrow">→</span></button>`
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
              onclick="handleCoverageSelect(this, '${opt.value}')" data-value="${opt.value}">
              ${opt.badge ? `<span class="coverage-badge" style="background:${opt.color}">${opt.badge}</span>` : ''}
              <div class="coverage-level" style="color:${opt.color}">${opt.label}</div>
              <div class="coverage-shield">
                <svg viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="52">
                  <path d="M24 2L4 10v16c0 12.7 8.6 24.6 20 28 11.4-3.4 20-15.3 20-28V10L24 2z"
                    fill="${sel ? opt.color : '#EEF2FB'}" stroke="${opt.color}" stroke-width="2.5"
                    style="transition: fill 200ms"/>
                  <path d="M16 28l6 6 10-12" stroke="${sel ? '#fff' : opt.color}"
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

// ── Captura de contacto ───────────────────────────────────────────────────────

function renderContactCapture() {
  const name = (state.answers['name'] || '').split(' ')[0];
  return `
    <div class="card card--contact">
      <div class="contact-icon">📱</div>
      <h2 class="contact-title">Ya casi listo${name ? ', ' + name : ''}…</h2>
      <p class="contact-sub">
        ¿A dónde enviamos tu perfil personalizado?<br>
        Tu asesor MCBrokers lo revisará antes de contactarte.
      </p>
      <div class="contact-form">
        <div class="contact-field">
          <label class="contact-label">Teléfono celular (WhatsApp) *</label>
          <input class="text-input" id="contactPhone" type="tel"
            placeholder="Ej: 55 1234 5678"
            autocomplete="tel"
            onkeydown="if(event.key==='Enter') handleNext()"/>
        </div>
        <div class="contact-field">
          <label class="contact-label">Correo electrónico <span class="contact-optional">(opcional)</span></label>
          <input class="text-input" id="contactEmail" type="email"
            placeholder="Ej: nombre@correo.com"
            autocomplete="email"/>
        </div>
        <div class="contact-check-wrap">
          <label class="contact-check-label">
            <input type="checkbox" id="contactAcepta" class="contact-check-input"/>
            <span class="contact-check-text">
              Acepto que MCBrokers me contacte para presentarme mi plan personalizado.
            </span>
          </label>
        </div>
        <p class="input-error" id="inputError">Por favor ingresa tu teléfono y acepta el aviso de contacto.</p>
      </div>
      <div class="actions" style="justify-content:center; margin-top:8px;">
        <button class="btn btn--primary btn--large" onclick="handleNext()">
          Ver mi perfil de tranquilidad <span class="btn-arrow">→</span>
        </button>
      </div>
      <p class="contact-privacy">
        🔒 Tus datos están protegidos bajo nuestra certificación ISO 27001.
        Nunca los compartiremos con terceros.
      </p>
    </div>
  `;
}

// ── Loading ───────────────────────────────────────────────────────────────────

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
            stroke-linecap="round" stroke-dasharray="264" stroke-dashoffset="264"
            transform="rotate(-90 50 50)" id="loadingArc"/>
        </svg>
        <div class="loading-pct" id="loadingPct">0%</div>
      </div>
      <p class="loading-title">Construyendo tu plan de tranquilidad…</p>
      <div class="loading-char-wrap">
        <img class="char-img char-img--medium" src="assets/MCB Branding/PERSONAJES/5.png" alt="MCBrokers">
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

  const totalMs = 3600;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const pct     = Math.min(elapsed / totalMs, 1);
    const offset  = 264 * (1 - pct);
    arc.setAttribute('stroke-dashoffset', offset);
    pctEl.textContent = Math.round(pct * 100) + '%';

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

// ── Gráfica de cobertura ──────────────────────────────────────────────────────

function renderCoverageChart() {
  const name  = (state.answers['name'] || 'Cliente').split(' ')[0];
  const tipo  = state.answers['insurance_type'];
  const tiempo = calcularTiempoEmision();

  const today      = new Date();
  const targetDate = new Date(today);

  if (tiempo.unidad === 'horas') {
    targetDate.setDate(today.getDate() + 1);
  } else {
    let diasHabilesRestantes = tiempo.maxTiempo;
    while (diasHabilesRestantes > 0) {
      targetDate.setDate(targetDate.getDate() + 1);
      const dow = targetDate.getDay();
      if (dow !== 0 && dow !== 6) diasHabilesRestantes--;
    }
  }

  const dateStr  = targetDate.toLocaleDateString('es-MX', { day: 'numeric', month: 'long' });
  const todayStr = today.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });
  const tiempoTexto = `${tiempo.minTiempo}–${tiempo.maxTiempo} ${tiempo.unidad}`;

  const tipoLabels = {
    auto: 'tu auto', gmm: 'tu salud', vida: 'tu vida y la de los tuyos',
    casa: 'tu hogar', mascotas: 'tu mascota', multi: 'todo lo que más importa', ambos: 'tu auto y tu salud'
  };
  const tipoLabel = tipoLabels[tipo] || 'tu tranquilidad';

  return `
    <div class="card">
      <h2 class="coverage-chart-title">
        El plan que <em style="font-style:normal;color:var(--mcb-verde)">transforma</em><br>tu tranquilidad
      </h2>
      <p class="coverage-chart-sub">
        Estimamos que estarás <strong style="color:var(--mcb-azul)">100% protegido en ${tipoLabel}</strong><br>
        en aproximadamente <strong style="color:var(--mcb-azul)">${tiempoTexto}</strong>
        ${tiempo.unidad === 'horas' ? '' : ` · para el <strong style="color:var(--mcb-azul)">${dateStr}</strong>`}
      </p>
      <div class="cov-chart-wrap">
        <div class="cov-chart-label-y"><span>100%</span><span>50%</span><span>0%</span></div>
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
          <line x1="20" y1="60" x2="265" y2="60" stroke="#DDE0EE" stroke-width="1" stroke-dasharray="4,3"/>
          <path d="M20,115 C60,112 100,90 155,38 C190,15 230,7 262,5 L262,118 L20,118 Z"
            fill="url(#areaGrad)" opacity="0" id="covArea" style="transition: opacity 400ms ease 200ms"/>
          <path d="M20,115 C60,112 100,90 155,38 C190,15 230,7 262,5"
            stroke="url(#covGrad)" stroke-width="3.5" fill="none" stroke-linecap="round"
            stroke-dasharray="420" stroke-dashoffset="420" id="covLine"/>
          <circle cx="20" cy="115" r="5" fill="white" stroke="#A33050" stroke-width="2" opacity="0" id="covDotStart"/>
          <circle cx="262" cy="5" r="6" fill="white" stroke="#79A73A" stroke-width="2.5" opacity="0" id="covDot"/>
          <rect x="218" y="-16" width="58" height="19" rx="5" fill="#2B4FAF" opacity="0" id="covTooltipBg"/>
          <text x="247" y="-3" text-anchor="middle" font-size="9" fill="white" font-weight="700"
            font-family="Poppins, sans-serif" opacity="0" id="covTooltipTxt">100% protegido</text>
        </svg>
        <div class="cov-chart-label-x"><span>${todayStr}</span><span>${tiempo.unidad === 'horas' ? 'Hoy mismo' : dateStr}</span></div>
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

// ── Resumen final ─────────────────────────────────────────────────────────────

function renderSummary() {
  const name        = (state.answers['name'] || 'Cliente').split(' ')[0];
  const tipo        = state.answers['insurance_type'];
  const cliente     = state.answers['client_type'];
  const perfil      = calcularPerfilRiesgo();
  const tipoPerfil  = calcularTipoPerfil();
  const presupuesto = calcularPresupuestoSeguro();
  const tiempo      = calcularTiempoEmision();
  const tiempoTexto = `${tiempo.minTiempo}–${tiempo.maxTiempo} ${tiempo.unidad}`;

  return `
    <div class="card summary-card">

      <div class="summary-hero-row">
        <div class="summary-hero-text">
          <div class="summary-check">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M7 17l7 7 13-13" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="summary-brand-tag">MCBrokers — CREAMOS TRANQUILIDAD</p>
          <h2 class="summary-title">¡Listo, ${name}!<br>Aquí está tu perfil.</h2>
          <p class="summary-subtitle">
            Tiempo estimado para tu póliza: <strong>${tiempoTexto}</strong>.<br>Un asesor MCBrokers te guiará en cada paso.
          </p>
        </div>
        <div class="summary-char-wrap">
          <img class="char-img char-img--medium" src="assets/MCB Branding/PERSONAJES/7.png" alt="MCBrokers">
        </div>
      </div>

      <!-- Widget: Perfil de tranquilidad -->
      <div class="tranquilidad-widget">
        <div class="tranquilidad-header">
          <span class="tranquilidad-icon">${tipoPerfil.icono}</span>
          <div>
            <div class="tranquilidad-tipo">Perfil: ${tipoPerfil.tipo}</div>
            <div class="tranquilidad-sub">Nivel de protección estimado</div>
          </div>
        </div>
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
        <div class="prot-badge" style="border-color:${perfil.color}; color:${perfil.color}; background:${perfil.color}18">
          ${perfil.emoji}&nbsp;<strong>${perfil.categoria}</strong> — ${perfil.descripcion}
        </div>
        <div class="prot-cards">
          <div class="prot-card">
            <span class="prot-card-icon">🛡️</span>
            <span class="prot-card-label">Tipo de seguro</span>
            <span class="prot-card-value">${(INSURANCE_LABELS[tipo] || tipo).replace(/[🚗🏥💙🏠🐾✨]\s+/g,'')}</span>
          </div>
          <div class="prot-card">
            <span class="prot-card-icon">👤</span>
            <span class="prot-card-label">Perfil</span>
            <span class="prot-card-value">${tipoPerfil.tipo}</span>
          </div>
          ${state.answers['auto_coverage'] ? `
          <div class="prot-card">
            <span class="prot-card-icon">⚙️</span>
            <span class="prot-card-label">Cobertura auto</span>
            <span class="prot-card-value">${getLabelFor('auto_coverage', state.answers['auto_coverage'])}</span>
          </div>` : ''}
          ${state.answers['gmm_presupuesto'] ? `
          <div class="prot-card">
            <span class="prot-card-icon">💰</span>
            <span class="prot-card-label">Presupuesto GMM</span>
            <span class="prot-card-value">${getLabelFor('gmm_presupuesto', state.answers['gmm_presupuesto'])}</span>
          </div>` : ''}
          ${state.answers['vida_presupuesto'] ? `
          <div class="prot-card">
            <span class="prot-card-icon">💰</span>
            <span class="prot-card-label">Presupuesto vida</span>
            <span class="prot-card-value">${getLabelFor('vida_presupuesto', state.answers['vida_presupuesto'])}</span>
          </div>` : ''}
        </div>
      </div>

      <!-- Capacidad financiera estimada -->
      ${presupuesto ? `
      <div class="budget-widget">
        <p class="budget-widget-label">Capacidad estimada para seguros</p>
        <div class="budget-range">
          $${presupuesto.minMensual.toLocaleString('es-MX')} – $${presupuesto.maxMensual.toLocaleString('es-MX')}
          <span class="budget-range-unit">/ mes</span>
        </div>
        <p class="budget-sub">
          Basado en la regla del 10–15% de tu ingreso anual${presupuesto.gastosCuenta >= 2 ? ', ajustado por tus compromisos actuales' : ''}.
        </p>
        <div class="budget-meta">
          <span class="budget-meta-pill">📊 ${presupuesto.ingresoLabel}</span>
          ${presupuesto.gastosCuenta > 0
            ? `<span class="budget-meta-pill">${presupuesto.gastosCuenta} gasto${presupuesto.gastosCuenta > 1 ? 's' : ''} recurrente${presupuesto.gastosCuenta > 1 ? 's' : ''} considerado${presupuesto.gastosCuenta > 1 ? 's' : ''}</span>`
            : '<span class="budget-meta-pill">Sin compromisos fijos</span>'}
        </div>
      </div>
      ` : ''}

      <!-- Recomendación personalizada -->
      <div class="summary-recomendacion">
        <p class="summary-recomendacion-text">${getRecomendacionCopy()}</p>
      </div>

      <!-- Tiempo estimado de emisión -->
      <div class="tiempo-widget">
        <div class="tiempo-header">
          <span class="tiempo-icon">⏱️</span>
          <div>
            <div class="tiempo-titulo">Tiempo estimado de emisión</div>
            <div class="tiempo-rango">${tiempoTexto}</div>
          </div>
        </div>
        <div class="tiempo-razones">
          ${tiempo.razones.map(r => `<div class="tiempo-razon">· ${r}</div>`).join('')}
        </div>
      </div>

      <!-- Datos recopilados -->
      <div class="summary-section">
        <p class="summary-section-title">👤 Datos personales</p>
        ${summaryRow('Nombre', [state.answers['name']])}
        ${state.answers['contacto_telefono'] ? summaryRow('Teléfono', [state.answers['contacto_telefono']]) : ''}
        ${state.answers['contacto_email'] ? summaryRow('Correo', [state.answers['contacto_email']]) : ''}
        ${summaryRow('Seguro de interés', [(INSURANCE_LABELS[tipo] || tipo).replace(/[🚗🏥💙🏠🐾✨]\s+/g,'')])}
        ${state.answers['ingreso_anual'] ? summaryRow('Ingresos anuales aprox.', [getLabelFor('ingreso_anual', state.answers['ingreso_anual'])]) : ''}
        ${state.answers['gasto_recurrente'] ? summaryRow('Gastos recurrentes', getMultiLabels('gasto_recurrente', state.answers['gasto_recurrente']).map(l => l.replace(/[🏗️🏠🎒🚗💳🏥✅]\s+/g, ''))) : ''}
        ${presupuesto ? summaryRow('Presupuesto estimado', [`$${presupuesto.minMensual.toLocaleString('es-MX')} – $${presupuesto.maxMensual.toLocaleString('es-MX')} / mes`]) : ''}
      </div>

      ${(tipo === 'auto' || tipo === 'multi' || tipo === 'ambos') ? `
        <div class="summary-section">
          <p class="summary-section-title">🚗 Seguro de Auto</p>
          ${summaryRow('Cantidad de autos', [getLabelFor('auto_cantidad', state.answers['auto_cantidad'])])}
          ${summaryRow('Vehículo', [state.answers['auto_brand']])}
          ${summaryRow('Año', [getLabelFor('auto_year', state.answers['auto_year'])])}
          ${summaryRow('Uso', [getLabelFor('auto_use', state.answers['auto_use']).replace(/[🏠💼📦🚕]\s+/g,'')])}
          ${summaryRow('Siniestros previos', [getLabelFor('auto_accidents', state.answers['auto_accidents']).replace(/[✅1️⃣⚠️]\s+/g,'')])}
          ${summaryRow('Cobertura deseada', [getLabelFor('auto_coverage', state.answers['auto_coverage'])])}
        </div>
      ` : ''}

      ${tipo === 'gmm' ? `
        <div class="summary-section">
          <p class="summary-section-title">🏥 Gastos Médicos Mayores</p>
          ${summaryRow('Integrantes', [getLabelFor('gmm_integrantes', state.answers['gmm_integrantes']).replace(/[🙋💑👨‍👩‍👧👩‍👧]\s+/g,'')])}
          ${summaryRow('Edad titular', [getLabelFor('gmm_edad', state.answers['gmm_edad'])])}
          ${summaryRow('Cobertura actual', [getLabelFor('gmm_cobertura_actual', state.answers['gmm_cobertura_actual']).replace(/[❌🔵🟡🟢]\s+/g,'')])}
          ${summaryRow('Condición preexistente', [getLabelFor('gmm_preexistente', state.answers['gmm_preexistente']).replace(/[✅💊🔒]\s+/g,'')])}
          ${summaryRow('Red hospitalaria', [getLabelFor('gmm_red', state.answers['gmm_red']).replace(/[🏥⭐🌟]\s+/g,'')])}
          ${summaryRow('Presupuesto mensual', [getLabelFor('gmm_presupuesto', state.answers['gmm_presupuesto'])])}
        </div>
      ` : ''}

      ${(tipo === 'vida' || tipo === 'multi' || tipo === 'ambos') ? `
        <div class="summary-section">
          <p class="summary-section-title">💙 Vida y Protección</p>
          ${summaryRow('Etapa de vida', [getLabelFor('vida_etapa', state.answers['vida_etapa']).replace(/[🌱🏗️🔒🌟]\s+/g,'')])}
          ${summaryRow('Dependientes', getMultiLabels('vida_dependientes', state.answers['vida_dependientes']).map(l => l.replace(/[👧💑👴🏢🙋]\s+/g,'')))}
          ${summaryRow('Compromisos financieros', [getLabelFor('vida_deudas', state.answers['vida_deudas']).replace(/[🏠🚗💼✅]\s+/g,'')])}
          ${state.answers['vida_preexistente_detalle']
              ? summaryRow('Condición de salud', [state.answers['vida_preexistente_detalle']])
              : summaryRow('Condición de salud', [getLabelFor('vida_preexistente', state.answers['vida_preexistente']).replace(/[✅💊🔒]\s+/g,'')])}
          ${summaryRow('Objetivo principal', [getLabelFor('vida_objetivo', state.answers['vida_objetivo']).replace(/[🛡️💰📋🌟]\s+/g,'')])}
          ${summaryRow('Presupuesto mensual', [getLabelFor('vida_presupuesto', state.answers['vida_presupuesto'])])}
        </div>
      ` : ''}

      ${tipo === 'casa' ? `
        <div class="summary-section">
          <p class="summary-section-title">🏠 Seguro de Hogar</p>
          ${summaryRow('Tipo de tenencia', [getLabelFor('casa_tenencia', state.answers['casa_tenencia']).replace(/[🏠🔑🏗️]\s+/g,'')])}
          ${summaryRow('Tipo de inmueble', [getLabelFor('casa_tipo', state.answers['casa_tipo']).replace(/[🏠🏢🌅]\s+/g,'')])}
          ${summaryRow('Valor aproximado', [getLabelFor('casa_valor', state.answers['casa_valor'])])}
          ${summaryRow('Tipo de zona', [getLabelFor('casa_zona', state.answers['casa_zona']).replace(/[🏙️🌊⚡🌧️]\s+/g,'')])}
          ${summaryRow('Objetivo de cobertura', [getLabelFor('casa_objetivo', state.answers['casa_objetivo']).replace(/[🏗️📦🌟⚖️]\s+/g,'')])}
        </div>
      ` : ''}

      ${tipo === 'mascotas' ? `
        <div class="summary-section">
          <p class="summary-section-title">🐾 Seguro de Mascotas</p>
          ${summaryRow('Tipo de mascota', [getLabelFor('mascota_tipo', state.answers['mascota_tipo']).replace(/[🐶🐱🐠]\s+/g,'')])}
          ${summaryRow('Edad', [getLabelFor('mascota_edad', state.answers['mascota_edad']).replace(/[🐣🐾🐕]\s+/g,'')])}
          ${summaryRow('Raza', [getLabelFor('mascota_raza', state.answers['mascota_raza']).replace(/[🐾🏆]\s+/g,'')])}
          ${summaryRow('Cobertura deseada', [getLabelFor('mascota_cobertura', state.answers['mascota_cobertura']).replace(/[🚨🏥🌟💰]\s+/g,'')])}
        </div>
      ` : ''}

      <div class="summary-note">
        📞 Un asesor de <strong>MCBrokers</strong> te contactará para iniciar tu proceso.
        Tu póliza podría estar lista en aproximadamente <strong>${tiempoTexto}</strong>. Somos tu aliado, no tu vendedor.
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

// ── Manejadores ───────────────────────────────────────────────────────────────

function handleClientType(value) {
  if (state.animating) return;
  state.answers['client_type'] = value;
  buildProfilePath(value);
  goTo(state.currentIndex + 1, 'forward');
}

function handleBack() {
  if (state.currentIndex > 0) goTo(state.currentIndex - 1, 'backward');
}

function handleNext() {
  const step = currentStep();

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

  if (step.id === 'vida_preexistente') {
    if (value === 'controlada') {
      // Re-render el card en su lugar para mostrar el textarea (no avanzar)
      document.getElementById('app').innerHTML = renderQuestion(step);
      updateProgress();
      return;
    }
    // Limpiar el detalle si elige otra opción
    state.answers['vida_preexistente_detalle'] = '';
  }

  setTimeout(() => {
    if (state.currentIndex < state.fullPath.length - 1) {
      goTo(state.currentIndex + 1, 'forward');
    }
  }, 360);
}

function handlePreexDetalleContinuar() {
  const textarea = document.getElementById('preexDetalle');
  state.answers['vida_preexistente_detalle'] = textarea ? textarea.value.trim() : '';
  if (state.currentIndex < state.fullPath.length - 1) {
    goTo(state.currentIndex + 1, 'forward');
  }
}

function handleCoverageSelect(card, value) {
  if (state.animating) return;
  const step = currentStep();

  document.querySelectorAll('.coverage-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  state.answers[step.id] = value;

  document.querySelectorAll('.coverage-card').forEach(c => {
    const optValue = c.dataset.value;
    const opt = step.options.find(o => o.value === optValue);
    if (!opt) return;
    const isSelected  = optValue === value;
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

// ── Validación y guardado ─────────────────────────────────────────────────────

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

  if (step.type === 'contact-capture') {
    const phone  = document.getElementById('contactPhone');
    const acepta = document.getElementById('contactAcepta');
    if (!phone || !phone.value.trim() || !acepta || !acepta.checked) {
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
  if (step.type === 'contact-capture') {
    const phone = document.getElementById('contactPhone');
    const email = document.getElementById('contactEmail');
    if (phone) state.answers['contacto_telefono'] = phone.value.trim();
    if (email && email.value.trim()) state.answers['contacto_email'] = email.value.trim();
    state.answers['contacto_acepta'] = true;
  }
}

// ── Navegación y animación ────────────────────────────────────────────────────

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
