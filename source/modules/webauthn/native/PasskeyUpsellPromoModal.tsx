// Module ID: 13634
// Function ID: 104722
// Name: PasskeyUpsellPromoModal
// Dependencies: [31, 13624, 33, 13627, 1212, 11073, 2]
// Exports: default

// Module 13634 (PasskeyUpsellPromoModal)
import "result";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = require(13627) /* getScreens */;
  obj = { name: WebAuthnScreens.NAME };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["name"] = intl.string(require(1212) /* getSystemLocale */.t["8H5RmH"]);
  obj.params = obj;
  const initialRouteStack = [obj];
  return jsx(require(11073) /* Modal */.Modal, { screens, initialRouteStack });
};
