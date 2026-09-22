// Module ID: 9673
// Function ID: 9674
// Name: useBottomVoiceControlsSheetWidth
// Dependencies: [9647, 1478, 2]
// Exports: default

// Module 9673 (useBottomVoiceControlsSheetWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9647 */;
import size from "module_2" /* 2 */;

({ BOX_MODE_ACTIONSHEET_WIDTH: c2, BOX_MODE_THRESHOLD_WIDTH: c3 } = ChannelCallConstants);
const result = size.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default function useBottomVoiceControlsSheetWidth() {
  let width = useWindowDimensionsDefault().width;
  if (width > React3) {
    width = React2;
  }
  return width;
};
