// Module ID: 12970
// Function ID: 100598
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4060, 4012, 2]
// Exports: default

// Module 12970 (useIsServerThemeAvailableForGuild)
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  let tmp;
  if (null != guildId) {
    tmp = guildId;
  }
  const serverThemeEnabled = require(4060) /* items */.useServerThemeEnabled(tmp, GuildThemeNuxTrigger);
  const obj = require(4060) /* items */;
  return null != require(4012) /* resolveRenderableGuildThemeSettings */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
