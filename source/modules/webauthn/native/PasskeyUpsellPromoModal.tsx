// Module ID: 13697
// Function ID: 105178
// Name: PasskeyUpsellPromoModal
// Dependencies: [31, 13687, 33, 13690, 1212, 11060, 2]
// Exports: default

// Module 13697 (PasskeyUpsellPromoModal)
import "result";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = require(13690) /* getScreens */;
  obj = { name: WebAuthnScreens.NAME };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["name"] = intl.string(require(1212) /* getSystemLocale */.t["8H5RmH"]);
  obj.params = obj;
  const initialRouteStack = [obj];
  return jsx(require(11060) /* Modal */.Modal, { screens, initialRouteStack });
};
