// Module ID: 7522
// Function ID: 7523
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: [19, 21, 558, 576, 1126, 3117, 5303, 5303, 2]

// Module 7522 (AgeVerificationQuestUnsupportedAlertModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import _modDef3117 from "module_3117" /* 3117 */;
import AlertModal2 from "AlertModal" /* 5303 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AgeVerificationQuestUnsupportedAlertModal() {
  let intl3;
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef3117.gUqXQN);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(_modDef3117.yBHwMy);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const AlertModal = tmp(5303).AlertModal;
    const AlertActions = tmp(5303).AlertActions;
    ({ text: intl3.string(intl4.t["NX+WJN"]) });
    const AlertActionButton = tmp(5303).AlertActionButton;
    intl3 = tmp(1126).intl;
    const tmp11 = <AlertModal title={tmp4} content={tmp5} actions={null} />;
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (function AgeVerificationQuestUnsupportedAlertModal() {
  let intl3;
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const AlertActions = AlertModal2.AlertActions;
  ({ text: intl3.string(intl4.t["NX+WJN"]) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal title={intl.string(_modDef3117.gUqXQN)} content={intl2.string(_modDef3117.yBHwMy)} actions={null} />;
});
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default tmp3;
