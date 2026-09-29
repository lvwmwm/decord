// Module ID: 14401
// Function ID: 14402
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 14391, 21, 14394, 1115, 10938, 2]
// Exports: default

// Module 14401 (PasskeyUpsellPromoModal)
import util from "util" /* 1115 */;
import Modal from "Modal" /* 10938 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14394 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14391).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  const obj2 = { name: WebAuthnScreens.NAME, params: null };
  const obj3 = {};
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = util.intl;
  obj3.name = intl.string(util.t["8H5RmH"]);
  obj2.params = obj3;
  const initialRouteStack = [obj2];
  return jsx(Modal.Modal, { screens, initialRouteStack });
};
