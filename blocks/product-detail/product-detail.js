/**
 * product-detail — PDP layout with gallery and purchase zone
 *
 * Authoring rows (positional):
 *   1. Gallery images (multiple <img> in one cell, pipe-separated)
 *   2. Product title (<h1>)
 *   3. Price and meta info
 *   4. Description text
 *   5. CTA buttons (Add to Bag, Wishlist)
 */
export default async function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const container = document.createElement('div');
  container.className = 'pdp-container';

  // Row 0: Gallery images
  const galleryCell = rows[0]?.firstElementChild;
  if (galleryCell) {
    const gallery = document.createElement('div');
    gallery.className = 'pdp-gallery';

    const images = galleryCell.querySelectorAll('img');
    const mainImg = document.createElement('div');
    mainImg.className = 'pdp-gallery-main';
    if (images[0]) {
      const img = images[0].cloneNode(true);
      mainImg.append(img);
    }
    gallery.append(mainImg);

    if (images.length > 1) {
      const thumbs = document.createElement('div');
      thumbs.className = 'pdp-gallery-thumbs';
      images.forEach((img, i) => {
        const thumb = document.createElement('button');
        thumb.className = i === 0 ? 'thumb active' : 'thumb';
        thumb.append(img.cloneNode(true));
        thumb.addEventListener('click', () => {
          mainImg.querySelector('img').src = img.src;
          gallery.querySelectorAll('.thumb').forEach((t) => t.classList.remove('active'));
          thumb.classList.add('active');
        });
        thumbs.append(thumb);
      });
      gallery.append(thumbs);
    }

    container.append(gallery);
  }

  // Purchase zone
  const purchase = document.createElement('div');
  purchase.className = 'pdp-purchase';

  // Row 1: Title
  const title = rows[1]?.querySelector('h1, h2');
  if (title) purchase.append(title.cloneNode(true));

  // Row 2: Price / meta
  const metaCell = rows[2]?.firstElementChild;
  if (metaCell) {
    const meta = document.createElement('div');
    meta.className = 'pdp-meta';
    [...metaCell.childNodes].forEach((n) => meta.append(n.cloneNode(true)));
    purchase.append(meta);
  }

  // Row 3: Description
  const descCell = rows[3]?.firstElementChild;
  if (descCell) {
    const desc = document.createElement('div');
    desc.className = 'pdp-description';
    [...descCell.childNodes].forEach((n) => desc.append(n.cloneNode(true)));
    purchase.append(desc);
  }

  // Row 4: CTAs
  const ctaCell = rows[4]?.firstElementChild;
  if (ctaCell && ctaCell.querySelector('a')) {
    const actions = document.createElement('div');
    actions.className = 'pdp-actions';
    [...ctaCell.childNodes].forEach((n) => actions.append(n.cloneNode(true)));
    purchase.append(actions);
  }

  container.append(purchase);
  block.replaceChildren(container);
}
