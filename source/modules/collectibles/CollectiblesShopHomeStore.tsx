// Module ID: 6820
// Function ID: 53793
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 6820 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = [];
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
const map6 = new Map();
let c13;
let c14;
let tmp9 = ((Store) => {
  class CollectiblesShopHomesStore {
    constructor() {
      self = this;
      tmp = CollectiblesShopHomesStore(this, CollectiblesShopHomesStore);
      obj = outer1_3(CollectiblesShopHomesStore);
      tmp2 = outer1_2;
      if (outer1_15()) {
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
  callback2(CollectiblesShopHomesStore, Store);
  let obj = {
    key: "getLastSuccessfulFetch",
    value(arg0) {
      return outer1_6.get(arg0);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getLastErrorTimestamp",
    value(arg0) {
      return outer1_7.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastFetchOptions",
    value(arg0) {
      return outer1_8.get(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFetchShopHomeError",
    value(arg0) {
      return outer1_9.get(arg0);
    }
  };
  items[4] = {
    key: "getIsFetchingShopHome",
    value(arg0) {
      return outer1_10.get(arg0);
    }
  };
  items[5] = {
    key: "getShopBlocks",
    value(arg0) {
      let value = outer1_12.get(arg0);
      if (null == value) {
        value = outer1_5;
      }
      return value;
    }
  };
  items[6] = {
    key: "getHasKnownStaleData",
    value(arg0) {
      return outer1_11.get(arg0);
    }
  };
  items[7] = {
    key: "getShopHomeConfigOverride",
    value() {
      return outer1_13;
    }
  };
  items[8] = {
    key: "getShopLayoutUrlOverride",
    value() {
      return outer1_14;
    }
  };
  return callback(CollectiblesShopHomesStore, items);
})(require("initialize").Store);
tmp9.displayName = "CollectiblesShopHomesStore";
tmp9 = new tmp9(require("dispatcher"), {
  COLLECTIBLES_SHOP_HOME_FETCH: function handleFetchShopHome(tab) {
    const result = map4.set(tab.tab, true);
    const result1 = map3.set(tab.tab, undefined);
    const result2 = map2.set(tab.tab, tab.options);
    const result3 = map2.set(tab.tab, tab.options);
    const result4 = map1.set(tab.tab, undefined);
    const result5 = map5.set(tab.tab, false);
  },
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: function handleFetchShopHomeSuccess(tab) {
    const result = map6.set(tab.tab, tab.shopHome.shopBlocks);
    const result1 = map.set(tab.tab, Date.now());
    const result2 = map4.set(tab.tab, false);
    const result3 = map3.set(tab.tab, undefined);
    const result4 = map1.set(tab.tab, undefined);
    const result5 = map5.set(tab.tab, false);
  },
  COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: function handleFetchShopHomeFailure(tab) {
    const result = map6.set(tab.tab, closure_5);
    const result1 = map4.set(tab.tab, false);
    const result2 = map3.set(tab.tab, tab.error);
    const result3 = map1.set(tab.tab, Date.now());
    const result4 = map5.set(tab.tab, true);
  },
  COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: function handleSetShopHomeConfigOverride(shopHomeConfigOverride) {
    shopHomeConfigOverride = shopHomeConfigOverride.shopHomeConfigOverride;
  },
  COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE: function handleSetShopLayoutUrlOverride(shopLayoutUrlOverride) {
    shopLayoutUrlOverride = shopLayoutUrlOverride.shopLayoutUrlOverride;
  },
  LOGOUT: function reset() {
    map6.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    map.clear();
    map1.clear();
    map5.clear();
    let c13;
    let c14;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/collectibles/CollectiblesShopHomeStore.tsx");

export default tmp9;
