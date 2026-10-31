// Module ID: 12621
// Function ID: 12622
// Name: ConjureTipGutterRow
// Dependencies: [19, 17, 21, 5014, 12622, 5624, 575, 2]
// Exports: default

// Module 12621 (ConjureTipGutterRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12622 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((arg0, marginTop) => {
  const obj = { row: { flexDirection: "row", alignItems: "flex-start", paddingHorizontal: ConjureNativeStatusLine.MESSAGE_EDGE_INSET }, gutter: size, content: { flex: 1, minWidth: 0 } };
  ({ flexDirection: "row", alignItems: "flex-start", paddingHorizontal: ConjureNativeStatusLine.MESSAGE_EDGE_INSET });
  size = { width: ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE, marginRight: ConjureNativeStatusLine.MESSAGE_AVATAR_GAP, height: Text_Text.TextStyleSheet[arg0].lineHeight, marginTop, alignItems: "center", justifyContent: "center" };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipGutterRow.tsx");

export default function ConjureTipGutterRow(firstLineInset) {
  let ICON_MUTED;
  let firstLine;
  let icon;
  let items;
  let tone;
  let num = firstLineInset.firstLineInset;
  ({ icon, tone, firstLine } = firstLineInset);
  if (num === undefined) {
    num = 0;
  }
  const children = firstLineInset.children;
  const tmp = closure_6(firstLine, num);
  const obj = { style: tmp.row, children: items };
  const obj2 = { style: tmp.gutter, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: React3(icon, { size: "sm", color: ICON_MUTED }) };
  const tmp2 = hasOwnProperty;
  if ("brand" === tone) {
    ICON_MUTED = nativeDefault.colors.ICON_BRAND;
  } else {
    ICON_MUTED = nativeDefault.colors.ICON_MUTED;
  }
  items = [React3(View, obj2), ];
  const obj3 = { style: tmp.content, children };
  items[1] = React3(View, obj3);
  return tmp2(View, obj);
};
