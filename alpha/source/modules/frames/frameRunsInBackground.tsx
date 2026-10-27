// Module ID: 13880
// Function ID: 13881
// Name: frameRunsInBackground
// Dependencies: [6777, 2]
// Exports: default

// Module 13880 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6777 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
