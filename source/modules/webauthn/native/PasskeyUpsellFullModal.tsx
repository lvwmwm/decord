// Module ID: 14589
// Function ID: 14590
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14582, 21, 14585, 11860, 2]
// Exports: default

// Module 14589 (PasskeyUpsellFullModal)
import noopAll from "noop" /* 19 */;
import Modal from "Modal" /* 11860 */;
import getScreens from "getScreens" /* 14585 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14582 */;
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
