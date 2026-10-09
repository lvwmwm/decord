// Module ID: 9419
// Function ID: 9420
// Name: AnimatedEnterExitItem
// Dependencies: [19, 21, 558, 576, 4811, 4788, 2]

// Module 9419 (AnimatedEnterExitItem)
import react2 from "react" /* 19 */;
import react3 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const react = react2;
let flag, tmp10, tmp7Result;

let c3;
let closure_4;
let tmp;
const native = tmp(4788);
function renderAnimatedItem(key, arg1, state, cleanUp) {
  const merged = Object.assign(arg1);
  return <closure_12 key={arg0} state={arg2} cleanUp={arg3} />;
}
({ Fragment: c3, jsx: closure_4 } = Fragment);
const createElement = react2.createElement;
let closure_6 = { code: "function AnimatedEnterExitItemTsx1(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion){return{};}if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false){return{};}if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}" };
let __initData = { code: "function AnimatedEnterExitItemTsx2(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}" };
const __initData2 = { code: "function AnimatedEnterExitItemTsx3(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous){return;}runOnJS(cleanUp)();}" };
const __initData3 = { code: "function AnimatedEnterExitItemTsx4(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}" };
const __initData4 = { code: "function AnimatedEnterExitItemTsx5(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}" };
const __initData5 = { code: "function AnimatedEnterExitItemTsx6(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous)return;runOnJS(cleanUp)();}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedRenderItem(entering) {
  let closure_7;
  let item;
  let renderItem;
  let shouldAnimate;
  let tmp = shouldAnimate;
  const tmp2 = entering;
  let obj = shouldAnimate(entering[3]);
  const cResult = obj.c(10);
  ({ renderItem, item, shouldAnimate } = entering);
  entering = entering.entering;
  const exiting = entering.exiting;
  const state = entering.state;
  const cleanUp = entering.cleanUp;
  const useReducedMotion = entering.useReducedMotion;
  let tmp4 = shouldAnimate(entering[4]);
  const useSharedValue = tmp4.useSharedValue;
  let num = 0;
  if (state === shouldAnimate(entering[5]).TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = useSharedValue(num);
  if (cResult[0] === state) {
    let tmp6;
    let tmp7;
    if (cResult[1] === sharedValue) {
      tmp6 = cResult[2];
      tmp7 = cResult[3];
    }
    const tmp8 = exiting;
    const effect = exiting.useEffect(tmp6, tmp7);
    const fn2 = function p() {
      let tmp = useReducedMotion;
      if (!tmp) {
        let obj = shouldAnimate;
        let value;
        if (shouldAnimate != null) {
          value = obj.get();
        }
        if (false !== value) {
          if (state === native.TransitionStates.YEETED) {
            if (null != exiting) {
              tmp7(sharedValue.get(), (arg0) => {
                const tmp = arg0;
                if (tmp) {
                  const obj = shouldAnimate(entering[4]);
                  obj.runOnJS(cleanUp)();
                }
              });
            }
          }
          if (null != entering) {
            tmp8(sharedValue.get());
          }
        }
        return {};
      }
    };
    const obj2 = { useReducedMotion, shouldAnimate, state, TransitionStates: tmp(tmp2[5]).TransitionStates, exiting, visible: sharedValue, runOnJS: tmp(tmp2[4]).runOnJS, cleanUp, entering };
    const useAnimatedStyle = tmp(tmp2[4]).useAnimatedStyle;
    tmp(tmp2[4]);
    fn2.__closure = obj2;
    fn2.__workletHash = 14013247946914;
    fn2.__initData = sharedValue;
    const animatedStyle = useAnimatedStyle(fn2);
    __initData = tmp14;
    const tmpResult2 = tmp(tmp2[4]);
    class O {
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
    O.__closure = { state, TransitionStates: tmp(tmp2[5]).TransitionStates, visible: sharedValue, hasExiting: null != exiting, useReducedMotion };
    O.__workletHash = 11984384474891;
    O.__initData = __initData;
    const obj3 = { state, TransitionStates: tmp(tmp2[5]).TransitionStates, visible: sharedValue, hasExiting: null != exiting, useReducedMotion };
    class R {
      constructor(arg0, arg1) {
        const tmp = arg0 && arg0 !== arg1;
        if (tmp) {
          const obj = ReanimatedRexport;
          obj.runOnJS(cleanUp)();
        }
      }
    }
    R.__closure = { runOnJS: tmp(tmp2[4]).runOnJS, cleanUp };
    R.__workletHash = 13577925153461;
    R.__initData = __initData2;
    const obj4 = { runOnJS: tmp(tmp2[4]).runOnJS, cleanUp };
    const animatedReaction = useAnimatedReaction(O, R);
    if (cResult[4] === animatedStyle) {
      if (cResult[5] === item) {
        let tmp19;
        let tmp21;
        if (cResult[6] === renderItem) {
          tmp19 = cResult[7];
        }
        if (cResult[8] !== tmp19) {
          const obj5 = { children: tmp19 };
          const tmp24 = cleanUp(state, obj5);
          cResult[8] = tmp19;
          cResult[9] = tmp24;
          tmp21 = tmp24;
        } else {
          tmp21 = cResult[9];
        }
        return tmp21;
      }
    }
    const renderItemResult = renderItem(item, animatedStyle);
    cResult[4] = animatedStyle;
    cResult[5] = item;
    cResult[6] = renderItem;
    cResult[7] = renderItemResult;
    tmp19 = renderItemResult;
  }
  const fn = function u() {
    if (state === native.TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  };
  const items = [state, sharedValue];
  cResult[0] = state;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  tmp7 = items;
  tmp6 = fn;
}) : (function AnimatedRenderItem(shouldAnimate) {
  let item;
  let renderItem;
  shouldAnimate = shouldAnimate.shouldAnimate;
  const entering = shouldAnimate.entering;
  const exiting = shouldAnimate.exiting;
  const state = shouldAnimate.state;
  const cleanUp = shouldAnimate.cleanUp;
  const useReducedMotion = shouldAnimate.useReducedMotion;
  let sharedValue;
  let closure_7;
  let tmp = shouldAnimate;
  const tmp2 = entering;
  ({ renderItem, item } = shouldAnimate);
  const useSharedValue = shouldAnimate(entering[4]).useSharedValue;
  let num = 0;
  const tmp3 = shouldAnimate(entering[4]);
  if (state === shouldAnimate(entering[5]).TransitionStates.MOUNTED) {
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
  const tmpResult = tmp(tmp2[4]);
  class A {
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
          if (state === closure_0(closure_1[5]).TransitionStates.YEETED) {
            if (null != exiting) {
              tmp10 = closure_6;
              tmp7Result = tmp7(closure_6.get(), (arg0) => {
                const tmp = arg0;
                if (tmp) {
                  const obj = shouldAnimate(entering[4]);
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
  let obj = { useReducedMotion, shouldAnimate, state, TransitionStates: tmp(tmp2[5]).TransitionStates, exiting, visible: sharedValue, runOnJS: tmp(tmp2[4]).runOnJS, cleanUp, entering };
  A.__closure = obj;
  A.__workletHash = 15718564228231;
  A.__initData = __initData3;
  const tmp7 = null != exiting;
  closure_7 = tmp7;
  const animatedStyle = tmpResult.useAnimatedStyle(A);
  const tmpResult2 = tmp(tmp2[4]);
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
  I.__closure = { state, TransitionStates: tmp(tmp2[5]).TransitionStates, visible: sharedValue, hasExiting: tmp7, useReducedMotion };
  I.__workletHash = 10212721541996;
  I.__initData = __initData4;
  const fn = function v(arg0, arg1) {
    const tmp = arg0 && arg0 !== arg1;
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.runOnJS(cleanUp)();
    }
  };
  ({ state, TransitionStates: tmp(tmp2[5]).TransitionStates, visible: sharedValue, hasExiting: tmp7, useReducedMotion });
  fn.__closure = { runOnJS: tmp(tmp2[4]).runOnJS, cleanUp };
  fn.__workletHash = 16078328777782;
  fn.__initData = __initData5;
  ({ runOnJS: tmp(tmp2[4]).runOnJS, cleanUp });
  const animatedReaction = useAnimatedReaction(I, fn);
  const obj4 = { children: renderItem(item, animatedStyle) };
  return cleanUp(state, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedEnterExitItem(arg0) {
  let entering;
  let exiting;
  let item;
  let renderItem;
  let shouldAnimate;
  let tmp6;
  let useReducedMotion;
  const obj = react3;
  const cResult = obj.c(9);
  ({ useReducedMotion, shouldAnimate, entering, exiting, item, renderItem } = arg0);
  let tmp4;
  if (null != item) {
    if (cResult[0] === entering) {
      if (cResult[1] === exiting) {
        if (cResult[2] === item) {
          if (cResult[3] === renderItem) {
            if (cResult[4] === shouldAnimate) {
              let tmp5;
              if (cResult[5] === useReducedMotion) {
                tmp5 = cResult[6];
              }
              tmp4 = tmp5;
            }
          }
        }
      }
    }
    const obj2 = { shouldAnimate, entering, exiting, renderItem, item, useReducedMotion };
    cResult[0] = entering;
    cResult[1] = exiting;
    cResult[2] = item;
    cResult[3] = renderItem;
    cResult[4] = shouldAnimate;
    cResult[5] = useReducedMotion;
    cResult[6] = obj2;
    tmp5 = obj2;
  }
  if (cResult[7] !== tmp4) {
    const obj3 = { item: tmp4, renderItem: renderAnimatedItem };
    const tmp9 = React3(native.TransitionItem, obj3);
    cResult[7] = tmp4;
    cResult[8] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[8];
  }
  return tmp6;
}) : (function AnimatedEnterExitItem(useReducedMotion) {
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
});
let result = size.fileFinishedImporting("design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx");

export default tmp3;
