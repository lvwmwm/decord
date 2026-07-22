// Module ID: 8562
// Function ID: 68048
// Name: AnimatedRenderItem
// Dependencies: []
// Exports: default

// Module 8562 (AnimatedRenderItem)
function AnimatedRenderItem(shouldAnimate) {
  let item;
  let renderItem;
  shouldAnimate = shouldAnimate.shouldAnimate;
  const arg1 = shouldAnimate;
  const entering = shouldAnimate.entering;
  const dependencyMap = entering;
  const exiting = shouldAnimate.exiting;
  const React = exiting;
  const state = shouldAnimate.state;
  const cleanUp = shouldAnimate.cleanUp;
  const useReducedMotion = shouldAnimate.useReducedMotion;
  const createElement = useReducedMotion;
  let closure_6;
  let closure_7;
  ({ renderItem, item } = shouldAnimate);
  let obj = arg1(dependencyMap[2]);
  let num = 0;
  if (state === arg1(dependencyMap[3]).TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = obj.useSharedValue(num);
  closure_6 = sharedValue;
  const items = [state, sharedValue];
  const effect = React.useEffect(() => {
    if (state === shouldAnimate(entering[3]).TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items);
  let obj1 = arg1(dependencyMap[2]);
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
              tmp10 = closure_6;
              obj = exiting(closure_6.get(), (arg0) => {
                if (arg0) {
                  callback(closure_1[2]).runOnJS(closure_4)();
                  const obj = callback(closure_1[2]);
                }
              });
            }
          }
          tmp6 = entering;
          if (null != entering) {
            tmp7 = entering;
            tmp8 = closure_6;
            obj = entering(closure_6.get());
          } else {
            obj = {};
          }
        }
        return {};
      }
      return;
    }
  }
  obj = { useReducedMotion, shouldAnimate, state, TransitionStates: arg1(dependencyMap[3]).TransitionStates, exiting, visible: sharedValue, runOnJS: arg1(dependencyMap[2]).runOnJS, cleanUp, entering };
  T.__closure = obj;
  T.__workletHash = 2197269661090;
  T.__initData = closure_6;
  closure_7 = tmp4;
  const animatedStyle = obj1.useAnimatedStyle(T);
  class I {
    constructor() {
      tmp = state === shouldAnimate(entering[3]).TransitionStates.YEETED;
      if (tmp) {
        tmp2 = closure_6;
        num = 0;
        tmp = 0 === closure_6.get();
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
  obj = { state, TransitionStates: arg1(dependencyMap[3]).TransitionStates, visible: sharedValue, hasExiting: tmp4, useReducedMotion };
  I.__closure = obj;
  I.__workletHash = 11984384474891;
  I.__initData = closure_7;
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
  obj1 = { runOnJS: arg1(dependencyMap[2]).runOnJS, cleanUp };
  fn.__closure = obj1;
  fn.__workletHash = 2105667466259;
  fn.__initData = closure_8;
  const animatedReaction = arg1(dependencyMap[2]).useAnimatedReaction(I, fn);
  const obj4 = arg1(dependencyMap[2]);
  return cleanUp(state, { children: renderItem(item, animatedStyle) });
}
function renderAnimatedItem(arg0, arg1, arg2, arg3) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj["key"] = arg0;
  obj["state"] = arg2;
  obj["cleanUp"] = arg3;
  return <AnimatedRenderItem {......obj} />;
}
let closure_2 = importAll(dependencyMap[0]);
({ Fragment: closure_3, jsx: closure_4 } = arg1(dependencyMap[1]));
const createElement = arg1(dependencyMap[0]).createElement;
let closure_6 = { code: "function AnimatedEnterExitItemTsx1(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}" };
let closure_7 = { code: "function AnimatedEnterExitItemTsx2(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}" };
let closure_8 = { code: "function AnimatedEnterExitItemTsx3(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous)return;runOnJS(cleanUp)();}" };
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx");

export default function AnimatedEnterExitItem(useReducedMotion) {
  useReducedMotion = useReducedMotion.useReducedMotion;
  const arg1 = useReducedMotion;
  const shouldAnimate = useReducedMotion.shouldAnimate;
  const dependencyMap = shouldAnimate;
  const entering = useReducedMotion.entering;
  const React = entering;
  const exiting = useReducedMotion.exiting;
  const item = useReducedMotion.item;
  const renderItem = useReducedMotion.renderItem;
  const createElement = renderItem;
  const items = [item, shouldAnimate, entering, exiting, renderItem, useReducedMotion];
  const memo = React.useMemo(() => {
    if (null != item) {
      const obj = { shouldAnimate, entering, exiting, renderItem, item, useReducedMotion };
      return obj;
    }
  }, items);
  return item(arg1(dependencyMap[3]).TransitionItem, { item: memo, renderItem: renderAnimatedItem });
};
