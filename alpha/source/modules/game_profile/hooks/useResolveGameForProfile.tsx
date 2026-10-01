// Module ID: 8318
// Function ID: 8319
// Name: useResolveGameForProfile
// Dependencies: [6775, 4975, 8319, 4976, 6914, 2]
// Exports: default

// Module 8318 (useResolveGameForProfile)
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6775 */;
import useGame from "useGame" /* 6914 */;
import useResolveGameDefault from "useResolveGame" /* 8319 */;
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
    result = tmp(4975).isRobloxSubgameApplication(getOrFetchApplication);
    const tmpResult = tmp(4975);
  }
  const obj2 = { applicationId, gameId: null };
  if (result) {
    gameId = tmp(4976).ROBLOX_GAME_ID;
  }
  obj2.gameId = gameId;
  let tmp6Result = useResolveGameDefault(obj2);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    isRobloxSubgameGameResult = tmp(4975).isRobloxSubgameGame(tmp6Result.gameRecord);
    const tmpResult3 = tmp(4975);
  }
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = tmp(4976).ROBLOX_GAME_ID;
  }
  const game = useGame.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    const obj3 = { gameId: tmp(4976).ROBLOX_GAME_ID, gameRecord: null, isLoading: null };
    if (data == null) {
      data = null;
    }
    obj3.gameRecord = data;
    obj3.isLoading = tmp12;
    tmp6Result = obj3;
  }
  return tmp6Result;
};
