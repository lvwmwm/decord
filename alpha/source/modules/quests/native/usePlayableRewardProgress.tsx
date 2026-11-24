// Module ID: 19254
// Function ID: 19255
// Name: usePlayableRewardProgress
// Dependencies: [32, 19, 16503, 504, 2]
// Exports: default

// Module 19254 (usePlayableRewardProgress)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import PlayableStore from "PlayableStore" /* 16503 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const result = size.fileFinishedImporting("modules/quests/native/usePlayableRewardProgress.tsx");

export default function usePlayableRewardProgress(playingPlayableId) {
  let closure_2;
  let closure_3;
  let isClaimed;
  let rewardRemainingMs;
  let timer;
  _require = playingPlayableId;
  let obj = require("get initialized");
  const items = [PlayableStore];
  const items1 = [playingPlayableId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { timer: PlayableStore.getTimerState(playingPlayableId), isClaimed: PlayableStore.isPlayableCompleted(playingPlayableId) };
    return obj;
  }, items1);
  ({ timer, isClaimed } = stateFromStoresObject);
  let startedAt;
  const obj2 = PlayableStore;
  if (timer != null) {
    startedAt = timer.startedAt;
  }
  _slicedToArray = tmp3;
  react = _slicedToArray(react.useState(0), 2)[1];
  const items2 = [playingPlayableId, timer, tmp3, isClaimed];
  const effect = react.useEffect(() => {
    let closure_0;
    let interval;
    const tmp = closure_2;
    if (tmp) {
      const tmp2 = isClaimed;
      if (!tmp2) {
        let num = rewardRemainingMs.getRewardRemainingMs(interval);
        if (num == null) {
          num = 0;
        }
        if (num > 0) {
          const _setInterval = setInterval;
          interval = setInterval(() => {
            let num = PlayableStore.getRewardRemainingMs(playingPlayableId);
            if (num == null) {
              num = 0;
            }
            if (num <= 0) {
              const _clearInterval = clearInterval;
              clearInterval(playingPlayableId);
            }
            closure_3((arg0) => arg0 + 1);
          }, 250);
          return () => clearInterval(closure_0);
        }
      }
    }
  }, items2);
  let num = 0;
  if (!isClaimed) {
    let num2 = obj2.getRewardRemainingMs(playingPlayableId);
    if (num2 == null) {
      num2 = 0;
    }
    num = num2;
  }
  return { remainingSeconds: num / 1000, isClaimed };
};
