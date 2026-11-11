// Module ID: 7283
// Function ID: 7284
// Name: releaseConjurePreviewFrame
// Dependencies: [1194, 7275, 7284, 7285, 2]
// Exports: default

// Module 7283 (releaseConjurePreviewFrame)
import conjurePreviewSurface from "conjurePreviewSurface" /* 7275 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 7284 */;
import leaveFrame from "leaveFrame" /* 7285 */;
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
