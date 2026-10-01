// Module ID: 12518
// Function ID: 12519
// Name: useOverlayLayoutDriver
// Dependencies: [19, 4566, 7741, 4837, 1177, 2]
// Exports: useFooterLayoutAnimation, useHeaderLayoutAnimation, useOverlayLayoutDriver

// Module 12518 (useOverlayLayoutDriver)
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const __initData = { code: "function useOverlayLayoutDriverTsx1(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
const __initData2 = { code: "function useOverlayLayoutDriverTsx2(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
let result = size.fileFinishedImporting("modules/media_viewer/native/useOverlayLayoutDriver.tsx");

export const useOverlayLayoutDriver = function useOverlayLayoutDriver() {
  let sharedValue;
  let obj = sharedValue(4566);
  sharedValue = obj.useSharedValue(0);
  let obj2 = sharedValue(7741);
  const mediaViewerDimensions = obj2.useMediaViewerDimensions();
  const items = [sharedValue, , ];
  ({ height: arr[1], width: arr[2] } = mediaViewerDimensions);
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const obj = timing;
    const obj2 = { duration: 300, easing: native.STANDARD_EASING };
    const result = set(obj.withTiming(1, obj2));
  }, items);
  return sharedValue;
};
export const useHeaderLayoutAnimation = function useHeaderLayoutAnimation(animationDriver) {
  _require = animationDriver;
  let obj = require("ReanimatedRexport");
  const fn = function o() {
    let items;
    let obj3;
    let obj4;
    const obj = { transform: items, opacity: obj4.interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]) };
    const obj2 = { translateY: obj3.interpolate(animationDriver.get(), [0, 0.75, 1], [-50, -50, 0]) };
    items = [obj2];
    obj3 = ReanimatedRexport;
    obj4 = ReanimatedRexport;
    return obj;
  };
  let obj2 = { interpolate: require("ReanimatedRexport").interpolate, animationDriver };
  fn.__closure = obj2;
  fn.__workletHash = 13622939479876;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
};
export const useFooterLayoutAnimation = function useFooterLayoutAnimation(overlayLayoutDriver) {
  _require = overlayLayoutDriver;
  let obj = require("ReanimatedRexport");
  const fn = function n() {
    let items;
    let obj3;
    let obj4;
    const obj = { transform: items, opacity: obj4.interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [0, 0, 1]) };
    const obj2 = { translateY: obj3.interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [50, 50, 0]) };
    items = [obj2];
    obj3 = ReanimatedRexport;
    obj4 = ReanimatedRexport;
    return obj;
  };
  let obj2 = { interpolate: require("ReanimatedRexport").interpolate, animationDriver: overlayLayoutDriver };
  fn.__closure = obj2;
  fn.__workletHash = 15220711492711;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
};
