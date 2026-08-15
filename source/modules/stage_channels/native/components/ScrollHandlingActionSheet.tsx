// Module ID: 8081
// Function ID: 8082
// Name: ScrollHandlingActionSheet
// Dependencies: [19, 21, 6950, 2]
// Exports: default

// Module 8081 (ScrollHandlingActionSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default function ScrollHandlingActionSheet(children) {
  const merged = Object.assign(children, Object.create(null));
  const obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(require(6950) /* Background */.BottomSheet, { startExpanded: true });
};
