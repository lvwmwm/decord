// Module ID: 13026
// Function ID: 100903
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4095, 4047, 2]
// Exports: default

// Module 13026 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  let tmp;
  if (null != guildId) {
    tmp = guildId;
  }
  const serverThemeEnabled = require(4095) /* items */.useServerThemeEnabled(tmp, GuildThemeNuxTrigger);
  const obj = require(4095) /* items */;
  return null != require(4047) /* resolveRenderableGuildThemeSettings */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
