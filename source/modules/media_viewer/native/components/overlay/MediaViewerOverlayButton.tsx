// Module ID: 8994
// Function ID: 8995
// Dependencies: [19, 21, 7817, 2]

// Module 8994
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(require(7817) /* IconButton */.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
const result = require("IconButton").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default forwardRefResult;
