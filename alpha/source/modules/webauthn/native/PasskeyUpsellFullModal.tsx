// Module ID: 14435
// Function ID: 14436
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14428, 21, 14431, 10976, 2]
// Exports: default

// Module 14435 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 10976 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14431 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14428).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
