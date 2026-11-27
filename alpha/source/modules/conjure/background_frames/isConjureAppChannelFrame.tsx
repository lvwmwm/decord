// Module ID: 15958
// Function ID: 15959
// Name: isConjureAppChannelFrame
// Dependencies: [5687, 7677, 6945, 2]
// Exports: default

// Module 15958 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5687 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6945 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(7677);
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
