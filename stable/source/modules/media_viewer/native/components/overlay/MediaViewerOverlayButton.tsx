// Module ID: 8939
// Function ID: 8940
// Name: MediaViewerOverlayButton
// Dependencies: [19, 21, 8028, 2]
// Exports: default

// Module 8939 (MediaViewerOverlayButton)
import Fragment from "Fragment" /* 21 */;
import IconButton2 from "IconButton" /* 8028 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default function MediaViewerOverlayButton(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const IconButton = IconButton2.IconButton;
  const merged1 = Object.assign(merged);
  return <IconButton ref={ref} size="md" variant="secondary-overlay" />;
};
