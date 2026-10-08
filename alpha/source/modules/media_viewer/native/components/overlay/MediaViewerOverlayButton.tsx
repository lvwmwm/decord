// Module ID: 8464
// Function ID: 8465
// Name: MediaViewerOverlayButton
// Dependencies: [109, 19, 21, 558, 576, 8106, 2]

// Module 8464 (MediaViewerOverlayButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const IconButton2 = tmp(8106);
let closure_2 = ["ref"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaViewerOverlayButton(ref) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_2);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    let tmp9;
    if (cResult[4] === tmp5) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const IconButton = IconButton2.IconButton;
  const merged = Object.assign(tmp4);
  const tmp11 = <IconButton ref={tmp5} size="md" variant="secondary-overlay" />;
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp11;
  tmp9 = tmp11;
}) : (function MediaViewerOverlayButton(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const IconButton = IconButton2.IconButton;
  const merged1 = Object.assign(merged);
  return <IconButton ref={ref} size="md" variant="secondary-overlay" />;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx");

export default tmp3;
