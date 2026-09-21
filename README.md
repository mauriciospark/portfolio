# Mauricio Spark — (Linhagem SPARK)

Portfólio estático de Mauricio Spark: uma vitrine clara da Linhagem SPARK para apresentar quem constrói as ferramentas, o que elas resolvem e como entrar em contato — sem servidor, sem cadastro e sem nuvem obrigatória.

O problema que este site resolve é simples: recrutadores, colaboradores e desenvolvedores precisam entender rápido o posicionamento da marca, os pilares técnicos (offline-first, privacidade e utilidade pragmática) e os projetos open-source em um único endereço, com links diretos para GitHub, LinkedIn e e-mail.

## Stack

### Frontend
- HTML5 semântico (`index.html`)
- CSS3 com variáveis de tema, layout responsivo e modo claro/escuro via `prefers-color-scheme` (`css/style.css`)
- JavaScript vanilla (`javascript/script.js`)

### Backend
- Nenhum. O site é 100% estático e funciona a partir de arquivos locais ou de um host de páginas estáticas.

### Banco de dados
- Nenhum. Não há persistência de dados do visitante. Contagens de estrelas vêm, quando disponíveis, da API pública do GitHub.

### Bibliotecas
- Nenhuma dependência npm. Tipografia via Google Fonts (Space Grotesk e IBM Plex Mono).

### Ferramentas
- Git e GitHub
- Qualquer servidor estático ou abertura direta do `index.html` no navegador
- GitHub REST API (somente leitura pública: `stargazers_count`)

## Funcionalidades

- Hero com brasão da Linhagem SPARK, foto de perfil e chamada para GitHub, LinkedIn e e-mail
- Seção **Sobre** com resumo profissional e stack em chips (HTML5, CSS3, JavaScript, PHP, Git & GitHub, Markdown)
- Seção **Linhagem SPARK** com os três pilares: arquitetura offline-first, soberania/privacidade e utilidade pragmática
- Listagem de projetos (**coreIcons**, **registros**, **syntax**, **score**) com descrição, tags, repositório e demo ao vivo
- Atualização opcional das estrelas do GitHub no cliente; se a API falhar, o número estático permanece
- Seção **Contato** com e-mails pessoal e Spark, LinkedIn pessoal, LinkedIn da marca e perfil GitHub
- Marca d’água visual SPARK e tema que acompanha o sistema operacional
- Layout pensado para desktop e telas estreitas, com `viewport-fit=cover` para áreas seguras

## Como rodar

Não há `npm install`. O ambiente local é o próprio navegador.

1. Clone o repositório:

```bash
git clone https://github.com/mauriciospark/portfolio.git
cd portfolio
```

2. Instale as dependências: nenhuma. O projeto não usa gerenciador de pacotes.

3. Inicie o ambiente local de uma destas formas:
   - Abra `index.html` no navegador; ou
   - Sirva a raiz do projeto com qualquer servidor estático, por exemplo:

```bash
npx --yes serve .
```

As imagens ficam em `images/`. A documentação complementar está em `docs/`.
