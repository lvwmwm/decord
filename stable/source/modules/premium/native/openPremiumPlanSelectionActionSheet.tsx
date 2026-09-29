// Module ID: 7696
// Function ID: 7697
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1374, 4755, 7697, 1980, 13639, 2]
// Exports: default

// Module 7696 (openPremiumPlanSelectionActionSheet)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import premiumOrbsDeliveredModal from "premiumOrbsDeliveredModal" /* 13639 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_3 = PremiumConstants.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
let result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  _require = arg0;
  if (null == arg1) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  const obj2 = ActionSheetActionCreatorsDefault;
  const obj3 = {};
  const merged = Object.assign(arg0);
  obj3.onPaymentStart = function onPaymentStart(productId) {
    const onPaymentStart = closure_0.onPaymentStart;
    if (onPaymentStart != null) {
      onPaymentStart(productId);
    }
    const result = premiumOrbsDeliveredModal.anchorOrbsPurchaseStart();
  };
  obj3.onPaymentDismiss = function onPaymentDismiss(isSuccess) {
    const onPaymentDismiss = closure_0.onPaymentDismiss;
    if (onPaymentDismiss != null) {
      onPaymentDismiss(isSuccess);
    }
    if (isSuccess.isSuccess) {
      const result = premiumOrbsDeliveredModal.openOrbsModalIfDelivered();
    }
  };
  obj2.openLazy(require("asyncRequireImpl")(7697, dependencyMap.paths), closure_3, obj3, arg1);
};
