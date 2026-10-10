// Module ID: 13386
// Function ID: 13387
// Name: useAddToWishlistGridItems
// Dependencies: [19, 1392, 558, 576, 10150, 13365, 2]

// Module 13386 (useAddToWishlistGridItems)
import react2 from "react" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import useWishlistRecommendations from "useWishlistRecommendations" /* 10150 */;
import WishlistUtils from "WishlistUtils" /* 13365 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumSubscriptionSKUs = PremiumConstants.PremiumSubscriptionSKUs;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAddToWishlistGridItems(arg0) {
  let maxWishlistItemsToShow;
  let numWishlistItemsToRecommend;
  let recommendations;
  let source;
  let status;
  let userId;
  let wishlist;
  const obj = react2;
  const cResult = obj.c(17);
  ({ userId, wishlist, numWishlistItemsToRecommend, maxWishlistItemsToShow, source } = arg0);
  if (undefined === maxWishlistItemsToShow) {
    maxWishlistItemsToShow = numWishlistItemsToRecommend;
  }
  if (cResult[0] === numWishlistItemsToRecommend) {
    if (cResult[1] === source) {
      let tmp4;
      let obj4;
      let tmp17;
      let tmp19;
      if (cResult[2] === userId) {
        tmp4 = cResult[3];
      }
      const tmpResult = useWishlistRecommendations;
      const recommendationsForSingleUser = tmpResult.useRecommendationsForSingleUser(tmp4);
      ({ recommendations, status } = recommendationsForSingleUser);
      let items;
      const tmp6 = cResult[4];
      if (wishlist != null) {
        items = wishlist.items;
      }
      if (tmp6 !== items) {
        let mapped;
        const _Set = Set;
        if (wishlist != null) {
          const items1 = wishlist.items;
          mapped = items1.map((skuId) => skuId.skuId);
        }
        if (mapped == null) {
          mapped = [];
        }
        const self = this;
        const self2 = this;
        const _Set1 = new _Set(mapped);
        let items2;
        if (wishlist != null) {
          items2 = wishlist.items;
        }
        cResult[4] = items2;
        cResult[5] = _Set1;
        obj4 = _Set1;
      } else {
        obj4 = cResult[5];
      }
      const tmp14 = "success" === status && !obj4.has(PremiumSubscriptionSKUs.TIER_2);
      if (cResult[6] === maxWishlistItemsToShow) {
        if (cResult[7] === recommendations) {
          if (cResult[8] === tmp14) {
            let tmp16;
            if (cResult[9] === obj4) {
              tmp16 = cResult[10];
            }
            if (cResult[14] === tmp16) {
              let tmp23;
              if (cResult[15] === status) {
                tmp23 = cResult[16];
              }
              return tmp23;
            }
            const obj2 = { items: tmp16, status };
            cResult[14] = tmp16;
            cResult[15] = status;
            cResult[16] = obj2;
            tmp23 = obj2;
          }
        }
      }
      if (cResult[11] !== obj4) {
        const fn = function w(id) {
          return !obj4.has(id.id);
        };
        cResult[11] = obj4;
        cResult[12] = fn;
        tmp17 = fn;
      } else {
        tmp17 = cResult[12];
      }
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(sku) {
            return { sku, itemSource: "recommendation" };
          }
        }
        cResult[13] = R;
        tmp19 = R;
      } else {
        class R {
          constructor(sku) {
            return { sku, itemSource: "recommendation" };
          }
        }
      }
      const found = recommendations.filter(tmp17);
      const mapped1 = found.map(tmp19);
      if (tmp14) {
        class R {
          constructor(sku) {
            return { sku, itemSource: "recommendation" };
          }
        }
        const unshift = mapped1.unshift;
        const tmpResult2 = WishlistUtils;
        tmp20[0] = tmpResult2.createNitroSuggestedSku();
        unshift(tmp20);
      }
      const substr = mapped1.slice(0, maxWishlistItemsToShow);
      cResult[6] = maxWishlistItemsToShow;
      cResult[7] = recommendations;
      cResult[8] = tmp14;
      cResult[9] = obj4;
      cResult[10] = substr;
      tmp16 = substr;
    }
  }
  const obj3 = { userId, numItems: numWishlistItemsToRecommend, source };
  cResult[0] = numWishlistItemsToRecommend;
  cResult[1] = source;
  cResult[2] = userId;
  cResult[3] = obj3;
  tmp4 = obj3;
}) : (function useAddToWishlistGridItems(wishlist) {
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
  let obj = wishlist(maxWishlistItemsToShow[4]);
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
});
const result = size.fileFinishedImporting("modules/wishlists/hooks/useAddToWishlistGridItems.tsx");

export const useAddToWishlistGridItems = tmp2;
