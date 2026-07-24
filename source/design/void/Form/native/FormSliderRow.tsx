// Module ID: 7657
// Function ID: 60875
// Name: FormSliderRow
// Dependencies: [31, 27, 33, 4130, 5164, 5167, 4126, 7658, 5158, 2]
// Exports: default

// Module 7657 (FormSliderRow)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ labels: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, slider: { marginStart: -4, marginTop: 8 } });
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormSliderRow.tsx");

export default function FormSliderRow(arg0) {
  let label;
  let trailing;
  ({ label, trailing } = arg0);
  let obj = Object.create(null);
  obj.label = 0;
  obj.trailing = 0;
  const merged = Object.assign(arg0, obj);
  const context = React.useContext(require(5164) /* context */.RedesignCompatContext);
  const tmp4 = callback2();
  if (context) {
    obj = {};
    const obj1 = { style: tmp4.labels };
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: label };
    const items = [callback(require(4126) /* Text */.Text, obj2), trailing];
    obj1.children = items;
    const items1 = [tmp5(View, obj1), ];
    const obj3 = {};
    const merged1 = Object.assign(merged);
    obj3["style"] = tmp4.slider;
    items1[1] = callback(importDefault(7658), obj3);
    obj.children = items1;
    let tmp5Result = tmp5(require(5167) /* getCardBackgroundToken */.Card, obj);
    const tmp20 = importDefault(7658);
  } else {
    obj = {};
    const obj4 = { label, trailing };
    const items2 = [callback(importDefault(5158), obj4), ];
    const obj5 = {};
    const merged2 = Object.assign(merged);
    items2[1] = callback(importDefault(7658), obj5);
    obj.children = items2;
    tmp5Result = tmp5(closure_7, obj);
    const tmp10 = importDefault(7658);
  }
  return tmp5Result;
};
