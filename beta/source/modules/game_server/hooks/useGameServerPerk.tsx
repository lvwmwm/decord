// Module ID: 12072
// Function ID: 12073
// Name: useGameServerPerk
// Dependencies: [19, 4744, 4725, 4724, 4747, 504, 12073, 1115, 2941, 12074, 2]
// Exports: default

// Module 12072 (useGameServerPerk)
import intl3 from "intl" /* 1115 */;
import _modDef2941 from "module_2941" /* 2941 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import GameServerConstants from "GameServerConstants" /* 4725 */;
import _modDef12074 from "module_12074" /* 12074 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 4744 */;
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
        const obj = { skuId, title: intl.string(_modDef2941["B3OfL/"]), description: intl2.format(_modDef2941["+UqyGU"], obj2), cost: tmp2, dependencies: [], type: GuildPowerupType.PERK, animatedImageUrl: _modDef12074, staticImageUrl: _modDef12074 };
        intl = intl3.intl;
        intl2 = intl3.intl;
        tmp = obj;
        obj2 = { gameName, gameName2 };
      }
    }
    return tmp;
  }, items1);
};
