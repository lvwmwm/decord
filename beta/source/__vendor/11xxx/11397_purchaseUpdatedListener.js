// Module ID: 11397
// Function ID: 11398
// Name: purchaseUpdatedListener
// Dependencies: [17, 11387, 11385, 11398]
// Exports: promotedProductListener, purchaseErrorListener, purchaseUpdatedListener, transactionListener

// Module 11397 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod11387 from "module_11387" /* 11387 */;
import productSk2Map from "productSk2Map" /* 11398 */;

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_11387");
  const obj2 = new NativeEventEmitter(require("module_11387").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_11385");
  if (require("module_11387").isAndroid) {
    const androidModule = tmp(11387).getAndroidModule();
    const tmpResult = tmp(11387);
    androidModule.startListening().catch((error) => {
      if (closure_1) {
        tmp(error);
      } else {
        throw error;
      }
    });
    const startListeningResult = androidModule.startListening();
  }
  return obj2.addListener("purchase-updated", fn);
};
export const purchaseErrorListener = (arg0) => new NativeEventEmitter(_mod11387.getNativeModule()).addListener("purchase-error", arg0);
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11387.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(tmp(11387).getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = tmp(11387);
    }
    tmpResult = tmp(11385);
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11387.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(tmp(11387).getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = tmp(11387);
    }
    tmpResult = tmp(11385);
  }
  return addListenerResult;
};
