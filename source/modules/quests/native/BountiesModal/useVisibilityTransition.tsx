// Module ID: 13960
// Function ID: 106791
// Name: useVisibilityTransition
// Dependencies: [57, 31, 3991, 4131, 2]
// Exports: useVisibilityTransition

// Module 13960 (useVisibilityTransition)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
let closure_4 = { code: "function useVisibilityTransitionTsx1(){const{withTiming,visibility,visible,entranceTiming,exitTiming,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
let closure_5 = { code: "function useVisibilityTransitionTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const result = require("module_3991").fileFinishedImporting("modules/quests/native/BountiesModal/useVisibilityTransition.tsx");

export const useVisibilityTransition = function useVisibilityTransition(visible) {
  visible = visible.visible;
  const entranceTiming = visible.entranceTiming;
  const exitTiming = visible.exitTiming;
  let callback;
  let num;
  const tmp = exitTiming(React.useState(false), 2);
  React = tmp2;
  const tmp3 = exitTiming(React.useState(visible), 2);
  if (tmp3[0] !== visible) {
    tmp3[1](visible);
    if (!visible) {
      tmp2(true);
    }
  }
  callback = React.useCallback(() => {
    tmp2(false);
  }, []);
  num = 0;
  if (visible) {
    num = 1;
  }
  let obj = {};
  let fn = function k() {
    let obj = {};
    const fn = function n() {
      visible(entranceTiming[2]).runOnJS(outer1_4)();
    };
    obj = { runOnJS: visible(entranceTiming[2]).runOnJS, animationCallbackJSThread: callback };
    fn.__closure = obj;
    fn.__workletHash = 11904317879470;
    fn.__initData = num;
    obj.opacity = visible(entranceTiming[3]).withTiming(num, visible ? entranceTiming : exitTiming, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withTiming: visible(entranceTiming[3]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: visible(entranceTiming[2]).runOnJS, animationCallbackJSThread: callback };
  fn.__closure = obj;
  fn.__workletHash = 12648900540770;
  fn.__initData = callback;
  obj.opacityStyle = visible(entranceTiming[2]).useAnimatedStyle(fn);
  if (!visible) {
    visible = tmp[0];
  }
  obj.shouldRender = visible;
  return obj;
};
