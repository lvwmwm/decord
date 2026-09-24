// Module ID: 11128
// Function ID: 11129
// Name: WishlistRecommendationsStore
// Dependencies: [2113, 504, 577, 2]

// Module 11128 (WishlistRecommendationsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import LocaleStore from "LocaleStore" /* 2113 */;

function handleUserSettingsStoreUpdate() {
  if (locale === LocaleStore.locale) {
    return false;
  } else {
    locale = tmp.locale;
  }
}
let obj = {};
const Store = initializeDefault.Store;
class WishlistRecommendationsStore extends Store {
}
const prototype = WishlistRecommendationsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(LocaleStore);
  const items = [LocaleStore];
  this.syncWith(items, handleUserSettingsStoreUpdate);
  locale = LocaleStore.locale;
};
prototype["getRecommendations"] = function getRecommendations(userIds, applicationIds) {
  if (0 !== userIds.length) {
    if (0 !== applicationIds.length) {
      if (0 === userIds.length) {
        const _Error = Error;
        const error = new Error("No user IDs provided");
        throw error;
      } else {
        const items = [];
        HermesBuiltin.arraySpread(applicationIds, HermesBuiltin.arraySpread(userIds, 0));
        return tmp2[items.join(items, ",")];
      }
    }
  }
};
obj = {
  LOGOUT: function handleLogout() {

  },
  WISHLIST_RECOMMENDATIONS_FETCH_START: function handleFetchStart(arg0) {
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(applicationIds, HermesBuiltin.arraySpread(userIds, 0));
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
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(applicationIds, HermesBuiltin.arraySpread(userIds, 0));
          obj = {};
          const joined = items.join(",");
          const merged = Object.assign(obj);
          const obj2 = { state: "success", data: tmp, fetchedAt: null };
          const _Date = Date;
          obj2.fetchedAt = Date.now();
          obj[joined] = obj2;
        }
      }
    }
    return false;
  },
  WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function handleFetchFailure(arg0) {
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        if (0 === userIds.length) {
          const _Error = Error;
          const error = new Error("No user IDs provided");
          throw error;
        } else {
          const items = [];
          HermesBuiltin.arraySpread(applicationIds, HermesBuiltin.arraySpread(userIds, 0));
          const joined = items.join(",");
          state = undefined;
          if (obj[joined] != null) {
            state = tmp18.state;
          }
          if ("success" === state) {
            return false;
          } else {
            obj = {};
            const merged = Object.assign(obj);
            const obj2 = { state: "error", fetchedAt: null };
            const _Date = Date;
            obj2.fetchedAt = Date.now();
            obj[joined] = obj2;
          }
        }
      }
    }
    return false;
  }
};
const wishlistRecommendationsStore = new WishlistRecommendationsStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/WishlistRecommendationsStore.tsx");

export default wishlistRecommendationsStore;
