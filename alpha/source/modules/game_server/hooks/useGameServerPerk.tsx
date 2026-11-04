// Module ID: 14368
// Function ID: 14369
// Name: useGameServerPerk
// Dependencies: [19, 8610, 5355, 5354, 5372, 504, 14369, 1113, 3123, 14370, 2]
// Exports: default

// Module 14368 (useGameServerPerk)
import intl3 from "intl" /* 1113 */;
import _modDef3123 from "module_3123" /* 3123 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5354 */;
import GameServerConstants from "GameServerConstants" /* 5355 */;
import _modDef14370 from "module_14370" /* 14370 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 8610 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_5 = GameServerConstants.GAME_SERVER_POWERUP_SKU_ID;
const GuildPowerupType = GuildPowerupsConstants.GuildPowerupType;
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerPerk.tsx");

export default function useGameServerPerk(guildId) {
  let gameName2;
  let skuId;
  let stateFromStores;
  _require = guildId;
  let obj = require("GameServerExperiment");
  const gameServerEnabled = obj.useGameServerEnabled(guildId, "useGameServerPerk");
  let obj2 = require("get initialized");
  const items = [gameName2];
  stateFromStores = obj2.useStateFromStores(items, () => GameServerStore.getLowestGameCostForGuild(guildId));
  const tmp3 = gameServerEnabled(stateFromStores[6])();
  const gameName = tmp3.gameName;
  gameName2 = tmp3.gameName2;
  const items1 = [gameServerEnabled, stateFromStores, gameName, gameName2];
  return gameName.useMemo(() => {
    let intl;
    let intl2;
    let obj2;
    let tmp = null;
    if (gameServerEnabled) {
      tmp = null;
      if (null != stateFromStores) {
        const obj = { skuId, title: intl.string(_modDef3123["B3OfL/"]), description: intl2.format(_modDef3123["+UqyGU"], obj2), cost: tmp2, dependencies: [], type: GuildPowerupType.PERK, animatedImageUrl: _modDef14370, staticImageUrl: _modDef14370 };
        intl = intl3.intl;
        intl2 = intl3.intl;
        tmp = obj;
        obj2 = { gameName, gameName2 };
      }
    }
    return tmp;
  }, items1);
};
