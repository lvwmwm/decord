// Module ID: 16494
// Function ID: 16495
// Name: FormRowPlaceholder
// Dependencies: [19, 17, 7303, 21, 4836, 576, 16462, 4566, 2]
// Exports: default

// Module 16494 (FormRowPlaceholder)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
let size1;
let size2;
let View = react_native.View;
const SEARCH_ROW_TAP_STATE_PADDING = SearchConstants.SEARCH_ROW_TAP_STATE_PADDING;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { itemContainer: { flexDirection: "row", paddingHorizontal: 16, overflow: "hidden", height: 64, paddingVertical: SEARCH_ROW_TAP_STATE_PADDING, alignItems: "center" }, avatar: size, innerContainer: { justifyContent: "center", flex: 1 }, upperText: size1, lowerText: size2 };
size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xl, marginRight: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
size1 = { width: "50%", borderRadius: nativeDefault.radii.md, height: 16, marginBottom: 8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
size2 = { justifyContent: "center", width: "100%", borderRadius: nativeDefault.radii.md, height: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx");

export default function FormRowPlaceholderItem(style) {
  let items;
  let items1;
  let items2;
  style = style.style;
  const tmp = closure_6();
  const obj = usePlaceholderStyles;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  const obj2 = { style: items, pointerEvents: "none", children: items1 };
  items = [placeholderAnimatedStyle, tmp.itemContainer, style];
  const obj3 = { style: tmp.avatar };
  View = ReanimatedRexportDefault.View;
  items1 = [React3(View, obj3), ];
  const obj4 = { style: tmp.innerContainer, children: items2 };
  items2 = [, ];
  const obj5 = { style: tmp.upperText };
  items2[0] = React3(View, obj5);
  const obj6 = { style: tmp.lowerText };
  items2[1] = React3(View, obj6);
  items1[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj2);
};
