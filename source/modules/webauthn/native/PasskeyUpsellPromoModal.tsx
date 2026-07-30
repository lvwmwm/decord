// Module ID: 13757
// Function ID: 13758
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 13747, 21, 13750, 1236, 11118, 2]
// Exports: default

// Module 13757 (PasskeyUpsellPromoModal)
import "noop";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = require(13750) /* getScreens */;
  obj = { name: WebAuthnScreens.NAME, params: null };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1236) /* getSystemLocale */.t["8H5RmH"]);
  obj[1] = obj;
  const initialRouteStack = [obj];
  return jsx(require(11118) /* Modal */.Modal, { screens, initialRouteStack });
};
