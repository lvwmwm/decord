// Module ID: 8131
// Function ID: 8132
// Name: useResolveGameForProfile
// Dependencies: [6589, 4966, 8132, 4967, 6727, 2]
// Exports: default

// Module 8131 (useResolveGameForProfile)
import RobloxSubgameUtils from "RobloxSubgameUtils" /* 4966 */;
import RobloxSubgameTypes from "RobloxSubgameTypes" /* 4967 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6589 */;
import useGame2 from "useGame" /* 6727 */;
import useResolveGameDefault from "useResolveGame" /* 8132 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/game_profile/hooks/useResolveGameForProfile.tsx");

export default function useResolveGameForProfile(arg0) {
  let applicationId;
  let gameId;
  ({ applicationId, gameId } = arg0);
  let tmp4;
  const useGetOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication;
  useGetOrFetchApplications;
  if (null == gameId) {
    tmp4 = applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplication(tmp4);
  let result = null != getOrFetchApplication;
  if (result) {
    const tmpResult = RobloxSubgameUtils;
    result = tmpResult.isRobloxSubgameApplication(getOrFetchApplication);
  }
  const obj = { applicationId, gameId };
  const tmp7 = useResolveGameDefault;
  if (result) {
    gameId = tmp(4967).ROBLOX_GAME_ID;
  }
  let tmp7Result = tmp7(obj);
  let isRobloxSubgameGameResult = null != tmp7Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    const tmpResult3 = RobloxSubgameUtils;
    isRobloxSubgameGameResult = tmpResult3.isRobloxSubgameGame(tmp7Result.gameRecord);
  }
  let ROBLOX_GAME_ID;
  const useGame = useGame2.useGame;
  useGame2;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = tmp(4967).ROBLOX_GAME_ID;
  }
  const game = useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    const obj2 = { gameId: RobloxSubgameTypes.ROBLOX_GAME_ID, gameRecord: data, isLoading: tmp14 };
    if (data == null) {
      data = null;
    }
    tmp7Result = obj2;
  }
  return tmp7Result;
};
