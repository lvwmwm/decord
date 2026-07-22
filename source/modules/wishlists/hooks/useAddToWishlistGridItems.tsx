// Module ID: 12016
// Function ID: 92863
// Name: useAddToWishlistGridItems
// Dependencies: []
// Exports: useAddToWishlistGridItems

// Module 12016 (useAddToWishlistGridItems)
let closure_2 = importAll(dependencyMap[0]);
const PremiumSubscriptionSKUs = arg1(dependencyMap[1]).PremiumSubscriptionSKUs;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/wishlists/hooks/useAddToWishlistGridItems.tsx");

export const useAddToWishlistGridItems = function useAddToWishlistGridItems(userId) {
  let maxWishlistItemsToShow;
  let numWishlistItemsToRecommend;
  const wishlist = userId.wishlist;
  const arg1 = wishlist;
  ({ numWishlistItemsToRecommend, maxWishlistItemsToShow } = userId);
  if (maxWishlistItemsToShow === undefined) {
    maxWishlistItemsToShow = numWishlistItemsToRecommend;
  }
  const dependencyMap = maxWishlistItemsToShow;
  let React;
  let PremiumSubscriptionSKUs;
  let tmp3;
  let obj = arg1(dependencyMap[2]);
  const recommendationsForSingleUser = obj.useRecommendationsForSingleUser({ userId: userId.userId, numItems: numWishlistItemsToRecommend, source: userId.source });
  const recommendations = recommendationsForSingleUser.recommendations;
  React = recommendations;
  const status = recommendationsForSingleUser.status;
  const isNitroWishlistingEnabled = arg1(dependencyMap[3]).useIsNitroWishlistingEnabled("add_to_wishlist_grid_suggested_nitro");
  const items = [wishlist];
  const memo = React.useMemo(() => {
    let mapped;
    if (null != wishlist) {
      const items = wishlist.items;
      mapped = items.map((skuId) => skuId.skuId);
    }
    if (null == mapped) {
      mapped = [];
    }
    return new Set(mapped);
  }, items);
  PremiumSubscriptionSKUs = memo;
  tmp3 = isNitroWishlistingEnabled;
  if (isNitroWishlistingEnabled) {
    tmp3 = "success" === status;
  }
  if (tmp3) {
    tmp3 = !memo.has(PremiumSubscriptionSKUs.TIER_2);
  }
  obj = {
    items: React.useMemo(() => {
      const found = recommendations.filter((id) => !set.has(id.id));
      const mapped = found.map((sku) => ({ sku, itemSource: "recommendation" }));
      if (tmp3) {
        const obj = { sku: wishlist(maxWishlistItemsToShow[4]).createNitroSuggestedSku(), itemSource: "takeover" };
        mapped.unshift(obj);
        const obj2 = wishlist(maxWishlistItemsToShow[4]);
      }
      return mapped.slice(0, maxWishlistItemsToShow);
    }, items1),
    status
  };
  const items1 = [recommendations, memo, tmp3, maxWishlistItemsToShow];
  return obj;
};
