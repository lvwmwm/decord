// Module ID: 9546
// Function ID: 9547
// Name: useBottomVoiceControlsSheetWidth
// Dependencies: [9521, 1493, 2]
// Exports: default

// Module 9546 (useBottomVoiceControlsSheetWidth)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH" /* 9521 */;

({ BOX_MODE_ACTIONSHEET_WIDTH: obj1, BOX_MODE_THRESHOLD_WIDTH: c3 } = BOX_MODE_ACTIONSHEET_WIDTH);
const result = set.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default function useBottomVoiceControlsSheetWidth() {
  let width = useWindowDimensionsDefault().width;
  if (width > closure_3) {
    width = closure_2;
  }
  return width;
};
