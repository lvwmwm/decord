// Module ID: 15664
// Function ID: 15665
// Name: isConjureAppChannelFrame
// Dependencies: [5436, 6824, 6511, 2]
// Exports: default

// Module 15664 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5436 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6511 */;
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
