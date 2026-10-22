// Module ID: 16965
// Function ID: 16966
// Name: PasskeyUpsellActionCreators
// Dependencies: [4994, 4805, 4806, 5196, 16966, 2002, 2]

// Module 16965 (PasskeyUpsellActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import dismissible_content from "dismissible_content" /* 4805 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 4806 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let obj = {
  openPasskeyUpsell() {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const tmpResult = DismissibleContentUtils;
      const markDismissibleContentAsShown = tmpResult.requestMarkDismissibleContentAsShown(tmp(4805).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
    }
  },
  openPasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(16966, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(PASSKEY_UPSELL_KEY);
  }
};
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default obj;
