// Module ID: 16797
// Function ID: 16798
// Name: useLaunchPadPullTabMinimized
// Dependencies: [19, 17, 4566, 8963, 2]
// Exports: default

// Module 16797 (useLaunchPadPullTabMinimized)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let isScrollingOrDragging;

const DCDScrollTracker = react_native.NativeModules.DCDScrollTracker;
let tmp32;
if (DCDScrollTracker) {
  const self = this;
  const self2 = this;
  tmp32 = new tmp3(DCDScrollTracker);
}
let closure_3 = tmp32;
const __initData = { code: "function useLaunchPadPullTabMinimizedTsx1(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}" };
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadPullTabMinimized.tsx");

export default function useLaunchPadPullTabMinimized(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  let obj = launchPadSharedState(launchPadPullTabState[3]);
  const isVoicePanelFullscreen = obj.useIsVoicePanelFullscreen();
  const obj2 = launchPadSharedState(launchPadPullTabState[2]);
  const sharedValue = obj2.useSharedValue(false);
  const items = [sharedValue];
  const effect = isVoicePanelFullscreen.useEffect(() => {
    let closure_0 = -1;
    let obj = sharedValue;
    let addListenerResult;
    if (sharedValue != null) {
      addListenerResult = obj.addListener("isScrollingOrDragging", (isScrollingOrDragging) => {
        let timeout;
        isScrollingOrDragging = isScrollingOrDragging.isScrollingOrDragging;
        clearTimeout(timeout);
        if (isScrollingOrDragging) {
          let result = sharedValue.set(true);
        } else {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            const result = closure_1_0.set(false);
          }, 1000);
        }
      });
    }
    let closure_1 = addListenerResult;
    return () => {
      clearTimeout(closure_0);
      const obj = closure_1;
      if (closure_1 != null) {
        obj.remove();
      }
    };
  }, items);
  const fn = function u() {
    const value = (launchPadPullTabState.get().minimized || isVoicePanelFullscreen) && launchPadSharedState.get() <= 0 || sharedValue.get();
    return value;
  };
  fn.__closure = { launchPadPullTabState, isVoicePanelOpen: isVoicePanelFullscreen, launchPadSharedState, isMinimizedDuringScroll: sharedValue };
  fn.__workletHash = 14263056934448;
  fn.__initData = __initData;
  const obj3 = launchPadSharedState(launchPadPullTabState[2]);
  return obj3.useDerivedValue(fn);
};
