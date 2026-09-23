// Module ID: 8715
// Function ID: 8716
// Name: MediaViewerOverlayButton
// Dependencies: [19, 21, 8265, 2]

// Module 8715 (MediaViewerOverlayButton)
import IconButton from "IconButton" /* 8265 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(IconButton.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
