// Module ID: 10664
// Function ID: 10665
// Name: useBottomVoiceControlsSheetWidth
// Dependencies: [10642, 1494, 2]
// Exports: default

// Module 10664 (useBottomVoiceControlsSheetWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10642 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ BOX_MODE_ACTIONSHEET_WIDTH: c2, BOX_MODE_THRESHOLD_WIDTH: c3 } = ChannelCallConstants);
const result = size.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default function useBottomVoiceControlsSheetWidth() {
  let width = useWindowDimensionsDefault().width;
  if (width > _false) {
    width = React2;
  }
  return width;
};
