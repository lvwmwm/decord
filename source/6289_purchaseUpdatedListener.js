// Module ID: 6289
// Function ID: 56626
// Name: purchaseUpdatedListener
// Dependencies: [27, 6279, 6277, 6290]
// Exports: promotedProductListener, purchaseErrorListener, purchaseUpdatedListener, transactionListener

// Module 6289 (purchaseUpdatedListener)
import { NativeEventEmitter } from "get ActivityIndicator";


export const purchaseUpdatedListener = function purchaseUpdatedListener(arg0) {
  let fn = arg0;
  const _require = arg0;
  const dependencyMap = arg1;
  const obj = _require(6279);
  const obj2 = new NativeEventEmitter(_require(6279).getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (jsonRepresentation) => {
      callback(callback(6290).transactionSk2ToPurchaseMap(jsonRepresentation));
    };
  }
  obj3 = _require(6277);
  if (_require(6279).isAndroid) {
    const androidModule = _require(6279).getAndroidModule();
    const obj4 = _require(6279);
    androidModule.startListening().catch((arg0) => {
      if (dependencyMap) {
        dependencyMap(arg0);
      } else {
        throw arg0;
      }
    });
    const startListeningResult = androidModule.startListening();
  }
  return obj2.addListener("purchase-updated", fn);
};
export const purchaseErrorListener = function purchaseErrorListener(arg0) {
  const obj = require(6279);
  return new NativeEventEmitter(require(6279).getNativeModule()).addListener("purchase-error", arg0);
};
export const promotedProductListener = function promotedProductListener(arg0) {
  let addListenerResult = null;
  if (require(6279).isIos) {
    addListenerResult = null;
    if (!obj.isIosStorekit2()) {
      const prototype = NativeEventEmitter.prototype;
      const obj3 = new NativeEventEmitter(require(6279).getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const obj2 = require(6279);
    }
    obj = require(6277) /* NativeModules */;
  }
  return addListenerResult;
};
export const transactionListener = function transactionListener(arg0) {
  let addListenerResult = null;
  if (require(6279).isIos) {
    addListenerResult = null;
    if (obj.isIosStorekit2()) {
      const prototype = NativeEventEmitter.prototype;
      const obj3 = new NativeEventEmitter(require(6279).getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const obj2 = require(6279);
    }
    obj = require(6277) /* NativeModules */;
  }
  return addListenerResult;
};
