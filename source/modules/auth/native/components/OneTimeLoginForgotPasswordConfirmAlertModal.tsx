// Module ID: 9199
// Function ID: 72044
// Name: OneTimeLoginForgotPasswordConfirmAlertModal
// Dependencies: [31, 33, 4475, 1212, 4475, 2]
// Exports: default

// Module 9199 (OneTimeLoginForgotPasswordConfirmAlertModal)
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
  obj.children = jsx(require(4475) /* getAlertModalItemKey */.AlertActionButton, {}, "okay");
  obj.actions = jsx(require(4475) /* getAlertModalItemKey */.AlertActions, {});
  return jsx(require(4475) /* getAlertModalItemKey */.AlertModal, {});
};
