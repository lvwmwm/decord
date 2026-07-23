// Module ID: 9732
// Function ID: 75689
// Name: useWishlistSkuFilter
// Dependencies: [31, 5612, 653, 7791, 8693, 5615, 2]
// Exports: useWishlistSkuFilter

// Module 9732 (useWishlistSkuFilter)
import result from "result";
import { WishlistRecommendationReason as closure_3 } from "_isNativeReflectConstruct";
import { SKUProductLines } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/wishlists/hooks/useWishlistSkuFilter.native.tsx");

export const useWishlistSkuFilter = function useWishlistSkuFilter(wishlistAndRecommendations) {
  wishlistAndRecommendations = wishlistAndRecommendations.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistAndRecommendations.skusToUserAndReason;
  const userId = wishlistAndRecommendations.userId;
  const numItems = wishlistAndRecommendations.numItems;
  let obj = wishlistAndRecommendations(skusToUserAndReason[3]);
  const isEligibleForSocialLayerStorefrontMobilePurchasing = obj.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "use_wishlist_sku_filter" });
  const items = [wishlistAndRecommendations, isEligibleForSocialLayerStorefrontMobilePurchasing];
  const memo = userId.useMemo(() => wishlistAndRecommendations.filter((productLine) => {
    const GIFTABLE_PRODUCT_LINES = wishlistAndRecommendations(skusToUserAndReason[4]).GIFTABLE_PRODUCT_LINES;
    const tmp = !GIFTABLE_PRODUCT_LINES.has(productLine.productLine);
    let tmp2 = !tmp;
    if (!tmp) {
      let tmp4 = productLine.productLine !== isEligibleForSocialLayerStorefrontMobilePurchasing.SOCIAL_LAYER_GAME_ITEM;
      if (!tmp4) {
        let result = outer1_4;
        if (outer1_4) {
          result = wishlistAndRecommendations(skusToUserAndReason[5]).isSlayerSkuAvailableOnThisPlatform(productLine);
          const obj = wishlistAndRecommendations(skusToUserAndReason[5]);
        }
        tmp4 = result;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }), items);
  obj = {
    totalUnownedWishlistItemCount: userId.useMemo(() => memo.filter((arg0) => {
      let tmp = null != outer1_1[arg0.id];
      if (tmp) {
        tmp = outer1_1[arg0.id][outer1_2] === numItems.WISHLIST;
      }
      return tmp;
    }).length, items1),
    slicedWishlistAndRecommendations: userId.useMemo(() => memo.slice(0, numItems), items2)
  };
  items1 = [memo, userId, skusToUserAndReason];
  items2 = [memo, numItems];
  return obj;
};
