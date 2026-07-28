// Module ID: 5213
// Function ID: 45136
// Name: FormArrow
// Dependencies: [31, 27, 33, 4165, 689, 4161, 1273, 5207, 2]
// Exports: default

// Module 5213 (FormArrow)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { wrapper: { flexDirection: "row", alignItems: "center" } };
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, marginRight: -8, marginLeft: 8 };
_createForOfIteratorHelperLoose.icon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormArrow.tsx");

export default function FormArrow(arg0) {
  let label;
  let style;
  ({ label, style } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  if (null != label) {
    let obj = { style: tmp.wrapper };
    obj = { maxFontSizeMultiplier: 1.5, variant: "text-md/medium", color: "text-muted", children: label };
    const items = [callback(require(4161) /* Text */.Text, obj), ];
    const obj1 = {};
    const items1 = [tmp.icon, style];
    obj1.style = items1;
    obj1.source = importDefault(5207);
    obj1.size = require(1273) /* Button */.Icon.Sizes.MEDIUM;
    items[1] = callback(require(1273) /* Button */.Icon, obj1);
    obj.children = items;
    let tmp6 = callback2(View, obj);
  } else {
    obj = {};
    const items2 = [tmp.icon, style];
    obj.style = items2;
    obj.source = importDefault(5207);
    obj.size = require(1273) /* Button */.Icon.Sizes.MEDIUM;
    tmp6 = callback(require(1273) /* Button */.Icon, obj);
  }
  return tmp6;
};
