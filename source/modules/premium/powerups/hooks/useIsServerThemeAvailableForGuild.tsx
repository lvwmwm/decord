// Module ID: 13132
// Function ID: 13133
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4185, 4137, 2]
// Exports: default

// Module 13132 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = require(4185) /* experiment */.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = require(4185) /* experiment */;
  const tmp = require;
  const tmp3 = guildId;
  return null != require(4137) /* resolveSavedActiveGuildTheme */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
