// Module ID: 20355
// Function ID: 20356
// Name: LogOutDisclaimer
// Dependencies: [21, 16106, 5761, 1113, 2963, 6875, 2]
// Exports: default

// Module 20355 (LogOutDisclaimer)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef2963 from "module_2963" /* 2963 */;
import Text_Text from "Text/Text" /* 5761 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6875 */;
import ModalDisclaimer2 from "ModalDisclaimer" /* 16106 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let intl;
  const ModalDisclaimer = ModalDisclaimer2.ModalDisclaimer;
  ({ variant: "body-xs/medium", children: intl.format(_modDef2963["0DHxym"], obj3) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <ModalDisclaimer>{null}</ModalDisclaimer>;
};
