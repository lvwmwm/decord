// Module ID: 18739
// Function ID: 18740
// Name: conjureFrameSound
// Dependencies: [2]
// Exports: showsFrameSoundToggle

// Module 18739 (conjureFrameSound)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/background_frames/conjureFrameSound.tsx");

export const showsFrameSoundToggle = function showsFrameSoundToggle(frame) {
  return frame.data.audible || frame.data.userMuted;
};
