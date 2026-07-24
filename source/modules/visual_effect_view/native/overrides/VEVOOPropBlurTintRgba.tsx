// Module ID: 14761
// Function ID: 112476
// Dependencies: [57, 31, 27, 4534, 33, 4130, 689, 14758, 3974, 7636, 5503, 14760, 13618, 665, 2]

// Module 14761
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import useVisualEffectViewOverrides from "useVisualEffectViewOverrides";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ getVisualEffectViewOverrides: closure_6, setVisualEffectViewOverides: closure_7 } = useVisualEffectViewOverrides);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { width: require("_createForOfIteratorHelperLoose").space.PX_32, height: require("_createForOfIteratorHelperLoose").space.PX_32, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_700, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.tintColor = obj;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function VEVOOPropBlurTintRgba() {
  let obj = _require(14758);
  const visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  const tmp4 = first2(importAllResult.useState(false), 2);
  const first = tmp4[0];
  _require = tmp4[1];
  const blurTintRgbaOverrideHex = callback().blurTintRgbaOverrideHex;
  let str = "black";
  if (null != blurTintRgbaOverrideHex) {
    str = blurTintRgbaOverrideHex;
  }
  const tmp6 = first2(importAllResult.useState(str), 2);
  const first1 = tmp6[0];
  const dependencyMap = tmp6[1];
  const tmp8 = first2(importAllResult.useState(callback().blurTintRgbaOverrideOpacity), 2);
  first2 = tmp8[0];
  let tmp = callback3();
  let closure_5 = importAllResult.useCallback((colorHex, opacity) => {
    if (null != colorHex) {
      dependencyMap(colorHex);
    }
    if (null != opacity) {
      callback2(opacity);
    }
    let hexToRgbaStringResult;
    if (null != colorHex) {
      if (null != opacity) {
        let obj = callback(3974);
        hexToRgbaStringResult = obj.hexToRgbaString(colorHex, opacity);
      }
    }
    obj = {};
    const merged = Object.assign(outer1_6());
    obj["blurTintRgbaOverrideOpacity"] = opacity;
    obj["blurTintRgbaOverrideHex"] = colorHex;
    obj["blurTintRgbaOverride"] = hexToRgbaStringResult;
    if (null == hexToRgbaStringResult) {
      obj = {};
      const merged1 = Object.assign(obj);
      obj["blurTintRgbaOverride"] = "rgba(0, 0, 0, 0)";
      outer1_7(obj);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        outer2_7(obj);
      });
    } else {
      outer1_7(obj);
    }
  }, []);
  obj = { style: items, labelStyle: visualEffectViewOverrideSharedStyles.zeroHeight, leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle };
  items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
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
  obj.leading = callback2(_require(5503).FormSwitch, obj);
  const obj1 = {};
  const obj2 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint" };
  const items1 = [tmp.tintColor, { backgroundColor: first1 }];
  obj2.trailing = callback2(closure_5, { style: items1 });
  const items2 = [callback2(_require(7636).FormRow, obj2), ];
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
  const ref = tmp8[1].useRef(first2);
  const tmp11 = closure_10;
  const tmp12 = closure_9;
  obj3.subLabel = callback2(first1(14760), {
    disabled: !first,
    initialValue: tmp8[1].useRef(first2),
    onValueChange(arg0) {
      callback3(first1, arg0);
    }
  });
  items2[1] = callback2(_require(7636).FormRow, obj3);
  obj1.children = items2;
  obj.subLabel = tmp11(tmp12, obj1);
  obj.disabled = !first;
  obj.onPress = function onPress() {
    const obj = {};
    const tmp = first1(13618);
    obj.color = callback(665).hex2int(first1);
    obj.onSelect = function onSelect(color) {
      outer1_5(callback(table[13]).int2hex(color), outer1_3);
    };
    tmp(obj);
  };
  return callback2(_require(7636).FormRow, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurTintRgba.tsx");

export default memoResult;
