// Module ID: 18624
// Function ID: 18625
// Name: isConjureAppChannelFrame
// Dependencies: [5670, 10863, 6848, 2]
// Exports: default

// Module 18624 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6848 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(10863);
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
