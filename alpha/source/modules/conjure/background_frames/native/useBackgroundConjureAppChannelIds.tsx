// Module ID: 19093
// Function ID: 19094
// Name: useBackgroundConjureAppChannelIds
// Dependencies: [16618, 11062, 6984, 504, 2]
// Exports: default

// Module 19093 (useBackgroundConjureAppChannelIds)
import get_initialized from "get initialized" /* 504 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6984 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11062 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 16618 */;
import size from "module_2" /* 2 */;

function getChannelIds() {
  let obj = conjureAppPictureInPictureFrames;
  const floatableFrames = obj.getFloatableFrames();
  const found = floatableFrames.filter((surface) => {
    const obj = conjurePreviewSurface;
    return !obj.isConjurePreviewSurface(surface.surface);
  });
  const mapped = found.map((surface) => getChannelIdForEmbeddedSurfaceDefault(surface.surface));
  const found1 = mapped.filter((item) => null != item);
  return found1.sort();
}
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/useBackgroundConjureAppChannelIds.tsx");

export default function useBackgroundConjureAppChannelIds() {
  const obj = get_initialized;
  return obj.useStateFromStoresArray(conjureAppPictureInPictureFrames.FLOATING_APP_STORES, getChannelIds);
};
