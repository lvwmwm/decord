// Module ID: 8063
// Function ID: 8064
// Name: FormTitle
// Dependencies: [19, 17, 1074, 21, 1364, 4836, 576, 1177, 2]
// Exports: default

// Module 8063 (FormTitle)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let Platform;
let c2;
let c3;
let closure_4;
let obj2;
({ View: c2, Platform } = react_native);
const Fonts = Constants.Fonts;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let PlatformUtils = PlatformUtils_mod;
let num = 58;
if (PlatformUtils.isAndroid()) {
  num = 48;
}
PlatformUtils = PlatformUtils_mod;
let num2 = 48;
if (PlatformUtils.isAndroid()) {
  num2 = 56;
}
let createStyles = createStyles_mod;
let obj = { titleWrapper: { flexDirection: "row", justifyContent: "space-between", paddingTop: 16, paddingBottom: 16 }, horizontalPadding: { paddingHorizontal: 16 }, thinTitle: { paddingTop: 26 }, titleText: obj2, error: { color: nativeDefault.unsafe_rawColors.RED_400 } };
obj2 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
({ color: nativeDefault.unsafe_rawColors.RED_400 });
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("design/void/Form/native/FormTitle.tsx");

export default function FormTitle(thinTitle) {
  let formatted;
  let icon;
  let items2;
  let numberOfLines;
  let textStyle;
  let title;
  let uppercaseTitle;
  let viewStyle;
  ({ title, uppercaseTitle } = thinTitle);
  ({ icon, numberOfLines } = thinTitle);
  if (uppercaseTitle === undefined) {
    uppercaseTitle = true;
  }
  let flag = thinTitle.thinTitle;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = thinTitle.error;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = thinTitle.inset;
  if (flag3 === undefined) {
    flag3 = false;
  }
  ({ viewStyle, textStyle } = thinTitle);
  const tmp = closure_5();
  const items = [tmp.titleWrapper, , , ];
  const tmp2 = React3;
  const tmp3 = React2;
  if (flag) {
    flag = tmp.thinTitle;
  }
  items[1] = flag;
  const obj = { style: items, children: items2 };
  const tmp4 = !flag3 && tmp.horizontalPadding;
  items[2] = tmp4;
  items[3] = viewStyle;
  const items1 = [tmp.titleText, textStyle, ];
  const LegacyText = native.LegacyText;
  const tmp5 = _false;
  if (flag2) {
    flag2 = tmp.error;
  }
  const obj2 = { style: items1, numberOfLines, accessibilityRole: "header", children: formatted };
  items1[2] = flag2;
  formatted = title;
  if (uppercaseTitle) {
    formatted = title.toUpperCase();
  }
  items2 = [tmp5(LegacyText, obj2), icon];
  return tmp2(tmp3, obj);
};
export const FORM_TITLE_HEIGHT = num;
export const THIN_FORM_TITLE_HEIGHT = num2;
