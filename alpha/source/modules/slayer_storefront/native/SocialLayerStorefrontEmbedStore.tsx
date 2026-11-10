// Module ID: 11715
// Function ID: 11716
// Name: SocialLayerStorefrontEmbedStore
// Dependencies: [32, 7852, 9561, 502, 6954, 11716, 558, 504, 572, 2]

// Module 11715 (SocialLayerStorefrontEmbedStore)
import get_initializedDefault from "get initialized" /* 504 */;
import shallowEqual from "shallowEqual" /* 558 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import socialLayerStorefrontEmbedPrice2 from "socialLayerStorefrontEmbedPrice" /* 11716 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserProfileStore from "UserProfileStore" /* 7852 */;
import WishlistStore from "WishlistStore" /* 9561 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SKUStore from "SKUStore" /* 6954 */;
import size from "module_2" /* 2 */;

let c9, closure_10, closure_9, diff1, set;

function computePrice(arg0) {
  const value = SKUStore.get(arg0);
  let socialLayerStorefrontEmbedPrice;
  if (null != value) {
    const obj = socialLayerStorefrontEmbedPrice2;
    socialLayerStorefrontEmbedPrice = obj.getSocialLayerStorefrontEmbedPrice(value);
  }
  return socialLayerStorefrontEmbedPrice;
}
function computeWishlistSkuIds() {
  const id = AuthenticationStore.getId();
  let firstWishlistId = null;
  if (null != id) {
    firstWishlistId = UserProfileStore.getFirstWishlistId(id);
  }
  if (null != firstWishlistId) {
    wishlistItems = WishlistStore.getWishlistItems(firstWishlistId);
  } else {
    wishlistItems = closure_7;
  }
  return wishlistItems;
}
function handlePriceStoresChange() {
  let flag = false;
  const tmp2 = map[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let tmp6 = tmp5[1];
    let tmp7 = tmp6;
    let tmp9 = computePrice(tmp5[0]);
    if (tmp9 !== tmp6.price) {
      tmp7.price = tmp10;
      flag = true;
    }
    continue;
  }
  return flag;
}
function handleWishlistStoresChange() {
  if (null == wishlistItems) {
    return false;
  } else {
    const id = AuthenticationStore.getId();
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(id);
    }
    if (null != firstWishlistId) {
      wishlistItems = WishlistStore.getWishlistItems(firstWishlistId);
    } else {
      wishlistItems = closure_7;
    }
    const obj = shallowEqual;
    const result = obj.areArraysShallowEqual(wishlistItems, wishlistItems);
    return !result && true;
  }
}
let closure_7 = [];
const map = new Map();
let wishlistItems = null;
let c10 = 0;
const Store = get_initializedDefault.Store;
class SocialLayerStorefrontEmbedStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, SKUStore, UserProfileStore, WishlistStore);
    this.syncWith(socialLayerStorefrontEmbedPrice2.SOCIAL_LAYER_STOREFRONT_PRICE_STORES, handlePriceStoresChange);
    const items = [AuthenticationStore, UserProfileStore, WishlistStore];
    this.syncWith(items, handleWishlistStoresChange);
  }
  watch(arg0) {
    let closure_0 = arg0;
    if (0 === arg0.length) {
      return () => {

      };
    } else {
      let iter = arg0[Symbol.iterator]();
      let nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let tmp5 = map;
        let value = map.get(nextResult);
        let tmp7 = value;
        if (null != value) {
          tmp7.readers = tmp7.readers + 1;
        } else {
          let tmp8 = nextResult;
          let obj = { price: computePrice(tmp4), readers: 1 };
          set = tmp5.set;
          let result = set(tmp4, obj);
        }
        continue;
      }
      closure_10 = closure_10 + 1;
      if (closure_9 == null) {
        closure_9 = computeWishlistSkuIds();
      }
      return () => {
        function unwatch(arg0) {
          const iter = arg0[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let obj = closure_1_8;
            let tmp2 = nextResult;
            let value = closure_1_8.get(nextResult);
            let tmp4 = value;
            let tmp5 = null != value;
            if (tmp5) {
              let diff = tmp4.readers - 1;
              tmp4.readers = diff;
              tmp5 = diff <= 0;
            }
            if (tmp5) {
              let deleteResult = obj.delete(tmp2);
            }
            continue;
          }
          diff1 = diff1 - 1;
          if (0 === diff1) {
            c9 = null;
          }
        }
        unwatch(closure_0);
      };
    }
  }
  getPrice(arg0) {
    const value = SKUStore.get(arg0);
    let socialLayerStorefrontEmbedPrice;
    if (null != value) {
      const obj = socialLayerStorefrontEmbedPrice2;
      socialLayerStorefrontEmbedPrice = obj.getSocialLayerStorefrontEmbedPrice(value);
    }
    return socialLayerStorefrontEmbedPrice;
  }
  getWishlistSkuIds() {
    const id = AuthenticationStore.getId();
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(id);
    }
    if (null != firstWishlistId) {
      wishlistItems = WishlistStore.getWishlistItems(firstWishlistId);
    } else {
      wishlistItems = closure_7;
    }
    let tmp6 = wishlistItems;
    if (null != wishlistItems) {
      tmp6 = wishlistItems;
      const obj = shallowEqual;
      if (obj.areArraysShallowEqual(wishlistItems, wishlistItems)) {
        tmp6 = wishlistItems;
      }
    }
    return tmp6;
  }
}
const prototype = SocialLayerStorefrontEmbedStore.prototype;
SocialLayerStorefrontEmbedStore.displayName = "SocialLayerStorefrontEmbedStore";
const socialLayerStorefrontEmbedStore = new SocialLayerStorefrontEmbedStore(DispatcherDefault, {});
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontEmbedStore.tsx");

export default socialLayerStorefrontEmbedStore;
