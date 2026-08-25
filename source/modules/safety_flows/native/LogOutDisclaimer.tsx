// Module ID: 17216
// Function ID: 17217
// Name: LogOutDisclaimer
// Dependencies: [21, 13633, 4376, 1236, 2599, 5933, 2]
// Exports: default

// Module 17216 (LogOutDisclaimer)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2599 */;
import Text from "Text" /* 4376 */;
import ModalDisclaimer from "ModalDisclaimer" /* 13633 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let obj = { children: null };
  obj = { variant: "text-xs/medium", children: null };
  const intl = getSystemLocale.intl;
  obj = {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  };
  obj[1] = intl.format(messagesProxyDefault["0DHxym"], obj);
  obj[0] = jsx(Text.Text, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
  return jsx(ModalDisclaimer.ModalDisclaimer, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
};
