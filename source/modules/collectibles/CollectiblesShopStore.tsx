// Module ID: 6786
// Function ID: 53579
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6786 (_isNativeReflectConstruct)
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
const items = [];
let closure_8 = null;
let closure_9 = {};
const set = new Set();
let closure_11 = {};
let tmp3 = (Store) => {
  class CollectiblesShopStore {
    constructor() {
      self = this;
      tmp = CollectiblesShopStore(this, CollectiblesShopStore);
      obj = closure_3(CollectiblesShopStore);
      tmp2 = closure_2;
      if (closure_12()) {
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
  let closure_0 = CollectiblesShopStore;
  callback2(CollectiblesShopStore, Store);
  let obj = {
    key: "analyticsLocations",
    get() {
      return closure_7;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "analyticsSource",
    get() {
      return closure_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "initialProductSkuId",
    get() {
      return closure_5;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAnalytics",
    value() {
      return { analyticsLocations: closure_7, analyticsSource: closure_8 };
    }
  };
  items[4] = {
    key: "getLayout",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp4 = null;
        if (null != closure_9[arg0]) {
          tmp4 = tmp3;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "isFetchingLayout",
    value(arg0) {
      let hasItem = null != arg0;
      if (hasItem) {
        hasItem = set.has(arg0);
      }
      return hasItem;
    }
  };
  items[6] = {
    key: "getLayoutFetchError",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp4 = null;
        if (null != closure_11[arg0]) {
          tmp4 = tmp3;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  return callback(CollectiblesShopStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp3.displayName = "CollectiblesShopStore";
tmp3 = new tmp3(importDefault(dependencyMap[6]), {
  COLLECTIBLES_SHOP_OPEN: function handleOpen(analyticsLocations) {
    analyticsLocations = analyticsLocations.analyticsLocations;
    if (null == analyticsLocations) {
      analyticsLocations = items;
    }
    const items = analyticsLocations;
    const analyticsSource = analyticsLocations.analyticsSource;
    let tmp = null;
    if (null != analyticsSource) {
      tmp = analyticsSource;
    }
    let closure_8 = tmp;
    const initialProductSkuId = analyticsLocations.initialProductSkuId;
  },
  COLLECTIBLES_SHOP_CLOSE: function handleClose() {
    let closure_7 = items;
    let closure_8 = null;
    let closure_5;
  },
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: function handleProductDetailsOpen(skuId) {
    if (skuId.skuId === closure_5) {
      closure_5 = undefined;
    }
  },
  COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH: function handleShopTabLayoutFetch(tab) {
    set.add(tab.tab);
  },
  COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS: function handleShopTabLayoutFetchSuccess(tab) {
    tab = tab.tab;
    closure_9[tab] = tab.layoutId;
    delete r1[r2];
    set.delete(tab);
  },
  COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE: function handleShopTabLayoutFetchFailure(tab) {
    tab = tab.tab;
    closure_11[tab] = tab.apiError;
    set.delete(tab);
  },
  LOGOUT: function handleLogout() {
    let closure_7 = items;
    let closure_8 = null;
    let closure_5;
    let closure_9 = {};
    const set = new Set();
    let closure_11 = {};
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/collectibles/CollectiblesShopStore.tsx");

export default tmp3;
