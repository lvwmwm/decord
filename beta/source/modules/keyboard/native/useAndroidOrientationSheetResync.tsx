// Module ID: 11563
// Function ID: 11564
// Name: useAndroidOrientationSheetResync
// Dependencies: [19, 1364, 2]
// Exports: default

// Module 11563 (useAndroidOrientationSheetResync)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/keyboard/native/useAndroidOrientationSheetResync.tsx");

export default function useAndroidOrientationSheetResync(animatedIndex) {
  let _NumberResult;
  animatedIndex = animatedIndex.animatedIndex;
  let bottomSheetRef = animatedIndex.bottomSheetRef;
  const containerHeight = animatedIndex.containerHeight;
  const isYeeted = animatedIndex.isYeeted;
  const snapPoints = animatedIndex.snapPoints;
  let c6;
  let obj = containerHeight;
  const forceMaxHeight = animatedIndex.forceMaxHeight;
  const ref = containerHeight.useRef(false);
  let num = 0;
  if (forceMaxHeight) {
    num = 1;
  }
  let _Number = Number;
  if (Array.isArray(snapPoints)) {
    let first = snapPoints[num];
    if (first == null) {
      first = snapPoints[0];
    }
    _NumberResult = _Number(first);
  } else {
    _NumberResult = _Number(snapPoints);
  }
  c6 = _NumberResult;
  const items = [animatedIndex, bottomSheetRef, containerHeight, isYeeted, num, _NumberResult];
  const layoutEffect = obj.useLayoutEffect(() => {
    let closure_1;
    let tmp = isYeeted;
    if (!tmp) {
      const obj = animatedIndex(bottomSheetRef[1]);
      if (obj.isAndroid()) {
        if (ref.current) {
          const _Number = Number;
          const NumberResult = Number(containerHeight);
          const _Number2 = Number;
          if (Number.isFinite(NumberResult)) {
            const _Number3 = Number;
            const tmp8 = c6;
            if (Number.isFinite(c6)) {
              const _Math = Math;
              num = 0;
              const bound = Math.max(0, NumberResult - tmp8);
              let result = bound.set(num);
              let current = bottomSheetRef.current;
              const tmp11 = num;
              if (current != null) {
                current.setToIndex(tmp11, bound);
              }
              const _requestAnimationFrame = requestAnimationFrame;
              bottomSheetRef = requestAnimationFrame(function apply() {
                const result = animatedIndex.set(num);
                const current = bottomSheetRef.current;
                const tmp = num;
                if (current != null) {
                  current.setToIndex(tmp, bound);
                }
              });
              return () => cancelAnimationFrame(closure_1);
            }
          }
        } else {
          tmp4.current = true;
        }
      }
    }
  }, items);
};
