// Module ID: 10612
// Function ID: 10613
// Name: useLoadGuildPowerups
// Dependencies: [19, 5479, 10613, 10619, 2]
// Exports: default

// Module 10612 (useLoadGuildPowerups)
import GameServerActionCreators from "GameServerActionCreators" /* 10613 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 10619 */;
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
