// Module ID: 14946
// Function ID: 14947
// Name: PasskeyUpsellActionCreators
// Dependencies: [4577, 2028, 2030, 4960, 14947, 1980, 4724, 14948, 14950, 2]

// Module 14946 (PasskeyUpsellActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import dismissible_content from "dismissible_content" /* 2028 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = tmp(2030).requestMarkDismissibleContentAsShown(tmp(2028).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = tmp(2030);
    }
  },
  openPasskeyUpsellModal() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14947, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    ModalActionCreatorsDefault.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14948, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14950, dependencyMap.paths), merged, PASSKEY_UPSELL_KEY);
  }
};
