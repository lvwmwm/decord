// Module ID: 13566
// Function ID: 13567
// Name: useGameServerPerk
// Dependencies: [19, 10370, 8298, 8297, 7625, 504, 13567, 1112, 3367, 13568, 2]
// Exports: default

// Module 13566 (useGameServerPerk)
import intl3 from "intl" /* 1112 */;
import _modDef3367 from "module_3367" /* 3367 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 8297 */;
import GameServerConstants from "GameServerConstants" /* 8298 */;
import _modDef13568 from "module_13568" /* 13568 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 10370 */;
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
        const obj = { skuId, title: intl.string(_modDef3367["B3OfL/"]), description: intl2.format(_modDef3367["+UqyGU"], obj2), cost: tmp2, dependencies: [], type: GuildPowerupType.PERK, animatedImageUrl: _modDef13568, staticImageUrl: _modDef13568 };
        intl = intl3.intl;
        intl2 = intl3.intl;
        tmp = obj;
        obj2 = { gameName, gameName2 };
      }
    }
    return tmp;
  }, items1);
};
