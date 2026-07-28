// Module ID: 13737
// Function ID: 105335
// Dependencies: [3981, 1334, 1336, 4372, 13738, 1935, 4133, 13739, 13741, 2]

// Module 13737
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
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(13738, dependencyMap.paths), undefined, "PASSKEY_UPSELL_KEY");
  },
  closePasskeyUpsellModal() {
    importDefault(4372).popWithKey("PASSKEY_UPSELL_KEY");
  },
  openPasskeyUpsellPromoSheet() {
    importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(13739, dependencyMap.paths), "PASSKEY_UPSELL_KEY");
  },
  closePasskeyUpsellPromoSheet() {
    importDefault(4133).hideActionSheet("PASSKEY_UPSELL_KEY");
  },
  openPasskeyUpsellPromoModal(merged) {
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(13741, dependencyMap.paths), merged, "PASSKEY_UPSELL_KEY");
  }
};
