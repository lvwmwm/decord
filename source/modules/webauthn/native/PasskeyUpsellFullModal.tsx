// Module ID: 13738
// Function ID: 105342
// Name: PasskeyUpsellFullModal
// Dependencies: [31, 13731, 33, 13734, 11098, 2]
// Exports: default

// Module 13738 (PasskeyUpsellFullModal)
import "result";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  let obj = require(13734) /* getScreens */;
  const screens = obj.getScreens({ isModal: true });
  obj = { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL };
  return jsx(require(11098) /* Modal */.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
