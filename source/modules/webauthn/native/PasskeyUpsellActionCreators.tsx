// Module ID: 14039
// Function ID: 14040
// Dependencies: [4166, 1377, 1379, 4549, 14040, 2007, 4312, 14041, 14043, 2]

// Module 14039
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
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(14040, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    importDefault(4549).popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(14041, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    importDefault(4312).hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(closure_0) {
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(14043, dependencyMap.paths), closure_0, PASSKEY_UPSELL_KEY);
  }
};
