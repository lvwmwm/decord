// Module ID: 9424
// Function ID: 9425
// Name: AnimatedEnterExitItem
// Dependencies: [19, 21, 4566, 4540, 2]
// Exports: default

// Module 9424 (AnimatedEnterExitItem)
import react2 from "react" /* 19 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const react = react2;
let flag, tmp10, tmp5, tmp6, tmp7Result, tmp9, value;

let c3;
let closure_4;
function AnimatedRenderItem(shouldAnimate) {
  let closure_7;
  let item;
  let renderItem;
  shouldAnimate = shouldAnimate.shouldAnimate;
  const entering = shouldAnimate.entering;
  const exiting = shouldAnimate.exiting;
  const state = shouldAnimate.state;
  const cleanUp = shouldAnimate.cleanUp;
  const useReducedMotion = shouldAnimate.useReducedMotion;
  let sharedValue;
  __initData = undefined;
  let tmp = shouldAnimate;
  const tmp2 = entering;
  ({ renderItem, item } = shouldAnimate);
  const useSharedValue = shouldAnimate(entering[2]).useSharedValue;
  let num = 0;
  const tmp3 = shouldAnimate(entering[2]);
  if (state === shouldAnimate(entering[3]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items = [state, sharedValue];
  const effect = exiting.useEffect(() => {
    if (state === native.TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items);
  const tmpResult = tmp(tmp2[2]);
  class T {
    constructor() {
      tmp = useReducedMotion;
      if (!tmp) {
        obj = shouldAnimate;
        tmp2 = null;
        value = undefined;
        if (shouldAnimate != null) {
          value = obj.get();
        }
        flag = false;
        if (false !== value) {
          tmp4 = state;
          tmp5 = closure_0;
          tmp6 = closure_1;
          if (state === closure_0(closure_1[3]).TransitionStates.YEETED) {
            if (null != exiting) {
              tmp10 = closure_6;
              tmp7Result = tmp7(closure_6.get(), (arg0) => {
                const tmp = arg0;
                if (tmp) {
                  const obj = shouldAnimate(entering[2]);
                  obj.runOnJS(cleanUp)();
                }
              });
            }
          }
          if (null != entering) {
            tmp9 = closure_6;
            tmp7Result = tmp8(closure_6.get());
          } else {
            tmp7Result = {};
          }
        }
        return {};
      }
      return;
    }
  }
  let obj = { useReducedMotion, shouldAnimate, state, TransitionStates: tmp(tmp2[3]).TransitionStates, exiting, visible: sharedValue, runOnJS: tmp(tmp2[2]).runOnJS, cleanUp, entering };
  T.__closure = obj;
  T.__workletHash = 2197269661090;
  T.__initData = sharedValue;
  const tmp7 = null != exiting;
  __initData = tmp7;
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  const tmpResult2 = tmp(tmp2[2]);
  class I {
    constructor() {
      let tmp = state === native.TransitionStates.YEETED && 0 === sharedValue.get();
      if (tmp) {
        let tmp4 = !closure_7;
        if (closure_7) {
          tmp4 = useReducedMotion;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  }
  const useAnimatedReaction = tmpResult2.useAnimatedReaction;
  I.__closure = { state, TransitionStates: tmp(tmp2[3]).TransitionStates, visible: sharedValue, hasExiting: tmp7, useReducedMotion };
  I.__workletHash = 11984384474891;
  I.__initData = __initData;
  const fn = function v(arg0, arg1) {
    const tmp = arg0 && arg0 !== arg1;
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.runOnJS(cleanUp)();
    }
  };
  ({ state, TransitionStates: tmp(tmp2[3]).TransitionStates, visible: sharedValue, hasExiting: tmp7, useReducedMotion });
  fn.__closure = { runOnJS: tmp(tmp2[2]).runOnJS, cleanUp };
  fn.__workletHash = 2105667466259;
  fn.__initData = __initData2;
  ({ runOnJS: tmp(tmp2[2]).runOnJS, cleanUp });
  const animatedReaction = useAnimatedReaction(I, fn);
  const obj4 = { children: renderItem(item, animatedStyle) };
  return cleanUp(state, obj4);
}
function renderAnimatedItem(key, arg1, state, cleanUp) {
  const merged = Object.assign(arg1);
  return <AnimatedRenderItem key={arg0} state={arg2} cleanUp={arg3} />;
}
({ Fragment: c3, jsx: closure_4 } = Fragment);
const createElement = react2.createElement;
let closure_6 = { code: "function AnimatedEnterExitItemTsx1(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}" };
let __initData = { code: "function AnimatedEnterExitItemTsx2(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}" };
const __initData2 = { code: "function AnimatedEnterExitItemTsx3(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous)return;runOnJS(cleanUp)();}" };
let result = size.fileFinishedImporting("design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx");

export default function AnimatedEnterExitItem(useReducedMotion) {
  useReducedMotion = useReducedMotion.useReducedMotion;
  const shouldAnimate = useReducedMotion.shouldAnimate;
  const entering = useReducedMotion.entering;
  const exiting = useReducedMotion.exiting;
  const item = useReducedMotion.item;
  const renderItem = useReducedMotion.renderItem;
  const items = [item, shouldAnimate, entering, exiting, renderItem, useReducedMotion];
  const memo = react.useMemo(() => {
    if (null != item) {
      return { shouldAnimate, entering, exiting, renderItem, item: tmp, useReducedMotion };
    }
  }, items);
  const obj = { item: memo, renderItem: renderAnimatedItem };
  return React3(native.TransitionItem, obj);
};
