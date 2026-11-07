// Module ID: 11014
// Function ID: 11015
// Name: frameRunsInBackground
// Dependencies: [6902, 2]
// Exports: default

// Module 11014 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6902 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
