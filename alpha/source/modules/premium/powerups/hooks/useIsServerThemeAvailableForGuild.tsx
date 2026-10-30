// Module ID: 15694
// Function ID: 15695
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [5230, 5220, 2]
// Exports: default

// Module 15694 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 5220 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 5230 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const useServerThemeEnabled = ServerThemeExperiment.useServerThemeEnabled;
  ServerThemeExperiment;
  const serverThemeEnabled = useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const tmpResult = GuildThemeResolver;
  return null != tmpResult.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
