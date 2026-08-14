// Module ID: 8031
// Function ID: 8032
// Name: ScrollHandlingActionSheet
// Dependencies: [19, 21, 5458, 2]
// Exports: default

// Module 8031 (ScrollHandlingActionSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default function ScrollHandlingActionSheet(children) {
  const merged = Object.assign(children, Object.create(null));
  const obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(require(5458) /* Background */.BottomSheet, { startExpanded: true });
};
