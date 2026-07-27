// Module ID: 8410
// Function ID: 67164
// Name: useResolveGameForProfile
// Dependencies: [5468, 4302, 8411, 4303, 5639, 2]
// Exports: default

// Module 8410 (useResolveGameForProfile)
let result = require("useResolveGame").fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default function useResolveGameForProfile(arg0) {
  let applicationId;
  let gameId;
  ({ applicationId, gameId } = arg0);
  let obj = require(5468) /* useGetOrFetchApplications */;
  let tmp;
  if (null == gameId) {
    tmp = applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(tmp);
  let result = null != getOrFetchApplication;
  if (result) {
    result = require(4302) /* hasSubgameInfoChanged */.isRobloxSubgameApplication(getOrFetchApplication);
    const obj2 = require(4302) /* hasSubgameInfoChanged */;
  }
  obj = { applicationId };
  if (result) {
    gameId = require(4303) /* ROBLOX_PROTOCOL_URL */.ROBLOX_GAME_ID;
  }
  obj.gameId = gameId;
  let tmp6Result = importDefault(8411)(obj);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    isRobloxSubgameGameResult = require(4302) /* hasSubgameInfoChanged */.isRobloxSubgameGame(tmp6Result.gameRecord);
    const obj4 = require(4302) /* hasSubgameInfoChanged */;
  }
  const tmp6 = importDefault(8411);
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = require(4303) /* ROBLOX_PROTOCOL_URL */.ROBLOX_GAME_ID;
  }
  const game = require(5639) /* importDefaultResult1 */.useGame(ROBLOX_GAME_ID);
  const data = game.data;
  if (isRobloxSubgameGameResult) {
    obj = { gameId: require(4303) /* ROBLOX_PROTOCOL_URL */.ROBLOX_GAME_ID };
    let tmp20 = null;
    if (null != data) {
      tmp20 = data;
    }
    obj.gameRecord = tmp20;
    obj.isLoading = tmp17;
    tmp6Result = obj;
  }
  return tmp6Result;
};
