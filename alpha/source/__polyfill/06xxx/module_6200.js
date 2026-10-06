// Module ID: 6200
// Function ID: 6201
// Dependencies: [19, 6178, 6181]
// Exports: useMountReactions

// Module 6200
import react from "react" /* 19 */;
import selectProperties from "selectProperties" /* 6178 */;
import MountRegistry2 from "MountRegistry" /* 6181 */;

function shouldUpdateDetector(arg0, handlerTag) {
  if (undefined === arg0) {
    return false;
  } else {
    const obj = selectProperties;
    const result = obj.transformIntoHandlerTags(arg0);
    for (const item10012 of result) {
      if (item10012 === handlerTag.handlerTag) {
        obj2.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
}
const useEffect = react.useEffect;

export const useMountReactions = function useMountReactions(detectorUpdater, current2) {
  let closure_0 = detectorUpdater;
  let closure_1 = current2;
  const items = [detectorUpdater, current2];
  useEffect(() => {
    const MountRegistry = MountRegistry2.MountRegistry;
    return MountRegistry.addMountListener((arg0) => {
      if (current2.isMounted) {
        const attachedGestures = current2.attachedGestures;
        const iter = attachedGestures[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let requireToFail = nextResult.config.requireToFail;
          let simultaneousWith = nextResult.config.simultaneousWith;
          let tmp5 = shouldUpdateDetector;
          if (!shouldUpdateDetector(nextResult.config.blocksHandlers, arg0)) {
          }
          let tmp9 = detectorUpdater();
          iter.return();
        }
      }
    });
  }, items);
};
