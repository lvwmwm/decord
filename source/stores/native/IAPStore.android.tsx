// Module ID: 5619
// Function ID: 47948
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5620, 482, 5616, 3791, 566, 686, 2]

// Module 5619 (_isNativeReflectConstruct)
import sum from "sum";
import formatSingleCurrencyPrice from "formatSingleCurrencyPrice";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import GPlayConnectionState from "GPlayConnectionState";
import { CurrencyCodes } from "sum";
import set from "_possibleConstructorReturn";

const require = arg1;
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
  if ("BG" === c19) {
    if (formatted === CurrencyCodes.EUR) {
      let obj = { convertToMajorUnits: false };
      let formatDualPriceForBGResult = require(5616) /* formatSingleCurrencyPrice */.formatDualPriceForBG(result, obj);
      const obj2 = require(5616) /* formatSingleCurrencyPrice */;
    }
    obj = {};
    const merged = Object.assign(currencyCode);
    obj["price"] = currencyCode.price;
    obj["currencyCode"] = formatted;
    obj["priceString"] = formatDualPriceForBGResult;
    return obj;
  }
  obj = require(5616) /* formatSingleCurrencyPrice */;
  formatDualPriceForBGResult = obj.formatSingleCurrencyPrice(result, formatted, { convertToMajorUnits: false });
}
function skusLoaded(arg0) {
  let skus;
  let skusType;
  ({ skus, skusType } = arg0);
  let item = skus.forEach((identifier) => {
    const result = outer1_12.set(identifier.identifier, identifier);
  });
  const arr = Array.from(map.values());
  let found;
  if (null != arr) {
    found = arr.filter((arg0) => null != arg0);
  }
  let mapped = found;
  if (null != found) {
    const item1 = found.forEach((offerIds) => {
      offerIds = undefined;
      if (null != offerIds) {
        offerIds = offerIds.offerIds;
      }
      if (null != offerIds) {
        const item = offerIds.forEach((arg0) => outer2_13.add(arg0));
      }
    });
  }
  mapped = undefined;
  if (null != mapped) {
    mapped = mapped.map(updateProduct);
  }
  while (true) {
    let arr3 = mapped;
    if (null == mapped) {
      break;
    } else {
      let tmp8 = tmp7;
      let item2 = arr3.forEach((identifier) => {
        const result = outer1_12.set(identifier.identifier, identifier);
      });
      break;
    }
    let tmp10 = skusType;
    let tmp11 = GPlaySkusType;
    if (GPlaySkusType.IN_APP === skusType) {
      let flag2 = false;
      let c17 = false;
    } else {
      let tmp12 = GPlaySkusType;
      if (GPlaySkusType.SUBSCRIPTION === skusType) {
        let flag = false;
        let c18 = false;
      }
    }
  }
}
GPlayConnectionState = GPlayConnectionState.GPlayConnectionState;
const GPlaySkusType = GPlayConnectionState.GPlaySkusType;
const DISCONNECTED = GPlayConnectionState.DISCONNECTED;
let c11 = null;
const map = new Map();
let set = new Set();
const set1 = new Set();
let c15 = null;
let c16 = false;
let c17 = false;
let c18 = false;
let c19 = null;
let tmp6 = ((Store) => {
  class IAPStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, IAPStore);
      obj = outer1_5(IAPStore);
      tmp2 = outer1_4;
      if (outer1_20()) {
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
  callback2(IAPStore, Store);
  let obj = {
    key: "getProducts",
    value() {
      return outer1_11;
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getOfferIds",
    value() {
      return outer1_13;
    }
  };
  items[1] = obj;
  obj = {
    key: "getProduct",
    value(arg0) {
      const value = outer1_12.get(arg0);
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
      return outer1_14.size > 0 || outer1_16;
    }
  };
  items[4] = {
    key: "isPurchasingProduct",
    value(arg0) {
      return outer1_14.has(arg0);
    }
  };
  items[5] = {
    key: "isReady",
    value() {
      return outer1_10 === outer1_7.CONNECTED;
    }
  };
  items[6] = {
    key: "hasConnectionError",
    value() {
      return outer1_10 === outer1_7.ERROR;
    }
  };
  items[7] = {
    key: "getPendingDowngrade",
    value() {
      return outer1_15;
    }
  };
  items[8] = {
    key: "isFetchingGoogleSkus",
    value() {
      let tmp = outer1_18;
      if (!outer1_18) {
        tmp = outer1_17;
      }
      return tmp;
    }
  };
  items[9] = {
    key: "isFetchingProducts",
    value() {
      let tmp = outer1_18;
      if (!outer1_18) {
        tmp = outer1_17;
      }
      return tmp;
    }
  };
  items[10] = {
    key: "getUserCountry",
    value() {
      return outer1_19;
    }
  };
  return callback(IAPStore, items);
})(require("initialize").Store);
tmp6.displayName = "IAPStore";
tmp6 = new tmp6(require("dispatcher"), {
  GPLAY_UPDATE_CONNECTION_STATE: function updateConnectionState(connectionState) {
    connectionState = connectionState.connectionState;
  },
  GPLAY_FETCH_SUBSCRIPTION_SKUS_START: function handleFetchSubscriptionSkusStart() {
    let c18 = true;
  },
  GPLAY_SUBSCRIPTION_SKUS_LOADED: skusLoaded,
  GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: function handleFetchSubscriptionSkusFailed() {
    let c18 = false;
  },
  GPLAY_FETCH_IN_APP_SKUS_START: function handleFetchInAppSkusStart() {
    let c17 = true;
  },
  GPLAY_IN_APP_SKUS_LOADED: skusLoaded,
  GPLAY_FETCH_IN_APP_SKUS_FAILED: function handleFetchInAppSkusFailed() {
    let c17 = false;
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
let result = set.fileFinishedImporting("stores/native/IAPStore.android.tsx");

export default tmp6;
