// Module ID: 20312
// Function ID: 20313
// Name: PlayableProgressManager
// Dependencies: [5, 16624, 3, 7444, 16759, 6843, 5694, 16490, 572, 2]

// Module 20312 (PlayableProgressManager)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PlayableStore from "PlayableStore" /* 16624 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7444 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3, playingPlayableId;

let closure_5 = new LoggerDefault("PlayableProgressManager");
const tmp2 = new LoggerDefault("PlayableProgressManager");
class PlayableProgressManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.lastTimerState = null;
    applyArgumentsResult.timeout = null;
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let obj3;
      let obj4;
      closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c4;
        try {
          let closure_2;
          let closure_1;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: obj4.claimPlayableReward(closure_0, closure_0(closure_2[5]).QuestContent.QUEST_BAR_MOBILE), done: false };
              obj4 = closure_0(closure_2[4]);
              return obj6;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              closure_0 = closure_3;
              const obj7 = { text: obj3.resolveBountyRewardClaimErrorMessage(closure_0), variant: "critical" };
              const open = closure_1(closure_2[6]).open;
              const tmp11 = closure_1(closure_2[6]);
              obj3 = closure_0(closure_2[7]);
              open("QUESTS_PLAYABLE_REWARD_CLAIM", obj7);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c4 = 0;
            }
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp21) {
          closure_3 = tmp21;
          if (0 === c4) {
            c6 = 3;
            throw tmp21;
          } else {
            c5 = 1;
          }
        }
      }
    });
    applyArgumentsResult.claimReward = function() {
      return closure_0(...arguments);
    };
    applyArgumentsResult.handlePlayableStoreChange = function handlePlayableStoreChange() {
      let logger;
      let obj = playingPlayableId;
      playingPlayableId = playingPlayableId.getPlayingPlayableId();
      let timerState = null;
      if (null != playingPlayableId) {
        timerState = obj.getTimerState(playingPlayableId);
      }
      if (timerState !== playingPlayableId.lastTimerState) {
        playingPlayableId.lastTimerState = timerState;
        if (null != playingPlayableId.timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(playingPlayableId.timeout);
        }
        playingPlayableId.timeout = null;
        if (null != playingPlayableId) {
          if (null != timerState) {
            let rewardRemainingMs = null;
            if (!timerState.rewardReached) {
              rewardRemainingMs = obj.getRewardRemainingMs(playingPlayableId);
            }
            let completionRemainingMs = null;
            if (!timerState.completionReached) {
              completionRemainingMs = obj.getCompletionRemainingMs(playingPlayableId);
            }
            let tmp8 = null != rewardRemainingMs;
            if (tmp8) {
              tmp8 = null == completionRemainingMs || rewardRemainingMs <= completionRemainingMs;
              const tmp9 = null == completionRemainingMs || rewardRemainingMs <= completionRemainingMs;
            }
            let closure_1 = tmp8;
            if (closure_1) {
              completionRemainingMs = rewardRemainingMs;
            }
            if (null != completionRemainingMs) {
              let num = obj.getPlayedMs(playingPlayableId);
              if (num == null) {
                num = 0;
              }
              let isRunningResult = obj.isRunning(playingPlayableId);
              if (!isRunningResult) {
                isRunningResult = 0 === completionRemainingMs && tmp10;
              }
              if (isRunningResult) {
                const _setTimeout = setTimeout;
                playingPlayableId.timeout = setTimeout(() => {
                  require.timeout = null;
                  const obj = require;
                  const tmp = closure_1;
                  if (tmp) {
                    const obj3 = { playableId: playingPlayableId };
                    logger.log("Playable reward timer reached", obj3);
                    const obj4 = { type: "PLAYABLE_REWARD_TIMER_COMPLETE", playableId: playingPlayableId };
                    const obj5 = DispatcherDefault;
                    obj5.dispatch(obj4);
                    obj.claimReward(playingPlayableId);
                  } else {
                    const obj6 = { type: "PLAYABLE_COMPLETION_REACHED", playableId: playingPlayableId };
                    const obj2 = DispatcherDefault;
                    obj2.dispatch(obj6);
                  }
                }, completionRemainingMs);
              }
            }
          }
        }
      }
    };
    const items = [PlayableStore, applyArgumentsResult.handlePlayableStoreChange];
    const items1 = [items];
    applyArgumentsResult.stores = new Map(items1);
    applyArgumentsResult.actions = {};
    new Map(items1);
    return applyArgumentsResult;
  }
}
const playableProgressManager = new PlayableProgressManager();
const result = size.fileFinishedImporting("modules/quests/native/PlayableProgressManager.tsx");

export default playableProgressManager;
