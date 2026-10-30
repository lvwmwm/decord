// Module ID: 7215
// Function ID: 7216
// Name: ViewEmptyState
// Dependencies: [19, 17, 1072, 21, 5009, 6717, 575, 5712, 1188, 2]
// Exports: default

// Module 7215 (ViewEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1188 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import TextStyles from "TextStyles" /* 6717 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 36 }, emptyImage: { width: 170, height: 130 }, fixOpticalIllusion: { marginTop: -50, alignItems: "center" }, emptyLabel: obj2, emptyText: { fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 13, marginTop: 8, marginHorizontal: 10, opacity: 0.6, fontWeight: "400" } };
obj2 = { textAlign: "center", marginTop: 32, opacity: 0.8 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("components_native/common/ViewEmptyState.tsx");

export default function ViewEmptyState(arg0) {
  let items;
  let items1;
  let items2;
  let label;
  let obj2;
  let source;
  let style;
  let text;
  let tmp4;
  ({ label, text } = arg0);
  ({ source, style } = arg0);
  const tmp = closure_6();
  const obj = { style: items, children: tmp4(View, obj2) };
  items = [tmp.emptyContainer, style];
  obj2 = { style: tmp.fixOpticalIllusion, children: items1 };
  items1 = [, , ];
  const obj3 = { resizeMode: "contain", source, style: tmp.emptyImage };
  items1[0] = React3(FastImageDefault, obj3);
  let tmp2Result = null;
  tmp4 = hasOwnProperty;
  if (null != label) {
    const obj4 = { style: tmp.emptyLabel, children: label.toUpperCase() };
    const LegacyText = native.LegacyText;
    tmp2Result = tmp2(LegacyText, obj4);
  }
  items1[1] = tmp2Result;
  let tmp2Result2 = null;
  if (null != text) {
    const obj5 = { style: items2, children: text };
    items2 = [, ];
    ({ emptyLabel: arr3[0], emptyText: arr3[1] } = tmp);
    tmp2Result2 = tmp2(native.LegacyText, obj5);
  }
  items1[2] = tmp2Result2;
  return React3(View, obj);
};
