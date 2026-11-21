// Module ID: 6951
// Function ID: 6952
// Name: releaseConjurePreviewFrame
// Dependencies: [1193, 6943, 6952, 6953, 2]
// Exports: default

// Module 6951 (releaseConjurePreviewFrame)
import conjurePreviewSurface from "conjurePreviewSurface" /* 6943 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 6952 */;
import leaveFrame from "leaveFrame" /* 6953 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1193 */;
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
