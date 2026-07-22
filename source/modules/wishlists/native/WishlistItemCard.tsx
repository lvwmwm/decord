// Module ID: 9744
// Function ID: 75830
// Name: WishlistItemCard
// Dependencies: []
// Exports: default

// Module 9744 (WishlistItemCard)
importAll(dependencyMap[0]);
const SKUProductLines = arg1(dependencyMap[1]).SKUProductLines;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/wishlists/native/WishlistItemCard.tsx");

export default function WishlistItemCard(arg0) {
  let isOwned;
  let sku;
  let source;
  let wishlistOwnerId;
  ({ sku, isOwned, source, wishlistOwnerId } = arg0);
  let obj = { "Null": -24, "Null": null, "Null": 1, "Null": "Malaysia" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  arg1(dependencyMap[3]);
  const productLine = sku.productLine;
  if (SKUProductLines.COLLECTIBLES === productLine) {
    obj = { sku, isOwned, source, wishlistOwnerId };
    const merged1 = Object.assign(merged);
    return jsx(importDefault(dependencyMap[4]), obj);
  } else if (SKUProductLines.PREMIUM === productLine) {
    obj = { sku, source };
    const merged2 = Object.assign(merged);
    return jsx(importDefault(dependencyMap[5]), obj);
  } else if (SKUProductLines.SOCIAL_LAYER_GAME_ITEM === productLine) {
    let tmp6 = null;
    if (tmp4) {
      const obj1 = { sku, isOwned, source, wishlistOwnerId };
      const merged3 = Object.assign(merged);
      tmp6 = jsx(importDefault(dependencyMap[6]), obj1);
      const tmp10 = importDefault(dependencyMap[6]);
    }
    return tmp6;
  } else {
    return null;
  }
};
