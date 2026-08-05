// Module ID: 15338
// Function ID: 15339
// Name: NonCollapsableGestureDetector
// Dependencies: [109, 19, 17, 21, 5353, 2]
// Exports: NonCollapsableGestureDetector

// Module 15338 (NonCollapsableGestureDetector)
import _objectWithoutProperties from "_objectWithoutProperties";
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_2 = ["children"];
let closure_6 = { flex: 1 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx");

export const NonCollapsableGestureDetector = function NonCollapsableGestureDetector(children) {
  let obj = {};
  const merged = Object.assign(callback(children, closure_2));
  obj = { style: closure_6, collapsable: false, children: children.children };
  obj.children = <View style={closure_6} collapsable={false}>{arg0.children}</View>;
  return jsx(require(5353) /* Directions */.GestureDetector, { style: closure_6, collapsable: false, children: children.children });
};
