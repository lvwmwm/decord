// Module ID: 9722
// Function ID: 75618
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9722 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
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
  if (locale === closure_5.locale) {
    return false;
  } else {
    let closure_7 = {};
    const locale = closure_5.locale;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_7 = {};
let tmp2 = (Store) => {
  class WishlistRecommendationsStore {
    constructor() {
      self = this;
      tmp = WishlistRecommendationsStore(this, WishlistRecommendationsStore);
      obj = closure_3(WishlistRecommendationsStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = WishlistRecommendationsStore;
  callback2(WishlistRecommendationsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(locale);
      const items = [locale];
      this.syncWith(items, closure_10);
      const locale = locale.locale;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getRecommendations",
    value(arg0, arg1) {
      if (0 !== arg0.length) {
        if (0 !== arg1.length) {
          return closure_7[closure_9(undefined, arg0, arg1)];
        }
      }
    }
  };
  items[1] = obj;
  return callback(WishlistRecommendationsStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
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
        const merged = Object.assign(closure_7);
        obj = { state: "loading" };
        obj[getKey(userIds, applicationIds)] = obj;
        closure_7 = obj;
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
        const merged = Object.assign(closure_7);
        obj = { state: "success", data: tmp };
        const _Date = Date;
        obj.fetchedAt = Date.now();
        obj[getKey(userIds, applicationIds)] = obj;
        closure_7 = obj;
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
        if (null != closure_7[tmp2]) {
          state = tmp4.state;
        }
        if ("success" === state) {
          return false;
        } else {
          let obj = {};
          const merged = Object.assign(closure_7);
          obj = { state: "error" };
          const _Date = Date;
          obj.fetchedAt = Date.now();
          obj[tmp2] = obj;
          closure_7 = obj;
        }
      }
    }
    return false;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/wishlists/WishlistRecommendationsStore.tsx");

export default tmp2;
