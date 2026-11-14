// Module ID: 19918
// Function ID: 19919
// Name: useFloatConjureAppsOffScreen
// Dependencies: [19, 19361, 16993, 504, 7022, 2]
// Exports: default

// Module 19918 (useFloatConjureAppsOffScreen)
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 7022 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 16993 */;
import react from "react" /* 19 */;
import VisibleChannelScreenStore from "VisibleChannelScreenStore" /* 19361 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getFloatableFrameIds() {
  const obj = conjureAppPictureInPictureFrames;
  const floatableFrames = obj.getFloatableFrames();
  return floatableFrames.map((id) => id.id);
}
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/useFloatConjureAppsOffScreen.tsx");

export default function useFloatConjureAppsOffScreen() {
  let closure_0;
  const tmp = VisibleChannelScreenStore((channelId) => channelId.channelId);
  _require = tmp;
  let obj = require("get initialized");
  const items = [obj.useStateFromStoresArray(require("conjureAppPictureInPictureFrames").FLOATING_APP_STORES, getFloatableFrameIds), tmp];
  const effect = react.useEffect(() => {
    const obj = conjureAppPictureInPictureFrames;
    const floatableFrames = obj.getFloatableFrames();
    for (const item10012 of floatableFrames) {
      let tmp2 = item10012;
      if (getChannelIdForEmbeddedSurfaceDefault(item10012.surface) === closure_0) {
        let obj3 = conjureAppPictureInPictureFrames;
        let result = obj3.exitConjureAppPictureInPicture(tmp2.id);
      } else {
        let obj2 = conjureAppPictureInPictureFrames;
        let result1 = obj2.enterConjureAppPictureInPicture(tmp2.id);
      }
      continue;
    }
    const obj4 = conjureAppPictureInPictureFrames;
    const strandedFloatingFrames = obj4.getStrandedFloatingFrames();
    for (const item10050 of strandedFloatingFrames) {
      let obj5 = conjureAppPictureInPictureFrames;
      let result2 = obj5.exitConjureAppPictureInPicture(item10050.id);
      continue;
    }
  }, items);
};
