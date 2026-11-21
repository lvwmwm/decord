// Module ID: 17104
// Function ID: 17105
// Name: PasskeyUpsellActionCreators
// Dependencies: [4945, 4746, 4747, 5127, 17105, 2119, 2]

// Module 17104 (PasskeyUpsellActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import dismissible_content from "dismissible_content" /* 4746 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 4747 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4945 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let obj = {
  openPasskeyUpsell() {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const tmpResult = DismissibleContentUtils;
      const markDismissibleContentAsShown = tmpResult.requestMarkDismissibleContentAsShown(tmp(4746).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
    }
  },
  openPasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(17105, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(PASSKEY_UPSELL_KEY);
  }
};
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default obj;
