// Module ID: 7212
// Function ID: 58114
// Name: purchaseUpdatedListener
// Dependencies: []
// Exports: promotedProductListener, purchaseErrorListener, purchaseUpdatedListener, transactionListener

// Module 7212 (purchaseUpdatedListener)
const NativeEventEmitter = require(dependencyMap[0]).NativeEventEmitter;

export const purchaseUpdatedListener = function purchaseUpdatedListener(arg0) {
  let fn = arg0;
  const require = arg0;
  const dependencyMap = arg1;
  const obj = require(dependencyMap[1]);
  const obj2 = new NativeEventEmitter(require(dependencyMap[1]).getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (jsonRepresentation) => {
      jsonRepresentation(jsonRepresentation(arg1[3]).transactionSk2ToPurchaseMap(jsonRepresentation));
    };
  }
  const obj3 = require(dependencyMap[2]);
  if (require(dependencyMap[1]).isAndroid) {
    const androidModule = require(dependencyMap[1]).getAndroidModule();
    const obj4 = require(dependencyMap[1]);
    androidModule.startListening().catch((arg0) => {
      if (arg1) {
        arg1(arg0);
      } else {
        throw arg0;
      }
    });
    const startListeningResult = androidModule.startListening();
  }
  return obj2.addListener("purchase-updated", fn);
};
export const purchaseErrorListener = function purchaseErrorListener(arg0) {
  const obj = require(dependencyMap[1]);
  return new NativeEventEmitter(require(dependencyMap[1]).getNativeModule()).addListener("purchase-error", arg0);
};
export const promotedProductListener = function promotedProductListener(arg0) {
  let addListenerResult = null;
  if (require(dependencyMap[1]).isIos) {
    addListenerResult = null;
    if (!obj.isIosStorekit2()) {
      const prototype = NativeEventEmitter.prototype;
      const obj3 = new NativeEventEmitter(require(dependencyMap[1]).getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const obj2 = require(dependencyMap[1]);
    }
    const obj = require(dependencyMap[2]);
  }
  return addListenerResult;
};
export const transactionListener = function transactionListener(arg0) {
  let addListenerResult = null;
  if (require(dependencyMap[1]).isIos) {
    addListenerResult = null;
    if (obj.isIosStorekit2()) {
      const prototype = NativeEventEmitter.prototype;
      const obj3 = new NativeEventEmitter(require(dependencyMap[1]).getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const obj2 = require(dependencyMap[1]);
    }
    const obj = require(dependencyMap[2]);
  }
  return addListenerResult;
};
