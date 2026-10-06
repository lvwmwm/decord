// Module ID: 10296
// Function ID: 10297
// Name: WishlistRecommendationsStore
// Dependencies: [2115, 504, 585, 2]

// Module 10296 (WishlistRecommendationsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import LocaleStore from "LocaleStore" /* 2115 */;
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
  getRecommendations(userIds, applicationIds) {
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
