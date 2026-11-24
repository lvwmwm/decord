// Module ID: 13391
// Function ID: 13392
// Name: useGameServerPerk
// Dependencies: [19, 10229, 8157, 8156, 7499, 504, 13392, 1112, 3314, 13393, 2]
// Exports: default

// Module 13391 (useGameServerPerk)
import intl3 from "intl" /* 1112 */;
import _modDef3314 from "module_3314" /* 3314 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 8156 */;
import GameServerConstants from "GameServerConstants" /* 8157 */;
import _modDef13393 from "module_13393" /* 13393 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 10229 */;
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
        const obj = { skuId, title: intl.string(_modDef3314["B3OfL/"]), description: intl2.format(_modDef3314["+UqyGU"], obj2), cost: tmp2, dependencies: [], type: GuildPowerupType.PERK, animatedImageUrl: _modDef13393, staticImageUrl: _modDef13393 };
        intl = intl3.intl;
        intl2 = intl3.intl;
        tmp = obj;
        obj2 = { gameName, gameName2 };
      }
    }
    return tmp;
  }, items1);
};
