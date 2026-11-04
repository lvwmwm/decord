// Module ID: 11913
// Function ID: 11914
// Name: useBottomVoiceControlsSheetWidth
// Dependencies: [11182, 1493, 2]
// Exports: default

// Module 11913 (useBottomVoiceControlsSheetWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import ChannelCallConstants from "ChannelCallConstants" /* 11182 */;
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
