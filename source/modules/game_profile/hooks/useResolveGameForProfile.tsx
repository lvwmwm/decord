// Module ID: 8454
// Function ID: 67311
// Name: useResolveGameForProfile
// Dependencies: [5503, 4336, 8455, 4337, 5888, 2]
// Exports: default

// Module 8454 (useResolveGameForProfile)
let result = require("useResolveGame").fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default function useResolveGameForProfile(arg0) {
  let applicationId;
  let gameId;
  ({ applicationId, gameId } = arg0);
  let obj = require(5503) /* useGetOrFetchApplications */;
  let tmp;
  if (null == gameId) {
    tmp = applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(tmp);
  let result = null != getOrFetchApplication;
  if (result) {
    result = require(4336) /* hasSubgameInfoChanged */.isRobloxSubgameApplication(getOrFetchApplication);
    const obj2 = require(4336) /* hasSubgameInfoChanged */;
  }
  obj = { applicationId };
  if (result) {
    gameId = require(4337) /* ROBLOX_PROTOCOL_URL */.ROBLOX_GAME_ID;
  }
  obj.gameId = gameId;
  let tmp6Result = importDefault(8455)(obj);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    isRobloxSubgameGameResult = require(4336) /* hasSubgameInfoChanged */.isRobloxSubgameGame(tmp6Result.gameRecord);
    const obj4 = require(4336) /* hasSubgameInfoChanged */;
  }
  const tmp6 = importDefault(8455);
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = require(4337) /* ROBLOX_PROTOCOL_URL */.ROBLOX_GAME_ID;
  }
  const game = require(5888) /* importDefaultResult1 */.useGame(ROBLOX_GAME_ID);
  const data = game.data;
  if (isRobloxSubgameGameResult) {
    obj = { gameId: require(4337) /* ROBLOX_PROTOCOL_URL */.ROBLOX_GAME_ID };
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
