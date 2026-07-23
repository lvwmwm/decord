// Module ID: 13590
// Function ID: 104440
// Name: ColorSwatch
// Dependencies: [31, 27, 33, 4130, 689, 665, 5509, 4660, 1212, 9106, 4126, 7887, 8236, 7812, 4276, 3946, 1334, 13567, 4098, 13591, 1934, 8968, 2]
// Exports: default

// Module 13590 (ColorSwatch)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function ColorSwatch(color) {
  let accessibilityLabel;
  let label;
  let onPress;
  let style;
  color = color.color;
  ({ label, accessibilityLabel, onPress, style } = color);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(665) /* pad2 */;
  const int2hexResult = obj.int2hex(color);
  let obj1 = require(5509) /* getHigherContrastColor */;
  const items = [WHITE, PRIMARY_530];
  obj = { style: tmp.colorSwatchContainer };
  const higherContrastColor = obj1.getHigherContrastColor({ backgroundColor: int2hexResult, colors: items });
  obj = { accessibilityRole: "button", accessibilityLabel };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityHint = intl.string(require(1212) /* getSystemLocale */.t.Qp04hK);
  const items1 = [tmp.colorSwatch, { backgroundColor: int2hexResult }, style];
  obj.style = items1;
  obj.onPress = onPress;
  obj1 = { size: "xs", color: higherContrastColor, style: tmp.dropperIcon };
  obj.children = callback(require(9106) /* PencilIcon */.PencilIcon, obj1);
  const items2 = [callback(require(4660) /* PressableBase */.PressableOpacity, obj, color), ];
  const obj2 = { variant: "text-sm/normal", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: label };
  items2[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items2;
  return callback2(View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { gap: 6 }, sectionHeader: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, themeColorContainer: { flexDirection: "row", gap: 12, justifyContent: "center" }, colorSwatchContainer: { position: "relative", flex: 1, flexDirection: "column", alignItems: "center", gap: 4 } };
_createForOfIteratorHelperLoose = { height: 50, width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.colorSwatch = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.dropperIcon = { position: "absolute", top: 10, right: 10 };
_createForOfIteratorHelperLoose.overflowMenu = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const WHITE = require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE;
const PRIMARY_530 = require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_530;
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileEditTheme.tsx");

export default function UserProfileEditTheme(isTryItOut) {
  let guildId;
  let pendingAvatarSrc;
  let require;
  let showResetMenu;
  let user;
  ({ user, onProfileThemeColorsChanged: require, guildId, pendingAvatarSrc, showResetMenu } = isTryItOut);
  if (showResetMenu === undefined) {
    showResetMenu = false;
  }
  let flag = isTryItOut.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let primaryColor;
  let secondaryColor;
  let callback;
  function handleProfileThemeColorsChanged(items, arg1) {
    let themeColors;
    if (null != _undefined) {
      themeColors = _undefined.themeColors;
    }
    let tmp5;
    if (!tmp(items, themeColors)) {
      tmp5 = items;
    }
    closure_0(tmp5);
  }
  function makeOnPress(primaryColor, arg1) {
    let closure_0 = primaryColor;
    let closure_1 = arg1;
    return () => {
      let obj = outer2_0(primaryColor[15]);
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(outer2_0(primaryColor[16]).DismissibleContent.PROFILE_THEMES_SETTINGS_VIEWED_V2);
      obj = { color: closure_0, onSelect: closure_1, suggestedColors: outer1_4 };
      callback(primaryColor[17])(obj);
    };
  }
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(primaryColor[11])(user.id, guildId);
  importDefault = tmp2;
  let obj = { user, displayProfile: tmp2, pendingThemeColors: isTryItOut.pendingThemeColors, isPreview: flag };
  const tmp3 = importDefault(primaryColor[12])(obj);
  primaryColor = tmp3.primaryColor;
  secondaryColor = tmp3.secondaryColor;
  if (null == pendingAvatarSrc) {
    pendingAvatarSrc = user.getAvatarURL(guildId, 80);
  }
  let obj1 = require(primaryColor[13]);
  callback = obj1.useAvatarColors(pendingAvatarSrc, importDefault(primaryColor[4]).unsafe_rawColors.PRIMARY_530, false);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      obj = { style: tmp.container };
      obj = { style: tmp.sectionHeader };
      obj1 = { variant: "text-sm/semibold", color: "text-subtle" };
      const intl6 = require(primaryColor[8]).intl;
      obj1.children = intl6.string(require(primaryColor[8]).t.DMeO2X);
      let items = [callback(require(primaryColor[10]).Text, obj1), ];
      if (showResetMenu) {
        const obj2 = { accessibilityRole: "button" };
        const intl = require(primaryColor[8]).intl;
        obj2.accessibilityLabel = intl.string(require(primaryColor[8]).t["+1H47t"]);
        obj2.onPress = function onPress() {
          let obj = _undefined(primaryColor[18]);
          obj = {
            onResetTheme(arg0) {
              outer1_5([null, null]);
            }
          };
          obj.openLazy(outer1_0(primaryColor[20])(primaryColor[19], primaryColor.paths), "Profile Theme", obj);
        };
        const obj3 = { color: tmp.overflowMenu.tintColor };
        obj2.children = callback(require(primaryColor[21]).MoreHorizontalIcon, obj3);
        showResetMenu = callback(require(primaryColor[7]).PressableOpacity, obj2);
      }
      items[1] = showResetMenu;
      obj.children = items;
      const items1 = [handleProfileThemeColorsChanged(secondaryColor, obj), ];
      const obj4 = { style: tmp.themeColorContainer };
      const obj5 = {
        onPress: makeOnPress(primaryColor, (arg0) => {
              if (arg0 !== primaryColor) {
                const items = [arg0, secondaryColor];
                handleProfileThemeColorsChanged(items);
              }
            }),
        color: primaryColor
      };
      const intl2 = require(primaryColor[8]).intl;
      obj5.label = intl2.string(require(primaryColor[8]).t.C3KTQk);
      const intl3 = require(primaryColor[8]).intl;
      const obj6 = {};
      let obj7 = require(primaryColor[5]);
      obj6.colorHex = obj7.int2hex(primaryColor);
      obj5.accessibilityLabel = intl3.formatToPlainString(require(primaryColor[8]).t.v4X2kc, obj6);
      const items2 = [callback(ColorSwatch, obj5), ];
      obj7 = {
        color: secondaryColor,
        onPress: makeOnPress(secondaryColor, (arg0) => {
              if (arg0 !== secondaryColor) {
                const items = [primaryColor, arg0];
                handleProfileThemeColorsChanged(items);
              }
            })
      };
      const intl4 = require(primaryColor[8]).intl;
      obj7.label = intl4.string(require(primaryColor[8]).t["8elvy6"]);
      const intl5 = require(primaryColor[8]).intl;
      const obj8 = { colorHex: require(primaryColor[5]).int2hex(secondaryColor) };
      obj7.accessibilityLabel = intl5.formatToPlainString(require(primaryColor[8]).t.I0tmru, obj8);
      items2[1] = callback(ColorSwatch, obj7);
      obj4.children = items2;
      items1[1] = handleProfileThemeColorsChanged(secondaryColor, obj4);
      obj.children = items1;
      return handleProfileThemeColorsChanged(secondaryColor, obj);
    }
  }
  return null;
};
