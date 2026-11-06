// Module ID: 18601
// Function ID: 18602
// Name: useGameClaimCoachmark
// Dependencies: [5102, 1072, 18602, 504, 18524, 2]
// Exports: useCanShowGameClaimCoachmark

// Module 18601 (useGameClaimCoachmark)
import Constants from "Constants" /* 1072 */;
import PermissionStore from "PermissionStore" /* 5102 */;
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
  const tmpResult = tmp(18524);
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
}
