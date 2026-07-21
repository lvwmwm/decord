// Module ID: 7186
// Function ID: 57838
// Name: FormTitle
// Dependencies: []
// Exports: default

// Module 7186 (FormTitle)
let Platform;
importAll(dependencyMap[0]);
({ View: closure_2, Platform } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
let num = 58;
if (obj.isAndroid()) {
  num = 48;
}
let obj1 = arg1(dependencyMap[4]);
let num2 = 48;
if (obj1.isAndroid()) {
  num2 = 56;
}
const tmp4 = arg1(dependencyMap[3]);
obj = { titleWrapper: { 1449229240: true, 371666258: true, -73375226: true, -1677322926: true }, horizontalPadding: { paddingHorizontal: 16 }, thinTitle: { paddingTop: 26 } };
obj = { fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_SEMIBOLD, fontSize: 13, color: importDefault(dependencyMap[6]).colors.TEXT_SUBTLE };
obj.titleText = obj;
obj1 = { color: importDefault(dependencyMap[6]).unsafe_rawColors.RED_400 };
obj.error = obj1;
let closure_5 = arg1(dependencyMap[5]).createStyles(obj);
const obj3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/void/Form/native/FormTitle.tsx");

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
  const tmp = callback();
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
  const items2 = [closure_3(arg1(dependencyMap[7]).LegacyText, obj), icon];
  obj.children = items2;
  return closure_4(closure_2, obj);
};
export const FORM_TITLE_HEIGHT = num;
export const THIN_FORM_TITLE_HEIGHT = num2;
