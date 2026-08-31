// Module ID: 14284
// Function ID: 14285
// Dependencies: [4268, 1373, 1375, 4691, 14285, 2009, 4415, 14286, 14288, 2]

// Module 14284
import set from "set" /* 2 */;
import DismissibleContent from "DismissibleContent" /* 1373 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4415 */;
import _modDef4691 from "module_4691" /* 4691 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = set.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(DismissibleContent.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = tmp(1375).requestMarkDismissibleContentAsShown(tmp(1373).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = tmp(1375);
    }
  },
  openPasskeyUpsellModal() {
    _modDef4691.pushLazy(asyncRequireImpl(14285, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    _modDef4691.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14286, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(closure_0) {
    _modDef4691.pushLazy(asyncRequireImpl(14288, dependencyMap.paths), closure_0, PASSKEY_UPSELL_KEY);
  }
};
