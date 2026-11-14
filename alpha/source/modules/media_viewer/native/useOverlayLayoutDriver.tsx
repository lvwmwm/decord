// Module ID: 15201
// Function ID: 15202
// Name: useOverlayLayoutDriver
// Dependencies: [19, 1655, 10195, 5548, 1187, 2]
// Exports: useFooterLayoutAnimation, useHeaderLayoutAnimation, useOverlayLayoutDriver

// Module 15201 (useOverlayLayoutDriver)
import native from "native" /* 1187 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let closure_3 = { code: "(function useOverlayLayoutDriverTsx1(){let[interpolate,animationDriver]=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};})" };
let closure_4 = { code: "(function useOverlayLayoutDriverTsx2(){let[interpolate,animationDriver]=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};})" };
let result = size.fileFinishedImporting("modules/media_viewer/native/useOverlayLayoutDriver.tsx");

export function useOverlayLayoutDriver() {
  let sharedValue;
  let obj = sharedValue(1655);
  sharedValue = obj.useSharedValue(0);
  let obj2 = sharedValue(10195);
  const mediaViewerDimensions = obj2.useMediaViewerDimensions();
  const items = [sharedValue, , ];
  ({ height: arr[1], width: arr[2] } = mediaViewerDimensions);
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const obj = timing_timing;
    const obj2 = { duration: 300, easing: native.STANDARD_EASING };
    const result = set(obj.withTiming(1, obj2));
  }, items);
  return sharedValue;
}
export function useHeaderLayoutAnimation(animationDriver) {
  let tmp2;
  let tmp3;
  let tmp4;
  let items = [closure_3, , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items[1] = _mod1655.interpolate;
  items[2] = animationDriver;
  let c0;
  let c1;
  [tmp2, tmp3, tmp4] = items;
  function useOverlayLayoutDriverTsx1() {
    let items;
    const obj = { transform: items, opacity: _undefined(_undefined2.get(), [0, 0.75, 1], [0, 0, 1]) };
    items = [{ translateY: _undefined(_undefined2.get(), [0, 0.75, 1], [-50, -50, 0]) }];
    ({ translateY: _undefined(_undefined2.get(), [0, 0.75, 1], [-50, -50, 0]) });
    return obj;
  }
  const items1 = [tmp3, tmp4];
  useOverlayLayoutDriverTsx1.__closure = items1;
  useOverlayLayoutDriverTsx1.__workletHash = 9211883579773;
  useOverlayLayoutDriverTsx1.__initData = tmp2;
  return useAnimatedStyle(useOverlayLayoutDriverTsx1);
}
export function useFooterLayoutAnimation(overlayLayoutDriver) {
  let tmp2;
  let tmp3;
  let tmp4;
  let items = [closure_4, , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items[1] = _mod1655.interpolate;
  items[2] = overlayLayoutDriver;
  let c0;
  let c1;
  [tmp2, tmp3, tmp4] = items;
  function useOverlayLayoutDriverTsx2() {
    let items;
    const obj = { transform: items, opacity: _undefined(_undefined2.get(), [0, 0.75, 1], [0, 0, 1]) };
    items = [{ translateY: _undefined(_undefined2.get(), [0, 0.75, 1], [50, 50, 0]) }];
    ({ translateY: _undefined(_undefined2.get(), [0, 0.75, 1], [50, 50, 0]) });
    return obj;
  }
  const items1 = [tmp3, tmp4];
  useOverlayLayoutDriverTsx2.__closure = items1;
  useOverlayLayoutDriverTsx2.__workletHash = 11051399715838;
  useOverlayLayoutDriverTsx2.__initData = tmp2;
  return useAnimatedStyle(useOverlayLayoutDriverTsx2);
}
