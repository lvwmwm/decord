// Module ID: 7193
// Function ID: 57902
// Name: serializePurchaseResponse
// Dependencies: []
// Exports: makeIAPRequest, manageSubscription, shouldMockIAPForceEnable, useCanPurchaseIAP

// Module 7193 (serializePurchaseResponse)
function serializePurchaseResponse(originalTransactionDate) {
  importDefault(dependencyMap[10])(null != originalTransactionDate.transactionId, "should have transactionId");
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
  return arg1(dependencyMap[15]).v5(id, NAMESPACE_SNOWFLAKE_UUID);
}
async function _restorePurchases(arg0, arg1) {
  const fn = function*(fullRestore) {
    let callback;
    yield undefined;
    if (callback3()) {
      let obj = closure_12;
      if (fullRestore.fullRestore) {
        yield obj.sync();
        const arr4 = callback2(closure_3[14]);
        obj = { onlyIncludeActiveItems: false };
        let mapped = arr4.map(yield callback(closure_3[8]).getAvailablePurchases(obj), (originalPurchase) => ({ originalPurchase, purchaseResponse: callback(originalPurchase) }));
        const obj4 = callback(closure_3[8]);
      } else {
        const tmp2 = yield obj.getPendingTransactions();
        callback = callback2(closure_3[14]).map(tmp2, (id) => id.id);
        const arr = callback2(closure_3[14]);
        const arr2 = callback2(closure_3[14]);
        obj = { onlyIncludeActiveItems: false };
        const found = arr2.filter(yield callback(closure_3[8]).getAvailablePurchases(obj), (transactionId) => {
          let hasItem = null != transactionId.transactionId;
          if (hasItem) {
            const _parseInt = parseInt;
            hasItem = closure_0.includes(parseInt(transactionId.transactionId));
          }
          return hasItem;
        });
        mapped = found.map((originalPurchase) => ({ originalPurchase, purchaseResponse: callback(originalPurchase) }));
        const obj2 = callback(closure_3[8]);
      }
      return mapped;
    } else {
      return [];
    }
  };
  fn.next();
  return fn;
}
function isStorekit2Available() {
  let isIOSResult = arg1(dependencyMap[11]).isIOS();
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
    if (null == arg1(dependencyMap[18]).GeneratedPaymentCurrenciesSets.APPLE_STORE_COUNTRY_CURRENCIES[tmp]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Unable to get currency from countryCode " + countryCode.countryCode);
      throw error;
    }
  } else {
    const tmp3 = closure_8[countryCode.currency.toUpperCase(countryCode.currency)];
  }
  const obj = { currency: tmp3, country: tmp };
  return obj;
}
async function _fetchStoreFront() {
  if (callback2()) {
    const tmp4 = yield callback(closure_3[8]).getStorefront();
    if (null != tmp4) {
      let tmp7 = callback3(tmp4);
    } else {
      tmp7 = tmp4;
    }
    return tmp7;
  } else {
    return null;
  }
}
function shouldMockIAPForceEnable() {
  const tmp = !arg1(dependencyMap[11]).isIOS();
  let tmp2 = !tmp;
  if (!tmp) {
    const Identifier = importAll(dependencyMap[19]).getConstants().Identifier;
    const _HermesInternal = HermesInternal;
    const tmp7 = !Identifier.startsWith("" + closure_9 + ".local");
    let isRunningOnSimulator = !tmp7;
    if (tmp7) {
      isRunningOnSimulator = arg1(dependencyMap[20]).getIsRunningOnSimulator();
      const obj3 = arg1(dependencyMap[20]);
    }
    tmp2 = isRunningOnSimulator;
    const obj2 = importAll(dependencyMap[19]);
  }
  return tmp2;
}
let closure_4 = importDefault(dependencyMap[0]);
const convertToAlpha2 = arg1(dependencyMap[3]).convertToAlpha2;
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[6]);
({ CurrencyCodes: closure_8, IOS_BUNDLE_ID: closure_9 } = tmp2);
const NAMESPACE_SNOWFLAKE_UUID = arg1(dependencyMap[7]).NAMESPACE_SNOWFLAKE_UUID;
({ InAppUtils: closure_11, RNIapIosSk2: closure_12 } = arg1(dependencyMap[1]).NativeModules);
const items = [arg1(dependencyMap[8]).ErrorCode.E_USER_CANCELLED, tmp2.StoreKitErrors.PAYMENT_CANCELED];
const set = new Set(items);
let importDefaultResult1 = importDefault(dependencyMap[9]);
importDefaultResult1 = new importDefaultResult1("IAPUtils.tsx");
let _default = {
  loadProducts() {
    if (obj.isIOS()) {
      const _Object = Object;
      const items = [importDefault(dependencyMap[12]).fetchSubscriptions(Object.values(arg1(dependencyMap[13]).ProductIds)), ];
      const obj2 = importDefault(dependencyMap[12]);
      const _Object2 = Object;
      items[1] = importDefault(dependencyMap[12]).fetchProducts(Object.values(arg1(dependencyMap[13]).ProductIds));
      const obj3 = importDefault(dependencyMap[12]);
      let nextPromise = _Promise.all(items).then((arg0) => {
        let tmp;
        [r10006, tmp] = arg0;
        let set;
        set = new Set();
        const items = [...tmp];
        return callback(closure_3[14]).filter(items, (identifier) => {
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
    arg1 = arg0;
    const importDefault = arg1;
    const importAll = arg2;
    return new Promise(() => {
      let closure_0 = callback(async (arg0, arg1) => {
        if (null != currentUser.getCurrentUser()) {
          let obj = callback(closure_3[8]);
          yield obj.clearTransactionIOS();
          obj = { sku: callback, appAccountToken: closure_2, withOffer: closure_1 };
          const tmp16 = yield callback(closure_3[8]).requestPurchase(obj);
          const _Object = Object;
          if (tmp16 instanceof Object) {
            arg0(callback2(tmp16));
          } else {
            const _Error2 = Error;
            const error = new Error("Unable to select a platform, no request was made");
            throw error;
          }
          const obj2 = callback(closure_3[8]);
        } else {
          const _Error = Error;
          const error1 = new Error("purchaseProduct: no valid user");
          arg1(error1);
        }
      });
      return function() {
        return callback(...arguments);
      };
    }());
  },
  canMakePayments() {
    return new Promise((arg0, arg1) => {
      closure_11.canMakePayments((arg0) => {
        if (!arg0) {
          const _Error = Error;
          const error = new Error();
          arg1(error);
        }
        arg0(arg0);
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
const importDefaultResult = importDefault(dependencyMap[2]);
const tmp6 = !arg1(dependencyMap[11]).isIOS();
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
  _default = arg1(dependencyMap[21]).default;
}
const obj3 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("utils/native/IAPUtils.tsx");

export default _default;
export { convertToUUID };
export const makeIAPRequest = function makeIAPRequest(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const importAll = arg2;
  return new Promise(() => {
    let closure_0 = callback(async (arg0, arg1) => {
      const currentUser = currentUser.getCurrentUser();
      if (null != currentUser) {
        let obj = callback(closure_3[8]);
        obj = { requestJSONString: callback, sku: closure_1, appAccountToken: callback3(currentUser.id), andDangerouslyFinishTransactionAutomaticallyIOS: false, useACOM: closure_2 };
        const tmp15 = yield obj.requestPurchase(obj);
        const _Object = Object;
        if (tmp15 instanceof Object) {
          obj = { purchaseResponse: callback2(tmp16) };
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
  }());
};
export const useCanPurchaseIAP = function useCanPurchaseIAP(productId) {
  const arg1 = productId;
  const items = [closure_6];
  let closure_1 = arg1(dependencyMap[17]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    return null != verified && verified;
  }, []);
  const obj = arg1(dependencyMap[17]);
  const items1 = [closure_7];
  return !arg1(dependencyMap[17]).useStateFromStores(items1, () => {
    let tmp = !closure_7.isReady();
    if (!tmp) {
      let isBusyResult = closure_7.isBusy();
      if (isBusyResult) {
        let tmp6 = null == arg0;
        if (!tmp6) {
          tmp6 = !closure_7.isPurchasingProduct(arg0);
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
