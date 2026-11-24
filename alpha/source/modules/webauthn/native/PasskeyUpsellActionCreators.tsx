// Module ID: 17138
// Function ID: 17139
// Name: PasskeyUpsellActionCreators
// Dependencies: [4949, 4750, 4751, 5131, 17139, 2119, 2]

// Module 17138 (PasskeyUpsellActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import dismissible_content from "dismissible_content" /* 4750 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 4751 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4949 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let obj = {
  openPasskeyUpsell() {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const tmpResult = DismissibleContentUtils;
      const markDismissibleContentAsShown = tmpResult.requestMarkDismissibleContentAsShown(tmp(4750).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
    }
  },
  openPasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(17139, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(PASSKEY_UPSELL_KEY);
  }
};
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default obj;
