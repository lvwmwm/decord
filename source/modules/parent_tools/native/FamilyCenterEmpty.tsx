// Module ID: 14237
// Function ID: 14238
// Name: FamilyCenterEmpty
// Dependencies: [19, 17, 21, 4342, 14238, 4338, 2]
// Exports: default

// Module 14237 (FamilyCenterEmpty)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(children) {
  const tmp = callback3();
  let obj = { style: tmp.empty, children: null };
  obj = { source: importDefault(14238), style: tmp.art, resizeMethod: "scale" };
  const items = [callback(closure_4, obj), callback(require(4338) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", children: children.text })];
  obj[1] = items;
  return callback2(closure_3, obj);
};
