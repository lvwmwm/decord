// Module ID: 13069
// Function ID: 13070
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4123, 4075, 2]
// Exports: default

// Module 13069 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = require(4123) /* experiment */.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = require(4123) /* experiment */;
  const tmp = require;
  const tmp3 = guildId;
  return null != require(4075) /* resolveSavedActiveGuildTheme */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
