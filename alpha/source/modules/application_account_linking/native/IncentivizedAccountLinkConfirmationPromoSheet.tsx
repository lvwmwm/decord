// Module ID: 19309
// Function ID: 19310
// Name: IncentivizedAccountLinkConfirmationPromoSheet
// Dependencies: [19, 5044, 21, 5043, 504, 5730, 17528, 17529, 10747, 5257, 2]
// Exports: default

// Module 19309 (IncentivizedAccountLinkConfirmationPromoSheet)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import FastImageDefault from "FastImage" /* 5730 */;
import PromoSheet from "PromoSheet" /* 10747 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ illustration: { width: 150, height: 150 } });
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationPromoSheet.tsx");

export default function IncentivizedAccountLinkConfirmationPromoSheet(arg0) {
  let actions;
  let description;
  let title;
  let useReducedMotion;
  ({ title, description, actions } = arg0);
  const tmp = closure_5();
  let obj = get_initialized;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = { uri: importDefault(stateFromStores ? 17528 : 17529) };
  FastImageDefault;
  return jsx(PromoSheet.PromoSheet, {
    title,
    description,
    actions,
    illustration: <tmp7 source={obj3} resizeMode="contain" style={tmp.illustration} enableAnimation={!stateFromStores} />,
    onDismiss: function handleDismiss() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  });
};
