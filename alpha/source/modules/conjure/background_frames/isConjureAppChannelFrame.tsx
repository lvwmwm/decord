// Module ID: 16992
// Function ID: 16993
// Name: isConjureAppChannelFrame
// Dependencies: [5977, 7339, 7028, 2]
// Exports: default

// Module 16992 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5977 */;
import isConjureApplicationDefault from "isConjureApplication" /* 7028 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(7339);
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
