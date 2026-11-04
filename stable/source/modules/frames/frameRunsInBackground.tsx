// Module ID: 13897
// Function ID: 13898
// Name: frameRunsInBackground
// Dependencies: [6808, 2]
// Exports: default

// Module 13897 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6808 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
