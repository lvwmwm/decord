// Module ID: 14600
// Function ID: 109999
// Dependencies: []

// Module 14600
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ getVisualEffectViewOverrides: closure_4, setVisualEffectViewOverides: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles({ radio: { fontSize: 14 } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function VEVOOPropBlurEffectName() {
  const callback = callback5();
  let obj = callback(dependencyMap[5]);
  const visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  const dependencyMap = visualEffectViewOverrideSharedStyles;
  const tmp2 = callback2(React.useState("Dark"), 2);
  const first = tmp2[0];
  const callback2 = first;
  const React = tmp2[1];
  const tmp4 = callback2(React.useState(false), 2);
  const first1 = tmp4[0];
  let closure_5 = tmp4[1];
  [closure_6, closure_7] = callback2(React.useState(first1().blurEffectNameOverride), 2);
  const callback4 = React.useCallback((arg0) => {
    if (null != arg0) {
      callback3(arg0);
    }
    const obj = {};
    const merged = Object.assign(first1());
    obj["blurEffectNameOverride"] = arg0;
    callback(obj);
  }, []);
  obj = { style: items, label: "Blur Effect Name", disabled: !first1, leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle };
  const items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
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
  obj.leading = callback3(callback(dependencyMap[7]).FormSwitch, obj);
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
  const items1 = [callback3(callback(dependencyMap[6]).FormSwitchRow, obj2), ];
  const BLUR_EFFECT_NAMES = callback(dependencyMap[8]).BLUR_EFFECT_NAMES;
  const found = BLUR_EFFECT_NAMES.filter((arr) => -1 !== arr.indexOf(first));
  items1[1] = found.map((str) => {
    const lib = str;
    const obj = { label: str.replace(first, ""), labelStyle: lib.radio };
    const items = [visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, { opacity: 1 }];
    obj.style = items;
    obj.selected = str === callback2;
    obj.disabled = !first1;
    obj.onPress = function onPress() {
      callback(arg0);
    };
    return callback2(lib(visualEffectViewOverrideSharedStyles[6]).FormRadioRow, obj, arg1);
  });
  obj1.children = items1;
  obj.subLabel = callback4(closure_7, obj1);
  return callback3(callback(dependencyMap[6]).FormRow, obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx");

export default memoResult;
