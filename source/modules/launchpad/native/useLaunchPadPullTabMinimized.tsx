// Module ID: 15514
// Function ID: 118399
// Name: nativeEventEmitter
// Dependencies: []
// Exports: default

// Module 15514 (nativeEventEmitter)
let closure_2 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const NativeEventEmitter = tmp2.NativeEventEmitter;
const DCDScrollTracker = tmp2.NativeModules.DCDScrollTracker;
let nativeEventEmitter;
if (DCDScrollTracker) {
  const prototype = NativeEventEmitter.prototype;
  nativeEventEmitter = new NativeEventEmitter(DCDScrollTracker);
}
let closure_4 = { code: "function useLaunchPadPullTabMinimizedTsx1(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}" };
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/launchpad/native/useLaunchPadPullTabMinimized.tsx");

export default function useLaunchPadPullTabMinimized(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const arg1 = launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const dependencyMap = launchPadPullTabState;
  const isVoicePanelFullscreen = arg1(dependencyMap[3]).useIsVoicePanelFullscreen();
  let closure_2 = isVoicePanelFullscreen;
  const tmp2 = function useIsMinimizedDuringScroll() {
    const sharedValue = launchPadSharedState(launchPadPullTabState[2]).useSharedValue(false);
    const launchPadSharedState = sharedValue;
    const items = [sharedValue];
    const effect = isVoicePanelFullscreen.useEffect(() => {
      let closure_0 = -1;
      let addListenerResult;
      if (null != closure_3) {
        addListenerResult = closure_3.addListener("isScrollingOrDragging", (isScrollingOrDragging) => {
          clearTimeout(v1);
          if (isScrollingOrDragging.isScrollingOrDragging) {
            const result = v1.set(true);
          } else {
            const _setTimeout = setTimeout;
            const v1 = setTimeout(() => {
              const result = closure_0.set(false);
            }, 1000);
          }
        });
      }
      return () => {
        clearTimeout(closure_0);
        if (null != addListenerResult) {
          addListenerResult.remove();
        }
      };
    }, items);
    return sharedValue;
  }();
  const nativeEventEmitter = tmp2;
  const obj = arg1(dependencyMap[3]);
  const fn = function u() {
    let value = launchPadPullTabState.get().minimized || isVoicePanelFullscreen;
    if (value) {
      value = launchPadSharedState.get() <= 0;
    }
    if (!value) {
      value = tmp2.get();
    }
    return value;
  };
  fn.__closure = { launchPadPullTabState, isVoicePanelOpen: isVoicePanelFullscreen, launchPadSharedState, isMinimizedDuringScroll: tmp2 };
  fn.__workletHash = 14263056934448;
  fn.__initData = closure_4;
  return arg1(dependencyMap[2]).useDerivedValue(fn);
};
