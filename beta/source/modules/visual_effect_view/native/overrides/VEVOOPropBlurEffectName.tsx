// Module ID: 15554
// Function ID: 15555
// Name: VEVOOPropBlurEffectName
// Dependencies: [32, 19, 5270, 21, 4836, 15550, 8053, 6622, 5271, 2]

// Module 15554 (VEVOOPropBlurEffectName)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import VEVOOStore from "VEVOOStore" /* 5270 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
const memoResult = react.memo(function VEVOOPropBlurEffectName() {
  let closure_3;
  let closure_6;
  let closure_7;
  let first;
  let items;
  let items1;
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
  const obj2 = { style: items, label: "Blur Effect Name", disabled: !first1, leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle, leading: closure_6(require("FormSwitch").FormSwitch, obj3), subLabel: closure_8(closure_7, obj4) };
  items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
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
  obj4 = { children: items1 };
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
  items1 = [closure_6(FormSwitchRow, obj5), ];
  const BLUR_EFFECT_NAMES = require("VisualEffectViewIOS").BLUR_EFFECT_NAMES;
  const found = BLUR_EFFECT_NAMES.filter((arr) => -1 !== arr.indexOf(first));
  items1[1] = found.map((item, index) => {
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
    const FormRadioRow = closure_0(visualEffectViewOverrideSharedStyles[6]).FormRadioRow;
    items = [visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, { opacity: 1 }];
    return closure_6(FormRadioRow, obj, index);
  });
  return closure_6(FormRow, obj2);
});
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx");

export default memoResult;
