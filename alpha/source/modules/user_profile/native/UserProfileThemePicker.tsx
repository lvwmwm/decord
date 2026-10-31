// Module ID: 16485
// Function ID: 16486
// Name: UserProfileThemePicker
// Dependencies: [19, 17, 21, 575, 5014, 1090, 7373, 6980, 1113, 10232, 5624, 2]
// Exports: default

// Module 16485 (UserProfileThemePicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import intl5 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import Pressables from "Pressables" /* 6980 */;
import getHigherContrastColor from "getHigherContrastColor" /* 7373 */;
import PencilIcon from "PencilIcon" /* 10232 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let rect;
let size;
function ColorButton(arg0) {
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
}
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
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileThemePicker.tsx");

export default function UserProfileThemePicker(arg0) {
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
  intl = tmp2(1113).intl;
  const intl2 = tmp2(1113).intl;
  formatToPlainString = intl2.formatToPlainString;
  obj4 = { colorHex: tmp2Result.int2hex(primaryColor) };
  v4X2kc = tmp2(1113).t.v4X2kc;
  tmp2Result = utils_ColorUtils;
  items = [_false(ColorButton, obj3), ];
  const obj5 = { color: secondaryColor, label: intl3.string(intl5.t["8elvy6"]), accessibilityLabel: formatToPlainString2(I0tmru, obj6), onPress: onPressSecondary };
  intl3 = tmp2(1113).intl;
  const intl4 = tmp2(1113).intl;
  formatToPlainString2 = intl4.formatToPlainString;
  obj6 = { colorHex: tmp2Result2.int2hex(secondaryColor) };
  I0tmru = tmp2(1113).t.I0tmru;
  tmp2Result2 = utils_ColorUtils;
  items[1] = _false(ColorButton, obj5);
  return React3(View, obj2);
};
