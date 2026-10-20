// Module ID: 12181
// Function ID: 12182
// Name: ConjureTipGutterRow
// Dependencies: [19, 17, 21, 4945, 12182, 5195, 558, 576, 587, 2]

// Module 12181 (ConjureTipGutterRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5195 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12182 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTipGutterRow(arg0) {
  let ICON_MUTED;
  let children;
  let firstLine;
  let firstLineInset;
  let icon;
  let items;
  let tone;
  const obj = react2;
  const cResult = obj.c(13);
  ({ icon, firstLineInset, children } = arg0);
  let num = 0;
  ({ tone, firstLine } = arg0);
  const tmp3 = closure_6;
  if (undefined !== firstLineInset) {
    num = firstLineInset;
  }
  const tmp3Result = tmp3(firstLine, num);
  if ("brand" === tone) {
    ICON_MUTED = nativeDefault.colors.ICON_BRAND;
  } else {
    ICON_MUTED = nativeDefault.colors.ICON_MUTED;
  }
  if (cResult[0] === icon) {
    let tmp7;
    if (cResult[1] === ICON_MUTED) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === tmp3Result.gutter) {
      let tmp9;
      if (cResult[4] === tmp7) {
        tmp9 = cResult[5];
      }
      if (cResult[6] === children) {
        let tmp13;
        if (cResult[7] === tmp3Result.content) {
          tmp13 = cResult[8];
        }
        if (cResult[9] === tmp3Result.row) {
          if (cResult[10] === tmp9) {
            let tmp17;
            if (cResult[11] === tmp13) {
              tmp17 = cResult[12];
            }
            return tmp17;
          }
        }
        const obj2 = { style: tmp3Result.row, children: items };
        items = [tmp9, tmp13];
        const tmp20 = hasOwnProperty(View, obj2);
        cResult[9] = tmp3Result.row;
        cResult[10] = tmp9;
        cResult[11] = tmp13;
        cResult[12] = tmp20;
        tmp17 = tmp20;
      }
      const obj3 = { style: tmp3Result.content, children };
      const tmp16 = React3(View, obj3);
      cResult[6] = children;
      cResult[7] = tmp3Result.content;
      cResult[8] = tmp16;
      tmp13 = tmp16;
    }
    const obj4 = { style: tmp3Result.gutter, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp7 };
    const tmp12 = React3(View, obj4);
    cResult[3] = tmp3Result.gutter;
    cResult[4] = tmp7;
    cResult[5] = tmp12;
    tmp9 = tmp12;
  }
  const tmp8 = React3(icon, { size: "sm", color: ICON_MUTED });
  cResult[0] = icon;
  cResult[1] = ICON_MUTED;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : (function ConjureTipGutterRow(firstLineInset) {
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
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipGutterRow.tsx");

export default tmp4;
