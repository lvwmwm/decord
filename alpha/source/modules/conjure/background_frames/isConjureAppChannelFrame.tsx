// Module ID: 18666
// Function ID: 18667
// Name: isConjureAppChannelFrame
// Dependencies: [5675, 10883, 6854, 2]
// Exports: default

// Module 18666 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6854 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(10883);
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
