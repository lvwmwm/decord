// Module ID: 14715
// Function ID: 112163
// Dependencies: [57, 31, 4534, 33, 4130, 14711, 7495, 5505, 4535, 2]

// Module 14715
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import useVisualEffectViewOverrides from "useVisualEffectViewOverrides";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ getVisualEffectViewOverrides: closure_4, setVisualEffectViewOverides: closure_5 } = useVisualEffectViewOverrides);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ radio: { fontSize: 14 } });
const memoResult = importAllResult.memo(function VEVOOPropBlurEffectName() {
  let closure_6;
  let closure_7;
  const _require = callback3();
  let obj = _require(visualEffectViewOverrideSharedStyles[5]);
  visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  const tmp2 = first(importAllResult.useState("Dark"), 2);
  first = tmp2[0];
  const tmp4 = first(tmp2[1].useState(false), 2);
  const first1 = tmp4[0];
  let closure_5 = tmp4[1];
  [closure_6, closure_7] = first(tmp2[1].useState(first1().blurEffectNameOverride), 2);
  const callback2 = importAllResult.useCallback((arg0) => {
    if (null != arg0) {
      callback2(arg0);
    }
    const obj = {};
    const merged = Object.assign(first1());
    obj["blurEffectNameOverride"] = arg0;
    callback(obj);
  }, []);
  obj = { style: items, label: "Blur Effect Name", disabled: !first1, leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle };
  items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
  obj = {
    value: first1,
    onValueChange(arg0) {
      callback(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = closure_6;
      }
      closure_8(tmp3);
    }
  };
  obj.leading = callback(_require(visualEffectViewOverrideSharedStyles[7]).FormSwitch, obj);
  const obj1 = {};
  const obj2 = {
    label: "Theme: " + first,
    style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal,
    disabled: !first1,
    value: "Dark" === first,
    onValueChange() {
      let str = "Dark";
      if ("Dark" === first) {
        str = "Light";
      }
      closure_3(str);
    }
  };
  const items1 = [callback(_require(visualEffectViewOverrideSharedStyles[6]).FormSwitchRow, obj2), ];
  const BLUR_EFFECT_NAMES = _require(visualEffectViewOverrideSharedStyles[8]).BLUR_EFFECT_NAMES;
  const found = BLUR_EFFECT_NAMES.filter((arr) => -1 !== arr.indexOf(first));
  items1[1] = found.map((str) => {
    const lib = str;
    const obj = { label: str.replace(first, ""), labelStyle: lib.radio };
    const items = [visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, { opacity: 1 }];
    obj.style = items;
    obj.selected = str === closure_6;
    obj.disabled = !first1;
    obj.onPress = function onPress() {
      outer1_8(closure_0);
    };
    return outer1_6(lib(visualEffectViewOverrideSharedStyles[6]).FormRadioRow, obj, arg1);
  });
  obj1.children = items1;
  obj.subLabel = callback2(closure_7, obj1);
  return callback(_require(visualEffectViewOverrideSharedStyles[6]).FormRow, obj);
});
const result = require("useVisualEffectViewOverrides").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx");

export default memoResult;
