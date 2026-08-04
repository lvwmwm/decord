// Module ID: 13879
// Function ID: 13880
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 13872, 21, 13875, 11248, 2]
// Exports: default

// Module 13879 (PasskeyUpsellFullModal)
import "noop";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  let obj = require(13875) /* getScreens */;
  const screens = obj.getScreens({ isModal: true });
  obj = { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL };
  return jsx(require(11248) /* Modal */.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
