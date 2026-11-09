// Module ID: 20514
// Function ID: 20515
// Name: PlayableProgressManager
// Dependencies: [5, 17389, 3, 7350, 572, 20515, 6839, 5837, 17258, 2]

// Module 20514 (PlayableProgressManager)
import LoggerDefault from "Logger" /* 3 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PlayableStore from "PlayableStore" /* 17389 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7350 */;
import size from "module_2" /* 2 */;

let c4, closure_2, logger;

let closure_5 = new LoggerDefault("PlayableProgressManager");
const tmp2 = new LoggerDefault("PlayableProgressManager");
class PlayableProgressManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.timeout = null;
    applyArgumentsResult.handlePlayableStoreChange = function handlePlayableStoreChange() {
      const tmp = require;
      let closure_0 = require;
      let obj = PlayableStore;
      const playingPlayableId = PlayableStore.getPlayingPlayableId();
      const tmp3 = null != playingPlayableId && obj.isRunning(playingPlayableId);
      let remainingMs = null;
      if (null != playingPlayableId) {
        remainingMs = obj.getRemainingMs(playingPlayableId);
      }
      let obj2 = logger;
      let obj3 = { playableId: playingPlayableId, isRunning: tmp3, hasTimeout: null != tmp.timeout };
      logger.log("PlayableStore changed", obj3);
      if (tmp3) {
        if (null == tmp.timeout) {
          if (null != remainingMs) {
            if (remainingMs > 0) {
              const _setTimeout = setTimeout;
              tmp.timeout = setTimeout(_asyncToGenerator(async (arg0, value) => {
                let closure_1;
                let obj10;
                let obj3;
                if (logger === 2) {
                  logger = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  let c3;
                  try {
                    logger = 2;
                    if (0 === c4) {
                      if (arg0 === 1) {
                        logger = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        logger = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        closure_0 = tmp4;
                        closure_0.timeout = null;
                        const obj5 = { playableId: playingPlayableId };
                        logger.log("Playable reward timer reached", obj5);
                        const obj6 = { type: "PLAYABLE_REWARD_TIMER_COMPLETE", playableId: playingPlayableId };
                        const obj8 = tmp(closure_2[4]);
                        obj8.dispatch(obj6);
                        c3 = 1;
                        c4 = 2;
                        logger = 1;
                        const obj7 = { value: obj10.claimPlayableReward(playingPlayableId, closure_0(closure_2[6]).QuestContent.QUEST_BAR_MOBILE), done: false };
                        obj10 = closure_0(closure_2[5]);
                        return obj7;
                      }
                    } else {
                      if (1 === c4) {
                        c3 = 0;
                        closure_0 = closure_2;
                        const obj9 = { text: obj3.resolveBountyRewardClaimErrorMessage(closure_0), variant: "critical" };
                        const open = tmp(closure_2[7]).open;
                        const tmp11 = tmp(closure_2[7]);
                        obj3 = closure_0(closure_2[8]);
                        open("QUESTS_PLAYABLE_REWARD_CLAIM", obj9);
                      } else if (arg0 === 1) {
                        logger = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        logger = 3;
                        const obj = { value, done: true };
                        return obj;
                      } else {
                        c3 = 0;
                      }
                      logger = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp16) {
                    closure_2 = tmp16;
                    if (0 === c3) {
                      logger = 3;
                      throw tmp16;
                    } else {
                      c4 = 1;
                    }
                  }
                }
              }), remainingMs);
              let obj4 = { playableId: playingPlayableId, remainingMs };
              obj2.log("Playable timer started", obj4);
            }
          }
        }
      }
      if (!tmp3) {
        if (null != tmp.timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.timeout);
          tmp.timeout = null;
          let obj5 = { playableId: playingPlayableId };
          obj2.log("Playable timer cleared", obj5);
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
