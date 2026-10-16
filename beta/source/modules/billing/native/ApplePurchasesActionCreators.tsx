// Module ID: 13683
// Function ID: 13684
// Name: ApplePurchasesActionCreators
// Dependencies: [584, 12749, 4784, 2]
// Exports: fetchApplePurchases

// Module 13683 (ApplePurchasesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import BillingUtils from "BillingUtils" /* 4784 */;
import _mod12749 from "module_12749" /* 12749 */;
import size from "module_2" /* 2 */;

let c3;

let cleanupPromise = null;
let result = size.fileFinishedImporting("modules/billing/native/ApplePurchasesActionCreators.tsx");

export const fetchApplePurchases = function fetchApplePurchases() {
  if (null == cleanupPromise) {
    let obj = DispatcherDefault;
    obj.dispatch({ type: "APPLE_PURCHASES_FETCH_START" });
    let obj2 = _mod12749;
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
};
