// Module ID: 6509
// Function ID: 6510
// Name: react
// Dependencies: [19, 6299]
// Exports: useBottomSheetTimingConfigs

// Module 6509 (react)
import react from "react" /* 19 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6299 */;

const useMemo = react.useMemo;

export const useBottomSheetTimingConfigs = (arg0) => {
  const easing = arg0;
  const items = [, , ];
  ({ duration: arr[0], easing: arr[1], reduceMotion: arr[2] } = arg0);
  return useMemo(() => {
    let ANIMATION_DURATION;
    const ANIMATION_EASING = easing.easing || GESTURE_SOURCE.ANIMATION_EASING;
    const obj = { easing: ANIMATION_EASING, duration: ANIMATION_DURATION, reduceMotion: easing.reduceMotion };
    ANIMATION_DURATION = tmp.duration || GESTURE_SOURCE.ANIMATION_DURATION;
    return obj;
  }, items);
};
