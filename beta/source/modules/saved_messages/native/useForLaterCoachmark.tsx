// Module ID: 16755
// Function ID: 16756
// Name: useForLaterCoachmark
// Dependencies: [32, 19, 17, 2042, 21, 2031, 4790, 558, 568, 13640, 8135, 7664, 1119, 10491, 2]

// Module 16755 (useForLaterCoachmark)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import _modDef13640 from "module_13640" /* 13640 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_8 = fn(2031).DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
const createStyles = fn(4790);
let closure_9 = createStyles.createStyles({ imageContainer: { width: 100, height: 80 } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp3 = closure_9();
  if (cResult[0] !== tmp3.imageContainer) {
    const obj2 = { source: _modDef13640, style: tmp3.imageContainer };
    const tmp8 = <Image source={_modDef13640} style={tmp3.imageContainer} />;
    cResult[0] = tmp3.imageContainer;
    cResult[1] = tmp8;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const obj = { source: _modDef13640, style: closure_9().imageContainer };
  return <Image source={_modDef13640} style={closure_9().imageContainer} />;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(10);
  const obj = require("c");
  const isForLaterExperimentOn = require("ForLaterExperiment").useIsForLaterExperimentOn("forLaterCoachmark");
  if (cResult[0] !== isForLaterExperimentOn) {
    if (isForLaterExperimentOn) {
      const items = [closure_8];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = isForLaterExperimentOn;
    cResult[1] = items1;
  } else {
    const tmp8 = _slicedToArray(tmp(7664).useSelectedDismissibleContent(cResult[1], undefined, true), 2);
    _require = tmp9;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t.qPbFK2);
      const intl2 = tmp(1119).intl;
      const stringResult1 = intl2.string(tmp(1119).t.URrJq1);
      cResult[2] = stringResult;
      cResult[3] = stringResult1;
      let tmp12 = stringResult1;
      let tmp11 = stringResult;
    } else {
      tmp11 = cResult[2];
      tmp12 = cResult[3];
    }
    if (cResult[4] !== tmp8[1]) {
      class R {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      cResult[4] = tmp9;
      cResult[5] = R;
    } else {
      class R {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor() {
          return closure_1_7(closure_1_10, {});
        }
      }
      cResult[6] = D;
      const tmp17 = D;
    } else {
      class D {
        constructor() {
          return closure_1_7(closure_1_10, {});
        }
      }
    }
    if (cResult[7] === tmp8[0] === closure_8) {
      class D {
        constructor() {
          return closure_1_7(closure_1_10, {});
        }
      }
      const coachmark = tmp(10491).useCoachmark(arg0, tmp19);
      return tmp9;
    }
    const obj3 = { title: tmp11, description: tmp12, position: "bottom", visible: tmp8[0] === closure_8, onDismiss: tmp16, renderImgComponent: tmp17 };
    cResult[7] = tmp8[0] === closure_8;
    cResult[8] = tmp16;
    cResult[9] = obj3;
    tmp19 = obj3;
    const tmpResult = tmp(7664);
  }
}) : ((arg0) => {
  if (obj.useIsForLaterExperimentOn("forLaterCoachmark")) {
    const items = [closure_8];
    let items1 = items;
  } else {
    items1 = [];
  }
  obj = first(8135);
  const tmp4 = _slicedToArray(first(7664).useSelectedDismissibleContent(items1, undefined, true), 2);
  first = tmp4[0];
  closure_1 = tmp6;
  const items2 = [tmp4[1], first];
  const memo = noop.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.qPbFK2);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.URrJq1);
    obj.visible = first === closure_8;
    obj.onDismiss = function onDismiss() {
      closure_1_1(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_7(closure_1_10, {});
    };
    return obj;
  }, items2);
  const tmpResult = first(7664);
  const coachmark = first(10491).useCoachmark(arg0, memo);
  return tmp4[1];
});
