// Module ID: 6791
// Function ID: 53630
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 6791 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import closure_1 from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let items = [];
let c8 = null;
let closure_9 = {};
let set = new Set();
let closure_11 = {};
let tmp3 = ((Store) => {
  class CollectiblesShopStore {
    constructor() {
      self = this;
      tmp = CollectiblesShopStore(this, CollectiblesShopStore);
      obj = outer1_3(CollectiblesShopStore);
      tmp2 = outer1_2;
      if (outer1_12()) {
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
  callback2(CollectiblesShopStore, Store);
  let obj = {
    key: "analyticsLocations",
    get() {
      return outer1_7;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "analyticsSource",
    get() {
      return outer1_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "initialProductSkuId",
    get() {
      return outer1_5;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAnalytics",
    value() {
      return { analyticsLocations: outer1_7, analyticsSource: outer1_8 };
    }
  };
  items[4] = {
    key: "getLayout",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp4 = null;
        if (null != outer1_9[arg0]) {
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
        hasItem = outer1_10.has(arg0);
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
        if (null != outer1_11[arg0]) {
          tmp4 = tmp3;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  return callback(CollectiblesShopStore, items);
})(require("initialize").Store);
tmp3.displayName = "CollectiblesShopStore";
tmp3 = new tmp3(require("dispatcher"), {
  COLLECTIBLES_SHOP_OPEN: function handleOpen(analyticsLocations) {
    analyticsLocations = analyticsLocations.analyticsLocations;
    if (null == analyticsLocations) {
      analyticsLocations = items;
    }
    const analyticsSource = analyticsLocations.analyticsSource;
    let tmp = null;
    if (null != analyticsSource) {
      tmp = analyticsSource;
    }
    let c8 = tmp;
    const initialProductSkuId = analyticsLocations.initialProductSkuId;
  },
  COLLECTIBLES_SHOP_CLOSE: function handleClose() {
    let closure_7 = items;
    let c8 = null;
    let c5;
  },
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: function handleProductDetailsOpen(skuId) {
    if (skuId.skuId === c5) {
      c5 = undefined;
    }
  },
  COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH: function handleShopTabLayoutFetch(tab) {
    set.add(tab.tab);
  },
  COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS: function handleShopTabLayoutFetchSuccess(tab) {
    tab = tab.tab;
    closure_9[tab] = tab.layoutId;
    delete tmp[tmp2];
    set.delete(tab);
  },
  COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE: function handleShopTabLayoutFetchFailure(tab) {
    tab = tab.tab;
    closure_11[tab] = tab.apiError;
    set.delete(tab);
  },
  LOGOUT: function handleLogout() {
    let closure_7 = items;
    let c8 = null;
    let c5;
    let closure_9 = {};
    const set = new Set();
    let closure_11 = {};
  }
});
let result = set.fileFinishedImporting("modules/collectibles/CollectiblesShopStore.tsx");

export default tmp3;
