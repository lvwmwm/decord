// Module ID: 20019
// Function ID: 20020
// Name: LogOutDisclaimer
// Dependencies: [21, 15163, 5385, 1112, 3021, 6306, 2]
// Exports: default

// Module 20019 (LogOutDisclaimer)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3021 from "module_3021" /* 3021 */;
import Text_Text from "Text/Text" /* 5385 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6306 */;
import ModalDisclaimer2 from "ModalDisclaimer" /* 15163 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let intl;
  const ModalDisclaimer = ModalDisclaimer2.ModalDisclaimer;
  ({ variant: "body-xs/medium", children: intl.format(_modDef3021["0DHxym"], obj3) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <ModalDisclaimer>{null}</ModalDisclaimer>;
};
