// Module ID: 15509
// Function ID: 15510
// Name: PasskeyUpsellActionCreators
// Dependencies: [4698, 2036, 2038, 4854, 15510, 1987, 2]

// Module 15509 (PasskeyUpsellActionCreators)
import asyncRequire from "asyncRequire" /* 1987 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2038 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let obj = {
  openPasskeyUpsell() {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const tmpResult = DismissibleContentUtils;
      const markDismissibleContentAsShown = tmpResult.requestMarkDismissibleContentAsShown(tmp(2036).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
    }
  },
  openPasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(15510, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(PASSKEY_UPSELL_KEY);
  }
};
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default obj;
