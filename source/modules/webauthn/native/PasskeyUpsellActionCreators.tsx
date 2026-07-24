// Module ID: 13681
// Function ID: 105030
// Dependencies: [3946, 1334, 1336, 4337, 13682, 1934, 4098, 13683, 13685, 2]

// Module 13681
let result = require("addVersionedDismissedContent").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    const self = this;
    if (!obj.UNSAFE_isDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const markDismissibleContentAsShown = require(1336) /* addVersionedDismissedContent */.requestMarkDismissibleContentAsShown(require(1334) /* DismissibleContent */.DismissibleContent.PASSWORDLESS_UPSELL);
      const result = self.openPasskeyUpsellPromoSheet();
      const obj2 = require(1336) /* addVersionedDismissedContent */;
    }
  },
  openPasskeyUpsellModal() {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(13682, dependencyMap.paths), undefined, "PASSKEY_UPSELL_KEY");
  },
  closePasskeyUpsellModal() {
    importDefault(4337).popWithKey("PASSKEY_UPSELL_KEY");
  },
  openPasskeyUpsellPromoSheet() {
    importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(13683, dependencyMap.paths), "PASSKEY_UPSELL_KEY");
  },
  closePasskeyUpsellPromoSheet() {
    importDefault(4098).hideActionSheet("PASSKEY_UPSELL_KEY");
  },
  openPasskeyUpsellPromoModal(merged) {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(13685, dependencyMap.paths), merged, "PASSKEY_UPSELL_KEY");
  }
};
