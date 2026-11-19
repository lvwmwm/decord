// Module ID: 6833
// Function ID: 6834
// Name: frameRunsInBackground
// Dependencies: [6503, 2]
// Exports: default

// Module 6833 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6503 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
