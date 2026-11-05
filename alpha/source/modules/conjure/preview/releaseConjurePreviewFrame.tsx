// Module ID: 11076
// Function ID: 11077
// Name: releaseConjurePreviewFrame
// Dependencies: [1194, 11068, 11077, 11078, 2]
// Exports: default

// Module 11076 (releaseConjurePreviewFrame)
import conjurePreviewSurface from "conjurePreviewSurface" /* 11068 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 11077 */;
import leaveFrame from "leaveFrame" /* 11078 */;
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
