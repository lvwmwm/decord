// Module ID: 14367
// Function ID: 14368
// Name: conjureFrameSound
// Dependencies: [2]
// Exports: showsFrameSoundToggle

// Module 14367 (conjureFrameSound)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/background_frames/conjureFrameSound.tsx");

export function showsFrameSoundToggle(frame) {
  return frame.data.audible || frame.data.userMuted;
}
