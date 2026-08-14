// Module ID: 8545
// Function ID: 8546
// Name: OneTimeLoginForgotPasswordConfirmAlertModal
// Dependencies: [19, 21, 4710, 1236, 4710, 2]
// Exports: default

// Module 8545 (OneTimeLoginForgotPasswordConfirmAlertModal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/auth/native/components/OneTimeLoginForgotPasswordConfirmAlertModal.tsx");

export default function OneTimeLoginForgotPasswordConfirmAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["6Ecyts"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.iAcrqV);
  obj = { children: null };
  obj = { text: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.BddRzS);
  obj[0] = jsx(require(4710) /* getAlertModalItemKey */.AlertActionButton, { text: null }, "okay");
  obj[2] = jsx(require(4710) /* getAlertModalItemKey */.AlertActions, { text: null });
  return jsx(require(4710) /* getAlertModalItemKey */.AlertModal, { text: null });
};
