// Module ID: 6790
// Function ID: 53605
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 22, 566, 686, 2]

// Module 6790 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let map = new Map();
let c9 = false;
let c10;
let c11;
let c12;
let c13 = false;
let tmp3 = ((Store) => {
  class CollectiblesPurchaseStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, CollectiblesPurchaseStore);
      obj = outer1_5(CollectiblesPurchaseStore);
      tmp2 = outer1_4;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(CollectiblesPurchaseStore, Store);
  let obj = {
    key: "isFetching",
    get() {
      return outer1_9;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "isClaiming",
    get() {
      return outer1_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "purchases",
    get() {
      return outer1_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "fetchError",
    get() {
      return outer1_11;
    }
  };
  items[4] = {
    key: "claimError",
    get() {
      return outer1_12;
    }
  };
  items[5] = {
    key: "hasPreviouslyFetched",
    get() {
      return outer1_13;
    }
  };
  items[6] = {
    key: "getPurchase",
    value(arg0) {
      let value;
      if (null != arg0) {
        value = outer1_8.get(arg0);
      }
      return value;
    }
  };
  items[7] = {
    key: "getPurchases",
    value(arr) {
      const mapped = arr.map((arg0) => outer2_8.get(arg0));
      return mapped.filter((arg0) => null != arg0);
    }
  };
  return callback(CollectiblesPurchaseStore, items);
})(require("initialize").Store);
tmp3.displayName = "CollectiblesPurchaseStore";
tmp3 = new tmp3(require("dispatcher"), {
  COLLECTIBLES_PURCHASES_FETCH: function handlePurchasesFetch() {
    let c9 = true;
    let c11;
  },
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: function handlePurchasesFetchSuccess(purchases) {
    if (0 !== purchases.purchases.length) {
      let items = [];
      HermesBuiltin.arraySpread(map.values(), 0);
      if (!obj.isEqual(items, purchases.purchases)) {
        const _Map = Map;
        purchases = purchases.purchases;
        map = new Map(purchases.map((skuId) => {
          const items = [skuId.skuId, skuId];
          return items;
        }));
      }
      obj = require(22) /* apply */;
    }
    let c13 = true;
    let c9 = false;
    let c11;
  },
  COLLECTIBLES_PURCHASES_FETCH_FAILURE: function handlePurchasesFetchFailure(error) {
    let closure_8 = map;
    let c9 = false;
    error = error.error;
    let c13 = true;
  },
  COLLECTIBLES_CLAIM: function handleClaim(skuId) {
    skuId = skuId.skuId;
    let c12;
  },
  COLLECTIBLES_CLAIM_SUCCESS: function handleClaimSuccess(purchases) {
    if (null != purchases.purchases) {
      if (0 !== purchases.purchases.length) {
        let items = [];
        HermesBuiltin.arraySpread(map.values(), 0);
        if (!obj.isEqual(items, purchases.purchases)) {
          const _Map = Map;
          purchases = purchases.purchases;
          map = new Map(purchases.map((skuId) => {
            const items = [skuId.skuId, skuId];
            return items;
          }));
        }
        obj = require(22) /* apply */;
      }
      let c10;
      let c12;
    }
  },
  COLLECTIBLES_CLAIM_FAILURE: function handleClaimFailure(arg0) {
    let c10;
    let c12;
    ({ skuId: c10, error: c12 } = arg0);
  },
  LOGOUT: function handleLogout() {
    let closure_8 = map;
    let c9 = false;
    let c10;
    let c11;
    let c12;
    let c13 = false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/collectibles/CollectiblesPurchaseStore.tsx");

export default tmp3;
