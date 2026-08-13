// Module ID: 13326
// Function ID: 13327
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4272, 4224, 2]
// Exports: default

// Module 13326 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = require(4272) /* experiment */.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = require(4272) /* experiment */;
  const tmp = require;
  const tmp3 = guildId;
  return null != require(4224) /* resolveSavedActiveGuildTheme */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
