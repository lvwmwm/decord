// Module ID: 19091
// Function ID: 19092
// Name: IncentivizedAccountLinkConfirmationPromoSheet
// Dependencies: [19, 4914, 21, 4913, 504, 5600, 17320, 17321, 11225, 5127, 2]
// Exports: default

// Module 19091 (IncentivizedAccountLinkConfirmationPromoSheet)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import FastImageDefault from "FastImage" /* 5600 */;
import PromoSheet from "PromoSheet" /* 11225 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import createStyles from "createStyles" /* 4913 */;
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
  const obj3 = { uri: importDefault(stateFromStores ? 17320 : 17321) };
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
