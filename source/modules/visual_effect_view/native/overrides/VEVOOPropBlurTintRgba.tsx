// Module ID: 14588
// Function ID: 109916
// Dependencies: []

// Module 14588
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ getVisualEffectViewOverrides: closure_6, setVisualEffectViewOverides: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let obj = {};
obj = { width: importDefault(dependencyMap[6]).space.PX_32, height: importDefault(dependencyMap[6]).space.PX_32, backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_700, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.tintColor = obj;
let closure_11 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function VEVOOPropBlurTintRgba() {
  let obj = callback(closure_2[7]);
  const visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  const tmp4 = callback2(React.useState(false), 2);
  const first = tmp4[0];
  const callback = tmp4[1];
  const blurTintRgbaOverrideHex = callback3().blurTintRgbaOverrideHex;
  let str = "black";
  if (null != blurTintRgbaOverrideHex) {
    str = blurTintRgbaOverrideHex;
  }
  const tmp6 = callback2(React.useState(str), 2);
  const first1 = tmp6[0];
  const importDefault = first1;
  closure_2 = tmp6[1];
  const tmp8 = callback2(React.useState(callback3().blurTintRgbaOverrideOpacity), 2);
  const first2 = tmp8[0];
  const callback2 = first2;
  const React = tmp8[1];
  const tmp = callback5();
  let closure_5 = React.useCallback((colorHex, opacity) => {
    if (null != colorHex) {
      callback2(colorHex);
    }
    if (null != opacity) {
      callback3(opacity);
    }
    let hexToRgbaStringResult;
    if (null != colorHex) {
      if (null != opacity) {
        let obj = callback(callback2[8]);
        hexToRgbaStringResult = obj.hexToRgbaString(colorHex, opacity);
      }
    }
    obj = {};
    const merged = Object.assign(callback5());
    obj["blurTintRgbaOverrideOpacity"] = opacity;
    obj["blurTintRgbaOverrideHex"] = colorHex;
    obj["blurTintRgbaOverride"] = hexToRgbaStringResult;
    const callback = obj;
    if (null == hexToRgbaStringResult) {
      obj = {};
      const merged1 = Object.assign(obj);
      obj["blurTintRgbaOverride"] = "rgba(0, 0, 0, 0)";
      callback6(obj);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        callback(obj);
      });
    } else {
      callback6(obj);
    }
  }, []);
  obj = { style: items, labelStyle: visualEffectViewOverrideSharedStyles.zeroHeight, leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle };
  const items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
  obj = {
    value: first,
    onValueChange(arg0) {
      callback(arg0);
      if (arg0) {
        tmp2(first1, first2);
      } else {
        tmp2(undefined, undefined);
      }
    }
  };
  obj.leading = callback4(callback(closure_2[10]).FormSwitch, obj);
  const obj1 = {};
  const obj2 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint" };
  const items1 = [tmp.tintColor, { backgroundColor: first1 }];
  obj2.trailing = callback4(closure_5, { style: items1 });
  const items2 = [callback4(callback(closure_2[9]).FormRow, obj2), ];
  const obj3 = { style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, disabled: !first };
  let toFixedResult;
  if (null != first2) {
    toFixedResult = first2.toFixed(3);
  }
  let str2 = "";
  if (null != toFixedResult) {
    str2 = toFixedResult;
  }
  obj3.label = "Blur Tint Opacity " + str2;
  const ref = React.useRef(first2);
  const tmp11 = closure_10;
  const tmp12 = closure_9;
  obj3.subLabel = callback4(importDefault(closure_2[11]), {
    disabled: !first,
    initialValue: React.useRef(first2),
    onValueChange(arg0) {
      callback4(first1, arg0);
    }
  });
  items2[1] = callback4(callback(closure_2[9]).FormRow, obj3);
  obj1.children = items2;
  obj.subLabel = tmp11(tmp12, obj1);
  obj.disabled = !first;
  obj.onPress = function onPress() {
    const obj = {};
    const tmp = first1(closure_2[12]);
    obj.color = callback(closure_2[13]).hex2int(first1);
    obj.onSelect = function onSelect(color) {
      callback2(callback(closure_2[13]).int2hex(color), closure_3);
    };
    tmp(obj);
  };
  return callback4(callback(closure_2[9]).FormRow, obj);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurTintRgba.tsx");

export default memoResult;
