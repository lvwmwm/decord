// Module ID: 13741
// Function ID: 105351
// Name: PasskeyUpsellPromoModal
// Dependencies: [31, 13731, 33, 13734, 1212, 11098, 2]
// Exports: default

// Module 13741 (PasskeyUpsellPromoModal)
import "result";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = require(13734) /* getScreens */;
  obj = { name: WebAuthnScreens.NAME };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["name"] = intl.string(require(1212) /* getSystemLocale */.t["8H5RmH"]);
  obj.params = obj;
  const initialRouteStack = [obj];
  return jsx(require(11098) /* Modal */.Modal, { screens, initialRouteStack });
};
