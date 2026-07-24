// Module ID: 7634
// Function ID: 60772
// Name: ScrollHandlingActionSheet
// Dependencies: [31, 33, 5187, 2]
// Exports: default

// Module 7634 (ScrollHandlingActionSheet)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default function ScrollHandlingActionSheet(children) {
  let obj = Object.create(null);
  obj.children = 0;
  obj.scrollableDeviceHeightBreakpoint = 0;
  const merged = Object.assign(children, obj);
  obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj["children"] = children.children;
  return jsx(require(5187) /* Background */.BottomSheet, { startExpanded: true });
};
