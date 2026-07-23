// Module ID: 9733
// Function ID: 75696
// Name: getBannerMode
// Dependencies: [31, 1212, 8676, 5611, 2]
// Exports: useWishlistBannerConfig

// Module 9733 (getBannerMode)
import { useMemo } from "result";
import { intl } from "getSystemLocale";
import { intl as intl2 } from "getSystemLocale";
import { intl as intl3 } from "getSystemLocale";
import { intl as intl4 } from "getSystemLocale";

function getBannerMode(wishlistInDmLength) {
  let displayItems;
  let totalUnownedWishlistItemCount;
  ({ totalUnownedWishlistItemCount, displayItems } = wishlistInDmLength);
  if (totalUnownedWishlistItemCount >= wishlistInDmLength.wishlistInDmLength) {
    let SHOP_ONLY = obj.FULL_WISHLIST;
  } else if (totalUnownedWishlistItemCount > 0) {
    SHOP_ONLY = obj.MIXED;
  } else {
    if (displayItems.length > 0) {
      if (displayItems.every((arg0) => {
        let sku;
        let source;
        ({ sku, source } = arg0);
        let isGameItemSKUResult = source === outer1_0(outer1_1[2]).WishlistItemSource.POPULAR;
        if (isGameItemSKUResult) {
          isGameItemSKUResult = outer1_0(outer1_1[3]).isGameItemSKU(sku);
          const obj = outer1_0(outer1_1[3]);
        }
        return isGameItemSKUResult;
      })) {
        SHOP_ONLY = obj.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY;
      }
    }
    SHOP_ONLY = obj.SHOP_ONLY;
  }
  return SHOP_ONLY;
}
let obj = { FULL_WISHLIST: "FULL_WISHLIST", MIXED: "MIXED", SHOP_ONLY: "SHOP_ONLY", SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" };
obj = {};
obj = {};
obj.title = intl.string(require("getSystemLocale").t["7lZ31J"]);
obj.getSubtitle = function getSubtitle(username) {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.BjEX38, { username });
};
obj.showIcons = false;
obj.FULL_WISHLIST = obj;
let obj1 = {};
obj1.title = intl2.string(require("getSystemLocale").t.pWG4ze);
obj1.getSubtitle = function getSubtitle(username) {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.dIDKgi, { username });
};
obj1.showIcons = true;
obj.MIXED = obj1;
let obj2 = {};
obj2.title = intl3.string(require("getSystemLocale").t.SK5rmi);
obj2.getSubtitle = function getSubtitle(username) {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.wyMp1j, { username });
};
obj2.showIcons = false;
obj.SHOP_ONLY = obj2;
const obj3 = {};
obj3.title = intl4.string(require("getSystemLocale").t.BCi1gT);
obj3.getSubtitle = function getSubtitle(username) {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.BjEX38, { username });
};
obj3.showIcons = false;
obj.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY = obj3;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/gifting/utils/WishlistBannerUtils.tsx");

export const BannerMode = obj;
export const BANNER_CONFIG_MOBILE = obj;
export { getBannerMode };
export const useWishlistBannerConfig = function useWishlistBannerConfig(totalUnownedWishlistItemCount) {
  totalUnownedWishlistItemCount = totalUnownedWishlistItemCount.totalUnownedWishlistItemCount;
  const wishlistInDmLength = totalUnownedWishlistItemCount.wishlistInDmLength;
  const displayItems = totalUnownedWishlistItemCount.displayItems;
  const recipientName = totalUnownedWishlistItemCount.recipientName;
  const items = [totalUnownedWishlistItemCount, wishlistInDmLength, displayItems];
  const tmp = displayItems(() => tmp({ totalUnownedWishlistItemCount, wishlistInDmLength, displayItems }), items);
  const getBannerMode = tmp;
  const items1 = [tmp, recipientName];
  return displayItems(() => {
    if (recipientName.FULL_WISHLIST === closure_4) {
      let obj = {};
      const intl3 = totalUnownedWishlistItemCount(wishlistInDmLength[1]).intl;
      obj = { username: recipientName };
      obj.title = intl3.formatToPlainString(totalUnownedWishlistItemCount(wishlistInDmLength[1]).t["YcL/Vr"], obj);
      obj.showIcons = false;
      return obj;
    } else if (recipientName.MIXED === tmp) {
      const obj1 = {};
      const intl2 = totalUnownedWishlistItemCount(wishlistInDmLength[1]).intl;
      const obj2 = { username: recipientName };
      obj1.title = intl2.formatToPlainString(totalUnownedWishlistItemCount(wishlistInDmLength[1]).t.dIDKgi, obj2);
      obj1.showIcons = true;
      return obj1;
    } else {
      obj = {};
      const intl = totalUnownedWishlistItemCount(wishlistInDmLength[1]).intl;
      obj.title = intl.string(totalUnownedWishlistItemCount(wishlistInDmLength[1]).t.BCi1gT);
      obj.showIcons = false;
      return obj;
    }
  }, items1);
};
