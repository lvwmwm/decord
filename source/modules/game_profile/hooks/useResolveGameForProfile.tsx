// Module ID: 9339
// Function ID: 9340
// Name: useResolveGameForProfile
// Dependencies: [5795, 4515, 9340, 4516, 5988, 2]
// Exports: default

// Module 9339 (useResolveGameForProfile)
let result = require("useResolveGame").fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default function useResolveGameForProfile(arg0) {
  let applicationId;
  let gameId;
  ({ applicationId, gameId } = arg0);
  let obj = require(5795) /* useGetOrFetchApplications */;
  let tmp3;
  if (null == gameId) {
    tmp3 = applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(tmp3);
  let result = null != getOrFetchApplication;
  if (result) {
    let tmpResult = tmp(4515);
    result = tmpResult.isRobloxSubgameApplication(getOrFetchApplication);
  }
  obj = { applicationId, gameId: null };
  if (result) {
    gameId = tmp(4516).ROBLOX_GAME_ID;
  }
  obj[1] = gameId;
  let tmp6Result = importDefault(9340)(obj);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    tmpResult = tmp(4515);
    isRobloxSubgameGameResult = tmpResult.isRobloxSubgameGame(tmp6Result.gameRecord);
  }
  const tmp6 = importDefault(9340);
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = tmp(4516).ROBLOX_GAME_ID;
  }
  const game = require(5988) /* importDefaultResult1 */.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    obj = { gameId: null, gameRecord: null, isLoading: null };
    obj[0] = tmp(4516).ROBLOX_GAME_ID;
    if (data == null) {
      data = null;
    }
    obj[1] = data;
    obj[2] = tmp12;
    tmp6Result = obj;
  }
  return tmp6Result;
};
