// Module ID: 15027
// Function ID: 15028
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 15020, 21, 15023, 11545, 2]
// Exports: default

// Module 15027 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 11545 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 15023 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(15020).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
