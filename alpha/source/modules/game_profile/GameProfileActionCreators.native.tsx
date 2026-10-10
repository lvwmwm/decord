// Module ID: 8884
// Function ID: 8885
// Name: GameProfileActionCreators
// Dependencies: [38, 5056, 8885, 2000, 584, 2]

// Module 8884 (GameProfileActionCreators)
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

let obj = {
  openGameProfileModal(arg0) {
    let gameId;
    let gameProfileModalChecks;
    let source;
    let sourceUserId;
    let stackingBehavior;
    ({ gameId, gameProfileModalChecks } = arg0);
    ({ source, sourceUserId, stackingBehavior } = arg0);
    _modDef38(gameProfileModalChecks.shouldOpenGameProfile, "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?");
    _modDef38(gameProfileModalChecks.gameId === gameId, "Passed an unexpected [gameId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?");
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { gameId, source, sourceUserId };
    const tmp4 = asyncRequire(8885, dependencyMap.paths);
    openLazy(tmp4, "game-profile-" + gameId, obj, stackingBehavior);
  },
  returnToGameProfile(gameId) {
    let initialScrollOffset;
    let initialTab;
    let source;
    gameId = gameId.gameId;
    ({ source, initialScrollOffset, initialTab } = gameId);
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId });
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const tmp3 = asyncRequire(8885, dependencyMap.paths);
    openLazy(tmp3, "game-profile-" + gameId, { gameId, source, initialScrollOffset, initialTab });
  },
  setGameProfilePendingReturn(arg0) {
    let channelId;
    let gameId;
    let initialScrollOffset;
    let source;
    let tab;
    ({ gameId, channelId, initialScrollOffset, tab, source } = arg0);
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId, channelId, initialScrollOffset, tab, source });
  },
  clearGameProfilePendingReturn(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId: id };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/game_profile/GameProfileActionCreators.native.tsx");

export default obj;
