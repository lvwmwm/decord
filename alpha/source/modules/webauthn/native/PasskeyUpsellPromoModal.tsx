// Module ID: 15030
// Function ID: 15031
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 15020, 21, 15023, 1115, 11545, 2]
// Exports: default

// Module 15030 (PasskeyUpsellPromoModal)
import util from "util" /* 1115 */;
import Modal from "Modal" /* 11545 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 15023 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(15020).WebAuthnScreens;
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
