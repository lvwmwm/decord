// Module ID: 17613
// Function ID: 17614
// Name: VEVOOPropBlurAmount
// Dependencies: [32, 19, 5623, 21, 5004, 558, 576, 7332, 17614, 8985, 2]

// Module 17613 (VEVOOPropBlurAmount)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FormSwitch from "FormSwitch" /* 7332 */;
import Form from "Form" /* 8985 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VEVOOStore from "VEVOOStore" /* 5623 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, tmp2Result;

let hasOwnProperty;
let metroRequire;
({ getVisualEffectViewOverrides: hasOwnProperty, setVisualEffectViewOverides: metroRequire } = VEVOOStore);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ enabledSwitchStyle: { alignSelf: "flex-start" } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VEVOOPropBlurAmount() {
  let closure_2;
  let first;
  let require;
  let tmp14;
  let tmp7;
  let tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(18);
  const tmp4 = closure_8();
  [tmp7, require] = O(react.useState(false), 2);
  O(react.useState(false), 2);
  const tmp5 = O;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = closure_5();
    cResult[0] = tmp10;
    first = tmp10;
  } else {
    first = cResult[0];
  }
  const tmp5Result = tmp5(react.useState(first.blurAmountOverride), 2);
  const first1 = tmp5Result[0];
  dependencyMap = tmp5Result[1];
  const ref = react.useRef(first1);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        if (null != arg0) {
          tmp = closure_2;
          tmp2 = closure_2(arg0);
        }
        obj = {};
        merged = Object.assign(closure_5());
        obj.blurAmountOverride = arg0;
        tmp4 = closure_6(obj);
        return;
      }
    }
    cResult[1] = O;
  } else {
    class O {
      constructor(arg0) {
        if (null != arg0) {
          tmp = closure_2;
          tmp2 = closure_2(arg0);
        }
        obj = {};
        merged = Object.assign(closure_5());
        obj.blurAmountOverride = arg0;
        tmp4 = closure_6(obj);
        return;
      }
    }
  }
  O = tmp13;
  if (cResult[2] !== first1) {
    class O {
      constructor(arg0) {
        if (null != arg0) {
          tmp = closure_2;
          tmp2 = closure_2(arg0);
        }
        obj = {};
        merged = Object.assign(closure_5());
        obj.blurAmountOverride = arg0;
        tmp4 = closure_6(obj);
        return;
      }
    }
    let toFixedResult;
    if (first1 != null) {
      class O {
        constructor(arg0) {
          if (null != arg0) {
            tmp = closure_2;
            tmp2 = closure_2(arg0);
          }
          obj = {};
          merged = Object.assign(closure_5());
          obj.blurAmountOverride = arg0;
          tmp4 = closure_6(obj);
          return;
        }
      }
      toFixedResult = first1.toFixed(3);
    }
    if (toFixedResult == null) {
      class O {
        constructor(arg0) {
          if (null != arg0) {
            tmp = closure_2;
            tmp2 = closure_2(arg0);
          }
          obj = {};
          merged = Object.assign(closure_5());
          obj.blurAmountOverride = arg0;
          tmp4 = closure_6(obj);
          return;
        }
      }
    }
    cResult[2] = first1;
    cResult[3] = toFixedResult;
    tmp14 = toFixedResult;
  } else {
    class O {
      constructor(arg0) {
        if (null != arg0) {
          tmp = closure_2;
          tmp2 = closure_2(arg0);
        }
        obj = {};
        merged = Object.assign(closure_5());
        obj.blurAmountOverride = arg0;
        tmp4 = closure_6(obj);
        return;
      }
    }
  }
  const combined = "Blur Amount " + tmp14;
  if (cResult[4] !== first1) {
    class C {
      constructor(arg0) {
        tmp = closure_0(arg0);
        tmp3 = undefined;
        tmp2 = closure_3;
        if (arg0) {
          tmp3 = closure_1;
        }
        tmp2Result = tmp2(tmp3);
        return;
      }
    }
    cResult[4] = first1;
    cResult[5] = C;
  } else {
    class C {
      constructor(arg0) {
        tmp = closure_0(arg0);
        tmp3 = undefined;
        tmp2 = closure_3;
        if (arg0) {
          tmp3 = closure_1;
        }
        tmp2Result = tmp2(tmp3);
        return;
      }
    }
  }
  if (cResult[6] === tmp7) {
    class C {
      constructor(arg0) {
        tmp = closure_0(arg0);
        tmp3 = undefined;
        tmp2 = closure_3;
        if (arg0) {
          tmp3 = closure_1;
        }
        tmp2Result = tmp2(tmp3);
        return;
      }
    }
    if (cResult[9] === !tmp7) {
      class C {
        constructor(arg0) {
          tmp = closure_0(arg0);
          tmp3 = undefined;
          tmp2 = closure_3;
          if (arg0) {
            tmp3 = closure_1;
          }
          tmp2Result = tmp2(tmp3);
          return;
        }
      }
      if (cResult[12] === tmp4.enabledSwitchStyle) {
        class C {
          constructor(arg0) {
            tmp = closure_0(arg0);
            tmp3 = undefined;
            tmp2 = closure_3;
            if (arg0) {
              tmp3 = closure_1;
            }
            tmp2Result = tmp2(tmp3);
            return;
          }
        }
      }
      cResult[12] = tmp4.enabledSwitchStyle;
      cResult[13] = combined;
      cResult[14] = tmp18;
      cResult[15] = tmp22;
      cResult[16] = !tmp7;
      cResult[17] = jsx(Form.FormRow, { label: combined, leadingStyle: tmp4.enabledSwitchStyle, leading: tmp18, subLabel: tmp22, disabled: !tmp7 });
      const tmp29 = jsx(Form.FormRow, { label: combined, leadingStyle: tmp4.enabledSwitchStyle, leading: tmp18, subLabel: tmp22, disabled: !tmp7 });
    }
    cResult[9] = !tmp7;
    cResult[10] = !tmp7;
    cResult[11] = jsx(first1(17614), { disabled: !tmp7, disabledOpacity: !tmp7, initialValue: ref, onValueChange: tmp13, accessibilityLabel: "Blur Amount" });
    const tmp25 = jsx(first1(17614), { disabled: !tmp7, disabledOpacity: !tmp7, initialValue: ref, onValueChange: tmp13, accessibilityLabel: "Blur Amount" });
  }
  cResult[6] = tmp7;
  cResult[7] = tmp17;
  cResult[8] = jsx(FormSwitch.FormSwitch, { value: tmp7, onValueChange: tmp17 });
  const tmp19 = jsx(FormSwitch.FormSwitch, { value: tmp7, onValueChange: tmp17 });
}) : (function VEVOOPropBlurAmount() {
  let closure_2;
  let onValueChange;
  let require;
  let tmp3;
  const tmp = closure_8();
  let tmp2 = onValueChange(react.useState(false), 2);
  [tmp3, require] = tmp2;
  const tmp4 = onValueChange(react.useState(closure_5().blurAmountOverride), 2);
  const first = tmp4[0];
  dependencyMap = tmp4[1];
  const ref = react.useRef(first);
  onValueChange = react.useCallback((blurAmountOverride) => {
    if (null != blurAmountOverride) {
      closure_2(blurAmountOverride);
    }
    const obj = { blurAmountOverride };
    const merged = Object.assign(hasOwnProperty());
    metroRequire(obj);
  }, []);
  let str;
  const FormRow = Form.FormRow;
  if (first != null) {
    str = first.toFixed(3);
  }
  if (str == null) {
    str = "";
  }
  return <FormRow label={"Blur Amount " + str} leadingStyle={tmp.enabledSwitchStyle} leading={null} subLabel={null} disabled={!tmp3} />;
}));
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx");

export default memoResult;
