// Module ID: 18469
// Function ID: 18470
// Name: useShouldShowGuildThemeMemberCoachmark
// Dependencies: [5354, 14305, 5359, 5358, 18470, 8609, 2]
// Exports: default

// Module 18469 (useShouldShowGuildThemeMemberCoachmark)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5354 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 5358 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 5359 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 8609 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 14305 */;
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled" /* 18470 */;
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
