/**
 * filter-bar — Product filter and sort controls
 *
 * Authoring rows (positional):
 *   1. Filter labels (comma-separated): Age, Price, Piece count, Availability, Rating
 *   2. Results count text
 */
export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const container = document.createElement('div');
  container.className = 'filter-bar-inner';

  // Row 0: Filter buttons
  const filterText = rows[0]?.textContent?.trim();
  if (filterText) {
    const left = document.createElement('div');
    left.className = 'filter-bar-left';
    filterText.split(',').forEach((f) => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.textContent = f.trim();
      const icon = document.createElement('span');
      icon.className = 'filter-icon';
      icon.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>';
      btn.append(icon);
      left.append(btn);
    });
    container.append(left);
  }

  // Row 1: results and sort
  const resultsText = rows[1]?.textContent?.trim();
  const right = document.createElement('div');
  right.className = 'filter-bar-right';
  if (resultsText) {
    const count = document.createElement('span');
    count.className = 'results-count';
    count.textContent = resultsText;
    right.append(count);
  }
  const sort = document.createElement('select');
  sort.className = 'sort-select';
  ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Most popular'].forEach((opt) => {
    const option = document.createElement('option');
    option.textContent = `Sort by: ${opt}`;
    sort.append(option);
  });
  right.append(sort);
  container.append(right);

  block.replaceChildren(container);
}
