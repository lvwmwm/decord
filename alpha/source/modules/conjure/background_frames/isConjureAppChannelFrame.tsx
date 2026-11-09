// Module ID: 16686
// Function ID: 16687
// Name: isConjureAppChannelFrame
// Dependencies: [5799, 11005, 6909, 2]
// Exports: default

// Module 16686 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5799 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6909 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(11005);
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
