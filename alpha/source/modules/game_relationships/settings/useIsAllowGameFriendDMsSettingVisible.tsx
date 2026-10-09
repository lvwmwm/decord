// Module ID: 16209
// Function ID: 16210
// Name: useIsAllowGameFriendDMsSettingVisible
// Dependencies: [7340, 558, 576, 504, 2]

// Module 16209 (useIsAllowGameFriendDMsSettingVisible)
import react from "react" /* 576 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7340 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsAllowGameFriendDMsSettingVisible() {
  let gameRelationshipCount;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameRelationshipStore];
    const fn = function n() {
      return gameRelationshipCount.getGameRelationshipCount() > 0;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsAllowGameFriendDMsSettingVisible() {
  let gameRelationshipCount;
  const items = [GameRelationshipStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => gameRelationshipCount.getGameRelationshipCount() > 0);
});
const result = size.fileFinishedImporting("modules/game_relationships/settings/useIsAllowGameFriendDMsSettingVisible.tsx");

export const useIsAllowGameFriendDMsSettingVisible = tmp2;
