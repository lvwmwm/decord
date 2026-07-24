// Module ID: 9785
// Function ID: 76083
// Name: WishlistItemCard
// Dependencies: [31, 653, 33, 7882, 9786, 9788, 9789, 2]
// Exports: default

// Module 9785 (WishlistItemCard)
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
  require(7882) /* apexExperiment */;
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    obj = { sku, isOwned, source, wishlistOwnerId };
    const merged1 = Object.assign(merged);
    return jsx(importDefault(9786), { sku, isOwned, source, wishlistOwnerId });
  } else if (SKUProductLines.PREMIUM === productLine) {
    obj = { sku, source };
    const merged2 = Object.assign(merged);
    return jsx(importDefault(9788), { sku, source });
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    let tmp6 = null;
    if (tmp4) {
      const obj1 = { sku, isOwned, source, wishlistOwnerId };
      const merged3 = Object.assign(merged);
      tmp6 = jsx(importDefault(9789), { sku, isOwned, source, wishlistOwnerId });
      const tmp10 = importDefault(9789);
    }
    return tmp6;
  } else {
    return null;
  }
};
