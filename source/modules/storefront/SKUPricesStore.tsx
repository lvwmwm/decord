// Module ID: 5612
// Function ID: 47815
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5612 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function serializeStorefrontPriceId(type) {
  if ("application" === type.type) {
    const _HermesInternal2 = HermesInternal;
    let combined = "application:" + type.applicationId;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "skus:" + type.skuId;
  }
  return combined;
}
function setPriceIdState(priceId, arg1) {
  if ("application" === priceId.type) {
    let obj = {};
    const merged = Object.assign(closure_8);
    obj = { type: "application", applicationId: priceId.applicationId };
    obj[serializeStorefrontPriceId(obj)] = arg1;
    let tmp7 = obj;
  } else {
    obj = {};
    const merged1 = Object.assign(closure_8);
    const _Object = Object;
    const skuIds = priceId.skuIds;
    const merged2 = Object.assign(Object.fromEntries(skuIds.map((skuId) => {
      const items = [callback({ type: "sku", skuId }), arg1];
      return items;
    })));
    tmp7 = obj;
  }
  closure_8 = tmp7;
}
function resetStoreState() {
  let closure_8 = {};
  let closure_9 = {};
  let closure_10 = {};
  let closure_11 = {};
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let tmp2 = (Store) => {
  class SKUPricesStore {
    constructor() {
      self = this;
      tmp = closure_2(this, SKUPricesStore);
      obj = closure_5(SKUPricesStore);
      tmp2 = closure_4;
      if (closure_12()) {
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
  const arg1 = SKUPricesStore;
  callback2(SKUPricesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
      const items = [closure_7];
      this.syncWith(items, closure_15);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getPricesForSkuId",
    value(arg0) {
      if (null != arg0) {
        let pricingResultId;
        if (null != closure_11[arg0]) {
          pricingResultId = tmp2.pricingResultId;
        }
        if (null != pricingResultId) {
          return closure_9[pricingResultId];
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getFetchStateForSkuId",
    value(skuId) {
      if (null != skuId) {
        const obj = { type: "sku", skuId };
        return closure_8[closure_13(undefined, obj)];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFetchStateForApplicationId",
    value(applicationId) {
      if (null != applicationId) {
        const obj = { type: "application", applicationId };
        return closure_8[closure_13(undefined, obj)];
      }
    }
  };
  items[4] = {
    key: "getRewardsForSkuId",
    value(arg0) {
      if (null != arg0) {
        if (null != closure_11[arg0]) {
          const mapped = tmp2.rewardResultIds.map((arg0) => closure_10[arg0]);
          return mapped.filter(SKUPricesStore(closure_1[6]).isNotNullish);
        }
      }
    }
  };
  return callback(SKUPricesStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "SKUPricesStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  LOGOUT: resetStoreState,
  SKUS_PRICING_FETCH_START: function handleFetchStart(priceId) {
    setPriceIdState(priceId.priceId, { type: "loading" });
  },
  SKUS_PRICING_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let data;
    let priceId;
    ({ priceId, data } = arg0);
    const timestamp = Date.now();
    setPriceIdState(priceId, { type: "success", fetchedAt: timestamp });
    if ("application" === priceId.type) {
      let obj = { type: "skus" };
      const _Object = Object;
      obj.skuIds = Object.keys(data.skuPriceMap);
      obj = { type: "success", fetchedAt: timestamp };
      setPriceIdState(obj, obj);
    }
    obj = {};
    const merged = Object.assign(closure_9);
    const merged1 = Object.assign(data.pricingResultIdMap);
    closure_9 = obj;
    const merged2 = Object.assign(closure_11);
    const merged3 = Object.assign(data.skuPriceMap);
    closure_11 = {};
    const merged4 = Object.assign(closure_10);
    const merged5 = Object.assign(data.rewardResultIdMap);
    closure_10 = {};
  },
  SKUS_PRICING_FETCH_FAIL: function handleFetchFail(priceId) {
    setPriceIdState(priceId.priceId, { type: "error", fetchedAt: Date.now() });
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: resetStoreState
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/storefront/SKUPricesStore.tsx");

export default tmp2;
