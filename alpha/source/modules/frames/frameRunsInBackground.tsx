// Module ID: 7659
// Function ID: 7660
// Name: frameRunsInBackground
// Dependencies: [6906, 2]
// Exports: default

// Module 7659 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6906 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
