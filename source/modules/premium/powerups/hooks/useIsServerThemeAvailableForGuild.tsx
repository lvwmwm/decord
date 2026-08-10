// Module ID: 13260
// Function ID: 13261
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4233, 4185, 2]
// Exports: default

// Module 13260 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = require(4233) /* experiment */.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = require(4233) /* experiment */;
  const tmp = require;
  const tmp3 = guildId;
  return null != require(4185) /* resolveSavedActiveGuildTheme */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
