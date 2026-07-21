// Module ID: 8586
// Function ID: 68150
// Name: clearGameProfilePendingReturn
// Dependencies: []

// Module 8586 (clearGameProfilePendingReturn)
function clearGameProfilePendingReturn(gameId) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId };
  obj.dispatch(obj);
}
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/game_profile/GameProfileActionCreators.native.tsx");

export default {
  openGameProfileModal(arg0) {
    let gameId;
    let gameProfileModalChecks;
    let source;
    let sourceUserId;
    ({ gameId, gameProfileModalChecks } = arg0);
    ({ source, sourceUserId } = arg0);
    importDefault(dependencyMap[0])(gameProfileModalChecks.shouldOpenGameProfile, "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?");
    importDefault(dependencyMap[0])(gameProfileModalChecks.gameId === gameId, "Passed an unexpected [gameId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?");
    const obj = importDefault(dependencyMap[1]);
    obj.openLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), "game-profile-" + gameId, { gameId, source, sourceUserId });
  },
  returnToGameProfile(gameId) {
    let initialScrollOffset;
    let source;
    gameId = gameId.gameId;
    ({ source, initialScrollOffset } = gameId);
    clearGameProfilePendingReturn(gameId);
    const obj = importDefault(dependencyMap[1]);
    obj.openLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), "game-profile-" + gameId, { gameId, source, initialScrollOffset });
  },
  setGameProfilePendingReturn(arg0) {
    let channelId;
    let gameId;
    let initialScrollOffset;
    ({ gameId, channelId, initialScrollOffset } = arg0);
    importDefault(dependencyMap[4]).dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId, channelId, initialScrollOffset });
  },
  clearGameProfilePendingReturn
};
