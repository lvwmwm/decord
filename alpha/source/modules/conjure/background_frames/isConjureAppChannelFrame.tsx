// Module ID: 16630
// Function ID: 16631
// Name: isConjureAppChannelFrame
// Dependencies: [5811, 11068, 6992, 2]
// Exports: default

// Module 16630 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5811 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6992 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(11068);
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
