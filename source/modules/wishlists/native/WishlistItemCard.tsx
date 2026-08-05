// Module ID: 9991
// Function ID: 9992
// Name: WishlistItemCard
// Dependencies: [19, 676, 21, 7995, 9992, 9994, 9995, 2]
// Exports: default

// Module 9991 (WishlistItemCard)
import "noop";
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
  const merged = Object.assign(arg0, Object.create(null));
  require(7995) /* apexExperiment */;
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    let obj = { sku: null, isOwned: null, source: null, wishlistOwnerId: null };
    obj[0] = sku;
    obj[1] = isOwned;
    obj[2] = source;
    obj[3] = wishlistOwnerId;
    const merged1 = Object.assign(merged);
    return jsx(importDefault(9992), { sku: null, isOwned: null, source: null, wishlistOwnerId: null });
  } else if (tmp5.PREMIUM === productLine) {
    obj = { sku: null, source: null };
    obj[0] = sku;
    obj[1] = source;
    const merged2 = Object.assign(merged);
    return jsx(importDefault(9994), { sku: null, source: null });
  } else if (tmp5.SOCIAL_LAYER_GAME_ITEM === productLine) {
    let tmp6 = null;
    if (tmp4) {
      obj = { sku: null, isOwned: null, source: null, wishlistOwnerId: null };
      obj[0] = sku;
      obj[1] = isOwned;
      obj[2] = source;
      obj[3] = wishlistOwnerId;
      const merged3 = Object.assign(merged);
      tmp6 = jsx(importDefault(9995), { sku: null, isOwned: null, source: null, wishlistOwnerId: null });
      const tmp9 = importDefault(9995);
    }
    return tmp6;
  } else {
    return null;
  }
};
