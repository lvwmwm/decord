// Module ID: 19029
// Function ID: 19030
// Name: useGameClaimCoachmark
// Dependencies: [5242, 1072, 19030, 504, 18952, 2]
// Exports: useCanShowGameClaimCoachmark

// Module 19029 (useGameClaimCoachmark)
import Constants from "Constants" /* 1072 */;
import PermissionStore from "PermissionStore" /* 5242 */;
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
  const tmpResult = tmp(18952);
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
}
