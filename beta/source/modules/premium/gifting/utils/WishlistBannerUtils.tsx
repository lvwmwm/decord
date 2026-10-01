// Module ID: 10261
// Function ID: 10262
// Name: WishlistBannerUtils
// Dependencies: [19, 1115, 8238, 6647, 2]
// Exports: getBannerMode, useWishlistBannerConfig

// Module 10261 (WishlistBannerUtils)
import react from "react" /* 19 */;
import intl5 from "intl" /* 1115 */;
import size from "module_2" /* 2 */;

let intl;
let intl2;
let intl3;
let intl4;
let obj3;
let obj4;
let obj5;
let obj6;
const useMemo = react.useMemo;
const BannerMode = { FULL_WISHLIST: "FULL_WISHLIST", MIXED: "MIXED", SHOP_ONLY: "SHOP_ONLY", SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" };
let obj2 = { FULL_WISHLIST: obj3, MIXED: obj4, SHOP_ONLY: obj5, SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: obj6 };
obj3 = {
  title: intl.string(intl5.t["7lZ31J"]),
  getSubtitle(username) {
    const intl = intl5.intl;
    const obj = { username };
    return intl.formatToPlainString(intl5.t.BjEX38, obj);
  },
  showIcons: false
};
intl = intl5.intl;
obj4 = {
  title: intl2.string(intl5.t.pWG4ze),
  getSubtitle(username) {
    const intl = intl5.intl;
    const obj = { username };
    return intl.formatToPlainString(intl5.t.dIDKgi, obj);
  },
  showIcons: true
};
intl2 = intl5.intl;
obj5 = {
  title: intl3.string(intl5.t.SK5rmi),
  getSubtitle(username) {
    const intl = intl5.intl;
    const obj = { username };
    return intl.formatToPlainString(intl5.t.wyMp1j, obj);
  },
  showIcons: false
};
intl3 = intl5.intl;
obj6 = {
  title: intl4.string(intl5.t.BCi1gT),
  getSubtitle(username) {
    const intl = intl5.intl;
    const obj = { username };
    return intl.formatToPlainString(intl5.t.BjEX38, obj);
  },
  showIcons: false
};
intl4 = intl5.intl;
const result = size.fileFinishedImporting("modules/premium/gifting/utils/WishlistBannerUtils.tsx");

export { BannerMode };
export const BANNER_CONFIG_MOBILE = obj2;
export const getBannerMode = function getBannerMode(wishlistInDmLength) {
  let SHOP_ONLY;
  let displayItems;
  let totalUnownedWishlistItemCount;
  ({ totalUnownedWishlistItemCount, displayItems } = wishlistInDmLength);
  if (totalUnownedWishlistItemCount >= wishlistInDmLength.wishlistInDmLength) {
    SHOP_ONLY = obj.FULL_WISHLIST;
  } else if (totalUnownedWishlistItemCount > 0) {
    SHOP_ONLY = obj.MIXED;
  } else {
    if (displayItems.length > 0) {
      if (displayItems.every((item) => {
        let sku;
        let source;
        ({ sku, source } = item);
        let isGameItemSKUResult = source === totalUnownedWishlistItemCount(wishlistInDmLength[2]).WishlistItemSource.POPULAR;
        const tmp = totalUnownedWishlistItemCount;
        const tmp2 = wishlistInDmLength;
        if (isGameItemSKUResult) {
          const tmpResult = tmp(tmp2[3]);
          isGameItemSKUResult = tmpResult.isGameItemSKU(sku);
        }
        return isGameItemSKUResult;
      })) {
        SHOP_ONLY = obj.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY;
      }
    }
    SHOP_ONLY = obj.SHOP_ONLY;
  }
  return SHOP_ONLY;
};
export const useWishlistBannerConfig = function useWishlistBannerConfig(totalUnownedWishlistItemCount) {
  totalUnownedWishlistItemCount = totalUnownedWishlistItemCount.totalUnownedWishlistItemCount;
  const wishlistInDmLength = totalUnownedWishlistItemCount.wishlistInDmLength;
  const displayItems = totalUnownedWishlistItemCount.displayItems;
  const recipientName = totalUnownedWishlistItemCount.recipientName;
  const items = [totalUnownedWishlistItemCount, wishlistInDmLength, displayItems];
  let tmp = displayItems(() => {
    let SHOP_ONLY;
    let tmp;
    if (totalUnownedWishlistItemCount >= wishlistInDmLength) {
      SHOP_ONLY = obj.FULL_WISHLIST;
    } else if (tmp > 0) {
      SHOP_ONLY = obj.MIXED;
    } else {
      if (displayItems.length > 0) {
        if (displayItems.every((item) => {
          let sku;
          let source;
          ({ sku, source } = item);
          let isGameItemSKUResult = source === totalUnownedWishlistItemCount(wishlistInDmLength[2]).WishlistItemSource.POPULAR;
          const tmp = totalUnownedWishlistItemCount;
          const tmp2 = wishlistInDmLength;
          if (isGameItemSKUResult) {
            const tmpResult = tmp(tmp2[3]);
            isGameItemSKUResult = tmpResult.isGameItemSKU(sku);
          }
          return isGameItemSKUResult;
        })) {
          SHOP_ONLY = obj.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY;
        }
      }
      let tmp2 = obj;
      SHOP_ONLY = obj.SHOP_ONLY;
    }
    return SHOP_ONLY;
  }, items);
  let closure_4 = tmp;
  const items1 = [tmp, recipientName];
  return displayItems(() => {
    let intl;
    let intl2;
    let intl3;
    let obj;
    if (obj.FULL_WISHLIST === closure_4) {
      const obj2 = { title: intl3.formatToPlainString(intl5.t["YcL/Vr"], obj3), showIcons: false };
      intl3 = intl5.intl;
      return obj2;
    } else if (tmp2.MIXED === tmp) {
      const obj4 = { title: intl2.formatToPlainString(intl5.t.dIDKgi, obj5), showIcons: true };
      intl2 = intl5.intl;
      return obj4;
    } else {
      obj = { title: intl.string(intl5.t.BCi1gT), showIcons: false };
      intl = intl5.intl;
      return obj;
    }
  }, items1);
};
