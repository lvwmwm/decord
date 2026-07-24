// Module ID: 12157
// Function ID: 95254
// Name: useAddToWishlistGridItems
// Dependencies: [31, 1851, 9763, 12158, 12132, 2]
// Exports: useAddToWishlistGridItems

// Module 12157 (useAddToWishlistGridItems)
import result from "result";
import { PremiumSubscriptionSKUs } from "GuildFeatures";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/wishlists/hooks/useAddToWishlistGridItems.tsx");

export const useAddToWishlistGridItems = function useAddToWishlistGridItems(userId) {
  let maxWishlistItemsToShow;
  let numWishlistItemsToRecommend;
  const wishlist = userId.wishlist;
  ({ numWishlistItemsToRecommend, maxWishlistItemsToShow } = userId);
  if (maxWishlistItemsToShow === undefined) {
    maxWishlistItemsToShow = numWishlistItemsToRecommend;
  }
  let recommendations;
  let memo;
  let c4;
  let obj = wishlist(maxWishlistItemsToShow[2]);
  const recommendationsForSingleUser = obj.useRecommendationsForSingleUser({ userId: userId.userId, numItems: numWishlistItemsToRecommend, source: userId.source });
  recommendations = recommendationsForSingleUser.recommendations;
  const status = recommendationsForSingleUser.status;
  const isNitroWishlistingEnabled = wishlist(maxWishlistItemsToShow[3]).useIsNitroWishlistingEnabled("add_to_wishlist_grid_suggested_nitro");
  let items = [wishlist];
  memo = recommendations.useMemo(() => {
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
  let tmp3 = isNitroWishlistingEnabled;
  if (isNitroWishlistingEnabled) {
    tmp3 = "success" === status;
  }
  if (tmp3) {
    tmp3 = !memo.has(memo.TIER_2);
  }
  c4 = tmp3;
  obj = {
    items: recommendations.useMemo(() => {
      const found = recommendations.filter((id) => !outer1_3.has(id.id));
      const mapped = found.map((sku) => ({ sku, itemSource: "recommendation" }));
      if (c4) {
        const obj = { sku: wishlist(maxWishlistItemsToShow[4]).createNitroSuggestedSku(), itemSource: "takeover" };
        mapped.unshift(obj);
        const obj2 = wishlist(maxWishlistItemsToShow[4]);
      }
      return mapped.slice(0, maxWishlistItemsToShow);
    }, items1),
    status
  };
  items1 = [recommendations, memo, tmp3, maxWishlistItemsToShow];
  return obj;
};
