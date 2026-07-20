// Module ID: 9719
// Function ID: 75607
// Name: useWishlistSkuFilter
// Dependencies: []
// Exports: useWishlistSkuFilter

// Module 9719 (useWishlistSkuFilter)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).WishlistRecommendationReason;
const SKUProductLines = arg1(dependencyMap[2]).SKUProductLines;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/wishlists/hooks/useWishlistSkuFilter.native.tsx");

export const useWishlistSkuFilter = function useWishlistSkuFilter(wishlistAndRecommendations) {
  wishlistAndRecommendations = wishlistAndRecommendations.wishlistAndRecommendations;
  const arg1 = wishlistAndRecommendations;
  const skusToUserAndReason = wishlistAndRecommendations.skusToUserAndReason;
  const dependencyMap = skusToUserAndReason;
  const userId = wishlistAndRecommendations.userId;
  const React = userId;
  const numItems = wishlistAndRecommendations.numItems;
  let closure_3 = numItems;
  let obj = arg1(dependencyMap[3]);
  const isEligibleForSocialLayerStorefrontMobilePurchasing = obj.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "use_wishlist_sku_filter" });
  const SKUProductLines = isEligibleForSocialLayerStorefrontMobilePurchasing;
  const items = [wishlistAndRecommendations, isEligibleForSocialLayerStorefrontMobilePurchasing];
  const memo = React.useMemo(() => wishlistAndRecommendations.filter((productLine) => {
    const GIFTABLE_PRODUCT_LINES = callback(closure_1[4]).GIFTABLE_PRODUCT_LINES;
    const tmp = !GIFTABLE_PRODUCT_LINES.has(productLine.productLine);
    let tmp2 = !tmp;
    if (!tmp) {
      let tmp4 = productLine.productLine !== constants.SOCIAL_LAYER_GAME_ITEM;
      if (!tmp4) {
        let result = constants;
        if (constants) {
          result = callback(closure_1[5]).isSlayerSkuAvailableOnThisPlatform(productLine);
          const obj = callback(closure_1[5]);
        }
        tmp4 = result;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }), items);
  obj = {
    totalUnownedWishlistItemCount: React.useMemo(() => memo.filter((arg0) => {
      let tmp = null != closure_1[arg0.id];
      if (tmp) {
        tmp = closure_1[arg0.id][closure_2] === constants.WISHLIST;
      }
      return tmp;
    }).length, items1),
    slicedWishlistAndRecommendations: React.useMemo(() => memo.slice(0, numItems), items2)
  };
  const items1 = [memo, userId, skusToUserAndReason];
  const items2 = [memo, numItems];
  return obj;
};
