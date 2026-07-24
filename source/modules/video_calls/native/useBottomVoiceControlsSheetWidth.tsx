// Module ID: 10579
// Function ID: 82611
// Name: useBottomVoiceControlsSheetWidth
// Dependencies: [10241, 1450, 2]
// Exports: default

// Module 10579 (useBottomVoiceControlsSheetWidth)
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH";

let closure_2;
let closure_3;
({ BOX_MODE_ACTIONSHEET_WIDTH: closure_2, BOX_MODE_THRESHOLD_WIDTH: closure_3 } = BOX_MODE_ACTIONSHEET_WIDTH);
const result = require("set").fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default function useBottomVoiceControlsSheetWidth() {
  let width = importDefault(1450)().width;
  if (width > closure_3) {
    width = closure_2;
  }
  return width;
};
