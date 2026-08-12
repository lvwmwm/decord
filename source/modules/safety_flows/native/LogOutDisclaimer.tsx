// Module ID: 17027
// Function ID: 17028
// Name: LogOutDisclaimer
// Dependencies: [21, 13494, 4340, 1236, 2565, 5866, 2]
// Exports: default

// Module 17027 (LogOutDisclaimer)
import { jsx } from "jsxProd";

const result = require("Text").fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let obj = { children: null };
  obj = { variant: "text-xs/medium", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  };
  obj[1] = intl.format(importDefault(2565)["0DHxym"], obj);
  obj[0] = jsx(require(4340) /* Text */.Text, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
  return jsx(require(13494) /* ModalDisclaimer */.ModalDisclaimer, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
};
