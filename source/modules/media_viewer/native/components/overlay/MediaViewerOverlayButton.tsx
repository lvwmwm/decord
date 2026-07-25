// Module ID: 12239
// Function ID: 95580
// Dependencies: [31, 33, 6625, 2]

// Module 12239
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = { ref, size: "md", variant: "secondary-overlay" };
  const merged = Object.assign(arg0);
  return jsx(require(6625) /* IconButton */.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
const result = require("IconButton").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default forwardRefResult;
