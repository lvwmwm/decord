// Module ID: 14062
// Function ID: 14063
// Name: GuildPowerupsNotificationsDCF
// Dependencies: [7569, 4847, 14056, 14063, 2]
// Exports: useBoostToUnlockCoachmarkDCF, useExpiringPowerupCoachmarkDCF, useGuildPowerupNotificationDCF, useNewGamesCoachmarkDC, useNewPerkAvailableCoachmarkDCF, usePerksCoachmarkDCF

// Module 14062 (GuildPowerupsNotificationsDCF)
import useSelectedDismissibleContent2 from "useSelectedDismissibleContent" /* 7569 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 14056 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 14063 */;
import size from "module_2" /* 2 */;

let tmp;
const dismissible_content = tmp(4847);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export function usePerksCoachmarkDCF(arg0) {
  let items1;
  const useSelectedDismissibleContent = useSelectedDismissibleContent2.useSelectedDismissibleContent;
  useSelectedDismissibleContent2;
  if (arg0) {
    const items = [dismissible_content.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
    items1 = items;
  } else {
    items1 = [];
  }
  return useSelectedDismissibleContent(items1);
}
export function useNewPerkAvailableCoachmarkDCF(arg0, latestVersion) {
  let prop = null;
  const useSelectedVersionedDismissibleContent = useSelectedDismissibleContent2.useSelectedVersionedDismissibleContent;
  useSelectedDismissibleContent2;
  if (arg0) {
    prop = null;
    if (latestVersion > 0) {
      prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
    }
  }
  return useSelectedVersionedDismissibleContent(prop, latestVersion);
}
export function useGuildPowerupNotificationDCF(arg0) {
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = useSelectedDismissibleContent2.useSelectedTimeRecurringDismissibleContent;
  useSelectedDismissibleContent2;
  if (arg0) {
    prop = tmp(4847).DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  const obj = { cooldownDurationMs: GuildPowerupsNotification.GUILD_POWERUP_NOTIFICATION_COOLDOWN };
  return useSelectedTimeRecurringDismissibleContent(prop, obj);
}
export function useNewGamesCoachmarkDC() {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export function useBoostToUnlockCoachmarkDCF(arg0, id, GUILD_HEADER_TOOLTIPS) {
  let str = "useBoostToUnlockCoachmarkDCF-ineligible";
  const useConfig = BoostToUnlockMobileCoachmarkExperimentDefault.useConfig;
  BoostToUnlockMobileCoachmarkExperimentDefault;
  if (arg0) {
    str = "useBoostToUnlockCoachmarkDCF-eligible";
  }
  const showCoachmark = useConfig({ location: str }).showCoachmark;
  let prop = null;
  const useSelectedTimeRecurringGuildDismissibleContent = useSelectedDismissibleContent2.useSelectedTimeRecurringGuildDismissibleContent;
  useSelectedDismissibleContent2;
  if (arg0) {
    prop = null;
    if (showCoachmark) {
      prop = tmp3(4847).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  const obj = { cooldownDurationMs: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR };
  return useSelectedTimeRecurringGuildDismissibleContent(prop, id, obj, GUILD_HEADER_TOOLTIPS);
}
export function useExpiringPowerupCoachmarkDCF() {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
