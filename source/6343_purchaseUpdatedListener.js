// Module ID: 6343
// Function ID: 6344
// Name: purchaseUpdatedListener
// Dependencies: [17, 6333, 6331, 6344]
// Exports: promotedProductListener, purchaseErrorListener, purchaseUpdatedListener, transactionListener

// Module 6343 (purchaseUpdatedListener)
import { NativeEventEmitter } from "get ActivityIndicator";


export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  const _require = arg0;
  const dependencyMap = arg1;
  const obj = _require(6333);
  const obj2 = new NativeEventEmitter(_require(6333).getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      callback(callback(table[3]).transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = _require(6331);
  if (_require(6333).isAndroid) {
    const androidModule = tmp(6333).getAndroidModule();
    const tmpResult = tmp(6333);
    androidModule.startListening().catch((arg0) => {
      if (closure_1) {
        tmp(arg0);
      } else {
        throw arg0;
      }
    });
    const startListeningResult = androidModule.startListening();
  }
  return obj2.addListener("purchase-updated", fn);
};
export const purchaseErrorListener = (arg0) => {
  const obj = require(6333);
  return new NativeEventEmitter(require(6333).getNativeModule()).addListener("purchase-error", arg0);
};
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (require(6333).isIos) {
    let tmpResult = tmp(6331);
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = tmp(6333);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (require(6333).isIos) {
    let tmpResult = tmp(6331);
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = tmp(6333);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};
