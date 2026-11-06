// Module ID: 11030
// Function ID: 11031
// Name: frameRunsInBackground
// Dependencies: [6927, 2]
// Exports: default

// Module 11030 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6927 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
