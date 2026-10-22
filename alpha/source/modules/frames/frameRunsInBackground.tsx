// Module ID: 13818
// Function ID: 13819
// Name: frameRunsInBackground
// Dependencies: [6761, 2]
// Exports: default

// Module 13818 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6761 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
