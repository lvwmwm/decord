// Module ID: 8412
// Function ID: 67169
// Name: clearGameProfilePendingReturn
// Dependencies: [44, 4099, 8413, 1935, 686, 2]

// Module 8412 (clearGameProfilePendingReturn)
function clearGameProfilePendingReturn(id) {
  let obj = importDefault(686);
  obj = { type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId: id };
  obj.dispatch(obj);
}
const result = require("GetButton").fileFinishedImporting("modules/game_profile/GameProfileActionCreators.native.tsx");

export default {
  openGameProfileModal(arg0) {
    let gameId;
    let gameProfileModalChecks;
    let source;
    let sourceUserId;
    ({ gameId, gameProfileModalChecks } = arg0);
    ({ source, sourceUserId } = arg0);
    importDefault(44)(gameProfileModalChecks.shouldOpenGameProfile, "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?");
    importDefault(44)(gameProfileModalChecks.gameId === gameId, "Passed an unexpected [gameId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?");
    const obj = importDefault(4099);
    obj.openLazy(require(1935) /* maybeLoadBundle */(8413, dependencyMap.paths), "game-profile-" + gameId, { gameId, source, sourceUserId });
  },
  returnToGameProfile(gameId) {
    let initialScrollOffset;
    let source;
    gameId = gameId.gameId;
    ({ source, initialScrollOffset } = gameId);
    clearGameProfilePendingReturn(gameId);
    const obj = importDefault(4099);
    obj.openLazy(require(1935) /* maybeLoadBundle */(8413, dependencyMap.paths), "game-profile-" + gameId, { gameId, source, initialScrollOffset });
  },
  setGameProfilePendingReturn(arg0) {
    let channelId;
    let gameId;
    let initialScrollOffset;
    ({ gameId, channelId, initialScrollOffset } = arg0);
    importDefault(686).dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId, channelId, initialScrollOffset });
  },
  clearGameProfilePendingReturn
};
