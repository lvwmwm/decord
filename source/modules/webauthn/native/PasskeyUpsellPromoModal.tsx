// Module ID: 14560
// Function ID: 14561
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 14550, 21, 14553, 1233, 11729, 2]
// Exports: default

// Module 14560 (PasskeyUpsellPromoModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Modal from "Modal" /* 11729 */;
import getScreens from "getScreens" /* 14553 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14550 */;
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
