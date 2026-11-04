// Module ID: 16617
// Function ID: 16618
// Name: isConjureAppChannelFrame
// Dependencies: [5809, 11062, 6989, 2]
// Exports: default

// Module 16617 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5809 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6989 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(11062);
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
