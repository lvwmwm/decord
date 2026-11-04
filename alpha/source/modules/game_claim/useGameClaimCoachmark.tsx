// Module ID: 18581
// Function ID: 18582
// Name: useGameClaimCoachmark
// Dependencies: [5073, 1072, 18582, 504, 18504, 2]
// Exports: useCanShowGameClaimCoachmark

// Module 18581 (useGameClaimCoachmark)
import Constants from "Constants" /* 1072 */;
import PermissionStore from "PermissionStore" /* 5073 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export function useCanShowGameClaimCoachmark(id) {
  let guildId;
  _require = id;
  let obj = require("GameClaimCoachmarkExperiment");
  let gameClaimCoachmarkEnabled = obj.useGameClaimCoachmarkEnabled(id, "useCanShowGameClaimCoachmark");
  const items = [PermissionStore];
  const items1 = [id];
  const obj2 = require("get initialized");
  const tmp = _require;
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(items, () => {
      const obj = { guildId };
      return PermissionStore.canWithPartialContext(Permissions.ADMINISTRATOR, obj);
    }, items1);
  }
  const tmpResult = tmp(18504);
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
}
