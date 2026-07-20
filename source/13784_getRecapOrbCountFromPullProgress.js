// Module ID: 13784
// Function ID: 104281
// Name: getRecapOrbCountFromPullProgress
// Dependencies: []
// Exports: useBountiesRecapOrbCount

// Module 13784 (getRecapOrbCountFromPullProgress)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = { code: "function getRecapOrbCountFromPullProgress_useBountiesRecapOrbCountTsx1(progress,targetOrbAmount){if(targetOrbAmount<=0||!Number.isFinite(targetOrbAmount)){return 0;}const clampedProgress=Math.min(1,Math.max(0,progress));return Math.round(clampedProgress*targetOrbAmount);}" };
const tmp2 = () => {
  function getRecapOrbCountFromPullProgress(arg0, arg1) {
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
}();
let closure_6 = { code: "function useBountiesRecapOrbCountTsx2(){const{enabled,recapRevealHeight,getRevealProgress,scrollY,lastBountyScrollOffset,RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS,getRecapOrbCountFromPullProgress,targetOrbAmount}=this.__closure;if(!enabled||recapRevealHeight<=0){return{count:0,revealed:false};}const pullProgress=getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight)/RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS;if(pullProgress<=0.1){return{count:0,revealed:false};}return{count:getRecapOrbCountFromPullProgress(pullProgress,targetOrbAmount),revealed:true};}" };
let closure_7 = { code: "function useBountiesRecapOrbCountTsx3({count:count,revealed:revealed}){const{runOnJS,resetDisplayCount,setDisplayCountMonotonic}=this.__closure;if(!revealed){runOnJS(resetDisplayCount)();return;}runOnJS(setDisplayCountMonotonic)(count);}" };
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapOrbCount.tsx");

export const getRecapOrbCountFromPullProgress = tmp2;
export const useBountiesRecapOrbCount = function useBountiesRecapOrbCount(scrollY) {
  let tmp2;
  scrollY = scrollY.scrollY;
  const arg1 = scrollY;
  const lastBountyScrollOffset = scrollY.lastBountyScrollOffset;
  const dependencyMap = lastBountyScrollOffset;
  const recapRevealHeight = scrollY.recapRevealHeight;
  let callback = recapRevealHeight;
  const targetOrbAmount = scrollY.targetOrbAmount;
  const React = targetOrbAmount;
  const enabled = scrollY.enabled;
  let closure_4 = enabled;
  [tmp2, closure_5] = callback(React.useState(0), 2);
  callback = React.useCallback((arg0) => {
    const scrollY = arg0;
    callback((arg0) => {
      let tmp = arg0;
      if (arg0 > arg0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  let closure_6 = callback;
  const callback1 = React.useCallback(() => {
    callback(0);
  }, []);
  let closure_7 = callback1;
  let obj = arg1(dependencyMap[2]);
  const fn = function b() {
    if (enabled) {
      if (recapRevealHeight > 0) {
        const result = scrollY(lastBountyScrollOffset[3]).getRevealProgress(scrollY.get(), lastBountyScrollOffset, recapRevealHeight) / 0.95;
        if (result <= 0.1) {
          let obj = { <string:1658542518>: 9035158524362260000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:3193003259>: -222642488090540470000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
        } else {
          obj = { count: callback(result, targetOrbAmount), revealed: true };
        }
        return obj;
      }
    }
    return { <string:1658542518>: 9035158524362260000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:3193003259>: -222642488090540470000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
  };
  obj = { enabled, recapRevealHeight, getRevealProgress: arg1(dependencyMap[3]).getRevealProgress, scrollY, lastBountyScrollOffset, RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS: 0.95, getRecapOrbCountFromPullProgress: tmp2, targetOrbAmount };
  fn.__closure = obj;
  fn.__workletHash = 2855285055570;
  fn.__initData = closure_6;
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
  obj = { runOnJS: arg1(dependencyMap[2]).runOnJS, resetDisplayCount: callback1, setDisplayCountMonotonic: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 12006414940221;
  fn2.__initData = closure_7;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  return tmp2;
};
