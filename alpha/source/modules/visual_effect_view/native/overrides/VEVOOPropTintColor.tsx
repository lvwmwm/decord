// Module ID: 17924
// Function ID: 17925
// Name: VEVOOPropTintColor
// Dependencies: [32, 19, 17, 5596, 21, 5009, 575, 17921, 5006, 8169, 7364, 17923, 16395, 1091, 2]

// Module 17924 (VEVOOPropTintColor)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import ColorUtils from "ColorUtils" /* 5006 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 16395 */;
import VEVOO from "VEVOO" /* 17921 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import VEVOOStore from "VEVOOStore" /* 5596 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
let react = react_mod;
const View = react_native.View;
({ getVisualEffectViewOverrides: metroRequire, setVisualEffectViewOverides: metroImportDefault } = VEVOOStore);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let obj = { tintColor: size };
size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, borderRadius: nativeDefault.radii.sm };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(function VEVOOPropTintColor() {
  let closure_2;
  let closure_4;
  let first1;
  let items;
  let obj4;
  let obj6;
  let obj8;
  let obj9;
  let str2;
  let tmp14;
  let tmp15;
  let tmp7;
  let tmp = closure_11();
  let obj = VEVOO;
  const visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  let obj2 = react;
  [tmp7, require] = first1(react.useState(false), 2);
  const useState = react.useState;
  const tmp6 = first1(react.useState(false), 2);
  let str = closure_6().tintColorOverrideHex;
  const tmp8 = closure_6;
  if (str == null) {
    str = "black";
  }
  const tmp5Result = first1(useState(str), 2);
  const backgroundColor = tmp5Result[0];
  dependencyMap = tmp5Result[1];
  const tmp5Result2 = first1(obj2.useState(tmp8().tintColorOverrideOpacity), 2);
  first1 = tmp5Result2[0];
  react = tmp5Result2[1];
  const ref = obj2.useRef(first1);
  let closure_5 = obj2.useCallback((tintColorOverrideHex, tintColorOverrideOpacity) => {
    if (null != tintColorOverrideHex) {
      closure_2(tintColorOverrideHex);
    }
    if (null != tintColorOverrideOpacity) {
      closure_4(tintColorOverrideOpacity);
    }
    let hexToRgbaStringResult;
    if (null != tintColorOverrideHex) {
      if (null != tintColorOverrideOpacity) {
        const obj = ColorUtils;
        hexToRgbaStringResult = obj.hexToRgbaString(tintColorOverrideHex, tintColorOverrideOpacity);
      }
    }
    const obj2 = { tintColorOverrideOpacity, tintColorOverrideHex, tintColorOverride: hexToRgbaStringResult };
    const merged = Object.assign(metroRequire());
    if (null == hexToRgbaStringResult) {
      const obj3 = { tintColorOverride: "rgba(0, 0, 0, 0)" };
      const merged1 = Object.assign(obj2);
      metroImportDefault(obj3);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_2_7(obj2);
      });
    } else {
      metroImportDefault(obj2);
    }
  }, []);
  let obj3 = {
    style: visualEffectViewOverrideSharedStyles.zeroPaddingVertical,
    labelStyle: visualEffectViewOverrideSharedStyles.zeroHeight,
    leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle,
    leading: closure_8(tmp2(7364).FormSwitch, obj4),
    subLabel: tmp14(tmp15, obj8),
    disabled: !tmp7,
    onPress() {
      let obj2;
      let obj = {
        color: obj2.hex2int(first),
        onSelect(color) {
          const obj = require("utils/ColorUtils");
          closure_1_5(obj.int2hex(color), first1);
        }
      };
      const tmp = showCustomColorPickerActionSheetDefault;
      obj2 = utils_ColorUtils;
      tmp(obj);
    }
  };
  const FormRow = tmp2(8169).FormRow;
  obj4 = {
    value: tmp7,
    onValueChange(arg0) {
      require(arg0);
      if (arg0) {
        closure_5(first, first1);
      } else {
        closure_5(undefined, undefined);
      }
    }
  };
  const obj5 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint", trailing: closure_8(closure_5, obj6) };
  obj6 = { style: items };
  items = [tmp.tintColor, { backgroundColor }];
  const FormRow2 = tmp2(8169).FormRow;
  const items1 = [closure_8(FormRow2, obj5), ];
  const obj7 = { style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, disabled: !tmp7, label: "Blur Tint Opacity " + str2, subLabel: closure_8(backgroundColor(17923), obj9) };
  str2 = undefined;
  const FormRow3 = tmp2(8169).FormRow;
  tmp14 = closure_10;
  tmp15 = closure_9;
  if (first1 != null) {
    str2 = first1.toFixed(3);
  }
  if (str2 == null) {
    str2 = "";
  }
  obj8 = { children: items1 };
  obj9 = {
    disabled: !tmp7,
    initialValue: ref,
    onValueChange(arg0) {
      closure_5(first, arg0);
    },
    accessibilityLabel: "Blur Tint Opacity"
  };
  items1[1] = closure_8(FormRow3, obj7);
  return closure_8(FormRow, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropTintColor.tsx");

export default memoResult;
