// Module ID: 20915
// Function ID: 20916
// Name: LogOutDisclaimer
// Dependencies: [21, 16530, 5923, 1113, 2999, 6829, 2]
// Exports: default

// Module 20915 (LogOutDisclaimer)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef2999 from "module_2999" /* 2999 */;
import Text_Text from "Text/Text" /* 5923 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6829 */;
import ModalDisclaimer2 from "ModalDisclaimer" /* 16530 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let intl;
  const ModalDisclaimer = ModalDisclaimer2.ModalDisclaimer;
  ({ variant: "body-xs/medium", children: intl.format(_modDef2999["0DHxym"], obj3) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <ModalDisclaimer>{null}</ModalDisclaimer>;
};
