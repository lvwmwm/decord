// Module ID: 17714
// Function ID: 17715
// Name: LogOutDisclaimer
// Dependencies: [21, 14058, 4474, 1233, 2662, 6061, 2]
// Exports: default

// Module 17714 (LogOutDisclaimer)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2662 */;
import Text from "Text" /* 4474 */;
import ModalDisclaimer from "ModalDisclaimer" /* 14058 */;

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
