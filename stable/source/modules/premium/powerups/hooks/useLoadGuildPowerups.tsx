// Module ID: 12764
// Function ID: 12765
// Name: useLoadGuildPowerups
// Dependencies: [19, 4700, 12765, 12771, 2]
// Exports: default

// Module 12764 (useLoadGuildPowerups)
import GameServerActionCreators from "GameServerActionCreators" /* 12765 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12771 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useLoadGuildPowerups.tsx");

export default function useLoadGuildPowerups(guildId) {
  _require = guildId;
  gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(guildId, "useLoadGuildPowerups");
  const items = [guildId, gameServerEnabled];
  const effect = noop.useEffect(() => {
    if (gameServerEnabled) {
      const gameServerCatalog = GameServerActionCreators.fetchGameServerCatalog(closure_0);
    }
  }, items);
  const items1 = [guildId];
  const effect1 = noop.useEffect(() => {
    const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(closure_0);
    const guildBoostEntitlements = GuildPowerupsActionCreators.fetchGuildBoostEntitlements(closure_0);
  }, items1);
};
