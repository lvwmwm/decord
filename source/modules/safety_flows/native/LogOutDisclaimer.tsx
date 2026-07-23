// Module ID: 16564
// Function ID: 129216
// Name: LogOutDisclaimer
// Dependencies: [33, 13088, 4126, 1212, 2460, 5590, 2]
// Exports: default

// Module 16564 (LogOutDisclaimer)
import { jsx } from "jsxProd";

const result = require("Text").fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let obj = {};
  obj = { variant: "text-xs/medium" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {
    handleLogOut() {
      outer1_1(outer1_2[5]).logout("safety_flows_enter_email_screen");
    }
  };
  obj.children = intl.format(importDefault(2460)["0DHxym"], obj);
  obj.children = jsx(require(4126) /* Text */.Text, {
    handleLogOut() {
      outer1_1(outer1_2[5]).logout("safety_flows_enter_email_screen");
    }
  });
  return jsx(require(13088) /* ModalDisclaimer */.ModalDisclaimer, {
    handleLogOut() {
      outer1_1(outer1_2[5]).logout("safety_flows_enter_email_screen");
    }
  });
};
