// Module ID: 6474
// Function ID: 6475
// Name: ViewEmptyState
// Dependencies: [19, 17, 1074, 21, 4836, 5836, 576, 1177, 2]
// Exports: default

// Module 6474 (ViewEmptyState)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ View: c2, Image: c3 } = react_native);
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
  const obj = { style: items, children: tmp4(React2, obj2) };
  items = [tmp.emptyContainer, style];
  obj2 = { style: tmp.fixOpticalIllusion, children: items1 };
  items1 = [, , ];
  const obj3 = { resizeMode: "contain", source, style: tmp.emptyImage };
  items1[0] = React3(_false, obj3);
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
  return React3(React2, obj);
};
