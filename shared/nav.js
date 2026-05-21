// ─── NavBar — floating top-right page switcher (multi-file HTML version) ───
// Each link is a real <a href="..."> to a separate HTML file.
// `currentPath` arg should be the page-relative key, e.g. 'patient/practice'.

const NAV_ROUTES = [
  { path: 'patient/home',         href: '/UI-Mock/patient/home.html',         label: 'Home',         labelTh: 'หน้าหลัก',         group: 'patient',   icon: 'home' },
  { path: 'patient/practice',     href: '/UI-Mock/patient/practice.html',     label: 'Practice',     labelTh: 'ฝึกซ้อม',          group: 'patient',   icon: 'body' },
  { path: 'patient/audio',        href: '/UI-Mock/patient/audio.html',        label: 'Audio-Only',   labelTh: 'เสียงอย่างเดียว',   group: 'patient',   icon: 'speak' },
  { path: 'patient/visual',       href: '/UI-Mock/patient/visual.html',       label: 'Visual-Only',  labelTh: 'ภาพอย่างเดียว',    group: 'patient',   icon: 'eye' },
  { path: 'therapist/dashboard',  href: '/UI-Mock/therapist/dashboard.html',  label: 'Dashboard',    labelTh: 'แดชบอร์ด',         group: 'therapist', icon: 'chart' },
  { path: 'therapist/capture',    href: '/UI-Mock/therapist/capture.html',    label: 'Capture Ref.', labelTh: 'บันทึกอ้างอิง',     group: 'therapist', icon: 'cam' },
];

// Build a relative href from the current page to a target path.
// currentPath is e.g. 'patient/practice' (folder/file without .html).
function relHref(currentPath, route) {
  // Number of "../" needed to get back to /UI-Mock/
  const depth = currentPath.split('/').length - 1;
  const up = depth > 0 ? '../'.repeat(depth) : '';
  // Strip the leading /UI-Mock/ from absolute href
  const rel = route.href.replace(/^\/UI-Mock\//, '');
  return up + rel;
}

// ─── BackButton — top-left, smart fallback ───
// Tries history.back() first. If there's no history (page opened directly / bookmark),
// falls back to the logical parent route (patient/* → patient/home, therapist/* → therapist/dashboard).
function BackButton({ currentPath, lang }) {
  const T = window.pxTokens;
  if (!currentPath) return null; // hide on landing

  const depth = currentPath.split('/').length - 1;
  const up = depth > 0 ? '../'.repeat(depth) : '';

  let fallback = up + 'index.html';
  if (currentPath !== 'patient/home' && currentPath.startsWith('patient/')) {
    fallback = up + 'patient/home.html';
  } else if (currentPath !== 'therapist/dashboard' && currentPath.startsWith('therapist/')) {
    fallback = up + 'therapist/dashboard.html';
  }

  const onClick = (e) => {
    e.preventDefault();
    // If the user got here via a navigation in this tab, go back; else go to logical parent.
    if (window.history.length > 1 && document.referrer && document.referrer !== window.location.href) {
      window.history.back();
    } else {
      window.location.href = fallback;
    }
  };

  return (
    <a href={fallback} onClick={onClick} style={{
      position: 'fixed', top: 14, left: 14, zIndex: 10000,
      display: 'flex', alignItems: 'center', gap: 6,
      padding: '8px 12px 8px 10px', borderRadius: 999,
      background: T.surface, color: T.ink2,
      textDecoration: 'none', fontSize: 12.5, fontWeight: 600,
      border: `1px solid ${T.line}`,
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      fontFamily: T.font.sans
    }}>
      <Ico name="chev_l" size={14} color={T.ink2} />
      {lang === 'th' ? 'ย้อนกลับ' : 'Back'}
    </a>
  );
}

function NavBar({ currentPath, lang, setLang }) {
  const T = window.pxTokens;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onDoc = (e) => {
      if (!e.target.closest('[data-uimock-nav]')) setOpen(false);
    };
    if (open) document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, [open]);

  const current = NAV_ROUTES.find((r) => r.path === currentPath);
  const isHome = currentPath === '' || currentPath === 'index';
  const groups = { patient: [], therapist: [] };
  NAV_ROUTES.forEach((r) => groups[r.group].push(r));
  const labelFor = (r) => lang === 'th' ? r.labelTh : r.label;

  // Path to landing index.html
  const homeHref = (() => {
    const depth = currentPath ? currentPath.split('/').length - 1 : 0;
    return depth > 0 ? '../'.repeat(depth) + 'index.html' : 'index.html';
  })();

  return (
    <React.Fragment>
      <BackButton currentPath={currentPath} lang={lang} />
      <div data-uimock-nav style={{
      position: 'fixed', top: 14, right: 14, zIndex: 10000,
      display: 'flex', gap: 8, alignItems: 'center', fontFamily: T.font.sans
    }}>
      <a href={homeHref} style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '8px 12px', borderRadius: 999,
        background: isHome ? T.brand : T.surface,
        color: isHome ? '#F5F1E8' : T.ink2,
        textDecoration: 'none', fontSize: 12.5, fontWeight: 600,
        border: isHome ? 'none' : `1px solid ${T.line}`,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
      }}>
        <Ico name="home" size={14} color={isHome ? '#F5F1E8' : T.ink2} />
        {lang === 'th' ? 'หน้าแรก' : 'Home'}
      </a>

      <div style={{ position: 'relative' }}>
        <button onClick={() => setOpen((o) => !o)} style={{
          padding: '8px 14px', borderRadius: 999,
          background: current ? T.brand : T.surface, color: current ? '#F5F1E8' : T.ink,
          border: current ? 'none' : `1px solid ${T.line}`,
          cursor: 'pointer', fontSize: 12.5, fontWeight: 600, fontFamily: T.font.sans,
          display: 'flex', alignItems: 'center', gap: 6,
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}>
          <Ico name={current ? current.icon : 'set'} size={14} color={current ? '#F5F1E8' : T.ink} />
          {current ? labelFor(current) : (lang === 'th' ? 'เลือกหน้าจอ' : 'Screens')}
          <Ico name="chev_d" size={12} color={current ? '#F5F1E8' : T.ink} />
        </button>

        {open && (
          <div style={{
            position: 'absolute', top: 'calc(100% + 8px)', right: 0,
            width: 280, background: T.surface, borderRadius: 14,
            border: `1px solid ${T.line}`, boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
            padding: 8
          }}>
            <div style={{ fontSize: 10, letterSpacing: 1, color: T.ink3, textTransform: 'uppercase', padding: '8px 10px 4px', fontWeight: 600 }}>
              {lang === 'th' ? 'ผู้ป่วย (มือถือ)' : 'Patient (mobile)'}
            </div>
            {groups.patient.map((r) => (
              <a key={r.path} href={relHref(currentPath, r)} onClick={() => setOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '9px 10px', borderRadius: 10,
                background: currentPath === r.path ? T.brandSoft : 'transparent',
                color: currentPath === r.path ? T.brand : T.ink, textDecoration: 'none',
                fontSize: 13, fontWeight: currentPath === r.path ? 600 : 500
              }}>
                <Ico name={r.icon} size={14} color={currentPath === r.path ? T.brand : T.ink2} />
                {labelFor(r)}
              </a>
            ))}
            <div style={{ height: 1, background: T.line, margin: '6px 8px' }} />
            <div style={{ fontSize: 10, letterSpacing: 1, color: T.ink3, textTransform: 'uppercase', padding: '8px 10px 4px', fontWeight: 600 }}>
              {lang === 'th' ? 'นักกายภาพ (เว็บ)' : 'Therapist (web)'}
            </div>
            {groups.therapist.map((r) => (
              <a key={r.path} href={relHref(currentPath, r)} onClick={() => setOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '9px 10px', borderRadius: 10,
                background: currentPath === r.path ? T.brandSoft : 'transparent',
                color: currentPath === r.path ? T.brand : T.ink, textDecoration: 'none',
                fontSize: 13, fontWeight: currentPath === r.path ? 600 : 500
              }}>
                <Ico name={r.icon} size={14} color={currentPath === r.path ? T.brand : T.ink2} />
                {labelFor(r)}
              </a>
            ))}
          </div>
        )}
      </div>

      <button onClick={() => {
        const next = lang === 'th' ? 'en' : 'th';
        setLang(next);
        try { localStorage.setItem('physioai.lang', next); } catch {}
      }} style={{
        padding: '8px 12px', borderRadius: 999,
        background: T.surface, color: T.ink2, border: `1px solid ${T.line}`,
        cursor: 'pointer', fontSize: 12.5, fontWeight: 600, fontFamily: T.font.sans,
        display: 'flex', alignItems: 'center', gap: 6,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
      }}>
        <Ico name="globe" size={14} color={T.ink2} />
        {lang === 'th' ? 'ภาษาไทย' : 'English'}
      </button>
    </div>
    </React.Fragment>
  );
}

// Read persisted language; default to 'en'
function useLangState() {
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem('physioai.lang') || 'en'; } catch { return 'en'; }
  });
  return [lang, setLang];
}

// Wrapper components
function MobileShell({ children }) {
  return <div className="mobile-shell">{children}</div>;
}
function WebShell({ children }) {
  return <div className="web-shell">{children}</div>;
}

// Patient mode card click → navigate to that screen
function modeHrefFromCurrentPath(currentPath, mode) {
  const depth = currentPath ? currentPath.split('/').length - 1 : 0;
  const up = depth > 0 ? '../'.repeat(depth) : '';
  const map = {
    setup:    'therapist/capture.html',
    practice: 'patient/practice.html',
    dash:     'therapist/dashboard.html',
    audio:    'patient/audio.html',
    visual:   'patient/visual.html',
  };
  return up + (map[mode] || 'index.html');
}

Object.assign(window, { NavBar, BackButton, MobileShell, WebShell, useLangState, NAV_ROUTES, modeHrefFromCurrentPath });
