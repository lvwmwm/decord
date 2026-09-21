// Module ID: 7074
// Function ID: 7075
// Dependencies: [19, 6864]
// Exports: useBottomSheetTimingConfigs

// Module 7074
import _mod19 from "module_19" /* 19 */;
import value2 from "value2" /* 6864 */;

const useMemo = _mod19.useMemo;

export const useBottomSheetTimingConfigs = (arg0) => {
  const easing = arg0;
  const items = [, , ];
  ({ duration: arr[0], easing: arr[1], reduceMotion: arr[2] } = arg0);
  return useMemo(() => {
    let ANIMATION_EASING = easing.easing;
    if (!ANIMATION_EASING) {
      ANIMATION_EASING = value2.ANIMATION_EASING;
    }
    const obj = { easing: ANIMATION_EASING, duration: null, reduceMotion: null };
    let ANIMATION_DURATION = tmp.duration;
    if (!ANIMATION_DURATION) {
      ANIMATION_DURATION = value2.ANIMATION_DURATION;
    }
    obj.duration = ANIMATION_DURATION;
    obj.reduceMotion = easing.reduceMotion;
    return obj;
  }, items);
};
