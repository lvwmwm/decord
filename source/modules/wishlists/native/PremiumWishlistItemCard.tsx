// Module ID: 10967
// Function ID: 10968
// Name: PremiumWishlistItemCard
// Dependencies: [19, 21, 8702, 8703, 2]
// Exports: default

// Module 10967 (PremiumWishlistItemCard)
import SourceIconDefault from "SourceIcon" /* 8703 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default function PremiumWishlistItemCard(size) {
  size = size.size;
  ({ sku, source } = size);
  const merged = Object.assign(size, Object.create(null));
  const items = [size];
  const callback = React.useCallback(() => closure_1_4(size(closure_1_2[2]).PremiumSKUPreview, { size }), items);
  const merged1 = Object.assign(merged);
  return jsx(SourceIconDefault, { accessibilityLabel: sku.name, renderPreview: callback, source, size });
};
