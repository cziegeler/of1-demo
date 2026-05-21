/**
 * feature-hotspots — Grid of feature cards with icons
 *
 * Authoring rows (positional):
 *   1. <h2> — section heading
 *   2..N. Feature rows: title cell | description cell
 */
export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const container = document.createElement('div');
  container.className = 'features-container';

  // Row 0: heading
  const heading = rows[0]?.querySelector('h2, h3');
  if (heading) {
    const header = document.createElement('div');
    header.className = 'features-header';
    header.append(heading.cloneNode(true));
    container.append(header);
  }

  // Feature cards grid
  const grid = document.createElement('div');
  grid.className = 'features-grid';

  for (let i = 1; i < rows.length; i++) {
    const cells = [...rows[i].children];
    const card = document.createElement('div');
    card.className = 'feature-card';

    const titleCell = cells[0];
    if (titleCell) {
      const h = document.createElement('h3');
      h.textContent = titleCell.textContent.trim();
      card.append(h);
    }

    const descCell = cells[1];
    if (descCell) {
      const p = document.createElement('p');
      p.textContent = descCell.textContent.trim();
      card.append(p);
    }

    grid.append(card);
  }

  container.append(grid);
  block.replaceChildren(container);
}
