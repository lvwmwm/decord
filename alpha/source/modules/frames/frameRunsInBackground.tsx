// Module ID: 7358
// Function ID: 7359
// Name: frameRunsInBackground
// Dependencies: [7028, 2]
// Exports: default

// Module 7358 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 7028 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
