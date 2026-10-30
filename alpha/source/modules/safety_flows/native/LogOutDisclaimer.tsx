// Module ID: 20021
// Function ID: 20022
// Name: LogOutDisclaimer
// Dependencies: [21, 15829, 5619, 1114, 2835, 6734, 2]
// Exports: default

// Module 20021 (LogOutDisclaimer)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import _modDef2835 from "module_2835" /* 2835 */;
import Text_Text from "Text/Text" /* 5619 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6734 */;
import ModalDisclaimer2 from "ModalDisclaimer" /* 15829 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let intl;
  const ModalDisclaimer = ModalDisclaimer2.ModalDisclaimer;
  ({ variant: "text-xs/medium", children: intl.format(_modDef2835["0DHxym"], obj3) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <ModalDisclaimer>{null}</ModalDisclaimer>;
};
