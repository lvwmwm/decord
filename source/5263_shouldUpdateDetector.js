// Module ID: 5263
// Function ID: 45386
// Name: shouldUpdateDetector
// Dependencies: []
// Exports: useMountReactions

// Module 5263 (shouldUpdateDetector)
function shouldUpdateDetector(arg0, handlerTag) {
  if (undefined === arg0) {
    return false;
  } else {
    const result = require(dependencyMap[1]).transformIntoHandlerTags(arg0);
    for (const item10012 of result) {
      let tmp5 = arg1;
      if (item10012 === arg1.handlerTag) {
        obj2.return();
        let flag = true;
        return true;
      } else {
        // continue
      }
    }
    return false;
  }
}
const _module = require(dependencyMap[0]);
({ useEffect: closure_4, useLayoutEffect: closure_5 } = _module);

export const useMountReactions = function useMountReactions(detectorUpdater, current2) {
  const global = detectorUpdater;
  const require = current2;
  if (undefined === closure_3) {
    let prop;
    if (null != global) {
      prop = global.__DISCORD_RNGH_USE_LAYOUT_EFFECT__;
    }
    closure_3 = false !== prop;
  }
  function subscribe() {
    const MountRegistry = arg1(subscribe[2]).MountRegistry;
    return MountRegistry.addMountListener((arg0) => {
      if (closure_1.isMounted) {
        const attachedGestures = closure_1.attachedGestures;
        for (const item10016 of attachedGestures) {
          let requireToFail = item10016.config.requireToFail;
          let simultaneousWith = item10016.config.simultaneousWith;
          let tmp6 = closure_6;
          let tmp7 = arg0;
          if (!closure_6(item10016.config.blocksHandlers, arg0)) {
            let tmp8 = closure_6;
            let tmp9 = requireToFail;
            let tmp10 = arg0;
            if (!closure_6(requireToFail, arg0)) {
              let tmp11 = closure_6;
              let tmp12 = simultaneousWith;
              let tmp13 = arg0;
            }
          }
          let tmp14 = closure_0;
          let tmp15 = closure_0();
          obj2.return();
        }
      } else {
        if (!tmp2) {
          const result = obj.__DISCORD_RNGH_ON_STALE_MOUNT__();
        }
        const tmp2 = null == closure_0 || null == closure_0.__DISCORD_RNGH_ON_STALE_MOUNT__;
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
