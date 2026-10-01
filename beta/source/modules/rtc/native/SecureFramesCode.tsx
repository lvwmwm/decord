// Module ID: 9178
// Function ID: 9179
// Name: SecureFramesCode
// Dependencies: [19, 17, 1085, 21, 4836, 576, 4832, 2]
// Exports: default

// Module 9178 (SecureFramesCode)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 4832 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function SecureFramesCodeGrid(chunks) {
  let row;
  chunks = chunks.chunks;
  const columns = chunks.columns;
  react = closure_8();
  let items = [chunks, columns];
  const memo = react.useMemo(() => {
    let num;
    const items = [];
    const rounded = Math.ceil(chunks.length / columns);
    for (let num = 0; num < rounded; num = num + 1) {
      let num2;
      let items1 = [];
      for (let num2 = 0; num2 < columns; num2 = num2 + 1) {
        let arr = items1.push(chunks[num * columns + num2]);
      }
      let arr2 = items.push(items1);
    }
    return items;
  }, items);
  let obj = {
    children: memo.map((join, index) => {
      let codeText;
      let obj = {
        style: row.row,
        children: join.map((children, index) => {
          const obj = { style: codeText.codeText, variant: "text-md/normal", color: "text-default", children };
          return closure_2_5(chunks(columns[6]).Text, obj, "" + children + "-" + index);
        })
      };
      const children = [hasOwnProperty(React3, obj), ];
      let tmp3Result = index < memo.length - 1;
      const tmp = metroRequire;
      const tmp3 = hasOwnProperty;
      const tmp4 = row;
      if (tmp3Result) {
        const obj2 = { style: tmp4.divider };
        tmp3Result = tmp3(tmp2, obj2);
      }
      children[1] = tmp3Result;
      return tmp(React3, { children }, "" + join.join(" ") + "-" + index);
    })
  };
  return closure_5(closure_7, obj);
}
let react = react_mod;
({ ActivityIndicator: c3, View: closure_4 } = react_native);
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { codeText: { fontFamily: Fonts.CODE_NORMAL }, row: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 8 }, divider: obj2, codeHeader: obj3, code: obj4, loading: { minHeight: 126 } };
obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, paddingVertical: 10, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
obj4 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, paddingVertical: 8, paddingHorizontal: 16, borderBottomRightRadius: nativeDefault.radii.lg, borderBottomLeftRadius: nativeDefault.radii.lg };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesCode.tsx");

export default function SecureFramesCode(chunks) {
  let columns;
  let items;
  let title;
  let tmp5Result;
  let trailing;
  chunks = chunks.chunks;
  ({ title, trailing, columns } = chunks);
  const tmp = closure_8();
  const obj = { style: tmp.codeHeader, children: items };
  items = [hasOwnProperty(Text_Text.Text, { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: title }), trailing];
  const items1 = [metroRequire(React3, obj), ];
  const obj2 = { style: tmp.code, children: tmp5Result };
  const tmp2 = metroRequire;
  const tmp3 = metroImportDefault;
  const tmp4 = React3;
  if (null != chunks) {
    const obj3 = { chunks, columns };
    tmp5Result = tmp5(SecureFramesCodeGrid, obj3);
  } else {
    const obj4 = { style: tmp.loading };
    tmp5Result = tmp5(_false, obj4);
  }
  const obj5 = { children: items1 };
  items1[1] = hasOwnProperty(tmp4, obj2);
  return tmp2(tmp3, obj5);
};
