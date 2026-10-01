// Module ID: 12927
// Function ID: 12928
// Name: ApplePurchasesActionCreators
// Dependencies: [573, 10514, 4503, 2]
// Exports: fetchApplePurchases

// Module 12927 (ApplePurchasesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import BillingUtils from "BillingUtils" /* 4503 */;
import _mod10514 from "module_10514" /* 10514 */;
import size from "module_2" /* 2 */;

let c3;

let cleanupPromise = null;
let result = size.fileFinishedImporting("modules/billing/native/ApplePurchasesActionCreators.tsx");

export const fetchApplePurchases = function fetchApplePurchases() {
  if (null == cleanupPromise) {
    let obj = DispatcherDefault;
    obj.dispatch({ type: "APPLE_PURCHASES_FETCH_START" });
    let obj2 = _mod10514;
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
