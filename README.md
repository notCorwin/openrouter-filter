# OpenRouter Model Filter

Search and filter OpenRouter models by context length, pricing, modality, and supported parameters.

## Deployment

This is a static single-page app. Hosted on GitHub Pages:

**https://notcorwin.github.io/openrouter-filter/**

### Local usage

Just open `index.html` in a browser, or serve locally:

```bash
npx serve .
```

### Language detection

Auto-detects browser language (`navigator.language`) and displays UI in English, Chinese (简体中文), or Japanese (日本語). Add more languages by extending `I18N` in `index.html`.