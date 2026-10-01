// Module ID: 10258
// Function ID: 10259
// Name: WishlistRecommendationsStore
// Dependencies: [2112, 504, 573, 2]

// Module 10258 (WishlistRecommendationsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import size from "module_2" /* 2 */;

let locale;

function handleUserSettingsStoreUpdate() {
  if (locale === LocaleStore.locale) {
    return false;
  } else {
    locale = tmp.locale;
  }
}
let obj = {};
const Store = get_initializedDefault.Store;
class WishlistRecommendationsStore extends Store {
  initialize() {
    this.waitFor(LocaleStore);
    const items = [LocaleStore];
    this.syncWith(items, handleUserSettingsStoreUpdate);
    locale = LocaleStore.locale;
  }
  getRecommendations(memo, applicationIds) {
    if (0 !== memo.length) {
      if (0 !== applicationIds.length) {
        if (0 === memo.length) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(items, applicationIds, HermesBuiltin.arraySpread(items, memo, 0));
          return tmp3[items.join(items, ",")];
        }
      }
    }
  }
}
const prototype = WishlistRecommendationsStore.prototype;
obj = {
  LOGOUT: function handleLogout() {

  },
  WISHLIST_RECOMMENDATIONS_FETCH_START: function handleFetchStart(arg0) {
    let applicationIds;
    let userIds;
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(items, applicationIds, HermesBuiltin.arraySpread(items, userIds, 0));
          obj = {};
          const joined = items.join(",");
          const merged = Object.assign(obj);
          obj[joined] = { state: "loading" };
        }
      }
    }
    return false;
  },
  WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let applicationIds;
    let userIds;
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(items, applicationIds, HermesBuiltin.arraySpread(items, userIds, 0));
          obj = {};
          const joined = items.join(",");
          const merged = Object.assign(obj);
          const _Date = Date;
          obj[joined] = { state: "success", data: tmp2, fetchedAt: Date.now() };
          const obj2 = { state: "success", data: tmp2, fetchedAt: Date.now() };
        }
      }
    }
    return false;
  },
  WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function handleFetchFailure(arg0) {
    let applicationIds;
    let userIds;
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(items, applicationIds, HermesBuiltin.arraySpread(items, userIds, 0));
          const joined = items.join(",");
          let state;
          if (obj[joined] != null) {
            state = tmp17.state;
          }
          if ("success" === state) {
            return false;
          } else {
            obj = {};
            const merged = Object.assign(obj);
            const _Date = Date;
            obj[joined] = { state: "error", fetchedAt: Date.now() };
            const obj2 = { state: "error", fetchedAt: Date.now() };
          }
        }
      }
    }
    return false;
  }
};
const wishlistRecommendationsStore = new WishlistRecommendationsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/wishlists/WishlistRecommendationsStore.tsx");

export default wishlistRecommendationsStore;
