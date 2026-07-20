// Module ID: 13500
// Function ID: 102472
// Dependencies: []

// Module 13500
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    const self = this;
    if (!obj.UNSAFE_isDismissibleContentDismissed(require(dependencyMap[1]).DismissibleContent.PASSWORDLESS_UPSELL)) {
      const markDismissibleContentAsShown = require(dependencyMap[2]).requestMarkDismissibleContentAsShown(require(dependencyMap[1]).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = self.openPasskeyUpsellPromoSheet();
      const obj2 = require(dependencyMap[2]);
    }
  },
  openPasskeyUpsellModal() {
    importDefault(dependencyMap[3]).pushLazy(require(dependencyMap[5])(dependencyMap[4], dependencyMap.paths), undefined, "PASSKEY_UPSELL_KEY");
  },
  closePasskeyUpsellModal() {
    importDefault(dependencyMap[3]).popWithKey("PASSKEY_UPSELL_KEY");
  },
  openPasskeyUpsellPromoSheet() {
    importDefault(dependencyMap[6]).openLazy(require(dependencyMap[5])(dependencyMap[7], dependencyMap.paths), "PASSKEY_UPSELL_KEY");
  },
  closePasskeyUpsellPromoSheet() {
    importDefault(dependencyMap[6]).hideActionSheet("PASSKEY_UPSELL_KEY");
  },
  openPasskeyUpsellPromoModal(closure_2) {
    importDefault(dependencyMap[3]).pushLazy(require(dependencyMap[5])(dependencyMap[8], dependencyMap.paths), closure_2, "PASSKEY_UPSELL_KEY");
  }
};
