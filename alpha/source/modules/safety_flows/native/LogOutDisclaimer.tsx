// Module ID: 20715
// Function ID: 20716
// Name: LogOutDisclaimer
// Dependencies: [21, 16376, 5866, 1113, 2981, 6781, 2]
// Exports: default

// Module 20715 (LogOutDisclaimer)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef2981 from "module_2981" /* 2981 */;
import Text_Text from "Text/Text" /* 5866 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6781 */;
import ModalDisclaimer2 from "ModalDisclaimer" /* 16376 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let intl;
  const ModalDisclaimer = ModalDisclaimer2.ModalDisclaimer;
  ({ variant: "body-xs/medium", children: intl.format(_modDef2981["0DHxym"], obj3) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <ModalDisclaimer>{null}</ModalDisclaimer>;
};
