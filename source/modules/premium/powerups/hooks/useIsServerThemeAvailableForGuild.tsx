// Module ID: 13371
// Function ID: 13372
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4304, 4256, 2]
// Exports: default

// Module 13371 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = require(4304) /* experiment */.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = require(4304) /* experiment */;
  const tmp = require;
  const tmp3 = guildId;
  return null != require(4256) /* resolveSavedActiveGuildTheme */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
