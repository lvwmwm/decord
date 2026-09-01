// Module ID: 14321
// Function ID: 14322
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 14311, 21, 14314, 1236, 11501, 2]
// Exports: default

// Module 14321 (PasskeyUpsellPromoModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Modal from "Modal" /* 11501 */;
import getScreens from "getScreens" /* 14314 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14311 */;
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
