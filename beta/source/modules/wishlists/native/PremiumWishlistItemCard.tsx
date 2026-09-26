// Module ID: 11334
// Function ID: 11335
// Name: PremiumWishlistItemCard
// Dependencies: [19, 21, 9084, 9085, 2]
// Exports: default

// Module 11334 (PremiumWishlistItemCard)
import SKUPreview from "SKUPreview" /* 9084 */;
import WishlistItemCardBaseDefault from "WishlistItemCardBase" /* 9085 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(size) {
  size = size.size;
  ({ sku, source } = size);
  const merged = Object.assign(size, Object.assign({ sku: 0, source: 0, size: 0 }));
  const items = [size];
  const callback = noop.useCallback(() => jsx(SKUPreview.PremiumSKUPreview, { size }), items);
  const merged1 = Object.assign(merged);
  return jsx(WishlistItemCardBaseDefault, { accessibilityLabel: sku.name, renderPreview: callback, source, size });
};
