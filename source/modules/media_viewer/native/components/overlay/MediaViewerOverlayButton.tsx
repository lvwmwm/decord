// Module ID: 12283
// Function ID: 95755
// Dependencies: [31, 33, 6661, 2]

// Module 12283
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { ref, size: "md", variant: "secondary-overlay" };
  const merged = Object.assign(arg0);
  return jsx(require(6661) /* IconButton */.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
const result = require("IconButton").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default forwardRefResult;
