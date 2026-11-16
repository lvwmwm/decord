// Module ID: 15619
// Function ID: 15620
// Name: conjureFrameSound
// Dependencies: [2]
// Exports: showsFrameSoundToggle

// Module 15619 (conjureFrameSound)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/background_frames/conjureFrameSound.tsx");

export function showsFrameSoundToggle(frame) {
  return frame.data.audible || frame.data.userMuted;
}
