// Module ID: 12981
// Function ID: 100725
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4061, 4013, 2]
// Exports: default

// Module 12981 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  let tmp;
  if (null != guildId) {
    tmp = guildId;
  }
  const serverThemeEnabled = require(4061) /* items */.useServerThemeEnabled(tmp, GuildThemeNuxTrigger);
  const obj = require(4061) /* items */;
  return null != require(4013) /* resolveRenderableGuildThemeSettings */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
