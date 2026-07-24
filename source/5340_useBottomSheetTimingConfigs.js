// Module ID: 5340
// Function ID: 45930
// Name: useBottomSheetTimingConfigs
// Dependencies: [31, 5190]
// Exports: useBottomSheetTimingConfigs

// Module 5340 (useBottomSheetTimingConfigs)
import { useMemo } from "result";


export const useBottomSheetTimingConfigs = function useBottomSheetTimingConfigs(arg0) {
  let closure_0 = arg0;
  const items = [, , ];
  ({ duration: arr[0], easing: arr[1], reduceMotion: arr[2] } = arg0);
  return useMemo(() => {
    const obj = {};
    let ANIMATION_EASING = lib.easing;
    if (!ANIMATION_EASING) {
      ANIMATION_EASING = lib(outer1_1[1]).ANIMATION_EASING;
    }
    obj.easing = ANIMATION_EASING;
    let ANIMATION_DURATION = lib.duration;
    if (!ANIMATION_DURATION) {
      ANIMATION_DURATION = lib(outer1_1[1]).ANIMATION_DURATION;
    }
    obj.duration = ANIMATION_DURATION;
    obj.reduceMotion = lib.reduceMotion;
    return obj;
  }, items);
};
