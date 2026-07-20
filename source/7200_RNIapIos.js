// Module ID: 7200
// Function ID: 57999
// Name: RNIapIos
// Dependencies: []
// Exports: getAndroidModuleType, getIosModule, getNativeModule, isIosStorekit2, setAndroidNativeModule, setIosNativeModule, storekit1Mode, storekit2Mode, storekitHybridMode

// Module 7200 (RNIapIos)
let NativeModules;
let Platform;
let RNIapModule;
const _module = require(dependencyMap[0]);
({ NativeModules, Platform } = _module);
const RNIapIos = NativeModules.RNIapIos;
({ RNIapIosSk2: closure_3, RNIapModule } = NativeModules);
const RNIapAmazonModule = NativeModules.RNIapAmazonModule;
function checkNativeAndroidAvailable() {
  if (!RNIapModule) {
    if (!RNIapAmazonModule) {
      const _Error = Error;
      const error = new Error(require(dependencyMap[1]).ErrorCode.E_IAP_NOT_AVAILABLE);
      throw error;
    }
  }
}
function getAndroidModule() {
  checkNativeAndroidAvailable();
  let tmp2 = RNIapModule;
  if (!RNIapModule) {
    let tmp3 = RNIapModule;
    if (!RNIapModule) {
      tmp3 = RNIapAmazonModule;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
function isStorekit2Available() {
  return false;
}

export const isIos = false;
export const isAndroid = true;
export const isAmazon = RNIapAmazonModule;
export const isPlay = RNIapModule;
export function setAndroidNativeModule(arg0) {
  const RNIapModule = arg0;
}
export { checkNativeAndroidAvailable };
export { getAndroidModule };
export const getAndroidModuleType = function getAndroidModuleType() {
  const tmp = getAndroidModule();
  if (RNIapModule === tmp) {
    return "android";
  } else if (RNIapAmazonModule === tmp) {
    return "amazon";
  } else {
    return null;
  }
};
export const getNativeModule = function getNativeModule() {
  return getAndroidModule();
};
export { isStorekit2Available };
export function isIosStorekit2() {
  return false;
}
export function setIosNativeModule(arg0) {
  const RNIapIos = arg0;
}
export const storekit2Mode = function storekit2Mode() {
  let closure_9 = closure_3;
  isStorekit2Available();
  return true;
};
export const storekit1Mode = function storekit1Mode() {
  let closure_9 = RNIapIos;
  isStorekit2Available();
  return false;
};
export const storekitHybridMode = function storekitHybridMode() {
  isStorekit2Available();
  let closure_9 = RNIapIos;
  console.info("Using Storekit 1");
  return true;
};
export const getIosModule = function getIosModule() {
  if (RNIapIos) {
    let tmp10 = RNIapIos;
    if (!RNIapIos) {
      let tmp11 = closure_3;
      if (!closure_3) {
        tmp11 = RNIapIos;
      }
      tmp10 = tmp11;
    }
    return tmp10;
  } else {
    isStorekit2Available();
    const _Error = Error;
    const error = new Error(require(dependencyMap[1]).ErrorCode.E_IAP_NOT_AVAILABLE);
    throw error;
  }
};
