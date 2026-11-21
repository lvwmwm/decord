// Module ID: 6952
// Function ID: 6953
// Name: frameRunsInBackground
// Dependencies: [6624, 2]
// Exports: default

// Module 6952 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6624 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
