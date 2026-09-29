// Module ID: 16070
// Function ID: 16071
// Name: useGameClaimCoachmark
// Dependencies: [4469, 1074, 16071, 504, 15999, 2]
// Exports: useCanShowGameClaimCoachmark

// Module 16070 (useGameClaimCoachmark)
import PermissionStore from "PermissionStore" /* 4469 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export const useCanShowGameClaimCoachmark = function useCanShowGameClaimCoachmark(id) {
  _require = id;
  let gameClaimCoachmarkEnabled = require("GameClaimCoachmarkExperiment").useGameClaimCoachmarkEnabled(id, "useCanShowGameClaimCoachmark");
  const obj = require("GameClaimCoachmarkExperiment");
  const items = [PermissionStore];
  const items1 = [id];
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(items, () => PermissionStore.canWithPartialContext(Permissions.ADMINISTRATOR, { guildId }), items1);
  }
  obj2 = require("initialize");
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
};
