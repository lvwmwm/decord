// Module ID: 14939
// Function ID: 14940
// Name: PasskeyUpsellActionCreators
// Dependencies: [4576, 2027, 2029, 4959, 14940, 1980, 4723, 14941, 14943, 2]

// Module 14939 (PasskeyUpsellActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import dismissible_content from "dismissible_content" /* 2027 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = tmp(2029).requestMarkDismissibleContentAsShown(tmp(2027).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = tmp(2029);
    }
  },
  openPasskeyUpsellModal() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14940, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    ModalActionCreatorsDefault.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14941, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14943, dependencyMap.paths), merged, PASSKEY_UPSELL_KEY);
  }
};
