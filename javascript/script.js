  /*
  ============================================================================
  PROPRIETÁRIO: Mauricio Spark
  MARCA:        SparkMauricio
  PROJETO:      Mauricio Spark
  VERSÃO:       v1.0.0
  LINHAGEM:     SPARK
  ============================================================================
  Documento de Planejamento de Escopo
  COPYRIGHT: © 2026 / Mauricio Spark. Todos os direitos reservados.
  ============================================================================
*/
(function () {
  document.querySelectorAll(".stars[data-repo]").forEach(function (el) {
    var repo = el.getAttribute("data-repo");
    fetch("https://api.github.com/repos/" + repo)
      .then(function (r) {
        return r.ok ? r.json() : null;
      })
      .then(function (data) {
        if (data && typeof data.stargazers_count === "number") {
          el.textContent = "★ " + data.stargazers_count;
        }
      })
      .catch(function () {
        /* mantém o número fixo caso a API falhe */
      });
  });
})();
