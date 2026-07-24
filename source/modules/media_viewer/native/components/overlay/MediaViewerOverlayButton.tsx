// Module ID: 12263
// Function ID: 95771
// Dependencies: [31, 33, 7533, 2]

// Module 12263
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { ref, size: "md", variant: "secondary-overlay" };
  const merged = Object.assign(arg0);
  return jsx(require(7533) /* IconButton */.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
const result = require("IconButton").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default forwardRefResult;
