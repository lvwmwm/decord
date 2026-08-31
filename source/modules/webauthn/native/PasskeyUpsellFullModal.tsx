// Module ID: 14285
// Function ID: 14286
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14278, 21, 14281, 11468, 2]
// Exports: default

// Module 14285 (PasskeyUpsellFullModal)
import noopAll from "noop" /* 19 */;
import Modal from "Modal" /* 11468 */;
import getScreens from "getScreens" /* 14281 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14278 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  let obj = getScreens;
  const screens = obj.getScreens({ isModal: true });
  obj = { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL };
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
