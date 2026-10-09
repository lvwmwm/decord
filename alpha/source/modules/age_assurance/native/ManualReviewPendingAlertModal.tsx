// Module ID: 7697
// Function ID: 7698
// Name: ManualReviewPendingAlertModal
// Dependencies: [19, 21, 558, 576, 1126, 3181, 5304, 5304, 2]

// Module 7697 (ManualReviewPendingAlertModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import _modDef3181 from "module_3181" /* 3181 */;
import AlertModal2 from "AlertModal" /* 5304 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManualReviewPendingAlertModal() {
  let intl3;
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef3181.CNm4w6);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(_modDef3181["14Fje3"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const AlertModal = tmp(5304).AlertModal;
    const AlertActions = tmp(5304).AlertActions;
    ({ text: intl3.string(intl4.t["NX+WJN"]) });
    const AlertActionButton = tmp(5304).AlertActionButton;
    intl3 = tmp(1126).intl;
    const tmp11 = <AlertModal title={tmp4} content={tmp5} actions={null} />;
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (function ManualReviewPendingAlertModal() {
  let intl3;
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const AlertActions = AlertModal2.AlertActions;
  ({ text: intl3.string(intl4.t["NX+WJN"]) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal title={intl.string(_modDef3181.CNm4w6)} content={intl2.string(_modDef3181["14Fje3"])} actions={null} />;
});
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewPendingAlertModal.tsx");

export default tmp3;
