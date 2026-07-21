// Module ID: 8685
// Function ID: 68824
// Name: set
// Dependencies: []
// Exports: useWishlistGiftableItems

// Module 8685 (set)
let closure_0 = importAll(dependencyMap[0]);
const items = [, , ];
({ COLLECTIBLES: arr[0], PREMIUM: arr[1], SOCIAL_LAYER_GAME_ITEM: arr[2] } = arg1(dependencyMap[1]).SKUProductLines);
const set = new Set(items);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/wishlists/hooks/useWishlistGiftableItems.native.tsx");

export const GIFTABLE_PRODUCT_LINES = set;
export const useWishlistGiftableItems = function useWishlistGiftableItems(wishlist) {
  const React = wishlist;
  const items = [wishlist];
  return React.useMemo(() => {
    let found;
    if (null != arg0) {
      const items = arg0.items;
      found = items.filter((skuProductLine) => set.has(skuProductLine.skuProductLine) && !skuProductLine.isOwned);
    }
    if (null == found) {
      found = [];
    }
    return found;
  }, items);
};
