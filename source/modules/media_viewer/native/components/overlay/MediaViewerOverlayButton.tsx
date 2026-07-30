// Module ID: 12299
// Function ID: 12300
// Dependencies: [19, 21, 6679, 2]

// Module 12299
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(require(6679) /* IconButton */.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
const result = require("IconButton").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default forwardRefResult;
