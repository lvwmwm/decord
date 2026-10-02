// Module ID: 16407
// Function ID: 16408
// Name: VibegrationsConjureTipCoachmark
// Dependencies: [19, 558, 576, 1127, 3718, 9656, 2]

// Module 16407 (VibegrationsConjureTipCoachmark)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1127 */;
import _modDef3718 from "module_3718" /* 3718 */;
import useCoachmark from "useCoachmark" /* 9656 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((targetRef) => {
  let obj2;
  let onDismiss;
  let tmp11;
  let tmp5;
  let visible;
  const obj = react2;
  const cResult = obj.c(6);
  ({ visible, onDismiss } = targetRef);
  targetRef = targetRef.targetRef;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp2(1127).intl;
    const stringResult = intl.string(_modDef3718.n8wtkv);
    const intl2 = tmp2(1127).intl;
    const items = [intl2.string(_modDef3718.cK0dk1)];
    const items1 = [_modDef3718.ZK2O25, _modDef3718["122Ir6"], _modDef3718["9KCASa"]];
    HermesBuiltin.arraySpread(items, items1.map((item) => {
      const intl = intl4.intl;
      return "\u2022 " + intl.string(item);
    }), 1);
    cResult[0] = stringResult;
    cResult[1] = items;
    obj2 = items;
    tmp5 = stringResult;
  } else {
    [tmp5, obj2] = cResult;
  }
  const joined = obj2.join("\n");
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp2(1127).intl;
    const stringResult1 = intl3.string(_modDef3718.sZCqrE);
    cResult[2] = stringResult1;
    tmp11 = stringResult1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === onDismiss) {
    let tmp14;
    if (cResult[4] === visible) {
      tmp14 = cResult[5];
    }
    const tmp2Result = useCoachmark;
    const coachmark = tmp2Result.useCoachmark(targetRef, tmp14);
    return null;
  }
  const obj3 = { visible, position: "top", title: tmp5, description: joined, buttonLabel: tmp11, buttonVariant: "secondary", onButtonPress: onDismiss, onDismiss };
  cResult[3] = onDismiss;
  cResult[4] = visible;
  cResult[5] = obj3;
  tmp14 = obj3;
}) : ((visible) => {
  visible = visible.visible;
  const onDismiss = visible.onDismiss;
  let items = [onDismiss, visible];
  const targetRef = visible.targetRef;
  const memo = react.useMemo(() => {
    let intl;
    let intl3;
    let items;
    const obj = { visible, position: "top", title: intl.string(_modDef3718.n8wtkv), description: items.join("\n"), buttonLabel: intl3.string(_modDef3718.sZCqrE), buttonVariant: "secondary", onButtonPress: onDismiss, onDismiss };
    intl = intl4.intl;
    const intl2 = intl4.intl;
    items = [intl2.string(_modDef3718.cK0dk1)];
    const items1 = [_modDef3718.ZK2O25, _modDef3718["122Ir6"], _modDef3718["9KCASa"]];
    HermesBuiltin.arraySpread(items, items1.map((item) => {
      const intl = visible(closure_1_2[3]).intl;
      return "\u2022 " + intl.string(item);
    }), 1);
    intl3 = intl4.intl;
    return obj;
  }, items);
  let obj = visible(9656);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConjureTipCoachmark.tsx");

export default tmp2;
