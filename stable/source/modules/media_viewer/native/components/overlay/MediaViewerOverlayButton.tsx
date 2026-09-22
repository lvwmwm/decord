// Module ID: 8487
// Function ID: 8488
// Name: MediaViewerOverlayButton
// Dependencies: [19, 21, 8202, 2]

// Module 8487 (MediaViewerOverlayButton)
import IconButton from "IconButton" /* 8202 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(IconButton.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
