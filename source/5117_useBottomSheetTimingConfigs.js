// Module ID: 5117
// Function ID: 43529
// Name: useBottomSheetTimingConfigs
// Dependencies: []
// Exports: useBottomSheetTimingConfigs

// Module 5117 (useBottomSheetTimingConfigs)
const useMemo = require(dependencyMap[0]).useMemo;

export const useBottomSheetTimingConfigs = function useBottomSheetTimingConfigs(arg0) {
  const require = arg0;
  const items = [, , ];
  ({ duration: arr[0], easing: arr[1], reduceMotion: arr[2] } = arg0);
  return useMemo((self) => {
    const obj = {};
    let ANIMATION_EASING = self.easing;
    if (!ANIMATION_EASING) {
      ANIMATION_EASING = self(closure_1[1]).ANIMATION_EASING;
    }
    obj.easing = ANIMATION_EASING;
    let ANIMATION_DURATION = self.duration;
    if (!ANIMATION_DURATION) {
      ANIMATION_DURATION = self(closure_1[1]).ANIMATION_DURATION;
    }
    obj.duration = ANIMATION_DURATION;
    obj.reduceMotion = self.reduceMotion;
    return obj;
  }, items);
};
