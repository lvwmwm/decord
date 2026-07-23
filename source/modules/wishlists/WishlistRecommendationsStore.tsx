// Module ID: 9730
// Function ID: 75672
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1921, 566, 686, 2]

// Module 9730 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function getKey(arg0, arg1) {
  if (0 === arg0.length) {
    const _Error = Error;
    const error = new Error("No user IDs provided");
    throw error;
  } else {
    const items = [];
    HermesBuiltin.arraySpread(arg1, HermesBuiltin.arraySpread(arg0, 0));
    return items.join(",");
  }
}
function handleUserSettingsStoreUpdate() {
  if (locale === _isNativeReflectConstruct.locale) {
    return false;
  } else {
    let closure_7 = {};
    locale = _isNativeReflectConstruct.locale;
  }
}
let closure_7 = {};
let tmp2 = ((Store) => {
  class WishlistRecommendationsStore {
    constructor() {
      self = this;
      tmp = WishlistRecommendationsStore(this, WishlistRecommendationsStore);
      obj = outer1_3(WishlistRecommendationsStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(WishlistRecommendationsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
      const items = [outer1_5];
      this.syncWith(items, outer1_10);
      const outer1_6 = outer1_5.locale;
    }
  };
  let items = [obj, ];
  obj = {
    key: "getRecommendations",
    value(arg0, arg1) {
      if (0 !== arg0.length) {
        if (0 !== arg1.length) {
          return outer1_7[outer1_9(undefined, arg0, arg1)];
        }
      }
    }
  };
  items[1] = obj;
  return callback(WishlistRecommendationsStore, items);
})(require("initialize").Store);
tmp2 = new tmp2(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    let closure_7 = {};
  },
  WISHLIST_RECOMMENDATIONS_FETCH_START: function handleFetchStart(arg0) {
    let applicationIds;
    let userIds;
    ({ userIds, applicationIds } = arg0);
    if (0 !== userIds.length) {
      if (0 !== applicationIds.length) {
        let obj = {};
        const merged = Object.assign(obj);
        obj = { state: "loading" };
        obj[getKey(userIds, applicationIds)] = obj;
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
        let obj = {};
        const merged = Object.assign(obj);
        obj = { state: "success", data: tmp };
        const _Date = Date;
        obj.fetchedAt = Date.now();
        obj[getKey(userIds, applicationIds)] = obj;
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
        const tmp2 = getKey(userIds, applicationIds);
        let state;
        if (null != obj[tmp2]) {
          state = tmp4.state;
        }
        if ("success" === state) {
          return false;
        } else {
          obj = {};
          const merged = Object.assign(obj);
          obj = { state: "error" };
          const _Date = Date;
          obj.fetchedAt = Date.now();
          obj[tmp2] = obj;
        }
      }
    }
    return false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/wishlists/WishlistRecommendationsStore.tsx");

export default tmp2;
