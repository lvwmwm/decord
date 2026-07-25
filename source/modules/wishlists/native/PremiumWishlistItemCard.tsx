// Module ID: 9712
// Function ID: 75698
// Name: PremiumWishlistItemCard
// Dependencies: [31, 33, 8601, 8602, 2]
// Exports: default

// Module 9712 (PremiumWishlistItemCard)
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
  return jsx(importDefault(8602), { accessibilityLabel: sku.name, renderPreview: callback, source, isOwned: false, size });
};
