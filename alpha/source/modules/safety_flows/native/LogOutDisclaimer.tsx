// Module ID: 20520
// Function ID: 20521
// Name: LogOutDisclaimer
// Dependencies: [21, 16212, 5753, 1113, 2960, 6797, 2]
// Exports: default

// Module 20520 (LogOutDisclaimer)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef2960 from "module_2960" /* 2960 */;
import Text_Text from "Text/Text" /* 5753 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6797 */;
import ModalDisclaimer2 from "ModalDisclaimer" /* 16212 */;
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
