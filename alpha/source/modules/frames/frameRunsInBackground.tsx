// Module ID: 6863
// Function ID: 6864
// Name: frameRunsInBackground
// Dependencies: [6532, 2]
// Exports: default

// Module 6863 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6532 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
