// Module ID: 12804
// Function ID: 98119
// Name: useIsServerThemeAvailableForGuild
// Dependencies: []
// Exports: default

// Module 12804 (useIsServerThemeAvailableForGuild)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  let tmp;
  if (null != guildId) {
    tmp = guildId;
  }
  const serverThemeEnabled = require(dependencyMap[0]).useServerThemeEnabled(tmp, GuildThemeNuxTrigger);
  const obj = require(dependencyMap[0]);
  return null != require(dependencyMap[1]).useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
