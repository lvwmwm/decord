// Module ID: 13754
// Function ID: 13755
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 13747, 21, 13750, 11118, 2]
// Exports: default

// Module 13754 (PasskeyUpsellFullModal)
import "noop";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  let obj = require(13750) /* getScreens */;
  const screens = obj.getScreens({ isModal: true });
  obj = { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL };
  return jsx(require(11118) /* Modal */.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
