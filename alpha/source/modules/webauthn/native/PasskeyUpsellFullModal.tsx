// Module ID: 14222
// Function ID: 14223
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14215, 21, 14218, 10769, 2]
// Exports: default

// Module 14222 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 10769 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14218 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14215).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
