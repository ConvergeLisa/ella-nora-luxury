## Problem
The `text-gold-shine` gradient currently runs from very pale champagne (`oklch(0.93 0.04 88)`) through to another pale stop (`oklch(0.88 0.05 86)`). On the cream background those stops nearly disappear — that's why "Ella Nora", "redefined", "100%", "5★", "1:1" all have ghosted letters.

We want to keep the shimmer, just lift the floor so every stop stays legible on cream.

## Change
Single edit in `src/styles.css` — re-balance `--gradient-gold` so no stop is lighter than the mid-champagne, and the deep antique gold anchors both ends. Same hues, lower lightness range, slightly higher chroma in the middle for a richer metallic feel.

```
--gradient-gold: linear-gradient(135deg,
  oklch(0.72 0.09 80)  0%,    /* warm champagne — readable */
  oklch(0.62 0.085 72) 35%,   /* antique gold core */
  oklch(0.55 0.08 65)  65%,   /* deeper bronze for contrast */
  oklch(0.70 0.09 82)  100%   /* champagne return */
);
```

Lightness now sits in the 0.55–0.72 band (was 0.68–0.93), so every letter reads against the cream `oklch(0.985 …)` background while still shimmering between champagne and bronze.

`--gold`, `--gold-deep`, `--gold-soft` and the soft backplates stay exactly as they are — only the text gradient changes, so buttons, borders, and tinted panels keep their current light, luxurious feel.

## Out of scope
No component, layout, or copy changes.