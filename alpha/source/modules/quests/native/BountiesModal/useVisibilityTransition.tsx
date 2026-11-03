// Module ID: 17071
// Function ID: 17072
// Name: useVisibilityTransition
// Dependencies: [32, 19, 1652, 5377, 1705, 2]
// Exports: useVisibilityTransition

// Module 17071 (useVisibilityTransition)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5377 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_4 = { code: "(function useVisibilityTransitionTsx1(){let[scheduleOnRN,animationCallbackJSThread]=this.__closure;scheduleOnRN(animationCallbackJSThread);})" };
let closure_5 = { code: "(function useVisibilityTransitionTsx2(){let[withTiming,visibility,visible,entranceTiming,exitTiming,_worklet_12104567542037_init_data,scheduleOnRN,animationCallbackJSThread]=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,'respect-motion-settings',function useVisibilityTransitionTsx1Factory([_worklet_12104567542037_init_data,scheduleOnRN,animationCallbackJSThread]){const useVisibilityTransitionTsx1=function(){scheduleOnRN(animationCallbackJSThread);};useVisibilityTransitionTsx1.__closure=[scheduleOnRN,animationCallbackJSThread];useVisibilityTransitionTsx1.__workletHash=12104567542037;useVisibilityTransitionTsx1.__initData=_worklet_12104567542037_init_data;return useVisibilityTransitionTsx1;}([_worklet_12104567542037_init_data,scheduleOnRN,animationCallbackJSThread]))};})" };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useVisibilityTransition.tsx");

export function useVisibilityTransition(visible) {
  let entranceTiming;
  let exitTiming;
  let first;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp3;
  let tmp9;
  visible = visible.visible;
  let obj = react;
  ({ entranceTiming, exitTiming } = visible);
  [first, tmp3] = react.useState(false);
  let closure_0 = tmp3;
  const tmp4 = _slicedToArray(react.useState(visible), 2);
  if (tmp4[0] !== visible) {
    const tmp5 = tmp4[1](visible);
    if (!visible) {
      tmp3(true);
    }
  }
  let num = 0;
  const callback = obj.useCallback(() => {
    closure_0(false);
  }, []);
  if (visible) {
    num = 1;
  }
  let items = [closure_5, , , , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = timing_timing.withTiming;
  items[2] = num;
  items[3] = visible;
  items[4] = entranceTiming;
  items[5] = exitTiming;
  items[6] = closure_4;
  items[7] = _mod1705.scheduleOnRN;
  items[8] = callback;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
  function useVisibilityTransitionTsx2() {
    let tmp3;
    let tmp4;
    let tmp5;
    let useVisibilityTransitionTsx1;
    const items = [, , ];
    const tmp2 = c2 ? c3 : c4;
    items[0] = c5;
    items[1] = c6;
    items[2] = c7;
    [tmp3, tmp4, tmp5] = items;
    const obj = { opacity: _undefined(c1, tmp2, "respect-motion-settings", useVisibilityTransitionTsx1) };
    useVisibilityTransitionTsx1 = function useVisibilityTransitionTsx1() {
      closure_1_0(closure_1_1);
    };
    const items1 = [tmp4, tmp5];
    useVisibilityTransitionTsx1.__closure = items1;
    useVisibilityTransitionTsx1.__workletHash = 12104567542037;
    useVisibilityTransitionTsx1.__initData = tmp3;
    return obj;
  }
  let items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  useVisibilityTransitionTsx2.__closure = items1;
  useVisibilityTransitionTsx2.__workletHash = 9776140762994;
  useVisibilityTransitionTsx2.__initData = tmp9;
  const obj2 = { opacityStyle: useAnimatedStyle(useVisibilityTransitionTsx2), shouldRender: visible };
  if (!visible) {
    visible = first;
  }
  return obj2;
}
