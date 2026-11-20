// Module ID: 15628
// Function ID: 15629
// Name: isConjureAppChannelFrame
// Dependencies: [5438, 6824, 6513, 2]
// Exports: default

// Module 15628 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5438 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6513 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(6824);
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
