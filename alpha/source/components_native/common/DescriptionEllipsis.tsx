// Module ID: 13918
// Function ID: 13919
// Name: DescriptionEllipsis
// Dependencies: [19, 17, 21, 5009, 575, 2]
// Exports: default

// Module 13918 (DescriptionEllipsis)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c2;
let map;
let size;
let size1;
const View = react_native.View;
({ jsx: map, jsxs: c2 } = Fragment);
let createStyles = createStyles_mod;
let obj = { topicEllipsis: size, topicEllipsisDot: size1 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", flexDirection: "row", borderRadius: nativeDefault.radii.xs, marginTop: 4, height: 12, width: 24 };
createStyles = createStyles.createStyles;
size1 = { backgroundColor: nativeDefault.colors.TEXT_MUTED, borderRadius: 2, margin: 1, height: 4, width: 4 };
let closure_3 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("components_native/common/DescriptionEllipsis.tsx");

export default function DescriptionEllipsis(dotStyle) {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  dotStyle = dotStyle.dotStyle;
  const style = dotStyle.style;
  const tmp = closure_3();
  const obj = { style: items, children: items2 };
  items = [tmp.topicEllipsis, style];
  const obj2 = { style: items1 };
  items1 = [tmp.topicEllipsisDot, dotStyle];
  items2 = [map(View, obj2), , ];
  const obj3 = { style: items3 };
  items3 = [tmp.topicEllipsisDot, dotStyle];
  items2[1] = map(View, obj3);
  const obj4 = { style: items4 };
  items4 = [tmp.topicEllipsisDot, dotStyle];
  items2[2] = map(View, obj4);
  return React2(View, obj);
};
