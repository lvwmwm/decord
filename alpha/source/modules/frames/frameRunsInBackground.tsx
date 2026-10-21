// Module ID: 13768
// Function ID: 13769
// Name: frameRunsInBackground
// Dependencies: [6755, 2]
// Exports: default

// Module 13768 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6755 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
