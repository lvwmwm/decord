// Module ID: 6809
// Function ID: 53678
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6809 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const CollectibleShopTab = arg1(dependencyMap[5]).CollectibleShopTab;
({ COLLECTIBLES_SUMMER_SALE_2025_30_DISCOUNT_ID: closure_6, COLLECTIBLES_SUMMER_SALE_2025_50_DISCOUNT_ID: closure_7, COLLECTIBLES_VALENTINES_2026_DISCOUNT_ID: closure_8 } = arg1(dependencyMap[6]));
let closure_9 = [];
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
const map6 = new Map();
let closure_17;
let closure_18;
let tmp10 = (Store) => {
  class CollectiblesShopHomesStore {
    constructor() {
      self = this;
      tmp = CollectiblesShopHomesStore(this, CollectiblesShopHomesStore);
      obj = closure_3(CollectiblesShopHomesStore);
      tmp2 = closure_2;
      if (closure_19()) {
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
  let closure_0 = CollectiblesShopHomesStore;
  callback2(CollectiblesShopHomesStore, Store);
  let obj = {
    key: "getLastSuccessfulFetch",
    value(arg0) {
      return closure_10.get(arg0);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getLastErrorTimestamp",
    value(arg0) {
      return closure_11.get(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastFetchOptions",
    value(arg0) {
      return closure_12.get(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFetchShopHomeError",
    value(arg0) {
      return closure_13.get(arg0);
    }
  };
  items[4] = {
    key: "getIsFetchingShopHome",
    value(arg0) {
      return closure_14.get(arg0);
    }
  };
  items[5] = {
    key: "getShopBlocks",
    value(arg0) {
      let value = closure_16.get(arg0);
      if (null == value) {
        value = closure_9;
      }
      return value;
    }
  };
  items[6] = {
    key: "getHasKnownStaleData",
    value(arg0) {
      return closure_15.get(arg0);
    }
  };
  items[7] = {
    key: "getShopHomeConfigOverride",
    value() {
      return closure_17;
    }
  };
  items[8] = {
    key: "getShopLayoutUrlOverride",
    value() {
      return closure_18;
    }
  };
  return callback(CollectiblesShopHomesStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp10.displayName = "CollectiblesShopHomesStore";
tmp10 = new tmp10(importDefault(dependencyMap[8]), {
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
    const result = map6.set(tab.tab, closure_9);
    const result1 = map4.set(tab.tab, false);
    const result2 = map3.set(tab.tab, tab.error);
    const result3 = map1.set(tab.tab, Date.now());
    const result4 = map5.set(tab.tab, true);
  },
  COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: function handleSetShopHomeConfigOverride(shopHomeConfigOverride) {
    let closure_17 = shopHomeConfigOverride.shopHomeConfigOverride;
  },
  COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE: function handleSetShopLayoutUrlOverride(shopLayoutUrlOverride) {
    let closure_18 = shopLayoutUrlOverride.shopLayoutUrlOverride;
  },
  SKU_PURCHASE_SUCCESS: function handlePurchaseSuccess(appliedUserDiscounts) {
    let someResult = null != appliedUserDiscounts.appliedUserDiscounts;
    if (someResult) {
      appliedUserDiscounts = appliedUserDiscounts.appliedUserDiscounts;
      someResult = appliedUserDiscounts.some((discount) => {
        let tmp = discount.discount.id === closure_6;
        if (!tmp) {
          tmp = discount.discount.id === closure_7;
        }
        if (!tmp) {
          tmp = discount.discount.id === closure_8;
        }
        return tmp;
      });
    }
    if (someResult) {
      const result = map5.set(CollectibleShopTab.HOME, true);
    }
  },
  LOGOUT: function reset() {
    map6.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    map.clear();
    map1.clear();
    map5.clear();
    let closure_17;
    let closure_18;
  }
});
const obj = {
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
    const result = map6.set(tab.tab, closure_9);
    const result1 = map4.set(tab.tab, false);
    const result2 = map3.set(tab.tab, tab.error);
    const result3 = map1.set(tab.tab, Date.now());
    const result4 = map5.set(tab.tab, true);
  },
  COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: function handleSetShopHomeConfigOverride(shopHomeConfigOverride) {
    let closure_17 = shopHomeConfigOverride.shopHomeConfigOverride;
  },
  COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE: function handleSetShopLayoutUrlOverride(shopLayoutUrlOverride) {
    let closure_18 = shopLayoutUrlOverride.shopLayoutUrlOverride;
  },
  SKU_PURCHASE_SUCCESS: function handlePurchaseSuccess(appliedUserDiscounts) {
    let someResult = null != appliedUserDiscounts.appliedUserDiscounts;
    if (someResult) {
      appliedUserDiscounts = appliedUserDiscounts.appliedUserDiscounts;
      someResult = appliedUserDiscounts.some((discount) => {
        let tmp = discount.discount.id === closure_6;
        if (!tmp) {
          tmp = discount.discount.id === closure_7;
        }
        if (!tmp) {
          tmp = discount.discount.id === closure_8;
        }
        return tmp;
      });
    }
    if (someResult) {
      const result = map5.set(CollectibleShopTab.HOME, true);
    }
  },
  LOGOUT: function reset() {
    map6.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    map.clear();
    map1.clear();
    map5.clear();
    let closure_17;
    let closure_18;
  }
};
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/CollectiblesShopHomeStore.tsx");

export default tmp10;
