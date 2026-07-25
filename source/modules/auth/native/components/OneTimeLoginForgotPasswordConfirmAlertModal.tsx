// Module ID: 9127
// Function ID: 71738
// Name: OneTimeLoginForgotPasswordConfirmAlertModal
// Dependencies: [31, 33, 4476, 1212, 4476, 2]
// Exports: default

// Module 9127 (OneTimeLoginForgotPasswordConfirmAlertModal)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/auth/native/components/OneTimeLoginForgotPasswordConfirmAlertModal.tsx");

export default function OneTimeLoginForgotPasswordConfirmAlertModal() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["6Ecyts"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(require(1212) /* getSystemLocale */.t.iAcrqV);
  obj = {};
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t.BddRzS);
  obj.children = jsx(require(4476) /* getAlertModalItemKey */.AlertActionButton, {}, "okay");
  obj.actions = jsx(require(4476) /* getAlertModalItemKey */.AlertActions, {});
  return jsx(require(4476) /* getAlertModalItemKey */.AlertModal, {});
};
