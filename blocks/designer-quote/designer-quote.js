/**
 * designer-quote — Designer/expert quote section
 *
 * Authoring rows (positional):
 *   1. Quote text (<blockquote> or <p>)
 *   2. Attribution text (<cite> or <p>)
 */
export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const container = document.createElement('div');
  container.className = 'quote-container';

  // Row 0: quote
  const quoteCell = rows[0]?.firstElementChild;
  if (quoteCell) {
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = quoteCell.textContent.trim();
    container.append(blockquote);
  }

  // Row 1: attribution
  const attrCell = rows[1]?.firstElementChild;
  if (attrCell) {
    const cite = document.createElement('cite');
    cite.textContent = attrCell.textContent.trim();
    container.append(cite);
  }

  block.replaceChildren(container);
}
