// Module ID: 19264
// Function ID: 19265
// Name: usePlayableRewardProgress
// Dependencies: [32, 19, 16525, 504, 2]
// Exports: default

// Module 19264 (usePlayableRewardProgress)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PlayableStore from "PlayableStore" /* 16525 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let _slicedToArray = _slicedToArray_mod;
const result = size.fileFinishedImporting("modules/quests/native/usePlayableRewardProgress.tsx");

export default function usePlayableRewardProgress(arg0) {
  let closure_0;
  let closure_2;
  let isClaimed;
  let remainingMs;
  let timer;
  let tmp5;
  _require = arg0;
  let obj = require("get initialized");
  const items = [PlayableStore];
  const items1 = [arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { timer: PlayableStore.getTimerState(closure_0), isClaimed: PlayableStore.isPlayableCompleted(closure_0) };
    return obj;
  }, items1);
  ({ timer, isClaimed } = stateFromStoresObject);
  let startedAt;
  if (timer != null) {
    startedAt = timer.startedAt;
  }
  let tmp3 = null != startedAt;
  _slicedToArray = tmp3;
  const tmp4 = _slicedToArray(react.useState(() => {
    let num = PlayableStore.getRemainingMs(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  }), 2);
  [tmp5, react] = tmp4;
  const items2 = [arg0, timer, tmp3, isClaimed];
  const effect = react.useEffect(() => {
    let interval;
    let num = remainingMs.getRemainingMs(interval);
    if (num == null) {
      num = 0;
    }
    closure_3(num);
    const tmp2 = closure_2;
    if (tmp2) {
      const tmp3 = isClaimed;
      if (!tmp3) {
        if (num > 0) {
          const _setInterval = setInterval;
          interval = setInterval(() => {
            let num = PlayableStore.getRemainingMs(closure_0);
            if (num == null) {
              num = 0;
            }
            react(num);
            if (num <= 0) {
              const _clearInterval = clearInterval;
              clearInterval(closure_0);
            }
          }, 250);
          return () => clearInterval(closure_0);
        }
      }
    }
  }, items2);
  let num = 0;
  if (!isClaimed) {
    if (!tmp3) {
      let num2;
      if (timer != null) {
        num2 = timer.remainingMs;
      }
      if (num2 == null) {
        num2 = 0;
      }
      tmp5 = num2;
    }
    num = tmp5;
  }
  return { remainingSeconds: num / 1000, isClaimed };
};
