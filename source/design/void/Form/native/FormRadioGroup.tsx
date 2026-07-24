// Module ID: 7656
// Function ID: 60873
// Name: FormRadioGroup
// Dependencies: [31, 27, 33, 5164, 7654, 7190, 2]
// Exports: default

// Module 7656 (FormRadioGroup)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormRadioGroup.tsx");

export default function FormRadioGroup(arg0) {
  let accessibilityLabel;
  let children;
  let hasIcons;
  let hint;
  let icon;
  let title;
  let value;
  ({ title, children, hint } = arg0);
  let obj = { title: 0, hasIcons: 0, accessibilityLabel: 0, children: 0, value: 0, hint: 0, icon: 0 };
  ({ hasIcons, accessibilityLabel, value, icon } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  if (React.useContext(require(5164) /* context */.RedesignCompatContext)) {
    obj = { style: { marginBottom: 24, marginHorizontal: 12 } };
    obj = {};
    const obj1 = { defaultValue: value, hasIcons, title, accessibilityLabel, children };
    obj.children = callback(require(7654) /* context */.TableRadioGroup, obj1);
    const items = [callback(View, obj), ];
    let tmp16 = null;
    if (null != hint) {
      const obj2 = {};
      const obj3 = { marginTop: 8 };
      obj2.style = obj3;
      obj2.children = hint;
      tmp16 = callback(View, obj2);
    }
    items[1] = tmp16;
    obj.children = items;
    let tmp11Result = closure_6(View, obj);
    const tmp11 = closure_6;
    const tmp12 = View;
  } else {
    const obj4 = { title, accessibilityRole: "radiogroup", accessibilityLabel: title, hint, icon };
    const merged1 = Object.assign(merged);
    obj4["children"] = children;
    tmp11Result = callback(importDefault(7190), obj4);
    const tmp6 = importDefault(7190);
  }
  return tmp11Result;
};
