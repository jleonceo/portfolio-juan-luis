import { useState, useEffect } from "react";
import foto from "./assets/foto-juanluis.jpg";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["inicio","enjambres","proyecto","validacion","proceso","skills","stack","contacto"];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.3 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={s.root}>

      {/* NAV */}
      <nav style={{ ...s.nav, ...(scrolled ? s.navSolid : {}) }}>
        <div style={s.navInner}>
          <a href="https://github.com/jleonceo/audience-analyst-swarm" target="_blank" rel="noreferrer" style={s.navNew}>
            <span style={s.navNewDot} />
            Nuevo · Enjambre de análisis de audiencias →
          </a>
          <div style={s.navLinks}>
            {[["enjambres","Enjambres"],["proyecto","El proyecto"],["validacion","Validación"],["proceso","Proceso"],["skills","Skills"],["stack","Stack"],["contacto","Contacto"]].map(([id,label]) => (
              <button key={id} onClick={() => go(id)} style={s.navBtn}>{label}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" style={s.hero}>
        <div style={s.heroLeft}>
          <img src={foto} alt="Juan Luis León" style={s.foto} />
          <div style={s.evalBadge}>
            <span style={s.evalBadgeNum}>100%</span>
            <span style={s.evalBadgeText}>3 evals · 110 casos verificados</span>
          </div>
        </div>
        <div style={s.heroRight}>
          <p style={s.eyebrow}>Analista de Datos · IA Aplicada</p>
          <h1 style={s.nombre}>Juan Luis<br/>León Rodríguez</h1>
          <p style={s.tagline}>
            Analista de datos que construye y entrena<br/>
            <strong style={{ color: "#e2e8f0" }}>sus propias herramientas de IA.</strong>
          </p>
          <p style={s.bio}>
            MySQL, Power BI, Python, n8n y Claude trabajando juntos.
            Construí el ecosistema, diseñé las herramientas de IA
            y validé que funcionan.
          </p>
          <div style={s.heroStats}>
            {[
              { n: "19,1M€", l: "volumen contable" },
              { n: "78", l: "medidas DAX" },
              { n: "7", l: "skills creadas" },
              { n: "4 años", l: "de datos reales" },
            ].map(st => (
              <div key={st.l} style={s.heroStat}>
                <span style={s.heroStatN}>{st.n}</span>
                <span style={s.heroStatL}>{st.l}</span>
              </div>
            ))}
          </div>
          <div style={s.heroBtns}>
            <button onClick={() => go("enjambres")} style={s.btnPrimary}>Ver los enjambres</button>
            <button onClick={() => go("contacto")} style={s.btnOutline}>Contacto</button>
          </div>
        </div>
      </section>

      {/* ENJAMBRES */}
      <section id="enjambres" style={s.sectionLight}>
        <div style={s.sectionInner}>
          <p style={s.label}>SISTEMAS MULTI-AGENTE</p>
          <h2 style={s.h2}>Tres enjambres de agentes, un mismo método</h2>
          <p style={s.sectionSub}>
            No es un proyecto, es un método replicable. Cada enjambre es un sistema de skills
            especializadas que colaboran en cadena, cada una con su validación. Construido una vez,
            aplicado a tres dominios distintos — incluido uno montado desde cero para demostrarlo.
          </p>
          <div style={s.swarmGrid}>
            {[
              { dom: "Contabilidad", flujo: "extractor → generador → validador", prueba: "Validado con eval automatizado sobre casos PGC reales", repo: "https://github.com/jleonceo/accounting-agent-swarm", color: "#22c55e" },
              { dom: "Análisis de datos", flujo: "orquestador → discovery → EDA → modelado → comunicación", prueba: "Suite de evals · método portable a cualquier negocio", repo: null, color: "#3b82f6" },
              { dom: "Audiencias digitales", flujo: "orquestador → discovery → exploración → previsión → comunicación", prueba: "Simulación real: estudio de Google Trends (interés ×80)", repo: "https://github.com/jleonceo/audience-analyst-swarm", color: "#a855f7" },
            ].map(sw => (
              <div key={sw.dom} style={s.swarmCard}>
                <div style={{ ...s.swarmBar, background: sw.color }} />
                <h3 style={s.swarmDom}>{sw.dom}</h3>
                <p style={s.swarmFlujo}>{sw.flujo}</p>
                <p style={s.swarmPrueba}>{sw.prueba}</p>
                {sw.repo && (
                  <a href={sw.repo} target="_blank" rel="noreferrer" style={{ ...s.swarmLink, color: sw.color }}>Ver en GitHub →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EL PROYECTO */}
      <section id="proyecto" style={s.sectionDark}>
        <div style={s.sectionInner}>
          <p style={s.label}>EL PROYECTO</p>
          <h2 style={s.h2}>TechAcces — ecosistema de análisis de datos con IA</h2>
          <p style={s.sectionSub}>
            Un e-commerce de accesorios tech con 4 años de datos reales simulados.
            MySQL, Power BI, Python, n8n y Claude conectados en un ecosistema
            que multiplica la productividad del analista.
          </p>

          {/* Arquitectura */}
          <div style={s.arqRow}>
            {[
              { icon: "🗄️", title: "MySQL", sub: "Motor de datos", desc: "PGC español a 8 dígitos · 5 tablas · 2 vistas de verificación · FK activa · 13 tipos de operación" },
              { icon: "→", arrow: true },
              { icon: "📊", title: "Power BI", sub: "Reporting", desc: "78 medidas DAX · modelo dimensional · KPIs verificados SQL al céntimo · tema corporativo" },
              { icon: "→", arrow: true },
              { icon: "⚙️", title: "n8n", sub: "Orquestación", desc: "Workflows Gmail→Claude→MySQL · automatización de ingesta · validación en pipeline" },
              { icon: "→", arrow: true },
              { icon: "🤖", title: "Claude", sub: "Agente IA", desc: "7 skills personalizadas · 3 evals (110 casos) · 100% precisión validada · Sonnet 4.6 en producción" },
            ].map((node, i) =>
              node.arrow ? (
                <div key={i} style={s.arqArrow}>→</div>
              ) : (
                <div key={i} style={s.arqNode}>
                  <span style={s.arqIcon}>{node.icon}</span>
                  <span style={s.arqTitle}>{node.title}</span>
                  <span style={s.arqSub}>{node.sub}</span>
                  <span style={s.arqDesc}>{node.desc}</span>
                </div>
              )
            )}
          </div>

          {/* KPIs */}
          <div style={s.kpiGrid}>
            {[
              { val: "19,1M€", label: "Volumen contable total", sub: "debe + haber · 4 años" },
              { val: "5,0M€", label: "Ventas acumuladas", sub: "+35% CAGR 2023→2025" },
              { val: "7.156", label: "Asientos contables", sub: "17.878 líneas contables" },
              { val: "0,00€", label: "Descuadre global", sub: "debe = haber exactos · 19,1M€" },
            ].map(k => (
              <div key={k.label} style={s.kpiCard}>
                <span style={s.kpiVal}>{k.val}</span>
                <span style={s.kpiLabel}>{k.label}</span>
                <span style={s.kpiSub}>{k.sub}</span>
              </div>
            ))}
          </div>

          {/* Ventas + Cobertura */}
          <div style={s.grid2}>
            <div style={s.dataCard}>
              <h3 style={s.dataTitle}>Crecimiento de ventas</h3>
              {[
                { year: "2023", val: 1055, pct: 54 },
                { year: "2024", val: 1420, pct: 73 },
                { year: "2025", val: 1947, pct: 100 },
                { year: "2026*", val: 578, pct: 30 },
              ].map(b => (
                <div key={b.year} style={s.barRow}>
                  <span style={s.barYear}>{b.year}</span>
                  <div style={s.barBg}>
                    <div style={{ ...s.barFill, width: `${b.pct}%` }} />
                  </div>
                  <span style={s.barVal}>{b.val}K€</span>
                </div>
              ))}
              <p style={s.dataNote}>* 2026 parcial hasta mayo · +35% CAGR</p>
            </div>
            <div style={s.dataCard}>
              <h3 style={s.dataTitle}>Cobertura contable — 13 tipos de operación</h3>
              <div style={s.opGrid}>
                {["Ventas","Compras","Cobros","Pagos","Nóminas","Gastos","Amortización","Fiscal","Financiero","Existencias","Deterioro","Inversión","Apertura"].map(op => (
                  <span key={op} style={s.opPill}>{op}</span>
                ))}
              </div>
              <p style={s.dataNote}>4 canales de venta · 6 categorías de producto · 19 clientes · 11 proveedores</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALIDACIÓN */}
      <section id="validacion" style={s.sectionLight}>
        <div style={s.sectionInner}>
          <p style={s.label}>VALIDACIÓN</p>
          <h2 style={s.h2}>Construyo y valido mis herramientas de IA antes de usarlas</h2>
          <p style={s.sectionSub}>
            Construí una suite de evals automatizados para medir la precisión de mis herramientas de IA.
            3 frameworks independientes · 110 casos en total · runner Python con caché de prompts · grader automático con validación al céntimo.
            Tres skills con 100% en benchmark antes de usarlas en producción.
          </p>

          <div style={s.evalWrap}>
            <div style={s.evalLeft}>
              <h3 style={s.evalTitle}>Benchmarks — 3 evals · 110 casos · 100% en producción</h3>
              <div style={s.evalRows}>
                {[
                  { eval: "contable-experto", model: "Claude Sonnet 4.6", score: "100%", detail: "50/50 casos · 12 categorías PGC", winner: true, note: "Asientos, IVA, IRPF, nóminas, cierre" },
                  { eval: "datos-financieros-sql", model: "Claude Sonnet 4.6", score: "100%", detail: "30/30 casos · 6 categorías SQL", winner: true, note: "KPIs, agregaciones, JOINs, trimestres" },
                  { eval: "datos-financieros-dax", model: "Claude Sonnet 4.6", score: "100%", detail: "30/30 casos · 6 categorías DAX", winner: true, note: "Medidas DAX validadas vía SQL equivalente" },
                ].map(r => (
                  <div key={r.eval} style={{ ...s.evalRow, ...(r.winner ? s.evalWinner : {}) }}>
                    <div style={s.evalRowLeft}>
                      <span style={s.evalModel}><code style={{ ...s.code, fontSize: 12 }}>{r.eval}</code></span>
                      <span style={s.evalNote2}>{r.note}</span>
                    </div>
                    <div style={s.evalRowRight}>
                      <span style={{ ...s.evalScore, color: "#22c55e" }}>{r.score}</span>
                      <span style={s.evalCost}>{r.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://github.com/jleonceo/llm-eval-contable" target="_blank" rel="noreferrer" style={s.evalLink}>
                Ver framework completo en GitHub →
              </a>
            </div>
            <div style={s.evalRight}>
              <h3 style={s.evalTitle}>Cómo funciona el grader</h3>
              {[
                { n: "1", t: "Cuadre debe = haber", d: "El asiento tiene que cuadrar al céntimo exacto" },
                { n: "2", t: "Prefijos PGC válidos", d: "Todas las cuentas deben pertenecer al PGC español" },
                { n: "3", t: "Importes exactos", d: "Los importes deben coincidir con el caso de prueba" },
                { n: "4", t: "Flags semánticos", d: "Tipo de operación, IVA, IRPF detectados correctamente" },
              ].map(g => (
                <div key={g.n} style={s.graderRow}>
                  <span style={s.graderN}>{g.n}</span>
                  <div>
                    <span style={s.graderT}>{g.t}</span>
                    <span style={s.graderD}>{g.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EVOLUCIÓN */}
          <div id="proceso" style={s.evoWrap}>
            <p style={s.evoHeader}>El camino hasta el 100% — cada fallo fue una mejora</p>
            {[
              {
                name: "contable-experto",
                v1: "94%", v1sub: "47/50", v1Color: "#f59e0b",
                issue: "2 patrones no cubiertos en la skill",
                fix: "Periodificación pasiva · traspaso resultado a reservas",
                action: "Ejemplos F y G añadidos · skill v3.0",
              },
              {
                name: "datos-financieros-dax",
                v1: "10%", v1sub: "3/30", v1Color: "#ef4444",
                issue: "Bug crítico en el runner",
                fix: "Claude añadía backticks al SQL · conexión MySQL se corrompía en cascada",
                action: "Rediseño: conexión fresca por caso · backticks eliminados",
              },
              {
                name: "datos-financieros-sql",
                v1: "97%", v1sub: "29/30", v1Color: "#f59e0b",
                issue: "Dataset incorrecto en caso 20",
                fix: "trimestre=1 ≠ QUARTER(fecha) — descubierto analizando el fallo",
                action: "Dataset corregido · aviso añadido a skill y RAG",
              },
            ].map(e => (
              <div key={e.name} style={s.evoRow}>
                <code style={s.evoName}>{e.name}</code>
                <div style={s.evoTrack}>
                  <div style={s.evoStart}>
                    <span style={{ ...s.evoScore, color: e.v1Color }}>{e.v1}</span>
                    <span style={s.evoSub}>{e.v1sub}</span>
                  </div>
                  <div style={s.evoConnector}>
                    <div style={s.evoLineLeft} />
                    <div style={s.evoBox}>
                      <span style={s.evoIssue}>{e.issue}</span>
                      <span style={s.evoFix}>{e.fix}</span>
                      <span style={s.evoAction}>→ {e.action}</span>
                    </div>
                    <div style={s.evoLineRight} />
                  </div>
                  <div style={s.evoEnd}>
                    <span style={{ ...s.evoScore, color: "#22c55e" }}>100%</span>
                    <span style={s.evoSub}>verificado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={s.sectionDark}>
        <div style={s.sectionInner}>
          <p style={s.label}>SISTEMA DE SKILLS</p>
          <h2 style={s.h2}>7 skills que multiplican mi productividad como analista</h2>
          <p style={s.sectionSub}>
            Cada skill encapsula conocimiento estructurado en un dominio específico.
            Juntas forman mi entorno de trabajo con IA.
          </p>
          <div style={s.skillGrid}>
            {[
              { name: "contable-experto", badge: "Validada con evals", badgeColor: "#22c55e", desc: "PGC español completo, asientos, IVA, IRPF, nóminas, cierre contable. Incluye ejemplos didácticos A/B/C como test de regresión.", highlight: true },
              { name: "orquestador-techacces", badge: "Core", badgeColor: "#3b82f6", desc: "Coordina el ecosistema completo. Define qué skill invocar, cuándo conectar a MySQL o Power BI, y el protocolo de arranque de sesión." },
              { name: "datos-financieros", badge: "Validada con evals", badgeColor: "#22c55e", desc: "MySQL + DAX + protocolo de arranque. 2 evals independientes (SQL y DAX) · 60 casos · 100%. Doble verificador obligatorio tras cada INSERT contable." },
              { name: "reporting-powerbi", badge: "BI", badgeColor: "#f59e0b", desc: "Modelo semántico Power BI, secuencia de conexión MCP, medidas DAX y validación cruzada contra SQL." },
              { name: "automatizacion-n8n", badge: "Automatización", badgeColor: "#8b5cf6", desc: "Diseño de workflows, integración Gmail, parámetros Claude API para temperatura 0 en tareas contables." },
              { name: "datascience-financiero", badge: "ML", badgeColor: "#6366f1", desc: "Python, Pandas, Scikit-learn. Detección de anomalías contables, clustering, predicción con XGBoost." },
              { name: "entorno-personal", badge: "Contexto", badgeColor: "#64748b", desc: "Contexto, reglas de trabajo y estilo iterativo. Mantiene coherencia entre sesiones de trabajo." },
            ].map(sk => (
              <div key={sk.name} style={{ ...s.skillCard, ...(sk.highlight ? s.skillCardHL : {}) }}>
                <div style={s.skillTop}>
                  <code style={s.skillName}>{sk.name}</code>
                  <span style={{ ...s.skillBadge, color: sk.badgeColor, borderColor: sk.badgeColor }}>{sk.badge}</span>
                </div>
                <p style={s.skillDesc}>{sk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FILOSOFIA */}
      <section style={s.sectionDark}>
        <div style={s.sectionInner}>
          <div style={s.filosofiaBox}>
            <p style={s.filosofiaTitulo}>Una skill nunca está terminada.</p>
            <p style={s.filosofiaTexto}>
              Igual que una persona con curiosidad aprende cada día, una skill bien construida también.
              Crear no es el final: observar, refinar, medir, mejorar. Y volver a empezar.
            </p>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" style={s.sectionLight}>
        <div style={s.sectionInner}>
          <p style={s.label}>STACK</p>
          <h2 style={s.h2}>Tecnologías del ecosistema</h2>
          <div style={s.stackGrid}>
            {[
              { cat: "Base de datos", color: "#3b82f6", items: ["MySQL 8.0","SQL avanzado","Vistas","FK","MCP"] },
              { cat: "Business Intelligence", color: "#f59e0b", items: ["Power BI Desktop","DAX","Modelo dimensional","Temas JSON"] },
              { cat: "IA & LLMs", color: "#a855f7", items: ["Claude API","Prompt engineering","Evals","Skills","RAG"] },
              { cat: "Automatización", color: "#22c55e", items: ["n8n","Workflows","Gmail API","HTTP nodes"] },
              { cat: "Programación", color: "#6366f1", items: ["Python","Pandas","Anaconda","Git","React","Vite"] },
              { cat: "Metodología", color: "#64748b", items: ["Testing automatizado","Documentación técnica","CI/CD básico","Arquitectura de sistemas"] },
            ].map(g => (
              <div key={g.cat} style={s.stackCard}>
                <div style={{ ...s.stackBar, background: g.color }} />
                <h3 style={s.stackCat}>{g.cat}</h3>
                <div style={s.stackPills}>
                  {g.items.map(i => <span key={i} style={s.stackPill}>{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={s.sectionDark}>
        <div style={{ ...s.sectionInner, textAlign: "center" }}>
          <p style={s.label}>CONTACTO</p>
          <h2 style={s.h2}>Hablemos</h2>
          <p style={{ ...s.sectionSub, maxWidth: 500, margin: "0 auto 36px" }}>
            Abierto a oportunidades en datos, IA aplicada y automatización.
            Si construyes algo con datos, puedo ayudarte.
          </p>
          <div style={s.contactRow}>
            {[
              { label: "Email", val: "jleonceo@gmail.com", href: "mailto:jleonceo@gmail.com" },
              { label: "LinkedIn", val: "jlleonrodriguez", href: "https://linkedin.com/in/jlleonrodriguez" },
              { label: "GitHub", val: "@jleonceo", href: "https://github.com/jleonceo" },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={s.contactCard}>
                <span style={s.contactLabel}>{c.label}</span>
                <span style={s.contactVal}>{c.val}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={s.footer}>
        © 2026 Juan Luis León Rodríguez · React + Vite · Vercel
      </footer>

      {/* SIDE NAV DOTS */}
      <div style={s.sideDots}>
        {[["inicio","Inicio"],["enjambres","Enjambres"],["proyecto","Proyecto"],["validacion","Validación"],["proceso","Proceso"],["skills","Skills"],["stack","Stack"],["contacto","Contacto"]].map(([id, label]) => (
          <button key={id} onClick={() => go(id)} style={s.sideDot} title={label}>
            <span style={{ ...s.sideDotInner, ...(activeSection === id ? s.sideDotOn : {}) }} />
          </button>
        ))}
      </div>
    </div>
  );
}

const s = {
  root: { fontFamily: "'Segoe UI',system-ui,sans-serif", background: "#080d1a", color: "#e2e8f0", minHeight: "100vh" },
  // NAV
  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.3s" },
  navSolid: { background: "rgba(8,13,26,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" },
  navInner: { maxWidth: 1100, margin: "0 auto", padding: "0 80px", display: "flex", justifyContent: "space-between", alignItems: "center", height: 44 },
  navLinks: { display: "flex", gap: 4 },
  navBtn: { background: "none", border: "none", color: "#94a3b8", cursor: "pointer", padding: "6px 10px", borderRadius: 6, fontSize: 13, transition: "color 0.2s" },
  navNew: { display: "flex", alignItems: "center", gap: 8, color: "#4ade80", textDecoration: "none", fontSize: 13, fontWeight: 600 },
  navNewDot: { width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e", flexShrink: 0 },
  // HERO
  hero: { display: "grid", gridTemplateColumns: "300px 1fr", gap: 64, alignItems: "center", padding: "80px 80px 44px", maxWidth: 1100, margin: "0 auto" },
  heroLeft: { display: "flex", flexDirection: "column", alignItems: "center", gap: 20 },
  foto: { width: 240, height: 240, borderRadius: "50%", objectFit: "cover", objectPosition: "top", border: "3px solid rgba(96,165,250,0.35)" },
  evalBadge: { background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 12, padding: "12px 20px", textAlign: "center", width: "100%", boxSizing: "border-box" },
  evalBadgeNum: { display: "block", fontSize: 32, fontWeight: 800, color: "#22c55e", lineHeight: 1 },
  evalBadgeText: { display: "block", fontSize: 12, color: "#4ade80", marginTop: 4 },
  heroRight: { display: "flex", flexDirection: "column", gap: 16 },
  eyebrow: { color: "#60a5fa", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", margin: 0 },
  nombre: { fontSize: "clamp(36px,4vw,56px)", fontWeight: 800, lineHeight: 1.05, margin: 0, background: "linear-gradient(135deg,#f1f5f9,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  tagline: { fontSize: 18, color: "#94a3b8", lineHeight: 1.5, margin: 0 },
  bio: { fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 },
  heroStats: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 },
  heroStat: { display: "flex", flexDirection: "column", gap: 2 },
  heroStatN: { fontSize: 20, fontWeight: 800, color: "#60a5fa" },
  heroStatL: { fontSize: 11, color: "#475569" },
  heroBtns: { display: "flex", gap: 12, marginTop: 4 },
  btnPrimary: { background: "#3b82f6", color: "#fff", border: "none", padding: "11px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" },
  btnOutline: { background: "transparent", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.4)", padding: "11px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" },
  // SECCIONES
  sectionDark: { background: "#080d1a", padding: "44px 0" },
  sectionLight: { background: "#0d1425", padding: "44px 0" },
  sectionInner: { maxWidth: 1100, margin: "0 auto", padding: "0 80px" },
  label: { color: "#3b82f6", fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", margin: "0 0 8px" },
  h2: { fontSize: 32, fontWeight: 800, margin: "0 0 12px", color: "#f1f5f9" },
  sectionSub: { color: "#64748b", fontSize: 14, margin: "0 0 36px", lineHeight: 1.7 },
  // ARQUITECTURA
  arqRow: { display: "flex", alignItems: "stretch", gap: 0, marginBottom: 40, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden" },
  arqNode: { flex: 1, display: "flex", flexDirection: "column", gap: 6, padding: "24px 20px" },
  arqArrow: { display: "flex", alignItems: "center", justifyContent: "center", color: "#334155", fontSize: 20, padding: "0 4px", background: "rgba(255,255,255,0.01)" },
  arqIcon: { fontSize: 24 },
  arqTitle: { fontSize: 15, fontWeight: 700, color: "#e2e8f0" },
  arqSub: { fontSize: 11, color: "#3b82f6", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 },
  arqDesc: { fontSize: 12, color: "#475569", lineHeight: 1.6 },
  // KPIS
  kpiGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 },
  kpiCard: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "18px 20px", display: "flex", flexDirection: "column", gap: 4 },
  kpiVal: { fontSize: 24, fontWeight: 800, color: "#60a5fa" },
  kpiLabel: { fontSize: 12, fontWeight: 600, color: "#e2e8f0" },
  kpiSub: { fontSize: 11, color: "#475569" },
  // DATA CARDS
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  dataCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "22px" },
  dataTitle: { fontSize: 13, fontWeight: 700, color: "#e2e8f0", margin: "0 0 16px" },
  barRow: { display: "flex", alignItems: "center", gap: 10, marginBottom: 8 },
  barYear: { fontSize: 11, color: "#64748b", minWidth: 36 },
  barBg: { flex: 1, height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" },
  barFill: { height: "100%", background: "linear-gradient(90deg,#1d4ed8,#60a5fa)", borderRadius: 3 },
  barVal: { fontSize: 11, color: "#94a3b8", minWidth: 44, textAlign: "right" },
  dataNote: { fontSize: 11, color: "#334155", margin: "10px 0 0" },
  opGrid: { display: "flex", flexWrap: "wrap", gap: 6 },
  opPill: { fontSize: 11, padding: "3px 10px", borderRadius: 4, background: "rgba(96,165,250,0.07)", color: "#93c5fd", border: "1px solid rgba(96,165,250,0.12)" },
  // VALIDACIÓN
  evalWrap: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 },
  evalLeft: { background: "rgba(34,197,94,0.04)", border: "1px solid rgba(34,197,94,0.12)", borderRadius: 14, padding: "24px" },
  evalRight: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "24px" },
  evalTitle: { fontSize: 14, fontWeight: 700, color: "#e2e8f0", margin: "0 0 16px" },
  code: { fontFamily: "monospace", color: "#60a5fa", fontSize: 13 },
  evalRows: { display: "flex", flexDirection: "column", gap: 8 },
  evalRow: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" },
  evalWinner: { background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)" },
  evalRowLeft: { display: "flex", flexDirection: "column", gap: 2 },
  evalRowRight: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 },
  evalModel: { fontSize: 13, color: "#e2e8f0", fontWeight: 600 },
  evalNote2: { fontSize: 11, color: "#475569" },
  evalScore: { fontSize: 22, fontWeight: 800 },
  evalCost: { fontSize: 11, color: "#475569" },
  evalLink: { display: "inline-block", marginTop: 14, fontSize: 12, color: "#60a5fa", textDecoration: "none", opacity: 0.8 },
  graderRow: { display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 },
  graderN: { background: "rgba(96,165,250,0.1)", color: "#60a5fa", fontSize: 12, fontWeight: 700, width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  graderT: { display: "block", fontSize: 13, fontWeight: 600, color: "#e2e8f0", marginBottom: 2 },
  graderD: { display: "block", fontSize: 12, color: "#64748b" },
  // EVOLUCIÓN
  evoWrap: { marginTop: 28, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "22px 24px" },
  evoHeader: { fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1.5, margin: "0 0 18px" },
  evoRow: { display: "flex", flexDirection: "column", gap: 6, marginBottom: 18, paddingBottom: 18, borderBottom: "1px solid rgba(255,255,255,0.04)" },
  evoName: { fontFamily: "monospace", fontSize: 12, color: "#60a5fa" },
  evoTrack: { display: "flex", alignItems: "center", gap: 0 },
  evoStart: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2, flexShrink: 0, minWidth: 54 },
  evoEnd: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2, flexShrink: 0, minWidth: 54 },
  evoScore: { fontSize: 18, fontWeight: 800, lineHeight: 1 },
  evoSub: { fontSize: 10, color: "#475569" },
  evoConnector: { flex: 1, display: "flex", alignItems: "center" },
  evoLineLeft: { width: 16, height: 2, background: "rgba(255,255,255,0.08)", flexShrink: 0 },
  evoLineRight: { width: 16, height: 2, background: "rgba(34,197,94,0.3)", flexShrink: 0 },
  evoBox: { flex: 1, display: "flex", flexDirection: "column", gap: 3, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "8px 12px" },
  evoIssue: { fontSize: 11, fontWeight: 600, color: "#e2e8f0" },
  evoFix: { fontSize: 11, color: "#64748b" },
  evoAction: { fontSize: 11, color: "#22c55e", fontWeight: 500 },
  // SKILLS
  skillGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 },
  skillCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "18px" },
  skillCardHL: { background: "rgba(96,165,250,0.05)", border: "1px solid rgba(96,165,250,0.2)" },
  skillTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, gap: 8 },
  skillName: { fontFamily: "monospace", fontSize: 12, color: "#60a5fa" },
  skillBadge: { fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 10, border: "1px solid", whiteSpace: "nowrap" },
  skillDesc: { fontSize: 12, color: "#64748b", lineHeight: 1.6, margin: 0 },
  // ENJAMBRES
  swarmGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 },
  swarmCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "24px 20px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", gap: 10 },
  swarmBar: { position: "absolute", top: 0, left: 0, right: 0, height: 3 },
  swarmDom: { fontSize: 17, fontWeight: 700, color: "#f1f5f9", margin: "6px 0 0" },
  swarmFlujo: { fontSize: 12, color: "#60a5fa", fontFamily: "monospace", lineHeight: 1.5, margin: 0 },
  swarmPrueba: { fontSize: 13, color: "#94a3b8", lineHeight: 1.6, margin: 0, flex: 1 },
  swarmLink: { fontSize: 13, fontWeight: 600, textDecoration: "none", marginTop: 4 },
  // STACK
  stackGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 },
  stackCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "18px", overflow: "hidden", position: "relative" },
  stackBar: { position: "absolute", top: 0, left: 0, right: 0, height: 3 },
  stackCat: { fontSize: 12, fontWeight: 700, color: "#94a3b8", margin: "8px 0 12px", textTransform: "uppercase", letterSpacing: 1 },
  stackPills: { display: "flex", flexWrap: "wrap", gap: 6 },
  stackPill: { fontSize: 11, padding: "3px 9px", borderRadius: 4, background: "rgba(255,255,255,0.04)", color: "#94a3b8", border: "1px solid rgba(255,255,255,0.07)" },
  // CONTACTO
  contactRow: { display: "flex", gap: 16, justifyContent: "center" },
  contactCard: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "24px 40px", display: "flex", flexDirection: "column", gap: 8, alignItems: "center", textDecoration: "none" },
  contactLabel: { fontSize: 10, color: "#475569", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 },
  contactVal: { fontSize: 14, color: "#60a5fa", fontWeight: 500 },
  filosofiaBox: { maxWidth: 680, margin: "0 auto", textAlign: "center" },
  filosofiaTitulo: { fontSize: 20, fontWeight: 800, color: "#f1f5f9", margin: "0 0 12px" },
  filosofiaTexto: { fontSize: 15, color: "#64748b", lineHeight: 1.8, margin: 0, fontStyle: "italic" },
  footer: { textAlign: "center", padding: "24px", color: "#1e293b", fontSize: 12, borderTop: "1px solid rgba(255,255,255,0.04)" },
  // SIDE NAV
  sideDots: { position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 10, zIndex: 99 },
  sideDot: { background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center", justifyContent: "center" },
  sideDotInner: { display: "block", width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.2)", transition: "all 0.25s" },
  sideDotOn: { background: "#60a5fa", transform: "scale(1.4)" },
};
