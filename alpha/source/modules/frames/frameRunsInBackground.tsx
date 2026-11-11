// Module ID: 7284
// Function ID: 7285
// Name: frameRunsInBackground
// Dependencies: [6957, 2]
// Exports: default

// Module 7284 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6957 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
