// Module ID: 15107
// Function ID: 15108
// Name: useIsServerThemeAvailableForGuild
// Dependencies: [558, 5173, 5163, 2]
// Exports: default

// Module 15107 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 5163 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 5173 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(arg0, arg1) {
  const useServerThemeEnabled = ServerThemeExperiment.useServerThemeEnabled;
  ServerThemeExperiment;
  const serverThemeEnabled = useServerThemeEnabled(arg0, arg1);
  const tmpResult = GuildThemeResolver;
  return null != tmpResult.useEnabledGuildThemeForGuildId(arg0, arg1);
};
