// Module ID: 10566
// Function ID: 10567
// Name: OrbsBadgeCoachmark
// Dependencies: [109, 19, 17, 21, 5092, 558, 576, 10567, 6156, 1126, 4977, 9442, 2]
// Exports: default

// Module 10566 (OrbsBadgeCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import FastImageDefault from "FastImage" /* 6156 */;
import useCoachmark from "useCoachmark" /* 9442 */;
import _modDef10567 from "module_10567" /* 10567 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_3 = ["badgeRef"];
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 80, height: 80 }, coachmarkDescription: { marginBottom: -10 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsBadgeCoachmarkImg() {
  let first;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp3 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef10567 };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3.coachmarkImage) {
    const tmp9 = jsx(FastImageDefault, { source: first, style: tmp3.coachmarkImage });
    cResult[1] = tmp3.coachmarkImage;
    cResult[2] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp3.coachmarkImageContainer) {
    let tmp10;
    if (cResult[4] === tmp6) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <View style={tmp3.coachmarkImageContainer}>{tmp6}</View>;
  cResult[3] = tmp3.coachmarkImageContainer;
  cResult[4] = tmp6;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function OrbsBadgeCoachmarkImg() {
  const tmp = closure_8();
  const obj3 = { uri: _modDef10567 };
  FastImageDefault;
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOrbsBadgeCoachmark(disabled) {
  let first;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(11);
  disabled = disabled.disabled;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t["4ivm+P"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.coachmarkDescription) {
    const tmp10 = <View style={tmp4.coachmarkDescription} />;
    cResult[1] = tmp4.coachmarkDescription;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        const obj = require("RootNavigationRef");
        const rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
          }
        }
        return false;
      }
    }
    const fn = function p() {
      return <closure_1_9 />;
    };
    cResult[3] = C;
    cResult[4] = fn;
    tmp13 = fn;
    tmp12 = C;
  } else {
    class C {
      constructor() {
        const obj = require("RootNavigationRef");
        const rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
          }
        }
        return false;
      }
    }
    tmp13 = cResult[4];
  }
  if (cResult[5] === tmp7) {
    class C {
      constructor() {
        const obj = require("RootNavigationRef");
        const rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
          }
        }
        return false;
      }
    }
    if (cResult[8] === disabled) {
      class C {
        constructor() {
          const obj = require("RootNavigationRef");
          const rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
            }
          }
          return false;
        }
      }
      return tmp15;
    }
    let tmp16 = null;
    if (!disabled) {
      class C {
        constructor() {
          const obj = require("RootNavigationRef");
          const rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
            }
          }
          return false;
        }
      }
      tmp17[0] = tmp14;
      tmp16 = tmp17;
    }
    cResult[8] = disabled;
    cResult[9] = tmp14;
    cResult[10] = tmp16;
    tmp15 = tmp16;
  }
  const obj3 = { title: first, description: tmp7, position: "bottom", visible: !disabled, onDismiss: tmp12, renderImgComponent: tmp13 };
  cResult[5] = tmp7;
  cResult[6] = !disabled;
  cResult[7] = obj3;
}) : (function useOrbsBadgeCoachmark(disabled) {
  disabled = disabled.disabled;
  const tmp = closure_8();
  const coachmarkDescription = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    let obj = { props: tmp2 };
    tmp3 = obj;
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  const tmp = closure_10;
  if (tmp) {
    let tmp12;
    let tmp11;
    const obj3 = react2;
    const cResult = obj3.c(3);
    const tmp8 = require;
    if (cResult[0] !== badgeRef) {
      const badgeRef2 = badgeRef.badgeRef;
      const tmp15 = _objectWithoutProperties(badgeRef, closure_3);
      cResult[0] = badgeRef;
      cResult[1] = badgeRef2;
      cResult[2] = tmp15;
      tmp12 = tmp15;
      tmp11 = badgeRef2;
    } else {
      tmp11 = cResult[1];
      tmp12 = cResult[2];
    }
    const tmp8Result = tmp8(9442);
    const coachmark = tmp8Result.useCoachmark(tmp11, tmp12);
  } else {
    badgeRef = badgeRef.badgeRef;
    const merged = Object.assign(badgeRef, Object.assign({ badgeRef: 0 }));
    const obj2 = useCoachmark;
    const coachmark1 = obj2.useCoachmark(badgeRef, merged);
  }
  return null;
};
export const useOrbsBadgeCoachmark = tmp2;
