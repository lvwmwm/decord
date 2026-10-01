// Module ID: 14222
// Function ID: 14223
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14215, 21, 14218, 10769, 2]
// Exports: default

// Module 14222 (PasskeyUpsellFullModal)
import Fragment from "Fragment" /* 21 */;
import Modal from "Modal" /* 10769 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14215 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14218 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const obj = WebAuthnScreens2;
  const screens = obj.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
