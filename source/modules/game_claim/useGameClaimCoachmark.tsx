// Module ID: 15155
// Function ID: 115285
// Name: useCanShowGameClaimCoachmark
// Dependencies: [3759, 653, 15156, 566, 15089, 2]
// Exports: useCanShowGameClaimCoachmark

// Module 15155 (useCanShowGameClaimCoachmark)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("items").fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export const useCanShowGameClaimCoachmark = function useCanShowGameClaimCoachmark(id) {
  const _require = id;
  let gameClaimCoachmarkEnabled = _require(15156).useGameClaimCoachmarkEnabled(id, "useCanShowGameClaimCoachmark");
  const obj = _require(15156);
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(items, () => outer1_2.canWithPartialContext(outer1_3.ADMINISTRATOR, { guildId: closure_0 }), items1);
  }
  obj2 = _require(566);
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj3.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
};
