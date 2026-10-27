// Module ID: 13866
// Function ID: 13867
// Name: frameRunsInBackground
// Dependencies: [6776, 2]
// Exports: default

// Module 13866 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6776 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground && allowConjureRunInBackground.allowConjureRunInBackground;
  return allowConjureRunInBackground;
};
