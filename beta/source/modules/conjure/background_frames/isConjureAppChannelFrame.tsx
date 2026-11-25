// Module ID: 15759
// Function ID: 15760
// Name: isConjureAppChannelFrame
// Dependencies: [5557, 6943, 6632, 2]
// Exports: default

// Module 15759 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5557 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6632 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(6943);
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
