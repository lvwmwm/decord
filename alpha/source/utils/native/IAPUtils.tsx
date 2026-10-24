// Module ID: 13908
// Function ID: 13909
// Name: IAPUtils
// Dependencies: [5, 17, 5237, 5646, 1392, 7524, 1087, 1394, 1384, 13909, 13910, 3, 38, 13929, 7519, 12, 1281, 4787, 558, 576, 504, 13930, 1383, 4928, 13931, 2]
// Exports: makeIAPRequest, manageSubscription, shouldMockIAPForceEnable

// Module 13908 (IAPUtils)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import v1 from "v1" /* 1281 */;
import react_nativeAll from "react-native" /* 1383 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import DeviceUtils from "DeviceUtils" /* 4928 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5646 */;
import react_native2 from "react-native" /* 13909 */;
import _mod13910 from "module_13910" /* 13910 */;
import StorekitIAPQueueDefault from "StorekitIAPQueue" /* 13929 */;
import GeneratedPaymentCurrencies from "GeneratedPaymentCurrencies" /* 13930 */;
import iapProducts from "iapProducts" /* 13931 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import DevSettingsStore from "DevSettingsStore" /* 5237 */;
import UserStore from "UserStore" /* 1392 */;
import IAPStore from "IAPStore" /* 7524 */;
import Constants from "Constants" /* 1087 */;
import PlatformUtils_mod from "PlatformUtils" /* 1384 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, arr4, c4, closure_3, closure_4, closure_5;

let IOS_BUNDLE_ID;
let metroImportAll;
let tmp;
const ProductIds = tmp(7519);
function serializePurchaseResponse(originalTransactionDate) {
  let parsed;
  _modDef38(null != originalTransactionDate.transactionId, "should have transactionId");
  obj = { originalTransactionDate: originalTransactionDate.originalTransactionDateIOS, originalTransactionIdentifier: parsed, transactionDate: originalTransactionDate.transactionDate, transactionIdentifier: parseInt(originalTransactionDate.transactionId), productIdentifier: null, transactionReceipt: null, jwsRepresentation: null };
  parsed = undefined;
  if (null != originalTransactionDate.originalTransactionIdentifierIOS) {
    const _parseInt = parseInt;
    parsed = parseInt(originalTransactionDate.originalTransactionIdentifierIOS);
  }
  ({ productId: obj.productIdentifier, transactionReceipt: obj.transactionReceipt, verificationResultIOS: obj.jwsRepresentation } = originalTransactionDate);
  return obj;
}
function convertToUUID(id) {
  obj = v1;
  return obj.v5(id, NAMESPACE_SNOWFLAKE_UUID);
}
let obj = function _makeIAPRequest() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let code = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2) {
      let first;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              closure_0 = undefined;
              currentUser = currentUser.getCurrentUser();
              const tmp45 = closure_0;
              const tmp46 = code;
              const tmp47 = closure_2;
              if (null == currentUser) {
                const _Error2 = Error;
                const self3 = this;
                const self4 = this;
                const error = new Error("purchaseProduct: no valid user");
                throw error;
              } else {
                c6 = 1;
                const obj5 = { requestJSONString: tmp45, sku: tmp46, appAccountToken: convertToUUID(currentUser.id), andDangerouslyFinishTransactionAutomaticallyIOS: false, useACOM: tmp47 };
                const requestPurchase = require("module_13910").requestPurchase;
                require("module_13910");
                c7 = 2;
                c8 = 1;
                const obj6 = { value: requestPurchase(obj5), done: false };
                return obj6;
              }
            }
          } else if (1 === c7) {
            c6 = 0;
            code = closure_5;
            if (!closure_132_13.has(code.code)) {
              const obj4 = closure_132_0(closure_132_3[17]);
              const result = obj4.captureBillingException(code);
            }
            throw code;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            closure_0 = value;
            const _Object = Object;
            if (closure_0 instanceof Object) {
              const _Array = Array;
              obj = { purchaseResponse: closure_132_14(closure_0), originalPurchase: first };
              if (Array.isArray(closure_0)) {
                first = tmp13[0];
              } else {
                first = tmp13;
              }
              c6 = 0;
              c8 = 3;
              return { value: obj, done: true };
            } else {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error1 = new Error("Unable to select a platform, no request was made");
              throw error1;
            }
          }
        } catch (tmp35) {
          closure_5 = tmp35;
          if (0 === c6) {
            c8 = 3;
            throw tmp35;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _purchaseProduct() {
  let currentUser;
  obj = _asyncToGenerator(async (sku, withOffer, appAccountToken) => {
    let c5 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2) {
      let obj3;
      let obj7;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = undefined;
              if (null == currentUser.getCurrentUser()) {
                const _Error2 = Error;
                const self3 = this;
                const self4 = this;
                const error = new Error("purchaseProduct: no valid user");
                throw error;
              } else {
                c5 = 1;
                c6 = 1;
                const obj5 = { value: obj7.clearTransactionIOS(), done: false };
                obj7 = require("module_13910");
                return obj5;
              }
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c5 = 2;
              c6 = 1;
              const obj8 = { sku, appAccountToken, withOffer };
              const obj9 = { value: obj3.requestPurchase(obj8), done: false };
              obj3 = closure_132_0(closure_132_3[10]);
              return obj9;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_3 = value;
            const _Object = Object;
            if (closure_3 instanceof Object) {
              c6 = 3;
              obj = { value: closure_132_14(closure_3), done: true };
              return obj;
            } else {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error1 = new Error("Unable to select a platform, no request was made");
              throw error1;
            }
          }
        } catch (tmp26) {
          c6 = 3;
          throw tmp26;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _restorePurchases() {
  obj = _asyncToGenerator(async (arg0) => {
    let arr2;
    let fullRestore = arg0;
    let c7 = 0;
    let c8 = 0;
    const iter = (async (arg0, value) => {
      let obj16;
      let obj6;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_2;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_4 = tmp4;
              fullRestore = undefined;
              fullRestore = fullRestore.fullRestore;
              value = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else if (closure_131_19()) {
              if (fullRestore) {
                c7 = 2;
                c8 = 1;
                const obj5 = { value: closure_131_11.sync(), done: false };
                return obj5;
              } else {
                c7 = 3;
                c8 = 1;
                const obj7 = { value: closure_131_11.getPendingTransactions(), done: false };
                return obj7;
              }
            } else {
              c8 = 3;
              return { value: [], done: true };
            }
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_131_1(closure_131_3[15]);
              c7 = 4;
              c8 = 1;
              const obj11 = { value: obj6.getAvailablePurchases({ onlyIncludeActiveItems: false }), done: false };
              obj6 = closure_131_0(closure_131_3[10]);
              return obj11;
            }
          } else {
            let filter;
            if (3 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              } else {
                closure_2 = value;
                const arr3 = closure_131_1(closure_131_3[15]);
                closure_3 = arr3.map(closure_2, (id) => id.id);
                filter = closure_131_1(closure_131_3[15]).filter;
                c7 = 5;
                c8 = 1;
                arr4 = closure_131_1(closure_131_3[15]);
                const obj13 = { value: obj16.getAvailablePurchases({ onlyIncludeActiveItems: false }), done: false };
                obj16 = closure_131_0(closure_131_3[10]);
                return obj13;
              }
            } else {
              if (4 === c7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c8 = 3;
                  return { value, done: true };
                } else {
                  value = map(value, (originalPurchase) => {
                    let obj3;
                    let parsed;
                    obj = { originalPurchase, purchaseResponse: obj3 };
                    closure_1_1(closure_1_3[12])(null != originalPurchase.transactionId, "should have transactionId");
                    obj3 = { originalTransactionDate: originalPurchase.originalTransactionDateIOS, originalTransactionIdentifier: parsed, transactionDate: originalPurchase.transactionDate, transactionIdentifier: parseInt(originalPurchase.transactionId), productIdentifier: null, transactionReceipt: null, jwsRepresentation: null };
                    parsed = undefined;
                    if (null != originalPurchase.originalTransactionIdentifierIOS) {
                      const _parseInt = parseInt;
                      parsed = parseInt(originalPurchase.originalTransactionIdentifierIOS);
                    }
                    ({ productId: obj2.productIdentifier, transactionReceipt: obj2.transactionReceipt, verificationResultIOS: obj2.jwsRepresentation } = originalPurchase);
                    return obj;
                  });
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const arr = filter(value, (transactionId) => {
                  let hasItem = null != transactionId.transactionId;
                  if (hasItem) {
                    const _parseInt = parseInt;
                    hasItem = closure_1_3.includes(parseInt(transactionId.transactionId));
                  }
                  return hasItem;
                });
                value = arr.map((originalPurchase) => {
                  let obj3;
                  let parsed;
                  obj = { originalPurchase, purchaseResponse: obj3 };
                  closure_1_1(closure_1_3[12])(null != originalPurchase.transactionId, "should have transactionId");
                  obj3 = { originalTransactionDate: originalPurchase.originalTransactionDateIOS, originalTransactionIdentifier: parsed, transactionDate: originalPurchase.transactionDate, transactionIdentifier: parseInt(originalPurchase.transactionId), productIdentifier: null, transactionReceipt: null, jwsRepresentation: null };
                  parsed = undefined;
                  if (null != originalPurchase.originalTransactionIdentifierIOS) {
                    const _parseInt = parseInt;
                    parsed = parseInt(originalPurchase.originalTransactionIdentifierIOS);
                  }
                  ({ productId: obj2.productIdentifier, transactionReceipt: obj2.transactionReceipt, verificationResultIOS: obj2.jwsRepresentation } = originalPurchase);
                  return obj;
                });
              }
              c8 = 3;
              return { value, done: true };
            }
          }
        } catch (tmp21) {
          c8 = 3;
          throw tmp21;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function isStorekit2Available() {
  obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    let isAvailableResult;
    const obj2 = RNIapIosSk2;
    if (RNIapIosSk2 != null) {
      isAvailableResult = obj2.isAvailable();
    }
    isIOSResult = 1 === isAvailableResult;
  }
  return isIOSResult;
}
function remapStorefront(countryCode) {
  let currency;
  const country = convertToAlpha2(countryCode.countryCode);
  if (null == countryCode.currency) {
    if (null == GeneratedPaymentCurrencies.GeneratedPaymentCurrenciesSets.APPLE_STORE_COUNTRY_CURRENCIES[country]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Unable to get currency from countryCode " + countryCode.countryCode);
      throw error;
    }
  } else {
    currency = metroImportAll[str.toUpperCase(str)];
  }
  return { currency, country };
}
obj = function _fetchStoreFront() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj4;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp;
            closure_0 = undefined;
            if (isStorekit2Available()) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj6 = { value: obj4.getStorefront(), done: false };
              obj4 = require("module_13910");
              return obj6;
            } else {
              c5 = 3;
              return { value: null, done: true };
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_1 = closure_2;
          const obj3 = closure_129_0(closure_129_3[17]);
          const result = obj3.captureBillingException(closure_1);
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          let tmp8;
          closure_0 = value;
          if (null != closure_0) {
            tmp8 = closure_129_20(closure_0);
          } else {
            tmp8 = closure_0;
          }
          c3 = 0;
          c5 = 3;
          obj = { value: tmp8, done: true };
          return obj;
        }
      } catch (tmp24) {
        closure_2 = tmp24;
        if (0 === c3) {
          c5 = 3;
          throw tmp24;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
const convertToAlpha2 = CountryCodeUtils.convertToAlpha2;
({ CurrencyCodes: metroImportAll, IOS_BUNDLE_ID } = Constants);
const StoreKitErrors = Constants.StoreKitErrors;
const NAMESPACE_SNOWFLAKE_UUID = PremiumConstants.NAMESPACE_SNOWFLAKE_UUID;
const RNIapIosSk2 = NativeModules.RNIapIosSk2;
let PlatformUtils = PlatformUtils_mod;
let _default = null;
if (PlatformUtils.isIOS()) {
  _default = react_native2.default;
}
let items = [_mod13910.ErrorCode.E_USER_CANCELLED, StoreKitErrors.PAYMENT_CANCELED, _mod13910.ErrorCode.E_UNKNOWN];
let set = new Set(items);
let tmp5 = new LoggerDefault("IAPUtils.tsx");
obj = {
  loadProducts() {
    let nextPromise;
    const tmp = require;
    obj = PlatformUtils;
    if (obj.isIOS()) {
      const all = _Promise.all;
      const _Object = Object;
      let items = [, ];
      const obj2 = StorekitIAPQueueDefault;
      items[0] = obj2.fetchSubscriptions(Object.values(ProductIds.ProductIds));
      const _Object2 = Object;
      const obj3 = StorekitIAPQueueDefault;
      items[1] = obj3.fetchProducts(Object.values(ProductIds.ProductIds));
      const allResult = all(items);
      nextPromise = allResult.then((result) => {
        let tmp;
        [r10007, tmp] = result;
        set = new Set();
        const items = [...tmp];
        const arr = _modDef12;
        return arr.filter(items, (identifier) => {
          const hasItem = set.has(identifier.identifier);
          let flag = !hasItem;
          obj = set;
          if (flag) {
            obj.add(identifier.identifier);
            flag = true;
          }
          return flag;
        });
      });
    } else {
      nextPromise = _Promise.resolve([]);
    }
    return nextPromise;
  },
  purchaseProduct() {
    return obj(...arguments);
  },
  canMakePayments() {
    const promise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let tmp = _modDef38(null != _default, "StoreKit payments are only available on iOS");
      _default.canMakePayments(function(arg0) {
        const tmp = arg0;
        if (!tmp) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error();
          closure_1(error);
        }
        closure_0(arg0);
      });
    });
    return promise;
  },
  restorePurchases() {
    return obj(...arguments);
  },
  fetchStoreFront() {
    return obj(...arguments);
  }
};
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanPurchaseIAP(arg0) {
  let closure_0;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp9;
  _require = arg0;
  let tmp2 = dependencyMap;
  obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp6 = items1;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [IAPStore];
    cResult[3] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === arg0) {
    let tmp11;
    if (cResult[5] === stateFromStores) {
      tmp11 = cResult[6];
    }
    const tmpResult2 = require("get initialized");
    return !tmpResult2.useStateFromStores(tmp9, tmp11);
  }
  const fn2 = function f() {
    const isReadyResult = IAPStore.isReady();
    let tmp2 = !isReadyResult;
    if (isReadyResult) {
      let isBusyResult = obj.isBusy();
      if (isBusyResult) {
        isBusyResult = null == closure_0 || !IAPStore.isPurchasingProduct(tmp4);
        null == closure_0 || !IAPStore.isPurchasingProduct(tmp4);
      }
      tmp2 = isBusyResult;
    }
    if (!tmp2) {
      tmp2 = !stateFromStores;
    }
    return tmp2;
  };
  cResult[4] = arg0;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  tmp11 = fn2;
}) : (function useCanPurchaseIAP(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("get initialized");
  const items = [UserStore];
  let closure_1 = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, []);
  const items1 = [IAPStore];
  const obj2 = require("get initialized");
  return !obj2.useStateFromStores(items1, () => {
    const isReadyResult = IAPStore.isReady();
    let tmp2 = !isReadyResult;
    if (isReadyResult) {
      let isBusyResult = obj.isBusy();
      if (isBusyResult) {
        isBusyResult = null == closure_0 || !IAPStore.isPurchasingProduct(tmp4);
        null == closure_0 || !IAPStore.isPurchasingProduct(tmp4);
      }
      tmp2 = isBusyResult;
    }
    if (!tmp2) {
      tmp2 = !closure_1;
    }
    return tmp2;
  });
});
PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  const _module4 = PlatformUtils;
  let isIOSResult1 = _module4.isIOS();
  if (isIOSResult1) {
    const importAllResult = react_nativeAll;
    let Identifier = importAllResult.getConstants().Identifier;
    let _HermesInternal = HermesInternal;
    const str = ".local";
    let isRunningOnSimulator = Identifier.startsWith("" + IOS_BUNDLE_ID + ".local");
    if (!isRunningOnSimulator) {
      const _module5 = DeviceUtils;
      isRunningOnSimulator = _module5.getIsRunningOnSimulator();
    }
    isIOSResult1 = isRunningOnSimulator;
  }
  let value = isIOSResult1;
  if (!value) {
    value = DevSettingsStore.get("force_mock_iap");
  }
  PlatformUtils = value;
}
if (PlatformUtils) {
  obj = iapProducts.default;
}
function shouldMockIAPForceEnable() {
  obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    const obj2 = react_nativeAll;
    const Identifier = obj2.getConstants().Identifier;
    const _HermesInternal = HermesInternal;
    let isRunningOnSimulator = Identifier.startsWith("" + IOS_BUNDLE_ID + ".local");
    if (!isRunningOnSimulator) {
      const tmpResult = DeviceUtils;
      isRunningOnSimulator = tmpResult.getIsRunningOnSimulator();
    }
    isIOSResult = isRunningOnSimulator;
  }
  return isIOSResult;
}
let result = size.fileFinishedImporting("utils/native/IAPUtils.tsx");

export default obj;
export { convertToUUID };
export const makeIAPRequest = function makeIAPRequest() {
  return obj(...arguments);
};
export const useCanPurchaseIAP = tmp6;
export { isStorekit2Available };
export { remapStorefront };
export const manageSubscription = function manageSubscription() {
  let result;
  obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    let isAvailableResult;
    const obj2 = RNIapIosSk2;
    if (RNIapIosSk2 != null) {
      isAvailableResult = obj2.isAvailable();
    }
    isIOSResult = 1 === isAvailableResult;
  }
  if (isIOSResult) {
    result = RNIapIosSk2.showManageSubscriptions();
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("StoreKit 2 is not available");
    result = reject(error);
  }
  return result;
};
export { shouldMockIAPForceEnable };
