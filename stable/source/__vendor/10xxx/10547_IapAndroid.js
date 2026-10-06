// Module ID: 10547
// Function ID: 10548
// Name: IapAndroid
// Dependencies: [5, 17, 10548, 10549, 10554, 10555, 10556, 10557, 10558]
// Exports: deepLinkToSubscriptions, endConnection, finishTransaction, flushFailedPurchasesCachedAsPendingAndroid, getAvailablePurchases, getProducts, getPurchaseHistory, getStorefront, getSubscriptions, initConnection, requestPurchase, requestSubscription, setup

// Module 10547 (IapAndroid)
import ReplacementModesAndroid from "ReplacementModesAndroid" /* 10548 */;
import _mod10549 from "module_10549" /* 10549 */;
import RNIapAmazonModuleAll from "RNIapAmazonModule" /* 10555 */;
import RNIapModuleAll from "RNIapModule" /* 10556 */;
import _modAll10557 from "module_10557" /* 10557 */;
import react_nativeAll from "react-native" /* 10558 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react_native from "react-native" /* 17 */;

let c0;

let NativeModules;
let Platform;
let RNIapIos;
let RNIapIosSk2;
let closure_4;
let hasOwnProperty;
let _asyncToGenerator = _asyncToGenerator_mod;
({ NativeModules, Platform } = react_native);
({ RNIapIos, RNIapIosSk2, RNIapModule: closure_4, RNIapAmazonModule: hasOwnProperty } = NativeModules);
const subs = ReplacementModesAndroid.ProductType.subs;
const inapp = ReplacementModesAndroid.ProductType.inapp;
function addSubscriptionPlatform(arr, platform) {
  return arr.map((item) => {
    const obj = { platform };
    const merged = Object.assign(item);
    return obj;
  });
}

export const IapAndroid = RNIapModuleAll;
export const IapAmazon = RNIapAmazonModuleAll;
export const IapIos = _modAll10557;
export const IapIosSk2 = react_nativeAll;
export const isIosStorekit2 = _mod10549.isIosStorekit2;
export const setup = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let str = obj.storekitMode;
  if (str === undefined) {
    str = "STOREKIT1_MODE";
  }
  if ("STOREKIT1_MODE" === str) {
    const obj4 = _mod10549;
    obj4.storekit1Mode();
  } else if ("STOREKIT2_MODE" === str) {
    const obj3 = _mod10549;
    obj3.storekit2Mode();
  } else if ("STOREKIT_HYBRID_MODE" === str) {
    const obj2 = _mod10549;
    obj2.storekitHybridMode();
  }
};
export const initConnection = () => {
  const obj = _mod10549;
  const nativeModule = obj.getNativeModule();
  return nativeModule.initConnection();
};
export const endConnection = () => {
  const obj = _mod10549;
  const nativeModule = obj.getNativeModule();
  return nativeModule.endConnection();
};
export const flushFailedPurchasesCachedAsPendingAndroid = () => {
  const obj = _mod10549;
  const androidModule = obj.getAndroidModule();
  return androidModule.flushFailedPurchasesCachedAsPending();
};
export const getProducts = (skus) => {
  let rejectResult;
  function android() {
    return closure_1(...arguments);
  }
  skus = skus.skus;
  let closure_1;
  let length;
  if (skus != null) {
    length = skus.length;
  }
  if (length) {
    const tmp4 = _asyncToGenerator;
    closure_1 = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj;
      if (c3 === 2) {
        c3 = 3;
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
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp4;
              tmp = undefined;
              const obj4 = tmp(c2[3]);
              const androidModule = obj4.getAndroidModule();
              c2 = 1;
              c3 = 1;
              const obj5 = { value: androidModule.getItemsByType(inapp, skus), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value.map(tmp(c2[4]).singleProductAndroidMap);
            c3 = 3;
            const obj7 = { value: obj.fillProductsWithAdditionalData(tmp), done: true };
            obj = tmp(c2[3]);
            return obj7;
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    });
    rejectResult = android();
  } else {
    rejectResult = Promise.reject("\"skus\" is required");
  }
  return rejectResult;
};
export const getSubscriptions = (skus) => {
  let rejectResult;
  function android() {
    return closure_1(...arguments);
  }
  skus = skus.skus;
  let closure_1;
  let length;
  if (skus != null) {
    length = skus.length;
  }
  if (length) {
    closure_1 = _asyncToGenerator(async function() {
      let c3;
      let closure_0;
      let tmp;
      const obj10 = tmp(c2[3]);
      tmp = obj10.getAndroidModuleType();
      const obj11 = tmp(c2[3]);
      const androidModule = obj11.getAndroidModule();
      closure_1 = await androidModule.getItemsByType(closure_1_6, skus);
      if ("android" === tmp) {
        return addSubscriptionPlatform(closure_1, tmp(c2[2]).SubscriptionPlatform.android);
      }
      if ("amazon" !== tmp30) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("getSubscriptions received unknown platform " + tmp + ". Verify the logic in getAndroidModuleType");
        throw error;
      }
      let closure_2 = closure_1;
      const obj3 = tmp(c2[3]);
      closure_2 = await obj3.fillProductsWithAdditionalData(closure_2);
      return addSubscriptionPlatform(closure_2, tmp(c2[2]).SubscriptionPlatform.amazon);
    });
    rejectResult = android();
  } else {
    rejectResult = Promise.reject("\"skus\" is required");
  }
  return rejectResult;
};
export const getPurchaseHistory = () => {
  let alsoPublishToEventListener;
  let automaticallyFinishRestoredTransactions;
  let availableItems;
  let onlyIncludeActiveItems;
  function android() {
    return closure_0(...arguments);
  }
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ alsoPublishToEventListener, automaticallyFinishRestoredTransactions, onlyIncludeActiveItems } = obj);
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
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
        let tmp;
        let closure_1;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            closure_1 = undefined;
            if (availableItems) {
              c2 = 1;
              c3 = 1;
              const obj4 = { value: availableItems.getAvailableItems(), done: false };
              return obj4;
            } else {
              c2 = 2;
              c3 = 1;
              const obj5 = { value: closure_1_4.getPurchaseHistoryByType(inapp), done: false };
              return obj5;
            }
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (2 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            tmp = value;
            c2 = 3;
            c3 = 1;
            const obj9 = { value: closure_1_4.getPurchaseHistoryByType(subs), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_1 = value;
          c3 = 3;
          const obj = { value: tmp.concat(closure_1), done: true };
          return obj;
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return android();
};
export const getAvailablePurchases = () => {
  let alsoPublishToEventListener;
  let automaticallyFinishRestoredTransactions;
  let availableItems;
  let onlyIncludeActiveItems;
  function android() {
    return closure_0(...arguments);
  }
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ alsoPublishToEventListener, automaticallyFinishRestoredTransactions, onlyIncludeActiveItems } = obj);
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
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
        let tmp;
        let closure_1;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            closure_1 = undefined;
            if (availableItems) {
              c2 = 1;
              c3 = 1;
              const obj4 = { value: availableItems.getAvailableItems(), done: false };
              return obj4;
            } else {
              c2 = 2;
              c3 = 1;
              const obj5 = { value: closure_1_4.getAvailableItemsByType(inapp), done: false };
              return obj5;
            }
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (2 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            tmp = value;
            c2 = 3;
            c3 = 1;
            const obj9 = { value: closure_1_4.getAvailableItemsByType(subs), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_1 = value;
          c3 = 3;
          const obj = { value: tmp.concat(closure_1), done: true };
          return obj;
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return android();
};
export const requestPurchase = (arg0) => {
  function android() {
    return closure_1(...arguments);
  }
  let closure_0 = arg0;
  let closure_1 = _asyncToGenerator(async function(arg0, value) {
    let _false;
    let buyItemByType;
    let isOfferPersonalized;
    let obfuscatedAccountIdAndroid;
    let obfuscatedProfileIdAndroid;
    let skus;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else if (_false(dependencyMap[3]).isAmazon) {
          if ("sku" in closure_0) {
            c1 = 3;
            const obj4 = { value: closure_1_5.buyItemByType(closure_0.sku, ""), done: true };
            return obj4;
          } else {
            const _Error2 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error("sku is required for Amazon purchase");
            throw error;
          }
        } else {
          if ("skus" in closure_0) {
            if (closure_0.skus.length) {
              ({ skus, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = closure_0);
              _false = isOfferPersonalized;
              buyItemByType = buyItemByType.buyItemByType;
              if (isOfferPersonalized == null) {
                _false = false;
              }
              c1 = 3;
              const obj = { value: buyItemByType(inapp, skus, undefined, -1, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, [], _false), done: true };
              return obj;
            }
          }
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error1 = new Error("skus is required for Android purchase");
          throw error1;
        }
      } catch (tmp19) {
        c1 = 3;
        throw tmp19;
      }
    }
  });
  return android();
};
export const requestSubscription = (arg0) => {
  function android() {
    return closure_1(...arguments);
  }
  const subscriptionOffers = arg0;
  let closure_1 = _asyncToGenerator(async function(arg0, value) {
    let _false;
    let buyItemByType;
    let isOfferPersonalized;
    let obfuscatedAccountIdAndroid;
    let obfuscatedProfileIdAndroid;
    let purchaseTokenAndroid;
    let replacementModeAndroid;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else if (_false(dependencyMap[3]).isAmazon) {
          if ("sku" in subscriptionOffers) {
            let str7 = "";
            const sku = tmp30.sku;
            if ("prorationModeAmazon" in subscriptionOffers) {
              const str8 = tmp30.prorationModeAmazon || "";
              str7 = str8;
            }
            c1 = 3;
            const obj4 = { value: closure_1_5.buyItemByType(sku, str7), done: true };
            return obj4;
          } else {
            const _Error2 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error("sku is required for Amazon subscriptions");
            throw error;
          }
        } else {
          if ("subscriptionOffers" in subscriptionOffers) {
            if (0 !== subscriptionOffers.subscriptionOffers.length) {
              ({ subscriptionOffers, purchaseTokenAndroid, replacementModeAndroid } = subscriptionOffers);
              if (undefined === replacementModeAndroid) {
                replacementModeAndroid = -1;
              }
              ({ obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, isOfferPersonalized } = subscriptionOffers);
              let mapped;
              buyItemByType = buyItemByType.buyItemByType;
              if (subscriptionOffers != null) {
                mapped = subscriptionOffers.map((sku) => sku.sku);
              }
              let mapped1;
              if (subscriptionOffers != null) {
                mapped1 = subscriptionOffers.map((offerToken) => offerToken.offerToken);
              }
              _false = isOfferPersonalized;
              if (isOfferPersonalized == null) {
                _false = false;
              }
              c1 = 3;
              const obj = { value: buyItemByType(subs, mapped, purchaseTokenAndroid, replacementModeAndroid, obfuscatedAccountIdAndroid, obfuscatedProfileIdAndroid, mapped1, _false), done: true };
              return obj;
            }
          }
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error1 = new Error("subscriptionOffers are required for Google Play subscriptions");
          throw error1;
        }
      } catch (tmp24) {
        c1 = 3;
        throw tmp24;
      }
    }
  });
  return android();
};
export const finishTransaction = (arg0) => {
  let closure_3;
  function android() {
    return closure_3(...arguments);
  }
  ({ purchase: require, isConsumable: importAll, developerPayloadAndroid: dependencyMap } = arg0);
  _asyncToGenerator = undefined;
  _asyncToGenerator = _asyncToGenerator(async function(arg0, value) {
    let v3;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let rejectResult;
          let purchaseToken;
          if (require != null) {
            purchaseToken = tmp25.purchaseToken;
          }
          if (purchaseToken) {
            let consumeProductResult;
            const tmp8 = importAll;
            if (tmp8) {
              const obj3 = c0(closure_1_2[3]);
              const androidModule = obj3.getAndroidModule();
              consumeProductResult = androidModule.consumeProduct(tmp25.purchaseToken, dependencyMap);
            } else if (require.userIdAmazon) {
              const obj = c0(closure_1_2[3]);
              const androidModule1 = obj.getAndroidModule();
              consumeProductResult = androidModule1.acknowledgePurchase(tmp25.purchaseToken, dependencyMap);
            } else {
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const reject2 = Promise.reject;
              const error = new Error("purchase is not suitable to be purchased");
              consumeProductResult = reject2(error);
            }
            rejectResult = consumeProductResult;
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error1 = new Error("purchase is not suitable to be purchased");
            rejectResult = reject(error1);
          }
          c0 = 3;
          const obj5 = { value: rejectResult, done: true };
          return obj5;
        }
      } catch (tmp21) {
        c0 = 3;
        throw tmp21;
      }
    }
  });
  return android();
};
export const deepLinkToSubscriptions = (arg0) => {
  let isAmazonDevice;
  function android() {
    return closure_2(...arguments);
  }
  ({ sku: require, isAmazonDevice } = arg0);
  if (isAmazonDevice === undefined) {
    isAmazonDevice = true;
  }
  let closure_2 = _asyncToGenerator(async function(arg0, value) {
    let v3;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          if (c0(closure_1_2[3]).isAmazon) {
            const obj5 = { isAmazonDevice };
            const obj3 = isAmazonDevice(closure_1_2[5]);
            const result = obj3.deepLinkToSubscriptionsAmazon(obj5);
          } else if (require) {
            const obj6 = { sku: tmp3 };
            const obj = isAmazonDevice(closure_1_2[6]);
            const result1 = obj.deepLinkToSubscriptionsAndroid(obj6);
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Sku is required to locate subscription in Android Store");
            reject(error);
          }
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        c0 = 3;
        throw tmp13;
      }
    }
  });
  return android();
};
export const getStorefront = () => {
  function android() {
    return closure_0(...arguments);
  }
  let closure_0 = _asyncToGenerator(async () => {
    let c1;
    let c2;
    const value = { countryCode: await storefront.getStorefront(), currency: null };
    return value;
  });
  return android();
};
