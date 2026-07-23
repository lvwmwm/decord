// Module ID: 5616
// Function ID: 47858
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1921, 1327, 566, 686, 2]

// Module 5616 (_isNativeReflectConstruct)
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
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
  let closure_0 = arg1;
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
      const items = [outer1_13({ type: "sku", skuId }), closure_0];
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
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let tmp2 = ((Store) => {
  class SKUPricesStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, SKUPricesStore);
      obj = outer1_5(SKUPricesStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
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
  callback2(SKUPricesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
      const items = [outer1_7];
      this.syncWith(items, outer1_15);
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "getPricesForSkuId",
    value(arg0) {
      if (null != arg0) {
        let pricingResultId;
        if (null != outer1_11[arg0]) {
          pricingResultId = tmp2.pricingResultId;
        }
        if (null != pricingResultId) {
          return outer1_9[pricingResultId];
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
        return outer1_8[outer1_13(undefined, obj)];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFetchStateForApplicationId",
    value(applicationId) {
      if (null != applicationId) {
        const obj = { type: "application", applicationId };
        return outer1_8[outer1_13(undefined, obj)];
      }
    }
  };
  items[4] = {
    key: "getRewardsForSkuId",
    value(arg0) {
      if (null != arg0) {
        if (null != outer1_11[arg0]) {
          const mapped = tmp2.rewardResultIds.map((arg0) => outer2_10[arg0]);
          return mapped.filter(SKUPricesStore(outer1_1[6]).isNotNullish);
        }
      }
    }
  };
  return callback(SKUPricesStore, items);
})(require("initialize").Store);
tmp2.displayName = "SKUPricesStore";
tmp2 = new tmp2(require("dispatcher"), {
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
    const merged = Object.assign(obj);
    const merged1 = Object.assign(data.pricingResultIdMap);
    const obj1 = {};
    const merged2 = Object.assign(obj1);
    const merged3 = Object.assign(data.skuPriceMap);
    const obj2 = {};
    const merged4 = Object.assign(obj2);
    const merged5 = Object.assign(data.rewardResultIdMap);
  },
  SKUS_PRICING_FETCH_FAIL: function handleFetchFail(priceId) {
    setPriceIdState(priceId.priceId, { type: "error", fetchedAt: Date.now() });
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: resetStoreState
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/storefront/SKUPricesStore.tsx");

export default tmp2;
