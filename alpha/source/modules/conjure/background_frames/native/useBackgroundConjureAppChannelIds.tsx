// Module ID: 18811
// Function ID: 18812
// Name: useBackgroundConjureAppChannelIds
// Dependencies: [18667, 6849, 504, 2]
// Exports: default

// Module 18811 (useBackgroundConjureAppChannelIds)
import get_initialized from "get initialized" /* 504 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6849 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 18667 */;
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
