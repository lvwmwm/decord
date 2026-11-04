// Module ID: 12289
// Function ID: 12290
// Name: frameRunsInBackground
// Dependencies: [6982, 2]
// Exports: default

// Module 12289 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6982 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
