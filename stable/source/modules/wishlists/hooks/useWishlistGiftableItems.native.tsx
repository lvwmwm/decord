// Module ID: 9490
// Function ID: 9491
// Name: useWishlistGiftableItems
// Dependencies: [19, 1072, 2]
// Exports: useWishlistGiftableItems

// Module 9490 (useWishlistGiftableItems)
import Constants from "Constants" /* 1072 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let items = [, , ];
({ COLLECTIBLES: arr[0], PREMIUM: arr[1], SOCIAL_LAYER_GAME_ITEM: arr[2] } = Constants.SKUProductLines);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistGiftableItems.native.tsx");

export const GIFTABLE_PRODUCT_LINES = set;
export function useWishlistGiftableItems(wishlist) {
  react = wishlist;
  let items = [wishlist];
  return react.useMemo(() => {
    let found;
    if (wishlist != null) {
      const items = wishlist.items;
      found = items.filter((skuProductLine) => {
        const tmp = set.has(skuProductLine.skuProductLine) && !skuProductLine.isOwned;
        return tmp;
      });
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items);
}
