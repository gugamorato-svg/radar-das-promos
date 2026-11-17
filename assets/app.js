// Liga o botão ao grupo e avisa o Meta Ads (Pixel) quando alguém clica.
// Configuração fica em window.LP_CONFIG, definido em cada página.
(function () {
  var cfg = window.LP_CONFIG || {};
  var btn = document.querySelector("[data-cta]");
  if (btn && cfg.groupUrl) btn.href = cfg.groupUrl;

  // --- Meta Pixel (só carrega se metaPixelId estiver preenchido) ---
  if (cfg.metaPixelId) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0";
      n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", cfg.metaPixelId);
    window.fbq("track", "PageView");
  }

  if (!btn) return;
  btn.addEventListener("click", function (e) {
    if (!window.fbq) return; // sem pixel: segue o link normalmente
    e.preventDefault();
    var go = function () { window.location.href = btn.href; };
    window.fbq("track", "Lead", { content_name: cfg.groupName || "grupo" });
    // dá um instante para o evento sair antes de abrir o WhatsApp
    setTimeout(go, 350);
  });
})();
