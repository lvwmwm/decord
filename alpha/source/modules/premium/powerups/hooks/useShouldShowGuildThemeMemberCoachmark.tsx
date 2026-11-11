// Module ID: 18750
// Function ID: 18751
// Name: useShouldShowGuildThemeMemberCoachmark
// Dependencies: [5461, 10609, 5466, 5465, 18751, 9175, 2]
// Exports: default

// Module 18750 (useShouldShowGuildThemeMemberCoachmark)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5461 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 5465 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 5466 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 9175 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 10609 */;
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled" /* 18751 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildPowerupsConstants.GUILD_THEME_POWERUP_BOOST_PRICE;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = useHasAllocateBoostPermissionDefault(guildId);
  const obj = ServerThemeExperiment;
  let serverThemeEnabled = obj.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const obj2 = ServerThemeUserExperiment;
  const serverThemeUserEnabled = obj2.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj3 = ServerThemeExperiment;
  const serverThemeRollbackEnabled = obj3.useServerThemeRollbackEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const tmp5 = useIsGuildThemePerkEnabledDefault(guildId);
  let tmp8 = !useGuildPowerupsBoostCountDefault(guildId).isLoading;
  useGuildPowerupsBoostCountDefault(guildId);
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
};
