// Module ID: 15222
// Function ID: 15223
// Name: useCanShowGameClaimCoachmark
// Dependencies: [3817, 676, 15223, 589, 15156, 2]
// Exports: useCanShowGameClaimCoachmark

// Module 15222 (useCanShowGameClaimCoachmark)
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const require = arg1;
const result = require("experiment").fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export const useCanShowGameClaimCoachmark = function useCanShowGameClaimCoachmark(id) {
  const _require = id;
  let gameClaimCoachmarkEnabled = _require(15223).useGameClaimCoachmarkEnabled(id, "useCanShowGameClaimCoachmark");
  const obj = _require(15223);
  const tmp = _require;
  const items = [getUncachedChannelPermissions];
  const items1 = [id];
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(items, () => outer1_2.canWithPartialContext(outer1_3.ADMINISTRATOR, { guildId: closure_0 }), items1);
  }
  obj2 = _require(589);
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = tmpResult.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
};
