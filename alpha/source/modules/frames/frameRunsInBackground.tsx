// Module ID: 13804
// Function ID: 13805
// Name: frameRunsInBackground
// Dependencies: [6762, 2]
// Exports: default

// Module 13804 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6762 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
