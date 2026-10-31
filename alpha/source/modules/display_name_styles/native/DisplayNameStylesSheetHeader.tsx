// Module ID: 17320
// Function ID: 17321
// Name: DisplayNameStylesSheetHeader
// Dependencies: [19, 17, 21, 5014, 575, 5624, 2]
// Exports: default

// Module 17320 (DisplayNameStylesSheetHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, row: obj3, title: obj4, titleText: { textAlign: "center" }, leading: obj5, trailing: obj6 };
obj2 = { paddingTop: nativeDefault.space.PX_6, paddingBottom: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { minHeight: nativeDefault.space.PX_32, justifyContent: "center" };
obj4 = { paddingHorizontal: nativeDefault.space.PX_80, alignItems: "center" };
obj5 = { position: "absolute", left: nativeDefault.space.PX_16 };
obj6 = { position: "absolute", right: nativeDefault.space.PX_16, minWidth: nativeDefault.space.PX_64 };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesSheetHeader.tsx");

export default function DisplayNameStylesSheetHeader(title) {
  let items;
  let leading;
  let obj2;
  let obj4;
  let tmp4;
  let trailing;
  ({ leading, trailing } = title);
  title = title.title;
  const tmp = closure_5();
  const obj = { style: tmp.header, children: tmp4(View, obj2) };
  obj2 = { style: tmp.row, children: items };
  const obj3 = { style: tmp.title, children: _false(Text_Text.Heading, obj4) };
  obj4 = { variant: "redesign/heading-18/bold", color: "text-default", style: tmp.titleText, children: title };
  items = [_false(View, obj3), , ];
  let tmp2Result = null != leading;
  tmp4 = React3;
  if (tmp2Result) {
    const obj5 = { style: tmp.leading, children: leading };
    tmp2Result = tmp2(tmp3, obj5);
  }
  items[1] = tmp2Result;
  let tmp2Result2 = null != trailing;
  if (tmp2Result2) {
    const obj6 = { style: tmp.trailing, children: trailing };
    tmp2Result2 = tmp2(tmp3, obj6);
  }
  items[2] = tmp2Result2;
  return _false(View, obj);
};
