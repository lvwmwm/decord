// Module ID: 14221
// Function ID: 14222
// Name: PasskeyUpsellActionCreators
// Dependencies: [4654, 2029, 2031, 5039, 14222, 1981, 4800, 14223, 14225, 2]

// Module 14221 (PasskeyUpsellActionCreators)
import asyncRequire from "asyncRequire" /* 1981 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2031 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let obj = {
  openPasskeyUpsell() {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const tmpResult = DismissibleContentUtils;
      const markDismissibleContentAsShown = tmpResult.requestMarkDismissibleContentAsShown(tmp(2029).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
    }
  },
  openPasskeyUpsellModal() {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(14222, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(14223, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(14225, dependencyMap.paths), merged, PASSKEY_UPSELL_KEY);
  }
};
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default obj;
