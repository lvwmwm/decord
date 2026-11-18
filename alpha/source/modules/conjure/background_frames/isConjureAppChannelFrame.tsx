// Module ID: 15677
// Function ID: 15678
// Name: isConjureAppChannelFrame
// Dependencies: [5467, 6854, 6540, 2]
// Exports: default

// Module 15677 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5467 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6540 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(6854);
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
