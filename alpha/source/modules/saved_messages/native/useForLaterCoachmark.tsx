// Module ID: 16644
// Function ID: 16645
// Name: useForLaterCoachmark
// Dependencies: [32, 19, 2060, 21, 2048, 558, 576, 7090, 1126, 12686, 9375, 2]

// Module 16644 (useForLaterCoachmark)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
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
  let first;
  let obj2;
  let tmp10;
  let tmp14;
  let tmp15;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_6];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmpResult = require("useSelectedDismissibleContent");
  const tmp6 = _slicedToArray(tmpResult.useSelectedDismissibleContent(first, undefined, true), 2);
  _require = tmp8;
  const first1 = tmp6[0];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t.qPbFK2);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(require("intl").t.b2yxYL);
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    tmp10 = stringResult1;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp6[1]) {
    const fn = function p() {
      closure_0(ContentDismissActionType.USER_DISMISS);
    };
    cResult[3] = tmp6[1];
    cResult[4] = fn;
    tmp14 = fn;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return jsx(closure_0(dependencyMap[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
    cResult[5] = I;
    tmp15 = I;
  } else {
    class I {
      constructor() {
        return jsx(closure_0(dependencyMap[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
  }
  if (cResult[6] === first1 === closure_6) {
    class I {
      constructor() {
        return jsx(closure_0(dependencyMap[9]).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    }
    const tmpResult2 = require("useCoachmark");
    const coachmark = tmpResult2.useCoachmark(arg0, obj2);
    return tmp6[1];
  }
  obj2 = { title: tmp9, description: tmp10, position: "bottom", visible: first1 === closure_6, onDismiss: tmp14, renderImgComponent: tmp15 };
  cResult[6] = first1 === closure_6;
  cResult[7] = tmp14;
  cResult[8] = obj2;
}) : (function useForLaterCoachmark(arg0) {
  let closure_1;
  let first;
  let obj = first(7090);
  const items = [closure_6];
  const tmp = _slicedToArray(obj.useSelectedDismissibleContent(items, undefined, true), 2);
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
  const obj2 = first(9375);
  const coachmark = obj2.useCoachmark(arg0, memo);
  return tmp[1];
});
const result = size.fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default tmp2;
