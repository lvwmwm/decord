// Module ID: 8584
// Function ID: 68145
// Name: useResolveGameForProfile
// Dependencies: []
// Exports: default

// Module 8584 (useResolveGameForProfile)
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default function useResolveGameForProfile(arg0) {
  let applicationId;
  let gameId;
  ({ applicationId, gameId } = arg0);
  let obj = require(dependencyMap[0]);
  let tmp;
  if (null == gameId) {
    tmp = applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(tmp);
  let result = null != getOrFetchApplication;
  if (result) {
    result = require(dependencyMap[1]).isRobloxSubgameApplication(getOrFetchApplication);
    const obj2 = require(dependencyMap[1]);
  }
  obj = { applicationId };
  if (result) {
    gameId = require(dependencyMap[3]).ROBLOX_GAME_ID;
  }
  obj.gameId = gameId;
  let tmp6Result = importDefault(dependencyMap[2])(obj);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    isRobloxSubgameGameResult = require(dependencyMap[1]).isRobloxSubgameGame(tmp6Result.gameRecord);
    const obj4 = require(dependencyMap[1]);
  }
  const tmp6 = importDefault(dependencyMap[2]);
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = require(dependencyMap[3]).ROBLOX_GAME_ID;
  }
  const game = require(dependencyMap[4]).useGame(ROBLOX_GAME_ID);
  const data = game.data;
  if (isRobloxSubgameGameResult) {
    obj = { gameId: require(dependencyMap[3]).ROBLOX_GAME_ID };
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
