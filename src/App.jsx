import { useState, useEffect } from "react";

const skills = [
  { category: "Contabilidad & Finanzas", icon: "💼", color: "#0C447C", bg: "#E6F1FB", items: ["PGC 2007", "Libro diario", "Asientos contables", "Balance & P&L", "IVA trimestral"] },
  { category: "Datos & Análisis", icon: "📊", color: "#0F6E56", bg: "#E1F5EE", items: ["SQL avanzado", "Power BI", "DAX", "Python · Pandas", "MySQL"] },
  { category: "IA & Automatización", icon: "🤖", color: "#533AB7", bg: "#EEEDFE", items: ["n8n workflows", "Claude AI", "Agente contable", "API integration", "MCP protocol"] },
];

const projects = [
  {
    title: "Agente Contable con IA",
    tag: "Automatización", tagColor: "#533AB7", tagBg: "#EEEDFE",
    desc: "Sistema autónomo que procesa facturas por email, genera asientos contables con Claude AI e inserta en MySQL sin intervención manual.",
    stack: ["n8n", "Claude AI", "MySQL", "Gmail"],
    metric: "239 asientos", metricLabel: "automatizados", status: "en construcción",
  },
  {
    title: "Dashboard Financiero Power BI",
    tag: "Análisis de datos", tagColor: "#0F6E56", tagBg: "#E1F5EE",
    desc: "Modelo de datos conectado a MySQL con Date Table, 6 medidas DAX y KPIs financieros en tiempo real para TechAcces 2024.",
    stack: ["Power BI", "DAX", "MySQL", "ODBC"],
    metric: "153.600 €", metricLabel: "ventas visualizadas", status: "activo",
  },
  {
    title: "Análisis SQL Libro Diario",
    tag: "Contabilidad", tagColor: "#185FA5", tagBg: "#E6F1FB",
    desc: "Análisis completo del libro diario 2024: GROUP BY, HAVING, subconsultas, ratios coste/ventas, vistas de verificación y sumas y saldos.",
    stack: ["MySQL", "SQL", "Workbench"],
    metric: "608 líneas", metricLabel: "analizadas", status: "activo",
  },
  {
    title: "Automatización con Python",
    tag: "Python", tagColor: "#854F0B", tagBg: "#FAEEDA",
    desc: "Análisis financiero con Pandas, exportación a Excel y conexión directa a MySQL para reporting automatizado.",
    stack: ["Python", "Pandas", "MySQL", "Excel"],
    metric: "Próximamente", metricLabel: "semana 3 roadmap", status: "próximo",
  },
];

const statusStyle = {
  "activo": { color: "#0F6E56", bg: "#E1F5EE", label: "Activo" },
  "en construcción": { color: "#854F0B", bg: "#FAEEDA", label: "En construcción" },
  "próximo": { color: "#5F5E5A", bg: "#F1EFE8", label: "Próximamente" },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #0A0F1E; color: #F0F4FF; font-family: 'DM Sans', 'Segoe UI', sans-serif; }
  .syne { font-family: 'Syne', sans-serif; font-weight: 800; letter-spacing: -0.03em; }
  .section-label { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #475569; font-weight: 500; margin-bottom: 0.5rem; display: block; }
  .card { background: #111827; border: 0.5px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; transition: border-color 0.2s, transform 0.2s; }
  .card:hover { border-color: rgba(255,255,255,0.2); transform: translateY(-2px); }
  .tag { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 500; }
  .stack-pill { background: rgba(255,255,255,0.06); border: 0.5px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 4px 12px; font-size: 12px; color: #94A3B8; }
  .skill-item { padding: 7px 0; color: #CBD5E1; font-size: 14px; border-bottom: 0.5px solid rgba(255,255,255,0.05); }
  .skill-item:last-child { border-bottom: none; }
  .metric-box { background: rgba(255,255,255,0.04); border-radius: 10px; padding: 12px 16px; margin-top: 1rem; }
  .cta-btn { background: #F0F4FF; color: #0A0F1E; border: none; border-radius: 8px; padding: 12px 28px; font-size: 15px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: opacity 0.2s, transform 0.2s; }
  .cta-btn:hover { opacity: 0.88; transform: scale(1.02); }
  .outline-btn { background: transparent; color: #F0F4FF; border: 0.5px solid rgba(255,255,255,0.3); border-radius: 8px; padding: 12px 28px; font-size: 15px; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: border-color 0.2s, transform 0.2s; }
  .outline-btn:hover { border-color: rgba(255,255,255,0.7); transform: scale(1.02); }
  nav a { color: #94A3B8; text-decoration: none; font-size: 14px; transition: color 0.2s; }
  nav a:hover { color: #F0F4FF; }
  .photo-avatar { width: 140px; height: 140px; border-radius: 50%; background: #1E293B; border: 2px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 56px; flex-shrink: 0; }
  .fade-in { animation: fadeUp 0.7s ease both; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
`;

export default function Portfolio() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0F1E", color: "#F0F4FF", fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
      <style>{css}</style>

      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 2rem", borderBottom: "0.5px solid rgba(255,255,255,0.06)", background: "rgba(10,15,30,0.97)", position: "sticky", top: 0, zIndex: 100 }}>
        <span className="syne" style={{ fontSize: "16px" }}>JLL</span>
        <div style={{ display: "flex", gap: "2rem" }}>
          <a href="#proyectos">Proyectos</a>
          <a href="#skills">Skills</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="fade-in" style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem 5rem", display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <span className="section-label">Contabilidad · Datos · IA</span>
          <h1 className="syne" style={{ fontSize: "clamp(2.4rem,5vw,3.6rem)", lineHeight: 1.05, margin: "0.5rem 0 1.25rem" }}>
            Juan Luis<br />León Rodríguez
          </h1>
          <p style={{ fontSize: "17px", color: "#94A3B8", lineHeight: 1.7, maxWidth: "480px", marginBottom: "2rem" }}>
            Convierto los datos financieros de tu empresa en decisiones automatizadas con IA. Perfil híbrido: contabilidad + análisis de datos + automatización.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button className="cta-btn" onClick={() => document.getElementById("proyectos").scrollIntoView({ behavior: "smooth" })}>Ver proyectos</button>
            <button className="outline-btn" onClick={() => document.getElementById("contacto").scrollIntoView({ behavior: "smooth" })}>Contactar</button>
          </div>
        </div>
        <div className="photo-avatar">👤</div>
      </section>

      {/* KPI BAR */}
      <section style={{ background: "#111827", borderTop: "0.5px solid rgba(255,255,255,0.06)", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1.75rem 2rem", display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "space-around" }}>
          {[
            { v: "153.600 €", l: "ventas analizadas" },
            { v: "608", l: "líneas en MySQL" },
            { v: "6 KPIs", l: "medidas DAX activas" },
            { v: "39,45%", l: "margen bruto calculado" },
            { v: "n8n + Claude", l: "stack de automatización" },
          ].map((k, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div className="syne" style={{ fontSize: "1.4rem" }}>{k.v}</div>
              <div style={{ fontSize: "12px", color: "#475569", marginTop: "2px" }}>{k.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem" }}>
        <span className="section-label">Portfolio</span>
        <h2 className="syne" style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", marginBottom: "2.5rem" }}>Proyectos reales</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.25rem" }}>
          {projects.map((p, i) => {
            const st = statusStyle[p.status];
            return (
              <div key={i} className="card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span className="tag" style={{ background: p.tagBg, color: p.tagColor }}>{p.tag}</span>
                  <span className="tag" style={{ background: st.bg, color: st.color }}>{st.label}</span>
                </div>
                <h3 className="syne" style={{ fontSize: "1.1rem", marginBottom: "0.75rem", lineHeight: 1.25 }}>{p.title}</h3>
                <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.65, marginBottom: "1rem" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {p.stack.map((s, j) => <span key={j} className="stack-pill">{s}</span>)}
                </div>
                <div className="metric-box">
                  <div className="syne" style={{ fontSize: "1.4rem" }}>{p.metric}</div>
                  <div style={{ fontSize: "12px", color: "#475569" }}>{p.metricLabel}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ background: "#111827", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem" }}>
          <span className="section-label">Competencias</span>
          <h2 className="syne" style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", marginBottom: "2.5rem" }}>Stack técnico</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.25rem" }}>
            {skills.map((s, i) => (
              <div key={i} className="card">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>{s.icon}</div>
                  <span style={{ fontWeight: 500, fontSize: "15px" }}>{s.category}</span>
                </div>
                {s.items.map((item, j) => <div key={j} className="skill-item">{item}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIACIÓN */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem" }}>
        <span className="section-label">Por qué este perfil</span>
        <h2 className="syne" style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", marginBottom: "2.5rem" }}>Lo que me diferencia</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.25rem" }}>
          {[
            { icon: "🏦", title: "Entiendo el negocio", desc: "No solo analizo datos — entiendo qué significa un asiento contable, cómo cuadra el balance y qué impacto tiene en la cuenta de resultados." },
            { icon: "🗄️", title: "Trabajo con datos reales", desc: "Este portfolio no son proyectos de curso. Es un ecosistema real: MySQL + Power BI + n8n + Claude funcionando juntos en producción." },
            { icon: "✨", title: "Automatizo con IA", desc: "Construyo agentes que conectan email, IA y bases de datos. Reduzco horas de trabajo manual a minutos con workflows inteligentes." },
          ].map((item, i) => (
            <div key={i} className="card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <span style={{ fontSize: "24px" }}>{item.icon}</span>
              <h3 style={{ fontWeight: 600, fontSize: "1rem" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{ background: "#111827", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "5rem 2rem", textAlign: "center" }}>
          <span className="section-label">Contacto</span>
          <h2 className="syne" style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", marginBottom: "1rem" }}>¿Hablamos?</h2>
          <p style={{ color: "#94A3B8", fontSize: "16px", lineHeight: 1.7, marginBottom: "2rem" }}>
            Disponible para posiciones de técnico contable, analista de datos o roles de automatización con IA en la zona de Tarragona y remotamente.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="cta-btn">✉ Enviar email</button>
            <button className="outline-btn">in LinkedIn</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "1.5rem 2rem", borderTop: "0.5px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "#334155" }}>Juan Luis León Rodríguez · Tarragona, 2026 · Construido con React</p>
      </footer>
    </div>
  );
}
