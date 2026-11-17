// Module ID: 19882
// Function ID: 19883
// Name: IncentivizedAccountLinkConfirmationPromoSheet
// Dependencies: [19, 5311, 21, 5310, 504, 6014, 18563, 18564, 11903, 5546, 2]
// Exports: default

// Module 19882 (IncentivizedAccountLinkConfirmationPromoSheet)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import FastImageDefault from "FastImage" /* 6014 */;
import PromoSheet from "PromoSheet" /* 11903 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5311 */;
import createStyles from "createStyles" /* 5310 */;
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
  const obj3 = { uri: importDefault(stateFromStores ? 18563 : 18564) };
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
