// Module ID: 6785
// Function ID: 53554
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6785 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const map = new Map();
let closure_9 = false;
let closure_10;
let closure_11;
let closure_12;
let closure_13 = false;
let tmp3 = (Store) => {
  class CollectiblesPurchaseStore {
    constructor() {
      self = this;
      tmp = closure_2(this, CollectiblesPurchaseStore);
      obj = closure_5(CollectiblesPurchaseStore);
      tmp2 = closure_4;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = CollectiblesPurchaseStore;
  callback2(CollectiblesPurchaseStore, Store);
  let obj = {
    key: "isFetching",
    get() {
      return closure_9;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "isClaiming",
    get() {
      return closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "purchases",
    get() {
      return closure_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "fetchError",
    get() {
      return closure_11;
    }
  };
  items[4] = {
    key: "claimError",
    get() {
      return closure_12;
    }
  };
  items[5] = {
    key: "hasPreviouslyFetched",
    get() {
      return closure_13;
    }
  };
  items[6] = {
    key: "getPurchase",
    value(arg0) {
      let value;
      if (null != arg0) {
        value = closure_8.get(arg0);
      }
      return value;
    }
  };
  items[7] = {
    key: "getPurchases",
    value(arr) {
      const mapped = arr.map((arg0) => closure_8.get(arg0));
      return mapped.filter((arg0) => null != arg0);
    }
  };
  return callback(CollectiblesPurchaseStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp3.displayName = "CollectiblesPurchaseStore";
tmp3 = new tmp3(importDefault(dependencyMap[7]), {
  COLLECTIBLES_PURCHASES_FETCH: function handlePurchasesFetch() {
    let closure_9 = true;
    let closure_11;
  },
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: function handlePurchasesFetchSuccess(purchases) {
    if (0 !== purchases.purchases.length) {
      const items = [];
      HermesBuiltin.arraySpread(map.values(), 0);
      if (!obj.isEqual(items, purchases.purchases)) {
        const _Map = Map;
        purchases = purchases.purchases;
        const map = new Map(purchases.map((skuId) => {
          const items = [skuId.skuId, skuId];
          return items;
        }));
      }
      const obj = arg1(dependencyMap[5]);
    }
    let closure_13 = true;
    let closure_9 = false;
    let closure_11;
  },
  COLLECTIBLES_PURCHASES_FETCH_FAILURE: function handlePurchasesFetchFailure(error) {
    let closure_8 = map;
    let closure_9 = false;
    error = error.error;
    let closure_13 = true;
  },
  COLLECTIBLES_CLAIM: function handleClaim(skuId) {
    skuId = skuId.skuId;
    let closure_12;
  },
  COLLECTIBLES_CLAIM_SUCCESS: function handleClaimSuccess(purchases) {
    if (null != purchases.purchases) {
      if (0 !== purchases.purchases.length) {
        const items = [];
        HermesBuiltin.arraySpread(map.values(), 0);
        if (!obj.isEqual(items, purchases.purchases)) {
          const _Map = Map;
          purchases = purchases.purchases;
          const map = new Map(purchases.map((skuId) => {
            const items = [skuId.skuId, skuId];
            return items;
          }));
        }
        const obj = arg1(dependencyMap[5]);
      }
      let closure_10;
      let closure_12;
    }
  },
  COLLECTIBLES_CLAIM_FAILURE: function handleClaimFailure(arg0) {
    ({ skuId: closure_10, error: closure_12 } = arg0);
  },
  LOGOUT: function handleLogout() {
    let closure_8 = map;
    let closure_9 = false;
    let closure_10;
    let closure_11;
    let closure_12;
    let closure_13 = false;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/CollectiblesPurchaseStore.tsx");

export default tmp3;
