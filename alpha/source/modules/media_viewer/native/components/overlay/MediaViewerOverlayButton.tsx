// Module ID: 8001
// Function ID: 8002
// Name: MediaViewerOverlayButton
// Dependencies: [19, 21, 7536, 2]

// Module 8001 (MediaViewerOverlayButton)
import IconButton from "IconButton" /* 7536 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(IconButton.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
