// Module ID: 7214
// Function ID: 58097
// Name: NativeModules
// Dependencies: [5, 27, 7206, 7207]
// Exports: acknowledgePurchaseAndroid, getInstallSourceAndroid, isFeatureSupported

// Module 7214 (NativeModules)
import asyncGeneratorStep from "asyncGeneratorStep";
import get_ActivityIndicator from "get ActivityIndicator";

let NativeModules;
let RNIapModule;
let closure_3;
let closure_4;
const require = arg1;
({ Linking: closure_3, NativeModules } = get_ActivityIndicator);
({ RNIapModule: closure_4, RNIapModule } = NativeModules);

export const AndroidModule = RNIapModule;
export const getInstallSourceAndroid = function getInstallSourceAndroid() {
  const InstallSourceAndroid = require(7206).InstallSourceAndroid;
  return closure_4 ? InstallSourceAndroid.GOOGLE_PLAY : InstallSourceAndroid.AMAZON;
};
export const deepLinkToSubscriptionsAndroid = (() => {
  let closure_0 = callback(async (arg0) => {
    const result = callback(outer2_1[3]).checkNativeAndroidAvailable();
    return outer2_3.openURL("https://play.google.com/store/account/subscriptions?package=" + yield outer2_4.getPackageName() + "&sku=" + arg0.sku);
  });
  return function deepLinkToSubscriptionsAndroid(arg0) {
    return callback(...arguments);
  };
})();
export const validateReceiptAndroid = (() => {
  let closure_0 = callback(async (arg0) => {
    let accessToken;
    let packageName;
    let productId;
    let productToken;
    ({ packageName, productId, productToken, accessToken } = arg0);
    let str = "products";
    if (arg0.isSub) {
      str = "subscriptions";
    }
    let obj = yield fetch("https://androidpublisher.googleapis.com/androidpublisher/v3/applications/" + packageName + "/purchases/" + str + "/" + productId + "/tokens/" + productToken + "?access_token=" + accessToken, { method: "GET", headers: { "Content-Type": "application/json" } });
    if (obj.ok) {
      return obj.json();
    } else {
      const _Object = Object;
      const _Error = Error;
      const error = new Error(obj.statusText);
      obj = {};
      obj.statusCode = obj.status;
      throw Object.assign(error, obj);
    }
  });
  return function validateReceiptAndroid(arg0) {
    return callback(...arguments);
  };
})();
export const acknowledgePurchaseAndroid = function acknowledgePurchaseAndroid(arg0) {
  let developerPayload;
  let token;
  ({ token, developerPayload } = arg0);
  const androidModule = require(7207).getAndroidModule();
  return androidModule.acknowledgePurchase(token, developerPayload);
};
export const isFeatureSupported = function isFeatureSupported(arg0) {
  if (require(7207).isAndroid) {
    if (closure_4) {
      let isFeatureSupportedResult = RNIapModule.isFeatureSupported(arg0);
    }
    return isFeatureSupportedResult;
  }
  isFeatureSupportedResult = Promise.reject("This is only available on Android clients");
};
