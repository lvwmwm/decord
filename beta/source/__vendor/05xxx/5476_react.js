// Module ID: 5476
// Function ID: 5477
// Name: react
// Dependencies: [19, 5455]
// Exports: useMountReactions

// Module 5476 (react)
import react from "react" /* 19 */;
import MountRegistry2 from "MountRegistry" /* 5455 */;

function shouldUpdateDetector(arg0, handlerTag) {
  if (undefined === arg0) {
    return false;
  } else {
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (nextResult === handlerTag) {
        iter.return();
        let flag2 = true;
        return true;
      } else {
        if (null !== tmp4) {
          if (typeof tmp4 === "object") {
            if ("current" in tmp4) {
              let current = tmp4.current;
              handlerTag = undefined;
              if (current != null) {
                handlerTag = current.handlerTag;
              }
              if (handlerTag === handlerTag.handlerTag) {
                iter.return();
                let flag = true;
                return true;
              }
            }
          }
        }
        continue;
      }
    }
    return false;
  }
}
const useEffect = react.useEffect;

export function useMountReactions(detectorUpdater, current2) {
  let closure_0 = detectorUpdater;
  let closure_1 = current2;
  const items = [detectorUpdater, current2];
  const tmp = useEffect(() => {
    let isMounted;
    const MountRegistry = MountRegistry2.MountRegistry;
    return MountRegistry.addMountListener((arg0) => {
      if (isMounted.isMounted) {
        if (isMounted.hasExternalRelations) {
          const attachedGestures = tmp.attachedGestures;
          if (!attachedGestures.includes(arg0)) {
            const attachedGestures2 = tmp.attachedGestures;
            const iter = attachedGestures2[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let requireToFail = nextResult.config.requireToFail;
              let simultaneousWith = nextResult.config.simultaneousWith;
              let tmp7 = shouldUpdateDetector;
              if (!shouldUpdateDetector(nextResult.config.blocksHandlers, arg0)) {
              }
              let tmp11 = detectorUpdater();
              iter.return();
            }
          }
        }
      }
    });
  }, items);
}
