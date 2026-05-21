/**
 * breadcrumbs — Site breadcrumb navigation
 *
 * Authoring rows (positional):
 *   1. Links as pipe-separated anchors: Home | Shop | Technic | Current Page
 */
export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const nav = document.createElement('nav');
  nav.className = 'breadcrumb-nav';
  nav.setAttribute('aria-label', 'Breadcrumb');

  const ol = document.createElement('ol');
  ol.className = 'breadcrumb-list';

  const cell = rows[0]?.firstElementChild;
  if (cell) {
    const links = cell.querySelectorAll('a');
    const textNodes = cell.textContent.split('/').map((t) => t.trim()).filter(Boolean);

    if (links.length > 0) {
      links.forEach((link, i) => {
        const li = document.createElement('li');
        li.className = 'breadcrumb-item';
        li.append(link.cloneNode(true));
        ol.append(li);
      });
      // Last item (current page) - check for non-linked text
      const allText = cell.textContent.trim();
      const lastSegment = allText.split('/').pop()?.trim();
      const lastLink = links[links.length - 1];
      if (lastSegment && lastSegment !== lastLink?.textContent.trim()) {
        const li = document.createElement('li');
        li.className = 'breadcrumb-item current';
        li.textContent = lastSegment;
        ol.append(li);
      }
    } else {
      // Plain text breadcrumbs
      textNodes.forEach((text, i) => {
        const li = document.createElement('li');
        li.className = i === textNodes.length - 1 ? 'breadcrumb-item current' : 'breadcrumb-item';
        li.textContent = text;
        ol.append(li);
      });
    }
  }

  nav.append(ol);
  block.replaceChildren(nav);
}
