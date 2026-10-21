# Digital Hub — GitHub Pages Website

A complete static website hub for your portfolio, education website, and engineering applications.

## Deploy to GitHub Pages (no build required)

1. Create a **public** GitHub repository, for example `digital-hub`.
2. Upload **index.html, styles.css, script.js, sites.json, favicon.svg** to the repository root.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**; select `main` and `/ (root)`, then **Save**.
5. GitHub will publish the site at `https://YOUR-USERNAME.github.io/digital-hub/`.

## Add a website or subdomain

1. Edit `sites.json`.
2. Add another JSON object or update a `url`.
3. Set `status` to `live` after the target website is actually deployed and accessible.
4. Commit the updated file. GitHub Pages updates automatically.

Allowed category filters are currently `Portfolio` and `Applications`. Change filter buttons in `index.html` if adding other categories. Supported icons: `graduation`, `briefcase`, `layers`, `check`, `grid`. Accent colors: `green`, `blue`, `purple`, `orange`, `cyan`.

## Connect a GoDaddy main domain

1. In GitHub repository **Settings → Pages → Custom domain**, enter `yourdomain.com` (without `https://`).
2. In GoDaddy, point the apex `@` A records to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Optionally create `www` CNAME -> `YOUR-USERNAME.github.io`.
4. When DNS resolves, enable **Enforce HTTPS** in GitHub Pages.
5. GitHub Pages normally creates/manages the repository's `CNAME` file when saving the custom domain. If you manage DNS configuration with commits, you can also create a root `CNAME` file containing your exact real domain on one line. **Do not create a CNAME using the placeholder.**

DNS settings depend on the domain's active nameservers. If nameservers aren't GoDaddy's, configure records at the actual DNS host. Remove conflicting records before configuring your apex domain. For more details use GitHub's official documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Notes

- The website is pure HTML/CSS/JavaScript and works without any hosting subscription, backend, or database.
- The configuration file is public; do not put private data or secrets into it.
- The only currently known, verified website URL in the initial configuration is the Pratheeksha educator GitHub Pages URL. All other project links are disabled until you add working URLs.
- For local previews, run `python -m http.server 8000` inside the folder and open `http://localhost:8000`.


### Portfolio icons
Project icons are drawn as inline SVGs from `script.js`; all icon names referenced by `sites.json` have been implemented. `accent-gold` is supported for the legal portfolio. The bundled fallback list matches `sites.json` if the file cannot be loaded.
