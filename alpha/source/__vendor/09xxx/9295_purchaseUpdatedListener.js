// Module ID: 9295
// Function ID: 9296
// Name: purchaseUpdatedListener
// Dependencies: [17, 9285, 9283, 9296]
// Exports: promotedProductListener, purchaseErrorListener, purchaseUpdatedListener, transactionListener

// Module 9295 (purchaseUpdatedListener)
import react_native from "react-native" /* 17 */;
import IapAndroid from "IapAndroid" /* 9283 */;
import _mod9285 from "module_9285" /* 9285 */;
import productSk2Map from "productSk2Map" /* 9296 */;

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
  let obj = require("module_9285");
  const obj2 = new NativeEventEmitter(obj.getNativeModule());
  const obj3 = require("IapAndroid");
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      const obj = productSk2Map;
      closure_0(obj.transactionSk2ToPurchaseMap(arg0));
    };
  }
  const addListenerResult = obj2.addListener("purchase-updated", fn);
  if (tmp(9285).isAndroid) {
    const tmpResult = tmp(9285);
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
  const obj = _mod9285;
  const obj2 = new NativeEventEmitter(obj.getNativeModule());
  return obj2.addListener("purchase-error", arg0);
};
export const promotedProductListener = function(arg0) {
  let addListenerResult = null;
  if (_mod9285.isIos) {
    addListenerResult = null;
    const tmpResult = IapAndroid;
    if (!tmpResult.isIosStorekit2()) {
      const self = this;
      const self2 = this;
      const tmpResult2 = _mod9285;
      const obj3 = new NativeEventEmitter(tmpResult2.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = function(arg0) {
  let addListenerResult = null;
  if (_mod9285.isIos) {
    addListenerResult = null;
    const tmpResult = IapAndroid;
    if (tmpResult.isIosStorekit2()) {
      const self = this;
      const self2 = this;
      const tmpResult2 = _mod9285;
      const obj3 = new NativeEventEmitter(tmpResult2.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};
