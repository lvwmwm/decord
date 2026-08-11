// Module ID: 13986
// Function ID: 13987
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 13976, 21, 13979, 1236, 11341, 2]
// Exports: default

// Module 13986 (PasskeyUpsellPromoModal)
import "noop";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = require(13979) /* getScreens */;
  obj = { name: WebAuthnScreens.NAME, params: null };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1236) /* getSystemLocale */.t["8H5RmH"]);
  obj[1] = obj;
  const initialRouteStack = [obj];
  return jsx(require(11341) /* Modal */.Modal, { screens, initialRouteStack });
};
