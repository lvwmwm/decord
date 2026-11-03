// Module ID: 16513
// Function ID: 16514
// Name: isConjureAppChannelFrame
// Dependencies: [5795, 11013, 6974, 2]
// Exports: default

// Module 16513 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5795 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6974 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(11013);
const result = size.fileFinishedImporting("modules/conjure/background_frames/isConjureAppChannelFrame.tsx");

export default function isConjureAppChannelFrame(surface) {
  let tmp3 = surface.surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  if (tmp3) {
    const tmpResult = conjurePreviewSurface;
    tmp3 = !tmpResult.isConjurePreviewSurface(surface.surface);
  }
  if (tmp3) {
    tmp3 = isConjureApplicationDefault(surface.applicationId);
  }
  return tmp3;
};
