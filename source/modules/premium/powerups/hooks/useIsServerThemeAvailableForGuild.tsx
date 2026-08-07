// Module ID: 13188
// Function ID: 13189
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4232, 4184, 2]
// Exports: default

// Module 13188 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = require(4232) /* experiment */.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = require(4232) /* experiment */;
  const tmp = require;
  const tmp3 = guildId;
  return null != require(4184) /* resolveSavedActiveGuildTheme */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
