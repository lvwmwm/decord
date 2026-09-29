// Module ID: 14398
// Function ID: 14399
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14391, 21, 14394, 10938, 2]
// Exports: default

// Module 14398 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 10938 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14394 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14391).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
