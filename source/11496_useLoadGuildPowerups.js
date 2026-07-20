// Module ID: 11496
// Function ID: 89598
// Name: useLoadGuildPowerups
// Dependencies: []
// Exports: default

// Module 11496 (useLoadGuildPowerups)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/powerups/hooks/useLoadGuildPowerups.tsx");

export default function useLoadGuildPowerups(guildId) {
  const arg1 = guildId;
  const gameServerEnabled = arg1(dependencyMap[1]).useGameServerEnabled(guildId, "useLoadGuildPowerups");
  const dependencyMap = gameServerEnabled;
  const items = [guildId, gameServerEnabled];
  const effect = React.useEffect(() => {
    if (gameServerEnabled) {
      const gameServerCatalog = arg0(gameServerEnabled[2]).fetchGameServerCatalog(arg0);
      const obj = arg0(gameServerEnabled[2]);
    }
  }, items);
  const items1 = [guildId];
  const effect1 = React.useEffect(() => {
    const powerupCatalogForGuild = arg0(gameServerEnabled[3]).fetchPowerupCatalogForGuild(arg0);
    const obj = arg0(gameServerEnabled[3]);
    const guildBoostEntitlements = arg0(gameServerEnabled[3]).fetchGuildBoostEntitlements(arg0);
  }, items1);
};
