# Changelog

Todas as mudanças relevantes deste projeto são registradas neste arquivo.

O formato segue a convenção Keep a Changelog, com tags **[Added]**, **[Changed]** e **[Fixed]**.

## [1.0.0] - 2026-09-21

### [Added]

- Página única de portfólio com hero, sobre, linhagem SPARK, projetos e contato
- Assets visuais em arquivos (`images/hero-banner.png`, `images/hero-photo.png`)
- Script de estrelas do GitHub com fallback estático
- Licença MIT em nome de Mauricio Spark (2026)
- Documentação padrão da linhagem: README, ABOUT, ARCHITECTURE, CONTRIBUTING e este changelog

### [Changed]

- Banner do hero limitado a altura fixa (220px desktop / 140px mobile) com `object-fit: cover`
- Markup das imagens passou de Data URI Base64 para HTML com `src` de arquivo

### [Fixed]

- HTML ilegível por payload Base64 embutido nas tags `img`
- CSS inchado pelo mesmo recurso em `background-image`
