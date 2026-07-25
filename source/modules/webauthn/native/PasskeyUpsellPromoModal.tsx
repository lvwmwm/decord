// Module ID: 13696
// Function ID: 105173
// Name: PasskeyUpsellPromoModal
// Dependencies: [31, 13686, 33, 13689, 1212, 11059, 2]
// Exports: default

// Module 13696 (PasskeyUpsellPromoModal)
import "result";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = require(13689) /* getScreens */;
  obj = { name: WebAuthnScreens.NAME };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["name"] = intl.string(require(1212) /* getSystemLocale */.t["8H5RmH"]);
  obj.params = obj;
  const initialRouteStack = [obj];
  return jsx(require(11059) /* Modal */.Modal, { screens, initialRouteStack });
};
