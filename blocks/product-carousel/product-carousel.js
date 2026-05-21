/**
 * product-carousel — Horizontal scrolling product cards with tab navigation
 *
 * Authoring rows (positional):
 *   1. <h2> — section heading
 *   2. Tabs text (comma-separated category names)
 *   3..N. Product card rows: image cell | info cell (name, price, meta)
 */
export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const container = document.createElement('div');
  container.className = 'carousel-container';

  // Row 0: heading
  const heading = rows[0]?.querySelector('h2, h3');
  if (heading) {
    const header = document.createElement('div');
    header.className = 'carousel-header';
    header.append(heading.cloneNode(true));
    container.append(header);
  }

  // Row 1: tabs
  const tabText = rows[1]?.textContent?.trim();
  if (tabText) {
    const tabs = document.createElement('div');
    tabs.className = 'carousel-tabs';
    tabText.split(',').forEach((t, i) => {
      const btn = document.createElement('button');
      btn.className = i === 0 ? 'tab active' : 'tab';
      btn.textContent = t.trim();
      tabs.append(btn);
    });
    container.append(tabs);
  }

  // Remaining rows: product cards
  const track = document.createElement('div');
  track.className = 'carousel-track';

  for (let i = 2; i < rows.length; i++) {
    const cells = [...rows[i].children];
    const card = document.createElement('div');
    card.className = 'carousel-card';

    const imgCell = cells[0];
    if (imgCell) {
      const imgWrap = document.createElement('div');
      imgWrap.className = 'carousel-card-image';
      const img = imgCell.querySelector('picture, img');
      if (img) imgWrap.append(img.cloneNode(true));
      card.append(imgWrap);
    }

    const infoCell = cells[1];
    if (infoCell) {
      const info = document.createElement('div');
      info.className = 'carousel-card-info';
      [...infoCell.childNodes].forEach((n) => info.append(n.cloneNode(true)));
      card.append(info);
    }

    track.append(card);
  }

  container.append(track);
  block.replaceChildren(container);
}
