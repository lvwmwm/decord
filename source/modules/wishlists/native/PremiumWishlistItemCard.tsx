// Module ID: 9746
// Function ID: 75837
// Name: PremiumWishlistItemCard
// Dependencies: []
// Exports: default

// Module 9746 (PremiumWishlistItemCard)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(size) {
  let sku;
  let source;
  size = size.size;
  const arg1 = size;
  let obj = {};
  ({ sku, source } = size);
  Object.setPrototypeOf(null);
  const merged = Object.assign(size, obj);
  const items = [size];
  const callback = React.useCallback(() => callback(size(closure_2[2]).PremiumSKUPreview, { size }), items);
  obj = { accessibilityLabel: sku.name, renderPreview: callback, source, isOwned: false, size };
  const merged1 = Object.assign(merged);
  return jsx(importDefault(dependencyMap[3]), obj);
};
