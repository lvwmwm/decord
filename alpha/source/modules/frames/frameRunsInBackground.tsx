// Module ID: 12229
// Function ID: 12230
// Name: frameRunsInBackground
// Dependencies: [6967, 2]
// Exports: default

// Module 12229 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6967 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
