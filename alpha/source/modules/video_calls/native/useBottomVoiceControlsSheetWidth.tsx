// Module ID: 10686
// Function ID: 10687
// Name: useBottomVoiceControlsSheetWidth
// Dependencies: [10334, 558, 1496, 2]

// Module 10686 (useBottomVoiceControlsSheetWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10334 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ BOX_MODE_ACTIONSHEET_WIDTH: c2, BOX_MODE_THRESHOLD_WIDTH: c3 } = ChannelCallConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBottomVoiceControlsSheetWidth() {
  let width = useWindowDimensionsDefault().width;
  if (width > _false) {
    width = React2;
  }
  return width;
}) : (function useBottomVoiceControlsSheetWidth() {
  let width = useWindowDimensionsDefault().width;
  if (width > _false) {
    width = React2;
  }
  return width;
});
const result = size.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default tmp3;
