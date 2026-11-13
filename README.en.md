Versión en español: [README.md](README.md)

# Juan Luis León Rodríguez's portfolio

Source of my portfolio site. The page explains the system I build.

**55 skills**, grouped into six domain swarms: accounting, analytics, marketing, treasury, programming and HR. A router decides which one takes each request. Underneath sit MySQL, Power BI, Python, n8n and Claude.

Three words worth pinning down first. A **skill** is a text file that gives a model its criteria: which rules to apply, which accounts to use, when to stop and ask for review. A **swarm** is a group of skills sharing a domain, each with its own patch, so that whoever judges is never whoever produced. The **router** reads the request and decides which swarm takes it, so the system does not break as it grows.

An example of what it does, end to end: a supplier invoice PDF comes in, one skill extracts the data and says «unreadable» rather than inventing a missing field, another writes the journal entry with the company's real accounts, and a third checks that it balances and decides whether to post it or hold it. Approved entries land in a drafts table and a person is the one who posts them.

The method is building those tools and **validating them before use**. Today 24 skills have automated evaluations run, with their results stored. And the method requires every change to pass a blind simulation checking that what already worked still works.

## The system in open repos

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

## The other half of the portfolio: the data trade

Before structuring AI you have to read the data. This series is the original trade, and several of
these cases are the ones later automated:

- [analisis-contable](https://github.com/jleonceo/analisis-contable): reading a full financial year straight from the database, from margin to cash flow.
- [RFM-Customer-Analytics](https://github.com/jleonceo/RFM-Customer-Analytics): which customers are leaving without warning, and why the annual total hides them.
- [lead-scoring-ml](https://github.com/jleonceo/lead-scoring-ml): who the sales team should call first, with the model verified two independent ways.
- [accident-intelligent-agent](https://github.com/jleonceo/accident-intelligent-agent): an early agent over public road-safety data, with its failures documented.
- [de-datos-en-bruto-a-decisiones](https://github.com/jleonceo/de-datos-en-bruto-a-decisiones): a raw sales file analysed end to end, with a [website](https://de-datos-en-bruto-a-decisiones.vercel.app) that tells the story.

## Stack

React · Vite · deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Contact

jleonceo@gmail.com · [LinkedIn](https://www.linkedin.com/in/jlleonrodriguez/) · [GitHub](https://github.com/jleonceo) · [CV](https://jleonceo.github.io/cv/)
