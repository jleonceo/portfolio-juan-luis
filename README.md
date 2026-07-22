# Portfolio de Juan Luis León Rodríguez

**Data Analyst · Business Intelligence · IA Aplicada al Negocio**

Sitio en vivo: **[juanluisleon.vercel.app](https://juanluisleon.vercel.app)**

[Español](#español) · [English](#english)

---

## Español

Código de mi portfolio web. La página explica el sistema que construyo.

Son **51 AI Skills** repartidas en seis enjambres de dominio: contabilidad, análisis, marketing, tesorería, programación y recursos humanos. Un router decide a cuál va cada encargo. Debajo, MySQL, Power BI, Python, n8n y Claude.

Tres palabras que conviene fijar antes de seguir. Una **skill** es un fichero de texto que le da criterio a un modelo: qué reglas aplicar, qué cuentas usar, cuándo frenar y pedir revisión. Un **enjambre** es un grupo de skills que se reparten un dominio, cada una con su parcela, de forma que la que juzga no sea la que produjo. Y el **router** es la pieza que lee la petición y decide a qué enjambre va, para que el sistema no se rompa al crecer.

Un ejemplo de lo que hace, de principio a fin: entra el PDF de una factura de proveedor, una skill extrae los datos y dice «ilegible» antes que inventarse un hueco, otra escribe el asiento con las cuentas reales de la empresa, y una tercera comprueba el cuadre y decide si se contabiliza o se frena. El asiento aprobado cae en una tabla de borradores y lo inserta una persona.

El método consiste en construir esas herramientas y **validarlas antes de usarlas**. Cada skill pasa por evaluaciones automáticas antes de producción, y ningún cambio entra sin una simulación ciega que compruebe que lo que ya funcionaba sigue funcionando.

### El sistema en repos abiertos

El portafolio tiene dos mitades. Esta es la de **estructurar la IA**: darle encuadre, controles y verificación. Va ordenada de lo básico a lo avanzado (N0 a N3):

- [tu-primer-asistente-ia-web](https://github.com/jleonceo/tu-primer-asistente-ia-web): qué es un asistente de IA y cómo se le instruye, sin tecnicismos.
- [llm-eval-contable](https://github.com/jleonceo/llm-eval-contable): evaluar una skill como se examina a un alumno, con las seis vueltas del examen y lo que enseñó cada una.
- [accounting-agent-swarm](https://github.com/jleonceo/accounting-agent-swarm): un enjambre de cuatro agentes contables de principio a fin, con sus caídas explicadas.
- [orquestacion-enjambres-ia](https://github.com/jleonceo/orquestacion-enjambres-ia): el enrutado multi-agente, a qué agente va cada petición sin romper al crecer.
- [gobernanza-skills-analiticas](https://github.com/jleonceo/gobernanza-skills-analiticas): las cinco reglas para gobernar skills, cada una con su cicatriz real.
- [verificacion-determinista-ia](https://github.com/jleonceo/verificacion-determinista-ia): comprobar la coherencia del estado por pura aritmética, sin IA.
- [agent-memory-governance](https://github.com/jleonceo/agent-memory-governance): que la memoria del agente no se convierta en un vertedero.
- [claude-code-context-management](https://github.com/jleonceo/claude-code-context-management): mantener pequeños y al día los ficheros de contexto, sin saturar la ventana.
- [tesoreria-forecast-ia](https://github.com/jleonceo/tesoreria-forecast-ia): previsión de caja con backtesting, ratios y aging.
- [control-interno-fraude-ia](https://github.com/jleonceo/control-interno-fraude-ia): detección de fraude contable con aritmética, dentro de un marco de control interno.
- [audience-analyst-swarm](https://github.com/jleonceo/audience-analyst-swarm): el mismo método portado a otro dominio, analítica de audiencias reutilizando cerca del 70% del enjambre contable.
- [pii-output-gate](https://github.com/jleonceo/pii-output-gate): una puerta de salida que no deja publicar nada con datos personales, sin depender de que el modelo se porte bien.
- [guardianes-verificados-ia](https://github.com/jleonceo/guardianes-verificados-ia): cómo se comprueba que un guardián protege de verdad, rompiéndolo a propósito y exigiendo que salte.
- [gobernanza-agentes-verificada](https://github.com/jleonceo/gobernanza-agentes-verificada): las reglas de un agente, cableadas a algo que las imponga en vez de escritas en un documento.

### La otra mitad del portafolio: el oficio de los datos

Antes de estructurar la IA hay que saber leer los datos. Esta serie es la del oficio de origen, y
varios de estos casos son los que después se automatizaron:

- [analisis-contable](https://github.com/jleonceo/analisis-contable): leer un ejercicio contable entero desde la base de datos, del margen al flujo de caja.
- [RFM-Customer-Analytics](https://github.com/jleonceo/RFM-Customer-Analytics): qué clientes se están yendo sin avisar, y por qué el total anual no lo dice.
- [lead-scoring-ml](https://github.com/jleonceo/lead-scoring-ml): a qué contacto llama primero el equipo comercial, con el modelo verificado por dos vías.
- [accident-intelligent-agent](https://github.com/jleonceo/accident-intelligent-agent): un primer agente sobre datos públicos de siniestralidad, con sus fallos documentados.

### Stack

React · Vite · desplegado en Vercel.

### Ejecutar en local

```bash
npm install
npm run dev
```

### Contacto

jleonceo@gmail.com · [LinkedIn](https://www.linkedin.com/in/jlleonrodriguez/) · [GitHub](https://github.com/jleonceo)

---

## English

Source of my portfolio site. The page explains the system I build.

**51 AI Skills**, grouped into six domain swarms: accounting, analytics, marketing, treasury, programming and HR. A router decides which one takes each request. Underneath sit MySQL, Power BI, Python, n8n and Claude.

Three words worth pinning down first. A **skill** is a text file that gives a model its criteria: which rules to apply, which accounts to use, when to stop and ask for review. A **swarm** is a group of skills sharing a domain, each with its own patch, so that whoever judges is never whoever produced. The **router** reads the request and decides which swarm takes it, so the system does not break as it grows.

An example of what it does, end to end: a supplier invoice PDF comes in, one skill extracts the data and says «unreadable» rather than inventing a missing field, another writes the journal entry with the company's real accounts, and a third checks that it balances and decides whether to post it or hold it. Approved entries land in a drafts table and a person is the one who posts them.

The method is building those tools and **validating them before use**. Every skill faces automated evaluation before production. No change ships without a blind simulation checking that what already worked still works.

### The system in open repos

The portfolio has two halves. This one is about **structuring AI**: giving it framing, controls and verification. Ordered from basics to advanced (N0 to N3):

- [tu-primer-asistente-ia-web](https://github.com/jleonceo/tu-primer-asistente-ia-web): what an AI assistant is and how you instruct it, for beginners.
- [llm-eval-contable](https://github.com/jleonceo/llm-eval-contable): evaluating a skill the way you examine a student, with the six exam rounds and what each one taught.
- [accounting-agent-swarm](https://github.com/jleonceo/accounting-agent-swarm): a four-agent accounting swarm end to end, with its drops explained.
- [orquestacion-enjambres-ia](https://github.com/jleonceo/orquestacion-enjambres-ia): multi-agent routing, which agent handles each request without breaking as it grows.
- [gobernanza-skills-analiticas](https://github.com/jleonceo/gobernanza-skills-analiticas): five rules for governing skills, each with its real scar.
- [verificacion-determinista-ia](https://github.com/jleonceo/verificacion-determinista-ia): checking state coherence by pure arithmetic, without AI.
- [agent-memory-governance](https://github.com/jleonceo/agent-memory-governance): keeping the agent's memory from turning into a junkyard.
- [claude-code-context-management](https://github.com/jleonceo/claude-code-context-management): keeping the context files small and current, without flooding the window.
- [tesoreria-forecast-ia](https://github.com/jleonceo/tesoreria-forecast-ia): cash-flow forecasting with backtesting, ratios and aging.
- [control-interno-fraude-ia](https://github.com/jleonceo/control-interno-fraude-ia): accounting fraud detection with arithmetic, inside an internal-control framework.
- [audience-analyst-swarm](https://github.com/jleonceo/audience-analyst-swarm): the same method ported to another domain, audience analytics reusing about 70% of the accounting swarm.
- [pii-output-gate](https://github.com/jleonceo/pii-output-gate): an output gate that refuses to publish anything carrying personal data, without relying on the model behaving.
- [guardianes-verificados-ia](https://github.com/jleonceo/guardianes-verificados-ia): how you check that a guardrail actually protects, by breaking it on purpose and demanding it fires.
- [gobernanza-agentes-verificada](https://github.com/jleonceo/gobernanza-agentes-verificada): an agent's rules wired to something that enforces them, rather than written in a document.

### The other half of the portfolio: the data trade

Before structuring AI you have to read the data. This series is the original trade, and several of
these cases are the ones later automated:

- [analisis-contable](https://github.com/jleonceo/analisis-contable): reading a full financial year straight from the database, from margin to cash flow.
- [RFM-Customer-Analytics](https://github.com/jleonceo/RFM-Customer-Analytics): which customers are leaving without warning, and why the annual total hides them.
- [lead-scoring-ml](https://github.com/jleonceo/lead-scoring-ml): who the sales team should call first, with the model verified two independent ways.
- [accident-intelligent-agent](https://github.com/jleonceo/accident-intelligent-agent): an early agent over public road-safety data, with its failures documented.

### Stack

React · Vite · deployed on Vercel.

### Run locally

```bash
npm install
npm run dev
```

### Contact

jleonceo@gmail.com · [LinkedIn](https://www.linkedin.com/in/jlleonrodriguez/) · [GitHub](https://github.com/jleonceo)
