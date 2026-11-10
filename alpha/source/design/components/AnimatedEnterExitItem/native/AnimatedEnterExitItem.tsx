// Module ID: 10088
// Function ID: 10089
// Name: AnimatedEnterExitItem
// Dependencies: [19, 21, 1652, 5201, 1705, 2]
// Exports: default

// Module 10088 (AnimatedEnterExitItem)
import react2 from "react" /* 19 */;
import native from "native" /* 5201 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const react = react2;
let flag, tmp5, tmp6Result, value;

let c3;
let closure_4;
function AnimatedRenderItem(arg0) {
  let cleanUp;
  let entering;
  let exiting;
  let item;
  let renderItem;
  let shouldAnimate;
  let state;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  ({ exiting, state } = arg0);
  ({ cleanUp, useReducedMotion } = arg0);
  let sharedValue;
  let tmp = state;
  const tmp2 = sharedValue;
  ({ renderItem, item, shouldAnimate, entering } = arg0);
  const useSharedValue = state(sharedValue[2]).useSharedValue;
  let num = 0;
  const tmp3 = state(sharedValue[2]);
  if (state === state(sharedValue[3]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items = [state, sharedValue];
  const effect = react.useEffect(() => {
    if (state === native.TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items);
  const items1 = [closure_6, useReducedMotion, shouldAnimate, state, , , , , , ];
  const useAnimatedStyle = tmp(tmp2[2]).useAnimatedStyle;
  tmp(tmp2[2]);
  items1[4] = tmp(tmp2[3]).TransitionStates;
  items1[5] = exiting;
  items1[6] = sharedValue;
  items1[7] = tmp(tmp2[4]).scheduleOnRN;
  items1[8] = cleanUp;
  items1[9] = entering;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items1;
  class AnimatedEnterExitItemTsx1 {
    constructor() {
      tmp = closure_0;
      if (!tmp) {
        obj = closure_1;
        tmp2 = null;
        value = undefined;
        if (closure_1 != null) {
          value = obj.get();
        }
        flag = false;
        if (false !== value) {
          tmp4 = closure_2;
          tmp5 = closure_3;
          if (closure_2 === closure_3.YEETED) {
            if (null != closure_4) {
              tmp9 = closure_5;
              tmp6Result = tmp6(closure_5.get(), (arg0) => {
                const tmp = arg0;
                if (tmp) {
                  closure_1_6(closure_1_7);
                }
              });
            }
          }
          if (null != closure_8) {
            tmp8 = closure_5;
            tmp6Result = tmp7(closure_5.get());
          } else {
            tmp6Result = {};
          }
        }
        return {};
      }
      return;
    }
  }
  const items2 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  AnimatedEnterExitItemTsx1.__closure = items2;
  AnimatedEnterExitItemTsx1.__workletHash = 3749359338106;
  AnimatedEnterExitItemTsx1.__initData = tmp7;
  const animatedStyle = useAnimatedStyle(AnimatedEnterExitItemTsx1);
  const items3 = [closure_7, state, , , , ];
  const useAnimatedReaction = tmp(tmp2[2]).useAnimatedReaction;
  tmp(tmp2[2]);
  items3[2] = tmp(tmp2[3]).TransitionStates;
  items3[3] = sharedValue;
  items3[4] = null != exiting;
  items3[5] = useReducedMotion;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items3;
  class AnimatedEnterExitItemTsx2 {
    constructor() {
      let tmp = c0 === _undefined.YEETED && 0 === _undefined2.get();
      if (tmp) {
        let tmp4 = !c3;
        if (c3) {
          tmp4 = c4;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  }
  const items4 = [tmp20, tmp21, tmp22, tmp23, tmp24];
  AnimatedEnterExitItemTsx2.__closure = items4;
  AnimatedEnterExitItemTsx2.__workletHash = 11178617332498;
  AnimatedEnterExitItemTsx2.__initData = tmp19;
  const items5 = [closure_8, tmp(tmp2[4]).scheduleOnRN, cleanUp];
  c0 = undefined;
  c1 = undefined;
  [tmp25, tmp26, tmp27] = items5;
  class AnimatedEnterExitItemTsx3 {
    constructor(arg0, arg1) {
      const tmp = arg0 && arg0 !== arg1;
      if (tmp) {
        _undefined(c1);
      }
    }
  }
  const items6 = [tmp26, tmp27];
  AnimatedEnterExitItemTsx3.__closure = items6;
  AnimatedEnterExitItemTsx3.__workletHash = 2831055465835;
  AnimatedEnterExitItemTsx3.__initData = tmp25;
  const animatedReaction = useAnimatedReaction(AnimatedEnterExitItemTsx2, AnimatedEnterExitItemTsx3);
  let obj = { children: renderItem(item, animatedStyle) };
  return closure_4(constants, obj);
}
function renderAnimatedItem(key, arg1, state, cleanUp) {
  const merged = Object.assign(arg1);
  return <AnimatedRenderItem key={arg0} state={arg2} cleanUp={arg3} />;
}
({ Fragment: c3, jsx: closure_4 } = Fragment);
const createElement = react2.createElement;
let closure_6 = { code: "(function AnimatedEnterExitItemTsx1(){let[useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,scheduleOnRN,cleanUp,entering]=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){scheduleOnRN(cleanUp);}});}if(entering!=null){return entering(visible.get());}return{};})" };
let closure_7 = { code: "(function AnimatedEnterExitItemTsx2(){let[state,TransitionStates,visible,hasExiting,useReducedMotion]=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);})" };
let closure_8 = { code: "(function AnimatedEnterExitItemTsx3(hasExited,previous){let[scheduleOnRN,cleanUp]=this.__closure;if(!hasExited||hasExited===previous)return;scheduleOnRN(cleanUp);})" };
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
