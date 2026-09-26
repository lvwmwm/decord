// Module ID: 8981
// Function ID: 8982
// Name: useResolveGameForProfile
// Dependencies: [7445, 4918, 8982, 4919, 7583, 2]
// Exports: default

// Module 8981 (useResolveGameForProfile)
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7445 */;
import useGame from "useGame" /* 7583 */;
import useResolveGameDefault from "useResolveGame" /* 8982 */;
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
    result = tmp(4918).isRobloxSubgameApplication(getOrFetchApplication);
    const tmpResult = tmp(4918);
  }
  const obj2 = { applicationId, gameId: null };
  if (result) {
    gameId = tmp(4919).ROBLOX_GAME_ID;
  }
  obj2.gameId = gameId;
  let tmp6Result = useResolveGameDefault(obj2);
  let isRobloxSubgameGameResult = null != tmp6Result.gameRecord;
  if (isRobloxSubgameGameResult) {
    isRobloxSubgameGameResult = tmp(4918).isRobloxSubgameGame(tmp6Result.gameRecord);
    const tmpResult3 = tmp(4918);
  }
  let ROBLOX_GAME_ID;
  if (isRobloxSubgameGameResult) {
    ROBLOX_GAME_ID = tmp(4919).ROBLOX_GAME_ID;
  }
  const game = useGame.useGame(ROBLOX_GAME_ID);
  let data = game.data;
  if (isRobloxSubgameGameResult) {
    const obj3 = { gameId: tmp(4919).ROBLOX_GAME_ID, gameRecord: null, isLoading: null };
    if (data == null) {
      data = null;
    }
    obj3.gameRecord = data;
    obj3.isLoading = tmp12;
    tmp6Result = obj3;
  }
  return tmp6Result;
};
