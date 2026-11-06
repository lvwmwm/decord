// Module ID: 16627
// Function ID: 16628
// Name: isConjureAppChannelFrame
// Dependencies: [5829, 11021, 6934, 2]
// Exports: default

// Module 16627 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5829 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6934 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(11021);
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
