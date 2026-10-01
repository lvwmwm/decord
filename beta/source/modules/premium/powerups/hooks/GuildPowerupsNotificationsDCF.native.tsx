// Module ID: 11997
// Function ID: 11998
// Name: GuildPowerupsNotificationsDCF
// Dependencies: [6806, 2029, 11991, 11998, 2]
// Exports: useBoostToUnlockCoachmarkDCF, useExpiringPowerupCoachmarkDCF, useGameServerPricingCoachmarkDCF, useGuildPowerupNotificationDCF, useNewGamesCoachmarkDC, useNewPerkAvailableCoachmarkDCF, usePerksCoachmarkDCF

// Module 11997 (GuildPowerupsNotificationsDCF)
import useSelectedDismissibleContent2 from "useSelectedDismissibleContent" /* 6806 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 11991 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 11998 */;
import size from "module_2" /* 2 */;

let tmp;
const dismissible_content = tmp(2029);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export const usePerksCoachmarkDCF = function usePerksCoachmarkDCF(arg0) {
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
};
export const useNewPerkAvailableCoachmarkDCF = function useNewPerkAvailableCoachmarkDCF(arg0, latestVersion) {
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
};
export const useGuildPowerupNotificationDCF = function useGuildPowerupNotificationDCF(arg0) {
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = useSelectedDismissibleContent2.useSelectedTimeRecurringDismissibleContent;
  useSelectedDismissibleContent2;
  if (arg0) {
    prop = tmp(2029).DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  const obj = { cooldownDurationMs: GuildPowerupsNotification.GUILD_POWERUP_NOTIFICATION_COOLDOWN };
  return useSelectedTimeRecurringDismissibleContent(prop, obj);
};
export function useNewGamesCoachmarkDC() {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export function useGameServerPricingCoachmarkDCF() {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export const useBoostToUnlockCoachmarkDCF = function useBoostToUnlockCoachmarkDCF(arg0, id, GUILD_HEADER_TOOLTIPS) {
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
      prop = tmp3(2029).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  const obj = { cooldownDurationMs: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR };
  return useSelectedTimeRecurringGuildDismissibleContent(prop, id, obj, GUILD_HEADER_TOOLTIPS);
};
export function useExpiringPowerupCoachmarkDCF() {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
