// Module ID: 14905
// Function ID: 14906
// Name: useMediaItemSpoilerState
// Dependencies: [32, 19, 8962, 1652, 5377, 1187, 1705, 2]
// Exports: useMediaItemSpoilerState

// Module 14905 (useMediaItemSpoilerState)
import native from "native" /* 1187 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5377 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let closure_4 = { code: "(function useMediaItemSpoilerStateTsx1(){let[scheduleOnRN,setSpoilerActive,hasSpoiler]=this.__closure;scheduleOnRN(setSpoilerActive,hasSpoiler);})" };
let closure_5 = { code: "(function useMediaItemSpoilerStateTsx2(){let[spoilerOpacity]=this.__closure;return{opacity:spoilerOpacity.get()};})" };
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export function useMediaItemSpoilerState(index) {
  let mediaItemHasSpoiler;
  let sharedValue;
  let tmp10;
  let tmp5;
  let tmp9;
  const tmp = mediaItemHasSpoiler;
  let obj = mediaItemHasSpoiler(8962);
  mediaItemHasSpoiler = obj.useMediaItemHasSpoiler(index);
  const tmp4 = sharedValue(react.useState(mediaItemHasSpoiler), 2);
  [tmp5, dependencyMap] = tmp4;
  const tmp6 = mediaItemHasSpoiler(1652);
  let num = 0;
  const useSharedValue = tmp6.useSharedValue;
  const obj2 = react;
  if (mediaItemHasSpoiler) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items = [mediaItemHasSpoiler, sharedValue];
  const effect = obj2.useEffect(() => {
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (mediaItemHasSpoiler) {
      num = 1;
    }
    const items = [closure_4, , , ];
    const obj = { duration: 200, easing: native.STANDARD_EASING };
    items[1] = _mod1705.scheduleOnRN;
    items[2] = dependencyMap;
    items[3] = mediaItemHasSpoiler;
    let c0;
    let c1;
    let c2;
    [tmp6, tmp7, tmp8, tmp9] = items;
    function useMediaItemSpoilerStateTsx1() {
      _undefined(c1, c2);
    }
    const items1 = [tmp7, tmp8, tmp9];
    useMediaItemSpoilerStateTsx1.__closure = items1;
    useMediaItemSpoilerStateTsx1.__workletHash = 9307516647300;
    useMediaItemSpoilerStateTsx1.__initData = tmp6;
    const result = set(withTiming(num, obj, "respect-motion-settings", useMediaItemSpoilerStateTsx1));
  }, items);
  let items1 = [closure_5, sharedValue];
  let c0;
  [tmp9, tmp10] = items1;
  function useMediaItemSpoilerStateTsx2() {
    const obj = { opacity: _undefined.get() };
    return obj;
  }
  const items2 = [tmp10];
  useMediaItemSpoilerStateTsx2.__closure = items2;
  useMediaItemSpoilerStateTsx2.__workletHash = 9056847135964;
  useMediaItemSpoilerStateTsx2.__initData = tmp9;
  const items3 = [tmp5, ];
  const tmpResult = tmp(1652);
  items3[1] = tmpResult.useAnimatedStyle(useMediaItemSpoilerStateTsx2);
  return items3;
}
