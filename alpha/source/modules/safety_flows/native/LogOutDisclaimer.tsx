// Module ID: 20411
// Function ID: 20412
// Name: LogOutDisclaimer
// Dependencies: [21, 16127, 5781, 1113, 2960, 6820, 2]
// Exports: default

// Module 20411 (LogOutDisclaimer)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef2960 from "module_2960" /* 2960 */;
import Text_Text from "Text/Text" /* 5781 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6820 */;
import ModalDisclaimer2 from "ModalDisclaimer" /* 16127 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let intl;
  const ModalDisclaimer = ModalDisclaimer2.ModalDisclaimer;
  ({ variant: "body-xs/medium", children: intl.format(_modDef2960["0DHxym"], obj3) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <ModalDisclaimer>{null}</ModalDisclaimer>;
};
