// Module ID: 4965
// Function ID: 42677
// Name: ButtonGroup
// Dependencies: [31, 33, 4130, 4541, 2]
// Exports: ButtonGroup

// Module 4965 (ButtonGroup)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_3 = _createForOfIteratorHelperLoose.createStyles({ container: { paddingVertical: 16 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/ButtonGroup/native/ButtonGroup.native.tsx");

export const ButtonGroup = function ButtonGroup(Text, arg1) {
  let children;
  let style;
  let str = Text.size;
  if (str === undefined) {
    str = "md";
  }
  let obj = { size: 0, children: 0, style: 0 };
  ({ children, style } = Text);
  Object.setPrototypeOf(null);
  const merged = Object.assign(Text, obj);
  let num = 8;
  if ("sm" === str) {
    num = 12;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj["spacing"] = num;
  const items = [callback().container, style];
  obj["style"] = items;
  obj["children"] = children;
  return jsx(require(4541) /* Stack */.Stack, {});
};
