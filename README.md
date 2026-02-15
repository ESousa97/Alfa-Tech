<div align="center">

# Alfa Tech

[![CI](https://img.shields.io/github/actions/workflow/status/ESousa97/Alfa-Tech/ci.yml?style=flat&logo=github-actions&logoColor=white)](https://github.com/ESousa97/Alfa-Tech/actions/workflows/ci.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/ESousa97/Alfa-Tech/codeql.yml?style=flat&logo=github-actions&logoColor=white&label=CodeQL)](https://github.com/ESousa97/Alfa-Tech/actions/workflows/codeql.yml)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/ESousa97/Alfa-Tech?style=flat&logo=codefactor&logoColor=white)](https://www.codefactor.io/repository/github/esousa97/alfa-tech)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Archived-lightgrey.svg?style=flat&logo=archive&logoColor=white)](#)

**Plataforma educacional sobre fundamentos da computação — HTML e CSS puros com tipografia fluida, cards minimalistas e design responsivo para desmistificar a tecnologia.**

[Demo](https://alfa-tech-three.vercel.app/)

</div>

---

> **⚠️ Projeto Arquivado**
> Este projeto não recebe mais atualizações ou correções. O código permanece disponível como referência e pode ser utilizado livremente sob a licença MIT. Fique à vontade para fazer fork caso deseje continuar o desenvolvimento.

---

<div align="center">

<img src="./Assets/alfatech.gif" alt="Demonstração da Plataforma Alfa Tech" width="800">

</div>

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Uso Local](#uso-local)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Qualidade e Governança](#qualidade-e-governança)
- [Deploy](#deploy)
- [FAQ](#faq)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

Este projeto é uma plataforma educacional de página única (SPA) sobre fundamentos da ciência da computação, desenvolvida com HTML5 e CSS3 puros. Utiliza uma abordagem narrativa e visual para desmistificar conceitos como CPU, RAM e armazenamento, combinando precisão técnica com design pedagogicamente engajador.

O repositório prioriza:

- **Design minimalista e moderno** — Tipografia fluida com `clamp()`, hierarquia visual consistente e layout limpo
- **Conteúdo pedagógico visual** — Cards com ícones representativos e analogias para reforçar conceitos abstratos
- **Zero dependências** — HTML e CSS puros, sem frameworks, para máxima performance e simplicidade
- **Responsividade** — Design mobile-first com media queries e estrutura semântica para acessibilidade e SEO
- **Automação de qualidade** — Lint, testes de smoke e CI/CD via GitHub Actions

### Por que HTML/CSS puro?

Para conteúdo educacional estático, frameworks adicionariam complexidade desnecessária e impactariam o tempo de carregamento sem benefícios significativos. A abordagem purista demonstra que tecnologias web nativas são suficientes para criar interfaces educacionais modernas, acessíveis e performáticas.

---

## Funcionalidades

- **Hero section imersiva** — Introdução com título dinâmico e subtítulo que estabelece o tom da plataforma
- **Cards minimalistas** — Conteúdo segmentado em seções com bordas suaves e contraste sutil para leitura focada
- **Ícones educacionais** — Conceitos como CPU, RAM e armazenamento acompanhados por imagens representativas
- **Tipografia fluida** — Tamanhos de fonte responsivos via `clamp()` para leitura confortável em qualquer dispositivo
- **Design responsivo** — Adaptação fluida para smartphones, tablets e desktops
- **Estrutura semântica** — Tags `<section>`, `<header>`, `<footer>` para acessibilidade e SEO

---

## Tecnologias

### Core

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

### Ferramentas de Desenvolvimento

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

**Requisitos mínimos:**

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Node.js 18+ (apenas para lint/test, opcional)

---

## Arquitetura

A aplicação é um site estático puramente client-side, sem dependência de backend:

```
Usuário
  → Vercel Edge Network (roteamento e CDN)
    → index.html (estrutura semântica e conteúdo educacional)
      → Style.css (tipografia fluida, cards, responsividade)
      → Assets/Image/ (imagens educacionais: CPU, RAM, Storage)
      → Assets/favicon/ (favicons multiplataforma)
      → Assets/media/ (logo e ícones sociais)
```

Todos os componentes residem e são executados no navegador do usuário. A Vercel distribui os ativos estáticos via CDN global para acesso rápido.

---

## Estrutura do Projeto

```
Alfa-Tech/
├── index.html                 # Página principal com conteúdo educacional
├── Style.css                  # Folha de estilo principal
├── Assets/
│   ├── Image/                 # Imagens educacionais (CPU, RAM, Storage)
│   ├── favicon/               # Favicons multiplataforma
│   └── media/                 # Logo e ícones sociais
├── tests/                     # Testes de smoke
├── docs/                      # Documentação complementar
├── .github/
│   └── workflows/
│       ├── ci.yml             # Pipeline de CI
│       └── codeql.yml         # Análise de segurança
├── package.json               # Scripts de lint/format e testes
├── CONTRIBUTING.md            # Guia de contribuição
├── SECURITY.md                # Política de segurança
├── CODE_OF_CONDUCT.md         # Código de conduta
├── CHANGELOG.md               # Histórico de mudanças
└── LICENSE                    # Licença MIT
```

---

## Começando

### Pré-requisitos

A aplicação é um site estático e roda diretamente no navegador. Para lint e testes:

```bash
node --version  # v18 ou superior (opcional, para lint/test)
npm --version   # v9 ou superior (opcional, para lint/test)
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/ESousa97/Alfa-Tech.git
cd Alfa-Tech
```

2. **Instale as dependências de desenvolvimento** (opcional)

```bash
npm install
```

### Uso Local

**Abrir diretamente no navegador:**

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

**Com servidor local:**

```bash
python -m http.server 8000
# ou
npx serve .
```

Acesse: `http://localhost:8000/`

**Produção:** [alfa-tech-three.vercel.app](https://alfa-tech-three.vercel.app/)

---

## Scripts Disponíveis

```bash
# Executar lint
npm run lint

# Formatação
npm run format

# Testes de smoke
npm test
```

---

## Qualidade e Governança

O projeto adota práticas de governança para manter a qualidade do código:

- **CI** — Pipeline com lint, format e testes via GitHub Actions
- **Security** — Análise CodeQL semanal e em cada push/PR
- **Cobertura** — Relatórios integrados ao Codecov
- **Templates** — Modelos padronizados para Issues e Pull Requests

> Para diretrizes de contribuição, consulte [`CONTRIBUTING.md`](CONTRIBUTING.md). Para política de segurança, consulte [`SECURITY.md`](SECURITY.md).

---

## Deploy

### Vercel (Produção)

Deploy contínuo automatizado via integração GitHub. Cada push na branch `main` aciona novo deploy. A Vercel detecta automaticamente o projeto como site estático e distribui via CDN global.

O projeto também é compatível com Netlify, GitHub Pages ou qualquer plataforma de hospedagem estática.

---

## FAQ

<details>
<summary><strong>Por que não usar React ou Vue?</strong></summary>

Para conteúdo educacional estático, frameworks adicionariam complexidade desnecessária e impactariam o tempo de carregamento sem oferecer benefícios significativos.
</details>

<details>
<summary><strong>Posso reutilizar o design e conteúdo?</strong></summary>

Sim. A licença MIT permite reutilização livre do código e conteúdo, inclusive para fins educacionais e comerciais, mantendo apenas o aviso de licença original.
</details>

<details>
<summary><strong>Para que faixa etária o conteúdo é adequado?</strong></summary>

O conteúdo foi desenvolvido para iniciantes de qualquer idade, com linguagem acessível mas tecnicamente precisa sobre fundamentos da computação.
</details>

<details>
<summary><strong>Como contribuir com novos conceitos?</strong></summary>

Abra uma Issue no GitHub com sua sugestão ou envie um Pull Request seguindo a estrutura de cards existente. Consulte `CONTRIBUTING.md` para detalhes.
</details>

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - você pode usar, copiar, modificar e distribuir este código.
```

---

## Contato

**José Enoque Costa de Sousa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enoque-sousa-bb89aa168/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/ESousa97)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=todoist&logoColor=white)](https://enoquesousa.vercel.app)

---

<div align="center">

**[⬆ Voltar ao topo](#alfa-tech)**

Feito com ❤️ por [José Enoque](https://github.com/ESousa97)

**Status do Projeto:** Archived — Sem novas atualizações

</div>
