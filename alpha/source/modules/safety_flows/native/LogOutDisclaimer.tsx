// Module ID: 20082
// Function ID: 20083
// Name: LogOutDisclaimer
// Dependencies: [21, 15869, 5624, 1113, 2836, 6740, 2]
// Exports: default

// Module 20082 (LogOutDisclaimer)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef2836 from "module_2836" /* 2836 */;
import Text_Text from "Text/Text" /* 5624 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6740 */;
import ModalDisclaimer2 from "ModalDisclaimer" /* 15869 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let intl;
  const ModalDisclaimer = ModalDisclaimer2.ModalDisclaimer;
  ({ variant: "text-xs/medium", children: intl.format(_modDef2836["0DHxym"], obj3) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <ModalDisclaimer>{null}</ModalDisclaimer>;
};
