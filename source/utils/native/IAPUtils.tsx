// Module ID: 7203
// Function ID: 57970
// Name: serializePurchaseResponse
// Dependencies: [5, 27, 4129, 3811, 1849, 5621, 653, 1851, 7204, 3, 44, 477, 7223, 5624, 22, 491, 3791, 566, 7224, 1554, 4110, 7225, 2]
// Exports: makeIAPRequest, manageSubscription, shouldMockIAPForceEnable, useCanPurchaseIAP

// Module 7203 (serializePurchaseResponse)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { convertToAlpha2 } from "getCountryCodeByCountryName";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import { NAMESPACE_SNOWFLAKE_UUID } from "GuildFeatures";
import importDefaultResult1 from "getCountryCodeByCountryName";
import set from "set";
import set from "_isNativeReflectConstruct";

let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
function serializePurchaseResponse(originalTransactionDate) {
  importDefault(44)(null != originalTransactionDate.transactionId, "should have transactionId");
  const obj = { originalTransactionDate: originalTransactionDate.originalTransactionDateIOS };
  let parsed;
  if (null != originalTransactionDate.originalTransactionIdentifierIOS) {
    const _parseInt = parseInt;
    parsed = parseInt(originalTransactionDate.originalTransactionIdentifierIOS);
  }
  obj.originalTransactionIdentifier = parsed;
  obj.transactionDate = originalTransactionDate.transactionDate;
  obj.transactionIdentifier = parseInt(originalTransactionDate.transactionId);
  ({ productId: obj.productIdentifier, transactionReceipt: obj.transactionReceipt, verificationResultIOS: obj.jwsRepresentation } = originalTransactionDate);
  return obj;
}
function convertToUUID(id) {
  return require(491) /* v1 */.v5(id, NAMESPACE_SNOWFLAKE_UUID);
}
async function _restorePurchases(arg0, arg1) {
  let iter = (function*(fullRestore) {
    let closure_0;
    yield undefined;
    if (outer2_17()) {
      let obj = outer2_12;
      if (fullRestore.fullRestore) {
        yield obj.sync();
        const arr4 = outer2_1(outer2_3[14]);
        obj = { onlyIncludeActiveItems: false };
        let mapped = arr4.map(yield outer2_0(outer2_3[8]).getAvailablePurchases(obj), (originalPurchase) => ({ originalPurchase, purchaseResponse: outer3_14(originalPurchase) }));
        const obj4 = outer2_0(outer2_3[8]);
      } else {
        const tmp2 = yield obj.getPendingTransactions();
        closure_0 = outer2_1(outer2_3[14]).map(tmp2, (id) => id.id);
        const arr = outer2_1(outer2_3[14]);
        const arr2 = outer2_1(outer2_3[14]);
        obj = { onlyIncludeActiveItems: false };
        const found = arr2.filter(yield outer2_0(outer2_3[8]).getAvailablePurchases(obj), (transactionId) => {
          let hasItem = null != transactionId.transactionId;
          if (hasItem) {
            const _parseInt = parseInt;
            hasItem = closure_0.includes(parseInt(transactionId.transactionId));
          }
          return hasItem;
        });
        mapped = found.map((originalPurchase) => ({ originalPurchase, purchaseResponse: outer3_14(originalPurchase) }));
        const obj2 = outer2_0(outer2_3[8]);
      }
      return mapped;
    } else {
      return [];
    }
  })();
  iter.next();
  return iter;
}
function isStorekit2Available() {
  let isIOSResult = require(477) /* set */.isIOS();
  if (isIOSResult) {
    let isAvailableResult;
    if (null != closure_12) {
      isAvailableResult = closure_12.isAvailable();
    }
    isIOSResult = 1 === isAvailableResult;
  }
  return isIOSResult;
}
function remapStorefront(countryCode) {
  const tmp = convertToAlpha2(countryCode.countryCode);
  if (null == countryCode.currency) {
    if (null == require(7224) /* GeneratedPaymentCurrencies */.GeneratedPaymentCurrenciesSets.APPLE_STORE_COUNTRY_CURRENCIES[tmp]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Unable to get currency from countryCode " + countryCode.countryCode);
      throw error;
    }
  } else {
    const tmp3 = table[countryCode.currency.toUpperCase(countryCode.currency)];
  }
  const obj = { currency: tmp3, country: tmp };
  return obj;
}
async function _fetchStoreFront() {
  if (outer2_17()) {
    const tmp4 = yield outer2_0(outer2_3[8]).getStorefront();
    if (null != tmp4) {
      let tmp7 = outer2_18(tmp4);
    } else {
      tmp7 = tmp4;
    }
    return tmp7;
  } else {
    return null;
  }
}
function shouldMockIAPForceEnable() {
  const tmp = !require(477) /* set */.isIOS();
  let tmp2 = !tmp;
  if (!tmp) {
    const Identifier = importAll(1554).getConstants().Identifier;
    const _HermesInternal = HermesInternal;
    const tmp7 = !Identifier.startsWith("" + closure_9 + ".local");
    let isRunningOnSimulator = !tmp7;
    if (tmp7) {
      isRunningOnSimulator = require(4110) /* getSystemVersion */.getIsRunningOnSimulator();
      const obj3 = require(4110) /* getSystemVersion */;
    }
    tmp2 = isRunningOnSimulator;
    const obj2 = importAll(1554);
  }
  return tmp2;
}
({ CurrencyCodes: closure_8, IOS_BUNDLE_ID: closure_9 } = ME);
({ InAppUtils: closure_11, RNIapIosSk2: closure_12 } = require("get ActivityIndicator").NativeModules);
let items = [require("module_7204").ErrorCode.E_USER_CANCELLED, ME.StoreKitErrors.PAYMENT_CANCELED];
let set = new Set(items);
importDefaultResult1 = new importDefaultResult1("IAPUtils.tsx");
let _default = {
  loadProducts() {
    if (obj.isIOS()) {
      const _Object = Object;
      let items = [importDefault(7223).fetchSubscriptions(Object.values(require(5624) /* SubscriptionPlans */.ProductIds)), ];
      const obj2 = importDefault(7223);
      const _Object2 = Object;
      items[1] = importDefault(7223).fetchProducts(Object.values(require(5624) /* SubscriptionPlans */.ProductIds));
      const obj3 = importDefault(7223);
      let nextPromise = _Promise.all(items).then((arg0) => {
        let tmp;
        [r10006, tmp] = arg0;
        let set;
        set = new Set();
        const items = [...tmp];
        return outer1_1(outer1_3[14]).filter(items, (identifier) => {
          let flag = !set.has(identifier.identifier);
          if (flag) {
            set.add(identifier.identifier);
            flag = true;
          }
          return flag;
        });
      });
      const allResult = _Promise.all(items);
    } else {
      nextPromise = _Promise.resolve([]);
    }
    return nextPromise;
  },
  purchaseProduct(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return new Promise((() => {
      let closure_0 = outer1_4(async (arg0, arg1) => {
        if (null != outer3_6.getCurrentUser()) {
          let obj = callback(outer3_3[8]);
          yield obj.clearTransactionIOS();
          obj = { sku: callback, appAccountToken: outer2_2, withOffer: outer2_1 };
          const tmp16 = yield callback(outer3_3[8]).requestPurchase(obj);
          const _Object = Object;
          if (tmp16 instanceof Object) {
            arg0(outer3_14(tmp16));
          } else {
            const _Error2 = Error;
            const error = new Error("Unable to select a platform, no request was made");
            throw error;
          }
          const obj2 = callback(outer3_3[8]);
        } else {
          const _Error = Error;
          const error1 = new Error("purchaseProduct: no valid user");
          arg1(error1);
        }
      });
      return function() {
        return callback(...arguments);
      };
    })());
  },
  canMakePayments() {
    return new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      outer1_11.canMakePayments((arg0) => {
        if (!arg0) {
          const _Error = Error;
          const error = new Error();
          callback2(error);
        }
        callback(arg0);
      });
    });
  },
  restorePurchases() {
    return _restorePurchases(...arguments);
  },
  fetchStoreFront() {
    return _fetchStoreFront(...arguments);
  }
};
let tmp6 = !set.isIOS();
let tmp7 = !tmp6;
if (!tmp6) {
  const tmp8 = !shouldMockIAPForceEnable();
  let value = !tmp8;
  if (tmp8) {
    value = importDefaultResult.get("force_mock_iap");
  }
  tmp7 = value;
}
if (tmp7) {
  _default = require("items1").default;
}
let result = set.fileFinishedImporting("utils/native/IAPUtils.tsx");

export default _default;
export { convertToUUID };
export const makeIAPRequest = function makeIAPRequest(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return new Promise((() => {
    let closure_0 = outer1_4(async (arg0, arg1) => {
      const currentUser = outer3_6.getCurrentUser();
      if (null != currentUser) {
        let obj = callback(outer3_3[8]);
        obj = { requestJSONString: callback, sku: outer2_1, appAccountToken: outer3_15(currentUser.id), andDangerouslyFinishTransactionAutomaticallyIOS: false, useACOM: outer2_2 };
        const tmp15 = yield obj.requestPurchase(obj);
        const _Object = Object;
        if (tmp15 instanceof Object) {
          obj = { purchaseResponse: outer3_14(tmp16) };
          const _Array = Array;
          if (Array.isArray(tmp16)) {
            let first = tmp16[0];
          } else {
            first = tmp16;
          }
          obj.originalPurchase = first;
          arg0(obj);
        } else {
          const _Error2 = Error;
          const error = new Error("Unable to select a platform, no request was made");
          throw error;
        }
      } else {
        const _Error = Error;
        const error1 = new Error("purchaseProduct: no valid user");
        arg1(error1);
      }
    });
    return function() {
      return callback(...arguments);
    };
  })());
};
export const useCanPurchaseIAP = function useCanPurchaseIAP(productId) {
  const _require = productId;
  const items = [closure_6];
  let closure_1 = _require(566).useStateFromStores(items, () => {
    const currentUser = outer1_6.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    return null != verified && verified;
  }, []);
  const obj = _require(566);
  const items1 = [closure_7];
  return !_require(566).useStateFromStores(items1, () => {
    let tmp = !outer1_7.isReady();
    if (!tmp) {
      let isBusyResult = outer1_7.isBusy();
      if (isBusyResult) {
        let tmp6 = null == closure_0;
        if (!tmp6) {
          tmp6 = !outer1_7.isPurchasingProduct(closure_0);
        }
        isBusyResult = tmp6;
      }
      tmp = isBusyResult;
    }
    if (!tmp) {
      tmp = !closure_1;
    }
    return tmp;
  });
};
export { isStorekit2Available };
export { remapStorefront };
export const manageSubscription = function manageSubscription() {
  if (isStorekit2Available()) {
    let result = closure_12.showManageSubscriptions();
  } else {
    const _Error = Error;
    const error = new Error("StoreKit 2 is not available");
    result = Promise.reject(error);
  }
  return result;
};
export { shouldMockIAPForceEnable };
