// Module ID: 11636
// Function ID: 90438
// Name: useGameServerPerk
// Dependencies: [31, 4038, 4018, 4019, 4041, 566, 11637, 1212, 2620, 11638, 2]
// Exports: default

// Module 11636 (useGameServerPerk)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildPowerupType } from "BoostedGuildTiers";
import { GAME_SERVER_POWERUP_SKU_ID as closure_6 } from "NewGamesCoachmarkContent";

const require = arg1;
const result = require("BoostedGuildTiers").fileFinishedImporting("modules/premium/game_server/hooks/useGameServerPerk.tsx");

export default function useGameServerPerk(guildId) {
  const _require = guildId;
  const gameServerEnabled = _require(stateFromStores[4]).useGameServerEnabled(guildId, "useGameServerPerk");
  let obj = _require(stateFromStores[4]);
  const items = [gameName2];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => gameName2.getLowestGameCostForGuild(closure_0));
  const tmp3 = gameServerEnabled(stateFromStores[6])();
  const gameName = tmp3.gameName;
  gameName2 = tmp3.gameName2;
  const items1 = [gameServerEnabled, stateFromStores, gameName, gameName2];
  return gameName.useMemo(() => {
    let tmp = null;
    if (gameServerEnabled) {
      tmp = null;
      if (null != stateFromStores) {
        let obj = { skuId: outer1_6 };
        const intl = guildId(stateFromStores[7]).intl;
        obj.title = intl.string(gameServerEnabled(stateFromStores[8])["B3OfL/"]);
        const intl2 = guildId(stateFromStores[7]).intl;
        obj = { gameName, gameName2 };
        obj.description = intl2.format(gameServerEnabled(stateFromStores[8])["+UqyGU"], obj);
        obj.cost = stateFromStores;
        obj.dependencies = [];
        obj.type = outer1_5.PERK;
        obj.animatedImageUrl = gameServerEnabled(stateFromStores[9]);
        obj.staticImageUrl = gameServerEnabled(stateFromStores[9]);
        tmp = obj;
      }
    }
    return tmp;
  }, items1);
};
