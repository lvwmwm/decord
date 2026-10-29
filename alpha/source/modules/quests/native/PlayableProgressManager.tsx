// Module ID: 19980
// Function ID: 19981
// Name: PlayableProgressManager
// Dependencies: [19981, 3, 7274, 2]

// Module 19980 (PlayableProgressManager)
import LoggerDefault from "Logger" /* 3 */;
import PlayableStore_mod from "PlayableStore" /* 19981 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7274 */;
import size from "module_2" /* 2 */;

let PlayableStore = PlayableStore_mod;
let tmp2 = new LoggerDefault("PlayableProgressManager");
let closure_1 = tmp2;
class PlayableProgressManager extends AutomaticLifecycleManager {
  constructor() {
    let logger;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    PlayableStore = applyArgumentsResult;
    applyArgumentsResult.timeout = null;
    applyArgumentsResult.handlePlayableStoreChange = function handlePlayableStoreChange() {
      let obj = PlayableStore;
      const playingPlayableId = PlayableStore.getPlayingPlayableId();
      let tmp2 = null != playingPlayableId && obj.isRunning(playingPlayableId);
      const obj3 = { playableId: playingPlayableId, isRunning: tmp2, hasTimeout: null != playingPlayableId.timeout };
      logger.log("PlayableStore changed", obj3);
      if (tmp2) {
        if (null == playingPlayableId.timeout) {
          const remainingMs = obj.getRemainingMs(playingPlayableId);
          if (null != remainingMs) {
            const _setTimeout = setTimeout;
            playingPlayableId.timeout = setTimeout(() => {
              PlayableStore.timeout = null;
              const obj = { playableId: playingPlayableId };
              logger.log("Playable reward timer reached", obj);
            }, remainingMs);
            const obj4 = { playableId: playingPlayableId, remainingMs };
            logger.log("Playable timer started", obj4);
          }
        }
      }
      if (!tmp2) {
        tmp2 = null == tmp3.timeout;
      }
      if (!tmp2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(playingPlayableId.timeout);
        playingPlayableId.timeout = null;
        const obj5 = { playableId: playingPlayableId };
        logger.log("Playable timer cleared", obj5);
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
