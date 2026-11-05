// Module ID: 11077
// Function ID: 11078
// Name: frameRunsInBackground
// Dependencies: [6985, 2]
// Exports: default

// Module 11077 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6985 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
