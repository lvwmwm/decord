// Module ID: 7817
// Function ID: 7818
// Name: MediaViewerOverlayButton
// Dependencies: [19, 21, 7363, 2]

// Module 7817 (MediaViewerOverlayButton)
import IconButton from "IconButton" /* 7363 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(IconButton.IconButton, { ref, size: "md", variant: "secondary-overlay" });
});
