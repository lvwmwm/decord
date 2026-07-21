// Module ID: 12114
// Function ID: 93326
// Name: useOverlayLayoutDriver
// Dependencies: []
// Exports: useFooterLayoutAnimation, useHeaderLayoutAnimation, useOverlayLayoutDriver

// Module 12114 (useOverlayLayoutDriver)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = { code: "function useOverlayLayoutDriverTsx1(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
let closure_4 = { code: "function useOverlayLayoutDriverTsx2(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/media_viewer/native/useOverlayLayoutDriver.tsx");

export const useOverlayLayoutDriver = function useOverlayLayoutDriver() {
  const sharedValue = arg1(dependencyMap[1]).useSharedValue(0);
  const arg1 = sharedValue;
  const obj = arg1(dependencyMap[1]);
  const mediaViewerDimensions = arg1(dependencyMap[2]).useMediaViewerDimensions();
  const items = [sharedValue, , ];
  ({ height: arr[1], width: arr[2] } = mediaViewerDimensions);
  const effect = React.useEffect(() => {
    let obj = sharedValue(closure_1[3]);
    obj = { duration: 300, easing: sharedValue(closure_1[4]).STANDARD_EASING };
    const result = sharedValue.set(obj.withTiming(1, obj));
  }, items);
  return sharedValue;
};
export const useHeaderLayoutAnimation = function useHeaderLayoutAnimation(animationDriver) {
  const arg1 = animationDriver;
  let obj = arg1(dependencyMap[1]);
  const fn = function o() {
    let obj = {};
    obj = {};
    const items = [-50, -50, 0];
    obj.translateY = arg0(closure_1[1]).interpolate(arg0.get(), [], items);
    const items1 = [obj];
    obj.transform = items1;
    const obj3 = arg0(closure_1[1]);
    obj.opacity = arg0(closure_1[1]).interpolate(arg0.get(), [], []);
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[1]).interpolate, animationDriver };
  fn.__closure = obj;
  fn.__workletHash = 13622939479876;
  fn.__initData = closure_3;
  return obj.useAnimatedStyle(fn);
};
export const useFooterLayoutAnimation = function useFooterLayoutAnimation(overlayLayoutDriver) {
  const arg1 = overlayLayoutDriver;
  let obj = arg1(dependencyMap[1]);
  const fn = function n() {
    let obj = {};
    obj = { translateY: arg0(closure_1[1]).interpolate(arg0.get(), [], ["<string:4232078610>", "<string:1305670057>", "<string:1900045586>"]) };
    const items = [obj];
    obj.transform = items;
    const obj3 = arg0(closure_1[1]);
    obj.opacity = arg0(closure_1[1]).interpolate(arg0.get(), [], []);
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[1]).interpolate, animationDriver: overlayLayoutDriver };
  fn.__closure = obj;
  fn.__workletHash = 15220711492711;
  fn.__initData = closure_4;
  return obj.useAnimatedStyle(fn);
};
