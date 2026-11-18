// Module ID: 6862
// Function ID: 6863
// Name: releaseConjurePreviewFrame
// Dependencies: [1194, 6854, 6863, 6864, 2]
// Exports: default

// Module 6862 (releaseConjurePreviewFrame)
import conjurePreviewSurface from "conjurePreviewSurface" /* 6854 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 6863 */;
import leaveFrame from "leaveFrame" /* 6864 */;
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
