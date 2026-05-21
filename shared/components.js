
// PhysioAI design tokens + i18n
// Dark clinical aesthetic — cool ink background, cyan primary, soft success/warn.

const pxTokens = {
  // Background system — warmer muted indigo-slate, less inky
  bg: '#F5F1E8', // page / canvas
  surface: '#FFFFFF', // cards
  surface2: '#EDE7D9', // raised
  surface3: '#DDD5C2', // inputs, pressed
  line: 'rgba(60,48,30,0.08)',
  lineStrong: 'rgba(60,48,30,0.14)',

  // Ink — warm off-white
  ink: '#2A2823', // primary text
  ink2: '#6B655A', // secondary
  ink3: '#8A8275', // tertiary
  inkDim: '#5A564E',

  // Brand / accent — calmer soft teal
  brand: '#7FA876', // primary action / data
  brandDeep: '#52704A',
  brandSoft: 'rgba(127,168,118,0.14)',

  // Functional — muted / pastel
  good: '#7FA876',
  warn: '#C8955A',
  bad: '#B86C5A',

  // Radii + shadow
  r: { sm: 8, md: 12, lg: 18, xl: 24, pill: 999 },
  shadow: {
    sm: '0 1px 2px transparent',
    md: '0 8px 24px transparent',
    lg: '0 20px 60px rgba(0,0,0,0.5)',
    ring: '0 0 0 1px rgba(148,180,220,0.12)'
  },
  font: {
    sans: '"Inter Tight", "SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
    thai: '"IBM Plex Sans Thai", "Inter Tight", system-ui, sans-serif'
  }
};

// Bilingual copy — all mounted under one object so Tweaks can flip `lang`.
const pxI18n = {
  en: {
    appName: 'PhysioAI',
    tagline: 'On-device physiotherapy AI',
    // Modes (the 5 real modes)
    modes: {
      setup: 'Therapist Setup',
      practice: 'Patient Practice',
      dash: 'Therapist Dashboard',
      audio: 'Audio-Only',
      visual: 'Visual-Only'
    },
    modeHint: {
      setup: 'Prescribe exercises, set reps & targets',
      practice: 'Live session with real-time pose feedback',
      dash: 'Monitor patients & review session data',
      audio: 'For patients with visual impairment',
      visual: 'For patients who are deaf or hard of hearing'
    },
    // Common
    start: 'Start session',
    resume: 'Resume',
    pause: 'Pause',
    done: 'Finish',
    next: 'Next',
    back: 'Back',
    save: 'Save',
    cancel: 'Cancel',
    settings: 'Settings',
    today: 'Today',
    reps: 'reps',
    sets: 'sets',
    accuracy: 'Accuracy',
    score: 'Score',
    // Exercises
    ex: {
      shoulder: 'Shoulder flexion',
      knee: 'Knee extension',
      hip: 'Hip abduction',
      squat: 'Assisted squat',
      balance: 'Single-leg balance'
    },
    // Session
    rep: 'Rep',
    of: 'of',
    holdFor: 'Hold for',
    sec: 'sec',
    liftArm: 'Lift your right arm',
    higher: 'A little higher',
    great: 'Great — hold',
    lower: 'Lower slowly',
    goodForm: 'Good form',
    fixForm: 'Adjust shoulder',
    // Therapist dashboard
    patients: 'Patients',
    adherence: 'Adherence',
    avgScore: 'Avg. form score',
    sessions: 'Sessions this week',
    live: 'Live',
    offline: 'Offline',
    lastSeen: 'Last seen',
    review: 'Review',
    message: 'Message',
    alerts: 'Alerts',
    plan: 'Treatment plan'
  },
  th: {
    appName: 'PhysioAI',
    tagline: 'ปัญญาประดิษฐ์กายภาพบำบัดบนอุปกรณ์',
    modes: {
      setup: 'โหมดนักกายภาพ',
      practice: 'โหมดผู้ป่วย',
      dash: 'แดชบอร์ดนักกายภาพ',
      audio: 'โหมดเสียงอย่างเดียว',
      visual: 'โหมดภาพอย่างเดียว'
    },
    modeHint: {
      setup: 'สั่งท่า กำหนดจำนวนครั้งและเป้าหมาย',
      practice: 'เซสชันสดพร้อมฟีดแบคท่าทางแบบเรียลไทม์',
      dash: 'ติดตามผู้ป่วยและทบทวนข้อมูลเซสชัน',
      audio: 'สำหรับผู้พิการทางสายตา',
      visual: 'สำหรับผู้พิการทางการได้ยิน'
    },
    start: 'เริ่มเซสชัน',
    resume: 'ทำต่อ',
    pause: 'หยุดชั่วคราว',
    done: 'เสร็จสิ้น',
    next: 'ถัดไป',
    back: 'ย้อนกลับ',
    save: 'บันทึก',
    cancel: 'ยกเลิก',
    settings: 'ตั้งค่า',
    today: 'วันนี้',
    reps: 'ครั้ง',
    sets: 'เซ็ต',
    accuracy: 'ความแม่นยำ',
    score: 'คะแนน',
    ex: {
      shoulder: 'ยกแขนขึ้น',
      knee: 'เหยียดเข่า',
      hip: 'กางสะโพก',
      squat: 'สควอทช่วยพยุง',
      balance: 'ยืนขาเดียว'
    },
    rep: 'ครั้งที่',
    of: 'จาก',
    holdFor: 'ค้างไว้',
    sec: 'วินาที',
    liftArm: 'ยกแขนขวาขึ้น',
    higher: 'สูงอีกนิด',
    great: 'ดีมาก ค้างไว้',
    lower: 'ลดลงช้าๆ',
    goodForm: 'ท่าทางดี',
    fixForm: 'ปรับไหล่',
    patients: 'ผู้ป่วย',
    adherence: 'ความต่อเนื่อง',
    avgScore: 'คะแนนท่าเฉลี่ย',
    sessions: 'เซสชันสัปดาห์นี้',
    live: 'สด',
    offline: 'ออฟไลน์',
    lastSeen: 'ออนไลน์ล่าสุด',
    review: 'ทบทวน',
    message: 'ส่งข้อความ',
    alerts: 'แจ้งเตือน',
    plan: 'แผนการรักษา'
  }
};

// Tiny translation hook — reads lang from a context or falls back to 'en'
const LangCtx = React.createContext('en');
function useT() {
  const lang = React.useContext(LangCtx) || 'en';
  return { t: pxI18n[lang], lang };
}

Object.assign(window, { pxTokens, pxI18n, LangCtx, useT });


// Shared visual primitives used across mobile + dashboard

const T = window.pxTokens;

// ─── Monochrome stroke icon set (no emoji) ───
function Ico({ name, size = 20, color = 'currentColor', strokeWidth = 1.6 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    play: <polygon points="7,5 19,12 7,19" fill={color} stroke="none" />,
    pause: <><rect x="7" y="5" width="3.5" height="14" rx="1" fill={color} stroke="none" /><rect x="13.5" y="5" width="3.5" height="14" rx="1" fill={color} stroke="none" /></>,
    mic: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>,
    mic_off: <><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3M3 3l18 18" /><path d="M9 5a3 3 0 0 1 6 0v6" /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
    eye_off: <><path d="M2 12s3.5-7 10-7a11 11 0 0 1 4 .8M22 12s-3.5 7-10 7a11 11 0 0 1-4-.8" /><path d="M3 3l18 18" /></>,
    chev_r: <polyline points="9,6 15,12 9,18" />,
    chev_l: <polyline points="15,6 9,12 15,18" />,
    chev_d: <polyline points="6,9 12,15 18,9" />,
    close: <><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
    check: <polyline points="4,12 10,18 20,6" />,
    cam: <><rect x="2" y="7" width="15" height="12" rx="2" /><path d="M17 10l5-3v10l-5-3Z" /></>,
    body: <><circle cx="12" cy="4.5" r="2" /><path d="M12 6.5v6M7 9l10 0M9 12.5l-2 8M15 12.5l2 8" /></>,
    bolt: <polygon points="13,2 4,14 11,14 10,22 20,10 13,10" fill={color} stroke="none" />,
    sig: <><path d="M3 20v-4M8 20v-8M13 20V8M18 20V4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></>,
    users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M17 20c0-3 2-5 4.5-5" /></>,
    home: <><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /></>,
    chart: <><path d="M3 20h18" /><path d="M6 17v-6M11 17V7M16 17v-9" /></>,
    cal: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
    set: <><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.2-1.7l2-1.5-2-3.5-2.3 1a7 7 0 0 0-3-1.7L13 2h-4l-.5 2.6a7 7 0 0 0-3 1.7l-2.3-1-2 3.5 2 1.5A7 7 0 0 0 3 12c0 .6.1 1.1.2 1.7l-2 1.5 2 3.5 2.3-1a7 7 0 0 0 3 1.7L9 22h4l.5-2.6a7 7 0 0 0 3-1.7l2.3 1 2-3.5-2-1.5c.1-.6.2-1.1.2-1.7Z" /></>,
    bell: <><path d="M6 9a6 6 0 1 1 12 0v5l2 3H4l2-3V9Z" /><path d="M10 20a2 2 0 0 0 4 0" /></>,
    speak: <><polygon points="4,9 8,9 13,5 13,19 8,15 4,15" fill={color} stroke="none" /><path d="M17 8a5 5 0 0 1 0 8M19.5 5.5a8 8 0 0 1 0 13" /></>,
    wave: <><path d="M3 12h2l2-6 3 12 3-8 2 4h6" /></>,
    arrow_r: <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13,6 19,12 13,18" /></>,
    vibrate: <><rect x="7" y="5" width="10" height="14" rx="2" /><path d="M3 10v4M21 10v4" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>
  };
  return <svg {...p}>{paths[name] || null}</svg>;
}

// ─── Pose skeleton — animated SVG simulating MediaPipe BlazePose keypoints ───
// `phase`: 0..1 lerps between "arm down" and "arm up" reference pose.
// `variant`: 'shoulder' | 'knee' | 'hip' — different skeletons
// `targetDeviation`: 0..1; if >0, draws angled line + red delta marker
function PoseSkeleton({ phase = 0, variant = 'shoulder', stroke = T.brand, refStroke = 'rgba(95,212,230,0.25)', showRef = true, mirror = 0, accent = T.good }) {
  // Keypoints in a 240x400 viewbox; fixed base, animate arm/leg by phase.
  // Uses rough human proportions, not anatomically perfect — it's for demo.
  const head = [120, 60];
  const neck = [120, 95];
  const hip = [120, 220];
  const lSh = [92, 105];
  const rSh = [148, 105];
  const lHip = [100, 220];
  const rHip = [140, 220];
  const lKn = [96, 290];
  const rKn = [144, 290];
  const lAn = [94, 355];
  const rAn = [146, 355];
  const lEl = [80, 160];
  // Right arm animates: start by side, end overhead
  const armStart = [165, 170]; // elbow down
  const armEnd = [175, 50]; // elbow up
  const wristStart = [178, 210];
  const wristEnd = [182, 15];
  const rEl = [armStart[0] + (armEnd[0] - armStart[0]) * phase + mirror * 3, armStart[1] + (armEnd[1] - armStart[1]) * phase];
  const rWr = [wristStart[0] + (wristEnd[0] - wristStart[0]) * phase + mirror * 5, wristStart[1] + (wristEnd[1] - wristStart[1]) * phase];
  const lWr = [70, 215];

  const ref = { rEl: armEnd, rWr: wristEnd };

  const Line = ({ from, to, s = stroke, sw = 3 }) =>
  <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={s} strokeWidth={sw} strokeLinecap="round" />;

  const Dot = ({ at, s = stroke, r = 4 }) =>
  <circle cx={at[0]} cy={at[1]} r={r} fill={s} />;


  return (
    <svg viewBox="0 0 240 400" width="100%" height="100%" style={{ overflow: 'visible' }}>
      {/* reference ghost skeleton (the target pose) */}
      {showRef &&
      <g opacity={0.9}>
          <Line from={rSh} to={ref.rEl} s={refStroke} sw={6} />
          <Line from={ref.rEl} to={ref.rWr} s={refStroke} sw={6} />
        </g>
      }

      {/* body */}
      <g>
        <circle cx={head[0]} cy={head[1]} r={22} fill="none" stroke={stroke} strokeWidth={3} />
        <Line from={neck} to={hip} />
        <Line from={lSh} to={rSh} />
        <Line from={lHip} to={rHip} />
        {/* left arm static */}
        <Line from={lSh} to={lEl} />
        <Line from={lEl} to={lWr} />
        {/* right arm animated */}
        <Line from={rSh} to={rEl} s={accent} sw={3.5} />
        <Line from={rEl} to={rWr} s={accent} sw={3.5} />
        {/* legs */}
        <Line from={lHip} to={lKn} />
        <Line from={lKn} to={lAn} />
        <Line from={rHip} to={rKn} />
        <Line from={rKn} to={rAn} />

        {/* joints */}
        {[neck, lSh, rSh, lHip, rHip, lKn, rKn, lEl, lWr, hip].map((p, i) => <Dot key={i} at={p} />)}
        <Dot at={rEl} s={accent} r={5} />
        <Dot at={rWr} s={accent} r={5} />
      </g>
    </svg>);

}

// ─── Badge / pill / chip ───
function Pill({ children, tone = 'neutral', size = 'md', style }) {
  const map = {
    neutral: { bg: 'rgba(148,180,220,0.10)', fg: T.ink2, dot: T.ink3 },
    brand: { bg: T.brandSoft, fg: T.brand, dot: T.brand },
    good: { bg: 'rgba(127,168,118,0.14)', fg: T.good, dot: T.good },
    warn: { bg: 'rgba(200,149,90,0.14)', fg: T.warn, dot: T.warn },
    bad: { bg: 'rgba(184,108,90,0.14)', fg: T.bad, dot: T.bad }
  }[tone];
  const s = size === 'sm' ? { padding: '3px 8px', fontSize: 11 } : { padding: '5px 10px', fontSize: 12 };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: map.bg, color: map.fg,
      borderRadius: T.r.pill, letterSpacing: 0.2, fontWeight: 500,
      ...s, ...style
    }}>{children}</span>);

}

function Dot({ color = T.ink3, size = 6, style }) {
  return <span style={{ display: 'inline-block', width: size, height: size, borderRadius: 9999, background: color, ...style }} />;
}

// Animated live dot
function LiveDot({ color = T.bad }) {
  return (
    <span style={{ position: 'relative', width: 8, height: 8, display: 'inline-block' }}>
      <span style={{ position: 'absolute', inset: 0, borderRadius: 9999, background: color, animation: 'px-pulse 1.4s ease-out infinite' }} />
      <span style={{ position: 'absolute', inset: 2, borderRadius: 9999, background: color }} />
    </span>);

}

// Thin divider
function Rule({ v = false, style }) {
  return v ?
  <div style={{ width: 1, alignSelf: 'stretch', background: T.line, ...style }} /> :
  <div style={{ height: 1, background: T.line, ...style }} />;
}

// Tiny sparkline
function Spark({ points, width = 80, height = 22, color = T.brand }) {
  const max = Math.max(...points),min = Math.min(...points);
  const d = points.map((p, i) => {
    const x = i / (points.length - 1) * width;
    const y = height - (p - min) / (max - min + 0.0001) * height;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  return (
    <svg width={width} height={height}>
      <path d={d} stroke={color} strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}

// Radial progress ring
function Ring({ value = 0, size = 72, thickness = 6, color = T.brand, track = 'rgba(148,180,220,0.12)', children, fontSize = 18 }) {
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const dash = c * value;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} stroke={track} strokeWidth={thickness} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={r} stroke={color} strokeWidth={thickness} fill="none"
        strokeDasharray={`${dash} ${c}`} strokeLinecap="round"
        style={{ transition: 'stroke-dasharray .6s cubic-bezier(.2,.7,.3,1)' }} />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: T.ink, fontWeight: 600, fontSize, fontFamily: T.font.sans
      }}>{children}</div>
    </div>);

}

// ─── Audio-feedback waveform (animated bars) ───
function AudioBars({ active = true, color = T.brand, bars = 18, height = 40 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, height }}>
      {Array.from({ length: bars }).map((_, i) =>
      <div key={i} style={{
        width: 3, borderRadius: 2, background: color,
        height: `${20 + Math.sin(i * 0.9) * 10 + (active ? 30 : 0)}%`,
        animation: active ? `px-bar ${0.7 + i % 5 * 0.12}s ease-in-out ${i * 0.05}s infinite alternate` : 'none',
        opacity: active ? 1 : 0.35
      }} />
      )}
    </div>);

}

// Shared CSS keyframes
function PxKeyframes() {
  return (
    <style>{`
      @keyframes px-pulse { 0%{transform:scale(1);opacity:.55} 70%{transform:scale(2.6);opacity:0} 100%{opacity:0} }
      @keyframes px-bar { from { height: 12% } to { height: 85% } }
      @keyframes px-fade-in { from{opacity:0; transform: translateY(4px)} to{opacity:1; transform:none} }
      @keyframes px-scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(100%)} }
      @keyframes px-rip { 0%{transform:scale(0.6);opacity:.7} 100%{transform:scale(2.4);opacity:0} }
      @keyframes px-dash { to { stroke-dashoffset: -40 } }
      @keyframes px-shimmer { 0%{background-position: -200% 0} 100%{background-position: 200% 0} }
      .px-fade-in { animation: px-fade-in .32s cubic-bezier(.2,.7,.3,1) both; }
    `}</style>);

}

Object.assign(window, { Ico, PoseSkeleton, Pill, Dot, LiveDot, Rule, Spark, Ring, AudioBars, PxKeyframes });
// Mobile screens — wrapped in an iPhone-like frame we draw inline (simpler than IOSDevice — we want a consistent dark-mode bezel and no dependencies on status bar color logic).

const MT = window.pxTokens;

// ─── Bezel wrapper. 390×844 content area; fixed size so it sits neatly in a canvas artboard. ───
function Phone({ children, chromeColor = '#0F1626', notch = true, label, height = 844, width = 390 }) {
  return (
    <div style={{
      width: width + 22, height: height + 22,
      borderRadius: 56, padding: 11,
      background: 'linear-gradient(180deg, #E8E0CC, #2A2823)',
      boxShadow: `${MT.shadow.lg}, inset 0 0 0 1px rgba(148,180,220,0.18)`,
      position: 'relative'
    }}>
      <div style={{
        width, height,
        borderRadius: 46, overflow: 'hidden',
        position: 'relative',
        background: MT.bg,
        color: MT.ink,
        fontFamily: MT.font.sans,
        boxShadow: 'inset 0 0 0 1.5px #000'
      }}>
        {/* status bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 48, zIndex: 30,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 28px 0 28px', pointerEvents: 'none',
          fontSize: 15, fontWeight: 600, color: MT.ink, letterSpacing: 0.2
        }}>
          <span>9:41</span>
          {notch &&
          <div style={{
            position: 'absolute', left: '50%', top: 10, transform: 'translateX(-50%)',
            width: 120, height: 34, background: '#000', borderRadius: 22
          }} />
          }
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <Ico name="sig" size={16} color={MT.ink} />
            <Ico name="globe" size={14} color={MT.ink} />
            <div style={{ width: 24, height: 12, borderRadius: 3, border: `1px solid ${MT.ink}`, position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 1.5, width: '80%', background: MT.ink, borderRadius: 1.5 }} />
            </div>
          </div>
        </div>
        {children}
        {/* home indicator */}
        <div style={{
          position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
          width: 134, height: 5, borderRadius: 99, background: 'rgba(230,238,251,0.55)', zIndex: 20
        }} />
      </div>
    </div>);

}

// ─── Reusable full-height mobile surface ───
function MobilePage({ children, pad = 24, topPad = 60, bottomPad = 40, style }) {
  return (
    <div style={{ width: '100%', height: '100%', padding: `${topPad}px ${pad}px ${bottomPad}px`, boxSizing: 'border-box', position: 'relative', ...style }}>
      {children}
    </div>);

}

// ─── Mode picker (the headline feature) ───
function ModeCard({ iconName, title, hint, active = false, accent = MT.brand, onClick }) {
  return (
    <button onClick={onClick} style={{
      appearance: 'none', border: 0, textAlign: 'left',
      width: '100%', padding: '14px 16px',
      background: active ? MT.brandSoft : MT.surface,
      borderRadius: 14,
      boxShadow: active ? `inset 0 0 0 1.5px ${accent}` : `inset 0 0 0 1px ${MT.line}`,
      color: MT.ink, fontFamily: MT.font.sans, cursor: 'pointer',
      display: 'flex', alignItems: 'center', gap: 14,
      transition: 'all .18s'
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: active ? accent : 'rgba(148,180,220,0.08)',
        color: active ? '#F5F1E8' : MT.ink2,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
      }}>
        <Ico name={iconName} size={20} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: MT.ink }}>{title}</div>
        <div style={{ fontSize: 12.5, color: MT.ink3, marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{hint}</div>
      </div>
      {active && <Ico name="check" size={18} color={accent} />}
    </button>);

}

// ─── 1) Mode picker screen (home) ───
function ScreenModes({ current, setCurrent }) {
  const { t } = useT();
  // Mobile App is Patient-only — Therapist modes (Setup, Dashboard) live on Web.
  const modes = [
  { key: 'practice', icon: 'body', accent: MT.good },
  { key: 'audio', icon: 'speak', accent: '#9B7A62' },
  { key: 'visual', icon: 'eye', accent: '#B86C5A' }];

  return (
    <MobilePage>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 1.4, color: MT.ink3, textTransform: 'uppercase' }}>{t.appName}</div>
          <div style={{ fontSize: 26, fontWeight: 600, color: MT.ink, letterSpacing: -0.4, marginTop: 4 }}>{t.tagline}</div>
        </div>
        <div style={{
          width: 44, height: 44, borderRadius: 22,
          background: MT.surface, display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `inset 0 0 0 1px ${MT.line}`
        }}>
          <Ico name="user" size={20} color={MT.ink2} />
        </div>
      </div>

      <div style={{ fontSize: 12, letterSpacing: 1, color: MT.ink3, textTransform: 'uppercase', marginBottom: 10 }}>
        Choose mode
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {modes.map((m) =>
        <ModeCard key={m.key}
        iconName={m.icon}
        title={t.modes[m.key]}
        hint={t.modeHint[m.key]}
        active={current === m.key}
        accent={m.accent}
        onClick={() => setCurrent(m.key)} />

        )}
      </div>

      {/* Status line */}
      <div style={{
        position: 'absolute', left: 24, right: 24, bottom: 32,
        display: 'flex', alignItems: 'center', gap: 10, color: MT.ink3, fontSize: 12
      }}>
        <Dot color={MT.good} size={7} />
        <span>On-device AI active · Offline-ready</span>
      </div>
    </MobilePage>);

}

// ─── 2) Therapist Setup — prescribe exercises for a patient ───
function ScreenSetup() {
  const { t } = useT();
  const [prescribed, setPrescribed] = React.useState(['shoulder', 'knee']);
  const lib = [
  { k: 'shoulder', reps: 12, sets: 3, target: 160 },
  { k: 'knee', reps: 15, sets: 2, target: 170 },
  { k: 'hip', reps: 12, sets: 2, target: 35 },
  { k: 'squat', reps: 10, sets: 3, target: 90 },
  { k: 'balance', reps: 3, sets: 2, target: 30 }];

  return (
    <MobilePage>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 10, background: MT.surface,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `inset 0 0 0 1px ${MT.line}`
        }}>
          <Ico name="chev_l" size={16} color={MT.ink2} />
        </div>
        <Pill tone="brand">{t.modes.setup}</Pill>
      </div>
      <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.3, marginTop: 14, marginBottom: 2 }}>
        Aree S.
      </div>
      <div style={{ fontSize: 13, color: MT.ink3, marginBottom: 18 }}>
        Post-op knee · week 3 of 8
      </div>

      {/* Patient summary row */}
      <div style={{
        display: 'flex', gap: 10, marginBottom: 18
      }}>
        {[
        { label: 'Adherence', v: '86%', tone: 'good' },
        { label: 'Avg. form', v: '91', tone: 'brand' },
        { label: 'Sessions', v: '14', tone: 'neutral' }].
        map((s) =>
        <div key={s.label} style={{
          flex: 1, padding: '10px 12px', background: MT.surface, borderRadius: 12,
          boxShadow: `inset 0 0 0 1px ${MT.line}`
        }}>
            <div style={{ fontSize: 11, color: MT.ink3, letterSpacing: 0.4, textTransform: 'uppercase' }}>{s.label}</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: MT.ink, marginTop: 2 }}>{s.v}</div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <div style={{ fontSize: 12, letterSpacing: 1, color: MT.ink3, textTransform: 'uppercase' }}>{t.plan}</div>
        <span style={{ fontSize: 12, color: MT.brand, fontWeight: 500 }}>Edit</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {lib.map((ex) => {
          const on = prescribed.includes(ex.k);
          return (
            <div key={ex.k} onClick={() => setPrescribed((p) => on ? p.filter((x) => x !== ex.k) : [...p, ex.k])}
            style={{
              padding: '12px 14px',
              background: MT.surface, borderRadius: 12, cursor: 'pointer',
              boxShadow: on ? `inset 0 0 0 1.5px ${MT.brand}` : `inset 0 0 0 1px ${MT.line}`,
              display: 'flex', alignItems: 'center', gap: 12,
              transition: 'all .15s'
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 9,
                background: on ? MT.brand : 'transparent',
                boxShadow: on ? 'none' : `inset 0 0 0 1.5px ${MT.line}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F5F1E8'
              }}>
                {on && <Ico name="check" size={16} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14.5, fontWeight: 500, color: MT.ink }}>{t.ex[ex.k]}</div>
                <div style={{ fontSize: 12, color: MT.ink3, marginTop: 2 }}>
                  {ex.reps} {t.reps} · {ex.sets} {t.sets} · target {ex.target}°
                </div>
              </div>
            </div>);

        })}
      </div>

      <button style={{
        position: 'absolute', left: 24, right: 24, bottom: 32,
        height: 52, border: 0, borderRadius: 16, background: MT.brand, color: '#F5F1E8',
        fontSize: 15, fontWeight: 600, fontFamily: MT.font.sans, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
      }}>
        {t.save} ({prescribed.length})
        <Ico name="arrow_r" size={18} color="#F5F1E8" />
      </button>
    </MobilePage>);

}

// ─── 3) Patient Practice — the hero live-session screen ───
function ScreenPractice() {
  const { t } = useT();
  const [phase, setPhase] = React.useState(0); // 0..1 simulated arm position
  const [running, setRunning] = React.useState(true);
  const [rep, setRep] = React.useState(3);
  const [held, setHeld] = React.useState(2.1);

  // Animate phase up-and-down slowly
  React.useEffect(() => {
    if (!running) return;
    let raf,t0 = performance.now();
    const tick = (now) => {
      const elapsed = (now - t0) / 1000;
      const p = 0.5 - 0.5 * Math.cos(elapsed % 4 * Math.PI / 2);
      setPhase(p);
      if (p > 0.9) setHeld((h) => Math.min(3, h + 0.03));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  const angle = Math.round(phase * 168);
  const target = 160;
  const accuracy = Math.max(0, 100 - Math.abs(angle - target) * 0.8);
  const cueKey = phase < 0.3 ? 'liftArm' : phase < 0.7 ? 'higher' : phase < 0.92 ? 'great' : 'goodForm';

  return (
    <MobilePage pad={0} topPad={0} bottomPad={0}>
      {/* "Camera" simulated background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 40%, #FBF8F0 0%, #E8E0CC 70%)'
      }}>
        {/* scanline */}
        <div style={{
          position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.35
        }}>
          <div style={{
            position: 'absolute', left: 0, right: 0, height: 140,
            background: 'linear-gradient(180deg, transparent, rgba(127,168,118,0.20), transparent)',
            animation: 'px-scan 3.2s linear infinite'
          }} />
        </div>
        {/* grid overlay */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
          <defs>
            <pattern id="g" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M30 0H0V30" fill="none" stroke={MT.brand} strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
        {/* pose */}
        <div style={{ position: 'absolute', left: '50%', top: 120, transform: 'translateX(-50%)', width: 260, height: 420 }}>
          <PoseSkeleton phase={phase} accent={accuracy > 85 ? MT.good : accuracy > 60 ? MT.warn : MT.bad} />
        </div>

        {/* Angle readout near wrist */}
        <div style={{
          position: 'absolute', left: 140 + phase * 40, top: 150 - phase * 100,
          transition: 'all .08s linear',
          color: accuracy > 85 ? MT.good : accuracy > 60 ? MT.warn : MT.bad,
          fontFamily: MT.font.mono, fontSize: 13, fontWeight: 600,
          background: 'rgba(255,248,235,0.82)', padding: '2px 6px', borderRadius: 6,
          backdropFilter: 'blur(4px)'
        }}>
          {angle}° / {target}°
        </div>
      </div>

      {/* Top chrome */}
      <div style={{ position: 'absolute', top: 56, left: 20, right: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px 6px 8px',
          background: 'rgba(255,248,235,0.72)', borderRadius: 999, backdropFilter: 'blur(10px)',
          boxShadow: `inset 0 0 0 1px ${MT.line}`
        }}>
          <Ico name="chev_l" size={16} color={MT.ink} />
          <span style={{ fontSize: 12.5, color: MT.ink, fontWeight: 500 }}>{t.ex.shoulder}</span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px',
          borderRadius: 999, backdropFilter: 'blur(10px)',
          boxShadow: `inset 0 0 0 1px ${MT.line}`, color: MT.bad, fontSize: 12, fontWeight: 600, background: 'rgba(255,248,235,0.88)'
        }}>
          <LiveDot />  Shoulder flexion

        </div>
      </div>

      {/* Rep counter + progress */}
      <div style={{ position: 'absolute', top: 110, left: 20, right: 20, display: 'flex', gap: 8 }}>
        {Array.from({ length: 12 }).map((_, i) =>
        <div key={i} style={{
          flex: 1, height: 3, borderRadius: 2,
          background: i < rep ? MT.good : i === rep ? MT.brand : 'rgba(148,180,220,0.18)'
        }} />
        )}
      </div>
      <div style={{ position: 'absolute', top: 124, left: 20, color: MT.ink2, fontSize: 11, letterSpacing: 0.8, textTransform: 'uppercase' }}>
        {t.rep} {rep + 1} {t.of} 12
      </div>

      {/* Cue card */}
      <div style={{
        position: 'absolute', left: 20, right: 20, bottom: 180,
        padding: '14px 16px',
        backdropFilter: 'blur(16px)',
        borderRadius: 18, boxShadow: `inset 0 0 0 1px ${MT.line}`,
        display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,248,235,0.88)'
      }}>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: MT.brandSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ico name="speak" size={20} color={MT.brand} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: MT.ink3, letterSpacing: 0.8, textTransform: 'uppercase' }}>TTS cue</div>
          <div key={cueKey} className="px-fade-in" style={{ fontSize: 16, color: MT.ink, fontWeight: 500, marginTop: 2 }}>
            {t[cueKey]}
          </div>
        </div>
        <AudioBars active={running} color={MT.brand} bars={8} height={28} />
      </div>

      {/* Bottom stats + controls */}
      <div style={{
        position: 'absolute', left: 20, right: 20, bottom: 36,
        padding: 14, backdropFilter: 'blur(16px)',
        borderRadius: 22, boxShadow: `inset 0 0 0 1px ${MT.line}`,
        display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(255,248,235,0.88)'
      }}>
        <Ring value={accuracy / 100} size={58} thickness={5}
        color={accuracy > 85 ? MT.good : accuracy > 60 ? MT.warn : MT.bad}
        fontSize={15}>
          {Math.round(accuracy)}
        </Ring>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ fontSize: 11, color: MT.ink3, letterSpacing: 0.6, textTransform: 'uppercase' }}>{t.accuracy}</div>
          <div style={{ fontSize: 14, color: MT.ink, fontWeight: 500 }}>{t.holdFor} {held.toFixed(1)}{t.sec === 'sec' ? 's' : ' ' + t.sec}</div>
        </div>
        <button onClick={() => setRunning((r) => !r)} style={{
          width: 56, height: 56, borderRadius: 999, border: 0,
          background: running ? MT.surface2 : MT.brand,
          color: running ? MT.ink : '#F5F1E8', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: running ? `inset 0 0 0 1px ${MT.lineStrong}` : 'none'
        }}>
          <Ico name={running ? 'pause' : 'play'} size={22} />
        </button>
      </div>
    </MobilePage>);

}

// ─── 4) Audio-Only mode (for blind patients) ───
function ScreenAudio() {
  const { t } = useT();
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    let raf,t0 = performance.now();
    const tick = (now) => {
      const p = 0.5 - 0.5 * Math.cos((now - t0) / 1000 % 3 * Math.PI * 2 / 3);
      setPhase(p);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <MobilePage pad={28} topPad={70}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
        <Pill tone="neutral" style={{ background: 'rgba(155,122,98,0.14)', color: '#9B7A62' }}>
          <Ico name="speak" size={12} /> {t.modes.audio}
        </Pill>
      </div>

      <div style={{ fontSize: 12, letterSpacing: 1, color: MT.ink3, textTransform: 'uppercase', marginBottom: 4 }}>
        Now speaking
      </div>
      <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.6, lineHeight: 1.15, textWrap: 'pretty', color: MT.ink, marginBottom: 24 }}>
        "{t.liftArm}. {t.higher}."
      </div>

      {/* Huge waveform taking center stage */}
      <div style={{
        padding: 32, borderRadius: 28,
        background: 'radial-gradient(ellipse at center, rgba(155,122,98,0.14), rgba(255,248,235,0))',
        display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 240,
        position: 'relative', overflow: 'hidden'
      }}>
        {/* concentric ripples — high-contrast feedback for hearing */}
        {[0, 1, 2].map((i) =>
        <div key={i} style={{
          position: 'absolute', width: 120, height: 120, borderRadius: 999,
          border: '2px solid #9B7A62',
          animation: `px-rip 2.4s ease-out ${i * 0.8}s infinite`
        }} />
        )}
        <div style={{
          width: 120, height: 120, borderRadius: 999,
          background: '#9B7A62', color: '#EEE4D4',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 40px rgba(155,122,98,0.4)'
        }}>
          <Ico name="speak" size={48} />
        </div>
      </div>

      <AudioBars bars={28} color="#9B7A62" height={56} />

      {/* Controls — larger hit targets */}
      <div style={{
        position: 'absolute', left: 28, right: 28, bottom: 40,
        display: 'flex', gap: 12
      }}>
        <button style={{
          flex: 1, height: 72, borderRadius: 20, border: 0,
          background: MT.surface, color: MT.ink,
          fontSize: 16, fontWeight: 600, fontFamily: MT.font.sans,
          boxShadow: `inset 0 0 0 1px ${MT.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10
        }}>
          <Ico name="chev_l" size={20} /> Repeat
        </button>
        <button style={{
          flex: 2, height: 72, borderRadius: 20, border: 0,
          background: '#9B7A62', color: '#EEE4D4',
          fontSize: 17, fontWeight: 700, fontFamily: MT.font.sans, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10
        }}>
          <Ico name="mic" size={20} color="#EEE4D4" /> Voice command
        </button>
      </div>
    </MobilePage>);

}

// ─── 5) Visual-Only mode (for deaf patients) ───
function ScreenVisual() {
  const { t } = useT();
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    let raf,t0 = performance.now();
    const tick = (now) => {
      const p = 0.5 - 0.5 * Math.cos((now - t0) / 1000 % 3.2 * Math.PI / 1.6);
      setPhase(p);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const angle = Math.round(phase * 168);
  const target = 160;
  const accuracy = Math.max(0, 100 - Math.abs(angle - target) * 0.8);

  return (
    <MobilePage pad={0} topPad={0} bottomPad={0}>
      {/* Camera BG */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 40%, #FBF8F0 0%, #E8E0CC 70%)' }} />

      {/* Big color-coded frame border — silent visual alerts */}
      <div style={{
        position: 'absolute', inset: 0,
        boxShadow: `inset 0 0 0 6px ${accuracy > 85 ? MT.good : accuracy > 60 ? MT.warn : MT.bad}`,
        borderRadius: 46,
        transition: 'box-shadow .3s'
      }} />

      {/* Top pill */}
      <div style={{ position: 'absolute', top: 56, left: 20, right: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Pill style={{ background: 'rgba(232,168,184,0.14)', color: '#B86C5A' }}>
          <Ico name="eye" size={12} /> {t.modes.visual}
        </Pill>
        <Pill tone="neutral" style={{ background: 'rgba(255,248,235,0.82)' }}>
          <Ico name="mic_off" size={12} /> Silent
        </Pill>
      </div>

      {/* Pose + big arrow cues */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 120, height: 440, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 220, height: 400 }}>
          <PoseSkeleton phase={phase} accent={accuracy > 85 ? MT.good : accuracy > 60 ? MT.warn : MT.bad} stroke={MT.ink2} />
        </div>
        {/* Directional arrow cue — huge visual */}
        {accuracy < 85 &&
        <div style={{
          position: 'absolute', right: 40, top: 100,
          width: 64, height: 64, borderRadius: 999,
          background: '#B86C5A', color: '#F0DCD2',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'px-rip 1.4s ease-out infinite',
          boxShadow: '0 0 30px rgba(232,168,184,0.5)'
        }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F0DCD2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="6,11 12,5 18,11" />
            </svg>
          </div>
        }
      </div>

      {/* Giant visual cue text + icon */}
      <div style={{
        position: 'absolute', left: 20, right: 20, bottom: 170,
        padding: 18, borderRadius: 22,
        background: 'rgba(255,248,235,0.92)', backdropFilter: 'blur(16px)',
        boxShadow: `inset 0 0 0 1px ${MT.lineStrong}`,
        display: 'flex', gap: 14, alignItems: 'center'
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: 16,
          background: accuracy > 85 ? 'rgba(124,224,176,0.2)' : 'rgba(232,168,184,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: accuracy > 85 ? MT.good : '#B86C5A'
        }}>
          {accuracy > 85 ? <Ico name="check" size={28} /> : <Ico name="arrow_r" size={28} />}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: MT.ink3, letterSpacing: 0.8, textTransform: 'uppercase' }}>Visual cue</div>
          <div style={{ fontSize: 22, fontWeight: 600, color: MT.ink, marginTop: 2, letterSpacing: -0.3 }}>
            {accuracy > 85 ? t.great : t.higher}
          </div>
        </div>
      </div>

      {/* Angle readout — big & visual */}
      <div style={{
        position: 'absolute', left: 20, right: 20, bottom: 40,
        padding: 14, background: 'rgba(255,248,235,0.88)', backdropFilter: 'blur(16px)',
        borderRadius: 22, boxShadow: `inset 0 0 0 1px ${MT.line}`,
        display: 'flex', alignItems: 'center', gap: 14
      }}>
        <Ring value={accuracy / 100} size={58} thickness={5}
        color={accuracy > 85 ? MT.good : accuracy > 60 ? MT.warn : MT.bad}
        fontSize={15}>
          {angle}°
        </Ring>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: MT.ink3, letterSpacing: 0.6, textTransform: 'uppercase' }}>Target</div>
          <div style={{ fontSize: 15, color: MT.ink, fontWeight: 500 }}>{target}° · {t.rep} 4 {t.of} 12</div>
        </div>
        <button style={{
          width: 56, height: 56, borderRadius: 999, border: 0,
          background: MT.surface2, color: MT.ink,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Ico name="pause" size={22} />
        </button>
      </div>
    </MobilePage>);

}

Object.assign(window, { Phone, ScreenModes, ScreenSetup, ScreenPractice, ScreenAudio, ScreenVisual });


// Therapist web dashboard — monitors patients, live sessions, analytics

const DT = window.pxTokens;

function BrowserChrome({ children, url = 'physioai.app/clinic', height = 780, width = 1280 }) {
  return (
    <div style={{
      width, height, borderRadius: 16, overflow: 'hidden',
      background: DT.bg, color: DT.ink,
      fontFamily: DT.font.sans,
      boxShadow: `${DT.shadow.lg}, inset 0 0 0 1px ${DT.lineStrong}`
    }}>
      <div style={{
        height: 40, background: '#FAF6EC', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10,
        boxShadow: `inset 0 -1px 0 ${DT.line}`
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c) =>
          <div key={c} style={{ width: 11, height: 11, borderRadius: 999, background: c }} />
          )}
        </div>
        <div style={{
          flex: 1, margin: '0 80px', padding: '5px 12px',
          background: '#2A2823', borderRadius: 8,
          fontSize: 12, color: DT.ink3, display: 'flex', alignItems: 'center', gap: 8
        }}>
          <Ico name="globe" size={12} color={DT.ink3} />
          <span>{url}</span>
        </div>
      </div>
      <div style={{ width: '100%', height: height - 40, overflow: 'hidden' }}>
        {children}
      </div>
    </div>);

}

// ─── Dashboard metadata: 5 accessibility modes, 3 disability categories ───
const MODE_META = {
  standard:    { en: 'Standard',     th: 'มาตรฐาน',           icon: 'body',   color: '#7FA876' },
  simplified:  { en: 'Simplified',   th: 'แบบง่าย',           icon: 'eye',    color: '#C8955A' },
  caregiver:   { en: 'Caregiver',    th: 'ผู้ดูแลช่วย',         icon: 'users',  color: '#52704A' },
  audio_only:  { en: 'Audio-Only',   th: 'เสียงอย่างเดียว',     icon: 'speak',  color: '#9B7A62' },
  visual_only: { en: 'Visual-Only',  th: 'ภาพอย่างเดียว',      icon: 'eye_off',color: '#B86C5A' },
};
const CAT_META = {
  motor:   { en: 'Motor',    th: 'เคลื่อนไหว',  icon: 'body' },
  hearing: { en: 'Hearing',  th: 'การได้ยิน',  icon: 'mic_off' },
  vision:  { en: 'Vision',   th: 'การมองเห็น',  icon: 'eye_off' },
};
const ALERT_META = {
  fall:      { en: 'Fall detected',    th: 'ตรวจพบล้ม',     tone: 'bad',  icon: 'bolt'  },
  miss:      { en: 'Missed session',   th: 'ขาดเซสชัน',      tone: 'warn', icon: 'cal'   },
  low_score: { en: 'Low form score',   th: 'คะแนนท่าต่ำ',     tone: 'warn', icon: 'wave'  },
  message:   { en: 'New message',      th: 'ข้อความใหม่',     tone: 'brand',icon: 'speak' },
};

function ScreenDashboard() {
  const { t, lang } = useT();
  const [selected, setSelected] = React.useState('aree');
  const [phase, setPhase] = React.useState(0);
  const [view, setView] = React.useState('patients');
  const [alertFilter, setAlertFilter] = React.useState('all');
  const [schedDay, setSchedDay] = React.useState(2);
  const [notifs, setNotifs] = React.useState({ fall: true, miss: true, low: true, msg: true, weekly: false });
  const toggleNotif = (k) => setNotifs((prev) => ({ ...prev, [k]: !prev[k] }));
  React.useEffect(() => {
    let raf,t0 = performance.now();
    const tick = (now) => {
      const p = 0.5 - 0.5 * Math.cos((now - t0) / 1000 % 3.5 * Math.PI / 1.75);
      setPhase(p);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // `fresh` = newly-pushed session (since last therapist review) — NOT live, since therapist is async only
  const patients = [
    { id: 'aree',    name: 'Aree S.',    nameTh: 'อารีย์ ส.',   cond: 'Post-op knee',        condTh: 'หลังผ่าตัดเข่า',     mode: 'standard',    cat: 'motor',   adh: 86, score: 91, last: '23m ago',   fresh: true,  alerts: [{ type: 'low_score', detail: 'L. knee 62 (rep 3)', time: '23m' }] },
    { id: 'somchai', name: 'Somchai T.', nameTh: 'สมชาย ท.',    cond: 'Rotator cuff tear',   condTh: 'เอ็นข้อไหล่ฉีก',    mode: 'simplified',  cat: 'motor',   adh: 72, score: 84, last: '2h ago',    fresh: true,  alerts: [] },
    { id: 'noi',     name: 'Noi P.',     nameTh: 'น้อย พ.',     cond: 'Stroke rehab',         condTh: 'ฟื้นฟูหลังเส้นเลือดสมอง', mode: 'caregiver',   cat: 'motor',   adh: 94, score: 88, last: 'yesterday', fresh: false, alerts: [], caregiver: 'Khun Boon (daughter)' },
    { id: 'kwan',    name: 'Kwan R.',    nameTh: 'ขวัญ ร.',     cond: 'Hip replacement',      condTh: 'เปลี่ยนข้อสะโพก',  mode: 'audio_only',  cat: 'vision',  adh: 58, score: 76, last: '4 days',    fresh: false, alerts: [{ type: 'miss', detail: '2 sessions missed', time: '4h' }, { type: 'low_score', detail: 'Trend ↓', time: '6h' }] },
    { id: 'malee',   name: 'Malee J.',   nameTh: 'มาลี จ.',     cond: 'Lower-back pain',      condTh: 'ปวดหลังส่วนล่าง',   mode: 'visual_only', cat: 'hearing', adh: 88, score: 92, last: 'today',     fresh: true,  alerts: [] },
    { id: 'anan',    name: 'Anan V.',    nameTh: 'อนันต์ ว.',   cond: 'ACL recovery',         condTh: 'ฟื้นฟูเอ็นไขว้หน้าเข่า', mode: 'standard',    cat: 'motor',   adh: 81, score: 87, last: 'today',     fresh: false, alerts: [] },
    { id: 'pim',     name: 'Pim O.',     nameTh: 'พิม อ.',      cond: 'Frozen shoulder',      condTh: 'ข้อไหล่ติด',          mode: 'audio_only',  cat: 'vision',  adh: 77, score: 80, last: '3 days',    fresh: false, alerts: [{ type: 'fall', detail: 'Possible fall 16:32', time: '8h' }] },
  ];

  const current = patients.find((p) => p.id === selected);
  const sessionsSpark = [62, 70, 68, 74, 79, 82, 78, 85, 88, 84, 90, 91];
  const adherenceSpark = [52, 60, 66, 70, 68, 73, 78, 80, 82, 79, 84, 86];

  const angle = Math.round(phase * 168);
  const accuracy = Math.max(0, 100 - Math.abs(angle - 160) * 0.8);

  // Per-joint breakdown for current patient's latest session
  const jointScores = [
    { en: 'L. shoulder', th: 'ไหล่ซ้าย',   score: 94, target: 90,  actual: 92  },
    { en: 'R. shoulder', th: 'ไหล่ขวา',    score: 91, target: 90,  actual: 88  },
    { en: 'L. elbow',    th: 'ข้อศอกซ้าย', score: 88, target: 170, actual: 168 },
    { en: 'R. elbow',    th: 'ข้อศอกขวา',  score: 86, target: 170, actual: 175 },
    { en: 'L. knee',     th: 'เข่าซ้าย',   score: 62, target: 100, actual: 84  },
    { en: 'R. knee',     th: 'เข่าขวา',    score: 84, target: 100, actual: 103 },
  ];

  // Session timeline (last 7 days)
  const timeline = [
    { day: lang === 'th' ? 'จ.' : 'Mon',  score: 84, completed: true  },
    { day: lang === 'th' ? 'อ.' : 'Tue',  score: 86, completed: true  },
    { day: lang === 'th' ? 'พ.' : 'Wed',  score: 0,  completed: false },
    { day: lang === 'th' ? 'พฤ.' : 'Thu', score: 88, completed: true  },
    { day: lang === 'th' ? 'ศ.' : 'Fri',  score: 90, completed: true  },
    { day: lang === 'th' ? 'ส.' : 'Sat',  score: 92, completed: true  },
    { day: lang === 'th' ? 'อา.' : 'Sun', score: 91, completed: true, today: true },
  ];

  // Recent TTS cues from latest session
  const ttsLog = [
    { time: '00:02', en: 'Start exercise: shoulder flexion', th: 'เริ่มออกกำลังกาย ยกแขนไปข้างหน้า', severity: 'info' },
    { time: '00:18', en: 'Lift right shoulder 12° higher',   th: 'เพิ่มมุมไหล่ขวาอีก 12 องศา',         severity: 'warn' },
    { time: '00:32', en: 'Great! Rep 1 complete',            th: 'เยี่ยม! ครบ 1 ครั้ง',                 severity: 'good' },
    { time: '01:05', en: 'Lower left elbow 8°',              th: 'ลดมุมข้อศอกซ้ายอีก 8 องศา',          severity: 'warn' },
    { time: '01:24', en: 'Great! Rep 2 complete',            th: 'เยี่ยม! ครบ 2 ครั้ง',                 severity: 'good' },
  ];

  const totalAlerts = patients.reduce((a, p) => a + p.alerts.length, 0);
  const freshCount = patients.filter((p) => p.fresh).length;

  // Comment thread for current patient (async — between sessions)
  const comments = [
    { who: 'therapist', name: 'Dr. Ploy', when: 'Today 09:12',  text: lang === 'th' ? 'พรุ่งนี้ลองเพิ่ม reps เป็น 15 ค่ะ' : 'Let\'s try 15 reps tomorrow.' },
    { who: 'patient',   name: displayNameShort(current), when: 'Yesterday 16:45', text: lang === 'th' ? 'เข่ายังเจ็บนิดๆ ตอนงอลึก' : 'Knee still aches when bending deeper.' },
    { who: 'therapist', name: 'Dr. Ploy', when: '2 days ago',  text: lang === 'th' ? 'ฟอร์มดีขึ้นมากเลยค่ะ' : 'Form is improving nicely.' },
  ];

  const modeMeta = MODE_META[current.mode];
  const catMeta = CAT_META[current.cat];
  const displayName = lang === 'th' ? current.nameTh : current.name;
  const displayCond = lang === 'th' ? current.condTh : current.cond;

  function displayNameShort(p) {
    return (lang === 'th' ? p.nameTh : p.name).split(' ')[0];
  }

  return (
    <div className="dash-outer" style={{ display: 'flex', height: '100%', background: DT.bg }}>
      {/* Sidebar */}
      <div className="dash-sidebar" style={{
        width: 220, background: '#FAF6EC', padding: '20px 16px',
        display: 'flex', flexDirection: 'column', gap: 4,
        boxShadow: `inset -1px 0 0 ${DT.line}`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 8px 18px' }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8, background: DT.brand,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5F1E8" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-label="PhysioAI">
              <circle cx="12" cy="4.5" r="2" />
              <path d="M12 6.5v6M7 9l10 0M9 12.5l-2 8M15 12.5l2 8" />
            </svg>
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, color: DT.ink, letterSpacing: -0.2 }}>{t.appName}</div>
        </div>
        {[
        { key: 'overview',  i: 'home',  l: lang === 'th' ? 'ภาพรวม' : 'Overview' },
        { key: 'patients',  i: 'users', l: t.patients, badge: freshCount > 0 ? freshCount : null, badgeLabel: lang === 'th' ? 'ใหม่' : 'new' },
        { key: 'analytics', i: 'chart', l: lang === 'th' ? 'วิเคราะห์' : 'Analytics' },
        { key: 'schedule',  i: 'cal',   l: lang === 'th' ? 'นัดหมาย' : 'Schedule' },
        { key: 'alerts',    i: 'bell',  l: t.alerts, badge: totalAlerts },
        { key: 'settings',  i: 'set',   l: t.settings }
        ].map((item) => {
          const on = view === item.key;
          return (
          <div key={item.key} onClick={() => setView(item.key)} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '9px 10px', borderRadius: 8, cursor: 'pointer',
            background: on ? DT.brandSoft : 'transparent',
            color: on ? DT.brand : DT.ink2, fontSize: 13, fontWeight: on ? 600 : 500
          }}>
            <Ico name={item.i} size={16} />
            <span style={{ flex: 1 }}>{item.l}</span>
            {item.badge && <span style={{
            background: item.badgeLabel ? DT.brand : (item.badge > 0 ? DT.warn : DT.ink3),
            color: '#F5F1E8', fontSize: 10, fontWeight: 700,
            padding: '1px 6px', borderRadius: 999
          }}>{item.badge}{item.badgeLabel ? ' ' + item.badgeLabel : ''}</span>}
          </div>);

        })}
        <div style={{ marginTop: 'auto', padding: 10, borderRadius: 10, background: DT.surface, display: 'flex', alignItems: 'center', gap: 10, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
          <div style={{ width: 30, height: 30, borderRadius: 999, background: 'linear-gradient(135deg, #52704A, #7FA876)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F5F1E8', fontWeight: 700, fontSize: 13 }}>PS</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12.5, color: DT.ink, fontWeight: 600 }}>Dr. Ploy S.</div>
            <div style={{ fontSize: 10.5, color: DT.ink3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {lang === 'th' ? 'นักกายภาพบำบัด' : 'Physiotherapist'}
            </div>
          </div>
        </div>
      </div>

      {/* Patient list column — only shown on Patients view */}
      {view === 'patients' && (
      <div className="dash-patient-list" style={{ width: 320, background: '#FFFFFF', boxShadow: `inset -1px 0 0 ${DT.line}`, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '18px 18px 12px' }}>
          <div style={{ fontSize: 11, letterSpacing: 1, color: DT.ink3, textTransform: 'uppercase' }}>{t.patients}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginTop: 4 }}>
            <div style={{ fontSize: 22, fontWeight: 600, color: DT.ink }}>{patients.length}</div>
            <div style={{ fontSize: 11.5, color: DT.good }}>+2 {lang === 'th' ? 'สัปดาห์นี้' : 'this week'}</div>
          </div>
          {/* Mode distribution mini-chart */}
          <div style={{ display: 'flex', gap: 3, marginTop: 10, height: 4, borderRadius: 4, overflow: 'hidden' }}>
            {Object.keys(MODE_META).map((m) => {
              const count = patients.filter((p) => p.mode === m).length;
              if (count === 0) return null;
              return <div key={m} style={{ flex: count, background: MODE_META[m].color }} title={`${MODE_META[m].en}: ${count}`} />;
            })}
          </div>
          <div style={{
            marginTop: 12, padding: '8px 10px',
            background: DT.surface2, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={DT.ink3} strokeWidth="2"><circle cx="11" cy="11" r="7" /><line x1="16" y1="16" x2="21" y2="21" /></svg>
            <span style={{ fontSize: 12, color: DT.ink3 }}>{lang === 'th' ? 'ค้นหาผู้ป่วย…' : 'Search patients…'}</span>
          </div>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {patients.map((p) => {
            const on = p.id === selected;
            const mm = MODE_META[p.mode];
            return (
              <div key={p.id} onClick={() => setSelected(p.id)} style={{
                padding: '12px 18px',
                display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
                background: on ? DT.brandSoft : 'transparent',
                boxShadow: on ? `inset 3px 0 0 ${DT.brand}` : 'none',
                borderTop: `1px solid ${DT.line}`
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 999,
                  background: mm.color,
                  color: '#F5F1E8', fontWeight: 700, fontSize: 13,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative'
                }}>
                  {p.name.split(' ').map((x) => x[0]).join('')}
                  {/* Disability category dot indicator */}
                  <div style={{
                    position: 'absolute', bottom: -2, right: -2,
                    width: 14, height: 14, borderRadius: 999,
                    background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 0 1.5px ${DT.lineStrong}`
                  }}>
                    <Ico name={CAT_META[p.cat].icon} size={9} color={DT.ink2} />
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: DT.ink }}>{lang === 'th' ? p.nameTh : p.name}</span>
                    {p.fresh && <span style={{
                      background: DT.brandSoft, color: DT.brand,
                      fontSize: 9, fontWeight: 700, padding: '1px 5px', borderRadius: 999, letterSpacing: 0.4
                    }}>{lang === 'th' ? 'ใหม่' : 'NEW'}</span>}
                    {p.alerts.length > 0 && <span style={{
                      background: 'rgba(200,149,90,0.20)', color: DT.warn,
                      fontSize: 10, fontWeight: 700, padding: '1px 5px', borderRadius: 999
                    }}>{p.alerts.length}</span>}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3 }}>
                    <Ico name={mm.icon} size={10} color={mm.color} />
                    <span style={{ fontSize: 10.5, color: mm.color, fontWeight: 600 }}>{lang === 'th' ? mm.th : mm.en}</span>
                    <span style={{ fontSize: 10.5, color: DT.ink3 }}>· {p.last}</span>
                  </div>
                </div>
                <div style={{ fontSize: 11, color: DT.ink3, textAlign: 'right' }}>
                  <div style={{ color: p.adh > 80 ? DT.good : p.adh > 60 ? DT.warn : DT.bad, fontWeight: 600, fontSize: 12.5 }}>{p.adh}%</div>
                  <div style={{ fontSize: 10 }}>{lang === 'th' ? 'ต่อเนื่อง' : 'adh.'}</div>
                </div>
              </div>);

          })}
        </div>
      </div>

      )}

      {/* Main content */}
      <div className="dash-main" style={{ flex: 1, padding: 24, overflow: 'auto' }}>
        {/* ─── OVERVIEW VIEW ─── */}
        {view === 'overview' && (
        <React.Fragment>
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 24, fontWeight: 600, color: DT.ink, letterSpacing: -0.4 }}>{lang === 'th' ? 'ภาพรวม' : 'Overview'}</div>
            <div style={{ fontSize: 12.5, color: DT.ink3, marginTop: 4 }}>{lang === 'th' ? 'สถานะคลินิกวันนี้' : 'Practice snapshot · today'}</div>
          </div>
          <div className="dash-kpi" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
            {[
              { l: lang === 'th' ? 'ผู้ป่วยทั้งหมด' : 'Total patients', v: patients.length, sub: '+2 ' + (lang === 'th' ? 'สัปดาห์นี้' : 'this week'), tone: DT.brand },
              { l: lang === 'th' ? 'เซสชันสัปดาห์นี้' : 'Sessions this week', v: 23, sub: '↑ 18% ' + (lang === 'th' ? 'จากสัปดาห์ก่อน' : 'vs last'), tone: DT.good },
              { l: lang === 'th' ? 'คะแนนเฉลี่ย' : 'Avg form score', v: '84', sub: lang === 'th' ? 'ทุกผู้ป่วย' : 'across all', tone: DT.good },
              { l: lang === 'th' ? 'แจ้งเตือนค้าง' : 'Open alerts', v: totalAlerts, sub: lang === 'th' ? 'ต้องดู' : 'need attention', tone: DT.warn },
            ].map((k) => (
              <div key={k.l} style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
                <div style={{ fontSize: 10.5, letterSpacing: 0.6, color: DT.ink3, textTransform: 'uppercase' }}>{k.l}</div>
                <div style={{ fontSize: 26, fontWeight: 700, color: DT.ink, letterSpacing: -0.4, marginTop: 6 }}>{k.v}</div>
                <div style={{ fontSize: 10.5, color: k.tone, marginTop: 3, fontWeight: 500 }}>{k.sub}</div>
              </div>
            ))}
          </div>
          <div className="dash-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14, marginBottom: 14 }}>
            <div style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: DT.ink, marginBottom: 12 }}>{lang === 'th' ? 'ผู้ป่วยตามโหมด' : 'Patients by accessibility mode'}</div>
              {Object.keys(MODE_META).map((m) => {
                const count = patients.filter((p) => p.mode === m).length;
                const pct = count / patients.length * 100;
                const mm = MODE_META[m];
                return (
                  <div key={m} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 30px', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <div style={{ fontSize: 12, color: DT.ink2, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Ico name={mm.icon} size={11} color={mm.color} />
                      {lang === 'th' ? mm.th : mm.en}
                    </div>
                    <div style={{ height: 6, borderRadius: 3, background: 'rgba(60,48,30,0.08)', overflow: 'hidden' }}>
                      <div style={{ width: `${pct}%`, height: '100%', background: mm.color, borderRadius: 3 }} />
                    </div>
                    <div style={{ fontSize: 12, color: DT.ink, fontFamily: DT.font.mono, textAlign: 'right' }}>{count}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: DT.ink, marginBottom: 12 }}>{lang === 'th' ? 'กิจกรรมล่าสุด' : 'Recent activity'}</div>
              {[
                { who: 'Aree S.', whoTh: 'อารีย์ ส.', act: lang === 'th' ? 'จบเซสชันยกแขน' : 'completed shoulder flexion', when: '23m', score: 91 },
                { who: 'Somchai T.', whoTh: 'สมชาย ท.', act: lang === 'th' ? 'ส่งเซสชันใหม่' : 'pushed new session', when: '2h', score: 84 },
                { who: 'Pim O.', whoTh: 'พิม อ.', act: lang === 'th' ? 'ตรวจพบล้ม' : 'fall detected', when: '5h', tone: 'bad' },
                { who: 'Malee J.', whoTh: 'มาลี จ.', act: lang === 'th' ? 'จบโปรแกรมวัน' : 'finished daily program', when: '8h', score: 92 },
                { who: 'Noi P.', whoTh: 'น้อย พ.', act: lang === 'th' ? 'ผู้ดูแลเขียนโน้ต' : 'caregiver added note', when: '1d' },
              ].map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: i < 4 ? `1px solid ${DT.line}` : 'none' }}>
                  <div style={{ width: 6, height: 6, borderRadius: 3, background: a.tone === 'bad' ? DT.bad : a.score && a.score >= 85 ? DT.good : DT.brand, flexShrink: 0 }} />
                  <div style={{ flex: 1, fontSize: 12, color: DT.ink }}>
                    <span style={{ fontWeight: 600 }}>{lang === 'th' ? a.whoTh : a.who}</span>{' '}
                    <span style={{ color: DT.ink2 }}>{a.act}</span>
                  </div>
                  {a.score && <Pill tone={a.score >= 85 ? 'good' : 'warn'} size="sm">{a.score}</Pill>}
                  <div style={{ fontSize: 10.5, color: DT.ink3, fontFamily: DT.font.mono }}>{a.when}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="dash-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: DT.ink, marginBottom: 12 }}>{lang === 'th' ? 'อันดับต้น' : 'Top performers'}</div>
              {patients.slice().sort((a, b) => b.score - a.score).slice(0, 3).map((p) => (
                <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: `1px solid ${DT.line}` }}>
                  <Ring value={p.score / 100} size={36} thickness={3.5} color={DT.good} fontSize={11}>{p.score}</Ring>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12.5, color: DT.ink, fontWeight: 600 }}>{lang === 'th' ? p.nameTh : p.name}</div>
                    <div style={{ fontSize: 11, color: DT.ink3 }}>{lang === 'th' ? p.condTh : p.cond}</div>
                  </div>
                  <Pill tone="good" size="sm">{p.adh}%</Pill>
                </div>
              ))}
            </div>
            <div style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: DT.ink, marginBottom: 12 }}>{lang === 'th' ? 'ต้องดูแลเป็นพิเศษ' : 'Needs attention'}</div>
              {patients.filter((p) => p.alerts.length > 0 || p.adh < 70).slice(0, 3).map((p) => (
                <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: `1px solid ${DT.line}` }}>
                  <div style={{ width: 36, height: 36, borderRadius: 999, background: MODE_META[p.mode].color, color: '#F5F1E8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>
                    {p.name.split(' ').map((x) => x[0]).join('')}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12.5, color: DT.ink, fontWeight: 600 }}>{lang === 'th' ? p.nameTh : p.name}</div>
                    <div style={{ fontSize: 11, color: DT.ink3 }}>
                      {p.alerts.length > 0 ? (lang === 'th' ? `${p.alerts.length} แจ้งเตือน` : `${p.alerts.length} alert${p.alerts.length > 1 ? 's' : ''}`) : (lang === 'th' ? 'การทำต่อเนื่องต่ำ' : 'Low adherence')}
                    </div>
                  </div>
                  <Pill tone={p.adh < 70 ? 'bad' : 'warn'} size="sm">{p.adh}%</Pill>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
        )}

        {/* ─── ANALYTICS VIEW ─── */}
        {view === 'analytics' && (
        <React.Fragment>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontSize: 24, fontWeight: 600, color: DT.ink, letterSpacing: -0.4 }}>{lang === 'th' ? 'วิเคราะห์' : 'Analytics'}</div>
              <div style={{ fontSize: 12.5, color: DT.ink3, marginTop: 4 }}>{lang === 'th' ? 'แนวโน้มผลลัพธ์การรักษา' : 'Treatment outcome trends'}</div>
            </div>
            <div style={{ display: 'inline-flex', padding: 4, gap: 4, background: DT.surface2, borderRadius: 999 }}>
              {[{ k: 'week', l: lang === 'th' ? 'สัปดาห์' : 'Week' }, { k: 'month', l: lang === 'th' ? 'เดือน' : 'Month', on: true }, { k: 'year', l: lang === 'th' ? 'ปี' : 'Year' }].map((p) => (
                <button key={p.k} style={{ padding: '6px 14px', borderRadius: 999, border: 0, cursor: 'pointer', background: p.on ? DT.surface : 'transparent', color: p.on ? DT.ink : DT.ink2, fontSize: 12.5, fontWeight: p.on ? 600 : 500, fontFamily: DT.font.sans }}>{p.l}</button>
              ))}
            </div>
          </div>
          <div className="dash-kpi" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
            {[
              { l: lang === 'th' ? 'อัตราจบโปรแกรม' : 'Program completion', v: '78%', sub: '↑ 6%', tone: DT.good },
              { l: lang === 'th' ? 'อัตราหลุดออก' : 'Dropout rate', v: '9%', sub: '↓ 2%', tone: DT.good },
              { l: lang === 'th' ? 'เวลาเซสชันเฉลี่ย' : 'Avg session', v: '12.4m', sub: lang === 'th' ? 'คงที่' : 'stable', tone: DT.ink2 },
              { l: lang === 'th' ? 'เซสชันเดือนนี้' : 'Sessions this month', v: 142, sub: '↑ 23', tone: DT.good },
            ].map((k) => (
              <div key={k.l} style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
                <div style={{ fontSize: 10.5, letterSpacing: 0.6, color: DT.ink3, textTransform: 'uppercase' }}>{k.l}</div>
                <div style={{ fontSize: 26, fontWeight: 700, color: DT.ink, letterSpacing: -0.4, marginTop: 6 }}>{k.v}</div>
                <div style={{ fontSize: 10.5, color: k.tone, marginTop: 3, fontWeight: 500 }}>{k.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}`, marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: DT.ink }}>{lang === 'th' ? 'แนวโน้มคะแนนท่า (12 สัปดาห์)' : 'Form score trend (12 weeks)'}</div>
              <Pill tone="good" size="sm">↑ {lang === 'th' ? 'ดีขึ้น' : 'Improving'}</Pill>
            </div>
            <Spark points={sessionsSpark} color={DT.brand} width={800} height={120} />
          </div>
          <div className="dash-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: DT.ink, marginBottom: 12 }}>{lang === 'th' ? 'ความต่อเนื่องตามโหมด' : 'Adherence by mode'}</div>
              {Object.keys(MODE_META).map((m) => {
                const ps = patients.filter((p) => p.mode === m);
                const avg = ps.length ? Math.round(ps.reduce((a, p) => a + p.adh, 0) / ps.length) : 0;
                const mm = MODE_META[m];
                return (
                  <div key={m} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 40px', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <div style={{ fontSize: 12, color: DT.ink2 }}>{lang === 'th' ? mm.th : mm.en}</div>
                    <div style={{ height: 6, borderRadius: 3, background: 'rgba(60,48,30,0.08)', overflow: 'hidden' }}>
                      <div style={{ width: `${avg}%`, height: '100%', background: avg >= 80 ? DT.good : avg >= 60 ? DT.warn : DT.bad, borderRadius: 3 }} />
                    </div>
                    <div style={{ fontSize: 12, color: DT.ink, fontFamily: DT.font.mono, textAlign: 'right' }}>{avg}%</div>
                  </div>
                );
              })}
            </div>
            <div style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: DT.ink, marginBottom: 12 }}>{lang === 'th' ? 'ท่าที่ใช้บ่อย' : 'Top exercises'}</div>
              {[
                { k: 'shoulder', count: 34 },
                { k: 'knee', count: 28 },
                { k: 'squat', count: 21 },
                { k: 'hip', count: 15 },
                { k: 'balance', count: 12 },
              ].map((e) => (
                <div key={e.k} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 32px', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ fontSize: 12, color: DT.ink2 }}>{t.ex[e.k]}</div>
                  <div style={{ height: 6, borderRadius: 3, background: 'rgba(60,48,30,0.08)', overflow: 'hidden' }}>
                    <div style={{ width: `${(e.count / 34) * 100}%`, height: '100%', background: DT.brand, borderRadius: 3 }} />
                  </div>
                  <div style={{ fontSize: 12, color: DT.ink, fontFamily: DT.font.mono, textAlign: 'right' }}>{e.count}</div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
        )}

        {/* ─── SCHEDULE VIEW ─── */}
        {view === 'schedule' && (
        <React.Fragment>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontSize: 24, fontWeight: 600, color: DT.ink, letterSpacing: -0.4 }}>{lang === 'th' ? 'นัดหมาย' : 'Schedule'}</div>
              <div style={{ fontSize: 12.5, color: DT.ink3, marginTop: 4 }}>{lang === 'th' ? 'สัปดาห์นี้ · 20–24 พฤษภาคม' : 'This week · May 20–24'}</div>
            </div>
            <button style={{ padding: '9px 14px', background: DT.brand, color: '#F5F1E8', border: 0, borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Ico name="plus" size={14} color="#F5F1E8" /> {lang === 'th' ? 'เพิ่มนัด' : 'Add session'}
            </button>
          </div>
          <div style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}`, marginBottom: 14 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
              {['Mon 20', 'Tue 21', 'Wed 22', 'Thu 23', 'Fri 24'].map((d, i) => {
                const dayTh = ['จ. 20', 'อ. 21', 'พ. 22', 'พฤ. 23', 'ศ. 24'][i];
                const isToday = i === 2;
                const sessions = [
                  [{ time: '09:00', name: 'Aree S.', nameTh: 'อารีย์ ส.', ex: 'shoulder' }, { time: '11:00', name: 'Anan V.', nameTh: 'อนันต์ ว.', ex: 'knee' }],
                  [{ time: '10:30', name: 'Somchai T.', nameTh: 'สมชาย ท.', ex: 'shoulder' }],
                  [{ time: '09:30', name: 'Malee J.', nameTh: 'มาลี จ.', ex: 'hip' }, { time: '14:00', name: 'Aree S.', nameTh: 'อารีย์ ส.', ex: 'knee' }, { time: '16:00', name: 'Pim O.', nameTh: 'พิม อ.', ex: 'shoulder' }],
                  [{ time: '11:00', name: 'Noi P.', nameTh: 'น้อย พ.', ex: 'balance' }],
                  [{ time: '09:00', name: 'Kwan R.', nameTh: 'ขวัญ ร.', ex: 'hip' }, { time: '13:30', name: 'Anan V.', nameTh: 'อนันต์ ว.', ex: 'knee' }],
                ][i];
                return (
                  <div key={d} style={{ padding: 10, borderRadius: 10, background: isToday ? DT.brandSoft : '#FAF6EC', boxShadow: `inset 0 0 0 1px ${isToday ? DT.brand : DT.line}`, minHeight: 200 }}>
                    <div style={{ fontSize: 11, letterSpacing: 0.4, color: isToday ? DT.brand : DT.ink3, textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>{lang === 'th' ? dayTh : d}{isToday ? ' · ' + (lang === 'th' ? 'วันนี้' : 'today') : ''}</div>
                    {sessions.map((s, j) => (
                      <div key={j} style={{ padding: '6px 8px', borderRadius: 8, background: DT.surface, marginBottom: 5, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
                        <div style={{ fontSize: 10.5, color: DT.brand, fontWeight: 700, fontFamily: DT.font.mono }}>{s.time}</div>
                        <div style={{ fontSize: 11.5, color: DT.ink, fontWeight: 500, marginTop: 1 }}>{lang === 'th' ? s.nameTh : s.name}</div>
                        <div style={{ fontSize: 10, color: DT.ink3, marginTop: 1 }}>{t.ex[s.ex]}</div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="dash-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: DT.ink, marginBottom: 12 }}>{lang === 'th' ? 'นัดถัดไป' : 'Upcoming'}</div>
              {[
                { time: '14:00', day: lang === 'th' ? 'วันนี้' : 'Today', name: 'Aree S.', nameTh: 'อารีย์ ส.', mode: 'standard' },
                { time: '16:00', day: lang === 'th' ? 'วันนี้' : 'Today', name: 'Pim O.', nameTh: 'พิม อ.', mode: 'audio_only' },
                { time: '11:00', day: lang === 'th' ? 'พรุ่งนี้' : 'Tomorrow', name: 'Noi P.', nameTh: 'น้อย พ.', mode: 'caregiver' },
              ].map((u, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: i < 2 ? `1px solid ${DT.line}` : 'none' }}>
                  <div style={{ width: 50, textAlign: 'center' }}>
                    <div style={{ fontSize: 13, color: DT.brand, fontWeight: 700, fontFamily: DT.font.mono }}>{u.time}</div>
                    <div style={{ fontSize: 10, color: DT.ink3 }}>{u.day}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: DT.ink, fontWeight: 500 }}>{lang === 'th' ? u.nameTh : u.name}</div>
                    <div style={{ fontSize: 10.5, color: MODE_META[u.mode].color, display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
                      <Ico name={MODE_META[u.mode].icon} size={10} color={MODE_META[u.mode].color} />
                      {lang === 'th' ? MODE_META[u.mode].th : MODE_META[u.mode].en}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: 14, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: DT.ink, marginBottom: 12 }}>{lang === 'th' ? 'สรุปสัปดาห์' : 'Week summary'}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${DT.line}` }}>
                <span style={{ fontSize: 12, color: DT.ink2 }}>{lang === 'th' ? 'จำนวนเซสชัน' : 'Total sessions'}</span>
                <span style={{ fontSize: 13, color: DT.ink, fontFamily: DT.font.mono, fontWeight: 600 }}>9</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${DT.line}` }}>
                <span style={{ fontSize: 12, color: DT.ink2 }}>{lang === 'th' ? 'ผู้ป่วยที่นัด' : 'Unique patients'}</span>
                <span style={{ fontSize: 13, color: DT.ink, fontFamily: DT.font.mono, fontWeight: 600 }}>7</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${DT.line}` }}>
                <span style={{ fontSize: 12, color: DT.ink2 }}>{lang === 'th' ? 'ช่วงเวลายอดนิยม' : 'Peak hour'}</span>
                <span style={{ fontSize: 13, color: DT.ink, fontFamily: DT.font.mono, fontWeight: 600 }}>09:00–11:00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                <span style={{ fontSize: 12, color: DT.ink2 }}>{lang === 'th' ? 'ช่วงว่าง' : 'Available slots'}</span>
                <span style={{ fontSize: 13, color: DT.good, fontFamily: DT.font.mono, fontWeight: 600 }}>11</span>
              </div>
            </div>
          </div>
        </React.Fragment>
        )}

        {/* ─── ALERTS VIEW ─── */}
        {view === 'alerts' && (
        <React.Fragment>
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 24, fontWeight: 600, color: DT.ink, letterSpacing: -0.4 }}>{lang === 'th' ? 'แจ้งเตือนทั้งหมด' : 'Alerts'}</div>
            <div style={{ fontSize: 12.5, color: DT.ink3, marginTop: 4 }}>{lang === 'th' ? `${totalAlerts} แจ้งเตือนทั้งคลินิก` : `${totalAlerts} alerts across all patients`}</div>
          </div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
            {[
              { k: 'all', l: lang === 'th' ? 'ทั้งหมด' : 'All' },
              { k: 'fall', l: lang === 'th' ? 'ล้ม' : 'Fall' },
              { k: 'miss', l: lang === 'th' ? 'ขาด' : 'Miss' },
              { k: 'low_score', l: lang === 'th' ? 'คะแนนต่ำ' : 'Low score' },
              { k: 'message', l: lang === 'th' ? 'ข้อความ' : 'Messages' },
            ].map((f) => {
              const on = alertFilter === f.k;
              return (
                <button key={f.k} onClick={() => setAlertFilter(f.k)} style={{
                  padding: '7px 14px', borderRadius: 999, border: 0, cursor: 'pointer',
                  background: on ? DT.brand : DT.surface, color: on ? '#F5F1E8' : DT.ink2,
                  fontSize: 12, fontWeight: 600, fontFamily: DT.font.sans,
                  boxShadow: on ? 'none' : `inset 0 0 0 1px ${DT.line}`
                }}>{f.l}</button>
              );
            })}
          </div>
          <div style={{ padding: 0, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}`, overflow: 'hidden' }}>
            {patients.flatMap((p) =>
              p.alerts.map((a) => ({ ...a, patient: p }))
            ).filter((a) => alertFilter === 'all' || a.type === alertFilter).map((a, i, arr) => {
              const meta = ALERT_META[a.type];
              const pn = lang === 'th' ? a.patient.nameTh : a.patient.name;
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderBottom: i < arr.length - 1 ? `1px solid ${DT.line}` : 'none' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: meta.tone === 'bad' ? 'rgba(184,108,90,0.14)' : meta.tone === 'warn' ? 'rgba(200,149,90,0.14)' : DT.brandSoft,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <Ico name={meta.icon} size={16} color={meta.tone === 'bad' ? DT.bad : meta.tone === 'warn' ? DT.warn : DT.brand} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 13, color: DT.ink, fontWeight: 600 }}>{lang === 'th' ? meta.th : meta.en}</span>
                      <span style={{ fontSize: 11.5, color: DT.ink3 }}>·</span>
                      <span style={{ fontSize: 12.5, color: DT.ink2, fontWeight: 500 }}>{pn}</span>
                    </div>
                    <div style={{ fontSize: 11.5, color: DT.ink3, marginTop: 2 }}>{a.detail}</div>
                  </div>
                  <div style={{ fontSize: 11, color: DT.ink3, fontFamily: DT.font.mono }}>{a.time} {lang === 'th' ? 'ที่แล้ว' : 'ago'}</div>
                  <button style={{ padding: '6px 10px', borderRadius: 8, background: DT.surface2, color: DT.ink2, border: 0, cursor: 'pointer', fontSize: 11.5, fontWeight: 500 }}>
                    {lang === 'th' ? 'ดู' : 'View'}
                  </button>
                  <button style={{ padding: '6px 10px', borderRadius: 8, background: 'transparent', color: DT.ink3, border: 0, cursor: 'pointer', fontSize: 11.5 }}>
                    <Ico name="close" size={12} color={DT.ink3} />
                  </button>
                </div>
              );
            })}
            {totalAlerts === 0 && (
              <div style={{ padding: 40, textAlign: 'center', color: DT.ink3 }}>
                <Ico name="check" size={32} color={DT.good} />
                <div style={{ marginTop: 8, fontSize: 13 }}>{lang === 'th' ? 'ไม่มีแจ้งเตือน' : 'All clear'}</div>
              </div>
            )}
          </div>
        </React.Fragment>
        )}

        {/* ─── SETTINGS VIEW ─── */}
        {view === 'settings' && (
        <React.Fragment>
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 24, fontWeight: 600, color: DT.ink, letterSpacing: -0.4 }}>{lang === 'th' ? 'ตั้งค่า' : 'Settings'}</div>
            <div style={{ fontSize: 12.5, color: DT.ink3, marginTop: 4 }}>{lang === 'th' ? 'การตั้งค่าผู้ใช้และค่าเริ่มต้นคลินิก' : 'Account & clinic-wide defaults'}</div>
          </div>
          <div className="dash-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
            <div style={{ padding: 16, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 11, letterSpacing: 0.8, color: DT.ink3, textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>{lang === 'th' ? 'โปรไฟล์' : 'Profile'}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                <div style={{ width: 56, height: 56, borderRadius: 999, background: 'linear-gradient(135deg, #52704A, #7FA876)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F5F1E8', fontWeight: 700, fontSize: 18 }}>PS</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: DT.ink }}>Dr. Ploy S.</div>
                  <div style={{ fontSize: 12, color: DT.ink3 }}>{lang === 'th' ? 'นักกายภาพบำบัด · ใบประกอบวิชาชีพ PT-2018-3142' : 'Physiotherapist · License PT-2018-3142'}</div>
                </div>
                <button style={{ padding: '6px 12px', borderRadius: 8, background: DT.surface2, color: DT.ink, border: `1px solid ${DT.line}`, cursor: 'pointer', fontSize: 12, fontWeight: 500 }}>{lang === 'th' ? 'แก้ไข' : 'Edit'}</button>
              </div>
              {[
                { l: lang === 'th' ? 'อีเมล' : 'Email', v: 'ploy.s@clinic.co.th' },
                { l: lang === 'th' ? 'คลินิก' : 'Clinic', v: 'Bangkok Rehab Center' },
                { l: lang === 'th' ? 'เขตรับผิดชอบ' : 'Specialty', v: lang === 'th' ? 'หลังผ่าตัด, ระบบประสาท' : 'Post-op, Neuro' },
              ].map((r) => (
                <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderTop: `1px solid ${DT.line}` }}>
                  <span style={{ fontSize: 12, color: DT.ink3 }}>{r.l}</span>
                  <span style={{ fontSize: 12.5, color: DT.ink }}>{r.v}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: 16, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 11, letterSpacing: 0.8, color: DT.ink3, textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>{lang === 'th' ? 'การแจ้งเตือน' : 'Notifications'}</div>
              {[
                { k: 'fall',   l: lang === 'th' ? 'ตรวจพบล้ม' : 'Fall detected' },
                { k: 'miss',   l: lang === 'th' ? 'ขาดเซสชัน' : 'Missed sessions' },
                { k: 'low',    l: lang === 'th' ? 'คะแนนท่าต่ำ' : 'Low form score' },
                { k: 'msg',    l: lang === 'th' ? 'ข้อความผู้ป่วย' : 'Patient messages' },
                { k: 'weekly', l: lang === 'th' ? 'สรุปสัปดาห์' : 'Weekly digest' },
              ].map((n) => {
                const on = !!notifs[n.k];
                return (
                  <div key={n.k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${DT.line}` }}>
                    <span style={{ fontSize: 13, color: DT.ink }}>{n.l}</span>
                    <div role="switch" aria-checked={on} tabIndex={0} onClick={() => toggleNotif(n.k)} onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleNotif(n.k); } }} style={{ width: 36, height: 20, borderRadius: 999, background: on ? DT.brand : DT.surface3, position: 'relative', cursor: 'pointer', transition: 'background .15s' }}>
                      <div style={{ position: 'absolute', top: 2, left: on ? 18 : 2, width: 16, height: 16, borderRadius: 999, background: '#FFFFFF', transition: 'left .15s', boxShadow: '0 1px 2px rgba(0,0,0,0.15)' }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="dash-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
            <div style={{ padding: 16, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 11, letterSpacing: 0.8, color: DT.ink3, textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>{lang === 'th' ? 'ค่าเริ่มต้นเซสชัน' : 'Session defaults'}</div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: DT.ink2 }}>{lang === 'th' ? 'ความคลาดเคลื่อนข้อต่อ' : 'Joint angle tolerance'}</span>
                  <span style={{ fontSize: 12.5, color: DT.brand, fontFamily: DT.font.mono, fontWeight: 600 }}>±15°</span>
                </div>
                <div style={{ position: 'relative', height: 16, display: 'flex', alignItems: 'center' }}>
                  <div style={{ position: 'absolute', left: 0, right: 0, height: 4, borderRadius: 4, background: 'rgba(60,48,30,0.10)' }} />
                  <div style={{ position: 'absolute', left: 0, width: '50%', height: 4, borderRadius: 4, background: DT.brand }} />
                  <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: 14, height: 14, borderRadius: 999, background: DT.brand, boxShadow: `0 0 0 2px ${DT.surface}` }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: DT.ink2 }}>{lang === 'th' ? 'รุ่นโมเดล AI' : 'AI model variant'}</span>
                </div>
                <select style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: `1px solid ${DT.line}`, background: DT.surface2, fontSize: 12.5, color: DT.ink, fontFamily: DT.font.sans }}>
                  <option>Lite ({lang === 'th' ? 'เร็ว' : 'fast'})</option>
                  <option>Full ({lang === 'th' ? 'สมดุล' : 'balanced'})</option>
                  <option>Heavy ({lang === 'th' ? 'แม่นยำ' : 'accurate'})</option>
                </select>
              </div>
            </div>
            <div style={{ padding: 16, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}` }}>
              <div style={{ fontSize: 11, letterSpacing: 0.8, color: DT.ink3, textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>{lang === 'th' ? 'ภาษา & เขตเวลา' : 'Language & timezone'}</div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 12, color: DT.ink2, marginBottom: 6 }}>{lang === 'th' ? 'ภาษา' : 'Language'}</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {[{ k: 'en', l: 'English' }, { k: 'th', l: 'ภาษาไทย' }].map((o) => {
                    const on = lang === o.k;
                    return (
                      <button key={o.k} onClick={() => { if (window.physioaiSetLang) window.physioaiSetLang(o.k); }} style={{
                        padding: '8px 14px', borderRadius: 999,
                        background: on ? DT.brand : DT.surface,
                        color: on ? '#F5F1E8' : DT.ink2,
                        border: on ? 'none' : `1px solid ${DT.line}`,
                        cursor: 'pointer', fontSize: 12.5, fontWeight: 600, fontFamily: DT.font.sans,
                        display: 'flex', alignItems: 'center', gap: 6,
                        boxShadow: on ? 'none' : '0 4px 12px rgba(0,0,0,0.08)',
                        transition: 'all .15s'
                      }}>
                        <Ico name="globe" size={14} color={on ? '#F5F1E8' : DT.ink2} />
                        {o.l}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: DT.ink2, marginBottom: 6 }}>{lang === 'th' ? 'เขตเวลา' : 'Timezone'}</div>
                <select style={{ width: '100%', padding: '8px 10px', borderRadius: 8, border: `1px solid ${DT.line}`, background: DT.surface2, fontSize: 12.5, color: DT.ink, fontFamily: DT.font.sans }}>
                  <option>Asia/Bangkok (GMT+7)</option>
                  <option>UTC</option>
                </select>
              </div>
            </div>
          </div>
          <div style={{ padding: 16, background: DT.surface, borderRadius: 14, boxShadow: `inset 0 0 0 1px ${DT.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontSize: 13, color: DT.ink, fontWeight: 600 }}>{lang === 'th' ? 'ออกจากระบบ' : 'Sign out'}</div>
              <div style={{ fontSize: 11.5, color: DT.ink3, marginTop: 2 }}>{lang === 'th' ? 'คุณจะถูกออกจากระบบทุกอุปกรณ์' : 'You will be signed out on all devices'}</div>
            </div>
            <button style={{ padding: '9px 16px', borderRadius: 10, background: 'rgba(184,108,90,0.10)', color: DT.bad, border: `1px solid rgba(184,108,90,0.30)`, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>{lang === 'th' ? 'ออกจากระบบ' : 'Sign out'}</button>
          </div>
        </React.Fragment>
        )}

        {/* ─── PATIENTS VIEW (existing dashboard content) ─── */}
        {view === 'patients' && (
        <React.Fragment>
        {/* Header with mode + category + caregiver */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 24, fontWeight: 600, color: DT.ink, letterSpacing: -0.4 }}>{displayName}</div>
              {current.fresh && <Pill tone="brand" size="sm">
                <Dot color={DT.brand} size={6} />
                <span style={{ marginLeft: 4 }}>{lang === 'th' ? 'มีเซสชันใหม่' : 'New session to review'}</span>
              </Pill>}
              <Pill style={{ background: modeMeta.color + '24', color: modeMeta.color }}>
                <Ico name={modeMeta.icon} size={11} color={modeMeta.color} />
                <span style={{ marginLeft: 4 }}>{lang === 'th' ? modeMeta.th : modeMeta.en}</span>
              </Pill>
              <Pill tone="neutral">
                <Ico name={catMeta.icon} size={11} color={DT.ink2} />
                <span style={{ marginLeft: 4 }}>{lang === 'th' ? catMeta.th : catMeta.en}</span>
              </Pill>
            </div>
            <div style={{ fontSize: 12.5, color: DT.ink3, marginTop: 5 }}>
              {displayCond} · {lang === 'th' ? 'สัปดาห์ที่ 3 จาก 8' : 'Program week 3 of 8'} · {lang === 'th' ? 'เซสชันล่าสุด: ' : 'Last session: '}{current.last}
            </div>
            {current.caregiver && (
              <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 10px', borderRadius: 8, background: 'rgba(82,112,74,0.10)', border: `1px solid rgba(82,112,74,0.18)` }}>
                <Ico name="users" size={12} color={DT.brandDeep} />
                <span style={{ fontSize: 11.5, color: DT.brandDeep, fontWeight: 500 }}>
                  {lang === 'th' ? 'ผู้ดูแล: ' : 'Caregiver: '}{current.caregiver}
                </span>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{
              padding: '9px 14px', background: DT.surface, color: DT.ink,
              border: 0, borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: 'pointer',
              boxShadow: `inset 0 0 0 1px ${DT.line}`,
              display: 'flex', alignItems: 'center', gap: 8
            }}>
              <Ico name="speak" size={14} /> {t.message}
            </button>
            <button style={{
              padding: '9px 14px', background: DT.brand, color: '#F5F1E8',
              border: 0, borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8
            }}>
              <Ico name="plus" size={14} color="#F5F1E8" /> {lang === 'th' ? 'ปรับแผน' : 'Adjust plan'}
            </button>
          </div>
        </div>

        {/* KPI row */}
        <div className="dash-kpi" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
          {[
          { l: t.adherence, v: current.adh + '%', tone: DT.good, spark: adherenceSpark, sub: lang === 'th' ? '↑ 6% จากสัปดาห์ก่อน' : '↑ 6% vs last week' },
          { l: t.avgScore, v: current.score, tone: DT.brand, spark: sessionsSpark, sub: lang === 'th' ? 'ท่าทางดีขึ้น' : 'Form improving' },
          { l: t.sessions, v: '5 / 6', tone: DT.warn, spark: [3, 4, 5, 4, 6, 5, 6, 5, 5, 6, 5, 5], sub: lang === 'th' ? 'ขาด 1 เซสชัน' : '1 session missed' },
          { l: lang === 'th' ? 'ความเจ็บ (1-10)' : 'Pain (1-10)', v: '3', tone: DT.ink2, spark: [7, 7, 6, 6, 5, 5, 4, 4, 4, 3, 3, 3], sub: lang === 'th' ? 'ผู้ป่วยรายงาน ↓' : 'Self-reported ↓' }].
          map((k) =>
          <div key={k.l} style={{
            padding: 14, background: DT.surface, borderRadius: 14,
            boxShadow: `inset 0 0 0 1px ${DT.line}`
          }}>
              <div style={{ fontSize: 10.5, letterSpacing: 0.6, color: DT.ink3, textTransform: 'uppercase' }}>{k.l}</div>
              <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginTop: 6 }}>
                <div style={{ fontSize: 24, fontWeight: 600, color: DT.ink, letterSpacing: -0.3 }}>{k.v}</div>
                <Spark points={k.spark} color={k.tone} width={56} height={20} />
              </div>
              <div style={{ fontSize: 10.5, color: DT.ink3, marginTop: 3 }}>{k.sub}</div>
            </div>
          )}
        </div>

        {/* Live session + Plan + Joint breakdown */}
        <div className="dash-grid-main" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 14, marginBottom: 14 }}>
          {/* Session review card — async playback of the patient's last recorded session */}
          <div style={{
            padding: 0, background: DT.surface, borderRadius: 14, overflow: 'hidden',
            boxShadow: `inset 0 0 0 1px ${DT.line}`
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px', boxShadow: `inset 0 -1px 0 ${DT.line}`
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: DT.ink }}>
                  {lang === 'th' ? 'ทบทวนเซสชันล่าสุด' : 'Last session review'}
                </span>
                <Pill tone="neutral" size="sm">
                  <Ico name="cal" size={10} color={DT.ink2} />
                  <span style={{ marginLeft: 4 }}>{current.last} · 04:12</span>
                </Pill>
                {current.fresh && (
                  <Pill tone="brand" size="sm">
                    <Dot color={DT.brand} size={5} />
                    <span style={{ marginLeft: 4 }}>{lang === 'th' ? 'ยังไม่ได้ทบทวน' : 'Not reviewed'}</span>
                  </Pill>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: DT.ink3, fontSize: 11 }}>
                <Ico name="chev_l" size={14} color={DT.ink3} />
                <span>{lang === 'th' ? 'เซสชันก่อนหน้า' : 'Prev'}</span>
                <span style={{ margin: '0 4px' }}>·</span>
                <span>{lang === 'th' ? 'ถัดไป' : 'Next'}</span>
                <Ico name="chev_r" size={14} color={DT.ink3} />
              </div>
            </div>
            <div style={{
              position: 'relative', height: 280,
              background: 'radial-gradient(ellipse at 50% 40%, #FBF8F0 0%, #E8E0CC 70%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              {/* Reference ghost pose (the therapist's captured reference) */}
              <div style={{ position: 'absolute', width: 180, height: 280, opacity: 0.30 }}>
                <PoseSkeleton phase={1} accent={DT.brand} stroke={DT.brand} showRef={false} />
              </div>
              {/* Patient's recorded skeleton (replayed) */}
              <div style={{ width: 180, height: 280 }}>
                <PoseSkeleton phase={phase} accent={accuracy > 85 ? DT.good : DT.warn} />
              </div>
              <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
                <Pill tone="brand" size="sm">{t.ex.shoulder}</Pill>
                <Pill tone="neutral" size="sm">{t.rep} 4/12</Pill>
              </div>
              <div style={{ position: 'absolute', top: 12, right: 12 }}>
                <Pill tone="neutral" size="sm">
                  <Ico name="play" size={10} color={DT.ink2} />
                  <span style={{ marginLeft: 4 }}>{lang === 'th' ? 'รีเพลย์' : 'Replay'}</span>
                </Pill>
              </div>
              <div style={{
                position: 'absolute', bottom: 12, left: 12, right: 12,
                display: 'flex', alignItems: 'center', gap: 10,
                padding: 10, background: 'rgba(255,248,235,0.88)',
                borderRadius: 12, boxShadow: `inset 0 0 0 1px ${DT.line}`
              }}>
                <Ring value={accuracy / 100} size={40} thickness={4}
                  color={accuracy > 85 ? DT.good : DT.warn} fontSize={11}>
                  {Math.round(accuracy)}
                </Ring>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10.5, color: DT.ink3, letterSpacing: 0.4, textTransform: 'uppercase' }}>
                    {lang === 'th' ? 'คะแนนตอนนี้' : 'Score at playhead'}
                  </div>
                  <div style={{ fontSize: 12, color: DT.ink, fontFamily: DT.font.mono }}>{angle}° / 160° · {lang === 'th' ? 'เฉลี่ย' : 'Avg'} {current.score}</div>
                </div>
                <Spark points={[70, 72, 74, 78, 80, 85, 88, 90, 91, accuracy]} color={DT.brand} width={84} height={26} />
              </div>
            </div>
            {/* Playback scrubber */}
            <div style={{ padding: '10px 16px 14px', boxShadow: `inset 0 1px 0 ${DT.line}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button style={{
                  width: 32, height: 32, borderRadius: 999, border: 0, cursor: 'pointer',
                  background: DT.brand, color: '#F5F1E8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Ico name="play" size={14} color="#F5F1E8" />
                </button>
                <span style={{ fontSize: 11, color: DT.ink3, fontFamily: DT.font.mono, minWidth: 44 }}>01:42</span>
                {/* Rep ticks track */}
                <div style={{ flex: 1, position: 'relative', height: 24, display: 'flex', alignItems: 'center' }}>
                  <div style={{ position: 'absolute', left: 0, right: 0, height: 4, borderRadius: 4, background: 'rgba(60,48,30,0.10)' }} />
                  <div style={{ position: 'absolute', left: 0, width: `${phase * 100}%`, height: 4, borderRadius: 4, background: DT.brand, transition: 'width .1s' }} />
                  {/* Rep markers */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const filled = i < Math.floor(phase * 12);
                    const isCurrent = i === Math.floor(phase * 12);
                    return (
                      <div key={i} style={{
                        position: 'absolute', left: `${(i / 11) * 100}%`, transform: 'translateX(-50%)',
                        width: isCurrent ? 10 : 7, height: isCurrent ? 10 : 7, borderRadius: 999,
                        background: filled ? DT.brand : '#FFFFFF',
                        boxShadow: `0 0 0 1.5px ${filled ? DT.brandDeep : DT.lineStrong}`,
                      }} />
                    );
                  })}
                </div>
                <span style={{ fontSize: 11, color: DT.ink3, fontFamily: DT.font.mono, minWidth: 44, textAlign: 'right' }}>04:12</span>
              </div>
            </div>
          </div>

          {/* Plan sidebar with target angles + reference */}
          <div style={{
            padding: 14, background: DT.surface, borderRadius: 14,
            boxShadow: `inset 0 0 0 1px ${DT.line}`,
            display: 'flex', flexDirection: 'column', gap: 8
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: DT.ink }}>{t.plan}</span>
              <span style={{ fontSize: 12, color: DT.brand, cursor: 'pointer' }}>{lang === 'th' ? 'แก้ไข' : 'Edit'}</span>
            </div>
            {[
            { k: 'shoulder', reps: '12 × 3', progress: 0.67, score: 91, target: '160°', hasRef: true },
            { k: 'knee',     reps: '15 × 2', progress: 0.5,  score: 88, target: '100°', hasRef: true },
            { k: 'hip',      reps: '12 × 2', progress: 0,    score: null, target: '35°', hasRef: false }].
            map((ex) =>
            <div key={ex.k} style={{
              padding: '10px 12px', borderRadius: 10,
              background: '#FAF6EC',
              boxShadow: `inset 0 0 0 1px ${DT.line}`
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: DT.ink }}>{t.ex[ex.k]}</span>
                  {ex.score ? <Pill tone="good" size="sm">{ex.score}</Pill> : <Pill tone="neutral" size="sm">{lang === 'th' ? 'รอ' : 'Pending'}</Pill>}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: DT.ink3, marginTop: 3 }}>
                  <span>{ex.reps}</span>
                  <span>·</span>
                  <span style={{ fontFamily: DT.font.mono, color: DT.brand, fontWeight: 600 }}>{lang === 'th' ? 'เป้า ' : 'Target '}{ex.target}</span>
                  <span>·</span>
                  {ex.hasRef ?
                    <span style={{ color: DT.brand, display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                      <Ico name="body" size={9} color={DT.brand} />{lang === 'th' ? 'อ้างอิงพร้อม' : 'Ref. set'}
                    </span> :
                    <span style={{ color: DT.warn, display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                      <Ico name="plus" size={9} color={DT.warn} />{lang === 'th' ? 'ต้องเซ็ตอ้างอิง' : 'No ref.'}
                    </span>
                  }
                </div>
                <div style={{ height: 4, borderRadius: 4, background: 'rgba(60,48,30,0.08)', marginTop: 8, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${ex.progress * 100}%`, background: ex.progress > 0 ? DT.brand : 'transparent', borderRadius: 4 }} />
                </div>
              </div>
            )}
            <button style={{
              marginTop: 2, padding: '9px', background: 'transparent', color: DT.ink2,
              border: `1px dashed ${DT.lineStrong}`, borderRadius: 10, cursor: 'pointer',
              fontSize: 12.5, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
            }}>
              <Ico name="plus" size={14} /> {lang === 'th' ? 'เพิ่มท่า' : 'Add exercise'}
            </button>
          </div>
        </div>

        {/* Joint breakdown + Session timeline */}
        <div className="dash-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14, marginBottom: 14 }}>
          {/* Per-joint score breakdown */}
          <div style={{
            padding: 14, background: DT.surface, borderRadius: 14,
            boxShadow: `inset 0 0 0 1px ${DT.line}`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: DT.ink }}>
                {lang === 'th' ? 'คะแนนแต่ละข้อต่อ' : 'Per-joint accuracy'}
              </span>
              <span style={{ fontSize: 11, color: DT.ink3 }}>
                {lang === 'th' ? 'เซสชันล่าสุด' : 'Latest session'}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {jointScores.map((j) => (
                <div key={j.en} style={{ display: 'grid', gridTemplateColumns: '90px 1fr 90px 36px', alignItems: 'center', gap: 10 }}>
                  <div style={{ fontSize: 12, color: DT.ink2 }}>{lang === 'th' ? j.th : j.en}</div>
                  <div style={{ height: 6, borderRadius: 3, background: 'rgba(60,48,30,0.08)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${j.score}%`, background: j.score >= 85 ? DT.good : j.score >= 70 ? DT.warn : DT.bad, borderRadius: 3 }} />
                  </div>
                  <div style={{ fontSize: 11, color: DT.ink3, fontFamily: DT.font.mono }}>{j.actual}° / {j.target}°</div>
                  <Pill tone={j.score >= 85 ? 'good' : j.score >= 70 ? 'warn' : 'bad'} size="sm">{j.score}</Pill>
                </div>
              ))}
            </div>
          </div>

          {/* Session timeline */}
          <div style={{
            padding: 14, background: DT.surface, borderRadius: 14,
            boxShadow: `inset 0 0 0 1px ${DT.line}`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: DT.ink }}>
                {lang === 'th' ? '7 วันที่ผ่านมา' : 'Last 7 days'}
              </span>
              <span style={{ fontSize: 11, color: DT.brand, cursor: 'pointer' }}>{lang === 'th' ? 'ดูทั้งหมด' : 'View all'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 6, height: 110 }}>
              {timeline.map((d, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                    {d.completed ? (
                      <div style={{
                        width: '70%', height: `${d.score}%`,
                        background: d.today ? DT.brand : 'rgba(127,168,118,0.55)',
                        borderRadius: '4px 4px 0 0',
                        position: 'relative'
                      }}>
                        {d.today && <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', fontSize: 10, color: DT.brand, fontWeight: 700 }}>{d.score}</div>}
                      </div>
                    ) : (
                      <div style={{
                        width: '70%', height: 30,
                        border: `1.5px dashed ${DT.bad}`, borderRadius: 4,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <Ico name="close" size={10} color={DT.bad} />
                      </div>
                    )}
                  </div>
                  <div style={{ fontSize: 10.5, color: d.today ? DT.ink : DT.ink3, fontWeight: d.today ? 600 : 500 }}>{d.day}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TTS log + Alerts */}
        <div className="dash-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {/* TTS cue log */}
          <div style={{
            padding: 14, background: DT.surface, borderRadius: 14,
            boxShadow: `inset 0 0 0 1px ${DT.line}`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Ico name="speak" size={14} color={DT.brand} />
                <span style={{ fontSize: 14, fontWeight: 600, color: DT.ink }}>
                  {lang === 'th' ? 'ฟีดแบคเสียง (Thai TTS)' : 'Voice feedback log'}
                </span>
              </div>
              <Pill tone="brand" size="sm">th-TH</Pill>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {ttsLog.map((cue, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '7px 9px', borderRadius: 8, background: '#FAF6EC' }}>
                  <span style={{ fontSize: 10, color: DT.ink3, fontFamily: DT.font.mono, paddingTop: 2 }}>{cue.time}</span>
                  <div style={{
                    width: 4, alignSelf: 'stretch', borderRadius: 2, marginTop: 2,
                    background: cue.severity === 'good' ? DT.good : cue.severity === 'warn' ? DT.warn : DT.ink3
                  }} />
                  <span style={{ fontSize: 12, color: DT.ink, flex: 1, fontFamily: DT.font.thai }}>{lang === 'th' ? cue.th : cue.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts panel */}
          <div style={{
            padding: 14, background: DT.surface, borderRadius: 14,
            boxShadow: `inset 0 0 0 1px ${DT.line}`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Ico name="bell" size={14} color={DT.warn} />
                <span style={{ fontSize: 14, fontWeight: 600, color: DT.ink }}>
                  {lang === 'th' ? 'แจ้งเตือน' : 'Alerts'}
                </span>
              </div>
              <Pill tone={totalAlerts > 0 ? 'warn' : 'good'} size="sm">{totalAlerts}</Pill>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {patients.flatMap((p) => p.alerts.map((a) => ({ ...a, patient: lang === 'th' ? p.nameTh : p.name }))).slice(0, 5).map((a, i) => {
                const meta = ALERT_META[a.type];
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, background: '#FAF6EC' }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: meta.tone === 'bad' ? 'rgba(184,108,90,0.14)' : meta.tone === 'warn' ? 'rgba(200,149,90,0.14)' : DT.brandSoft,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Ico name={meta.icon} size={14} color={meta.tone === 'bad' ? DT.bad : meta.tone === 'warn' ? DT.warn : DT.brand} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, color: DT.ink, fontWeight: 500 }}>{lang === 'th' ? meta.th : meta.en} · {a.patient}</div>
                      <div style={{ fontSize: 10.5, color: DT.ink3, marginTop: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.detail}</div>
                    </div>
                    <Ico name="chev_r" size={14} color={DT.ink3} />
                  </div>
                );
              })}
              {totalAlerts === 0 && (
                <div style={{ padding: 20, textAlign: 'center', color: DT.ink3, fontSize: 12.5 }}>
                  {lang === 'th' ? '✓ ไม่มีแจ้งเตือน' : '✓ All clear'}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Comments thread + Adjust next session */}
        <div className="dash-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
          {/* Comment thread — async messages between therapist + patient */}
          <div style={{
            padding: 14, background: DT.surface, borderRadius: 14,
            boxShadow: `inset 0 0 0 1px ${DT.line}`,
            display: 'flex', flexDirection: 'column', gap: 10
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Ico name="speak" size={14} color={DT.brandDeep} />
                <span style={{ fontSize: 14, fontWeight: 600, color: DT.ink }}>
                  {lang === 'th' ? 'บันทึก / ข้อความ' : 'Notes & messages'}
                </span>
              </div>
              <Pill tone="neutral" size="sm">{comments.length}</Pill>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 200, overflow: 'auto' }}>
              {comments.map((c, i) => {
                const isTherapist = c.who === 'therapist';
                return (
                  <div key={i} style={{
                    display: 'flex', gap: 10, alignItems: 'flex-start',
                    flexDirection: isTherapist ? 'row' : 'row-reverse'
                  }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 999,
                      background: isTherapist ? 'linear-gradient(135deg,#52704A,#7FA876)' : '#9B7A62',
                      color: '#F5F1E8', fontWeight: 700, fontSize: 11,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>{c.name.split(' ').map((x) => x[0]).join('').slice(0, 2)}</div>
                    <div style={{
                      flex: 1,
                      padding: '8px 11px', borderRadius: 12,
                      background: isTherapist ? '#FAF6EC' : DT.brandSoft,
                      boxShadow: `inset 0 0 0 1px ${DT.line}`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                        <span style={{ fontSize: 11.5, fontWeight: 600, color: DT.ink }}>{c.name}</span>
                        <span style={{ fontSize: 10, color: DT.ink3 }}>{c.when}</span>
                      </div>
                      <div style={{ fontSize: 12.5, color: DT.ink, lineHeight: 1.4 }}>{c.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 10px', borderRadius: 10,
              background: '#FAF6EC', boxShadow: `inset 0 0 0 1px ${DT.line}`
            }}>
              <span style={{ flex: 1, fontSize: 12, color: DT.ink3 }}>
                {lang === 'th' ? 'เขียนคำแนะนำให้ผู้ป่วยอ่านครั้งต่อไป…' : 'Write a note for next session…'}
              </span>
              <button style={{
                padding: '6px 12px', background: DT.brand, color: '#F5F1E8',
                border: 0, borderRadius: 8, cursor: 'pointer', fontSize: 12, fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 6
              }}>
                <Ico name="arrow_r" size={12} color="#F5F1E8" /> {lang === 'th' ? 'ส่ง' : 'Send'}
              </button>
            </div>
          </div>

          {/* Adjust next session — therapist tweaks plan async */}
          <div style={{
            padding: 14, background: DT.surface, borderRadius: 14,
            boxShadow: `inset 0 0 0 1px ${DT.line}`,
            display: 'flex', flexDirection: 'column', gap: 10
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Ico name="set" size={14} color={DT.brand} />
                <span style={{ fontSize: 14, fontWeight: 600, color: DT.ink }}>
                  {lang === 'th' ? 'ปรับเซสชันถัดไป' : 'Adjust next session'}
                </span>
              </div>
              <span style={{ fontSize: 11, color: DT.ink3 }}>
                {lang === 'th' ? 'พรุ่งนี้ 10:00' : 'Tomorrow 10:00'}
              </span>
            </div>

            {/* Current focus: shoulder flexion */}
            <div style={{
              padding: 12, borderRadius: 10,
              background: '#FAF6EC', boxShadow: `inset 0 0 0 1px ${DT.line}`
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: DT.ink }}>{t.ex.shoulder}</span>
                <span style={{ fontSize: 11, color: DT.brand, cursor: 'pointer' }}>{lang === 'th' ? 'สลับท่า' : 'Swap'}</span>
              </div>
              {/* Reps × sets steppers */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
                {[
                  { label: lang === 'th' ? 'ครั้ง' : 'Reps', val: 15, was: 12 },
                  { label: lang === 'th' ? 'เซ็ต' : 'Sets', val: 3,  was: 3  },
                ].map((f) => (
                  <div key={f.label} style={{
                    padding: '7px 10px', borderRadius: 8,
                    background: DT.surface, boxShadow: `inset 0 0 0 1px ${DT.line}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ fontSize: 10, letterSpacing: 0.4, color: DT.ink3, textTransform: 'uppercase' }}>{f.label}</div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                        <span style={{ fontSize: 18, fontWeight: 700, color: DT.ink, fontFamily: DT.font.mono }}>{f.val}</span>
                        {f.val !== f.was && <span style={{ fontSize: 10, color: DT.warn }}>↑ from {f.was}</span>}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <button style={{ width: 22, height: 16, border: 0, background: DT.surface2, borderRadius: 4, cursor: 'pointer', color: DT.ink2, fontSize: 11 }}>+</button>
                      <button style={{ width: 22, height: 16, border: 0, background: DT.surface2, borderRadius: 4, cursor: 'pointer', color: DT.ink2, fontSize: 11 }}>−</button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Target angle slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 10.5, letterSpacing: 0.4, color: DT.ink3, textTransform: 'uppercase' }}>
                    {lang === 'th' ? 'มุมเป้าหมาย' : 'Target angle'}
                  </span>
                  <span style={{ fontSize: 12.5, color: DT.brand, fontFamily: DT.font.mono, fontWeight: 600 }}>160° ± 15°</span>
                </div>
                <div style={{ position: 'relative', height: 16, display: 'flex', alignItems: 'center' }}>
                  <div style={{ position: 'absolute', left: 0, right: 0, height: 4, borderRadius: 4, background: 'rgba(60,48,30,0.10)' }} />
                  {/* tolerance band */}
                  <div style={{ position: 'absolute', left: '70%', width: '20%', height: 4, borderRadius: 4, background: DT.brandSoft }} />
                  {/* target marker */}
                  <div style={{ position: 'absolute', left: '80%', transform: 'translateX(-50%)', width: 14, height: 14, borderRadius: 999, background: DT.brand, boxShadow: `0 0 0 2px ${DT.surface}` }} />
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <button style={{
                padding: '9px 10px', background: DT.surface, color: DT.ink,
                border: 0, borderRadius: 10, cursor: 'pointer',
                fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                boxShadow: `inset 0 0 0 1px ${DT.line}`
              }}>
                <Ico name="cam" size={13} color={DT.ink} />
                {lang === 'th' ? 'อัดอ้างอิงใหม่' : 'Record new ref.'}
              </button>
              <button style={{
                padding: '9px 10px', background: DT.surface, color: DT.ink,
                border: 0, borderRadius: 10, cursor: 'pointer',
                fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                boxShadow: `inset 0 0 0 1px ${DT.line}`
              }}>
                <Ico name="plus" size={13} color={DT.ink} />
                {lang === 'th' ? 'เพิ่มท่า' : 'Add exercise'}
              </button>
            </div>

            <button style={{
              padding: '10px', background: DT.brand, color: '#F5F1E8',
              border: 0, borderRadius: 10, cursor: 'pointer',
              fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
            }}>
              <Ico name="check" size={14} color="#F5F1E8" />
              {lang === 'th' ? 'บันทึก & ส่งให้ผู้ป่วย' : 'Save & push to patient'}
            </button>
          </div>
        </div>
        </React.Fragment>
        )}
      </div>
    </div>);

}

// ─── ScreenTherapistSetup — web-based BlazePose capture + validate (mirrors the tester) ───
function ScreenTherapistSetup() {
  const { t, lang } = useT();
  const T = window.pxTokens;
  const [mode, setMode] = React.useState('setup');
  const [cameraOn, setCameraOn] = React.useState(true);
  const [hasRef, setHasRef] = React.useState(true);
  const [phase, setPhase] = React.useState(0);

  React.useEffect(() => {
    if (!cameraOn) return;
    let raf, t0 = performance.now();
    const tick = (now) => {
      const p = 0.5 - 0.5 * Math.cos((now - t0) / 1000 % 3.5 * Math.PI / 1.75);
      setPhase(p);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cameraOn]);

  const angle = Math.round(phase * 168);
  const target = 160;
  const accuracy = cameraOn ? Math.max(0, Math.round(100 - Math.abs(angle - target) * 0.8)) : 0;

  const joints = [
    { en: 'L. shoulder', th: 'ไหล่ซ้าย',   ref: 90,  live: 92,  delta: 2  },
    { en: 'R. shoulder', th: 'ไหล่ขวา',    ref: 90,  live: 88,  delta: 2  },
    { en: 'L. elbow',    th: 'ข้อศอกซ้าย', ref: 170, live: 168, delta: 2  },
    { en: 'R. elbow',    th: 'ข้อศอกขวา',  ref: 170, live: 175, delta: 5  },
    { en: 'L. hip',      th: 'สะโพกซ้าย',  ref: 175, live: 174, delta: 1  },
    { en: 'R. hip',      th: 'สะโพกขวา',   ref: 175, live: 172, delta: 3  },
    { en: 'L. knee',     th: 'เข่าซ้าย',   ref: 178, live: 165, delta: 13 },
    { en: 'R. knee',     th: 'เข่าขวา',    ref: 178, live: 175, delta: 3  },
    { en: 'L. ankle',    th: 'ข้อเท้าซ้าย', ref: 92,  live: 91,  delta: 1  },
    { en: 'R. ankle',    th: 'ข้อเท้าขวา',  ref: 92,  live: 93,  delta: 1  },
  ];

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100%', background: T.bg,
      color: T.ink, fontFamily: T.font.sans
    }}>
      {/* Header bar */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 24px', background: T.surface,
        boxShadow: `inset 0 -1px 0 ${T.line}`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button style={{
            width: 32, height: 32, borderRadius: 10,
            background: T.surface2, border: `1px solid ${T.line}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}>
            <Ico name="chev_l" size={16} color={T.ink2} />
          </button>
          <div style={{
            width: 32, height: 32, borderRadius: 10, background: T.brandSoft,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Ico name="body" size={18} color={T.brand} />
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 1.4, color: T.ink3, fontWeight: 500, textTransform: 'uppercase' }}>{t.appName} · {lang === 'th' ? 'นักกายภาพ' : 'Therapist'}</div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>
              {lang === 'th' ? 'บันทึกท่าอ้างอิง · BlazePose' : 'Capture Reference · BlazePose'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Pill tone="good">
            <Dot color={T.good} size={6} />
            <span style={{ marginLeft: 4 }}>{lang === 'th' ? 'พร้อม' : 'Ready'}</span>
          </Pill>
          <Pill tone="neutral">
            <span style={{ fontFamily: T.font.mono }}>28.4 FPS</span>
          </Pill>
          <select style={{
            padding: '8px 12px', borderRadius: 10,
            background: T.surface, border: `1px solid ${T.line}`,
            fontSize: 13, color: T.ink, cursor: 'pointer', fontFamily: T.font.sans
          }}>
            <option>Model: Lite (fast)</option>
            <option>Model: Full (balanced)</option>
            <option>Model: Heavy (accurate)</option>
          </select>
          <button onClick={() => setCameraOn(!cameraOn)} style={{
            padding: '8px 14px', border: 0, borderRadius: 10,
            background: cameraOn ? T.bad : T.brand, color: '#F5F1E8',
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 6
          }}>
            <Ico name={cameraOn ? 'close' : 'cam'} size={14} color="#F5F1E8" />
            {cameraOn ? (lang === 'th' ? 'ปิดกล้อง' : 'Stop Camera') : (lang === 'th' ? 'เปิดกล้อง' : 'Start Camera')}
          </button>
        </div>
      </header>

      {/* Main grid */}
      <div className="setup-main" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 20, padding: 20, flex: 1 }}>
        {/* Video card */}
        <div style={{ background: T.surface, borderRadius: 18, border: `1px solid ${T.line}`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{
            position: 'relative', flex: 1, minHeight: 520,
            background: cameraOn ? 'radial-gradient(ellipse at 50% 40%, #FBF8F0 0%, #E8E0CC 70%)' : T.surface3,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            {cameraOn ? (
              <>
                {hasRef && mode === 'validate' && (
                  <div style={{ position: 'absolute', width: 260, height: 440, opacity: 0.30 }}>
                    <PoseSkeleton phase={1} accent={T.brand} stroke={T.brand} showRef={false} />
                  </div>
                )}
                <div style={{ width: 260, height: 440 }}>
                  <PoseSkeleton phase={phase} accent={mode === 'validate' ? (accuracy > 85 ? T.good : accuracy > 60 ? T.warn : T.bad) : T.brand} />
                </div>
                <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', gap: 8 }}>
                  <Pill style={{ background: mode === 'setup' ? T.brandSoft : 'rgba(127,168,118,0.22)', color: T.brand, fontWeight: 700, letterSpacing: 0.6 }}>
                    {mode === 'setup' ? (lang === 'th' ? 'เซ็ตอัพ' : 'SETUP') : (lang === 'th' ? 'ตรวจสอบ' : 'VALIDATE')}
                  </Pill>
                </div>
                <div style={{ position: 'absolute', top: 14, right: 14 }}>
                  <Pill tone="good" size="sm">
                    <Dot color={T.good} size={6} />
                    <span style={{ marginLeft: 4 }}>{lang === 'th' ? 'ตรวจพบ 33 จุด' : 'Pose detected (33 pts)'}</span>
                  </Pill>
                </div>
                {/* Bottom angle readout */}
                <div style={{
                  position: 'absolute', left: 18, bottom: 18,
                  padding: '6px 10px', borderRadius: 8,
                  background: 'rgba(255,248,235,0.92)',
                  boxShadow: `inset 0 0 0 1px ${T.line}`,
                  display: 'flex', alignItems: 'center', gap: 8,
                  color: mode === 'validate' ? (accuracy > 85 ? T.good : T.warn) : T.ink,
                  fontFamily: T.font.mono, fontSize: 12, fontWeight: 600
                }}>
                  R. shoulder: {angle}° / {target}°
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', color: T.ink3 }}>
                <Ico name="cam" size={48} color={T.inkDim} />
                <div style={{ marginTop: 12, fontSize: 14, fontWeight: 500 }}>{lang === 'th' ? 'กล้องปิดอยู่' : 'Camera off'}</div>
                <div style={{ fontSize: 12, marginTop: 4 }}>{lang === 'th' ? 'กดปุ่ม "เปิดกล้อง" ด้านบนเพื่อเริ่ม' : 'Press "Start Camera" above to begin'}</div>
              </div>
            )}
          </div>

          {/* Action bar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: 14, background: T.surface,
            boxShadow: `inset 0 1px 0 ${T.line}`
          }}>
            <div style={{ display: 'inline-flex', padding: 4, gap: 4, background: T.surface2, borderRadius: 999 }}>
              <button onClick={() => setMode('setup')} style={{
                padding: '6px 14px', borderRadius: 999, border: 0, cursor: 'pointer',
                background: mode === 'setup' ? T.surface : 'transparent',
                color: mode === 'setup' ? T.ink : T.ink2,
                fontSize: 12.5, fontWeight: mode === 'setup' ? 600 : 500,
                boxShadow: mode === 'setup' ? '0 1px 2px rgba(0,0,0,0.04)' : 'none'
              }}>{lang === 'th' ? 'เซ็ตอัพ (อ้างอิง)' : 'Setup (Reference)'}</button>
              <button onClick={() => setMode('validate')} style={{
                padding: '6px 14px', borderRadius: 999, border: 0, cursor: 'pointer',
                background: mode === 'validate' ? T.surface : 'transparent',
                color: mode === 'validate' ? T.ink : T.ink2,
                fontSize: 12.5, fontWeight: mode === 'validate' ? 600 : 500,
                boxShadow: mode === 'validate' ? '0 1px 2px rgba(0,0,0,0.04)' : 'none'
              }}>{lang === 'th' ? 'ตรวจสอบ' : 'Validate'}</button>
            </div>
            <div style={{ flex: 1 }} />
            <button onClick={() => setHasRef(true)} disabled={!cameraOn} style={{
              padding: '8px 14px', border: 0, borderRadius: 10,
              background: cameraOn ? T.brand : T.surface2,
              color: cameraOn ? '#F5F1E8' : T.ink3,
              fontSize: 13, fontWeight: 600, cursor: cameraOn ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', gap: 6
            }}>
              <Ico name="cam" size={14} color={cameraOn ? '#F5F1E8' : T.ink3} />
              {lang === 'th' ? 'บันทึกอ้างอิง' : 'Capture Reference'}
            </button>
            <button onClick={() => setHasRef(false)} disabled={!hasRef} style={{
              padding: '8px 14px', border: 0, borderRadius: 10,
              background: T.surface, color: T.ink,
              fontSize: 13, fontWeight: 500, cursor: hasRef ? 'pointer' : 'not-allowed',
              opacity: hasRef ? 1 : 0.5,
              boxShadow: `inset 0 0 0 1px ${T.line}`,
              display: 'flex', alignItems: 'center', gap: 6
            }}>
              <Ico name="close" size={14} color={T.ink} />
              {lang === 'th' ? 'ล้าง' : 'Clear'}
            </button>
          </div>
        </div>

        {/* Side panel */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Overall accuracy + stats */}
          <div style={{ padding: 16, background: T.surface, border: `1px solid ${T.line}`, borderRadius: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontSize: 11, letterSpacing: 1.2, color: T.ink3, fontWeight: 500, textTransform: 'uppercase' }}>
              {lang === 'th' ? 'คะแนนรวม' : 'Overall'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 14, background: T.surface2, borderRadius: 14 }}>
              <Ring value={accuracy / 100} size={88} thickness={7} color={accuracy > 85 ? T.good : accuracy > 60 ? T.warn : T.bad} fontSize={22}>
                {mode === 'validate' && cameraOn ? accuracy : '—'}
              </Ring>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, letterSpacing: 0.5, color: T.ink3, fontWeight: 500, textTransform: 'uppercase' }}>{lang === 'th' ? 'ความแม่นยำ' : 'Accuracy'}</div>
                <div style={{ fontSize: 13, color: T.ink, marginTop: 4, lineHeight: 1.35 }}>
                  {!cameraOn
                    ? (lang === 'th' ? 'เปิดกล้องเพื่อเริ่ม' : 'Start camera to begin')
                    : mode === 'setup'
                      ? (lang === 'th' ? 'สลับไปตรวจสอบเพื่อเทียบ' : 'Switch to Validate to compare')
                      : !hasRef
                        ? (lang === 'th' ? 'ต้องบันทึกอ้างอิงก่อน' : 'Capture a reference first')
                        : accuracy >= 75 ? (lang === 'th' ? 'ตรงท่าอ้างอิง' : 'Great match')
                          : accuracy >= 50 ? (lang === 'th' ? 'ปรับท่าทาง' : 'Adjust posture')
                            : (lang === 'th' ? 'ห่างจากอ้างอิงมาก' : 'Significantly off')}
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ padding: '10px 12px', background: T.surface2, borderRadius: 10 }}>
                <div style={{ fontSize: 10, letterSpacing: 0.4, color: T.ink3, textTransform: 'uppercase' }}>{lang === 'th' ? 'หน่วงเวลา' : 'Inference'}</div>
                <div style={{ fontSize: 18, fontWeight: 700, fontFamily: T.font.mono, color: T.ink }}>{cameraOn ? '24' : '—'} ms</div>
              </div>
              <div style={{ padding: '10px 12px', background: T.surface2, borderRadius: 10 }}>
                <div style={{ fontSize: 10, letterSpacing: 0.4, color: T.ink3, textTransform: 'uppercase' }}>{lang === 'th' ? 'จุดข้อต่อ' : 'Landmarks'}</div>
                <div style={{ fontSize: 18, fontWeight: 700, fontFamily: T.font.mono, color: T.ink }}>{cameraOn ? '33' : '0'}/33</div>
              </div>
            </div>
          </div>

          {/* Joint angles table */}
          <div style={{ padding: 16, background: T.surface, border: `1px solid ${T.line}`, borderRadius: 14 }}>
            <div style={{ fontSize: 11, letterSpacing: 1.2, color: T.ink3, fontWeight: 500, textTransform: 'uppercase', marginBottom: 10 }}>
              {lang === 'th' ? 'มุมข้อต่อ' : 'Joint angles'}
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11, fontFamily: T.font.mono }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${T.line}` }}>
                  <th style={{ textAlign: 'left', padding: '4px 0', color: T.ink3, fontWeight: 500, fontSize: 10, letterSpacing: 0.4, textTransform: 'uppercase', fontFamily: T.font.sans }}>{lang === 'th' ? 'ข้อต่อ' : 'Joint'}</th>
                  <th style={{ textAlign: 'right', padding: '4px 0', color: T.ink3, fontWeight: 500, fontSize: 10, letterSpacing: 0.4, textTransform: 'uppercase', fontFamily: T.font.sans }}>Ref</th>
                  <th style={{ textAlign: 'right', padding: '4px 0', color: T.ink3, fontWeight: 500, fontSize: 10, letterSpacing: 0.4, textTransform: 'uppercase', fontFamily: T.font.sans }}>Live</th>
                  <th style={{ textAlign: 'right', padding: '4px 0', color: T.ink3, fontWeight: 500, fontSize: 10, letterSpacing: 0.4, textTransform: 'uppercase', fontFamily: T.font.sans }}>Δ</th>
                  <th style={{ textAlign: 'right', padding: '4px 0', color: T.ink3, fontWeight: 500, fontSize: 10, letterSpacing: 0.4, textTransform: 'uppercase', fontFamily: T.font.sans }}>OK</th>
                </tr>
              </thead>
              <tbody>
                {joints.map((j) => {
                  const ok = j.delta <= 15;
                  const warn = j.delta > 15 && j.delta <= 30;
                  const showLive = cameraOn && hasRef && mode === 'validate';
                  return (
                    <tr key={j.en}>
                      <td style={{ padding: '5px 0', color: T.ink, fontFamily: T.font.sans, fontWeight: 500, fontSize: 12 }}>{lang === 'th' ? j.th : j.en}</td>
                      <td style={{ textAlign: 'right', padding: '5px 0', color: hasRef ? T.ink : T.ink3 }}>{hasRef ? j.ref + '°' : '—'}</td>
                      <td style={{ textAlign: 'right', padding: '5px 0', color: cameraOn ? T.ink : T.ink3 }}>{cameraOn ? j.live + '°' : '—'}</td>
                      <td style={{ textAlign: 'right', padding: '5px 0', color: showLive ? T.ink : T.ink3 }}>{showLive ? j.delta + '°' : '—'}</td>
                      <td style={{ textAlign: 'right', padding: '5px 0', color: showLive ? (ok ? T.good : warn ? T.warn : T.bad) : T.ink3, fontWeight: 700 }}>
                        {showLive ? (ok ? '✓' : warn ? '~' : '✗') : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Reference data: load/save/folder */}
          <div style={{ padding: 16, background: T.surface, border: `1px solid ${T.line}`, borderRadius: 14 }}>
            <div style={{ fontSize: 11, letterSpacing: 1.2, color: T.ink3, fontWeight: 500, textTransform: 'uppercase', marginBottom: 10 }}>
              {lang === 'th' ? 'ท่าอ้างอิง' : 'Reference'}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 8 }}>
              <button style={{ padding: '8px 10px', background: T.surface, color: T.ink, border: `1px solid ${T.line}`, borderRadius: 10, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <Ico name="cam" size={12} color={T.ink} /> {lang === 'th' ? 'จากรูปภาพ' : 'From Image'}
              </button>
              <button style={{ padding: '8px 10px', background: T.surface, color: T.ink, border: `1px solid ${T.line}`, borderRadius: 10, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <Ico name="arrow_r" size={12} color={T.ink} /> {lang === 'th' ? 'โหลด JSON' : 'Load JSON'}
              </button>
              <button disabled={!hasRef} style={{ padding: '8px 10px', background: T.surface, color: hasRef ? T.ink : T.ink3, border: `1px solid ${T.line}`, borderRadius: 10, fontSize: 12, cursor: hasRef ? 'pointer' : 'not-allowed', opacity: hasRef ? 1 : 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <Ico name="check" size={12} color={hasRef ? T.ink : T.ink3} /> {lang === 'th' ? 'ดาวน์โหลด JSON' : 'Download JSON'}
              </button>
              <button style={{ padding: '8px 10px', background: T.surface, color: T.ink, border: `1px solid ${T.line}`, borderRadius: 10, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <Ico name="set" size={12} color={T.ink} /> {lang === 'th' ? 'เลือกโฟลเดอร์' : 'Save folder'}
              </button>
            </div>
            <div style={{ fontSize: 11, fontFamily: T.font.mono, color: hasRef ? T.ink2 : T.ink3 }}>
              {hasRef
                ? (lang === 'th' ? 'บันทึก 14:23:45 · 10/10 ข้อต่อ' : 'Captured 14:23:45 · 10/10 joints')
                : (lang === 'th' ? 'ยังไม่ได้บันทึกอ้างอิง' : 'No reference captured')}
            </div>
            <div style={{ fontSize: 11, fontFamily: T.font.mono, color: T.ink3, marginTop: 4 }}>
              {lang === 'th' ? 'โฟลเดอร์: Captured/' : 'Folder: Captured/'}
            </div>
          </div>

          {/* Assign to patient + exercise — therapist setup goes here */}
          <div style={{ padding: 16, background: T.surface, border: `1px solid ${T.line}`, borderRadius: 14 }}>
            <div style={{ fontSize: 11, letterSpacing: 1.2, color: T.ink3, fontWeight: 500, textTransform: 'uppercase', marginBottom: 10 }}>
              {lang === 'th' ? 'จัดให้ผู้ป่วย' : 'Assign'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <select style={{ padding: '8px 10px', borderRadius: 8, border: `1px solid ${T.line}`, background: T.surface2, fontSize: 12, color: T.ink, fontFamily: T.font.sans }}>
                <option>{lang === 'th' ? 'ผู้ป่วย: อารีย์ ส.' : 'Patient: Aree S.'}</option>
                <option>{lang === 'th' ? 'ผู้ป่วย: สมชาย ท.' : 'Patient: Somchai T.'}</option>
                <option>{lang === 'th' ? 'ผู้ป่วย: น้อย พ.' : 'Patient: Noi P.'}</option>
              </select>
              <select style={{ padding: '8px 10px', borderRadius: 8, border: `1px solid ${T.line}`, background: T.surface2, fontSize: 12, color: T.ink, fontFamily: T.font.sans }}>
                <option>{lang === 'th' ? 'ท่า: ยกแขนขึ้น' : 'Exercise: Shoulder flexion'}</option>
                <option>{lang === 'th' ? 'ท่า: เหยียดเข่า' : 'Exercise: Knee extension'}</option>
                <option>{lang === 'th' ? 'ท่า: สควอท' : 'Exercise: Squat'}</option>
              </select>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                <div style={{ padding: '6px 10px', borderRadius: 8, background: T.surface2 }}>
                  <div style={{ fontSize: 10, color: T.ink3 }}>{lang === 'th' ? 'ครั้ง' : 'Reps'}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: T.ink, fontFamily: T.font.mono }}>12</div>
                </div>
                <div style={{ padding: '6px 10px', borderRadius: 8, background: T.surface2 }}>
                  <div style={{ fontSize: 10, color: T.ink3 }}>{lang === 'th' ? 'ความคลาดเคลื่อน' : 'Tolerance'}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: T.ink, fontFamily: T.font.mono }}>±15°</div>
                </div>
              </div>
              <button disabled={!hasRef} style={{
                padding: '10px', borderRadius: 10, border: 0,
                background: hasRef ? T.brand : T.surface2,
                color: hasRef ? '#F5F1E8' : T.ink3,
                fontSize: 13, fontWeight: 600, cursor: hasRef ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                marginTop: 4
              }}>
                <Ico name="check" size={14} color={hasRef ? '#F5F1E8' : T.ink3} />
                {lang === 'th' ? 'ส่งให้ผู้ป่วย' : 'Push to patient'}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

Object.assign(window, { BrowserChrome, ScreenDashboard, ScreenTherapistSetup });
