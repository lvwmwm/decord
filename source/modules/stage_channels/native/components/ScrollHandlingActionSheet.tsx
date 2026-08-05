// Module ID: 7747
// Function ID: 7748
// Name: ScrollHandlingActionSheet
// Dependencies: [19, 21, 5323, 2]
// Exports: default

// Module 7747 (ScrollHandlingActionSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default function ScrollHandlingActionSheet(children) {
  const merged = Object.assign(children, Object.create(null));
  const obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(require(5323) /* Background */.BottomSheet, { startExpanded: true });
};
