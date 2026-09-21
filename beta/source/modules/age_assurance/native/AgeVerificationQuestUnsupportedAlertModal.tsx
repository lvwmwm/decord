// Module ID: 8703
// Function ID: 8704
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: [19, 21, 558, 568, 1119, 3038, 5116, 5116, 2]

// Module 8703 (AgeVerificationQuestUnsupportedAlertModal)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import _modDef3038 from "module_3038" /* 3038 */;
import AlertModal from "AlertModal" /* 5116 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(_modDef3038.gUqXQN);
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(_modDef3038.yBHwMy);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: tmp4, content: tmp5, actions: null };
    const obj3 = { children: null };
    const obj4 = { text: null };
    const intl3 = tmp(1119).intl;
    obj4.text = intl3.string(tmp(1119).t["NX+WJN"]);
    obj3.children = jsx(tmp(5116).AlertActionButton, { text: null }, "got-it");
    obj2.actions = jsx(tmp(5116).AlertActions, { children: null });
    const tmp11 = jsx(tmp(5116).AlertModal, { title: tmp4, content: tmp5, actions: null });
    cResult[2] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (() => {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3038.gUqXQN);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef3038.yBHwMy);
  const obj2 = { children: null };
  const obj3 = { text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  obj2.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
});
