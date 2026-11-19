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

## Still to fill in on the site

These placeholders are still in `src/pages/index.astro`. They are separate from the blog:

- About section: `Info Paragraph 1` and `Info Paragraph 2`
- Each project card: `Brief description of the project, technologies used, and your role in it.`
- Each project's Live Demo and Source Code links still point at `#` (Crypto Diversification Analysis, Wisconsin Public School Spending, and AI-Assisted Querying of Cleaned Data)
- The GitHub, LinkedIn, Twitter, and Instagram icons in the hero still point at `#`
- The headshot and the three project images are still the placeholder icons
