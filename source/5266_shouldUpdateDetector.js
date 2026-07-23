// Module ID: 5266
// Function ID: 45405
// Name: shouldUpdateDetector
// Dependencies: [31, 5240, 5242]
// Exports: useMountReactions

// Module 5266 (shouldUpdateDetector)
import result from "result";

let closure_4;
let closure_5;
function shouldUpdateDetector(arg0, handlerTag) {
  if (undefined === arg0) {
    return false;
  } else {
    const result = require(5240) /* transformIntoHandlerTags */.transformIntoHandlerTags(arg0);
    for (const item10012 of result) {
      let tmp5 = arg1;
      if (item10012 === arg1.handlerTag) {
        obj2.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
}
({ useEffect: closure_4, useLayoutEffect: closure_5 } = result);

export const useMountReactions = function useMountReactions(detectorUpdater, current2) {
  const _global = detectorUpdater;
  let closure_1 = current2;
  if (undefined === closure_3) {
    let prop;
    if (null != _global) {
      prop = _global.__DISCORD_RNGH_USE_LAYOUT_EFFECT__;
    }
    closure_3 = false !== prop;
  }
  function subscribe() {
    const MountRegistry = current2(subscribe[2]).MountRegistry;
    return MountRegistry.addMountListener((arg0) => {
      if (outer1_1.isMounted) {
        const attachedGestures = outer1_1.attachedGestures;
        for (const item10016 of attachedGestures) {
          let requireToFail = item10016.config.requireToFail;
          let simultaneousWith = item10016.config.simultaneousWith;
          let tmp6 = outer2_6;
          let tmp7 = arg0;
          if (!outer2_6(item10016.config.blocksHandlers, arg0)) {
            let tmp8 = outer2_6;
            let tmp9 = requireToFail;
            let tmp10 = arg0;
            if (!outer2_6(requireToFail, arg0)) {
              let tmp11 = outer2_6;
              let tmp12 = simultaneousWith;
              let tmp13 = arg0;
            }
          }
          let tmp14 = outer1_0;
          let tmp15 = outer1_0();
          obj2.return();
        }
      } else {
        if (!tmp2) {
          const result = obj.__DISCORD_RNGH_ON_STALE_MOUNT__();
        }
        tmp2 = null == closure_0 || null == closure_0.__DISCORD_RNGH_ON_STALE_MOUNT__;
      }
    });
  }
  const items = [detectorUpdater, current2];
  callback2(() => {
    if (closure_3) {
      return subscribe();
    }
  }, items);
  const items1 = [detectorUpdater, current2];
  callback(() => {
    if (!closure_3) {
      return subscribe();
    }
  }, items1);
};
