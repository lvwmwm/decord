// Module ID: 12165
// Function ID: 12166
// Name: ScheduledMessageDraftCoachmark
// Dependencies: [109, 19, 2060, 21, 558, 576, 1126, 12166, 9375, 2]

// Module 12165 (ScheduledMessageDraftCoachmark)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const useCoachmark = tmp(9375);
let closure_2 = ["buttonRef"];
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScheduledMessageDraftCoachmark(arg0) {
  let buttonRef;
  let isVisible;
  let onDismiss;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = onDismiss(576);
  const cResult = obj.c(11);
  ({ buttonRef, isVisible, onDismiss } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(onDismiss(1126).t.ZT58S4);
    const intl2 = tmp(1126).intl;
    const formatResult = intl2.format(onDismiss(1126).t.Juk17F, {});
    cResult[0] = stringResult;
    cResult[1] = formatResult;
    tmp4 = stringResult;
    tmp5 = formatResult;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] !== onDismiss) {
    const fn = function c() {
      return onDismiss(ContentDismissActionType.USER_DISMISS);
    };
    cResult[2] = onDismiss;
    cResult[3] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f() {
      return jsx(onDismiss(dependencyMap[7]).ScheduleMessageSpotIllustration, { width: 120, height: 80, accessible: false });
    };
    cResult[4] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== tmp8) {
    const obj2 = { title: tmp4, description: tmp5, position: "top", offsetY: 4, visible: true, onDismiss: tmp8, renderImgComponent: tmp9 };
    cResult[5] = tmp8;
    cResult[6] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] === buttonRef) {
    if (cResult[8] === isVisible) {
      let tmp11;
      if (cResult[9] === tmp10) {
        tmp11 = cResult[10];
      }
      return tmp11;
    }
  }
  let tmp12 = null;
  if (isVisible) {
    const merged = Object.assign(tmp10);
    tmp12 = <closure_7 buttonRef={buttonRef} />;
  }
  cResult[7] = buttonRef;
  cResult[8] = isVisible;
  cResult[9] = tmp10;
  cResult[10] = tmp12;
  tmp11 = tmp12;
}) : (function ScheduledMessageDraftCoachmark(onDismiss) {
  let buttonRef;
  let isVisible;
  onDismiss = onDismiss.onDismiss;
  const items = [onDismiss];
  ({ buttonRef, isVisible } = onDismiss);
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(intl3.t.ZT58S4),
      description: intl2.format(intl3.t.Juk17F, {}),
      position: "top",
      offsetY: 4,
      visible: true,
      onDismiss() {
        return onDismiss(constants.USER_DISMISS);
      },
      renderImgComponent() {
        return closure_1_6(onDismiss(closure_1_1[7]).ScheduleMessageSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items);
  let tmp2 = null;
  if (isVisible) {
    const merged = Object.assign(memo);
    tmp2 = <closure_7 buttonRef={buttonRef} />;
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function AttachedCoachmark(buttonRef) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] !== buttonRef) {
    buttonRef = buttonRef.buttonRef;
    const tmp8 = _objectWithoutProperties(buttonRef, closure_2);
    cResult[0] = buttonRef;
    cResult[1] = buttonRef;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = buttonRef;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = useCoachmark;
  const coachmark = tmpResult.useCoachmark(tmp4, tmp5);
  return null;
}) : (function AttachedCoachmark(buttonRef) {
  buttonRef = buttonRef.buttonRef;
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const obj = useCoachmark;
  const coachmark = obj.useCoachmark(buttonRef, merged);
  return null;
});
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx");

export default tmp2;
