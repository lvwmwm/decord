// Module ID: 13693
// Function ID: 105162
// Dependencies: [3947, 1334, 1336, 4338, 13694, 1935, 4099, 13695, 13697, 2]

// Module 13693
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
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(13694, dependencyMap.paths), undefined, "PASSKEY_UPSELL_KEY");
  },
  closePasskeyUpsellModal() {
    importDefault(4338).popWithKey("PASSKEY_UPSELL_KEY");
  },
  openPasskeyUpsellPromoSheet() {
    importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(13695, dependencyMap.paths), "PASSKEY_UPSELL_KEY");
  },
  closePasskeyUpsellPromoSheet() {
    importDefault(4099).hideActionSheet("PASSKEY_UPSELL_KEY");
  },
  openPasskeyUpsellPromoModal(merged) {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(13697, dependencyMap.paths), merged, "PASSKEY_UPSELL_KEY");
  }
};
