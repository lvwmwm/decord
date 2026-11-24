// Module ID: 15779
// Function ID: 15780
// Name: isConjureAppChannelFrame
// Dependencies: [5561, 7551, 6819, 2]
// Exports: default

// Module 15779 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5561 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6819 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(7551);
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
