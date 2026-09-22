// Module ID: 14187
// Function ID: 14188
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [4685, 4641, 2]
// Exports: default

// Module 14187 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 4641 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4685 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  return null != GuildThemeResolver.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
