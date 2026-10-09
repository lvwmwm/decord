// Module ID: 16769
// Function ID: 16770
// Name: useForLaterCoachmark
// Dependencies: [32, 19, 2061, 21, 2049, 558, 576, 7093, 1126, 12629, 9413, 2]

// Module 16769 (useForLaterCoachmark)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_6 = dismissible_content.DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useForLaterCoachmark(arg0) {
  let closure_0;
  let obj3;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp4;
  let tmp5;
  const obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_6];
    const obj2 = { bypassAutoDismiss: true };
    cResult[0] = items;
    cResult[1] = obj2;
    tmp4 = items;
    tmp5 = obj2;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = require("useSelectedDismissibleContent");
  const tmp7 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp4, tmp5), 2);
  _require = tmp9;
  const first = tmp7[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t.qPbFK2);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(require("intl").t.b2yxYL);
    cResult[2] = stringResult;
    cResult[3] = stringResult1;
    tmp11 = stringResult1;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp7[1]) {
    const fn = function v() {
      closure_0(ContentDismissActionType.USER_DISMISS);
    };
    cResult[4] = tmp7[1];
    cResult[5] = fn;
    tmp15 = fn;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        return jsx(closure_0(dependencyMap[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
    cResult[6] = D;
    tmp16 = D;
  } else {
    class D {
      constructor() {
        return jsx(closure_0(dependencyMap[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
  }
  if (cResult[7] === first === closure_6) {
    class D {
      constructor() {
        return jsx(closure_0(dependencyMap[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
    const tmpResult2 = require("useCoachmark");
    const coachmark = tmpResult2.useCoachmark(arg0, obj3);
    return tmp7[1];
  }
  obj3 = { title: tmp10, description: tmp11, position: "bottom", visible: first === closure_6, onDismiss: tmp15, renderImgComponent: tmp16 };
  cResult[7] = first === closure_6;
  cResult[8] = tmp15;
  cResult[9] = obj3;
}) : (function useForLaterCoachmark(arg0) {
  let closure_1;
  let first;
  let obj = first(7093);
  const items = [closure_6];
  const tmp = _slicedToArray(obj.useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  first = tmp[0];
  dependencyMap = tmp3;
  const items1 = [tmp[1], first];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(intl3.t.qPbFK2),
      description: intl2.string(intl3.t.b2yxYL),
      position: "bottom",
      visible: first === closure_6,
      onDismiss() {
        closure_1_1(constants.USER_DISMISS);
      },
      renderImgComponent() {
        return closure_1_5(first(closure_1_1[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items1);
  const obj2 = first(9413);
  const coachmark = obj2.useCoachmark(arg0, memo);
  return tmp[1];
});
const result = size.fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default tmp2;
