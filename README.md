# Fazle Mohammed Tasfiq — Portfolio

[![Pages](https://img.shields.io/badge/Live%20Site-tasfiq95.github.io-64ffda?style=flat-square)](https://tasfiq95.github.io)
[![Built with Jekyll](https://img.shields.io/badge/Built%20with-Jekyll-c00?style=flat-square&logo=jekyll)](https://jekyllrb.com)

My personal portfolio website — a fast, responsive, single-page site built with
[Jekyll](https://jekyllrb.com) and deployed automatically with **GitHub Pages**.

🔗 **Live:** https://tasfiq95.github.io

---

## ✨ Features

- ⚡ Static, fast, no build step needed on GitHub's side (Pages builds Jekyll for you)
- 🌗 Light / dark theme toggle (remembers your choice)
- 📱 Fully responsive — looks great on mobile and desktop
- 🗂️ Content-driven — edit YAML data files instead of touching HTML
- ♿ Smooth scrolling + reveal-on-scroll animations

## 🚀 Deploy in 3 steps

1. **Create the repository.** On GitHub, make a new public repo named exactly:

   ```
   tasfiq95.github.io
   ```

2. **Push these files** to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Tasfiq95/tasfiq95.github.io.git
   git push -u origin main
   ```

3. **Enable Pages.** Go to **Settings → Pages → Build and deployment**, set
   *Source* to **Deploy from a branch**, branch **main** / **/(root)**, and save.

   Your site goes live at **https://tasfiq95.github.io** within a minute or two. 🎉

## ✏️ How to customize

Most edits don't require touching HTML:

| What to change            | Edit this file                |
| ------------------------- | ----------------------------- |
| Name, tagline, links      | `_config.yml`                 |
| Projects                  | `_data/projects.yml`          |
| Skills                    | `_data/skills.yml`            |
| About / Education text    | `index.html`                  |
| Colors, fonts, spacing    | `assets/css/style.css`        |

> Tip: add your résumé as `assets/resume.pdf` and set `resume: /assets/resume.pdf`
> in `_config.yml` to show a Résumé button. Fill in `linkedin`, `twitter`, or
> `scholar` to reveal those social links.

## 🧪 Run locally (optional)

You only need this if you want to preview changes before pushing. Requires
[Ruby](https://www.ruby-lang.org/) + Bundler.

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

## 📁 Structure

```
.
├── _config.yml          # Site settings & personal info
├── index.html           # Page sections (Hero, About, Education, …)
├── 404.html             # Custom not-found page
├── _layouts/
│   └── default.html     # Page shell (head, nav, footer)
├── _data/
│   ├── projects.yml     # Your projects
│   └── skills.yml       # Your skills
└── assets/
    ├── css/style.css    # Styles & theme
    └── js/main.js       # Theme toggle & animations
```

## 📄 License

Released under the [MIT License](LICENSE) — feel free to reuse as a template.
