# Guia de contribuição — Mauricio Spark (Linhagem SPARK)

Contribuições abertas e revisões de código devem preservar o caráter estático, legível e sem dependências deste portfólio.

## Antes de começar

1. Abra uma issue descrevendo o problema ou a melhoria.
2. Faça fork (ou clone, se tiver acesso) e trabalhe em uma branch nova a partir de `main`.
3. Mantenha o diff pequeno e alinhado a um único objetivo.

## Nomenclatura de branches

Use prefixo em minúsculas, hífen e descrição curta em inglês ou português sem espaços:

| Prefixo | Uso |
| --- | --- |
| `feat/` | novo recurso visível (seção, projeto, asset) |
| `fix/` | correção de bug ou regressão visual |
| `docs/` | apenas documentação |
| `style/` | CSS sem mudança de comportamento JS |
| `chore/` | manutenção (LICENSE, meta, estrutura de pastas) |

Exemplos: `feat/contato-spark`, `fix/hero-banner-height`, `docs/changelog-1-0-0`.

## Estilo de código

- **HTML:** semântico, indentação de 2 espaços, `lang="pt-BR"`, `alt` em imagens de conteúdo. Não reintroduzir Base64 em `src` ou no CSS.
- **CSS:** seletores simples, tokens em `:root`, sem pré-processador. Media queries para 640px e 780px devem continuar coerentes com o layout atual.
- **JavaScript:** IIFE ou funções curtas, `var`/`function` no estilo já adotado ou ES5-compatível, sem frameworks e sem bundler. Trate falha de `fetch` sem lançar erro visível ao usuário.
- **Comentários de cabeçalho SPARK:** preserve o bloco de proprietário/marca/versão no topo de `index.html`, `css/style.css` e `javascript/script.js` quando esses arquivos forem editados.
- **Conteúdo:** português do Brasil na interface; não invente projetos ou métricas.

## Validações obrigatórias antes de submeter

- [ ] `index.html` abre no navegador sem console error no fluxo principal.
- [ ] Imagens em `images/` carregam pelos caminhos relativos.
- [ ] Seções `#sobre`, `#spark`, `#projetos` e `#contato` continuam acessíveis pelo menu.
- [ ] Estrelas: com API indisponível, o fallback numérico permanece.
- [ ] Layout conferido em viewport larga e em ~360–640px.
- [ ] Nenhum segredo, token ou e-mail de terceiros novo sem necessidade.
- [ ] `LICENSE` MIT e cabeçalhos de copyright (© 2026 Mauricio Spark) intactos.

Pull requests devem descrever o *porquê*, listar o que testou e referenciar a issue quando houver.
