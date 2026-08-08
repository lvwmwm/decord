// Module ID: 11841
// Function ID: 11842
// Name: useLoadGuildPowerups
// Dependencies: [19, 4214, 11842, 11848, 2]
// Exports: default

// Module 11841 (useLoadGuildPowerups)
import noop from "noop";

const require = arg1;
const result = require("fetchGameServerCatalog").fileFinishedImporting("modules/premium/powerups/hooks/useLoadGuildPowerups.tsx");

export default function useLoadGuildPowerups(guildId) {
  const _require = guildId;
  gameServerEnabled = _require(gameServerEnabled[1]).useGameServerEnabled(guildId, "useLoadGuildPowerups");
  const items = [guildId, gameServerEnabled];
  const effect = React.useEffect(() => {
    if (gameServerEnabled) {
      const gameServerCatalog = guildId(gameServerEnabled[2]).fetchGameServerCatalog(guildId);
      const obj = guildId(gameServerEnabled[2]);
    }
  }, items);
  const items1 = [guildId];
  const effect1 = React.useEffect(() => {
    const powerupCatalogForGuild = guildId(gameServerEnabled[3]).fetchPowerupCatalogForGuild(guildId);
    const obj = guildId(gameServerEnabled[3]);
    const guildBoostEntitlements = guildId(gameServerEnabled[3]).fetchGuildBoostEntitlements(guildId);
  }, items1);
};
