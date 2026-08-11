// Module ID: 10113
// Function ID: 10114
// Name: PremiumWishlistItemCard
// Dependencies: [19, 21, 9360, 9361, 2]
// Exports: default

// Module 10113 (PremiumWishlistItemCard)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("CollectiblesPreview").fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(size) {
  let sku;
  let source;
  size = size.size;
  ({ sku, source } = size);
  const merged = Object.assign(size, Object.create(null));
  const items = [size];
  const callback = React.useCallback(() => outer1_4(size(outer1_2[2]).PremiumSKUPreview, { size }), items);
  const merged1 = Object.assign(merged);
  return jsx(importDefault(9361), { accessibilityLabel: sku.name, renderPreview: callback, source, size });
};
