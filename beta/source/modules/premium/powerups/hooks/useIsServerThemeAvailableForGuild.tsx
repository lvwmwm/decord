// Module ID: 14220
// Function ID: 14221
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [558, 4719, 4675, 2]
// Exports: default

// Module 14220 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 4675 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4719 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default (arg0, arg1) => {
  const serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(arg0, arg1);
  return null != GuildThemeResolver.useEnabledGuildThemeForGuildId(arg0, arg1);
};
