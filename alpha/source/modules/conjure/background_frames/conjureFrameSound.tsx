// Module ID: 14354
// Function ID: 14355
// Name: conjureFrameSound
// Dependencies: [2]
// Exports: showsFrameSoundToggle

// Module 14354 (conjureFrameSound)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/background_frames/conjureFrameSound.tsx");

export function showsFrameSoundToggle(frame) {
  return frame.data.audible || frame.data.userMuted;
}
