// Module ID: 18565
// Function ID: 18566
// Name: isConjureAppChannelFrame
// Dependencies: [5664, 10840, 6841, 2]
// Exports: default

// Module 18565 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6841 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(10840);
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
