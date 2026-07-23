// Module ID: 7505
// Function ID: 60179
// Name: Input
// Dependencies: [31, 27, 33, 4130, 689, 1212, 4126, 7506, 2]
// Exports: Input

// Module 7505 (Input)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.inputRow = _createForOfIteratorHelperLoose;
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.labelWrapper = obj1;
_createForOfIteratorHelperLoose.label = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.description = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.error = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, width: "auto" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, width: "auto" };
const result = require("jsxProd").fileFinishedImporting("design/components/Input/native/Input.native.tsx");

export const Input = function Input(arg0) {
  let children;
  let containerStyle;
  let description;
  let errorMessage;
  let label;
  let labelId;
  let labelTrailing;
  let required;
  const tmp = _createForOfIteratorHelperLoose();
  ({ label, labelTrailing, labelId, description, errorMessage, required } = arg0);
  ({ children, containerStyle } = arg0);
  if ("string" === typeof label) {
    if (true === required) {
      const intl = require(1212) /* getSystemLocale */.intl;
      const _HermesInternal = HermesInternal;
      const combined = "" + label + " (" + intl.string(require(1212) /* getSystemLocale */.t.EkokLy) + ")";
    }
  }
  let obj = { style: containerStyle };
  if (null == label) {
    const items = [null, , , ];
    obj = { style: tmp.inputRow, children };
    items[1] = callback(View, obj);
    let tmp22 = null;
    if (null != description) {
      obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.description, children: description };
      tmp22 = callback(require(4126) /* Text */.Text, obj);
    }
    items[2] = tmp22;
    let tmp26 = null;
    if (null != errorMessage) {
      const obj1 = { style: tmp.error, children: errorMessage };
      tmp26 = callback(require(7506) /* ErrorText */.ErrorText, obj1);
    }
    items[3] = tmp26;
    obj.children = items;
    return tmp7(tmp8, obj);
  } else if (null != labelTrailing) {
    const obj2 = { style: tmp.labelWrapper };
    const obj3 = { variant: "text-sm/semibold", color: "text-subtle", nativeID: labelId, children: label };
    const items1 = [callback(require(4126) /* Text */.Text, obj3), labelTrailing];
    obj2.children = items1;
    let tmp30Result = callback2(View, obj2);
  } else {
    const obj4 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.label, nativeID: labelId, accessibilityLabel: combined };
    const items2 = [label, ];
    let tmp12 = null;
    if (required) {
      const obj5 = { variant: "text-sm/bold", color: "text-feedback-critical", "aria-hidden": true, children: [" ", "*"] };
      tmp12 = callback2(require(4126) /* Text */.Text, obj5);
    }
    items2[1] = tmp12;
    obj4.children = items2;
    tmp30Result = callback2(require(4126) /* Text */.Text, obj4);
    const tmp30 = callback2;
  }
};
