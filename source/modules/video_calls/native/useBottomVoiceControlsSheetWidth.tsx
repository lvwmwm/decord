// Module ID: 10540
// Function ID: 82369
// Name: useBottomVoiceControlsSheetWidth
// Dependencies: []
// Exports: default

// Module 10540 (useBottomVoiceControlsSheetWidth)
const _module = require(dependencyMap[0]);
({ BOX_MODE_ACTIONSHEET_WIDTH: closure_2, BOX_MODE_THRESHOLD_WIDTH: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/video_calls/native/useBottomVoiceControlsSheetWidth.tsx");

export default function useBottomVoiceControlsSheetWidth() {
  let width = importDefault(dependencyMap[1])().width;
  if (width > closure_3) {
    width = closure_2;
  }
  return width;
};
