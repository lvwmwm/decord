// Module ID: 8954
// Function ID: 8955
// Name: useResolveGameForProfile
// Dependencies: [7415, 4887, 8955, 4888, 7553, 2]
// Exports: default

// Module 8954 (useResolveGameForProfile)
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7415 */;
import useGame from "useGame" /* 7553 */;
import useResolveGameDefault from "useResolveGame" /* 8955 */;
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
    result = tmp(4887).isRobloxSubgameApplication(getOrFetchApplication);
    const tmpResult = tmp(4887);
  }
  const obj2 = { applicationId, gameId: null };
  if (result) {
    gameId = tmp(4888).ROBLOX_GAME_ID;
  }
  obj2.gameId = gameId;
  let tmp6Result = useResolveGameDefault(obj2);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    isRobloxSubgameGameResult = tmp(4887).isRobloxSubgameGame(tmp6Result.gameRecord);
    const tmpResult3 = tmp(4887);
  }
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = tmp(4888).ROBLOX_GAME_ID;
  }
  const game = useGame.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    const obj3 = { gameId: tmp(4888).ROBLOX_GAME_ID, gameRecord: null, isLoading: null };
    if (data == null) {
      data = null;
    }
    obj3.gameRecord = data;
    obj3.isLoading = tmp12;
    tmp6Result = obj3;
  }
  return tmp6Result;
};
