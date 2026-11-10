// Module ID: 12092
// Function ID: 12093
// Name: releaseConjurePreviewFrame
// Dependencies: [1194, 10883, 12093, 10938, 2]
// Exports: default

// Module 12092 (releaseConjurePreviewFrame)
import conjurePreviewSurface from "conjurePreviewSurface" /* 10883 */;
import leaveFrame from "leaveFrame" /* 10938 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 12093 */;
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
