// Module ID: 15271
// Function ID: 15272
// Name: ApplePurchasesActionCreators
// Dependencies: [572, 14453, 4827, 2]
// Exports: fetchApplePurchases

// Module 15271 (ApplePurchasesActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import BillingUtils from "BillingUtils" /* 4827 */;
import _mod14453 from "module_14453" /* 14453 */;
import size from "module_2" /* 2 */;

let c3;

let cleanupPromise = null;
let result = size.fileFinishedImporting("modules/billing/native/ApplePurchasesActionCreators.tsx");

export function fetchApplePurchases() {
  if (null == cleanupPromise) {
    let obj = DispatcherDefault;
    obj.dispatch({ type: "APPLE_PURCHASES_FETCH_START" });
    let obj2 = _mod14453;
    const availablePurchases = obj2.getAvailablePurchases({ onlyIncludeActiveItems: false });
    const nextPromise = availablePurchases.then((purchases) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "APPLE_PURCHASES_FETCH_SUCCESS", purchases };
      obj.dispatch(obj2);
      return true;
    });
    const catchPromise = nextPromise.catch((error) => {
      const obj = BillingUtils;
      const result = obj.captureBillingException(error);
      const obj2 = DispatcherDefault;
      obj2.dispatch({ type: "APPLE_PURCHASES_FETCH_FAILURE" });
      return false;
    });
    cleanupPromise = catchPromise.finally(() => {
      c3 = null;
    });
  }
  return cleanupPromise;
}
