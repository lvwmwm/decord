// Module ID: 16715
// Function ID: 16716
// Name: isConjureAppChannelFrame
// Dependencies: [5831, 11037, 6942, 2]
// Exports: default

// Module 16715 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5831 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6942 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(11037);
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
