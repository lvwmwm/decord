// Module ID: 12683
// Function ID: 12684
// Name: useAddToWishlistGridItems
// Dependencies: [19, 1374, 10257, 12659, 2]
// Exports: useAddToWishlistGridItems

// Module 12683 (useAddToWishlistGridItems)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import WishlistUtils from "WishlistUtils" /* 12659 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const PremiumSubscriptionSKUs = PremiumConstants.PremiumSubscriptionSKUs;
const result = size.fileFinishedImporting("modules/wishlists/hooks/useAddToWishlistGridItems.tsx");

export const useAddToWishlistGridItems = function useAddToWishlistGridItems(wishlist) {
  let items1;
  let maxWishlistItemsToShow;
  let numWishlistItemsToRecommend;
  wishlist = wishlist.wishlist;
  ({ numWishlistItemsToRecommend, maxWishlistItemsToShow } = wishlist);
  const userId = wishlist.userId;
  if (maxWishlistItemsToShow === undefined) {
    maxWishlistItemsToShow = numWishlistItemsToRecommend;
  }
  let closure_4;
  const source = wishlist.source;
  let obj = wishlist(maxWishlistItemsToShow[2]);
  const recommendationsForSingleUser = obj.useRecommendationsForSingleUser({ userId, numItems: numWishlistItemsToRecommend, source });
  const recommendations = recommendationsForSingleUser.recommendations;
  const status = recommendationsForSingleUser.status;
  let obj2 = recommendations;
  let items = [wishlist];
  const memo = recommendations.useMemo(() => {
    let mapped;
    const _Set = Set;
    if (wishlist != null) {
      const items = wishlist.items;
      mapped = items.map((skuId) => skuId.skuId);
    }
    if (mapped == null) {
      mapped = [];
    }
    const _Set1 = new _Set(mapped);
    return _Set1;
  }, items);
  let tmp2 = "success" === status;
  if (tmp2) {
    tmp2 = !memo.has(memo.TIER_2);
  }
  closure_4 = tmp2;
  const obj3 = {
    items: obj2.useMemo(() => {
      let obj2;
      const found = recommendations.filter((id) => !set.has(id.id));
      const mapped = found.map((sku) => ({ sku, itemSource: "recommendation" }));
      const tmp = closure_4;
      if (tmp) {
        const unshift = mapped.unshift;
        const obj = { sku: obj2.createNitroSuggestedSku(), itemSource: "takeover" };
        obj2 = WishlistUtils;
        unshift(obj);
      }
      return mapped.slice(0, maxWishlistItemsToShow);
    }, items1),
    status
  };
  items1 = [recommendations, memo, tmp2, maxWishlistItemsToShow];
  return obj3;
};
