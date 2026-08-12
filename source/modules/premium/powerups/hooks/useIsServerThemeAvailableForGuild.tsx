// Module ID: 13325
// Function ID: 13326
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4274, 4226, 2]
// Exports: default

// Module 13325 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = require(4274) /* experiment */.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = require(4274) /* experiment */;
  const tmp = require;
  const tmp3 = guildId;
  return null != require(4226) /* resolveSavedActiveGuildTheme */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
