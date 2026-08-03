// Module ID: 13845
// Function ID: 13846
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 13838, 21, 13841, 11249, 2]
// Exports: default

// Module 13845 (PasskeyUpsellFullModal)
import "noop";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  let obj = require(13841) /* getScreens */;
  const screens = obj.getScreens({ isModal: true });
  obj = { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL };
  return jsx(require(11249) /* Modal */.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
