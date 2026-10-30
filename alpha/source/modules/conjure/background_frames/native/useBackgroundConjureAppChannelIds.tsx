// Module ID: 18768
// Function ID: 18769
// Name: useBackgroundConjureAppChannelIds
// Dependencies: [18625, 6843, 504, 2]
// Exports: default

// Module 18768 (useBackgroundConjureAppChannelIds)
import get_initialized from "get initialized" /* 504 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6843 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 18625 */;
import size from "module_2" /* 2 */;

function getChannelIds() {
  const obj = conjureAppPictureInPictureFrames;
  const floatableFrames = obj.getFloatableFrames();
  const mapped = floatableFrames.map((surface) => getChannelIdForEmbeddedSurfaceDefault(surface.surface));
  const found = mapped.filter((item) => null != item);
  return found.sort();
}
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/useBackgroundConjureAppChannelIds.tsx");

export default function useBackgroundConjureAppChannelIds() {
  const obj = get_initialized;
  return obj.useStateFromStoresArray(conjureAppPictureInPictureFrames.FLOATING_APP_STORES, getChannelIds);
};
