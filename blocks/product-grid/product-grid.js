/**
 * product-grid — Responsive grid of product cards
 *
 * Authoring rows (positional, repeating):
 *   Each row = one product card with cells:
 *     1. <picture>/<img> — product image
 *     2. Product info text: name, price, meta (age, pieces), badge
 */
export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const grid = document.createElement('div');
  grid.className = 'product-grid-container';

  rows.forEach((row) => {
    const cells = [...row.children];
    const card = document.createElement('div');
    card.className = 'product-card';

    // Cell 0: image
    const imgCell = cells[0];
    if (imgCell) {
      const imgWrap = document.createElement('div');
      imgWrap.className = 'product-card-image';
      const img = imgCell.querySelector('picture, img');
      if (img) imgWrap.append(img.cloneNode(true));
      card.append(imgWrap);
    }

    // Cell 1: product info
    const infoCell = cells[1];
    if (infoCell) {
      const info = document.createElement('div');
      info.className = 'product-card-info';
      [...infoCell.childNodes].forEach((n) => info.append(n.cloneNode(true)));
      card.append(info);
    }

    grid.append(card);
  });

  block.replaceChildren(grid);
}
