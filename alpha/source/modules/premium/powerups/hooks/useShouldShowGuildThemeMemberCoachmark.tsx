// Module ID: 17174
// Function ID: 17175
// Name: useShouldShowGuildThemeMemberCoachmark
// Dependencies: [5064, 558, 13095, 5069, 5068, 17175, 8247, 2]

// Module 17174 (useShouldShowGuildThemeMemberCoachmark)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5064 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 5068 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 5069 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 8247 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 13095 */;
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled" /* 17175 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildPowerupsConstants.GUILD_THEME_POWERUP_BOOST_PRICE;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowGuildThemeMemberCoachmark(arg0) {
  const tmp = useHasAllocateBoostPermissionDefault(arg0);
  const obj = ServerThemeExperiment;
  let serverThemeEnabled = obj.useServerThemeEnabled(arg0, "useShouldShowGuildThemeMemberCoachmark");
  const obj2 = ServerThemeUserExperiment;
  const serverThemeUserEnabled = obj2.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj3 = ServerThemeExperiment;
  const serverThemeRollbackEnabled = obj3.useServerThemeRollbackEnabled(arg0, "useShouldShowGuildThemeMemberCoachmark");
  const tmp5 = useIsGuildThemePerkEnabledDefault(arg0);
  let tmp8 = !useGuildPowerupsBoostCountDefault(arg0).isLoading;
  useGuildPowerupsBoostCountDefault(arg0);
  if (tmp8) {
    if (serverThemeEnabled) {
      serverThemeEnabled = serverThemeUserEnabled;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = !serverThemeRollbackEnabled;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = tmp7 < closure_3;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = !tmp5;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = false === tmp;
    }
    tmp8 = serverThemeEnabled;
  }
  return tmp8;
}) : (function useShouldShowGuildThemeMemberCoachmark(arg0) {
  const tmp = useHasAllocateBoostPermissionDefault(arg0);
  const obj = ServerThemeExperiment;
  let serverThemeEnabled = obj.useServerThemeEnabled(arg0, "useShouldShowGuildThemeMemberCoachmark");
  const obj2 = ServerThemeUserExperiment;
  const serverThemeUserEnabled = obj2.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj3 = ServerThemeExperiment;
  const serverThemeRollbackEnabled = obj3.useServerThemeRollbackEnabled(arg0, "useShouldShowGuildThemeMemberCoachmark");
  const tmp5 = useIsGuildThemePerkEnabledDefault(arg0);
  let tmp8 = !useGuildPowerupsBoostCountDefault(arg0).isLoading;
  useGuildPowerupsBoostCountDefault(arg0);
  if (tmp8) {
    if (serverThemeEnabled) {
      serverThemeEnabled = serverThemeUserEnabled;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = !serverThemeRollbackEnabled;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = tmp7 < closure_3;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = !tmp5;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = false === tmp;
    }
    tmp8 = serverThemeEnabled;
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default tmp2;
