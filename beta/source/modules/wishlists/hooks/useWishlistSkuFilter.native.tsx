// Module ID: 10260
// Function ID: 10261
// Name: useWishlistSkuFilter
// Dependencies: [19, 6648, 1074, 8257, 6652, 2]
// Exports: useWishlistSkuFilter

// Module 10260 (useWishlistSkuFilter)
import Constants from "Constants" /* 1074 */;
import WishlistRecommendationRecord from "WishlistRecommendationRecord" /* 6648 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = WishlistRecommendationRecord.WishlistRecommendationReason;
const SKUProductLines = Constants.SKUProductLines;
let result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistSkuFilter.native.tsx");

export const useWishlistSkuFilter = function useWishlistSkuFilter(wishlistAndRecommendations) {
  let items1;
  let items2;
  wishlistAndRecommendations = wishlistAndRecommendations.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistAndRecommendations.skusToUserAndReason;
  const userId = wishlistAndRecommendations.userId;
  const numItems = wishlistAndRecommendations.numItems;
  const items = [wishlistAndRecommendations];
  const memo = userId.useMemo(() => wishlistAndRecommendations.filter((productLine) => {
    const GIFTABLE_PRODUCT_LINES = wishlistAndRecommendations(skusToUserAndReason[3]).GIFTABLE_PRODUCT_LINES;
    let hasItem = GIFTABLE_PRODUCT_LINES.has(productLine.productLine);
    const tmp = wishlistAndRecommendations;
    const tmp2 = skusToUserAndReason;
    if (hasItem) {
      let result = productLine.productLine !== constants.SOCIAL_LAYER_GAME_ITEM;
      if (!result) {
        const tmpResult = tmp(tmp2[4]);
        result = tmpResult.isSlayerSkuAvailableOnThisPlatform(productLine);
      }
      hasItem = result;
    }
    return hasItem;
  }), items);
  const obj = { totalUnownedWishlistItemCount: userId.useMemo(() => memo.filter((item) => null != skusToUserAndReason[item.id] && tmp[item.id][userId] === numItems.WISHLIST).length, items1), slicedWishlistAndRecommendations: userId.useMemo(() => memo.slice(0, numItems), items2) };
  items1 = [memo, userId, skusToUserAndReason];
  items2 = [memo, numItems];
  return obj;
};
