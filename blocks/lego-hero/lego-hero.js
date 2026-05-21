/**
 * lego-hero — Full-width hero banner with background image and text overlay
 *
 * Authoring rows (positional):
 *   1. <picture> or <img> — hero background image
 *   2. <h1> or <h2> — headline
 *   3. <p> — subheadline/description
 *   4. CTA link — wrap in <strong> for primary button
 */
export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const container = document.createElement('div');
  container.className = 'lego-hero-container';

  // Row 0: image
  const imgCell = rows[0]?.querySelector('picture, img');
  if (imgCell) {
    const bg = document.createElement('div');
    bg.className = 'lego-hero-bg';
    bg.append(imgCell.cloneNode(true));
    container.append(bg);
  }

  // Overlay content
  const overlay = document.createElement('div');
  overlay.className = 'lego-hero-overlay';

  // Row 1: headline
  const headline = rows[1]?.querySelector('h1, h2, h3');
  if (headline) overlay.append(headline.cloneNode(true));

  // Row 2: description
  const desc = rows[2]?.querySelector('p');
  if (desc) overlay.append(desc.cloneNode(true));

  // Row 3: CTA
  const ctaCell = rows[3]?.firstElementChild;
  if (ctaCell && ctaCell.querySelector('a')) {
    const actions = document.createElement('div');
    actions.className = 'lego-hero-actions';
    [...ctaCell.childNodes].forEach((n) => actions.append(n.cloneNode(true)));
    overlay.append(actions);
  }

  container.append(overlay);
  block.replaceChildren(container);
}
