// Module ID: 7205
// Function ID: 58038
// Name: NativeModules
// Dependencies: [5, 27, 7206, 7207, 7212, 7213, 7214, 7215, 7216]
// Exports: deepLinkToSubscriptions, endConnection, finishTransaction, flushFailedPurchasesCachedAsPendingAndroid, getAvailablePurchases, getProducts, getPurchaseHistory, getStorefront, getSubscriptions, initConnection, requestPurchase, requestSubscription, setup

// Module 7205 (NativeModules)
import RNIapAmazonModule from "RNIapAmazonModule";
import get_ActivityIndicator from "get ActivityIndicator";

let NativeModules;
let Platform;
let RNIapIos;
let RNIapIosSk2;
let closure_4;
let closure_5;
const require = arg1;
({ NativeModules, Platform } = get_ActivityIndicator);
({ RNIapIos, RNIapIosSk2, RNIapModule: closure_4, RNIapAmazonModule: closure_5 } = NativeModules);
const subs = require("module_7206").ProductType.subs;
const inapp = require("module_7206").ProductType.inapp;
function addSubscriptionPlatform(arr) {
  let closure_0 = arg1;
  return arr.map((arg0) => Object.assign({}, arg0, { platform: closure_0 }));
}

export const IapAndroid = require("NativeModules");
export const IapAmazon = require("RNIapAmazonModule");
export const IapIos = require("getPendingPurchasesIOS");
export const IapIosSk2 = require("sync");
export const isIosStorekit2 = require("module_7207").isIosStorekit2;
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
      require(7207).storekit1Mode();
      const obj3 = require(7207);
    } else if ("STOREKIT2_MODE" === str2) {
      require(7207).storekit2Mode();
      const obj2 = require(7207);
    } else if ("STOREKIT_HYBRID_MODE" === str2) {
      require(7207).storekitHybridMode();
      const obj = require(7207);
    }
  }
};
export const initConnection = function initConnection() {
  const nativeModule = require(7207).getNativeModule();
  return nativeModule.initConnection();
};
export const endConnection = function endConnection() {
  const nativeModule = require(7207).getNativeModule();
  return nativeModule.endConnection();
};
export const flushFailedPurchasesCachedAsPendingAndroid = function flushFailedPurchasesCachedAsPendingAndroid() {
  const androidModule = require(7207).getAndroidModule();
  return androidModule.flushFailedPurchasesCachedAsPending();
};
export const getProducts = function getProducts(skus) {
  skus = skus.skus;
  if (null != skus) {
    if (skus.length) {
      let closure_0 = callback(async () => {
        const androidModule = callback(outer2_2[3]).getAndroidModule();
        const obj = callback(outer2_2[3]);
        const mapped = yield androidModule.getItemsByType(outer2_7, outer1_1).map(callback(outer2_2[4]).singleProductAndroidMap);
        const arr = yield androidModule.getItemsByType(outer2_7, outer1_1);
        return callback(outer2_2[3]).fillProductsWithAdditionalData(mapped);
      });
      let rejectResult = (function android() {
        return callback(...arguments);
      })();
    }
    return rejectResult;
  }
  rejectResult = Promise.reject("\"skus\" is required");
};
export const getSubscriptions = function getSubscriptions(skus) {
  skus = skus.skus;
  if (null != skus) {
    if (skus.length) {
      let closure_0 = callback(async () => {
        const androidModuleType = callback(outer2_2[3]).getAndroidModuleType();
        const obj = callback(outer2_2[3]);
        const androidModule = callback(outer2_2[3]).getAndroidModule();
        const tmp2 = yield androidModule.getItemsByType(outer2_6, outer1_1);
        if ("android" === androidModuleType) {
          return outer2_8(tmp2, callback(outer2_2[2]).SubscriptionPlatform.android);
        } else if ("amazon" === androidModuleType) {
          const obj4 = callback(outer2_2[3]);
          return outer2_8(yield callback(outer2_2[3]).fillProductsWithAdditionalData(tmp2), callback(outer2_2[2]).SubscriptionPlatform.amazon);
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("getSubscriptions received unknown platform " + androidModuleType + ". Verify the logic in getAndroidModuleType");
          throw error;
        }
        const obj2 = callback(outer2_2[3]);
      });
      let rejectResult = (function android() {
        return callback(...arguments);
      })();
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
      if (outer2_5) {
        return yield outer2_5.getAvailableItems();
      } else {
        return yield outer2_4.getPurchaseHistoryByType(outer2_7).concat(yield outer2_4.getPurchaseHistoryByType(outer2_6));
      }
    });
    return (function android() {
      return callback(...arguments);
    })();
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
      if (outer2_5) {
        return yield outer2_5.getAvailableItems();
      } else {
        return yield outer2_4.getAvailableItemsByType(outer2_7).concat(yield outer2_4.getAvailableItemsByType(outer2_6));
      }
    });
    return (function android() {
      return callback(...arguments);
    })();
  }
  first = {};
};
export const requestPurchase = function requestPurchase(arg0) {
  let closure_0 = arg0;
  let closure_1 = callback(async () => {
    let isOfferPersonalized;
    let obfuscatedAccountIdAndroid;
    let obfuscatedProfileIdAndroid;
    let skus;
    if (obj) {
      return obj.resume();
    } else if (callback(outer2_2[3]).isAmazon) {
      if ("sku" in tmp3) {
        return outer2_5.buyItemByType(outer1_0.sku, "");
      } else {
        const _Error2 = Error;
        const error = new Error("sku is required for Amazon purchase");
        throw error;
      }
    } else {
      if ("skus" in tmp3) {
        if (outer1_0.skus.length) {
          ({ skus, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = outer1_0);
          let tmp14 = null != isOfferPersonalized;
          if (tmp14) {
            tmp14 = isOfferPersonalized;
          }
          return outer2_4.buyItemByType(outer2_7, skus, undefined, -1, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, [], tmp14);
        }
      }
      const _Error = Error;
      const error1 = new Error("skus is required for Android purchase");
      throw error1;
    }
  });
  return (function android() {
    return callback(...arguments);
  })();
};
export const requestSubscription = function requestSubscription(arg0) {
  let closure_0 = arg0;
  let closure_1 = callback(async () => {
    let isOfferPersonalized;
    let obfuscatedAccountIdAndroid;
    let obfuscatedProfileIdAndroid;
    let purchaseTokenAndroid;
    let replacementModeAndroid;
    let subscriptionOffers;
    if (obj) {
      return obj.resume();
    } else if (callback(outer2_2[3]).isAmazon) {
      if ("sku" in tmp3) {
        let str7 = "";
        if ("prorationModeAmazon" in outer1_0) {
          str7 = outer1_0.prorationModeAmazon || "";
          const tmp33 = outer1_0.prorationModeAmazon || "";
        }
        return outer2_5.buyItemByType(outer1_0.sku, str7);
      } else {
        const _Error2 = Error;
        const error = new Error("sku is required for Amazon subscriptions");
        throw error;
      }
    } else {
      if ("subscriptionOffers" in tmp3) {
        if (0 !== outer1_0.subscriptionOffers.length) {
          ({ subscriptionOffers, purchaseTokenAndroid, replacementModeAndroid } = outer1_0);
          let num3 = -1;
          if (undefined !== replacementModeAndroid) {
            num3 = replacementModeAndroid;
          }
          ({ obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = outer1_0);
          let mapped;
          if (null != subscriptionOffers) {
            mapped = subscriptionOffers.map((sku) => sku.sku);
          }
          let mapped1;
          if (null != subscriptionOffers) {
            mapped1 = subscriptionOffers.map((offerToken) => offerToken.offerToken);
          }
          return outer2_4.buyItemByType(outer2_6, mapped, purchaseTokenAndroid, num3, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, mapped1, null != isOfferPersonalized && isOfferPersonalized);
        }
      }
      const _Error = Error;
      const error1 = new Error("subscriptionOffers are required for Google Play subscriptions");
      throw error1;
    }
  });
  return (function android() {
    return callback(...arguments);
  })();
};
export const finishTransaction = function finishTransaction(arg0) {
  let RNIapAmazonModule;
  let dependencyMap;
  let importAll;
  ({ purchase: importAll, isConsumable: dependencyMap, developerPayloadAndroid: RNIapAmazonModule } = arg0);
  let closure_0 = callback(async () => {
    if (obj) {
      return obj.resume();
    } else {
      if (null != outer1_1) {
        if (outer1_1.purchaseToken) {
          if (outer1_2) {
            const androidModule = callback(outer2_2[3]).getAndroidModule();
            let consumeProductResult = androidModule.consumeProduct(outer1_1.purchaseToken, outer1_3);
            const obj4 = callback(outer2_2[3]);
          } else if (outer1_1.userIdAmazon) {
            const androidModule1 = callback(outer2_2[3]).getAndroidModule();
            consumeProductResult = androidModule1.acknowledgePurchase(outer1_1.purchaseToken, outer1_3);
            const obj2 = callback(outer2_2[3]);
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
  return (function android() {
    return callback(...arguments);
  })();
};
export const deepLinkToSubscriptions = function deepLinkToSubscriptions(isAmazonDevice) {
  let importAll;
  ({ sku: importAll, isAmazonDevice } = isAmazonDevice);
  let closure_2 = undefined === isAmazonDevice || isAmazonDevice;
  let closure_0 = callback(async () => {
    if (obj) {
      return obj.resume();
    } else if (callback(7207).isAmazon) {
      obj = { isAmazonDevice: outer1_2 };
      const result = outer2_1(7213).deepLinkToSubscriptionsAmazon(obj);
      const obj4 = outer2_1(7213);
    } else if (outer1_1) {
      obj = { sku: outer1_1 };
      const result1 = outer2_1(7214).deepLinkToSubscriptionsAndroid(obj);
      const obj2 = outer2_1(7214);
    } else {
      const _Error = Error;
      const error = new Error("Sku is required to locate subscription in Android Store");
      Promise.reject(error);
    }
  });
  return (function android() {
    return callback(...arguments);
  })();
};
export const getStorefront = function getStorefront() {
  let closure_0 = callback(async () => ({ countryCode: yield outer2_4.getStorefront(), currency: null }));
  return (function android() {
    return callback(...arguments);
  })();
};
