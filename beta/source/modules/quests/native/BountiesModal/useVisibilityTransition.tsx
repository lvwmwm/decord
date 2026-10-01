// Module ID: 14546
// Function ID: 14547
// Name: useVisibilityTransition
// Dependencies: [32, 19, 4566, 4837, 2]
// Exports: useVisibilityTransition

// Module 14546 (useVisibilityTransition)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let __initData;

let react = react_mod;
let closure_4 = { code: "function useVisibilityTransitionTsx1(){const{withTiming,visibility,visible,entranceTiming,exitTiming,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
let closure_5 = { code: "function useVisibilityTransitionTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useVisibilityTransition.tsx");

export const useVisibilityTransition = function useVisibilityTransition(visible) {
  let callback;
  let closure_3;
  let fn;
  let obj3;
  visible = visible.visible;
  const entranceTiming = visible.entranceTiming;
  const exitTiming = visible.exitTiming;
  react = undefined;
  __initData = undefined;
  let num;
  let obj = react;
  const tmp = exitTiming(react.useState(false), 2);
  react = tmp3;
  const first = tmp[0];
  let tmp4 = exitTiming(react.useState(visible), 2);
  if (tmp4[0] !== visible) {
    tmp4[1](visible);
    if (!visible) {
      tmp[1](true);
    }
  }
  __initData = obj.useCallback(() => {
    closure_3(false);
  }, []);
  num = 0;
  if (visible) {
    num = 1;
  }
  let obj2 = { opacityStyle: obj3.useAnimatedStyle(fn), shouldRender: visible };
  obj3 = visible(entranceTiming[2]);
  fn = function k() {
    let fn;
    let tmp4;
    let obj = timing;
    const obj2 = { opacity: obj.withTiming(num, tmp4, "respect-motion-settings", fn) };
    fn = function n() {
      const obj = visible(entranceTiming[2]);
      obj.runOnJS(callback)();
    };
    tmp4 = visible ? entranceTiming : exitTiming;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread };
    fn.__workletHash = 11904317879470;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread });
    return obj2;
  };
  fn.__closure = { withTiming: visible(entranceTiming[3]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: visible(entranceTiming[2]).runOnJS, animationCallbackJSThread: __initData };
  fn.__workletHash = 12648900540770;
  fn.__initData = __initData;
  ({ withTiming: visible(entranceTiming[3]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: visible(entranceTiming[2]).runOnJS, animationCallbackJSThread: __initData });
  if (!visible) {
    visible = first;
  }
  return obj2;
};
