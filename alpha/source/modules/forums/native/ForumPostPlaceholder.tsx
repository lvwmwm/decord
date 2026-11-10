// Module ID: 14049
// Function ID: 14050
// Name: ForumPostPlaceholder
// Dependencies: [32, 19, 5143, 21, 5142, 575, 504, 1652, 5372, 7043, 2]

// Module 14049 (ForumPostPlaceholder)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5372 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;

let obj2;
const jsx = Fragment.jsx;
let obj = { postPlaceholder: obj2 };
obj2 = { height: 2 * nativeDefault.space.PX_64, marginBottom: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = { code: "(function ForumPostPlaceholderTsx1(){let[reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig]=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};})" };
const memoResult = react.memo(function ForumPostPlaceholder() {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  const tmp = closure_7();
  let obj = get_initialized;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const timingConfig = _slicedToArray(react.useState(() => {
    let Easing;
    let obj2;
    const obj = { timingConfig: obj2 };
    obj2 = { duration: 1000 + 500 * Math.random(), easing: Easing.inOut(_mod1652.Easing.sin) };
    Easing = _mod1652.Easing;
    return obj;
  }), 1)[0].timingConfig;
  const items1 = [closure_8, stateFromStores, 0.55, , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  items1[3] = _mod1652.withDelay;
  items1[4] = 1000;
  items1[5] = _mod1652.withRepeat;
  items1[6] = _mod1652.withSequence;
  items1[7] = timing_timing.withTiming;
  items1[8] = timingConfig;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items1;
  class ForumPostPlaceholderTsx1 {
    constructor() {
      let tmp9;
      const obj = { opacity: null };
      if (c0) {
        obj.opacity = opacity;
        tmp9 = obj;
      } else {
        const tmp8 = _undefined4(opacity, c7);
        obj.opacity = _undefined(c3, _undefined2(_undefined3(tmp8, _undefined4(1, c7)), -1, true));
        tmp9 = obj;
      }
      return tmp9;
    }
  }
  const items2 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  ForumPostPlaceholderTsx1.__closure = items2;
  ForumPostPlaceholderTsx1.__workletHash = 3389663500091;
  ForumPostPlaceholderTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(ForumPostPlaceholderTsx1);
  const View = _modDef1652.View;
  return <View style={animatedStyle} pointerEvents="none">{null}</View>;
});
const result = size.fileFinishedImporting("modules/forums/native/ForumPostPlaceholder.tsx");

export default memoResult;
