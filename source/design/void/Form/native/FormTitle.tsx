// Module ID: 7192
// Function ID: 57895
// Name: FormTitle
// Dependencies: [31, 27, 653, 33, 477, 4130, 689, 1273, 2]
// Exports: default

// Module 7192 (FormTitle)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import set from "set";
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "ME";

let Platform;
let closure_2;
let closure_3;
let closure_4;
const require = arg1;
({ View: closure_2, Platform } = get_ActivityIndicator);
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let num = 58;
if (set.isAndroid()) {
  num = 48;
}
let num2 = 48;
if (set.isAndroid()) {
  num2 = 56;
}
set = { titleWrapper: { flexDirection: "row", justifyContent: "space-between", paddingTop: 16, paddingBottom: 16 }, horizontalPadding: { paddingHorizontal: 16 }, thinTitle: { paddingTop: 26 } };
set = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
set.titleText = set;
set = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
set.error = set;
set = _createForOfIteratorHelperLoose.createStyles(set);
const result = set.fileFinishedImporting("design/void/Form/native/FormTitle.tsx");

export default function FormTitle(thinTitle) {
  let icon;
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
  const tmp = set();
  let obj = {};
  const items = [tmp.titleWrapper, , , ];
  if (flag) {
    flag = tmp.thinTitle;
  }
  items[1] = flag;
  items[2] = !flag3 && tmp.horizontalPadding;
  items[3] = viewStyle;
  obj.style = items;
  obj = {};
  const items1 = [tmp.titleText, textStyle, ];
  if (flag2) {
    flag2 = tmp.error;
  }
  items1[2] = flag2;
  obj.style = items1;
  obj.numberOfLines = numberOfLines;
  obj.accessibilityRole = "header";
  let formatted = title;
  if (uppercaseTitle) {
    formatted = title.toUpperCase();
  }
  obj.children = formatted;
  const items2 = [closure_3(require(1273) /* Button */.LegacyText, obj), icon];
  obj.children = items2;
  return closure_4(closure_2, obj);
};
export const FORM_TITLE_HEIGHT = num;
export const THIN_FORM_TITLE_HEIGHT = num2;
