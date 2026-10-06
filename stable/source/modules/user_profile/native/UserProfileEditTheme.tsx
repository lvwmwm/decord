// Module ID: 14168
// Function ID: 14169
// Name: UserProfileEditTheme
// Dependencies: [19, 17, 21, 4837, 588, 558, 576, 1104, 6626, 1127, 9829, 5436, 4833, 7635, 7677, 7593, 4956, 14140, 4801, 14169, 1987, 7364, 2]
// Exports: default

// Module 14168 (UserProfileEditTheme)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1104 */;
import intl7 from "intl" /* 1127 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import Text_Text from "Text/Text" /* 4833 */;
import Pressables from "Pressables" /* 5436 */;
import getHigherContrastColor from "getHigherContrastColor" /* 6626 */;
import PencilIcon from "PencilIcon" /* 9829 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14140 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { gap: 6 }, sectionHeader: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, themeColorContainer: { flexDirection: "row", gap: 12, justifyContent: "center" }, colorSwatchContainer: { position: "relative", flex: 1, flexDirection: "column", alignItems: "center", gap: 4 }, colorSwatch: size, dropperIcon: { position: "absolute", top: 10, right: 10 }, overflowMenu: obj2 };
size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_6 = createStyles(obj);
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_530 = nativeDefault.unsafe_rawColors.PRIMARY_530;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let color;
  let items;
  let items1;
  let label;
  let onPress;
  let style;
  let tmp11;
  let tmp13;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(25);
  ({ color, label, accessibilityLabel, onPress, style } = arg0);
  const tmp4 = closure_6();
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
  const colorSwatchContainer = tmp4.colorSwatchContainer;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1127).intl;
    const stringResult = intl.string(intl7.t.Qp04hK);
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
  if (cResult[6] === style) {
    if (cResult[7] === tmp4.colorSwatch) {
      let tmp14;
      if (cResult[8] === tmp13) {
        tmp14 = cResult[9];
      }
      if (cResult[10] === tmp6) {
        let tmp15;
        if (cResult[11] === tmp4.dropperIcon) {
          tmp15 = cResult[12];
        }
        if (cResult[13] === accessibilityLabel) {
          if (cResult[14] === color) {
            if (cResult[15] === onPress) {
              if (cResult[16] === tmp14) {
                let tmp18;
                let tmp21;
                if (cResult[17] === tmp15) {
                  tmp18 = cResult[18];
                }
                if (cResult[19] !== label) {
                  const obj4 = { variant: "text-sm/normal", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: label };
                  const tmp23 = React3(Text_Text.Text, obj4);
                  cResult[19] = label;
                  cResult[20] = tmp23;
                  tmp21 = tmp23;
                } else {
                  tmp21 = cResult[20];
                }
                if (cResult[21] === tmp4.colorSwatchContainer) {
                  if (cResult[22] === tmp18) {
                    let tmp24;
                    if (cResult[23] === tmp21) {
                      tmp24 = cResult[24];
                    }
                    return tmp24;
                  }
                }
                const obj5 = { style: colorSwatchContainer, children: items1 };
                items1 = [tmp18, tmp21];
                const tmp27 = hasOwnProperty(View, obj5);
                cResult[21] = tmp4.colorSwatchContainer;
                cResult[22] = tmp18;
                cResult[23] = tmp21;
                cResult[24] = tmp27;
                tmp24 = tmp27;
              }
            }
          }
        }
        const obj6 = { accessibilityRole: "button", accessibilityLabel, accessibilityHint: tmp11, style: tmp14, onPress, children: tmp15 };
        const tmp20 = React3(Pressables.PressableOpacity, obj6, color);
        cResult[13] = accessibilityLabel;
        cResult[14] = color;
        cResult[15] = onPress;
        cResult[16] = tmp14;
        cResult[17] = tmp15;
        cResult[18] = tmp20;
        tmp18 = tmp20;
      }
      const obj7 = { size: "xs", color: tmp6, style: tmp4.dropperIcon };
      const tmp17 = React3(PencilIcon.PencilIcon, obj7);
      cResult[10] = tmp6;
      cResult[11] = tmp4.dropperIcon;
      cResult[12] = tmp17;
      tmp15 = tmp17;
    }
  }
  const items2 = [tmp4.colorSwatch, tmp13, style];
  cResult[6] = style;
  cResult[7] = tmp4.colorSwatch;
  cResult[8] = tmp13;
  cResult[9] = items2;
  tmp14 = items2;
}) : ((color) => {
  let accessibilityLabel;
  let intl;
  let items;
  let items1;
  let items2;
  let label;
  let obj6;
  let onPress;
  let style;
  color = color.color;
  ({ label, accessibilityLabel, onPress, style } = color);
  const tmp = closure_6();
  const obj = utils_ColorUtils;
  const int2hexResult = obj.int2hex(color);
  const obj3 = { backgroundColor: int2hexResult, colors: items };
  items = [WHITE, PRIMARY_530];
  const obj4 = { style: tmp.colorSwatchContainer, children: items2 };
  const obj2 = getHigherContrastColor;
  const higherContrastColor = obj2.getHigherContrastColor(obj3);
  const obj5 = { accessibilityRole: "button", accessibilityLabel, accessibilityHint: intl.string(intl7.t.Qp04hK), style: items1, onPress, children: React3(PencilIcon.PencilIcon, obj6) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl7.intl;
  items1 = [tmp.colorSwatch, { backgroundColor: int2hexResult }, style];
  obj6 = { size: "xs", color: higherContrastColor, style: tmp.dropperIcon };
  items2 = [React3(PressableOpacity, obj5, color), React3(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: label })];
  return hasOwnProperty(View, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditTheme.tsx");

export default function UserProfileEditTheme(pendingThemeColors) {
  let I0tmru;
  let closure_1;
  let formatToPlainString;
  let formatToPlainString2;
  let guildId;
  let intl;
  let intl2;
  let intl4;
  let intl6;
  let items;
  let items1;
  let items2;
  let obj11;
  let obj6;
  let obj9;
  let pendingAvatarSrc;
  let showResetMenu;
  let tmp6Result;
  let tmp6Result2;
  let user;
  let v4X2kc;
  const onPress = () => {
    const obj = { color: secondaryColor, onSelect: f115603, suggestedColors };
    showCustomColorPickerActionSheetDefault(obj);
  };
  ({ user, onProfileThemeColorsChanged: require, guildId, pendingAvatarSrc, showResetMenu } = pendingThemeColors);
  pendingThemeColors = pendingThemeColors.pendingThemeColors;
  if (showResetMenu === undefined) {
    showResetMenu = false;
  }
  let flag = pendingThemeColors.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  let primaryColor;
  let closure_4;
  let tmp = closure_6();
  let tmp3 = primaryColor;
  let tmp4 = require("useDisplayProfile")(user.id, guildId);
  const tmp2 = importDefault;
  importDefault = tmp4;
  const tmp5 = require("useProfileTheme")({ user, displayProfile: tmp4, pendingThemeColors, isPreview: flag });
  primaryColor = tmp5.primaryColor;
  const secondaryColor = tmp5.secondaryColor;
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(guildId, 80);
  }
  let obj = require("useAvatarColor");
  closure_4 = obj.useAvatarColors(pendingAvatarSrc, tmp2(tmp3[4]).unsafe_rawColors.PRIMARY_530, false);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      let tmp8 = closure_5;
      let obj2 = { style: tmp.container, children: items1 };
      const obj3 = { style: tmp.sectionHeader, children: items };
      const obj4 = { variant: "text-sm/semibold", color: "text-subtle", children: intl6.string(require("intl").t.DMeO2X) };
      const Text = tmp6(tmp3[12]).Text;
      intl6 = tmp6(tmp3[9]).intl;
      items = [closure_4(Text, obj4), ];
      if (showResetMenu) {
        const obj5 = {
          accessibilityRole: "button",
          accessibilityLabel: intl.string(require("intl").t["+1H47t"]),
          onPress() {
                  const obj = ActionSheetActionCreatorsDefault;
                  const obj2 = {
                    onResetTheme() {
                      let themeColors;
                      const tmp = closure_1(primaryColor[16]);
                      if (closure_1_1 != null) {
                        themeColors = closure_1_1.themeColors;
                      }
                      const items = [null, null];
                      let tmp4;
                      const tmp3 = closure_1_0;
                      if (!tmp(items, themeColors)) {
                        tmp4 = items;
                      }
                      tmp3(tmp4);
                    }
                  };
                  obj.openLazy(asyncRequire(14169, dependencyMap.paths), "Profile Theme", obj2);
                },
          children: closure_4(require("MoreHorizontalIcon").MoreHorizontalIcon, obj6)
        };
        const PressableOpacity = tmp6(tmp3[11]).PressableOpacity;
        intl = tmp6(tmp3[9]).intl;
        obj6 = { color: tmp.overflowMenu.tintColor };
        showResetMenu = tmp10(PressableOpacity, obj5);
      }
      items[1] = showResetMenu;
      items1 = [tmp8(secondaryColor, obj3), ];
      let tmp7 = closure_9;
      const obj7 = { style: tmp.themeColorContainer, children: items2 };
      const f115602 = (arg0) => {
        if (arg0 !== closure_1_2) {
          const items = [arg0, secondaryColor];
          let themeColors;
          const tmp4 = closure_1(primaryColor[16]);
          if (f115602 != null) {
            themeColors = f115602.themeColors;
          }
          let tmp8;
          const tmp7 = primaryColor;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          tmp7(tmp8);
        }
      };
      const obj8 = { onPress, color: primaryColor, label: intl2.string(require("intl").t.C3KTQk), accessibilityLabel: formatToPlainString(v4X2kc, obj9) };
      intl2 = tmp6(tmp3[9]).intl;
      const intl3 = tmp6(tmp3[9]).intl;
      formatToPlainString = intl3.formatToPlainString;
      obj9 = { colorHex: tmp6Result.int2hex(primaryColor) };
      v4X2kc = tmp6(tmp3[9]).t.v4X2kc;
      tmp6Result = require("utils/ColorUtils");
      items2 = [closure_4(closure_9, obj8), ];
      const f115603 = (arg0) => {
        if (arg0 !== closure_1_3) {
          const items = [closure_1_2, arg0];
          let themeColors;
          const tmp4 = closure_1(primaryColor[16]);
          if (f115603 != null) {
            themeColors = f115603.themeColors;
          }
          let tmp8;
          const tmp7 = secondaryColor;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          tmp7(tmp8);
        }
      };
      const obj10 = { color: secondaryColor, onPress, label: intl4.string(require("intl").t["8elvy6"]), accessibilityLabel: formatToPlainString2(I0tmru, obj11) };
      intl4 = tmp6(tmp3[9]).intl;
      const intl5 = tmp6(tmp3[9]).intl;
      formatToPlainString2 = intl5.formatToPlainString;
      obj11 = { colorHex: tmp6Result2.int2hex(secondaryColor) };
      I0tmru = tmp6(tmp3[9]).t.I0tmru;
      tmp6Result2 = require("utils/ColorUtils");
      items2[1] = closure_4(closure_9, obj10);
      items1[1] = tmp8(secondaryColor, obj7);
      return tmp8(secondaryColor, obj2);
    }
  }
  return null;
};
