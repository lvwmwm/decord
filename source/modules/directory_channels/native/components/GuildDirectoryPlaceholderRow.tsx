// Module ID: 10073
// Function ID: 77762
// Dependencies: [31, 27, 33, 4130, 689, 4973, 10074, 2]

// Module 10073
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let obj = { row: { flexDirection: "row", padding: 16 }, rowInner: { flex: 1 } };
obj = { width: 40, height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden", marginRight: 16, backgroundColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj.placeholderAvatar = obj;
_createForOfIteratorHelperLoose = { height: 15, borderRadius: 5, backgroundColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj.placeholderText = _createForOfIteratorHelperLoose;
obj.placeholderBody = { width: "100%", marginTop: 10 };
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(() => {
  const tmp = callback3();
  const importDefault = tmp;
  const sum = Math.floor(2 * Math.random()) + 2;
  let closure_1 = Math.floor(10 * Math.random());
  let obj = { style: tmp.row };
  obj = { style: tmp.placeholderAvatar };
  const sum1 = Math.floor(50 * Math.random()) + 10;
  let items = [callback(View, obj), ];
  obj = { style: tmp.rowInner };
  const obj1 = {};
  const items1 = [tmp.placeholderText, { width: "" + sum1 + "%" }];
  obj1.style = items1;
  const items2 = [callback(View, obj1), ];
  const array = new Array(sum);
  const obj2 = { width: "" + sum1 + "%" };
  items2[1] = array.fill(undefined).map((arg0, arg1) => {
    let obj = {};
    const items = [, , ];
    ({ placeholderText: arr[0], placeholderBody: arr[1] } = tmp);
    obj = { width: "" + tmp(table[6])(table + arg1) + "%" };
    items[2] = obj;
    obj.style = items;
    return outer1_3(outer1_2, obj, arg1);
  });
  obj.children = items2;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryPlaceholderRow.tsx");

export default memoResult;
