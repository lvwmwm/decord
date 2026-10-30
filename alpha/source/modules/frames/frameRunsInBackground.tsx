// Module ID: 14362
// Function ID: 14363
// Name: frameRunsInBackground
// Dependencies: [6841, 2]
// Exports: default

// Module 14362 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6841 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
