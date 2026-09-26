// Module ID: 14223
// Function ID: 14224
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14216, 21, 14219, 10769, 2]
// Exports: default

// Module 14223 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 10769 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14219 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14216).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
