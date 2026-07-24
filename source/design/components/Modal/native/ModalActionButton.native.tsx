// Module ID: 9937
// Function ID: 76832
// Name: ModalActionButton
// Dependencies: [31, 27, 33, 4130, 4543, 2]
// Exports: ModalActionButton

// Module 9937 (ModalActionButton)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ spacer: { marginTop: 12 } });
const result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalActionButton.native.tsx");

export const ModalActionButton = function ModalActionButton(variant) {
  variant = variant.variant;
  let obj = Object.create(null);
  obj.variant = 0;
  const merged = Object.assign(variant, obj);
  obj = {};
  let tmp6 = "secondary" === variant;
  if (tmp6) {
    obj = { style: tmp3.spacer };
    tmp6 = callback(View, obj);
  }
  const items = [tmp6, ];
  const obj1 = {};
  const merged1 = Object.assign(merged);
  obj1["variant"] = variant;
  obj1["size"] = "lg";
  items[1] = callback(require(4543) /* Button */.Button, obj1);
  obj.children = items;
  return closure_5(closure_4, obj);
};
