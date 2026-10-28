// Module ID: 18331
// Function ID: 18332
// Name: isConjureAppChannelFrame
// Dependencies: [5662, 10765, 6818, 2]
// Exports: default

// Module 18331 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5662 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6818 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(10765);
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
