// Module ID: 14315
// Function ID: 14316
// Name: GuildPowerupsNotificationsDCF
// Dependencies: [7641, 4973, 14309, 14316, 14318, 14320, 2]
// Exports: useBoostToUnlockCoachmarkDCF, useExpiringPowerupCoachmarkDCF, useGuildPowerupNotificationDCF, useNewGamesCoachmarkDC, useNewPerkAvailableCoachmarkDCF, usePerksCoachmarkDCF

// Module 14315 (GuildPowerupsNotificationsDCF)
import useSelectedDismissibleContent2 from "useSelectedDismissibleContent" /* 7641 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 14309 */;
import useHasGuildAffinityForBoostUpsellDefault from "useHasGuildAffinityForBoostUpsell" /* 14316 */;
import useCanBoostGuildFromMobileDefault from "useCanBoostGuildFromMobile" /* 14318 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 14320 */;
import size from "module_2" /* 2 */;

let tmp;
const dismissible_content = tmp(4973);
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
    prop = tmp(4973).DismissibleContent.GUILD_POWERUP_NOTIFICATION;
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
export function useBoostToUnlockCoachmarkDCF(arg0, id, arg2, GUILD_HEADER_TOOLTIPS) {
  let tmp = arg0;
  const tmp4 = useHasGuildAffinityForBoostUpsellDefault(id);
  const tmp5 = useCanBoostGuildFromMobileDefault(arg2);
  if (arg0) {
    tmp = tmp4;
  }
  if (tmp) {
    tmp = tmp5;
  }
  let str = "useBoostToUnlockCoachmarkDCF-ineligible";
  const useConfig = tmp2(14320).useConfig;
  BoostToUnlockMobileCoachmarkExperimentDefault;
  if (tmp) {
    str = "useBoostToUnlockCoachmarkDCF-eligible";
  }
  const showCoachmark = useConfig({ location: str }).showCoachmark;
  let prop = null;
  const useSelectedTimeRecurringGuildDismissibleContent = useSelectedDismissibleContent2.useSelectedTimeRecurringGuildDismissibleContent;
  useSelectedDismissibleContent2;
  if (tmp) {
    prop = null;
    if (showCoachmark) {
      prop = tmp7(4973).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
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
