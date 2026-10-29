// Module ID: 19958
// Function ID: 19959
// Name: LogOutDisclaimer
// Dependencies: [21, 558, 576, 15791, 5271, 1125, 2834, 6727, 2]

// Module 19958 (LogOutDisclaimer)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import _modDef2834 from "module_2834" /* 2834 */;
import Text_Text from "Text/Text" /* 5271 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6727 */;
import ModalDisclaimer2 from "ModalDisclaimer" /* 15791 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function LogOutDisclaimer() {
  let first;
  let intl;
  let obj4;
  let obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const ModalDisclaimer = tmp(15791).ModalDisclaimer;
    ({ variant: "text-xs/medium", children: intl.format(_modDef2834["0DHxym"], obj4) });
    const Text = tmp(5271).Text;
    intl = tmp(1125).intl;
    const tmp7 = <ModalDisclaimer>{null}</ModalDisclaimer>;
    obj4 = {
      handleLogOut() {
          const obj = AuthenticationActionCreatorsDefault;
          obj.logout("safety_flows_enter_email_screen");
        }
    };
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function LogOutDisclaimer() {
  let intl;
  const ModalDisclaimer = ModalDisclaimer2.ModalDisclaimer;
  ({ variant: "text-xs/medium", children: intl.format(_modDef2834["0DHxym"], obj3) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <ModalDisclaimer>{null}</ModalDisclaimer>;
});
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default tmp2;
