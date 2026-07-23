// Module ID: 8693
// Function ID: 68887
// Name: set
// Dependencies: [31, 653, 2]
// Exports: useWishlistGiftableItems

// Module 8693 (set)
import result from "result";
import set from "set";

let items = [, , ];
({ COLLECTIBLES: arr[0], PREMIUM: arr[1], SOCIAL_LAYER_GAME_ITEM: arr[2] } = require("ME").SKUProductLines);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/wishlists/hooks/useWishlistGiftableItems.native.tsx");

export const GIFTABLE_PRODUCT_LINES = set;
export const useWishlistGiftableItems = function useWishlistGiftableItems(wishlist) {
  const React = wishlist;
  let items = [wishlist];
  return React.useMemo(() => {
    let found;
    if (null != wishlist) {
      const items = wishlist.items;
      found = items.filter((skuProductLine) => outer2_1.has(skuProductLine.skuProductLine) && !skuProductLine.isOwned);
    }
    if (null == found) {
      found = [];
    }
    return found;
  }, items);
};
