// Module ID: 14318
// Function ID: 14319
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14311, 21, 14314, 11501, 2]
// Exports: default

// Module 14318 (PasskeyUpsellFullModal)
import noopAll from "noop" /* 19 */;
import Modal from "Modal" /* 11501 */;
import getScreens from "getScreens" /* 14314 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14311 */;
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
