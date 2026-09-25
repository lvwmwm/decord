// Module ID: 14198
// Function ID: 14199
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14191, 21, 14194, 10756, 2]
// Exports: default

// Module 14198 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 10756 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14194 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14191).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
