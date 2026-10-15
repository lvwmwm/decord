// Module ID: 16635
// Function ID: 16636
// Name: PasskeyUpsellActionCreators
// Dependencies: [4994, 2049, 2050, 5115, 16636, 2000, 2]

// Module 16635 (PasskeyUpsellActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2050 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let obj = {
  openPasskeyUpsell() {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const tmpResult = DismissibleContentUtils;
      const markDismissibleContentAsShown = tmpResult.requestMarkDismissibleContentAsShown(tmp(2049).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
    }
  },
  openPasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(16636, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(PASSKEY_UPSELL_KEY);
  }
};
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default obj;
