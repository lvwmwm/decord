// Module ID: 15900
// Function ID: 15901
// Name: isConjureAppChannelFrame
// Dependencies: [5656, 7646, 6914, 2]
// Exports: default

// Module 15900 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5656 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6914 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(7646);
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
