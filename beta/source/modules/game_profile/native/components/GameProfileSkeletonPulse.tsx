// Module ID: 8196
// Function ID: 8197
// Name: GameProfileSkeletonPulse
// Dependencies: [19, 4825, 4566, 4837, 504, 2]
// Exports: useSkeletonPulseStyle

// Module 8196 (GameProfileSkeletonPulse)
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4566 */;
import size from "module_2" /* 2 */;

let closure_8, dependencyMap, diff, set;

let ReanimatedRexport;
let c4 = 1300;
const Easing = ReanimatedRexport.Easing;
const inOutResult = Easing.inOut(ReanimatedRexport.Easing.quad);
const hasOwnProperty = inOutResult;
ReanimatedRexport = ReanimatedRexport_mod;
const pulsePhase = ReanimatedRexport.makeMutable(0);
let c7 = 0;
let c8 = false;
function getPulseOpacity(arg0, arg1) {
  let result1;
  const result = (arg0 + arg1) % 1;
  let sum = result;
  if (result < 0) {
    sum = result + 1;
  }
  const tmp3 = hasOwnProperty;
  if (sum < 0.5) {
    result1 = 2 * sum;
  } else {
    result1 = 2 * (1 - sum);
  }
  return 0.05 + 0.05 * tmp3(result1);
}
getPulseOpacity.__closure = { MIN_OPACITY: 0.05, MAX_OPACITY: 0.1, DEFAULT_TIMING_EASING: inOutResult };
getPulseOpacity.__workletHash = 2217576423672;
getPulseOpacity.__initData = { code: "function getPulseOpacity_GameProfileSkeletonPulseTsx1(phase,phaseOffset){const{MIN_OPACITY,MAX_OPACITY,DEFAULT_TIMING_EASING}=this.__closure;const shiftedPhase=(phase+phaseOffset)%1;const cyclePhase=shiftedPhase<0?shiftedPhase+1:shiftedPhase;const pulseProgress=cyclePhase<0.5?cyclePhase*2:(1-cyclePhase)*2;return MIN_OPACITY+(MAX_OPACITY-MIN_OPACITY)*DEFAULT_TIMING_EASING(pulseProgress);}" };
const __initData = { code: "function GameProfileSkeletonPulseTsx2(){const{shouldReduceMotion,MAX_OPACITY,getPulseOpacity,pulsePhase,phaseOffset}=this.__closure;if(shouldReduceMotion){return{opacity:MAX_OPACITY};}return{opacity:getPulseOpacity(pulsePhase.get(),phaseOffset)};}" };
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeletonPulse.tsx");

export const useSkeletonPulseStyle = function useSkeletonPulseStyle(animationDelayMs) {
  let duration;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const effect = react.useEffect(() => {
    let useReducedMotion;
    sum = sum + 1;
    let tmp2 = sum > 0;
    if (tmp2) {
      tmp2 = !AccessibilityStore.useReducedMotion;
    }
    if (tmp2 !== closure_8) {
      closure_8 = tmp2;
      let obj2 = stateFromStores(dependencyMap[2]);
      let tmp10 = pulsePhase;
      obj2.cancelAnimation(pulsePhase);
      dependencyMap = pulsePhase.set(0);
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
      if ((diff > 0 && !useReducedMotion.useReducedMotion) !== closure_8) {
        closure_8 = tmp2;
        const obj2 = stateFromStores(closure_1_1[2]);
        obj2.cancelAnimation(closure_1_6);
        result = closure_1_6.set(0);
        const tmp10 = closure_1_6;
        if (diff > 0 && !useReducedMotion.useReducedMotion) {
          set = tmp10.set;
          const withRepeat = stateFromStores(closure_1_1[2]).withRepeat;
          stateFromStores(closure_1_1[2]);
          const obj = { duration, easing: stateFromStores(closure_1_1[2]).Easing.linear };
          const withTiming = stateFromStores(closure_1_1[3]).withTiming;
          stateFromStores(closure_1_1[3]);
          const result1 = set(withRepeat(withTiming(1, obj), -1, false));
        }
      }
    };
  }, []);
  const items1 = [stateFromStores];
  const effect1 = react.useEffect(() => {
    if ((sum > 0 && !AccessibilityStore.useReducedMotion) !== closure_8) {
      closure_8 = tmp;
      const obj2 = stateFromStores(dependencyMap[2]);
      obj2.cancelAnimation(pulsePhase);
      dependencyMap = pulsePhase.set(0);
      const tmp9 = pulsePhase;
      if (sum > 0 && !AccessibilityStore.useReducedMotion) {
        set = tmp9.set;
        const withRepeat = stateFromStores(dependencyMap[2]).withRepeat;
        stateFromStores(dependencyMap[2]);
        const obj = { duration, easing: stateFromStores(dependencyMap[2]).Easing.linear };
        const withTiming = stateFromStores(dependencyMap[3]).withTiming;
        stateFromStores(dependencyMap[3]);
        const result1 = set(withRepeat(withTiming(1, obj), -1, false));
      }
    }
  }, items1);
  let result = -animationDelayMs % c4 / c4;
  dependencyMap = result;
  let obj2 = stateFromStores(4566);
  class P {
    constructor() {
      let obj;
      const tmp = stateFromStores;
      if (tmp) {
        obj = { opacity: 0.1 };
      } else if (typeof getPulseOpacity === "function") {
        let result1;
        dependencyMap = (pulsePhase.get() + dependencyMap) % 1;
        sum = dependencyMap;
        if (dependencyMap < 0) {
          sum = dependencyMap + 1;
        }
        const tmp6 = hasOwnProperty;
        if (sum < 0.5) {
          result1 = 2 * sum;
        } else {
          result1 = 2 * (1 - sum);
        }
        obj = { opacity: 0.05 + 0.05 * tmp6(result1) };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      return obj;
    }
  }
  const obj3 = { shouldReduceMotion: stateFromStores, MAX_OPACITY: 0.1, getPulseOpacity, pulsePhase, phaseOffset: result };
  P.__closure = obj3;
  P.__workletHash = 3992024948852;
  P.__initData = __initData;
  return obj2.useAnimatedStyle(P);
};
