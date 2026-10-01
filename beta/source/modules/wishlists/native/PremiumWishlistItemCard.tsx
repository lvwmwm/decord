// Module ID: 10502
// Function ID: 10503
// Name: PremiumWishlistItemCard
// Dependencies: [19, 21, 8234, 8235, 2]
// Exports: default

// Module 10502 (PremiumWishlistItemCard)
import Fragment from "Fragment" /* 21 */;
import SKUPreview from "SKUPreview" /* 8234 */;
import WishlistItemCardBaseDefault from "WishlistItemCardBase" /* 8235 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(size) {
  let sku;
  let source;
  size = size.size;
  ({ sku, source } = size);
  const merged = Object.assign(size, Object.assign({ sku: 0, source: 0, size: 0 }));
  const items = [size];
  const callback = react.useCallback(() => jsx(SKUPreview.PremiumSKUPreview, { size }), items);
  WishlistItemCardBaseDefault;
  const merged1 = Object.assign(merged);
  return <tmp3 accessibilityLabel={sku.name} renderPreview={callback} source={source} size={size} />;
};
