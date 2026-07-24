// Module ID: 15696
// Function ID: 121000
// Name: nativeEventEmitter
// Dependencies: [31, 27, 3991, 10662, 2]
// Exports: default

// Module 15696 (nativeEventEmitter)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";

const require = arg1;
const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;
const DCDScrollTracker = get_ActivityIndicator.NativeModules.DCDScrollTracker;
let nativeEventEmitter;
if (DCDScrollTracker) {
  const prototype = NativeEventEmitter.prototype;
  nativeEventEmitter = new NativeEventEmitter(DCDScrollTracker);
}
let closure_4 = { code: "function useLaunchPadPullTabMinimizedTsx1(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}" };
let result = require("module_3991").fileFinishedImporting("modules/launchpad/native/useLaunchPadPullTabMinimized.tsx");

export default function useLaunchPadPullTabMinimized(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const isVoicePanelFullscreen = launchPadSharedState(launchPadPullTabState[3]).useIsVoicePanelFullscreen();
  const tmp2 = (function useIsMinimizedDuringScroll() {
    const sharedValue = launchPadSharedState(launchPadPullTabState[2]).useSharedValue(false);
    const items = [sharedValue];
    const effect = isVoicePanelFullscreen.useEffect(() => {
      let c0 = -1;
      let addListenerResult;
      if (null != closure_3) {
        addListenerResult = closure_3.addListener("isScrollingOrDragging", (isScrollingOrDragging) => {
          clearTimeout(timeout);
          if (isScrollingOrDragging.isScrollingOrDragging) {
            let result = v1.set(true);
          } else {
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              const result = c0.set(false);
            }, 1000);
          }
        });
      }
      let closure_1 = addListenerResult;
      return () => {
        clearTimeout(c0);
        if (null != addListenerResult) {
          addListenerResult.remove();
        }
      };
    }, items);
    return sharedValue;
  })();
  const nativeEventEmitter = tmp2;
  const obj = launchPadSharedState(launchPadPullTabState[3]);
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
  return launchPadSharedState(launchPadPullTabState[2]).useDerivedValue(fn);
};
