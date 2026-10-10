// Module ID: 17220
// Function ID: 17221
// Name: ConjurePublishNoticeLine
// Dependencies: [32, 19, 21, 558, 576, 17110, 17221, 17222, 1126, 17223, 5088, 3849, 17224, 2]

// Module 17220 (ConjurePublishNoticeLine)
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import useConjurePublishAction from "useConjurePublishAction" /* 17110 */;
import conjureReminderSlot from "conjureReminderSlot" /* 17224 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useConjurePublishActionDefault = useConjurePublishAction;
let dependencyMap, importDefault;

let hasOwnProperty;
let metroRequire;
let tmp4;
const _modDef3849 = tmp4(3849);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishNoticeLine(arg0) {
  let notice;
  let projectId;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  ({ projectId, notice } = arg0);
  if (cResult[0] === notice) {
    let tmp2;
    if (cResult[1] === projectId) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  if ("outdated" === notice) {
    const obj2 = { projectId };
    tmp5 = hasOwnProperty(closure_8, obj2);
  } else {
    const obj3 = { projectId, notice };
    tmp5 = hasOwnProperty(closure_7, obj3);
  }
  cResult[0] = notice;
  cResult[1] = projectId;
  cResult[2] = tmp5;
  tmp2 = tmp5;
}) : (function ConjurePublishNoticeLine(arg0) {
  let notice;
  let projectId;
  let tmp3;
  ({ projectId, notice } = arg0);
  if ("outdated" === notice) {
    const obj2 = { projectId };
    tmp3 = hasOwnProperty(closure_8, obj2);
  } else {
    const obj = { projectId, notice };
    tmp3 = hasOwnProperty(closure_7, obj);
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function PublishedNoticeLine(projectId) {
  let str;
  const tmp = projectId;
  let obj = projectId(576);
  const cResult = obj.c(10);
  projectId = projectId.projectId;
  const notice = projectId.notice;
  const context = react.useContext(projectId(17110).ConjurePublishActionContext);
  const tmp5 = context(17221)(projectId);
  const tmp6 = context(17222)(projectId);
  if (cResult[0] === context) {
    let tmp7;
    if (cResult[1] === projectId) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === tmp7) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === notice) {
          let tmp8;
          let tmp12;
          if (cResult[6] === tmp6) {
            tmp8 = cResult[7];
          }
          if (cResult[8] !== tmp8) {
            const obj2 = { variant: "text-md/normal", color: "text-default", children: tmp8 };
            const tmp14 = closure_5(tmp(5088).Text, obj2);
            cResult[8] = tmp8;
            cResult[9] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
    }
    const intl = tmp(1126).intl;
    const format = intl.format;
    const obj3 = { name: tmp5, server: str, onOpen: tmp7 };
    str = tmp6;
    const tmpResult = tmp(17223);
    const publishNoticeMessageResult = tmpResult.publishNoticeMessage(notice, tmp6);
    if (tmp6 == null) {
      str = "";
    }
    const formatResult = format(publishNoticeMessageResult, obj3);
    cResult[3] = tmp7;
    cResult[4] = tmp5;
    cResult[5] = notice;
    cResult[6] = tmp6;
    cResult[7] = formatResult;
    tmp8 = formatResult;
  }
  const fn = function o() {
    if (null != context) {
      const obj = useConjurePublishAction;
      const result = obj.openConjurePublishedApp(projectId, tmp);
    }
  };
  cResult[0] = context;
  cResult[1] = projectId;
  cResult[2] = fn;
  tmp7 = fn;
}) : (function PublishedNoticeLine(projectId) {
  let str;
  projectId = projectId.projectId;
  const notice = projectId.notice;
  const context = react.useContext(projectId(17110).ConjurePublishActionContext);
  const tmp2 = context(17221)(projectId);
  const tmp3 = context(17222)(projectId);
  const items = [context, projectId];
  const callback = react.useCallback(() => {
    if (null != context) {
      const obj = useConjurePublishAction;
      const result = obj.openConjurePublishedApp(projectId, tmp);
    }
  }, items);
  const Text = projectId(5088).Text;
  const intl = projectId(1126).intl;
  const format = intl.format;
  let obj = projectId(17223);
  const obj2 = { name: tmp2, server: str, onOpen: callback };
  str = tmp3;
  const publishNoticeMessageResult = obj.publishNoticeMessage(notice, tmp3);
  const tmp5 = closure_5;
  if (tmp3 == null) {
    str = "";
  }
  const obj3 = { variant: "text-md/normal", color: "text-default", children: format(publishNoticeMessageResult, obj2) };
  return tmp5(Text, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function OutdatedNoticeLine(projectId) {
  let closure_1;
  let closure_2;
  let tmp10;
  let obj = projectId(576);
  const cResult = obj.c(6);
  projectId = projectId.projectId;
  const tmp5 = useConjurePublishActionDefault(projectId);
  importDefault = tmp5;
  const tmp6 = _slicedToArray(react.useState(false), 2);
  dependencyMap = tmp6[1];
  let tmp7 = null;
  if (null != tmp5) {
    if (tmp6[0]) {
      let first;
      if (!tmp5.publishing) {
        tmp7 = tmp10;
      }
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp17 = closure_5(closure_9, {});
        cResult[0] = tmp17;
        first = tmp17;
      } else {
        first = cResult[0];
      }
      tmp10 = first;
    }
    if (cResult[1] === projectId) {
      let tmp8;
      if (cResult[2] === tmp5) {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp8) {
        const obj2 = { variant: "text-xs/normal", color: "text-muted", children: tmp8 };
        const tmp12 = closure_5(projectId(5088).Text, obj2);
        cResult[4] = tmp8;
        cResult[5] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[5];
      }
    }
    const intl = tmp(1126).intl;
    const obj3 = {
      action: tmp5.label,
      onUpdate() {
          closure_2(true);
          const obj = conjureReminderSlot;
          const result = obj.markConjureReminderActivity(projectId);
          closure_1.run("outdated_notice");
        }
    };
    const formatResult = intl.format(_modDef3849.X8tdbS, obj3);
    cResult[1] = projectId;
    cResult[2] = tmp5;
    cResult[3] = formatResult;
    tmp8 = formatResult;
  }
  return tmp7;
}) : (function OutdatedNoticeLine(projectId) {
  let closure_1;
  let closure_2;
  let intl;
  let obj2;
  projectId = projectId.projectId;
  importDefault = undefined;
  const tmp3 = useConjurePublishActionDefault(projectId);
  importDefault = tmp3;
  const tmp4 = _slicedToArray(react.useState(false), 2);
  dependencyMap = tmp4[1];
  let tmp5 = null;
  if (null != tmp3) {
    let tmp8;
    if (!tmp4[0]) {
      let obj = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef3849.X8tdbS, obj2) };
      const Text = projectId(5088).Text;
      intl = projectId(1126).intl;
      obj2 = {
        action: tmp3.label,
        onUpdate() {
              closure_2(true);
              const obj = conjureReminderSlot;
              const result = obj.markConjureReminderActivity(projectId);
              closure_1.run("outdated_notice");
            }
      };
      tmp8 = closure_5(Text, obj);
    } else {
      tmp8 = closure_5(closure_9, {});
    }
    tmp5 = tmp8;
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function UpdatingNoticeLine() {
  let first;
  let items;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef3849.lexcBN);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  const tmpResult = conjureReminderSlot;
  const conjureUpdatingDots = tmpResult.useConjureUpdatingDots();
  if (cResult[1] !== conjureUpdatingDots) {
    const obj2 = { variant: "text-xs/normal", color: "text-muted", accessibilityLabel: first, children: items };
    items = [first, conjureUpdatingDots];
    const tmp10 = metroRequire(Text_Text.Text, obj2);
    cResult[1] = conjureUpdatingDots;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function UpdatingNoticeLine() {
  let items;
  const intl = intl2.intl;
  const stringResult = intl.string(_modDef3849.lexcBN);
  const obj = conjureReminderSlot;
  const conjureUpdatingDots = obj.useConjureUpdatingDots();
  const obj2 = { variant: "text-xs/normal", color: "text-muted", accessibilityLabel: stringResult, children: items };
  items = [stringResult, conjureUpdatingDots];
  return metroRequire(Text_Text.Text, obj2);
});
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishNoticeLine.tsx");

export default tmp3;
