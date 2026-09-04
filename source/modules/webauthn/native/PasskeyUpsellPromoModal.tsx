// Module ID: 14592
// Function ID: 14593
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 14582, 21, 14585, 1233, 11860, 2]
// Exports: default

// Module 14592 (PasskeyUpsellPromoModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Modal from "Modal" /* 11860 */;
import getScreens from "getScreens" /* 14585 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14582 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = getScreens;
  obj = { name: WebAuthnScreens.NAME, params: null };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = getSystemLocale.intl;
  obj.name = intl.string(getSystemLocale.t["8H5RmH"]);
  obj[1] = obj;
  const initialRouteStack = [obj];
  return jsx(Modal.Modal, { screens, initialRouteStack });
};
