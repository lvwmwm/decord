// Module ID: 10513
// Function ID: 10514
// Name: IAPUtils
// Dependencies: [5, 17, 4835, 5051, 1372, 6658, 1074, 1374, 10514, 3, 38, 1364, 10533, 6661, 12, 1255, 4503, 504, 10534, 1363, 4812, 10535, 2]
// Exports: makeIAPRequest, manageSubscription, shouldMockIAPForceEnable, useCanPurchaseIAP

// Module 10513 (IAPUtils)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import v1 from "v1" /* 1255 */;
import react_nativeAll from "react-native" /* 1363 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import DeviceUtils from "DeviceUtils" /* 4812 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5051 */;
import _mod10514 from "module_10514" /* 10514 */;
import StorekitIAPQueueDefault from "StorekitIAPQueue" /* 10533 */;
import GeneratedPaymentCurrencies from "GeneratedPaymentCurrencies" /* 10534 */;
import iapProducts from "iapProducts" /* 10535 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import UserStore from "UserStore" /* 1372 */;
import IAPStore from "IAPStore" /* 6658 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, appAccountToken, arr4, c4, closure_3, closure_4, code, currentUser, useACOM;

let IOS_BUNDLE_ID;
let closure_12;
let metroImportAll;
let tmp;
let unpackModuleId;
const ProductIds = tmp(6661);
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
let obj = function _restorePurchases() {
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
          return { value: "HermesInternal", done: null };
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
              return { value: "flex", done: true };
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else if (closure_131_17()) {
              if (fullRestore) {
                c7 = 2;
                c8 = 1;
                const obj5 = { value: closure_131_12.sync(), done: false };
                return obj5;
              } else {
                c7 = 3;
                c8 = 1;
                const obj7 = { value: closure_131_12.getPendingTransactions(), done: false };
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
              closure_131_1(closure_131_3[14]);
              c7 = 4;
              c8 = 1;
              const obj11 = { value: obj6.getAvailablePurchases({ onlyIncludeActiveItems: false }), done: false };
              obj6 = closure_131_0(closure_131_3[8]);
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
                const arr3 = closure_131_1(closure_131_3[14]);
                closure_3 = arr3.map(closure_2, (id) => id.id);
                filter = closure_131_1(closure_131_3[14]).filter;
                c7 = 5;
                c8 = 1;
                arr4 = closure_131_1(closure_131_3[14]);
                const obj13 = { value: obj16.getAvailablePurchases({ onlyIncludeActiveItems: false }), done: false };
                obj16 = closure_131_0(closure_131_3[8]);
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
                    closure_1_1(closure_1_3[10])(null != originalPurchase.transactionId, "should have transactionId");
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
                  closure_1_1(closure_1_3[10])(null != originalPurchase.transactionId, "should have transactionId");
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
    const obj2 = closure_12;
    if (closure_12 != null) {
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
        return { value: "HermesInternal", done: null };
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
              obj4 = require("module_10514");
              return obj6;
            } else {
              c5 = 3;
              return { value: null, done: true };
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_1 = closure_2;
          const obj3 = closure_129_0(closure_129_3[16]);
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
            tmp8 = closure_129_18(closure_0);
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
({ InAppUtils: unpackModuleId, RNIapIosSk2: closure_12 } = NativeModules);
let items = [_mod10514.ErrorCode.E_USER_CANCELLED, StoreKitErrors.PAYMENT_CANCELED];
let set = new Set(items);
const tmp4 = new LoggerDefault("IAPUtils.tsx");
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
  purchaseProduct(arg0, arg1, arg2) {
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_0 = _asyncToGenerator(async (sku, withOffer) => {
      let c6 = 0;
      let c7 = 0;
      let c5 = 0;
      return (async function(arg0, value) {
        let obj2;
        let obj6;
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else {
                closure_3 = tmp;
                appAccountToken = undefined;
                const tmp40 = withOffer;
                if (null != currentUser.getCurrentUser()) {
                  c5 = 1;
                  c6 = 2;
                  c7 = 1;
                  const obj5 = { value: obj6.clearTransactionIOS(), done: false };
                  obj6 = sku(closure_2_3[8]);
                  return obj5;
                } else {
                  const _Error2 = Error;
                  const self3 = this;
                  const self4 = this;
                  const error = new Error("purchaseProduct: no valid user");
                  tmp40(error);
                }
              }
            } else if (1 === c6) {
              c5 = 0;
              withOffer(closure_4);
            } else if (2 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                return { value, done: true };
              } else {
                c6 = 3;
                c7 = 1;
                const obj8 = { sku, appAccountToken, withOffer };
                const obj9 = { value: obj2.requestPurchase(obj8), done: false };
                obj2 = sku(closure_2_3[8]);
                return obj9;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              appAccountToken = value;
              const _Object = Object;
              if (appAccountToken instanceof Object) {
                sku(closure_2_14(appAccountToken));
                c5 = 0;
              } else {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error1 = new Error("Unable to select a platform, no request was made");
                throw error1;
              }
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp31) {
            closure_4 = tmp31;
            if (0 === c5) {
              c7 = 3;
              throw tmp31;
            } else {
              c6 = 1;
            }
          }
        }
      })();
    });
    const promise = new Promise(function() {
      return closure_0(...arguments);
    });
    return promise;
  },
  canMakePayments() {
    const promise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      closure_1_11.canMakePayments(function(arg0) {
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
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  const _module2 = PlatformUtils;
  let isIOSResult1 = _module2.isIOS();
  if (isIOSResult1) {
    const importAllResult = react_nativeAll;
    let Identifier = importAllResult.getConstants().Identifier;
    let _HermesInternal = HermesInternal;
    const str = ".local";
    let isRunningOnSimulator = Identifier.startsWith("" + IOS_BUNDLE_ID + ".local");
    if (!isRunningOnSimulator) {
      const _module3 = DeviceUtils;
      isRunningOnSimulator = _module3.getIsRunningOnSimulator();
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
export const makeIAPRequest = function makeIAPRequest(arg0, arg1, arg2) {
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_0 = _asyncToGenerator(async (requestJSONString, sku) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let first;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              code = tmp;
              useACOM = undefined;
              currentUser = currentUser.getCurrentUser();
              const tmp54 = sku;
              if (null != currentUser) {
                c5 = 1;
                const obj5 = { requestJSONString, sku, appAccountToken: closure_2_15(currentUser.id), andDangerouslyFinishTransactionAutomaticallyIOS: false, useACOM };
                const requestPurchase = requestJSONString(closure_2_3[8]).requestPurchase;
                requestJSONString(closure_2_3[8]);
                c6 = 2;
                c7 = 1;
                const obj6 = { value: requestPurchase(obj5), done: false };
                return obj6;
              } else {
                const _Error2 = Error;
                const self3 = this;
                const self4 = this;
                const error = new Error("purchaseProduct: no valid user");
                tmp54(error);
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            code = closure_4;
            if (!set.has(code.code)) {
              const obj3 = requestJSONString(closure_2_3[16]);
              const result = obj3.captureBillingException(code);
            }
            sku(code);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            useACOM = value;
            const _Object = Object;
            if (useACOM instanceof Object) {
              const _Array = Array;
              obj = { purchaseResponse: closure_2_14(useACOM), originalPurchase: first };
              const tmp9 = requestJSONString;
              if (Array.isArray(useACOM)) {
                first = tmp14[0];
              } else {
                first = tmp14;
              }
              tmp9(obj);
              c5 = 0;
            } else {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error1 = new Error("Unable to select a platform, no request was made");
              throw error1;
            }
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp43) {
          closure_4 = tmp43;
          if (0 === c5) {
            c7 = 3;
            throw tmp43;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  const promise = new Promise(function() {
    return closure_0(...arguments);
  });
  return promise;
};
export const useCanPurchaseIAP = function useCanPurchaseIAP(productId) {
  _require = productId;
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
        isBusyResult = null == productId || !IAPStore.isPurchasingProduct(tmp4);
        null == productId || !IAPStore.isPurchasingProduct(tmp4);
      }
      tmp2 = isBusyResult;
    }
    if (!tmp2) {
      tmp2 = !closure_1;
    }
    return tmp2;
  });
};
export { isStorekit2Available };
export { remapStorefront };
export const manageSubscription = function manageSubscription() {
  let result;
  obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    let isAvailableResult;
    const obj2 = closure_12;
    if (closure_12 != null) {
      isAvailableResult = obj2.isAvailable();
    }
    isIOSResult = 1 === isAvailableResult;
  }
  if (isIOSResult) {
    result = closure_12.showManageSubscriptions();
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
