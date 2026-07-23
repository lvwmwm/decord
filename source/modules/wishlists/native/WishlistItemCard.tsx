// Module ID: 9751
// Function ID: 75871
// Name: WishlistItemCard
// Dependencies: [31, 653, 33, 7791, 9752, 9754, 9755, 2]
// Exports: default

// Module 9751 (WishlistItemCard)
import "result";
import { SKUProductLines } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/wishlists/native/WishlistItemCard.tsx");

export default function WishlistItemCard(arg0) {
  let isOwned;
  let sku;
  let source;
  let wishlistOwnerId;
  ({ sku, isOwned, source, wishlistOwnerId } = arg0);
  let obj = { sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  require(7791) /* apexExperiment */;
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    obj = { sku, isOwned, source, wishlistOwnerId };
    const merged1 = Object.assign(merged);
    return jsx(importDefault(9752), { sku, isOwned, source, wishlistOwnerId });
  } else if (SKUProductLines.PREMIUM === productLine) {
    obj = { sku, source };
    const merged2 = Object.assign(merged);
    return jsx(importDefault(9754), { sku, source });
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    let tmp6 = null;
    if (tmp4) {
      const obj1 = { sku, isOwned, source, wishlistOwnerId };
      const merged3 = Object.assign(merged);
      tmp6 = jsx(importDefault(9755), { sku, isOwned, source, wishlistOwnerId });
      const tmp10 = importDefault(9755);
    }
    return tmp6;
  } else {
    return null;
  }
};
