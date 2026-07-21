// Module ID: 7200
// Function ID: 57964
// Name: NativeModules
// Dependencies: []
// Exports: deepLinkToSubscriptions, endConnection, finishTransaction, flushFailedPurchasesCachedAsPendingAndroid, getAvailablePurchases, getProducts, getPurchaseHistory, getStorefront, getSubscriptions, initConnection, requestPurchase, requestSubscription, setup

// Module 7200 (NativeModules)
let NativeModules;
let Platform;
let RNIapIos;
let RNIapIosSk2;
let closure_3 = importDefault(dependencyMap[0]);
({ NativeModules, Platform } = arg1(dependencyMap[1]));
({ RNIapIos, RNIapIosSk2, RNIapModule: closure_4, RNIapAmazonModule: closure_5 } = NativeModules);
const subs = arg1(dependencyMap[2]).ProductType.subs;
const inapp = arg1(dependencyMap[2]).ProductType.inapp;
function addSubscriptionPlatform(arr) {
  return arr.map((arg0) => Object.assign({}, arg0, { platform: arg1 }));
}

export const IapAndroid = importAll(dependencyMap[6]);
export const IapAmazon = importAll(dependencyMap[5]);
export const IapIos = importAll(dependencyMap[7]);
export const IapIosSk2 = importAll(dependencyMap[8]);
export const isIosStorekit2 = arg1(dependencyMap[3]).isIosStorekit2;
export const setup = function setup() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const storekitMode = {}.storekitMode;
    let str2 = "STOREKIT1_MODE";
    if (undefined !== storekitMode) {
      str2 = storekitMode;
    }
    if ("STOREKIT1_MODE" === str2) {
      arg1(dependencyMap[3]).storekit1Mode();
      const obj3 = arg1(dependencyMap[3]);
    } else if ("STOREKIT2_MODE" === str2) {
      arg1(dependencyMap[3]).storekit2Mode();
      const obj2 = arg1(dependencyMap[3]);
    } else if ("STOREKIT_HYBRID_MODE" === str2) {
      arg1(dependencyMap[3]).storekitHybridMode();
      const obj = arg1(dependencyMap[3]);
    }
  }
};
export const initConnection = function initConnection() {
  const nativeModule = arg1(dependencyMap[3]).getNativeModule();
  return nativeModule.initConnection();
};
export const endConnection = function endConnection() {
  const nativeModule = arg1(dependencyMap[3]).getNativeModule();
  return nativeModule.endConnection();
};
export const flushFailedPurchasesCachedAsPendingAndroid = function flushFailedPurchasesCachedAsPendingAndroid() {
  const androidModule = arg1(dependencyMap[3]).getAndroidModule();
  return androidModule.flushFailedPurchasesCachedAsPending();
};
export const getProducts = function getProducts(skus) {
  skus = skus.skus;
  const importAll = skus;
  if (null != skus) {
    if (skus.length) {
      let closure_0 = callback(async () => {
        const androidModule = callback(closure_2[3]).getAndroidModule();
        const obj = callback(closure_2[3]);
        const mapped = yield androidModule.getItemsByType(closure_7, closure_1).map(callback(closure_2[4]).singleProductAndroidMap);
        const arr = yield androidModule.getItemsByType(closure_7, closure_1);
        return callback(closure_2[3]).fillProductsWithAdditionalData(mapped);
      });
      let rejectResult = function android() {
        return callback(...arguments);
      }();
    }
    return rejectResult;
  }
  rejectResult = Promise.reject("\"skus\" is required");
};
export const getSubscriptions = function getSubscriptions(skus) {
  skus = skus.skus;
  const importAll = skus;
  if (null != skus) {
    if (skus.length) {
      let closure_0 = callback(async () => {
        const androidModuleType = callback(closure_2[3]).getAndroidModuleType();
        const obj = callback(closure_2[3]);
        const androidModule = callback(closure_2[3]).getAndroidModule();
        const tmp2 = yield androidModule.getItemsByType(closure_6, closure_1);
        if ("android" === androidModuleType) {
          return callback2(tmp2, callback(closure_2[2]).SubscriptionPlatform.android);
        } else if ("amazon" === androidModuleType) {
          const obj4 = callback(closure_2[3]);
          return callback2(yield callback(closure_2[3]).fillProductsWithAdditionalData(tmp2), callback(closure_2[2]).SubscriptionPlatform.amazon);
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("getSubscriptions received unknown platform " + androidModuleType + ". Verify the logic in getAndroidModuleType");
          throw error;
        }
        const obj2 = callback(closure_2[3]);
      });
      let rejectResult = function android() {
        return callback(...arguments);
      }();
    }
    return rejectResult;
  }
  rejectResult = Promise.reject("\"skus\" is required");
};
export const getPurchaseHistory = function getPurchaseHistory() {
  let alsoPublishToEventListener;
  let automaticallyFinishRestoredTransactions;
  let onlyIncludeActiveItems;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    ({ alsoPublishToEventListener, automaticallyFinishRestoredTransactions, onlyIncludeActiveItems } = first);
    let closure_0 = callback(async () => {
      if (closure_5) {
        return yield closure_5.getAvailableItems();
      } else {
        return yield closure_4.getPurchaseHistoryByType(closure_7).concat(yield closure_4.getPurchaseHistoryByType(closure_6));
      }
    });
    return function android() {
      return callback(...arguments);
    }();
  }
  first = {};
};
export const getAvailablePurchases = function getAvailablePurchases(arg0) {
  let alsoPublishToEventListener;
  let automaticallyFinishRestoredTransactions;
  let onlyIncludeActiveItems;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    ({ alsoPublishToEventListener, automaticallyFinishRestoredTransactions, onlyIncludeActiveItems } = first);
    let closure_0 = callback(async () => {
      if (closure_5) {
        return yield closure_5.getAvailableItems();
      } else {
        return yield closure_4.getAvailableItemsByType(closure_7).concat(yield closure_4.getAvailableItemsByType(closure_6));
      }
    });
    return function android() {
      return callback(...arguments);
    }();
  }
  first = {};
};
export const requestPurchase = function requestPurchase(arg0) {
  const arg1 = arg0;
  let closure_1 = callback(async () => {
    let isOfferPersonalized;
    let obfuscatedAccountIdAndroid;
    let obfuscatedProfileIdAndroid;
    let skus;
    if (obj) {
      return obj.resume();
    } else if (lib(closure_2[3]).isAmazon) {
      if ("sku" in tmp3) {
        return closure_5.buyItemByType(lib.sku, "");
      } else {
        const _Error2 = Error;
        const error = new Error("sku is required for Amazon purchase");
        throw error;
      }
    } else {
      if ("skus" in tmp3) {
        if (lib.skus.length) {
          ({ skus, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = lib);
          let tmp14 = null != isOfferPersonalized;
          if (tmp14) {
            tmp14 = isOfferPersonalized;
          }
          return closure_4.buyItemByType(closure_7, skus, undefined, -1, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, [], tmp14);
        }
      }
      const _Error = Error;
      const error1 = new Error("skus is required for Android purchase");
      throw error1;
    }
  });
  return function android() {
    return callback(...arguments);
  }();
};
export const requestSubscription = function requestSubscription(arg0) {
  const arg1 = arg0;
  let closure_1 = callback(async () => {
    let isOfferPersonalized;
    let obfuscatedAccountIdAndroid;
    let obfuscatedProfileIdAndroid;
    let purchaseTokenAndroid;
    let replacementModeAndroid;
    let subscriptionOffers;
    if (obj) {
      return obj.resume();
    } else if (lib(closure_2[3]).isAmazon) {
      if ("sku" in tmp3) {
        let str7 = "";
        if ("prorationModeAmazon" in lib) {
          str7 = lib.prorationModeAmazon || "";
          const tmp33 = lib.prorationModeAmazon || "";
        }
        return closure_5.buyItemByType(lib.sku, str7);
      } else {
        const _Error2 = Error;
        const error = new Error("sku is required for Amazon subscriptions");
        throw error;
      }
    } else {
      if ("subscriptionOffers" in tmp3) {
        if (0 !== lib.subscriptionOffers.length) {
          ({ subscriptionOffers, purchaseTokenAndroid, replacementModeAndroid } = lib);
          let num3 = -1;
          if (undefined !== replacementModeAndroid) {
            num3 = replacementModeAndroid;
          }
          ({ obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = lib);
          let mapped;
          if (null != subscriptionOffers) {
            mapped = subscriptionOffers.map((sku) => sku.sku);
          }
          let mapped1;
          if (null != subscriptionOffers) {
            mapped1 = subscriptionOffers.map((offerToken) => offerToken.offerToken);
          }
          return closure_4.buyItemByType(closure_6, mapped, purchaseTokenAndroid, num3, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, mapped1, null != isOfferPersonalized && isOfferPersonalized);
        }
      }
      const _Error = Error;
      const error1 = new Error("subscriptionOffers are required for Google Play subscriptions");
      throw error1;
    }
  });
  return function android() {
    return callback(...arguments);
  }();
};
export const finishTransaction = function finishTransaction(arg0) {
  ({ purchase: closure_1, isConsumable: closure_2, developerPayloadAndroid: closure_3 } = arg0);
  let closure_0 = callback(async () => {
    if (obj) {
      return obj.resume();
    } else {
      if (null != closure_1) {
        if (closure_1.purchaseToken) {
          if (closure_2) {
            const androidModule = callback(closure_2[3]).getAndroidModule();
            let consumeProductResult = androidModule.consumeProduct(closure_1.purchaseToken, closure_3);
            const obj4 = callback(closure_2[3]);
          } else if (closure_1.userIdAmazon) {
            const androidModule1 = callback(closure_2[3]).getAndroidModule();
            consumeProductResult = androidModule1.acknowledgePurchase(closure_1.purchaseToken, closure_3);
            const obj2 = callback(closure_2[3]);
          } else {
            const _Error2 = Error;
            const error = new Error("purchase is not suitable to be purchased");
            consumeProductResult = Promise.reject(error);
          }
        }
      }
      const _Error = Error;
      const error1 = new Error("purchase is not suitable to be purchased");
      return Promise.reject(error1);
    }
  });
  return function android() {
    return callback(...arguments);
  }();
};
export const deepLinkToSubscriptions = function deepLinkToSubscriptions(isAmazonDevice) {
  ({ sku: closure_1, isAmazonDevice } = isAmazonDevice);
  let closure_2 = undefined === isAmazonDevice || isAmazonDevice;
  let closure_0 = callback(async () => {
    if (obj) {
      return obj.resume();
    } else if (callback(closure_2[3]).isAmazon) {
      let obj = { isAmazonDevice: closure_2 };
      const result = callback2(closure_2[5]).deepLinkToSubscriptionsAmazon(obj);
      const obj4 = callback2(closure_2[5]);
    } else if (callback2) {
      obj = { sku: callback2 };
      const result1 = callback2(closure_2[6]).deepLinkToSubscriptionsAndroid(obj);
      const obj2 = callback2(closure_2[6]);
    } else {
      const _Error = Error;
      const error = new Error("Sku is required to locate subscription in Android Store");
      Promise.reject(error);
    }
  });
  return function android() {
    return callback(...arguments);
  }();
};
export const getStorefront = function getStorefront() {
  let closure_0 = callback(async () => ({ countryCode: yield closure_4.getStorefront(), currency: null }));
  return function android() {
    return callback(...arguments);
  }();
};
