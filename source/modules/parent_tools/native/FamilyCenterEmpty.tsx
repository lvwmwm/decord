// Module ID: 13881
// Function ID: 106309
// Name: FamilyCenterEmpty
// Dependencies: [31, 27, 33, 4131, 13882, 4127, 2]
// Exports: default

// Module 13881 (FamilyCenterEmpty)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(text) {
  const tmp = callback3();
  let obj = { style: tmp.empty };
  obj = { source: importDefault(13882), style: tmp.art, resizeMethod: "scale" };
  const items = [callback(closure_4, obj), ];
  obj = { variant: "text-sm/medium", color: "text-muted", children: text.text };
  items[1] = callback(require(4127) /* Text */.Text, obj);
  obj.children = items;
  return callback2(closure_3, obj);
};
