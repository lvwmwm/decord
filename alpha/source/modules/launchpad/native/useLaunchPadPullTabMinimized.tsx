// Module ID: 19370
// Function ID: 19371
// Name: useLaunchPadPullTabMinimized
// Dependencies: [19, 17, 1652, 11344, 2]
// Exports: default

// Module 19370 (useLaunchPadPullTabMinimized)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let isScrollingOrDragging;

const DCDScrollTracker = react_native.NativeModules.DCDScrollTracker;
let tmp32;
if (DCDScrollTracker) {
  const self = this;
  const self2 = this;
  const tmp5 = DCDScrollTracker;
  tmp32 = new tmp3(DCDScrollTracker);
}
let closure_3 = tmp32;
let closure_4 = { code: "(function useLaunchPadPullTabMinimizedTsx1(){let[launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll]=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();})" };
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadPullTabMinimized.tsx");

export default function useLaunchPadPullTabMinimized(arg0) {
  let launchPadPullTabState;
  let launchPadSharedState;
  let sharedValue;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  ({ launchPadSharedState, launchPadPullTabState } = arg0);
  let obj = sharedValue(11344);
  sharedValue = undefined;
  const isVoicePanelFullscreen = obj.useIsVoicePanelFullscreen();
  const obj2 = sharedValue(1652);
  sharedValue = obj2.useSharedValue(false);
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
  const items1 = [closure_4, launchPadPullTabState, isVoicePanelFullscreen, launchPadSharedState, sharedValue];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items1;
  function useLaunchPadPullTabMinimizedTsx1() {
    const value = (_undefined.get().minimized || c1) && _undefined2.get() <= 0 || _undefined3.get();
    return value;
  }
  const items2 = [tmp5, tmp6, tmp7, tmp8];
  useLaunchPadPullTabMinimizedTsx1.__closure = items2;
  useLaunchPadPullTabMinimizedTsx1.__workletHash = 11967190027017;
  useLaunchPadPullTabMinimizedTsx1.__initData = tmp4;
  const obj3 = sharedValue(1652);
  return obj3.useDerivedValue(useLaunchPadPullTabMinimizedTsx1);
};
