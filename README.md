English version: [README.en.md](README.en.md)

# Portfolio de Juan Luis León Rodríguez

**Controller financiero · Business Intelligence · IA aplicada a la contabilidad**

Sitio en vivo: **[juanluisleon.vercel.app](https://juanluisleon.vercel.app)**

Código de mi portfolio web. La página explica el sistema que construyo.

Son **55 skills** repartidas en seis enjambres de dominio: contabilidad, análisis, marketing, tesorería, programación y recursos humanos. Un router decide a cuál va cada encargo. Debajo, MySQL, Power BI, Python, n8n y Claude.

Tres palabras que conviene fijar antes de seguir. Una **skill** es un fichero de texto que le da criterio a un modelo: qué reglas aplicar, qué cuentas usar, cuándo frenar y pedir revisión. Un **enjambre** es un grupo de skills que se reparten un dominio, cada una con su parcela, de forma que la que juzga no sea la que produjo. Y el **router** es la pieza que lee la petición y decide a qué enjambre va, para que el sistema no se rompa al crecer.

Un ejemplo de lo que hace, de principio a fin: entra el PDF de una factura de proveedor, una skill extrae los datos y dice «ilegible» antes que inventarse un hueco, otra escribe el asiento con las cuentas reales de la empresa, y una tercera comprueba el cuadre y decide si se contabiliza o se frena. El asiento aprobado cae en una tabla de borradores y lo inserta una persona.

El método consiste en construir esas herramientas y **validarlas antes de usarlas**. Hoy 24 skills tienen evaluaciones automáticas ejecutadas, con sus resultados guardados. Y el método exige que cada cambio pase una simulación ciega que compruebe que lo que ya funcionaba sigue funcionando.

## El sistema en repos abiertos

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

## La otra mitad del portafolio: el oficio de los datos

Antes de estructurar la IA hay que saber leer los datos. Esta serie es la del oficio de origen.
Varios de estos casos son los que después se automatizaron:

- [analisis-contable](https://github.com/jleonceo/analisis-contable): leer un ejercicio contable entero desde la base de datos, del margen al flujo de caja.
- [RFM-Customer-Analytics](https://github.com/jleonceo/RFM-Customer-Analytics): qué clientes se están yendo sin avisar, y por qué el total anual no lo dice.
- [lead-scoring-ml](https://github.com/jleonceo/lead-scoring-ml): a qué contacto llama primero el equipo comercial, con el modelo verificado por dos vías.
- [accident-intelligent-agent](https://github.com/jleonceo/accident-intelligent-agent): un primer agente sobre datos públicos de siniestralidad, con sus fallos documentados.
- [de-datos-en-bruto-a-decisiones](https://github.com/jleonceo/de-datos-en-bruto-a-decisiones): un fichero de ventas en bruto analizado de principio a fin, con una [web](https://de-datos-en-bruto-a-decisiones.vercel.app) que lo cuenta.

## Stack

React · Vite · desplegado en Vercel.

## Ejecutar en local

```bash
npm install
npm run dev
```

## Contacto

jleonceo@gmail.com · [LinkedIn](https://www.linkedin.com/in/jlleonrodriguez/) · [GitHub](https://github.com/jleonceo) · [CV](https://jleonceo.github.io/cv/)
