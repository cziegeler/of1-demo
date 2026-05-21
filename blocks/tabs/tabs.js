/**
 * tabs — Tabbed content switcher (used for quick-links style navigation)
 *
 * Authoring rows (positional):
 *   Each row = one tab: label cell | content/link cell
 */
export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const container = document.createElement('div');
  container.className = 'tabs-container';

  const tabNav = document.createElement('div');
  tabNav.className = 'tabs-nav';

  rows.forEach((row) => {
    const cells = [...row.children];
    const label = cells[0]?.textContent?.trim();
    const linkCell = cells[1];

    if (label) {
      const link = linkCell?.querySelector('a');
      if (link) {
        const tab = link.cloneNode(true);
        tab.className = 'tab-link';
        tab.textContent = label;
        tabNav.append(tab);
      } else {
        const tab = document.createElement('span');
        tab.className = 'tab-link';
        tab.textContent = label;
        tabNav.append(tab);
      }
    }
  });

  container.append(tabNav);
  block.replaceChildren(container);
}
