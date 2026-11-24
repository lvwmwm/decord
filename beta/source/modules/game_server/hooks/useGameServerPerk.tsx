// Module ID: 13466
// Function ID: 13467
// Name: useGameServerPerk
// Dependencies: [19, 8750, 8333, 8332, 6890, 504, 13467, 1112, 3312, 13468, 2]
// Exports: default

// Module 13466 (useGameServerPerk)
import intl3 from "intl" /* 1112 */;
import _modDef3312 from "module_3312" /* 3312 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 8332 */;
import GameServerConstants from "GameServerConstants" /* 8333 */;
import _modDef13468 from "module_13468" /* 13468 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 8750 */;
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
        const obj = { skuId, title: intl.string(_modDef3312["B3OfL/"]), description: intl2.format(_modDef3312["+UqyGU"], obj2), cost: tmp2, dependencies: [], type: GuildPowerupType.PERK, animatedImageUrl: _modDef13468, staticImageUrl: _modDef13468 };
        intl = intl3.intl;
        intl2 = intl3.intl;
        tmp = obj;
        obj2 = { gameName, gameName2 };
      }
    }
    return tmp;
  }, items1);
};
