# Frontend baserad webbutveckling – Laboration 1

Detta projekt är en del av Laboration 1 i kursen *Frontend baserad webbutveckling*. Syftet med laborationen är att sätta upp ett modernt frontend-arbetsflöde med **Vite**, arbeta med **versionshantering i Git**, samt publicera en webbplats via **Netlify**.

---

## Arbetsprocess

### Installation av Vite.js
Projektet inleddes med installation av **Vite.js**, vilket skapade en grundläggande filstruktur för projektet. I samband med detta genererades bland annat en `.gitignore`-fil, som används för att exkludera filer och mappar (t.ex. `node_modules` och `dist`) från versionshantering.

---

### Skapande av mappstruktur
I projektets `src`-mapp skapades separata mappar för **JavaScript** och **CSS**:

- `src/js` – innehåller webbplatsens JavaScript-logik
- `src/css` – innehåller styling

I CSS-mappen används:
- en huvudfil för generell styling
- separata CSS-filer för sidspecifik styling

---

### Konfiguration av Vite
En `vite.config.js` skapades för att konfigurera projektet som en **multipage HTML-webbplats**. Utöver konfiguration installerades och konfigurerades följande npm-paket:

- `vite-plugin-image-optimizer`
- `sharp`

Dessa används för att optimera bilder automatiskt vid `npm run build`, med stöd för formaten **AVIF**, **WebP** och **JPG**.

---

### Versionshantering med Git
Projektet versionshanterades med **Git**.  
Ett lokalt repository skapades med `git init` och kopplades till ett fjärrrepository på **GitHub**.  
Repositoryt kopplades även till **Netlify**, där varje push till `main` automatiskt triggar:

1. `npm install`
2. `npm run build`
3. Publicering av innehållet i `dist`-mappen

---

### Arbete med feature-branches
Utvecklingen skedde med hjälp av **feature branches**.  
För varje ny funktion eller ändring skapades en ny branch:

```bash
git checkout -b feature-namn


## Webbplats URL

splendorous-kataifi-5cd2ae.netlify.app

---

## Klona repot

```bash
git clone https://github.com/izab2500/fbw-labb1.git

