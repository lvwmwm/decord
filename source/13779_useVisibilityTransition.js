// Module ID: 13779
// Function ID: 104233
// Name: useVisibilityTransition
// Dependencies: []
// Exports: useVisibilityTransition

// Module 13779 (useVisibilityTransition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = { code: "function useVisibilityTransitionTsx1(){const{withTiming,visibility,visible,entranceTiming,exitTiming,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
let closure_5 = { code: "function useVisibilityTransitionTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/quests/native/BountiesModal/useVisibilityTransition.tsx");

export const useVisibilityTransition = function useVisibilityTransition(visible) {
  visible = visible.visible;
  const arg1 = visible;
  const entranceTiming = visible.entranceTiming;
  const dependencyMap = entranceTiming;
  const exitTiming = visible.exitTiming;
  let callback = exitTiming;
  let closure_4;
  let closure_5;
  const tmp = callback(React.useState(false), 2);
  const React = tmp2;
  const tmp3 = callback(React.useState(visible), 2);
  if (tmp3[0] !== visible) {
    tmp3[1](visible);
    if (!visible) {
      tmp2(true);
    }
  }
  callback = React.useCallback(() => {
    tmp2(false);
  }, []);
  closure_4 = callback;
  let num = 0;
  if (visible) {
    num = 1;
  }
  closure_5 = num;
  let obj = {};
  const fn = function k() {
    let obj = {};
    const fn = function n() {
      callback(closure_1[2]).runOnJS(closure_4)();
    };
    obj = { runOnJS: visible(entranceTiming[2]).runOnJS, animationCallbackJSThread: callback };
    fn.__closure = obj;
    fn.__workletHash = 11904317879470;
    fn.__initData = num;
    obj.opacity = visible(entranceTiming[3]).withTiming(num, visible ? entranceTiming : exitTiming, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[3]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: arg1(dependencyMap[2]).runOnJS, animationCallbackJSThread: callback };
  fn.__closure = obj;
  fn.__workletHash = 12648900540770;
  fn.__initData = closure_4;
  obj.opacityStyle = arg1(dependencyMap[2]).useAnimatedStyle(fn);
  if (!visible) {
    visible = tmp[0];
  }
  obj.shouldRender = visible;
  return obj;
};
