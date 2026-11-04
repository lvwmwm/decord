// Module ID: 15982
// Function ID: 15983
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [5359, 5349, 2]
// Exports: default

// Module 15982 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 5349 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 5359 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const useServerThemeEnabled = ServerThemeExperiment.useServerThemeEnabled;
  ServerThemeExperiment;
  const serverThemeEnabled = useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const tmpResult = GuildThemeResolver;
  return null != tmpResult.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
