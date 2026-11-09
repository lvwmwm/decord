// Module ID: 7683
// Function ID: 7684
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1387, 5374, 7684, 2118, 15508, 2]
// Exports: default

// Module 7683 (openPremiumPlanSelectionActionSheet)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import premiumOrbsDeliveredModal from "premiumOrbsDeliveredModal" /* 15508 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = PremiumConstants.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
let result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  let closure_0;
  _require = arg0;
  if (null == arg1) {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj2 = {
    onPaymentStart(productId) {
      const onPaymentStart = closure_0.onPaymentStart;
      if (onPaymentStart != null) {
        onPaymentStart(productId);
      }
      const obj = premiumOrbsDeliveredModal;
      const result = obj.anchorOrbsPurchaseStart();
    },
    onPaymentDismiss(isSuccess) {
      const onPaymentDismiss = closure_0.onPaymentDismiss;
      if (onPaymentDismiss != null) {
        onPaymentDismiss(isSuccess);
      }
      if (isSuccess.isSuccess) {
        const obj = premiumOrbsDeliveredModal;
        const result = obj.openOrbsModalIfDelivered();
      }
    }
  };
  const tmp5 = require("asyncRequire")(7684, dependencyMap.paths);
  const merged = Object.assign(arg0);
  openLazy(tmp5, closure_3, obj2, arg1);
};
