// Module ID: 18709
// Function ID: 18710
// Name: useBackgroundConjureAppChannelIds
// Dependencies: [18566, 6836, 558, 504, 2]
// Exports: default

// Module 18709 (useBackgroundConjureAppChannelIds)
import get_initialized from "get initialized" /* 504 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6836 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 18566 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getChannelIds() {
  const obj = conjureAppPictureInPictureFrames;
  const floatableFrames = obj.getFloatableFrames();
  const mapped = floatableFrames.map((surface) => getChannelIdForEmbeddedSurfaceDefault(surface.surface));
  const found = mapped.filter((item) => null != item);
  return found.sort();
}
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/background_frames/native/useBackgroundConjureAppChannelIds.tsx");

export default function useBackgroundConjureAppChannelIds() {
  const obj = get_initialized;
  return obj.useStateFromStoresArray(conjureAppPictureInPictureFrames.FLOATING_APP_STORES, getChannelIds);
};
