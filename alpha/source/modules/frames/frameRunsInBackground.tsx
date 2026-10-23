// Module ID: 13841
// Function ID: 13842
// Name: frameRunsInBackground
// Dependencies: [6774, 2]
// Exports: default

// Module 13841 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6774 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
