// Module ID: 12013
// Function ID: 12014
// Name: InvitesDisabledAlertModal
// Dependencies: [19, 21, 558, 576, 1126, 5303, 5303, 2]

// Module 12013 (InvitesDisabledAlertModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import AlertModal2 from "AlertModal" /* 5303 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function InvitesDisabledAlertModal() {
  let intl3;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl4.t.LpUfEt);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl4.t.QRXqzO);
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
    ({ text: intl3.string(intl4.t.BddRzS) });
    const AlertActionButton = tmp(5303).AlertActionButton;
    intl3 = tmp(1126).intl;
    const tmp10 = <AlertModal title={tmp4} content={tmp5} actions={null} />;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function InvitesDisabledAlertModal() {
  let intl3;
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const AlertActions = AlertModal2.AlertActions;
  ({ text: intl3.string(intl4.t.BddRzS) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal title={intl.string(intl4.t.LpUfEt)} content={intl2.string(intl4.t.QRXqzO)} actions={null} />;
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/InvitesDisabledAlertModal.tsx");

export default tmp3;
