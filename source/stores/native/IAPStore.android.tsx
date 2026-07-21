// Module ID: 5617
// Function ID: 47908
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5617 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateProduct(currencyCode) {
  const formatted = currencyCode.currencyCode.toLowerCase();
  const result = currencyCode.price / 100;
  if ("BG" === closure_19) {
    if (formatted === CurrencyCodes.EUR) {
      let obj = { convertToMajorUnits: false };
      let formatDualPriceForBGResult = arg1(dependencyMap[7]).formatDualPriceForBG(result, obj);
      const obj2 = arg1(dependencyMap[7]);
    }
    obj = {};
    const merged = Object.assign(currencyCode);
    obj["price"] = currencyCode.price;
    obj["currencyCode"] = formatted;
    obj["priceString"] = formatDualPriceForBGResult;
    return obj;
  }
  obj = arg1(dependencyMap[7]);
  formatDualPriceForBGResult = obj.formatSingleCurrencyPrice(result, formatted, { convertToMajorUnits: false });
}
function skusLoaded(arg0) {
  let skus;
  let skusType;
  ({ skus, skusType } = arg0);
  const item = skus.forEach((identifier) => {
    const result = store.set(identifier.identifier, identifier);
  });
  const arr = Array.from(map.values());
  let found;
  if (null != arr) {
    found = arr.filter((arg0) => null != arg0);
  }
  let closure_11 = found;
  if (null != found) {
    const item1 = found.forEach((offerIds) => {
      offerIds = undefined;
      if (null != offerIds) {
        offerIds = offerIds.offerIds;
      }
      if (null != offerIds) {
        const item = offerIds.forEach((arg0) => set.add(arg0));
      }
    });
  }
  let mapped;
  if (null != closure_11) {
    mapped = closure_11.map(updateProduct);
  }
  closure_11 = mapped;
  while (true) {
    let arr3 = closure_11;
    if (null == closure_11) {
      break;
    } else {
      let tmp8 = tmp7;
      let item2 = arr3.forEach((identifier) => {
        const result = store.set(identifier.identifier, identifier);
      });
      // break
    }
    let tmp10 = skusType;
    let tmp11 = GPlaySkusType;
    if (GPlaySkusType.IN_APP === skusType) {
      let flag2 = false;
      let closure_17 = false;
    } else {
      let tmp12 = GPlaySkusType;
      if (GPlaySkusType.SUBSCRIPTION === skusType) {
        let flag = false;
        let closure_18 = false;
      }
    }
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const GPlayConnectionState = tmp2.GPlayConnectionState;
const GPlaySkusType = tmp2.GPlaySkusType;
const CurrencyCodes = arg1(dependencyMap[6]).CurrencyCodes;
const DISCONNECTED = GPlayConnectionState.DISCONNECTED;
let closure_11 = null;
const map = new Map();
const set = new Set();
const set1 = new Set();
let closure_15 = null;
let closure_16 = false;
let closure_17 = false;
let closure_18 = false;
let closure_19 = null;
let tmp6 = (Store) => {
  class IAPStore {
    constructor() {
      self = this;
      tmp = closure_2(this, IAPStore);
      obj = closure_5(IAPStore);
      tmp2 = closure_4;
      if (closure_20()) {
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
  const arg1 = IAPStore;
  callback2(IAPStore, Store);
  let obj = {
    key: "getProducts",
    value() {
      return closure_11;
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getOfferIds",
    value() {
      return closure_13;
    }
  };
  items[1] = obj;
  obj = {
    key: "getProduct",
    value(arg0) {
      const value = closure_12.get(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isBusy",
    value() {
      return set.size > 0 || closure_16;
    }
  };
  items[4] = {
    key: "isPurchasingProduct",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[5] = {
    key: "isReady",
    value() {
      return closure_10 === constants.CONNECTED;
    }
  };
  items[6] = {
    key: "hasConnectionError",
    value() {
      return closure_10 === constants.ERROR;
    }
  };
  items[7] = {
    key: "getPendingDowngrade",
    value() {
      return closure_15;
    }
  };
  items[8] = {
    key: "isFetchingGoogleSkus",
    value() {
      let tmp = closure_18;
      if (!closure_18) {
        tmp = closure_17;
      }
      return tmp;
    }
  };
  items[9] = {
    key: "isFetchingProducts",
    value() {
      let tmp = closure_18;
      if (!closure_18) {
        tmp = closure_17;
      }
      return tmp;
    }
  };
  items[10] = {
    key: "getUserCountry",
    value() {
      return closure_19;
    }
  };
  return callback(IAPStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp6.displayName = "IAPStore";
tmp6 = new tmp6(importDefault(dependencyMap[10]), {
  GPLAY_UPDATE_CONNECTION_STATE: function updateConnectionState(connectionState) {
    const DISCONNECTED = connectionState.connectionState;
  },
  GPLAY_FETCH_SUBSCRIPTION_SKUS_START: function handleFetchSubscriptionSkusStart() {
    let closure_18 = true;
  },
  GPLAY_SUBSCRIPTION_SKUS_LOADED: skusLoaded,
  GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: function handleFetchSubscriptionSkusFailed() {
    let closure_18 = false;
  },
  GPLAY_FETCH_IN_APP_SKUS_START: function handleFetchInAppSkusStart() {
    let closure_17 = true;
  },
  GPLAY_IN_APP_SKUS_LOADED: skusLoaded,
  GPLAY_FETCH_IN_APP_SKUS_FAILED: function handleFetchInAppSkusFailed() {
    let closure_17 = false;
  },
  GPLAY_VERIFICATION_START: function handleVerificationStart(productId) {
    set1.add(productId.productId);
  },
  GPLAY_VERIFICATION_END: function handleVerificationEnd(productId) {
    productId = productId.productId;
    if (set1.has(productId)) {
      set1.delete(productId);
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Tried verifying product without initialization: " + productId);
      throw error;
    }
  },
  GPLAY_UPDATE_PENDING_DOWNGRADE: function handleUpdatePendingDowngrade(pendingDowngrade) {
    pendingDowngrade = pendingDowngrade.pendingDowngrade;
  },
  GPLAY_UPDATE_IS_DOWNGRADING: function handleUpdateIsDowngrading(isDowngrading) {
    isDowngrading = isDowngrading.isDowngrading;
  },
  GPLAY_SET_USER_COUNTRY: function handleSetUserCountry(countryCode) {
    countryCode = countryCode.countryCode;
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("stores/native/IAPStore.android.tsx");

export default tmp6;
