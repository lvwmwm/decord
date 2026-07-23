// Module ID: 8569
// Function ID: 68088
// Name: AnimatedRenderItem
// Dependencies: [31, 33, 3991, 4476, 2]
// Exports: default

// Module 8569 (AnimatedRenderItem)
import result from "result";
import jsxProd from "jsxProd";
import { createElement } from "result";

let closure_3;
let closure_4;
const require = arg1;
function AnimatedRenderItem(shouldAnimate) {
  let item;
  let renderItem;
  shouldAnimate = shouldAnimate.shouldAnimate;
  const entering = shouldAnimate.entering;
  const exiting = shouldAnimate.exiting;
  const state = shouldAnimate.state;
  const cleanUp = shouldAnimate.cleanUp;
  const useReducedMotion = shouldAnimate.useReducedMotion;
  let sharedValue;
  let c7;
  ({ renderItem, item } = shouldAnimate);
  let obj = shouldAnimate(entering[2]);
  let num = 0;
  if (state === shouldAnimate(entering[3]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  const items = [state, sharedValue];
  const effect = exiting.useEffect(() => {
    if (state === shouldAnimate(entering[3]).TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items);
  let obj1 = shouldAnimate(entering[2]);
  class T {
    constructor() {
      if (!useReducedMotion) {
        tmp = shouldAnimate;
        tmp2 = null;
        value = undefined;
        if (null != shouldAnimate) {
          tmp4 = shouldAnimate;
          value = shouldAnimate.get();
        }
        flag = false;
        if (false !== value) {
          tmp11 = state;
          tmp12 = shouldAnimate;
          tmp13 = entering;
          num = 3;
          if (state === shouldAnimate(entering[3]).TransitionStates.YEETED) {
            tmp5 = exiting;
            if (null != exiting) {
              tmp9 = exiting;
              tmp10 = c6;
              obj = exiting(c6.get(), (arg0) => {
                if (arg0) {
                  shouldAnimate(entering[2]).runOnJS(outer1_4)();
                  const obj = shouldAnimate(entering[2]);
                }
              });
            }
          }
          tmp6 = entering;
          if (null != entering) {
            tmp7 = entering;
            tmp8 = c6;
            obj = entering(c6.get());
          } else {
            obj = {};
          }
        }
        return {};
      }
      return;
    }
  }
  obj = { useReducedMotion, shouldAnimate, state, TransitionStates: shouldAnimate(entering[3]).TransitionStates, exiting, visible: sharedValue, runOnJS: shouldAnimate(entering[2]).runOnJS, cleanUp, entering };
  T.__closure = obj;
  T.__workletHash = 2197269661090;
  T.__initData = sharedValue;
  c7 = tmp4;
  const animatedStyle = obj1.useAnimatedStyle(T);
  class I {
    constructor() {
      tmp = state === shouldAnimate(entering[3]).TransitionStates.YEETED;
      if (tmp) {
        tmp2 = c6;
        num = 0;
        tmp = 0 === c6.get();
      }
      if (tmp) {
        tmp3 = entering;
        tmp4 = !entering;
        if (entering) {
          tmp4 = useReducedMotion;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  }
  obj = { state, TransitionStates: shouldAnimate(entering[3]).TransitionStates, visible: sharedValue, hasExiting: tmp4, useReducedMotion };
  I.__closure = obj;
  I.__workletHash = 11984384474891;
  I.__initData = c7;
  const fn = function v(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      shouldAnimate(entering[2]).runOnJS(cleanUp)();
      const obj = shouldAnimate(entering[2]);
    }
  };
  obj1 = { runOnJS: shouldAnimate(entering[2]).runOnJS, cleanUp };
  fn.__closure = obj1;
  fn.__workletHash = 2105667466259;
  fn.__initData = closure_8;
  const animatedReaction = shouldAnimate(entering[2]).useAnimatedReaction(I, fn);
  const obj4 = shouldAnimate(entering[2]);
  return cleanUp(state, { children: renderItem(item, animatedStyle) });
}
function renderAnimatedItem(arg0, arg1, arg2, arg3) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj["key"] = arg0;
  obj["state"] = arg2;
  obj["cleanUp"] = arg3;
  return <AnimatedRenderItem />;
}
({ Fragment: closure_3, jsx: closure_4 } = jsxProd);
let closure_6 = { code: "function AnimatedEnterExitItemTsx1(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}" };
let closure_7 = { code: "function AnimatedEnterExitItemTsx2(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}" };
let closure_8 = { code: "function AnimatedEnterExitItemTsx3(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous)return;runOnJS(cleanUp)();}" };
let result = require("module_3991").fileFinishedImporting("design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx");

export default function AnimatedEnterExitItem(useReducedMotion) {
  useReducedMotion = useReducedMotion.useReducedMotion;
  const shouldAnimate = useReducedMotion.shouldAnimate;
  const entering = useReducedMotion.entering;
  const exiting = useReducedMotion.exiting;
  const item = useReducedMotion.item;
  const renderItem = useReducedMotion.renderItem;
  const items = [item, shouldAnimate, entering, exiting, renderItem, useReducedMotion];
  const memo = entering.useMemo(() => {
    if (null != item) {
      const obj = { shouldAnimate, entering, exiting, renderItem, item, useReducedMotion };
      return obj;
    }
  }, items);
  return item(useReducedMotion(shouldAnimate[3]).TransitionItem, { item: memo, renderItem: renderAnimatedItem });
};
