// Module ID: 13250
// Function ID: 13251
// Name: useLoadGuildPowerups
// Dependencies: [19, 6771, 13251, 13257, 2]
// Exports: default

// Module 13250 (useLoadGuildPowerups)
import GameServerActionCreators from "GameServerActionCreators" /* 13251 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 13257 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useLoadGuildPowerups.tsx");

export default function useLoadGuildPowerups(guildId) {
  let gameServerEnabled;
  _require = guildId;
  let obj = require("GameServerExperiment");
  gameServerEnabled = obj.useGameServerEnabled(guildId, "useLoadGuildPowerups");
  const items = [guildId, gameServerEnabled];
  const effect = react.useEffect(() => {
    const tmp = gameServerEnabled;
    if (tmp) {
      const obj = GameServerActionCreators;
      const gameServerCatalog = obj.fetchGameServerCatalog(guildId);
    }
  }, items);
  const items1 = [guildId];
  const effect1 = react.useEffect(() => {
    const obj = GuildPowerupsActionCreators;
    const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(guildId);
    const obj2 = GuildPowerupsActionCreators;
    const guildBoostEntitlements = obj2.fetchGuildBoostEntitlements(guildId);
  }, items1);
};
