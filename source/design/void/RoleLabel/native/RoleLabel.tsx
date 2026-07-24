// Module ID: 9601
// Function ID: 74741
// Name: RoleLabel
// Dependencies: [31, 27, 4122, 33, 4130, 566, 1273, 7636, 2]
// Exports: RoleLabel

// Module 9601 (RoleLabel)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { display: "flex", flexDirection: "row" }, roleDot: { marginRight: 4 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("design/void/RoleLabel/native/RoleLabel.tsx");

export const RoleLabel = function RoleLabel(color) {
  let colors;
  let name;
  color = color.color;
  ({ name, colors } = color);
  const tmp = callback2();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.roleStyle);
  let tmp4 = "username" === stateFromStores;
  if (tmp4) {
    tmp4 = null != color;
  }
  if (tmp4) {
    obj = { color };
  }
  obj = { style: tmp.container };
  let tmp8 = "dot" === stateFromStores;
  if (tmp8) {
    tmp8 = null != color;
  }
  if (tmp8) {
    const obj1 = { color, colors, containerStyles: tmp.roleDot };
    tmp8 = callback(require(1273) /* Button */.RoleDot, obj1);
  }
  const items1 = [tmp8, ];
  const obj2 = { style: {}, text: name };
  items1[1] = callback(require(7636) /* Form */.FormLabel, obj2);
  obj.children = items1;
  return closure_5(View, obj);
};
