// Module ID: 13888
// Function ID: 13889
// Dependencies: [4100, 1358, 1360, 4490, 13889, 1988, 4253, 13890, 13892, 2]

// Module 13888
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
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(13889, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    importDefault(4490).popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    importDefault(4253).openLazy(require(1988) /* asyncRequireImpl */(13890, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    importDefault(4253).hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(closure_0) {
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(13892, dependencyMap.paths), closure_0, PASSKEY_UPSELL_KEY);
  }
};
