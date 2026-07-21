// Module ID: 9725
// Function ID: 75642
// Name: getBannerMode
// Dependencies: []
// Exports: useWishlistBannerConfig

// Module 9725 (getBannerMode)
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
        let isGameItemSKUResult = source === callback(closure_1[2]).WishlistItemSource.POPULAR;
        if (isGameItemSKUResult) {
          isGameItemSKUResult = callback(closure_1[3]).isGameItemSKU(sku);
          const obj = callback(closure_1[3]);
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
const useMemo = require(dependencyMap[0]).useMemo;
let obj = { FULL_WISHLIST: "FULL_WISHLIST", MIXED: "MIXED", SHOP_ONLY: "SHOP_ONLY", SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" };
obj = {};
obj = {};
const intl = require(dependencyMap[1]).intl;
obj.title = intl.string(require(dependencyMap[1]).t.7lZ31J);
obj.getSubtitle = function getSubtitle(username) {
  const intl = require(dependencyMap[1]).intl;
  return intl.formatToPlainString(require(dependencyMap[1]).t.BjEX38, { username });
};
obj.showIcons = false;
obj.FULL_WISHLIST = obj;
const obj1 = {};
const intl2 = require(dependencyMap[1]).intl;
obj1.title = intl2.string(require(dependencyMap[1]).t.pWG4ze);
obj1.getSubtitle = function getSubtitle(username) {
  const intl = require(dependencyMap[1]).intl;
  return intl.formatToPlainString(require(dependencyMap[1]).t.dIDKgi, { username });
};
obj1.showIcons = true;
obj.MIXED = obj1;
const obj2 = {};
const intl3 = require(dependencyMap[1]).intl;
obj2.title = intl3.string(require(dependencyMap[1]).t.SK5rmi);
obj2.getSubtitle = function getSubtitle(username) {
  const intl = require(dependencyMap[1]).intl;
  return intl.formatToPlainString(require(dependencyMap[1]).t.wyMp1j, { username });
};
obj2.showIcons = false;
obj.SHOP_ONLY = obj2;
const obj3 = {};
const intl4 = require(dependencyMap[1]).intl;
obj3.title = intl4.string(require(dependencyMap[1]).t.BCi1gT);
obj3.getSubtitle = function getSubtitle(username) {
  const intl = require(dependencyMap[1]).intl;
  return intl.formatToPlainString(require(dependencyMap[1]).t.BjEX38, { username });
};
obj3.showIcons = false;
obj.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY = obj3;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/premium/gifting/utils/WishlistBannerUtils.tsx");

export const BannerMode = obj;
export const BANNER_CONFIG_MOBILE = obj;
export { getBannerMode };
export const useWishlistBannerConfig = function useWishlistBannerConfig(totalUnownedWishlistItemCount) {
  totalUnownedWishlistItemCount = totalUnownedWishlistItemCount.totalUnownedWishlistItemCount;
  const require = totalUnownedWishlistItemCount;
  const wishlistInDmLength = totalUnownedWishlistItemCount.wishlistInDmLength;
  const dependencyMap = wishlistInDmLength;
  const displayItems = totalUnownedWishlistItemCount.displayItems;
  const useMemo = displayItems;
  const recipientName = totalUnownedWishlistItemCount.recipientName;
  const items = [totalUnownedWishlistItemCount, wishlistInDmLength, displayItems];
  const tmp = useMemo(() => tmp({ totalUnownedWishlistItemCount, wishlistInDmLength, displayItems }), items);
  const getBannerMode = tmp;
  const items1 = [tmp, recipientName];
  return useMemo(() => {
    if (recipientName.FULL_WISHLIST === tmp) {
      let obj = {};
      const intl3 = totalUnownedWishlistItemCount(wishlistInDmLength[1]).intl;
      obj = { username: recipientName };
      obj.title = intl3.formatToPlainString(totalUnownedWishlistItemCount(wishlistInDmLength[1]).t.YcL/Vr, obj);
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
