// Module ID: 15137
// Function ID: 15138
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [13392, 5116, 2]
// Exports: default

// Module 15137 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 5116 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 13392 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const useServerThemeEnabled = ServerThemeExperiment.useServerThemeEnabled;
  ServerThemeExperiment;
  const serverThemeEnabled = useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const tmpResult = GuildThemeResolver;
  return null != tmpResult.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
