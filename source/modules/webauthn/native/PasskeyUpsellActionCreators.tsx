// Module ID: 13758
// Function ID: 13759
// Dependencies: [4005, 1358, 1360, 4395, 13759, 1959, 4157, 13760, 13762, 2]

// Module 13758
const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = require("addVersionedDismissedContent").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(require(1358) /* DismissibleContent */.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = tmp(1360).requestMarkDismissibleContentAsShown(tmp(1358).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = tmp(1360);
    }
  },
  openPasskeyUpsellModal() {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(13759, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    importDefault(4395).popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(13760, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    importDefault(4157).hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(closure_0) {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(13762, dependencyMap.paths), closure_0, PASSKEY_UPSELL_KEY);
  }
};
