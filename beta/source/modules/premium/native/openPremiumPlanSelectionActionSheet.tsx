// Module ID: 7666
// Function ID: 7667
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1378, 4725, 7667, 1984, 13613, 2]
// Exports: default

// Module 7666 (openPremiumPlanSelectionActionSheet)
import PremiumConstants from "PremiumConstants" /* 1378 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import premiumOrbsDeliveredModal from "premiumOrbsDeliveredModal" /* 13613 */;
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
  obj2.openLazy(require("asyncRequireImpl")(7667, dependencyMap.paths), closure_3, obj3, arg1);
};
