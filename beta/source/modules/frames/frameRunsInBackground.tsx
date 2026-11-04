// Module ID: 12093
// Function ID: 12094
// Name: frameRunsInBackground
// Dependencies: [6847, 2]
// Exports: default

// Module 12093 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6847 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
