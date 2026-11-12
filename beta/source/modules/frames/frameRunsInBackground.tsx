// Module ID: 11046
// Function ID: 11047
// Name: frameRunsInBackground
// Dependencies: [6935, 2]
// Exports: default

// Module 11046 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6935 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
