// Module ID: 14332
// Function ID: 14333
// Name: frameRunsInBackground
// Dependencies: [6834, 2]
// Exports: default

// Module 14332 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6834 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
