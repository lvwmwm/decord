// Module ID: 14052
// Function ID: 14053
// Dependencies: [4164, 1377, 1379, 4572, 14053, 2007, 4310, 14054, 14056, 2]

// Module 14052
const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = require("addVersionedDismissedContent").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(require(1377) /* DismissibleContent */.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = tmp(1379).requestMarkDismissibleContentAsShown(tmp(1377).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = tmp(1379);
    }
  },
  openPasskeyUpsellModal() {
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(14053, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    importDefault(4572).popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(14054, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    importDefault(4310).hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(closure_0) {
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(14056, dependencyMap.paths), closure_0, PASSKEY_UPSELL_KEY);
  }
};
