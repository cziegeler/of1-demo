/**
 * loyalty-cta — LEGO Insiders loyalty program CTA section
 *
 * Authoring rows (positional):
 *   1. <h2> — headline
 *   2. <p> — description
 *   3. CTA link — wrap in <strong> for primary button
 */
export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const container = document.createElement('div');
  container.className = 'loyalty-container';

  // Row 0: headline
  const heading = rows[0]?.querySelector('h2, h3');
  if (heading) container.append(heading.cloneNode(true));

  // Row 1: description
  const desc = rows[1]?.querySelector('p');
  if (desc) container.append(desc.cloneNode(true));

  // Row 2: CTA
  const ctaCell = rows[2]?.firstElementChild;
  if (ctaCell && ctaCell.querySelector('a')) {
    const actions = document.createElement('div');
    actions.className = 'loyalty-actions';
    [...ctaCell.childNodes].forEach((n) => actions.append(n.cloneNode(true)));
    container.append(actions);
  }

  block.replaceChildren(container);
}
