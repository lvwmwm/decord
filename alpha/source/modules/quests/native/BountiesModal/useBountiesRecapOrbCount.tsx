// Module ID: 17190
// Function ID: 17191
// Name: useBountiesRecapOrbCount
// Dependencies: [32, 19, 1652, 17189, 1705, 2]
// Exports: useBountiesRecapOrbCount

// Module 17190 (useBountiesRecapOrbCount)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import useBountiesRecapScroll from "useBountiesRecapScroll" /* 17189 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp2;
let items = [{ code: "(function getRecapOrbCountFromPullProgress_useBountiesRecapOrbCountTsx1(progress,targetOrbAmount){if(targetOrbAmount<=0||!Number.isFinite(targetOrbAmount)){return 0;}const clampedProgress=Math.min(1,Math.max(0,progress));return Math.round(clampedProgress*targetOrbAmount);})" }];
[tmp2] = items;
function getRecapOrbCountFromPullProgress(arg0, scrollLength) {
  if (scrollLength > 0) {
    const _Number = Number;
    if (Number.isFinite(scrollLength)) {
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      return Math.round(Math.min(1, Math.max(0, arg0)) * scrollLength);
    }
  }
  return 0;
}
getRecapOrbCountFromPullProgress.__workletHash = 4845833919284;
getRecapOrbCountFromPullProgress.__initData = tmp2;
let closure_5 = { code: "(function useBountiesRecapOrbCountTsx2(){let[enabled,recapRevealHeight,getRevealProgress,scrollY,lastBountyScrollOffset,RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS,getRecapOrbCountFromPullProgress,targetOrbAmount]=this.__closure;if(!enabled||recapRevealHeight<=0){return{count:0,revealed:false};}const pullProgress=getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight)/RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS;if(pullProgress<=0.1){return{count:0,revealed:false};}return{count:getRecapOrbCountFromPullProgress(pullProgress,targetOrbAmount),revealed:true};})" };
let closure_6 = { code: "(function useBountiesRecapOrbCountTsx3({count:count,revealed:revealed}){let[scheduleOnRN,resetDisplayCount,setDisplayCountMonotonic]=this.__closure;if(!revealed){scheduleOnRN(resetDisplayCount);return;}scheduleOnRN(setDisplayCountMonotonic,count);})" };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapOrbCount.tsx");

export { getRecapOrbCountFromPullProgress };
export function useBountiesRecapOrbCount(arg0) {
  let c0;
  let enabled;
  let lastBountyScrollOffset;
  let recapRevealHeight;
  let scrollY;
  let targetOrbAmount;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp2;
  let tmp20;
  let tmp8;
  let tmp9;
  ({ scrollY, lastBountyScrollOffset, recapRevealHeight, targetOrbAmount, enabled } = arg0);
  let tmp = _slicedToArray(react.useState(0), 2);
  [tmp2, c0] = tmp;
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = _undefined((arg0) => {
      let tmp = arg0;
      if (closure_0 > arg0) {
        tmp = closure_0;
      }
      return tmp;
    });
  }, []);
  const callback1 = react.useCallback(() => {
    _undefined(0);
  }, []);
  const items = [closure_5, enabled, recapRevealHeight, , , , , , ];
  const useAnimatedReaction = _mod1652.useAnimatedReaction;
  _mod1652;
  items[3] = useBountiesRecapScroll.getRevealProgress;
  items[4] = scrollY;
  items[5] = lastBountyScrollOffset;
  items[6] = 0.95;
  items[7] = getRecapOrbCountFromPullProgress;
  items[8] = targetOrbAmount;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  function useBountiesRecapOrbCountTsx2() {
    const tmp = c0;
    if (tmp) {
      if (c1 > 0) {
        let obj;
        const result = _undefined(_undefined2.get(), c4, tmp2) / c5;
        if (result <= 0.1) {
          obj = { count: 0, revealed: false };
        } else {
          obj = { count: _undefined3(result, c7), revealed: true };
        }
        return obj;
      }
    }
    return { count: 0, revealed: false };
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  useBountiesRecapOrbCountTsx2.__closure = items1;
  useBountiesRecapOrbCountTsx2.__workletHash = 758066957163;
  useBountiesRecapOrbCountTsx2.__initData = tmp8;
  const items2 = [closure_6, _mod1705.scheduleOnRN, callback1, callback];
  c0 = undefined;
  let c1;
  let c2;
  [tmp17, tmp18, tmp19, tmp20] = items2;
  function useBountiesRecapOrbCountTsx3(revealed) {
    if (revealed.revealed) {
      _undefined(c2, tmp);
    } else {
      _undefined(c1);
    }
  }
  const items3 = [tmp18, tmp19, tmp20];
  useBountiesRecapOrbCountTsx3.__closure = items3;
  useBountiesRecapOrbCountTsx3.__workletHash = 6766118779745;
  useBountiesRecapOrbCountTsx3.__initData = tmp17;
  const animatedReaction = useAnimatedReaction(useBountiesRecapOrbCountTsx2, useBountiesRecapOrbCountTsx3);
  return tmp2;
}
