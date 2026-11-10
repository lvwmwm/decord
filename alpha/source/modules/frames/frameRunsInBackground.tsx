// Module ID: 11023
// Function ID: 11024
// Name: frameRunsInBackground
// Dependencies: [6905, 2]
// Exports: default

// Module 11023 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6905 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
