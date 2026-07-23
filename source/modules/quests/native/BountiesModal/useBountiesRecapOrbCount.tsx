// Module ID: 13914
// Function ID: 106515
// Name: getRecapOrbCountFromPullProgress
// Dependencies: [57, 31, 3991, 13910, 2]
// Exports: useBountiesRecapOrbCount

// Module 13914 (getRecapOrbCountFromPullProgress)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
let closure_4 = { code: "function getRecapOrbCountFromPullProgress_useBountiesRecapOrbCountTsx1(progress,targetOrbAmount){if(targetOrbAmount<=0||!Number.isFinite(targetOrbAmount)){return 0;}const clampedProgress=Math.min(1,Math.max(0,progress));return Math.round(clampedProgress*targetOrbAmount);}" };
const tmp2 = (() => {
  export function getRecapOrbCountFromPullProgress(arg0, arg1) {
    if (arg1 > 0) {
      const _Number = Number;
      if (Number.isFinite(arg1)) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        return Math.round(Math.min(1, Math.max(0, arg0)) * arg1);
      }
    }
    return 0;
  }
  getRecapOrbCountFromPullProgress.__closure = {};
  getRecapOrbCountFromPullProgress.__workletHash = 14295638108053;
  getRecapOrbCountFromPullProgress.__initData = closure_4;
  return getRecapOrbCountFromPullProgress;
})();
let closure_5 = tmp2;
let closure_6 = { code: "function useBountiesRecapOrbCountTsx2(){const{enabled,recapRevealHeight,getRevealProgress,scrollY,lastBountyScrollOffset,RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS,getRecapOrbCountFromPullProgress,targetOrbAmount}=this.__closure;if(!enabled||recapRevealHeight<=0){return{count:0,revealed:false};}const pullProgress=getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight)/RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS;if(pullProgress<=0.1){return{count:0,revealed:false};}return{count:getRecapOrbCountFromPullProgress(pullProgress,targetOrbAmount),revealed:true};}" };
let closure_7 = { code: "function useBountiesRecapOrbCountTsx3({count:count,revealed:revealed}){const{runOnJS,resetDisplayCount,setDisplayCountMonotonic}=this.__closure;if(!revealed){runOnJS(resetDisplayCount)();return;}runOnJS(setDisplayCountMonotonic)(count);}" };
let result = require("module_3991").fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapOrbCount.tsx");

export const useBountiesRecapOrbCount = function useBountiesRecapOrbCount(scrollY) {
  let closure_5;
  let tmp2;
  scrollY = scrollY.scrollY;
  const lastBountyScrollOffset = scrollY.lastBountyScrollOffset;
  const recapRevealHeight = scrollY.recapRevealHeight;
  const targetOrbAmount = scrollY.targetOrbAmount;
  const enabled = scrollY.enabled;
  [tmp2, closure_5] = recapRevealHeight(targetOrbAmount.useState(0), 2);
  const callback = targetOrbAmount.useCallback((arg0) => {
    let closure_0 = arg0;
    callback((arg0) => {
      let tmp = arg0;
      if (closure_0 > arg0) {
        tmp = closure_0;
      }
      return tmp;
    });
  }, []);
  const callback1 = targetOrbAmount.useCallback(() => {
    callback(0);
  }, []);
  let obj = scrollY(lastBountyScrollOffset[2]);
  const fn = function b() {
    if (enabled) {
      if (recapRevealHeight > 0) {
        const result = scrollY(lastBountyScrollOffset[3]).getRevealProgress(scrollY.get(), lastBountyScrollOffset, recapRevealHeight) / 0.95;
        if (result <= 0.1) {
          let obj = { count: 0, revealed: false };
        } else {
          obj = { count: outer1_5(result, targetOrbAmount), revealed: true };
        }
        return obj;
      }
    }
    return { count: 0, revealed: false };
  };
  obj = { enabled, recapRevealHeight, getRevealProgress: scrollY(lastBountyScrollOffset[3]).getRevealProgress, scrollY, lastBountyScrollOffset, RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS: 0.95, getRecapOrbCountFromPullProgress: closure_5, targetOrbAmount };
  fn.__closure = obj;
  fn.__workletHash = 2855285055570;
  fn.__initData = callback;
  const fn2 = function p(arg0) {
    let count;
    let revealed;
    ({ count, revealed } = arg0);
    const runOnJS = scrollY(lastBountyScrollOffset[2]).runOnJS;
    if (revealed) {
      runOnJS(callback)(count);
    } else {
      runOnJS(callback1)();
    }
  };
  obj = { runOnJS: scrollY(lastBountyScrollOffset[2]).runOnJS, resetDisplayCount: callback1, setDisplayCountMonotonic: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 12006414940221;
  fn2.__initData = callback1;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  return tmp2;
};
