// Module ID: 18334
// Function ID: 18335
// Name: LogOutDisclaimer
// Dependencies: [21, 14487, 4784, 1115, 2776, 6866, 2]
// Exports: default

// Module 18334 (LogOutDisclaimer)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import _modDef2776 from "module_2776" /* 2776 */;
import Text_Text from "Text/Text" /* 4784 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6866 */;
import ModalDisclaimer from "ModalDisclaimer" /* 14487 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  const obj = { children: null };
  const obj2 = { variant: "text-xs/medium", children: null };
  const intl = util.intl;
  obj2.children = intl.format(_modDef2776["0DHxym"], {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    }
  });
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: null });
  return jsx(ModalDisclaimer.ModalDisclaimer, { children: null });
};
