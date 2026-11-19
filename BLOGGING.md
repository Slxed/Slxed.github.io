# Publishing a blog post

The blog is already wired up. Nothing is published until a Markdown file is added under `src/content/blog/` and pushed to `main`. Blog stays in the header either way. With no published posts, `/blog` shows “Posts coming soon.”

A post goes live at `https://slxed.github.io/blog/<filename>` (the filename without `.md`).

## Add a post

1. Copy `src/content/blog/_TEMPLATE.md` to `src/content/blog/my-post.md`.
   Use a real filename. Files and folders whose names start with `_` are ignored, so the template itself never shows up on the site. `my-post.md` becomes `https://slxed.github.io/blog/my-post`.
2. Fill in the frontmatter at the top of the file:
   - `title` — the post title
   - `date` — a calendar date, `YYYY-MM-DD`
   - `excerpt` — the short summary on the blog list
   - `image` — optional. Leave it out, or set a root path such as `/images/example.png`
   - `draft` — optional. Defaults to `false` (published). The template sets it to `true`
3. Put images in `public/` (for example `public/images/example.png`). In the post, refer to them as `/images/example.png`. Do not include `public` in the path. The same path works for the optional `image` frontmatter and for images inside the Markdown.
4. Write the post in Markdown under the frontmatter. Delete the HTML comment that came from the template.
5. Preview before publishing.
   - On a computer: run `npm install` once, then `npm run dev`, and open the URL it prints (usually http://localhost:4321).
   - In a GitHub Codespace: on the repo page, use Code → Codespaces → Create codespace on main. The dev container runs `npm install`. In the terminal, run `npm run dev` and open the forwarded port 4321.
   Drafts show up in this preview, including a Draft label, and are left out of the production build. `npm run build` is the production check: drafts disappear, and if every post is still a draft `/blog` shows the empty note.
   Until the first post file exists, `npm run build` may warn that no blog files matched. That warning is expected: the build still succeeds, and `/blog` stays empty.
6. Set `draft` to `false` when the post should be public. Or delete the `draft` line; missing means published.
7. Commit and push to `main`.
   Editing on github.com does the same thing: add or edit `src/content/blog/my-post.md`, then commit the change directly to the `main` branch.
8. The workflow in `.github/workflows/deploy.yml` runs on every push to `main`. It builds the site and GitHub Pages publishes it at https://slxed.github.io. Posts are listed on `/blog`, newest by `date`, and Read More opens the post page.

Posts are listed newest first. To take a post back down, set `draft: true` and push, or delete the file and push.

## Still to add yourself

Resume in the header opens `/William_Day_Resume.pdf` in a new tab. That file is the public copy already in the repo. Do not replace it with a resume that includes a phone number or a street address.

Headshot: save a photo as `public/headshot.jpg` (`.png` or `.webp` also work). Until that file exists, the hero shows the initials WD.

Project screenshots are optional. Drop a file in `public/projects/` and the card picks it up. Until then the card shows a plain color panel.

- `public/projects/crypto-diversification.png`
- `public/projects/wi-school-spending.png`
- `public/projects/ai-data-cleaner.png`

`.jpg`, `.jpeg`, and `.webp` work with the same names. The Wisconsin map in `Slxed/wi-school-spending` (`map/wi_spending_vs_graduation.png`) is one you already have.

Accent color is `--color-primary` and `--color-primary-dark` in `src/styles/global.css`. There is a light block and a dark block. Comment the active line and uncomment deep blue, map teal, or Badger red in both blocks, or the night colors will not match.

The moon button in the header switches light and dark. The choice is saved in the browser. With no saved choice, the site follows the system setting.

## Analytics

The site can count visits with GoatCounter, which does not use cookies, so no cookie banner is needed. Nothing is loaded until a code is set.

1. Sign up at [goatcounter.com](https://www.goatcounter.com/).
2. Copy the site code (the part before `.goatcounter.com`).
3. Set `goatcounterCode` in `src/site.ts` to that code.
4. Push to `main`. The count script is added only when `goatcounterCode` is not empty.

## Latest update

The accent line under the name on the home page comes from `latestUpdate` in `src/site.ts`. Edit that one string when there is something new to note. It is the only place that sentence is stored.

## School spending map

`/projects/wi-school-spending` draws a bivariate choropleth when `public/data/wi-districts.geojson` exists. The GitHub repo has the finished map image, not the district table or the boundaries, so the page does not invent those rows.

The file must be GeoJSON in longitude/latitude (EPSG:4326). Each feature needs:

- `name`: district name
- `spend`: dollars per student, a number
- `grad`: graduation rate, a number (94 means 94%)
- a `Polygon` or `MultiPolygon` geometry

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "Merton Community", "spend": 12624, "grad": 94 },
      "geometry": { "type": "Polygon", "coordinates": [] }
    }
  ]
}
```

Hover text is the district name, dollars per student, and graduation rate. The color grid is spending left to right and graduation rate bottom to top, split into three groups from the file itself. Official Wisconsin school district boundaries (Wisconsin DPI or LTSB open data) can be joined to a table that already has these fields. Do not fill in spending or graduation rates that are not in that table. The resume figures (421 districts, 2023–24, $18,865 and 68.8%, Lac du Flambeau $39,708 and 57%, Merton $12,624 and 94%) stay in the text even before the file is added.

## Project drafts

Two drafts are already in `src/content/blog/`:

- `how-i-made-wi-school-spending.md`
- `how-i-made-crypto-diversification.md`

Both have `draft: true`, so a production build leaves them off the site. `npm run dev` shows them. Replace the comment, write the post, set `draft` to `false`, and push.

## Crypto report

`/projects/crypto-diversification` embeds the existing report at https://slxed.github.io/crypto-diversification/ in a frame. That page is the rendered `docs/index.html` from github.com/Slxed/crypto-diversification, including the plotly charts. The charts are not copied into this repo and are not redrawn here. If that URL stops resolving, the Live Demo link on the home card points at the same place.
