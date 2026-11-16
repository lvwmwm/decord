// Module ID: 11045
// Function ID: 11046
// Name: releaseConjurePreviewFrame
// Dependencies: [1194, 11037, 11046, 11047, 2]
// Exports: default

// Module 11045 (releaseConjurePreviewFrame)
import conjurePreviewSurface from "conjurePreviewSurface" /* 11037 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 11046 */;
import leaveFrame from "leaveFrame" /* 11047 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/preview/releaseConjurePreviewFrame.tsx");

export default function releaseConjurePreviewFrame(arg0) {
  const obj = conjurePreviewSurface;
  const conjureBuilderPreviewFrames = obj.getConjureBuilderPreviewFrames(arg0);
  for (const item10013 of conjureBuilderPreviewFrames) {
    let tmp2 = item10013;
    if (!frameRunsInBackgroundDefault(item10013, UnsyncedUserSettingsStore)) {
      let obj2 = leaveFrame;
      let leaveFrameResult = obj2.leaveFrame(tmp2.id);
    }
    continue;
  }
};
