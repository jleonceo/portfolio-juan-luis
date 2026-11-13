import { useState, useEffect } from "react";
import foto from "./assets/foto-juanluis.jpg";
import imgAlquiler from "./assets/alquiler_cuadro_de_mando.png";
import imgVentas from "./assets/ventas_prevision.png";
import imgRfm from "./assets/rfm_segmentos.png";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["inicio","enjambres","validacion","proyecto","datos","trayectoria","stack","contacto"];
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
          <button onClick={() => go("validacion")} style={s.navNew}>
            <span style={s.navNewDot} />
            23 skills con su examen ejecutado: así las valido →
          </button>
          <div style={s.navLinks}>
            {[["enjambres","Enjambres"],["validacion","Validación"],["proyecto","El proyecto"],["datos","Datos"],["trayectoria","Trayectoria"],["stack","Stack"],["contacto","Contacto"]].map(([id,label]) => (
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
            <span style={s.evalBadgeNum}>23</span>
            <span style={s.evalBadgeText}>skills con su examen ejecutado y el resultado guardado</span>
          </div>
        </div>
        <div style={s.heroRight}>
          <p style={s.eyebrow}>Controller financiero y analista de datos · Contabilidad · Business Intelligence · Sistemas de IA para la empresa</p>
          <h1 style={s.nombre}>Juan Luis<br/>León Rodríguez</h1>
          <p style={s.tagline}>
            Construyo mis propias herramientas de IA<br/>
            <strong style={{ color: "#e2e8f0" }}>y no las uso hasta haberlas medido.</strong>
          </p>
          <p style={s.bio}>
            Más de 25 años entre contabilidad, formación y dirección de empresa. Desde 2026 construyo un
            sistema de IA para una empresa completa: 55 skills repartidas en seis enjambres, sobre MySQL,
            Power BI, Python, n8n y Claude. Va del documento al cuadro de mando, y ninguna cifra sale sin
            cuadrar al céntimo con la base de datos.
          </p>
          <div style={s.heroStats}>
            {[
              { n: "55", l: "skills" },
              { n: "6", l: "enjambres y un enrutador" },
              { n: "23", l: "skills con examen ejecutado" },
              { n: "0,00 €", l: "de descuadre en 22,0 M€" },
            ].map(st => (
              <div key={st.l} style={s.heroStat}>
                <span style={s.heroStatN}>{st.n}</span>
                <span style={s.heroStatL}>{st.l}</span>
              </div>
            ))}
          </div>
          <div style={s.heroBtns}>
            <button onClick={() => go("validacion")} style={s.btnPrimary}>Cómo lo valido</button>
            <button onClick={() => go("contacto")} style={s.btnOutline}>Hablemos</button>
          </div>
        </div>
      </section>

      {/* ENJAMBRES */}
      <section id="enjambres" style={s.sectionLight}>
        <div style={s.sectionInner}>
          <p style={s.label}>SISTEMAS MULTI-AGENTE</p>
          <h2 style={s.h2}>55 skills: seis enjambres y lo que les da servicio</h2>
          <p style={s.sectionSub}>
            Una skill es un conjunto de instrucciones para una tarea concreta. Un enjambre es un grupo de
            skills que se reparten un trabajo en cadena, cada una con su comprobación. Un enrutador decide
            qué enjambre entra en cada tarea, y cuatro agentes revisan el trabajo de los demás. Seis de las
            55 son de terceros o están adaptadas de ellos: las de Word, PDF y PowerPoint, que son de
            Anthropic, y tres de método.
          </p>
          {[
            ["Los seis enjambres de dominio", ["Contabilidad","Análisis de datos","Marketing y audiencias","Tesorería","Programador","Recursos humanos"]],
            ["Lo que les da servicio", ["Orquestador maestro","Control interno","Servicio","Utilidad","Método transversal"]],
          ].map(([grupo, doms]) => (
          <div key={grupo}>
          <h3 style={s.swarmGroup}>{grupo}</h3>
          <div style={s.swarmGrid}>
            {[
              { dom: "Contabilidad", n: 9, flujo: "extractor → generador → verificador → escribano, y un punteador para la conciliación", prueba: "Cinco agentes con permisos separados: el que lee la factura no propone el asiento y el que lo verifica no puede escribir. Una persona aprueba antes del libro diario. El repositorio público muestra la versión anterior, de cuatro", repo: "https://github.com/jleonceo/accounting-agent-swarm", color: "#22c55e" },
              { dom: "Marketing y audiencias", n: 11, flujo: "producir (copy · SEO · pricing) + analizar (discovery → exploración → previsión)", prueba: "Probado en privado: la exploración acierta 5 de 5 casos con su respuesta de referencia. El repositorio público no incluye esas pruebas", repo: "https://github.com/jleonceo/audience-analyst-swarm", color: "#a855f7" },
              { dom: "Utilidad", n: 8, flujo: "documentos (Word · PDF · PPTX) · análisis de errores · datos sintéticos · tutor de estudio", prueba: "Genera entregables y datos de prueba, y clasifica los fallos de un sistema con IA revisando unas cien ejecuciones", repo: null, color: "#f59e0b" },
              { dom: "Análisis de datos", n: 6, flujo: "pregunta → exploración → modelo → comunicación", prueba: "El mismo método sirve para cualquier negocio. Más abajo, en Datos, están los casos hechos con él", repo: null, color: "#3b82f6" },
              { dom: "Tesorería", n: 4, flujo: "control de gestión · ratios · aging · forecast de caja", prueba: "El cálculo lo hace código, sin IA. La previsión de caja se contrasta contra el pasado, mes a mes, y va integrada en Power BI", repo: "https://github.com/jleonceo/tesoreria-forecast-ia", color: "#14b8a6" },
              { dom: "Control interno", n: 1, flujo: "Benford · duplicados · fraccionamiento · tercero fantasma · coherencia de fechas", prueba: "Ocho pruebas de auditoría hechas con código. Cada una lleva un caso normal que no debe marcar. Propone candidatos y decide el auditor", repo: "https://github.com/jleonceo/control-interno-fraude-ia", color: "#e11d48" },
              { dom: "Recursos humanos", n: 2, flujo: "orquestador · experto laboral", prueba: "El criterio laboral va aparte del contable: indemnización, cotización y convenio los decide RRHH, y el asiento, contabilidad", repo: null, color: "#f97316" },
              { dom: "Servicio", n: 5, flujo: "automatización n8n · datos personales · seguridad de IA · publicación de repos · consejo de decisión", prueba: "RGPD/LOPDGDD · OWASP LLM Top 10 · NIST AI RMF · AI Act: la gobernanza del sistema", repo: null, color: "#ec4899" },
              { dom: "Programador", n: 6, flujo: "spec → verificador → constructor → verificador · detector de control negativo", prueba: "Primero se escribe la prueba que reproduce el fallo y después el código", repo: "https://github.com/jleonceo/detector-control-negativo", color: "#6366f1" },
              { dom: "Orquestador maestro", n: 1, flujo: "enrutador", prueba: "Lee un registro de todos los agentes y manda cada tarea al enjambre y a la skill que toca", repo: "https://github.com/jleonceo/orquestacion-enjambres-ia", color: "#cbd5e1" },
              { dom: "Método transversal", n: 2, flujo: "puerta de salida de textos · adherencia a las reglas", prueba: "Todo texto publicado pasa por una puerta que mide su prosa contra un corpus humano, y otra skill cuenta cuántas reglas del proyecto se cumplen de verdad", repo: "https://github.com/jleonceo/adherencia-reglas", color: "#94a3b8" },
            ].filter(sw => doms.includes(sw.dom)).map(sw => (
              <div key={sw.dom} style={s.swarmCard}>
                <div style={{ ...s.swarmBar, background: sw.color }} />
                <div style={s.swarmHead}>
                  <h3 style={s.swarmDom}>{sw.dom}</h3>
                  <span style={s.swarmCount}>{sw.n} {sw.n === 1 ? "skill" : "skills"}</span>
                </div>
                {grupo.startsWith("Los seis") && <p style={s.swarmFlujo}>{sw.flujo}</p>}
                <p style={s.swarmPrueba}>{sw.prueba}</p>
                {sw.repo && (
                  <a href={sw.repo} target="_blank" rel="noreferrer" style={{ ...s.swarmLink, color: sw.color }}>Ver en GitHub →</a>
                )}
              </div>
            ))}
          </div>
          </div>
          ))}
        </div>
      </section>

      {/* VALIDACIÓN */}
      <section id="validacion" style={s.sectionDark}>
        <div style={s.sectionInner}>
          <p style={s.label}>VALIDACIÓN</p>
          <h2 style={s.h2}>Construyo y valido mis herramientas de IA antes de usarlas</h2>
          <p style={s.sectionSub}>
            Las cifras las calcula el código, y la IA decide. Cada skill importante tiene un examen
            automático: una batería de casos con la respuesta correcta fijada de antemano. Ningún cambio
            se acepta sin repetir el examen y comprobar que lo que funcionaba sigue funcionando. Además,
            cuatro agentes revisan el trabajo de los demás, y un programa sin IA recomprueba el sistema
            entero.
          </p>

          <div style={s.evalWrap}>
            <div style={s.evalLeft}>
              <h3 style={s.evalTitle}>Exámenes del enjambre contable: 110 casos</h3>
              <div style={s.evalRows}>
                {[
                  { eval: "contable-experto", score: "48/50", detail: "12 categorías del PGC", note: "Sacó 50 de 50 en junio. Con el examen corregido en julio, esas respuestas acertarían 48" },
                  { eval: "datos-financieros-sql", score: "30/30", detail: "6 categorías SQL", note: "KPIs, agregaciones, JOINs, trimestres" },
                  { eval: "datos-financieros-dax", score: "30/30", detail: "6 categorías DAX", note: "Cada medida DAX se comprueba con su consulta SQL equivalente" },
                ].map(r => (
                  <div key={r.eval} style={{ ...s.evalRow, ...s.evalWinner }}>
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
              <p style={s.evalPlus}>En todo el sistema, 23 skills tienen su examen ejecutado y el resultado guardado, y 30 más, cobertura parcial (registro revisado el 02/10/2026).</p>
              <a href="https://github.com/jleonceo/llm-eval-contable" target="_blank" rel="noreferrer" style={s.evalLink}>
                Ver cómo se evalúa una skill en GitHub →
              </a>
              <a href="https://github.com/jleonceo/verificacion-determinista-ia" target="_blank" rel="noreferrer" style={s.evalLink}>
                Ver la verificación determinista en GitHub →
              </a>
            </div>
            <div style={s.evalRight}>
              <h3 style={s.evalTitle}>Cómo corrige el examen contable</h3>
              {[
                { n: "1", t: "Cuadre debe = haber", d: "El asiento tiene que cuadrar al céntimo exacto" },
                { n: "2", t: "Prefijos PGC válidos", d: "Todas las cuentas deben pertenecer al PGC español" },
                { n: "3", t: "Importes exactos", d: "Los importes deben coincidir con el caso de prueba" },
                { n: "4", t: "Tipo de operación", d: "El tipo de operación, el IVA y el IRPF están bien identificados" },
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
            <p style={s.evoHeader}>El camino hasta aprobar: cada fallo fue una mejora</p>
            {[
              {
                name: "contable-experto",
                v1: "47/50", v1sub: "94%", v1Color: "#f59e0b",
                issue: "2 patrones no cubiertos en la skill",
                fix: "Periodificación pasiva · traspaso resultado a reservas",
                action: "Dos ejemplos añadidos a la skill",
                fin: "48/50", finSub: "con el examen corregido",
              },
              {
                name: "datos-financieros-dax",
                v1: "3/30", v1sub: "10%", v1Color: "#ef4444",
                issue: "Fallo en el programa que lanza el examen",
                fix: "Claude añadía backticks al SQL · la conexión MySQL se corrompía en cascada",
                action: "Rediseño: conexión fresca por caso · backticks eliminados",
              },
              {
                name: "datos-financieros-sql",
                v1: "29/30", v1sub: "97%", v1Color: "#f59e0b",
                issue: "El caso 20 del examen estaba mal",
                fix: "trimestre=1 ≠ QUARTER(fecha), descubierto analizando el fallo",
                action: "Caso corregido y aviso añadido a la skill",
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
                    <span style={{ ...s.evoScore, color: "#22c55e" }}>{e.fin || "100%"}</span>
                    <span style={s.evoSub}>{e.finSub || "el examen entero"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EL PROYECTO */}
      <section id="proyecto" style={s.sectionLight}>
        <div style={s.sectionInner}>
          <p style={s.label}>EL PROYECTO</p>
          <h2 style={s.h2}>TechAcces: un sistema contable con IA sobre una empresa simulada</h2>
          <p style={s.sectionSub}>
            Un comercio electrónico de accesorios tecnológicos con datos simulados de enero de 2023 a
            julio de 2026. MySQL, Power BI, Python, n8n y Claude trabajan conectados de la factura al
            cuadro de mando, con verificación en cada paso. Las cifras de esta sección se comprobaron
            contra MySQL el 24/09/2026.
          </p>

          {/* Arquitectura */}
          <div style={s.arqRow}>
            {[
              { title: "MySQL", sub: "Motor de datos", desc: "PGC español a 8 dígitos · 19 tablas + 7 vistas de verificación · claves foráneas activas · 15 tipos de operación" },
              { arrow: true },
              { title: "Power BI", sub: "Modelo y medidas", desc: "77 medidas DAX · modelo dimensional · KPIs verificados contra SQL al céntimo" },
              { arrow: true },
              { title: "n8n", sub: "Orquestación", desc: "Entrada de facturas de proveedor por correo, diseñada en 19 fases y hoy en fase piloto" },
              { arrow: true },
              { title: "Claude", sub: "Agentes IA", desc: "55 skills · 62 documentos de consulta · servidor propio de herramientas contables (MCP), sin permiso para borrar · comprobación final con código" },
            ].map((node, i) =>
              node.arrow ? (
                <div key={i} style={s.arqArrow}>→</div>
              ) : (
                <div key={i} style={s.arqNode}>
                  <span style={s.arqTitle}>{node.title}</span>
                  <span style={s.arqSub}>{node.sub}</span>
                  <span style={s.arqDesc}>{node.desc}</span>
                </div>
              )
            )}
          </div>

          {/* KPIs: verificados en vivo en MySQL */}
          <div style={s.kpiGrid}>
            {[
              { val: "22,0 M€", label: "Volumen contable total", sub: "por lado (debe = haber) · 2023 a julio de 2026" },
              { val: "6,26 M€", label: "Ventas acumuladas", sub: "datos simulados, 2023 a julio de 2026" },
              { val: "6.399", label: "Asientos contables", sub: "17.399 líneas contables" },
              { val: "0,00 €", label: "Descuadre global", sub: "debe = haber al céntimo sobre 22,0 M€" },
            ].map(k => (
              <div key={k.label} style={s.kpiCard}>
                <span style={s.kpiVal}>{k.val}</span>
                <span style={s.kpiLabel}>{k.label}</span>
                <span style={s.kpiSub}>{k.sub}</span>
              </div>
            ))}
          </div>

          <p style={s.dataNote2}>
            Los documentos de prueba también los genero yo: facturas, nóminas y extractos en PDF sacados de
            MySQL, y ficheros CSV con errores puestos a propósito. Así el examen y sus datos nacen de la
            misma fuente.
          </p>
        </div>
      </section>

      {/* DATOS */}
      <section id="datos" style={s.sectionDark}>
        <div style={s.sectionInner}>
          <p style={s.label}>ANÁLISIS DE DATOS</p>
          <h2 style={s.h2}>Proyectos de datos, de la pregunta a la decisión</h2>
          <p style={s.sectionSub}>
            Antes de automatizar con IA hay que dominar el análisis. Cada proyecto parte de una pregunta de
            negocio, está publicado con su código y da una cifra que se puede rehacer.
          </p>
          <div style={s.projGrid}>
            {[
              { t: "Previsión de ventas a 8 días", img: imgVentas, alt: "Venta real, previsión del modelo y regla de la semana anterior en dos tiendas", d: "Un modelo por producto y tienda, que se ejecuta cada día. En el mes reservado para la prueba se equivoca en 7,45 unidades al prever el día siguiente, frente a 10,43 de repetir la semana anterior.", repo: "https://github.com/jleonceo/store-sales-forecasting-ml" },
              { t: "Dónde comprar pisos para alquiler turístico", img: imgAlquiler, alt: "Cuadro de mando con la recomendación de barrios y sus cifras", d: "Con datos públicos de Airbnb y del Ayuntamiento de Madrid: 256 anuncios en tres barrios, con una rentabilidad bruta del 12,1 % en mediana. Incluye cuadro de mando.", repo: "https://github.com/jleonceo/alquiler-turistico-madrid" },
              { t: "Segmentación de clientes RFM", img: imgRfm, alt: "Clientes por segmento según recencia, frecuencia e importe", d: "La cartera dividida en cinco grupos, con una acción comercial para cada uno. Los 246 mejores clientes son el 26 % de la cartera y el 66,5 % de las ventas.", repo: "https://github.com/jleonceo/RFM-Customer-Analytics" },
              { t: "Reposición de inventario", d: "Decide cada día si hay que pedir al proveedor, con la previsión de demanda y el plazo real de entrega. En el semestre de prueba, con datos sintéticos, el coste baja de 40.707 € a 9.340 €.", repo: "https://github.com/jleonceo/reposicion-inventario-prevision-ml" },
              { t: "A qué contacto llamar primero", d: "Un modelo ordena la lista del equipo comercial. Llamando solo al 20 % mejor puntuado se llega a la mitad de los compradores.", repo: "https://github.com/jleonceo/lead-scoring-ml" },
              { t: "Cuenta de resultados desde el libro diario", d: "El resultado y el movimiento del banco de un ejercicio con Python y MySQL. El beneficio de 2024, 592.245,36 €, coincide al céntimo con el asiento de cierre.", repo: "https://github.com/jleonceo/analisis-contable" },
            ].map(pr => (
              <div key={pr.t} style={s.projCard}>
                {pr.img && <img src={pr.img} alt={pr.alt} style={s.projImg} />}
                <h3 style={s.projTitle}>{pr.t}</h3>
                <p style={s.swarmPrueba}>{pr.d}</p>
                <a href={pr.repo} target="_blank" rel="noreferrer" style={{ ...s.swarmLink, color: "#60a5fa" }}>Ver en GitHub →</a>
              </div>
            ))}
          </div>

          {/* Proyecto destacado */}
          <div style={s.destacado}>
            <div style={s.destacadoBar} />
            <div>
              <p style={s.destacadoLabel}>Proyecto destacado</p>
              <h3 style={s.destacadoTitle}>De datos en bruto a decisiones: analítica de principio a fin</h3>
              <p style={s.destacadoDesc}>
                Un caso completo con datos sintéticos: de 20.827 filas en bruto a 19.984 ventas válidas,
                y de ahí a la exploración, los atípicos, la anonimización, el contraste estadístico y el
                cuadro de mando. Las tres preguntas del negocio acaban en lo mismo: con esos datos no se
                puede concluir lo que daban por hecho, y la web lo demuestra.
              </p>
              <p style={s.destacadoLinks}>
                <a href="https://de-datos-en-bruto-a-decisiones.vercel.app" target="_blank" rel="noreferrer" style={s.evalLink}>Ver la web del caso →</a>
                <a href="https://github.com/jleonceo/de-datos-en-bruto-a-decisiones" target="_blank" rel="noreferrer" style={s.evalLink}>Ver el repositorio →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAYECTORIA */}
      <section id="trayectoria" style={s.sectionLight}>
        <div style={s.sectionInner}>
          <p style={s.label}>TRAYECTORIA Y FORMACIÓN</p>
          <h2 style={s.h2}>Más de 25 años entre contabilidad, formación y dirección de empresa</h2>
          <p style={s.sectionSub}>
            Fui formador técnico y contable durante doce años y dirigí mi propio negocio durante trece.
            Después llevé las operaciones y el control de gestión de una empresa de hostelería. Sobre el
            método de este sistema di una charla en Codemarketers el 26 de junio de 2026.
          </p>
          <div style={s.grid2}>
            <div style={s.dataCard}>
              <h3 style={s.dataTitle}>Trayectoria</h3>
              {[
                ["2024 – 2026", "Responsable de operaciones y control de gestión, Nou Mestres 2022 SL", "Reporting operativo y control de desviaciones. Coste de personal un 21 % más bajo con la operativa completa."],
                ["2011 – 2024", "Propietario y gerente, León Beach Club", "Trece años de dirección: equipo, proveedores, bancos y control económico. La facturación creció un 90 % entre 2012 y 2023."],
                ["1999 – 2011", "Formador técnico y contable", "Más de 10.000 horas de formación en contabilidad e informática para empresas y administración pública."],
              ].map(([f, t, d]) => (
                <div key={f} style={s.trayRow}>
                  <span style={s.trayFecha}>{f}</span>
                  <div>
                    <span style={s.graderT}>{t}</span>
                    <span style={s.graderD}>{d}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={s.dataCard}>
              <h3 style={s.dataTitle}>Formación</h3>
              {[
                ["2026", "Máster en IA Aplicada y Optimización de Procesos Productivos", "Visual Business School"],
                ["2026", "Data Analytics Mastery y Python Data Science Mastery, IA Edition", "Data Science for Business (DS4B). El segundo, en curso"],
                ["2022 – 2023", "Data Analytics Mastery y Python Data Science Mastery", "Data Science for Business (DS4B)"],
                ["Desde 2022", "Grado en Ciencia de Datos", "Universitat Carlemany. En curso"],
                ["2021 – 2022", "Certificación Data Scientist, Big Data y Business IT", "Índice IFC, ENEB e I3"],
                ["2008", "Certificación MCAS de Microsoft", "Access, Excel, Word y PowerPoint"],
                ["1997 – 1999", "Diplomatura en Relaciones Laborales y especialización contable", "URV, CEF (450 horas) e INTECT (800 horas)"],
              ].map(([f, t, d]) => (
                <div key={f + t} style={s.trayRow}>
                  <span style={s.trayFecha}>{f}</span>
                  <div>
                    <span style={s.graderT}>{t}</span>
                    <span style={s.graderD}>{d}</span>
                  </div>
                </div>
              ))}
              <a href="https://jleonceo.github.io/cv/" target="_blank" rel="noreferrer" style={s.evalLink}>Ver el currículum completo →</a>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" style={s.sectionDark}>
        <div style={s.sectionInner}>
          <p style={s.label}>STACK</p>
          <h2 style={s.h2}>Tecnologías que uso</h2>
          <div style={s.stackGrid}>
            {[
              { cat: "Base de datos", color: "#3b82f6", items: ["MySQL 9.7","SQL avanzado","Vistas","FK","MCP"] },
              { cat: "Business Intelligence", color: "#f59e0b", items: ["Power BI Desktop","DAX","Modelo dimensional","Temas JSON"] },
              { cat: "IA & LLMs", color: "#a855f7", items: ["Claude y Claude Code","Prompt engineering","Evals","Skills","RAG","MCP","Human in the loop"] },
              { cat: "Automatización", color: "#22c55e", items: ["n8n","Workflows","Gmail API","HTTP nodes","Power Automate"] },
              { cat: "Programación", color: "#6366f1", items: ["Python","Pandas","scikit-learn","React","Astro","Vite","Git","Vercel"] },
              { cat: "Metodología", color: "#64748b", items: ["Exámenes automáticos","Simulaciones a ciegas","Cálculo con código","RGPD","Seguridad de IA"] },
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
      <section id="contacto" style={s.sectionLight}>
        <div style={{ ...s.sectionInner, textAlign: "center" }}>
          <p style={s.label}>CONTACTO</p>
          <h2 style={s.h2}>Hablemos</h2>
          <p style={{ ...s.sectionSub, maxWidth: 500, margin: "0 auto 36px" }}>
            Busco puestos de control de gestión, análisis de datos y BI o automatización con IA.
            Vivo en Reus, Tarragona.
          </p>
          <div style={s.contactRow}>
            {[
              { label: "Email", val: "jleonceo@gmail.com", href: "mailto:jleonceo@gmail.com" },
              { label: "LinkedIn", val: "jlleonrodriguez", href: "https://linkedin.com/in/jlleonrodriguez" },
              { label: "GitHub", val: "@jleonceo", href: "https://github.com/jleonceo" },
              { label: "CV", val: "jleonceo.github.io/cv", href: "https://jleonceo.github.io/cv/" },
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
        {[["inicio","Inicio"],["enjambres","Enjambres"],["validacion","Validación"],["proyecto","Proyecto"],["datos","Datos"],["trayectoria","Trayectoria"],["stack","Stack"],["contacto","Contacto"]].map(([id, label]) => (
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
  navNew: { display: "flex", alignItems: "center", gap: 8, color: "#4ade80", background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: 13, fontWeight: 600, fontFamily: "inherit" },
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
  evalPlus: { fontSize: 12, color: "#94a3b8", margin: "14px 0 0", lineHeight: 1.6 },
  evalLink: { display: "inline-block", marginTop: 10, fontSize: 12, color: "#60a5fa", textDecoration: "none", opacity: 0.8 },
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
  skillMore: { fontSize: 13, color: "#475569", margin: "18px 0 0", textAlign: "center", fontStyle: "italic" },
  // ENJAMBRES
  swarmGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 },
  swarmCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "24px 20px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", gap: 10 },
  swarmBar: { position: "absolute", top: 0, left: 0, right: 0, height: 3 },
  swarmHead: { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, marginTop: 6 },
  swarmDom: { fontSize: 17, fontWeight: 700, color: "#f1f5f9", margin: 0 },
  swarmCount: { fontSize: 11, fontWeight: 700, color: "#64748b", whiteSpace: "nowrap" },
  swarmFlujo: { fontSize: 12, color: "#60a5fa", fontFamily: "monospace", lineHeight: 1.5, margin: 0 },
  swarmPrueba: { fontSize: 13, color: "#94a3b8", lineHeight: 1.6, margin: 0, flex: 1 },
  swarmLink: { fontSize: 13, fontWeight: 600, textDecoration: "none", marginTop: 4 },
  swarmGroup: { fontSize: 13, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1.5, margin: "28px 0 14px" },
  // DATOS
  projGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 },
  projCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "18px", display: "flex", flexDirection: "column", gap: 10 },
  projImg: { width: "100%", height: 150, objectFit: "cover", objectPosition: "top left", borderRadius: 8, background: "#fff" },
  projTitle: { fontSize: 16, fontWeight: 700, color: "#f1f5f9", margin: 0 },
  dataNote2: { fontSize: 13, color: "#64748b", lineHeight: 1.7, margin: "4px 0 0" },
  // TRAYECTORIA
  trayRow: { display: "grid", gridTemplateColumns: "92px 1fr", gap: 12, marginBottom: 14, textAlign: "left" },
  trayFecha: { fontSize: 12, color: "#60a5fa", fontWeight: 700, paddingTop: 1 },
  // DESTACADO
  destacado: { display: "flex", gap: 0, marginTop: 28, background: "rgba(96,165,250,0.05)", border: "1px solid rgba(96,165,250,0.18)", borderRadius: 14, overflow: "hidden" },
  destacadoBar: { width: 4, background: "#3b82f6", flexShrink: 0 },
  destacadoLabel: { fontSize: 10, color: "#60a5fa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, margin: "22px 0 0", padding: "0 24px" },
  destacadoTitle: { fontSize: 18, fontWeight: 800, color: "#f1f5f9", margin: "6px 0 8px", padding: "0 24px" },
  destacadoDesc: { fontSize: 13, color: "#94a3b8", lineHeight: 1.7, margin: "0 0 4px", padding: "0 24px" },
  destacadoLinks: { display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center", margin: "0 0 22px", padding: "0 24px" },
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
  footer: { textAlign: "center", padding: "24px", color: "#1e293b", fontSize: 12, borderTop: "1px solid rgba(255,255,255,0.04)" },
  // SIDE NAV
  sideDots: { position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 10, zIndex: 99 },
  sideDot: { background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center", justifyContent: "center" },
  sideDotInner: { display: "block", width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.2)", transition: "all 0.25s" },
  sideDotOn: { background: "#60a5fa", transform: "scale(1.4)" },
};
