// Module ID: 8976
// Function ID: 8977
// Dependencies: [19, 21, 7792, 2]

// Module 8976
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(require(7792) /* IconButton */.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
const result = require("IconButton").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default forwardRefResult;
