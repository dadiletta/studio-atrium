// Three jobs that make this a business's site: a before-and-after slider, a row
// of client names that drifts, and a light that follows the pointer across a
// card. Like js/site.js, each one is extra. Delete the attribute and the element
// sits there finished; block this file and nothing is hidden or broken.
//
// Everything is inside these braces because js/site.js already uses the name
// `calm`, and two files may not both declare it.
{
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. BEFORE AND AFTER ([data-compare]). Two photographs of the same thing from
  //    the same spot, one over the other; the "after" is cut back to show the
  //    "before" on its left. The handle is a real range input stretched over the
  //    photos, so a mouse, a finger, Tab and the arrow keys all move it. With no
  //    script the input stays hidden and the line sits halfway.
  document.querySelectorAll('[data-compare]').forEach((box) => {
    const range = box.querySelector('input[type="range"]');
    if (!range) return;
    const paint = () => {
      box.style.setProperty('--split', `${range.value}%`);
      range.setAttribute('aria-valuetext', `${range.value}% before, ${100 - range.value}% after`);
    };
    range.hidden = false;
    range.addEventListener('input', paint);
    paint();
  });

  // 2. THE MARQUEE ([data-marquee]): a row of names drifting sideways for good.
  //    It copies its own list once, so the row loops with no gap, and hides the
  //    copy from screen readers. It stops for a hover, a focus, or the pause
  //    button whose aria-controls names its id. For a reader who asks for less
  //    motion it never starts.
  document.querySelectorAll('[data-marquee]').forEach((box) => {
    const list = box.querySelector('ul');
    const pause = box.id && document.querySelector(`[data-marquee-pause][aria-controls="${box.id}"]`);
    if (!list || calm) return;
    const copy = list.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    copy.inert = true;
    list.after(copy);
    box.classList.add('is-moving');
    if (!pause) return;
    pause.hidden = false;
    pause.addEventListener('click', () => {
      const paused = pause.getAttribute('aria-pressed') !== 'true';
      pause.setAttribute('aria-pressed', String(paused));
      box.classList.toggle('is-paused', paused);
    });
  });

  // 3. THE SPOTLIGHT ([data-spotlight]): a soft light follows a mouse across a
  //    card. This only measures where the pointer is, as --x and --y; the light
  //    itself is painted in styles.css. A finger on a phone never shows it.
  document.querySelectorAll('[data-spotlight]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;
      const box = card.getBoundingClientRect();
      card.style.setProperty('--x', `${Math.round(event.clientX - box.left)}px`);
      card.style.setProperty('--y', `${Math.round(event.clientY - box.top)}px`);
    });
  });
}
