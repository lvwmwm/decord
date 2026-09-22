// Module ID: 14947
// Function ID: 14948
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14940, 21, 14943, 11469, 2]
// Exports: default

// Module 14947 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 11469 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14943 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14940).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
