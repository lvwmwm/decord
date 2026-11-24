// Module ID: 6853
// Function ID: 6854
// Name: SKUPricesStore
// Dependencies: [2188, 504, 1254, 572, 2]

// Module 6853 (SKUPricesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import LocaleStore from "LocaleStore" /* 2188 */;
import size from "module_2" /* 2 */;

const f89663 = (skuId) => {
  let combined;
  obj = { type: "sku", skuId };
  if ("application" === obj.type) {
    const _HermesInternal2 = HermesInternal;
    combined = "application:" + obj.applicationId;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "skus:" + obj.skuId;
  }
  const items = [combined, obj];
  return items;
};
function setPriceIdState(priceId, arg1) {
  let closure_0 = arg1;
  if ("application" === priceId.type) {
    let combined;
    const obj2 = {};
    const merged = Object.assign(obj4);
    obj3 = { type: "application", applicationId: priceId.applicationId };
    if ("application" === obj3.type) {
      const _HermesInternal2 = HermesInternal;
      combined = "application:" + obj3.applicationId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "skus:" + obj3.skuId;
    }
    obj2[combined] = arg1;
  } else {
    const merged1 = Object.assign(obj4);
    const _Object = Object;
    const skuIds = priceId.skuIds;
    const merged2 = Object.assign(Object.fromEntries(skuIds.map(f89663)));
  }
}
function resetStoreState() {

}
let obj4 = {};
let obj3 = {};
let obj5 = {};
obj4 = {};
let obj6 = {};
const Store = get_initializedDefault.Store;
class SKUPricesStore extends Store {
  initialize() {
    this.waitFor(LocaleStore);
    const items = [LocaleStore];
    this.syncWith(items, resetStoreState);
  }
  getPricesForSkuId(id) {
    if (null != id) {
      let pricingResultId;
      if (obj4[id] != null) {
        pricingResultId = tmp2.pricingResultId;
      }
      if (null != pricingResultId) {
        return obj3[pricingResultId];
      }
    }
  }
  getFetchStateForSkuId(skuId) {
    if (null != skuId) {
      let combined;
      const obj = { type: "sku", skuId };
      const tmp = obj4;
      if ("application" === obj.type) {
        const _HermesInternal2 = HermesInternal;
        combined = "application:" + obj.applicationId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "skus:" + obj.skuId;
      }
      return tmp[combined];
    }
  }
  getFetchStateForApplicationId(applicationId) {
    if (null != applicationId) {
      let combined;
      const obj = { type: "application", applicationId };
      const tmp = obj4;
      if ("application" === obj.type) {
        const _HermesInternal2 = HermesInternal;
        combined = "application:" + obj.applicationId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "skus:" + obj.skuId;
      }
      return tmp[combined];
    }
  }
  getPromotionIdsForSkuId(skuId) {
    if (null != skuId) {
      let prop;
      if (obj4[skuId] != null) {
        prop = tmp2.storefrontPromotionIds;
      }
      return prop;
    }
  }
  getOffersForSkuId(arg0) {
    if (null != arg0) {
      let offerResultIds;
      if (obj4[arg0] != null) {
        offerResultIds = tmp2.offerResultIds;
      }
      if (null != offerResultIds) {
        const mapped = offerResultIds.map((item) => obj6[item]);
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
  }
  getRewardsForSkuId(id) {
    if (null != id) {
      if (null != obj4[id]) {
        const rewardResultIds = obj4[id].rewardResultIds;
        const mapped = rewardResultIds.map((item) => obj5[item]);
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
  }
}
const prototype = SKUPricesStore.prototype;
SKUPricesStore.displayName = "SKUPricesStore";
let obj = {
  LOGOUT: resetStoreState,
  SKUS_PRICING_FETCH_START: function handleFetchStart(priceId) {
    priceId = priceId.priceId;
    const obj = { type: "loading" };
    if ("application" === priceId.type) {
      let combined;
      const obj2 = {};
      const merged = Object.assign(obj4);
      obj3 = { type: "application", applicationId: priceId.applicationId };
      if ("application" === obj3.type) {
        const _HermesInternal2 = HermesInternal;
        combined = "application:" + obj3.applicationId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "skus:" + obj3.skuId;
      }
      obj2[combined] = obj;
      obj4 = obj2;
    } else {
      obj4 = {};
      const merged1 = Object.assign(obj4);
      const _Object = Object;
      const skuIds = priceId.skuIds;
      const merged2 = Object.assign(Object.fromEntries(skuIds.map(f89663)));
    }
  },
  SKUS_PRICING_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let data;
    let priceId;
    ({ priceId, data } = arg0);
    const timestamp = Date.now();
    setPriceIdState(priceId, { type: "success", fetchedAt: timestamp });
    const tmp2 = setPriceIdState;
    if ("application" === priceId.type) {
      const _Object = Object;
      const obj = { type: "skus", skuIds: Object.keys(data.skuPriceMap) };
      const obj2 = { type: "success", fetchedAt: timestamp };
      tmp2(obj, obj2);
    }
    obj3 = {};
    const merged = Object.assign(obj3);
    const merged1 = Object.assign(data.pricingResultIdMap);
    obj4 = {};
    const merged2 = Object.assign(obj4);
    const merged3 = Object.assign(data.skuPriceMap);
    if ("skus" === priceId.type) {
      const skuIds = priceId.skuIds;
      const iter = skuIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (null == data.skuPriceMap[nextResult]) {
          delete obj4[tmp12];
        }
        continue;
      }
    }
    obj5 = {};
    const merged4 = Object.assign(obj5);
    const merged5 = Object.assign(data.rewardResultIdMap);
    obj6 = {};
    const merged6 = Object.assign(obj6);
    const merged7 = Object.assign(data.offerResultIdMap);
  },
  SKUS_PRICING_FETCH_FAIL: function handleFetchFail(priceId) {
    priceId = priceId.priceId;
    let obj = { type: "error", fetchedAt: Date.now() };
    if ("application" === priceId.type) {
      let combined;
      const obj2 = {};
      const merged = Object.assign(obj4);
      obj3 = { type: "application", applicationId: priceId.applicationId };
      if ("application" === obj3.type) {
        let _HermesInternal2 = HermesInternal;
        combined = "application:" + obj3.applicationId;
      } else {
        let _HermesInternal = HermesInternal;
        combined = "skus:" + obj3.skuId;
      }
      obj2[combined] = obj;
      obj4 = obj2;
    } else {
      obj4 = {};
      const merged1 = Object.assign(obj4);
      const _Object = Object;
      const skuIds = priceId.skuIds;
      const merged2 = Object.assign(Object.fromEntries(skuIds.map(f89663)));
    }
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: resetStoreState
};
const sKUPricesStore = new SKUPricesStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/storefront/SKUPricesStore.tsx");

export default sKUPricesStore;
