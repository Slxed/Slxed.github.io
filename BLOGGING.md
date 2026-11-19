# Publishing a blog post

The blog is already wired up. Nothing is published until a Markdown file is added under `src/content/blog/` and pushed to `main`. While there are no published posts, the live site hides the Blog section and the Blog link in the header.

A post goes live at `https://slxed.github.io/blog/<filename>` (the filename without `.md`).

## Add a post

1. Copy `src/content/blog/_TEMPLATE.md` to `src/content/blog/my-post.md`.
   Use a real filename. Files and folders whose names start with `_` are ignored, so the template itself never shows up on the site. `my-post.md` becomes `https://slxed.github.io/blog/my-post`.
2. Fill in the frontmatter at the top of the file:
   - `title` — the post title
   - `date` — a calendar date, `YYYY-MM-DD`
   - `excerpt` — the short summary on the home page card
   - `image` — optional. Leave it out, or set a root path such as `/images/example.png`
   - `draft` — optional. Defaults to `false` (published). The template sets it to `true`
3. Put images in `public/` (for example `public/images/example.png`). In the post, refer to them as `/images/example.png`. Do not include `public` in the path. The same path works for the optional `image` frontmatter and for images inside the Markdown.
4. Write the post in Markdown under the frontmatter. Delete the HTML comment that came from the template.
5. Preview before publishing.
   - On a computer: run `npm install` once, then `npm run dev`, and open the URL it prints (usually http://localhost:4321).
   - In a GitHub Codespace: on the repo page, use Code → Codespaces → Create codespace on main. The dev container runs `npm install`. In the terminal, run `npm run dev` and open the forwarded port 4321.
   Drafts show up in this preview, including a Draft label, and are left out of the production build. `npm run build` is the production check: drafts disappear, and if every post is still a draft the Blog section disappears too.
   Until the first post file exists, `npm run build` may warn that no blog files matched. That warning is expected: the build still succeeds, and the site has no Blog section.
6. Set `draft` to `false` when the post should be public. Or delete the `draft` line; missing means published.
7. Commit and push to `main`.
   Editing on github.com does the same thing: add or edit `src/content/blog/my-post.md`, then commit the change directly to the `main` branch.
8. The workflow in `.github/workflows/deploy.yml` runs on every push to `main`. It builds the site and GitHub Pages publishes it at https://slxed.github.io. The new card is the newest post by `date`, and Read More opens the post page.

Posts are listed newest first. To take a post back down, set `draft: true` and push, or delete the file and push.

## Still to add yourself

The Resume button points at `/William_Day_Resume.pdf`. The latest resume file includes a phone number and Evansville, WI 53536, so it is not in this repo. Save a public copy without the phone number as `public/William_Day_Resume.pdf`. Leave the home location off that file too if you do not want it public. Do not commit the current PDF.

Headshot: save a photo as `public/headshot.jpg` (`.png` or `.webp` also work). Until that file exists, the hero shows a plain “WD” circle.

Project screenshots are optional. Drop a file in `public/projects/` and the card picks it up. Until then the card shows a plain color panel.

- `public/projects/crypto-diversification.png`
- `public/projects/wi-school-spending.png`
- `public/projects/ai-data-cleaner.png`

`.jpg`, `.jpeg`, and `.webp` work with the same names. The Wisconsin map in `Slxed/wi-school-spending` (`map/wi_spending_vs_graduation.png`) is one you already have.

Accent color is two values at the top of `src/styles/global.css`: `--color-primary` and `--color-primary-dark`. Comment the active line and uncomment deep blue, map teal, or Badger red.

## Currently line

The line under the name on the home page comes from `currently` in `src/site.ts`. Edit that one string when the role changes. It is the only place that sentence is stored.
