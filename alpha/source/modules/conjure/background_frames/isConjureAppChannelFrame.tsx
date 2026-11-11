// Module ID: 16874
// Function ID: 16875
// Name: isConjureAppChannelFrame
// Dependencies: [5914, 7275, 6965, 2]
// Exports: default

// Module 16874 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5914 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6965 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(7275);
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
