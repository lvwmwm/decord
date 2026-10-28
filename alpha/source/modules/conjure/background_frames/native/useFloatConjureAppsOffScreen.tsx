// Module ID: 18741
// Function ID: 18742
// Name: useFloatConjureAppsOffScreen
// Dependencies: [19, 18255, 18332, 558, 576, 504, 6813, 2]

// Module 18741 (useFloatConjureAppsOffScreen)
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6813 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 18332 */;
import react from "react" /* 19 */;
import VisibleChannelScreenStore from "VisibleChannelScreenStore" /* 18255 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getFloatableFrameIds() {
  const obj = conjureAppPictureInPictureFrames;
  const floatableFrames = obj.getFloatableFrames();
  return floatableFrames.map((id) => id.id);
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFloatConjureAppsOffScreen() {
  let closure_0;
  let first;
  let tmp7;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(channelId) {
      return channelId.channelId;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let tmp5 = VisibleChannelScreenStore(first);
  _require = tmp5;
  const tmpResult = require("get initialized");
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp(18332).FLOATING_APP_STORES, getFloatableFrameIds);
  if (cResult[1] !== tmp5) {
    const fn2 = function c() {
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
    };
    cResult[1] = tmp5;
    cResult[2] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === stateFromStoresArray) {
    let tmp8;
    if (cResult[4] === tmp5) {
      tmp8 = cResult[5];
    }
    let tmp9 = react;
    const effect = react.useEffect(tmp7, tmp8);
  }
  const items = [stateFromStoresArray, tmp5];
  cResult[3] = stateFromStoresArray;
  cResult[4] = tmp5;
  cResult[5] = items;
  tmp8 = items;
}) : (function useFloatConjureAppsOffScreen() {
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
});
let result = size.fileFinishedImporting("modules/conjure/background_frames/native/useFloatConjureAppsOffScreen.tsx");

export default tmp2;
