# Atrium — a Studio starter

A three-page business site with a **split hero and no video at all**. Not a
finished template you recolour — a professional structure you make yours, and
can defend every choice in.

That difference is the point. A team handed a finished site rearranges it. A
team handed a real structure builds one.

```
index.html      hero (split) · proof · services · numbers · case study · FAQ · call to action
services.html   three services told properly, and the process
contact.html    a contact form built properly, plus the other ways to reach you
styles.css      your palette, your type, and the CSS mesh
```

## Start here

1. When VS Code offers to install this folder's recommended extensions, say
   yes. They are **Live Server**, which runs the site, and **Live Share**, which
   is how you show it to a teammate or your teacher when it misbehaves — click
   **Live Share** in the status bar, paste the link it copies into Google Chat,
   and go back to work.
2. Open `index.html` with **Live Server** — the **Go Live** button in the status
   bar. Not by double-clicking: see Unit 4 for why `file://` is not a website.
3. Change `data-theme="corporate"` on the `<html>` tag — **in all three pages**.
   Do this first. Try `winter`, `nord`, `emerald`, `lofi`, `business`, `garden`,
   `pastel`. All 35 are at
   [daisyui.com/docs/themes](https://daisyui.com/docs/themes/).
4. Replace the words. Every one of them.
5. Commit as you go. Push at least once a session — a commit is local until you
   push it.

## The shapes are CSS, and that is worth understanding

There is no photograph in this starter. The two big shapes — beside the headline
and beside the case study — are `.mesh` in `styles.css`: three radial gradients
over a linear one, in **your theme's own colours**. So they restyle when you
change the theme, they weigh nothing, and they never 404.

Move the percentages around and watch what happens. It is the fastest way to
understand what a radial gradient's arguments actually mean, and it is the whole
trick behind a lot of expensive-looking pages.

Replacing one with a real photograph is a fine decision — but then it is not
decorative any more, so it needs real `alt` text and a credit line.

## Things that will bite you

- **The three pages must match.** Theme, nav, footer, palette. A site that
  restyles itself between clicks reads as broken. This is the real cost of
  plain HTML, and Unit 8's build step is the fix.
- **Deleting structure to "simplify".** `card-body` inside `card`, the hidden
  `<input>` inside `collapse` — these look like extra wrappers and are not. The
  FAQ opens and closes with **no JavaScript** because of that checkbox; delete
  it and the FAQ stops working.
- **The asymmetric split.** The hero is 7 columns to 5, not 6 and 6, because a
  50/50 split of unequal things looks accidental. If you even it up, look at it
  honestly afterwards.
- **A "trusted by" row of grey rectangles fools no one.** If you do not have
  real client names, delete that section rather than faking it.
- **The sticky navbar covering your anchors.** Handled by `scroll-margin-top` in
  `styles.css`. Change the navbar's height, change that number.

## Check your own work before you hand it in

Tick this yourself first — auditing a page against a written spec is a graded
skill in its own right (`WD3.B`), and it is much better to find these than to
have them found.

- [ ] Every placeholder is gone. Search all three files for `Your`, `00`, `20XX`,
      `Client` and `______`.
- [ ] Every section is the element it should be — `nav`, `header`, `main`,
      `footer`, `article`, `address` — not a `div` wearing a class.
- [ ] The headings outline each page. Read `h1`, `h2`, `h3` alone, in order: one
      `h1` per page, no levels skipped.
- [ ] Every form field has a `<label for>` pointing at its `id`. A placeholder
      is not a label; it disappears exactly when it is needed.
- [ ] One column on a phone, more on wider screens. Check at 380px, 768px and
      full width. Nothing scrolls sideways at 380px.
- [ ] There is **one** obvious call to action per page, and its label says what
      happens. Not "Click here".
- [ ] Your palette is recorded as a comment block at the top of `styles.css`,
      with a mood sentence and a job for each colour.
- [ ] Two type faces at most: one for headings, one for body.
- [ ] Body text against its background is at least **4.5:1**. Check it — do not
      guess.
- [ ] Every number on the page is one you can defend. A made-up statistic on a
      real business site is a liability, not a design element.
- [ ] Every image has `alt` text that says what the image is FOR. Decorative
      images take an empty `alt=""`, and the meshes are already `aria-hidden`.
- [ ] Every image has its creator, source and licence in the footer. **If you
      cannot write that line, you are not allowed to use it.**
- [ ] If you used AI to generate any part of this, say so and say which part.
- [ ] It works from a fresh clone — no absolute paths to your own disk.
- [ ] It is **pushed**.

## Credits

Component classes are [daisyUI](https://daisyui.com/) by Pouya Saadeghi (MIT),
on [Tailwind CSS](https://tailwindcss.com/) (MIT). Both load from a CDN via the
three tags in each file's `<head>`.

Nothing else here is borrowed: the shapes are CSS and the icons were drawn for
this starter. That changes the moment you add a photograph, and the footer is
where the credit goes.

Everything here was written for this course, MIT licensed. See `LICENSE`.
