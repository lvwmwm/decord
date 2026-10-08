// Module ID: 13512
// Function ID: 13513
// Name: ApplePurchasesActionCreators
// Dependencies: [584, 12750, 4741, 2]
// Exports: fetchApplePurchases

// Module 13512 (ApplePurchasesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import BillingUtils from "BillingUtils" /* 4741 */;
import _mod12750 from "module_12750" /* 12750 */;
import size from "module_2" /* 2 */;

let c3;

let cleanupPromise = null;
let result = size.fileFinishedImporting("modules/billing/native/ApplePurchasesActionCreators.tsx");

export const fetchApplePurchases = function fetchApplePurchases() {
  if (null == cleanupPromise) {
    let obj = DispatcherDefault;
    obj.dispatch({ type: "APPLE_PURCHASES_FETCH_START" });
    let obj2 = _mod12750;
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
