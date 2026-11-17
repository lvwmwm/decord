// Module ID: 17027
// Function ID: 17028
// Name: isConjureAppChannelFrame
// Dependencies: [5971, 7349, 7036, 2]
// Exports: default

// Module 17027 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5971 */;
import isConjureApplicationDefault from "isConjureApplication" /* 7036 */;
import size from "module_2" /* 2 */;

let tmp;
const conjurePreviewSurface = tmp(7349);
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
