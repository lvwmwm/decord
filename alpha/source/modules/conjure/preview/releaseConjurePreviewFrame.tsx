// Module ID: 12228
// Function ID: 12229
// Name: releaseConjurePreviewFrame
// Dependencies: [1194, 11013, 12229, 11076, 2]
// Exports: default

// Module 12228 (releaseConjurePreviewFrame)
import conjurePreviewSurface from "conjurePreviewSurface" /* 11013 */;
import leaveFrame from "leaveFrame" /* 11076 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 12229 */;
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
