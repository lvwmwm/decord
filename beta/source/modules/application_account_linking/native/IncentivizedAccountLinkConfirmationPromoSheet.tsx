// Module ID: 19837
// Function ID: 19838
// Name: IncentivizedAccountLinkConfirmationPromoSheet
// Dependencies: [19, 5307, 21, 5306, 504, 6010, 18522, 18523, 10713, 5542, 2]
// Exports: default

// Module 19837 (IncentivizedAccountLinkConfirmationPromoSheet)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import FastImageDefault from "FastImage" /* 6010 */;
import PromoSheet from "PromoSheet" /* 10713 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import createStyles from "createStyles" /* 5306 */;
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
  const obj3 = { uri: importDefault(stateFromStores ? 18522 : 18523) };
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
