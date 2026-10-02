// Module ID: 10559
// Function ID: 10560
// Name: purchaseUpdatedListener
// Dependencies: [17, 10549, 10547, 10560]
// Exports: promotedProductListener, purchaseErrorListener, purchaseUpdatedListener, transactionListener

// Module 10559 (purchaseUpdatedListener)
import react_native from "react-native" /* 17 */;
import IapAndroid from "IapAndroid" /* 10547 */;
import _mod10549 from "module_10549" /* 10549 */;
import productSk2Map from "productSk2Map" /* 10560 */;

const require = globalThis.__r;
let _require, dependencyMap;

const NativeEventEmitter = react_native.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let closure_0;
  let closure_1;
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  let obj = require("module_10549");
  const obj2 = new NativeEventEmitter(obj.getNativeModule());
  const obj3 = require("IapAndroid");
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      const obj = productSk2Map;
      closure_0(obj.transactionSk2ToPurchaseMap(arg0));
    };
  }
  const addListenerResult = obj2.addListener("purchase-updated", fn);
  if (tmp(10549).isAndroid) {
    const tmpResult = tmp(10549);
    const androidModule = tmpResult.getAndroidModule();
    const startListeningResult = androidModule.startListening();
    startListeningResult.catch((error) => {
      if (closure_1) {
        tmp(error);
      } else {
        throw error;
      }
    });
  }
  return addListenerResult;
};
export const purchaseErrorListener = (arg0) => {
  const obj = _mod10549;
  const obj2 = new NativeEventEmitter(obj.getNativeModule());
  return obj2.addListener("purchase-error", arg0);
};
export const promotedProductListener = function(arg0) {
  let addListenerResult = null;
  if (_mod10549.isIos) {
    addListenerResult = null;
    const tmpResult = IapAndroid;
    if (!tmpResult.isIosStorekit2()) {
      const self = this;
      const self2 = this;
      const tmpResult2 = _mod10549;
      const obj3 = new NativeEventEmitter(tmpResult2.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = function(arg0) {
  let addListenerResult = null;
  if (_mod10549.isIos) {
    addListenerResult = null;
    const tmpResult = IapAndroid;
    if (tmpResult.isIosStorekit2()) {
      const self = this;
      const self2 = this;
      const tmpResult2 = _mod10549;
      const obj3 = new NativeEventEmitter(tmpResult2.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};
