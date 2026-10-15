// Module ID: 11146
// Function ID: 11147
// Name: useBottomVoiceControlsSheetWidth
// Dependencies: [10588, 558, 1497, 2]

// Module 11146 (useBottomVoiceControlsSheetWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10588 */;
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
