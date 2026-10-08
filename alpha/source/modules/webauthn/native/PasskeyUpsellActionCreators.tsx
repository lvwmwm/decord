// Module ID: 15791
// Function ID: 15792
// Name: PasskeyUpsellActionCreators
// Dependencies: [4898, 2048, 2049, 5054, 15792, 1999, 2]

// Module 15791 (PasskeyUpsellActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2049 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4898 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let obj = {
  openPasskeyUpsell() {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const tmpResult = DismissibleContentUtils;
      const markDismissibleContentAsShown = tmpResult.requestMarkDismissibleContentAsShown(tmp(2048).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
    }
  },
  openPasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(15792, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(PASSKEY_UPSELL_KEY);
  }
};
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default obj;
