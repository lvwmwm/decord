// Module ID: 14861
// Function ID: 14862
// Name: UserProfileThemePicker
// Dependencies: [19, 17, 21, 587, 5092, 558, 576, 1103, 6900, 1126, 9723, 6184, 5088, 2]

// Module 14861 (UserProfileThemePicker)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import intl5 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import Pressables from "Pressables" /* 6184 */;
import getHigherContrastColor from "getHigherContrastColor" /* 6900 */;
import PencilIcon from "PencilIcon" /* 9723 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let rect;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_530 = nativeDefault.unsafe_rawColors.PRIMARY_530;
let createStyles = createStyles_mod;
let obj = { colorRow: obj2, colorContainer: obj3, colorButton: size, editIcon: rect };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "center", alignItems: "flex-start" };
createStyles = createStyles.createStyles;
obj3 = { position: "relative", flex: 1, flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_4 };
size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ColorButton(arg0) {
  let accessibilityLabel;
  let color;
  let items;
  let items1;
  let label;
  let onPress;
  let tmp11;
  let tmp13;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(23);
  ({ color, label, accessibilityLabel, onPress } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== color) {
    const tmpResult = utils_ColorUtils;
    const int2hexResult = tmpResult.int2hex(color);
    const obj2 = { backgroundColor: int2hexResult, colors: items };
    items = [WHITE, PRIMARY_530];
    const tmpResult2 = getHigherContrastColor;
    const higherContrastColor = tmpResult2.getHigherContrastColor(obj2);
    cResult[0] = color;
    cResult[1] = int2hexResult;
    cResult[2] = higherContrastColor;
    tmp6 = higherContrastColor;
    tmp5 = int2hexResult;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const colorContainer = tmp4.colorContainer;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl5.t.Qp04hK);
    cResult[3] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp5) {
    const obj3 = { backgroundColor: tmp5 };
    cResult[4] = tmp5;
    cResult[5] = obj3;
    tmp13 = obj3;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp4.colorButton) {
    let tmp14;
    if (cResult[7] === tmp13) {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp6) {
      let tmp15;
      if (cResult[10] === tmp4.editIcon) {
        tmp15 = cResult[11];
      }
      if (cResult[12] === accessibilityLabel) {
        if (cResult[13] === onPress) {
          if (cResult[14] === tmp14) {
            let tmp18;
            let tmp21;
            if (cResult[15] === tmp15) {
              tmp18 = cResult[16];
            }
            if (cResult[17] !== label) {
              const obj4 = { variant: "text-sm/normal", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: label };
              const tmp23 = _false(Text_Text.Text, obj4);
              cResult[17] = label;
              cResult[18] = tmp23;
              tmp21 = tmp23;
            } else {
              tmp21 = cResult[18];
            }
            if (cResult[19] === tmp4.colorContainer) {
              if (cResult[20] === tmp18) {
                let tmp24;
                if (cResult[21] === tmp21) {
                  tmp24 = cResult[22];
                }
                return tmp24;
              }
            }
            const obj5 = { style: colorContainer, children: items1 };
            items1 = [tmp18, tmp21];
            const tmp27 = React3(View, obj5);
            cResult[19] = tmp4.colorContainer;
            cResult[20] = tmp18;
            cResult[21] = tmp21;
            cResult[22] = tmp27;
            tmp24 = tmp27;
          }
        }
      }
      const obj6 = { accessibilityRole: "button", accessibilityLabel, accessibilityHint: tmp11, style: tmp14, onPress, children: tmp15 };
      const tmp20 = _false(Pressables.PressableOpacity, obj6);
      cResult[12] = accessibilityLabel;
      cResult[13] = onPress;
      cResult[14] = tmp14;
      cResult[15] = tmp15;
      cResult[16] = tmp20;
      tmp18 = tmp20;
    }
    const obj7 = { size: "xs", color: tmp6, style: tmp4.editIcon };
    const tmp17 = _false(PencilIcon.PencilIcon, obj7);
    cResult[9] = tmp6;
    cResult[10] = tmp4.editIcon;
    cResult[11] = tmp17;
    tmp15 = tmp17;
  }
  const items2 = [tmp4.colorButton, tmp13];
  cResult[6] = tmp4.colorButton;
  cResult[7] = tmp13;
  cResult[8] = items2;
  tmp14 = items2;
}) : (function ColorButton(arg0) {
  let accessibilityLabel;
  let color;
  let intl;
  let items;
  let items1;
  let items2;
  let label;
  let obj6;
  let onPress;
  ({ color, label, accessibilityLabel, onPress } = arg0);
  const tmp = closure_8();
  const obj = utils_ColorUtils;
  const int2hexResult = obj.int2hex(color);
  const obj3 = { backgroundColor: int2hexResult, colors: items };
  items = [WHITE, PRIMARY_530];
  const obj4 = { style: tmp.colorContainer, children: items2 };
  const obj2 = getHigherContrastColor;
  const higherContrastColor = obj2.getHigherContrastColor(obj3);
  const obj5 = { accessibilityRole: "button", accessibilityLabel, accessibilityHint: intl.string(intl5.t.Qp04hK), style: items1, onPress, children: _false(PencilIcon.PencilIcon, obj6) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl5.intl;
  items1 = [tmp.colorButton, { backgroundColor: int2hexResult }];
  obj6 = { size: "xs", color: higherContrastColor, style: tmp.editIcon };
  items2 = [_false(PressableOpacity, obj5), _false(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: label })];
  return React3(View, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileThemePicker(arg0) {
  let items;
  let onPressPrimary;
  let onPressSecondary;
  let primaryColor;
  let secondaryColor;
  let tmp17;
  let tmpResult;
  let tmpResult4;
  const obj = react2;
  const cResult = obj.c(29);
  ({ primaryColor, secondaryColor, onPressPrimary, onPressSecondary } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === primaryColor) {
    if (cResult[1] === secondaryColor) {
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let tmp10;
      let tmp11;
      if (cResult[2] === tmp4.colorRow) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
        tmp7 = cResult[5];
        tmp8 = cResult[6];
        tmp9 = cResult[7];
        tmp10 = cResult[8];
        tmp11 = cResult[9];
      }
      if (cResult[11] === tmp5) {
        if (cResult[12] === onPressPrimary) {
          if (cResult[13] === tmp8) {
            if (cResult[14] === tmp9) {
              let tmp20;
              let tmp24;
              let tmp26;
              if (cResult[15] === tmp10) {
                tmp20 = cResult[16];
              }
              const _Symbol = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(1126).intl;
                const stringResult = intl3.string(intl5.t["8elvy6"]);
                cResult[17] = stringResult;
                tmp24 = stringResult;
              } else {
                tmp24 = cResult[17];
              }
              if (cResult[18] !== tmp7) {
                const intl4 = tmp(1126).intl;
                const formatToPlainString2 = intl4.formatToPlainString;
                const obj2 = { colorHex: tmpResult.int2hex(tmp7) };
                const I0tmru = tmp(1126).t.I0tmru;
                tmpResult = utils_ColorUtils;
                const formatToPlainString2Result = formatToPlainString2(I0tmru, obj2);
                cResult[18] = tmp7;
                cResult[19] = formatToPlainString2Result;
                tmp26 = formatToPlainString2Result;
              } else {
                tmp26 = cResult[19];
              }
              if (cResult[20] === onPressSecondary) {
                if (cResult[21] === tmp7) {
                  let tmp28;
                  if (cResult[22] === tmp26) {
                    tmp28 = cResult[23];
                  }
                  if (cResult[24] === tmp6) {
                    if (cResult[25] === tmp11) {
                      if (cResult[26] === tmp20) {
                        let tmp32;
                        if (cResult[27] === tmp28) {
                          tmp32 = cResult[28];
                        }
                        return tmp32;
                      }
                    }
                  }
                  const obj3 = { style: tmp11, children: items };
                  items = [tmp20, tmp28];
                  const tmp34 = React3(tmp6, obj3);
                  cResult[24] = tmp6;
                  cResult[25] = tmp11;
                  cResult[26] = tmp20;
                  cResult[27] = tmp28;
                  cResult[28] = tmp34;
                  tmp32 = tmp34;
                }
              }
              const obj4 = { color: tmp7, label: tmp24, accessibilityLabel: tmp26, onPress: onPressSecondary };
              const tmp31 = _false(closure_9, obj4);
              cResult[20] = onPressSecondary;
              cResult[21] = tmp7;
              cResult[22] = tmp26;
              cResult[23] = tmp31;
              tmp28 = tmp31;
            }
          }
        }
      }
      const obj5 = { color: tmp8, label: tmp9, accessibilityLabel: tmp10, onPress: onPressPrimary };
      const tmp22 = _false(tmp5, obj5);
      cResult[11] = tmp5;
      cResult[12] = onPressPrimary;
      cResult[13] = tmp8;
      cResult[14] = tmp9;
      cResult[15] = tmp10;
      cResult[16] = tmp22;
      tmp20 = tmp22;
    }
  }
  const tmpResult3 = utils_ColorUtils;
  const hex2intResult = tmpResult3.hex2int(PRIMARY_530);
  let tmp13 = primaryColor;
  if (primaryColor == null) {
    tmp13 = hex2intResult;
  }
  let tmp14 = secondaryColor;
  if (secondaryColor == null) {
    tmp14 = hex2intResult;
  }
  const colorRow = tmp4.colorRow;
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(intl5.t.C3KTQk);
    cResult[10] = stringResult1;
    tmp17 = stringResult1;
  } else {
    tmp17 = cResult[10];
  }
  const intl2 = tmp(1126).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const obj6 = { colorHex: tmpResult4.int2hex(tmp13) };
  const v4X2kc = tmp(1126).t.v4X2kc;
  tmpResult4 = utils_ColorUtils;
  const formatToPlainStringResult = formatToPlainString(v4X2kc, obj6);
  cResult[0] = primaryColor;
  cResult[1] = secondaryColor;
  cResult[2] = tmp4.colorRow;
  cResult[3] = closure_9;
  cResult[4] = View;
  cResult[5] = tmp14;
  cResult[6] = tmp13;
  cResult[7] = tmp17;
  cResult[8] = formatToPlainStringResult;
  cResult[9] = colorRow;
  tmp9 = tmp17;
  tmp11 = colorRow;
  tmp10 = formatToPlainStringResult;
  tmp8 = tmp13;
  tmp7 = tmp14;
  tmp6 = tmp15;
  tmp5 = tmp16;
}) : (function UserProfileThemePicker(arg0) {
  let I0tmru;
  let formatToPlainString;
  let formatToPlainString2;
  let intl;
  let intl3;
  let items;
  let obj4;
  let obj6;
  let onPressPrimary;
  let onPressSecondary;
  let primaryColor;
  let secondaryColor;
  let tmp2Result;
  let tmp2Result2;
  let v4X2kc;
  ({ primaryColor, secondaryColor } = arg0);
  ({ onPressPrimary, onPressSecondary } = arg0);
  const tmp = closure_8();
  const obj = utils_ColorUtils;
  const hex2intResult = obj.hex2int(PRIMARY_530);
  if (primaryColor == null) {
    primaryColor = hex2intResult;
  }
  if (secondaryColor == null) {
    secondaryColor = hex2intResult;
  }
  const obj2 = { style: tmp.colorRow, children: items };
  const obj3 = { color: primaryColor, label: intl.string(intl5.t.C3KTQk), accessibilityLabel: formatToPlainString(v4X2kc, obj4), onPress: onPressPrimary };
  intl = tmp2(1126).intl;
  const intl2 = tmp2(1126).intl;
  formatToPlainString = intl2.formatToPlainString;
  obj4 = { colorHex: tmp2Result.int2hex(primaryColor) };
  v4X2kc = tmp2(1126).t.v4X2kc;
  tmp2Result = utils_ColorUtils;
  items = [_false(closure_9, obj3), ];
  const obj5 = { color: secondaryColor, label: intl3.string(intl5.t["8elvy6"]), accessibilityLabel: formatToPlainString2(I0tmru, obj6), onPress: onPressSecondary };
  intl3 = tmp2(1126).intl;
  const intl4 = tmp2(1126).intl;
  formatToPlainString2 = intl4.formatToPlainString;
  obj6 = { colorHex: tmp2Result2.int2hex(secondaryColor) };
  I0tmru = tmp2(1126).t.I0tmru;
  tmp2Result2 = utils_ColorUtils;
  items[1] = _false(closure_9, obj5);
  return React3(View, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileThemePicker.tsx");

export default tmp5;
