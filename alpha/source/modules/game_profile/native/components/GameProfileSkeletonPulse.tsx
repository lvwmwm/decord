// Module ID: 9526
// Function ID: 9527
// Name: GameProfileSkeletonPulse
// Dependencies: [19, 5143, 1652, 5372, 504, 2]
// Exports: useSkeletonPulseStyle

// Module 9526 (GameProfileSkeletonPulse)
import get_initialized from "get initialized" /* 504 */;
import timing_timing from "timing/timing" /* 5372 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import module_1652_mod from "module_1652" /* 1652 */;
import size from "module_2" /* 2 */;

let closure_7, set;

let module_1652;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let c4 = 1300;
const Easing = module_1652.Easing;
const inOutResult = Easing.inOut(module_1652.Easing.quad);
module_1652 = module_1652_mod;
let closure_5 = module_1652.makeMutable(0);
let c6 = 0;
let c7 = false;
let items = [{ code: "(function getPulseOpacity_GameProfileSkeletonPulseTsx1(phase,phaseOffset){let[MIN_OPACITY,MAX_OPACITY,DEFAULT_TIMING_EASING]=this.__closure;const shiftedPhase=(phase+phaseOffset)%1;const cyclePhase=shiftedPhase<0?shiftedPhase+1:shiftedPhase;const pulseProgress=cyclePhase<0.5?cyclePhase*2:(1-cyclePhase)*2;return MIN_OPACITY+(MAX_OPACITY-MIN_OPACITY)*DEFAULT_TIMING_EASING(pulseProgress);})" }, 0.05, 0.1, inOutResult];
let c0;
let c1;
let c2;
[tmp3, tmp4, tmp5, tmp6] = items;
function getPulseOpacity(arg0, arg1) {
  let result1;
  const result = (arg0 + arg1) % 1;
  let sum = result;
  if (result < 0) {
    sum = result + 1;
  }
  const diff = c1 - c0;
  const tmp3 = c0;
  const tmp5 = c2;
  if (sum < 0.5) {
    result1 = 2 * sum;
  } else {
    result1 = 2 * (1 - sum);
  }
  return tmp3 + diff * tmp5(result1);
}
let items1 = [tmp4, tmp5, tmp6];
getPulseOpacity.__closure = items1;
getPulseOpacity.__workletHash = 14613140904833;
getPulseOpacity.__initData = tmp3;
let closure_9 = { code: "(function GameProfileSkeletonPulseTsx2(){let[shouldReduceMotion,MAX_OPACITY,getPulseOpacity,pulsePhase,phaseOffset]=this.__closure;if(shouldReduceMotion){return{opacity:MAX_OPACITY};}return{opacity:getPulseOpacity(pulsePhase.get(),phaseOffset)};})" };
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeletonPulse.tsx");

export function useSkeletonPulseStyle(animationDelayMs) {
  let duration;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = get_initialized;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const effect = react.useEffect(() => {
    let useReducedMotion;
    sum = sum + 1;
    let tmp2 = sum > 0;
    if (0 < sum) {
      tmp2 = !AccessibilityStore.useReducedMotion;
    }
    if (tmp2 !== closure_7) {
      closure_7 = tmp2;
      let obj2 = module_1652;
      let tmp10 = closure_1_5;
      obj2.cancelAnimation(closure_1_5);
      let result = closure_1_5.set(0);
      if (tmp2) {
        set = tmp10.set;
        const tmp8Result = tmp8(tmp9[2]);
        let withRepeat = tmp8Result.withRepeat;
        const tmp8Result2 = tmp8(tmp9[3]);
        let obj = { duration, easing: tmp8(tmp9[2]).Easing.linear };
        let withTiming = tmp8Result2.withTiming;
        let result1 = set(withRepeat(withTiming(1, obj), -1, false));
      }
    }
    return () => {
      diff = diff - 1;
      let tmp2 = diff > 0;
      if (0 < diff) {
        tmp2 = !useReducedMotion.useReducedMotion;
      }
      if (tmp2 !== closure_7) {
        closure_7 = tmp2;
        const obj2 = closure_1_0(closure_1_1[2]);
        obj2.cancelAnimation(closure_1_5);
        const result = closure_1_5.set(0);
        const tmp10 = closure_1_5;
        if (tmp2) {
          set = tmp10.set;
          const withRepeat = closure_1_0(closure_1_1[2]).withRepeat;
          closure_1_0(closure_1_1[2]);
          const obj = { duration, easing: closure_1_0(closure_1_1[2]).Easing.linear };
          const withTiming = closure_1_0(closure_1_1[3]).withTiming;
          closure_1_0(closure_1_1[3]);
          const result1 = set(withRepeat(withTiming(1, obj), -1, false));
        }
      }
    };
  }, []);
  const items1 = [stateFromStores];
  const effect1 = react.useEffect(() => {
    if ((sum > 0 && !AccessibilityStore.useReducedMotion) !== closure_7) {
      closure_7 = tmp;
      const obj2 = module_1652;
      obj2.cancelAnimation(closure_1_5);
      const result = closure_1_5.set(0);
      const tmp9 = closure_1_5;
      if (sum > 0 && !AccessibilityStore.useReducedMotion) {
        set = tmp9.set;
        const withRepeat = module_1652.withRepeat;
        module_1652;
        const obj = { duration, easing: module_1652.Easing.linear };
        const withTiming = timing_timing.withTiming;
        timing_timing;
        const result1 = set(withRepeat(withTiming(1, obj), -1, false));
      }
    }
  }, items1);
  let obj2 = module_1652;
  const items2 = [closure_9, stateFromStores, 0.1, getPulseOpacity, closure_5, -animationDelayMs % c4 / c4];
  let c0;
  let c1;
  let c2;
  let c3;
  c4 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items2;
  class GameProfileSkeletonPulseTsx2 {
    constructor() {
      let tmp4;
      const obj = { opacity: null };
      if (c0) {
        obj.opacity = opacity;
        tmp4 = obj;
      } else {
        obj.opacity = _undefined(_undefined2.get(), c4);
        tmp4 = obj;
      }
      return tmp4;
    }
  }
  const items3 = [tmp5, tmp6, tmp7, tmp8, tmp9];
  GameProfileSkeletonPulseTsx2.__closure = items3;
  GameProfileSkeletonPulseTsx2.__workletHash = 9470986050093;
  GameProfileSkeletonPulseTsx2.__initData = tmp4;
  return obj2.useAnimatedStyle(GameProfileSkeletonPulseTsx2);
}
