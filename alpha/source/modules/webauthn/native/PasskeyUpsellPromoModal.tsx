// Module ID: 15039
// Function ID: 15040
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 15029, 21, 15032, 1115, 11551, 2]
// Exports: default

// Module 15039 (PasskeyUpsellPromoModal)
import util from "util" /* 1115 */;
import Modal from "Modal" /* 11551 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 15032 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(15029).WebAuthnScreens;
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
