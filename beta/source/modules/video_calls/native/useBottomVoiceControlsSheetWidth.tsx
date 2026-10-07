// Module ID: 9077
// Function ID: 9078
// Name: useBottomVoiceControlsSheetWidth
// Dependencies: [9051, 558, 1484, 2]

// Module 9077 (useBottomVoiceControlsSheetWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ BOX_MODE_ACTIONSHEET_WIDTH: c2, BOX_MODE_THRESHOLD_WIDTH: c3 } = ChannelCallConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let width = useWindowDimensionsDefault().width;
  if (width > _false) {
    width = React2;
  }
  return width;
}) : (() => {
  let width = useWindowDimensionsDefault().width;
  if (width > _false) {
    width = React2;
  }
  return width;
});
const result = size.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default tmp3;
