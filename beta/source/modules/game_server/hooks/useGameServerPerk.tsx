// Module ID: 14421
// Function ID: 14422
// Name: useGameServerPerk
// Dependencies: [19, 8573, 5379, 5378, 5396, 504, 14422, 1113, 3120, 14423, 2]
// Exports: default

// Module 14421 (useGameServerPerk)
import intl3 from "intl" /* 1113 */;
import _modDef3120 from "module_3120" /* 3120 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5378 */;
import GameServerConstants from "GameServerConstants" /* 5379 */;
import _modDef14423 from "module_14423" /* 14423 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 8573 */;
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
        const obj = { skuId, title: intl.string(_modDef3120["B3OfL/"]), description: intl2.format(_modDef3120["+UqyGU"], obj2), cost: tmp2, dependencies: [], type: GuildPowerupType.PERK, animatedImageUrl: _modDef14423, staticImageUrl: _modDef14423 };
        intl = intl3.intl;
        intl2 = intl3.intl;
        tmp = obj;
        obj2 = { gameName, gameName2 };
      }
    }
    return tmp;
  }, items1);
};
