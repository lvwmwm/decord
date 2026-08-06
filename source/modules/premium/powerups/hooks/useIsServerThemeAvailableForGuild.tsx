// Module ID: 13174
// Function ID: 13175
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4215, 4167, 2]
// Exports: default

// Module 13174 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = require(4215) /* experiment */.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = require(4215) /* experiment */;
  const tmp = require;
  const tmp3 = guildId;
  return null != require(4167) /* resolveSavedActiveGuildTheme */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
