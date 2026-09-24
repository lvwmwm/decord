// Module ID: 15036
// Function ID: 15037
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 15029, 21, 15032, 11551, 2]
// Exports: default

// Module 15036 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 11551 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 15032 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(15029).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
