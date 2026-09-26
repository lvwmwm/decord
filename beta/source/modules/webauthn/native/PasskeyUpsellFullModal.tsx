// Module ID: 14971
// Function ID: 14972
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14964, 21, 14967, 11494, 2]
// Exports: default

// Module 14971 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 11494 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14967 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14964).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
