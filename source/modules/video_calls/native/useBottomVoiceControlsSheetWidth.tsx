// Module ID: 10668
// Function ID: 10669
// Name: useBottomVoiceControlsSheetWidth
// Dependencies: [9739, 1474, 2]
// Exports: default

// Module 10668 (useBottomVoiceControlsSheetWidth)
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH";

let c3;
let obj1;
({ BOX_MODE_ACTIONSHEET_WIDTH: obj1, BOX_MODE_THRESHOLD_WIDTH: c3 } = BOX_MODE_ACTIONSHEET_WIDTH);
const result = require("set").fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default function useBottomVoiceControlsSheetWidth() {
  let width = importDefault(1474)().width;
  if (width > closure_3) {
    width = closure_2;
  }
  return width;
};
