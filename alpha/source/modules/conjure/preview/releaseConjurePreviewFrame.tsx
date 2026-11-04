// Module ID: 12288
// Function ID: 12289
// Name: releaseConjurePreviewFrame
// Dependencies: [1194, 11062, 12289, 11125, 2]
// Exports: default

// Module 12288 (releaseConjurePreviewFrame)
import conjurePreviewSurface from "conjurePreviewSurface" /* 11062 */;
import leaveFrame from "leaveFrame" /* 11125 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 12289 */;
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
