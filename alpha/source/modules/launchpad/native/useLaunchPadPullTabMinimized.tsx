// Module ID: 17923
// Function ID: 17924
// Name: useLaunchPadPullTabMinimized
// Dependencies: [19, 17, 558, 576, 4850, 11026, 2]

// Module 17923 (useLaunchPadPullTabMinimized)
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import VoicePanelUtils from "VoicePanelUtils" /* 11026 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let isScrollingOrDragging;

let tmp3;
const DCDScrollTracker = react_native.NativeModules.DCDScrollTracker;
let tmp32;
if (DCDScrollTracker) {
  const self = this;
  const self2 = this;
  tmp32 = new tmp3(DCDScrollTracker);
}
let closure_3 = tmp32;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMinimizedDuringScroll() {
  let sharedValue;
  let tmp3;
  let tmp4;
  let obj = sharedValue(576);
  const cResult = obj.c(3);
  const obj2 = sharedValue(4850);
  sharedValue = obj2.useSharedValue(false);
  if (cResult[0] !== sharedValue) {
    const fn = function t() {
      let closure_0 = -1;
      let obj = closure_1_3;
      let addListenerResult;
      if (closure_1_3 != null) {
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
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = react.useEffect(tmp3, tmp4);
  return sharedValue;
}) : (function useIsMinimizedDuringScroll() {
  let sharedValue;
  let obj = sharedValue(4850);
  sharedValue = obj.useSharedValue(false);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    let closure_0 = -1;
    let obj = closure_1_3;
    let addListenerResult;
    if (closure_1_3 != null) {
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
  return sharedValue;
});
const __initData = { code: "function useLaunchPadPullTabMinimizedTsx1(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}" };
const __initData2 = { code: "function useLaunchPadPullTabMinimizedTsx2(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}" };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLaunchPadPullTabMinimized(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const obj = VoicePanelUtils;
  const isVoicePanelFullscreen = obj.useIsVoicePanelFullscreen();
  const tmp2 = closure_4();
  closure_3 = tmp2;
  const fn = function t() {
    const value = (launchPadPullTabState.get().minimized || isVoicePanelFullscreen) && launchPadSharedState.get() <= 0 || closure_3.get();
    return value;
  };
  fn.__closure = { launchPadPullTabState, isVoicePanelOpen: isVoicePanelFullscreen, launchPadSharedState, isMinimizedDuringScroll: tmp2 };
  fn.__workletHash = 14263056934448;
  fn.__initData = __initData;
  const obj2 = ReanimatedRexport;
  return obj2.useDerivedValue(fn);
}) : (function useLaunchPadPullTabMinimized(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const obj = VoicePanelUtils;
  const isVoicePanelFullscreen = obj.useIsVoicePanelFullscreen();
  const tmp2 = closure_4();
  closure_3 = tmp2;
  const fn = function l() {
    const value = (launchPadPullTabState.get().minimized || isVoicePanelFullscreen) && launchPadSharedState.get() <= 0 || closure_3.get();
    return value;
  };
  fn.__closure = { launchPadPullTabState, isVoicePanelOpen: isVoicePanelFullscreen, launchPadSharedState, isMinimizedDuringScroll: tmp2 };
  fn.__workletHash = 12013643918259;
  fn.__initData = __initData2;
  const obj2 = ReanimatedRexport;
  return obj2.useDerivedValue(fn);
});
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadPullTabMinimized.tsx");

export default tmp6;
