// Module ID: 10724
// Function ID: 10725
// Name: useGameServerPerk
// Dependencies: [19, 9176, 5462, 5461, 5479, 504, 10725, 1113, 3141, 10726, 2]
// Exports: default

// Module 10724 (useGameServerPerk)
import intl3 from "intl" /* 1113 */;
import _modDef3141 from "module_3141" /* 3141 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5461 */;
import GameServerConstants from "GameServerConstants" /* 5462 */;
import _modDef10726 from "module_10726" /* 10726 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 9176 */;
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
        const obj = { skuId, title: intl.string(_modDef3141["B3OfL/"]), description: intl2.format(_modDef3141["+UqyGU"], obj2), cost: tmp2, dependencies: [], type: GuildPowerupType.PERK, animatedImageUrl: _modDef10726, staticImageUrl: _modDef10726 };
        intl = intl3.intl;
        intl2 = intl3.intl;
        tmp = obj;
        obj2 = { gameName, gameName2 };
      }
    }
    return tmp;
  }, items1);
};
