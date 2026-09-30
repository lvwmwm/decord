// Module ID: 14428
// Function ID: 14429
// Name: PasskeyUpsellActionCreators
// Dependencies: [4684, 2029, 2031, 5069, 14429, 1981, 4830, 14430, 14432, 2]

// Module 14428 (PasskeyUpsellActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = tmp(2031).requestMarkDismissibleContentAsShown(tmp(2029).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = tmp(2031);
    }
  },
  openPasskeyUpsellModal() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14429, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    ModalActionCreatorsDefault.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14430, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14432, dependencyMap.paths), merged, PASSKEY_UPSELL_KEY);
  }
};
