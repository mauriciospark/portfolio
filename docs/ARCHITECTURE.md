# Arquitetura — Mauricio Spark (Linhagem SPARK)

## Design adotado

O portfólio segue **arquitetura estática client-side**, alinhada ao princípio **Local-First / Zero-Server** da Linhagem SPARK.

Não há MVC de servidor, não há camada de aplicação remota e não há Clean Architecture de domínio persistente: o “sistema” é um documento HTML que descreve a interface, uma folha de estilo que define apresentação e um script que enriquece dados públicos já visíveis na página.

Camadas, da borda para o núcleo:

1. **Apresentação (HTML):** seções semânticas (`header`, `nav`, `main`, `section`, `footer`), âncoras internas e links externos.
2. **Estilo (CSS):** tokens em `:root`, layout em fluxo e grid, media queries, tema automático claro/escuro.
3. **Comportamento (JavaScript):** um IIFE que consulta a GitHub REST API e atualiza nós `.stars[data-repo]`.
4. **Assets:** imagens em `images/` referenciadas por caminho relativo — sem payload embutido no markup.

Isso é intencional: um portfólio não precisa de backend para ser verdadeiro. Qualquer complexidade extra violaria privacidade, eficiência e autonomia.

## Justificativa das escolhas técnicas

### Sem banco de dados

Não existe dado de visitante para persistir. Estrelas do GitHub são métricas públicas e voláteis; o HTML já carrega um valor estático de fallback. Persistência local (IndexedDB, localStorage) não se aplica a este produto.

### Sem backend próprio

Um servidor só aumentaria superfície de ataque, custo e pontos de falha. HTML + CSS + JS atendem ao objetivo comercial: apresentar marca, projetos e contato.

### Comunicação entre camadas

- O HTML não depende do JS para o conteúdo principal.
- O CSS não depende do JS para o tema (usa `prefers-color-scheme`).
- O JS é progressivo: lê `data-repo`, faz `GET https://api.github.com/repos/{owner}/{repo}`, e só então substitui o texto do elemento. Erro de rede, CORS ou rate limit não quebra a página.

### Privacidade dos dados

- Nenhuma coleta de formulário.
- Nenhuma telemetria.
- A chamada ao GitHub envia o User-Agent do navegador e o caminho do repositório público; o portfólio não envia e-mail, nome ou identificador do visitante a um backend próprio.
- Imagens e fontes de terceiros: Google Fonts (tipografia) e, opcionalmente, `api.github.com`. O conteúdo textual permanece no próprio origin.

## Fluxo dos dados

```
Visitante
  → carrega index.html, css/style.css, javascript/script.js, images/*
  → renderiza seções (Sobre, Spark, Projetos, Contato) só com o DOM
  → script seleciona .stars[data-repo]
  → fetch GET /repos/{data-repo}
       sucesso → JSON.stargazers_count → textContent "★ N"
       falha   → mantém o número já escrito no HTML
  → cliques em âncoras (#sobre, #spark, #projetos, #contato) e links externos
       (GitHub, LinkedIn, mailto) saem do origin; nada é gravado neste projeto
```

Não há etapa de persistência. O “processamento final” é pintura no DOM ou navegação para outro site.

### Estrutura de arquivos

```
portfolio/
  index.html
  LICENSE
  README.md
  css/style.css
  javascript/script.js
  images/hero-banner.png
  images/hero-photo.png
  docs/
    ABOUT.md
    ARCHITECTURE.md
    CONTRIBUTING.md
    CHANGELOG.md
```
