// Module ID: 8911
// Function ID: 70323
// Name: SecureFramesCodeGrid
// Dependencies: [31, 27, 482, 33, 4130, 689, 4126, 2]
// Exports: default

// Module 8911 (SecureFramesCodeGrid)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function SecureFramesCodeGrid(chunks) {
  chunks = chunks.chunks;
  const columns = chunks.columns;
  const React = _createForOfIteratorHelperLoose();
  let items = [chunks, columns];
  const memo = React.useMemo(() => {
    const items = [];
    const rounded = Math.ceil(chunks.length / columns);
    for (let num = 0; num < rounded; num = num + 1) {
      let items1 = [];
      let tmp2 = columns;
      for (let num2 = 0; num2 < columns; num2 = num2 + 1) {
        let tmp3 = columns;
        let tmp4 = chunks;
        let arr = items1.push(chunks[num * columns + num2]);
      }
      arr = items.push(items1);
    }
    return items;
  }, items);
  return callback(closure_7, {
    children: memo.map((arr) => {
      let obj = {};
      obj = {
        style: result.row,
        children: arr.map((children) => {
          const obj = { style: outer1_2.codeText, variant: "text-md/normal", color: "text-default", children };
          return outer2_5(chunks(columns[6]).Text, obj, "" + children + "-" + arg1);
        })
      };
      const items = [outer1_5(outer1_4, obj), ];
      let tmp3 = arg1 < memo.length - 1;
      if (tmp3) {
        obj = { style: result.divider };
        tmp3 = outer1_5(outer1_4, obj);
      }
      items[1] = tmp3;
      obj.children = items;
      return outer1_6(outer1_4, obj, "" + arr.join(" ") + "-" + arg1);
    })
  });
}
({ ActivityIndicator: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { codeText: _createForOfIteratorHelperLoose, row: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 8 } };
_createForOfIteratorHelperLoose = { fontFamily: require("sum").Fonts.CODE_NORMAL, divider: { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE } };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.lg, paddingVertical: 10, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
_createForOfIteratorHelperLoose.codeHeader = obj2;
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, paddingVertical: 8, paddingHorizontal: 16, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.code = obj3;
_createForOfIteratorHelperLoose.loading = { minHeight: 126 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const result = require("sum").fileFinishedImporting("modules/rtc/native/SecureFramesCode.tsx");

export default function SecureFramesCode(chunks) {
  let columns;
  let title;
  let trailing;
  chunks = chunks.chunks;
  ({ title, trailing, columns } = chunks);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = { style: tmp.codeHeader };
  obj = { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: title };
  const items = [callback(require(4126) /* Text */.Text, obj), trailing];
  obj.children = items;
  const items1 = [callback2(closure_4, obj), ];
  const obj1 = { style: tmp.code };
  if (null != chunks) {
    const obj2 = { chunks, columns };
    let tmp8 = callback(SecureFramesCodeGrid, obj2);
  } else {
    const obj3 = { style: tmp.loading };
    tmp8 = callback(closure_3, obj3);
  }
  obj1.children = tmp8;
  items1[1] = callback(closure_4, obj1);
  obj.children = items1;
  return callback2(closure_7, obj);
};
