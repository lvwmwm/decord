// Module ID: 9754
// Function ID: 75891
// Name: PremiumWishlistItemCard
// Dependencies: [31, 33, 8672, 8673, 2]
// Exports: default

// Module 9754 (PremiumWishlistItemCard)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("resolveSize").fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(size) {
  let sku;
  let source;
  size = size.size;
  let obj = { sku: 0, source: 0, size: 0 };
  ({ sku, source } = size);
  Object.setPrototypeOf(null);
  const merged = Object.assign(size, obj);
  const items = [size];
  const callback = React.useCallback(() => outer1_4(size(outer1_2[2]).PremiumSKUPreview, { size }), items);
  obj = { accessibilityLabel: sku.name, renderPreview: callback, source, isOwned: false, size };
  const merged1 = Object.assign(merged);
  return jsx(importDefault(8673), { accessibilityLabel: sku.name, renderPreview: callback, source, isOwned: false, size });
};
