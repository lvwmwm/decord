// Module ID: 13049
// Function ID: 13050
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4119, 4071, 2]
// Exports: default

// Module 13049 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = require(4119) /* experiment */.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = require(4119) /* experiment */;
  const tmp = require;
  const tmp3 = guildId;
  return null != require(4071) /* resolveSavedActiveGuildTheme */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
