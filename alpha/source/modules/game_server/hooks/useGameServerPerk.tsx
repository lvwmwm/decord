// Module ID: 10787
// Function ID: 10788
// Name: useGameServerPerk
// Dependencies: [19, 9242, 5525, 5524, 5542, 504, 10788, 1113, 3189, 10789, 2]
// Exports: default

// Module 10787 (useGameServerPerk)
import intl3 from "intl" /* 1113 */;
import _modDef3189 from "module_3189" /* 3189 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5524 */;
import GameServerConstants from "GameServerConstants" /* 5525 */;
import _modDef10789 from "module_10789" /* 10789 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 9242 */;
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
        const obj = { skuId, title: intl.string(_modDef3189["B3OfL/"]), description: intl2.format(_modDef3189["+UqyGU"], obj2), cost: tmp2, dependencies: [], type: GuildPowerupType.PERK, animatedImageUrl: _modDef10789, staticImageUrl: _modDef10789 };
        intl = intl3.intl;
        intl2 = intl3.intl;
        tmp = obj;
        obj2 = { gameName, gameName2 };
      }
    }
    return tmp;
  }, items1);
};
