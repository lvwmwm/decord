// Module ID: 16851
// Function ID: 16852
// Name: LogOutDisclaimer
// Dependencies: [21, 13343, 4281, 1236, 2546, 5748, 2]
// Exports: default

// Module 16851 (LogOutDisclaimer)
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
  obj[1] = intl.format(importDefault(2546)["0DHxym"], obj);
  obj[0] = jsx(require(4281) /* Text */.Text, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
  return jsx(require(13343) /* ModalDisclaimer */.ModalDisclaimer, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
};
