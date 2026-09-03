// Module ID: 13889
// Function ID: 13890
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4407, 4359, 2]
// Exports: default

// Module 13889 (useIsServerThemeAvailableForGuild)
import set from "set" /* 2 */;
import resolveSavedActiveGuildTheme from "resolveSavedActiveGuildTheme" /* 4359 */;
import experiment from "experiment" /* 4407 */;

const result = set.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = experiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = experiment;
  const tmp = require;
  const tmp3 = guildId;
  return null != resolveSavedActiveGuildTheme.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
