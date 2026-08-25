// Module ID: 9078
// Function ID: 9079
// Dependencies: [19, 21, 7896, 2]

// Module 9078
import IconButton from "IconButton" /* 7896 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(IconButton.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default forwardRefResult;
