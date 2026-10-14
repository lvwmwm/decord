// Module ID: 10795
// Function ID: 10796
// Name: RNIapModule
// Dependencies: [5, 17, 10787, 10788]
// Exports: acknowledgePurchaseAndroid, deepLinkToSubscriptionsAndroid, getInstallSourceAndroid, isFeatureSupported, validateReceiptAndroid

// Module 10795 (RNIapModule)
import ReplacementModesAndroid from "ReplacementModesAndroid" /* 10787 */;
import _mod10788 from "module_10788" /* 10788 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_native from "react-native" /* 17 */;

let NativeModules;
let RNIapModule;
let c2;
let c3;
({ Linking: c2, NativeModules } = react_native);
({ RNIapModule: c3, RNIapModule } = NativeModules);
_asyncToGenerator(async (arg0) => {
  let c5;
  let c6;
  let closure_4;
  let openURL;
  closure_0 = arg0;
  const packageName = tmp4;
  const sku = closure_0.sku;
  await "Reflect";
  const obj3 = closure_0(openURL[3]);
  const result = obj3.checkNativeAndroidAvailable();
  openURL = openURL.openURL;
  await packageName.getPackageName();
  const _HermesInternal = HermesInternal;
  return openURL("https://play.google.com/store/account/subscriptions?package=" + arg1 + "&sku=" + sku);
});
let closure_0 = _asyncToGenerator(async function(arg0, value) {
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  closure_0 = arg0;
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
      let closure_5;
      let closure_6;
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
          let closure_1 = tmp;
          c0 = undefined;
          c1 = undefined;
          c4 = undefined;
          ({ packageName: c0, productId: c1, productToken: c2, accessToken: c3, isSub: c4 } = closure_0);
          closure_5 = undefined;
          closure_6 = undefined;
          c2 = 1;
          c3 = 1;
          return { value: "Reflect", done: null };
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let str = "products";
          if (c4) {
            str = "subscriptions";
          }
          const _HermesInternal = HermesInternal;
          closure_5 = "https://androidpublisher.googleapis.com/androidpublisher/v3/applications/" + tmp26 + "/purchases/" + str + "/" + c1 + "/tokens/" + c2 + "?access_token=" + c3;
          const _fetch = fetch;
          const obj5 = { method: "GET", headers: { "Content-Type": "application/json" } };
          c2 = 2;
          c3 = 1;
          const obj6 = { value: fetch(closure_5, obj5), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_6 = value;
        if (closure_6.ok) {
          c3 = 3;
          const obj8 = { value: closure_6.json(), done: true };
          return obj8;
        } else {
          const _Object = Object;
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error(closure_6.statusText);
          const obj = { statusCode: closure_6.status };
          throw assign(error, obj);
        }
      }
    } catch (tmp18) {
      c3 = 3;
      throw tmp18;
    }
  }
});

export const AndroidModule = RNIapModule;
export const getInstallSourceAndroid = () => {
  const InstallSourceAndroid = ReplacementModesAndroid.InstallSourceAndroid;
  return _false ? InstallSourceAndroid.GOOGLE_PLAY : InstallSourceAndroid.AMAZON;
};
export const deepLinkToSubscriptionsAndroid = function deepLinkToSubscriptionsAndroid(arg0) {
  return closure_0(...arguments);
};
export const validateReceiptAndroid = function validateReceiptAndroid(arg0) {
  return closure_0(...arguments);
};
export const acknowledgePurchaseAndroid = (arg0) => {
  let developerPayload;
  let token;
  ({ token, developerPayload } = arg0);
  const obj = _mod10788;
  const androidModule = obj.getAndroidModule();
  return androidModule.acknowledgePurchase(token, developerPayload);
};
export const isFeatureSupported = (arg0) => {
  if (_mod10788.isAndroid) {
    let isFeatureSupportedResult;
    const tmp = _false;
    if (tmp) {
      isFeatureSupportedResult = RNIapModule.isFeatureSupported(arg0);
    }
    return isFeatureSupportedResult;
  }
  isFeatureSupportedResult = Promise.reject("This is only available on Android clients");
};
