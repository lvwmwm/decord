// Module ID: 9663
// Function ID: 9664
// Name: useBottomVoiceControlsSheetWidth
// Dependencies: [9637, 558, 1482, 2]

// Module 9663 (useBottomVoiceControlsSheetWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9637 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ BOX_MODE_ACTIONSHEET_WIDTH: c2, BOX_MODE_THRESHOLD_WIDTH: c3 } = ChannelCallConstants);
const result = size.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let width = useWindowDimensionsDefault().width;
  if (width > React3) {
    width = React2;
  }
  return width;
}) : (() => {
  let width = useWindowDimensionsDefault().width;
  if (width > React3) {
    width = React2;
  }
  return width;
});
