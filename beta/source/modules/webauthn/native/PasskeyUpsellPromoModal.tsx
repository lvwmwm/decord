// Module ID: 14225
// Function ID: 14226
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 14215, 21, 14218, 1115, 10769, 2]
// Exports: default

// Module 14225 (PasskeyUpsellPromoModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import Modal from "Modal" /* 10769 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14215 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14218 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let intl;
  let obj3;
  const obj2 = { name: WebAuthnScreens.NAME, params: obj3 };
  obj3 = { name: intl.string(intl2.t["8H5RmH"]) };
  const obj = WebAuthnScreens2;
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  intl = intl2.intl;
  const initialRouteStack = [obj2];
  return jsx(Modal.Modal, { screens, initialRouteStack });
};
