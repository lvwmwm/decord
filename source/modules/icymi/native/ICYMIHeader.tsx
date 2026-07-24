// Module ID: 15292
// Function ID: 116658
// Name: ICYMIHeader
// Dependencies: [31, 27, 33, 15226, 689, 4126, 1212, 2]
// Exports: default

// Module 15292 (ICYMIHeader)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = createICYMIStyles.createICYMIStyles((margin) => {
  obj = { text: obj };
  obj = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: margin.margin };
  obj = { height: 1, width: "100%", backgroundColor: importDefault(689).colors.BORDER_SUBTLE, marginBottom: importDefault(689).space.PX_16 };
  obj.separator = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/ICYMIHeader.tsx");

export default function ICYMIHeader() {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.separator };
  const items = [callback(View, obj), ];
  obj = { style: tmp.text, variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["jnXV/V"]);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(closure_5, obj);
};
