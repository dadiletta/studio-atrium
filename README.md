# Atrium — a Studio starter

A three-page business site with a **split hero and no video at all**, pricing
with a monthly/yearly switch, and a contact form built properly. Not a finished
template you recolour — a professional structure you make yours, and can defend
every choice in.

**See it running: <https://ladiletta.github.io/studio-atrium/>** — that page is
built from this branch, so it is exactly what you get when you copy it.

That difference is the point. A team handed a finished site rearranges it. A
team handed a real structure builds one.

```
index.html      hero (split) · proof · services · numbers · case study · testimonials · FAQ · call to action
services.html   three services told properly, the process, and pricing with a monthly/yearly switch
contact.html    a contact form built properly, the other ways to reach you, and a map
styles.css      your palette, your type, the CSS mesh, the pricing switch
js/site.js      the phone menu, the footer year, and the demo forms
img/            favicon.svg, the icon in the browser tab
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

## What is in it

- **A pricing switch with no JavaScript.** The monthly/yearly toggle is a
  checkbox, and two `:has()` rules in `styles.css` swap which price shows.
- **A FAQ with no JavaScript.** Each question is a `<details>` element, which
  opens and closes on its own and works with a keyboard.
- **A phone menu that needs no JavaScript** either — another `<details>`.
  `js/site.js` only adds "close when I tap away".
- **One typeface from Google Fonts**, Plus Jakarta Sans, in several weights.
- **Forms that check themselves.** `required` and `type="email"` make the
  browser check before anything is sent, and daisyUI's `validator` class turns a
  field red only after somebody has touched it.
- **A map** on the Contact page, from OpenStreetMap: free, no account, no key.
- **A skip link**, the first thing a keyboard user reaches. Press Tab on any
  page to see it.

## The shapes are CSS, and that is worth understanding

There is no photograph in this starter. The big shapes — beside the headline,
the case study and each service — are `.mesh` in `styles.css`: three radial
gradients over a linear one, in **your theme's own colours**. So they restyle
when you change the theme, they weigh nothing, and they never 404.

Move the percentages around and watch what happens. It is the fastest way to
understand what a radial gradient's arguments actually mean, and it is the whole
trick behind a lot of expensive-looking pages.

Replacing one with a real photograph is a fine decision — but then it is not
decorative any more, so it needs real `alt` text and a credit line.

## Forms that go nowhere, on purpose

The contact form and the footer signup are marked `data-demo`. Press submit and
`js/site.js` shows a thank-you message instead of sending anything, because a
form needs a service to send to — Formspree, Netlify Forms, a Google Form — and
choosing one is your team's decision. To make one real: give the `<form>` an
`action`, delete `data-demo`, and test it with your own email.

## Things that will bite you

- **The three pages must match.** Theme, nav, footer, font. A site that
  restyles itself between clicks reads as broken. This is the real cost of plain
  HTML, and Unit 8's build step is the fix.
- **The nav is in there twice** on every page — a row of links for wide screens
  and the phone dropdown. Add a page, add it to both, on all three pages.
- **A built-in theme is not a guarantee.** `corporate`'s own blue and its own
  green both fail the 4.5:1 floor with white text on them; `styles.css`
  overrides both, and says by how much. Whatever theme you pick, measure it.
- **Deleting structure to "simplify".** `card-body` inside `card`,
  `collapse-title` inside `collapse` — these look like extra wrappers and are
  not. Remove one and the component stops laying out.
- **The asymmetric split.** The hero is 7 columns to 5, not 6 and 6, because a
  50/50 split of unequal things looks accidental. If you even it up, look at it
  honestly afterwards.
- **A "trusted by" row of grey rectangles fools no one.** If you do not have
  real client names, delete that section rather than faking it.

## Check your own work before you hand it in

Tick this yourself first — auditing a page against a written spec is a graded
skill in its own right (`WD3.B`), and it is much better to find these than to
have them found.

- [ ] Every placeholder is gone. Search all three files for `Your`, `00`, `20XX`,
      `Client`, `Their name` and `______`.
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
- [ ] Every number on the page is one you can defend. A made-up statistic on a
      real business site is a liability, not a design element.
- [ ] Every price is real, or the pricing section is gone.
- [ ] Body text against its background is at least **4.5:1**. Check it — do not
      guess.
- [ ] Every image has `alt` text that says what the image is FOR. Decorative
      images take an empty `alt=""`, and the meshes are already `aria-hidden`.
- [ ] Every image has its creator, source and licence in the footer. **If you
      cannot write that line, you are not allowed to use it.**
- [ ] Every form either sends somewhere real, or says plainly that it does not.
- [ ] If you used AI to generate any part of this, say so and say which part.
- [ ] It works from a fresh clone — no absolute paths to your own disk.
- [ ] It is **pushed**.

## Credits

Component classes are [daisyUI](https://daisyui.com/) by Pouya Saadeghi (MIT),
on [Tailwind CSS](https://tailwindcss.com/) (MIT). Both load from a CDN via the
three tags in each file's `<head>`. Icons are from [Lucide](https://lucide.dev/)
(ISC), copied into the pages as inline SVG. Plus Jakarta Sans is from
[Google Fonts](https://fonts.google.com/), under the SIL Open Font License. The
map is © OpenStreetMap contributors.

Nothing else here is borrowed: the shapes are CSS and the logo was drawn for
this starter. That changes the moment you add a photograph, and the footer is
where the credit goes.

Everything here was written for this course, MIT licensed. See `LICENSE`.
