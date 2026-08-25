// Module ID: 8116
// Function ID: 8117
// Name: ScrollHandlingActionSheet
// Dependencies: [19, 21, 5503, 2]
// Exports: default

// Module 8116 (ScrollHandlingActionSheet)
import noopAll from "noop" /* 19 */;
import Background from "Background" /* 5503 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default function ScrollHandlingActionSheet(children) {
  const merged = Object.assign(children, Object.create(null));
  const obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(Background.BottomSheet, { startExpanded: true });
};
