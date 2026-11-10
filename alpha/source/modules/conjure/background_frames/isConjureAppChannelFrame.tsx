// Module ID: 16713
// Function ID: 16714
// Name: isConjureAppChannelFrame
// Dependencies: [5801, 11014, 6912, 2]
// Exports: default

// Module 16713 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5801 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6912 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(11014);
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
