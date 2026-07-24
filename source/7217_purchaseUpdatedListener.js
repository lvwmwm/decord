// Module ID: 7217
// Function ID: 58177
// Name: purchaseUpdatedListener
// Dependencies: [27, 7207, 7205, 7218]
// Exports: promotedProductListener, purchaseErrorListener, purchaseUpdatedListener, transactionListener

// Module 7217 (purchaseUpdatedListener)
import { NativeEventEmitter } from "get ActivityIndicator";


export const purchaseUpdatedListener = function purchaseUpdatedListener(arg0) {
  let fn = arg0;
  const _require = arg0;
  const dependencyMap = arg1;
  const obj = _require(7207);
  const obj2 = new NativeEventEmitter(_require(7207).getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (jsonRepresentation) => {
      callback(callback(7218).transactionSk2ToPurchaseMap(jsonRepresentation));
    };
  }
  obj3 = _require(7205);
  if (_require(7207).isAndroid) {
    const androidModule = _require(7207).getAndroidModule();
    const obj4 = _require(7207);
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
  const obj = require(7207);
  return new NativeEventEmitter(require(7207).getNativeModule()).addListener("purchase-error", arg0);
};
export const promotedProductListener = function promotedProductListener(arg0) {
  let addListenerResult = null;
  if (require(7207).isIos) {
    addListenerResult = null;
    if (!obj.isIosStorekit2()) {
      const prototype = NativeEventEmitter.prototype;
      const obj3 = new NativeEventEmitter(require(7207).getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const obj2 = require(7207);
    }
    obj = require(7205) /* NativeModules */;
  }
  return addListenerResult;
};
export const transactionListener = function transactionListener(arg0) {
  let addListenerResult = null;
  if (require(7207).isIos) {
    addListenerResult = null;
    if (obj.isIosStorekit2()) {
      const prototype = NativeEventEmitter.prototype;
      const obj3 = new NativeEventEmitter(require(7207).getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const obj2 = require(7207);
    }
    obj = require(7205) /* NativeModules */;
  }
  return addListenerResult;
};
