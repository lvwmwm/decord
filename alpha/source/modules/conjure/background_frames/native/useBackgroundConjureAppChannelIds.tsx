// Module ID: 19626
// Function ID: 19627
// Name: useBackgroundConjureAppChannelIds
// Dependencies: [17028, 7349, 7030, 504, 2]
// Exports: default

// Module 19626 (useBackgroundConjureAppChannelIds)
import get_initialized from "get initialized" /* 504 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 7030 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7349 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 17028 */;
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
