// Module ID: 13848
// Function ID: 13849
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 13838, 21, 13841, 1236, 11249, 2]
// Exports: default

// Module 13848 (PasskeyUpsellPromoModal)
import "noop";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = require(13841) /* getScreens */;
  obj = { name: WebAuthnScreens.NAME, params: null };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1236) /* getSystemLocale */.t["8H5RmH"]);
  obj[1] = obj;
  const initialRouteStack = [obj];
  return jsx(require(11249) /* Modal */.Modal, { screens, initialRouteStack });
};
