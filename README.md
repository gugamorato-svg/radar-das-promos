# Radar das Promos — landing pages

Páginas simples para anúncios no Instagram que levam direto para os grupos do WhatsApp.

| Página | Arquivo | Grupo |
|---|---|---|
| Radar das Promos | `index.html` | https://chat.whatsapp.com/KC9TG3oSYzD0Mi86tEJ0Sh |
| Clube da Perfumaria | `perfumaria/index.html` | https://chat.whatsapp.com/JeeaMNbFrED3dr6g5B8yEQ |

## Configurar

Cada página tem um bloco `window.LP_CONFIG` no `<head>`:

- `groupUrl` — link de convite do grupo.
- `metaPixelId` — ID do Pixel da Meta. Com ele preenchido, a página registra
  `PageView` ao abrir e `Lead` ao clicar em "Entrar no grupo", para o Meta Ads
  otimizar a campanha por cliques no grupo.

## Publicar

É um site estático (sem build). Opções gratuitas:

- **GitHub Pages**: suba a pasta num repositório e ative Pages (branch `main`, raiz).
- **Vercel / Netlify**: arraste a pasta ou importe o repositório.

Use a URL publicada como destino do anúncio no Instagram.
