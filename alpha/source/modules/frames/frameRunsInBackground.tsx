// Module ID: 7560
// Function ID: 7561
// Name: frameRunsInBackground
// Dependencies: [6811, 2]
// Exports: default

// Module 7560 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6811 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
