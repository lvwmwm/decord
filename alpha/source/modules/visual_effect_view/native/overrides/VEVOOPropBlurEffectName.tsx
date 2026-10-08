// Module ID: 16143
// Function ID: 16144
// Name: VEVOOPropBlurEffectName
// Dependencies: [32, 19, 5364, 21, 5090, 558, 576, 16139, 6883, 8555, 5365, 2]

// Module 16143 (VEVOOPropBlurEffectName)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import VEVOOStore from "VEVOOStore" /* 5364 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ getVisualEffectViewOverrides: closure_4, setVisualEffectViewOverides: hasOwnProperty } = VEVOOStore);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ radio: { fontSize: 14 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VEVOOPropBlurEffectName() {
  let closure_3;
  let enabledSwitchStyle;
  let first;
  let first2;
  let tmp16;
  let visualEffectViewOverrideSharedStyles;
  let zeroPaddingVertical;
  let tmp = _require;
  let tmp2 = visualEffectViewOverrideSharedStyles;
  let obj = require("react");
  const cResult = obj.c(32);
  _require = closure_9();
  const tmp4 = closure_9();
  const obj2 = require("VEVOO");
  visualEffectViewOverrideSharedStyles = obj2.useVisualEffectViewOverrideSharedStyles();
  const tmp7 = first(react.useState("Dark"), 2);
  const tmp6 = first;
  first = tmp7[0];
  const obj3 = react;
  react = tmp7[1];
  const tmp9 = first(react.useState(false), 2);
  const first1 = tmp9[0];
  let closure_5 = tmp9[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = first1();
    cResult[0] = tmp13;
    first2 = tmp13;
  } else {
    first2 = cResult[0];
  }
  const tmp6Result = tmp6(obj3.useState(first2.blurEffectNameOverride), 2);
  const first3 = tmp6Result[0];
  let closure_7 = tmp6Result[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function _(blurEffectNameOverride) {
      if (null != blurEffectNameOverride) {
        closure_7(blurEffectNameOverride);
      }
      const obj = { blurEffectNameOverride };
      const merged = Object.assign(React3());
      hasOwnProperty(obj);
    };
    cResult[1] = fn;
    tmp16 = fn;
  } else {
    tmp16 = cResult[1];
  }
  let closure_8 = tmp16;
  ({ zeroPaddingVertical, enabledSwitchStyle } = visualEffectViewOverrideSharedStyles);
  if (cResult[2] !== first3) {
    class C {
      constructor(arg0) {
        closure_5(arg0);
        let tmp3;
        const tmp2 = closure_8;
        if (arg0) {
          tmp3 = first3;
        }
        tmp2(tmp3);
      }
    }
    cResult[2] = first3;
    cResult[3] = C;
  } else {
    class C {
      constructor(arg0) {
        closure_5(arg0);
        let tmp3;
        const tmp2 = closure_8;
        if (arg0) {
          tmp3 = first3;
        }
        tmp2(tmp3);
      }
    }
  }
  if (cResult[4] === first1) {
    class C {
      constructor(arg0) {
        closure_5(arg0);
        let tmp3;
        const tmp2 = closure_8;
        if (arg0) {
          tmp3 = first3;
        }
        tmp2(tmp3);
      }
    }
    const _HermesInternal = HermesInternal;
    let str = "Theme: ";
    const combined = "Theme: " + first;
    if (cResult[7] !== first) {
      class T {
        constructor() {
          let str = "Dark";
          const tmp = closure_3;
          if ("Dark" === first) {
            str = "Light";
          }
          tmp(str);
        }
      }
      cResult[7] = first;
      cResult[8] = T;
    } else {
      class T {
        constructor() {
          let str = "Dark";
          const tmp = closure_3;
          if ("Dark" === first) {
            str = "Light";
          }
          tmp(str);
        }
      }
    }
    if (cResult[9] === visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal) {
      class T {
        constructor() {
          let str = "Dark";
          const tmp = closure_3;
          if ("Dark" === first) {
            str = "Light";
          }
          tmp(str);
        }
      }
    }
    const obj4 = { label: combined, style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, disabled: !first1, value: "Dark" === first, onValueChange: tmp21 };
    cResult[9] = visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal;
    cResult[10] = tmp21;
    cResult[11] = combined;
    cResult[12] = !first1;
    cResult[13] = "Dark" === first;
    cResult[14] = first3(tmp(tmp2[9]).FormSwitchRow, obj4);
    const tmp25 = first3(tmp(tmp2[9]).FormSwitchRow, obj4);
  }
  cResult[4] = first1;
  cResult[5] = tmp17;
  cResult[6] = first3(tmp(tmp2[8]).FormSwitch, { value: first1, onValueChange: tmp17 });
  first3(tmp(tmp2[8]).FormSwitch, { value: first1, onValueChange: tmp17 });
}) : (function VEVOOPropBlurEffectName() {
  let closure_3;
  let closure_6;
  let closure_7;
  let first;
  let items;
  let obj3;
  let obj4;
  let visualEffectViewOverrideSharedStyles;
  _require = closure_9();
  let obj = require("VEVOO");
  visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  let tmp2 = first(react.useState("Dark"), 2);
  first = tmp2[0];
  react = tmp2[1];
  const tmp4 = first(react.useState(false), 2);
  const first1 = tmp4[0];
  let closure_5 = tmp4[1];
  [closure_6, closure_7] = first(react.useState(first1().blurEffectNameOverride), 2);
  first(react.useState(first1().blurEffectNameOverride), 2);
  let closure_8 = react.useCallback((blurEffectNameOverride) => {
    if (null != blurEffectNameOverride) {
      closure_7(blurEffectNameOverride);
    }
    const obj = { blurEffectNameOverride };
    const merged = Object.assign(React3());
    hasOwnProperty(obj);
  }, []);
  const obj2 = { style: visualEffectViewOverrideSharedStyles.zeroPaddingVertical, label: "Blur Effect Name", disabled: !first1, leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle, leading: closure_6(require("FormSwitch").FormSwitch, obj3), subLabel: closure_8(closure_7, obj4) };
  const FormRow = require("Form").FormRow;
  obj3 = {
    value: first1,
    onValueChange(arg0) {
      closure_5(arg0);
      let tmp3;
      const tmp2 = closure_8;
      if (arg0) {
        tmp3 = closure_6;
      }
      tmp2(tmp3);
    }
  };
  obj4 = { children: items };
  const obj5 = {
    label: "Theme: " + first,
    style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal,
    disabled: !first1,
    value: "Dark" === first,
    onValueChange() {
      let str = "Dark";
      const tmp = closure_3;
      if ("Dark" === first) {
        str = "Light";
      }
      tmp(str);
    }
  };
  const FormSwitchRow = require("Form").FormSwitchRow;
  items = [closure_6(FormSwitchRow, obj5), ];
  const BLUR_EFFECT_NAMES = require("VisualEffectViewIOS").BLUR_EFFECT_NAMES;
  const found = BLUR_EFFECT_NAMES.filter((arr) => -1 !== arr.indexOf(first));
  items[1] = found.map((item, index) => {
    let items;
    closure_0 = item;
    const obj = {
      label: item.replace(first, ""),
      labelStyle: closure_0.radio,
      style: items,
      selected: item === closure_6,
      disabled: !first1,
      onPress() {
        closure_8(item);
      }
    };
    const FormRadioRow = closure_0(visualEffectViewOverrideSharedStyles[9]).FormRadioRow;
    items = [visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, { opacity: 1 }];
    return closure_6(FormRadioRow, obj, index);
  });
  return closure_6(FormRow, obj2);
}));
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx");

export default memoResult;
