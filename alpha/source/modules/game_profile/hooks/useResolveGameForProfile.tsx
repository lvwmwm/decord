// Module ID: 8327
// Function ID: 8328
// Name: useResolveGameForProfile
// Dependencies: [6785, 4996, 8328, 4997, 6923, 2]
// Exports: default

// Module 8327 (useResolveGameForProfile)
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6785 */;
import useGame from "useGame" /* 6923 */;
import useResolveGameDefault from "useResolveGame" /* 8328 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default function useResolveGameForProfile(arg0) {
  ({ applicationId, gameId } = arg0);
  let tmp3;
  if (null == gameId) {
    tmp3 = applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(tmp3);
  let result = null != getOrFetchApplication;
  if (result) {
    result = tmp(4996).isRobloxSubgameApplication(getOrFetchApplication);
    const tmpResult = tmp(4996);
  }
  const obj2 = { applicationId, gameId: null };
  if (result) {
    gameId = tmp(4997).ROBLOX_GAME_ID;
  }
  obj2.gameId = gameId;
  let tmp6Result = useResolveGameDefault(obj2);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    isRobloxSubgameGameResult = tmp(4996).isRobloxSubgameGame(tmp6Result.gameRecord);
    const tmpResult3 = tmp(4996);
  }
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = tmp(4997).ROBLOX_GAME_ID;
  }
  const game = useGame.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    const obj3 = { gameId: tmp(4997).ROBLOX_GAME_ID, gameRecord: null, isLoading: null };
    if (data == null) {
      data = null;
    }
    obj3.gameRecord = data;
    obj3.isLoading = tmp12;
    tmp6Result = obj3;
  }
  return tmp6Result;
};
