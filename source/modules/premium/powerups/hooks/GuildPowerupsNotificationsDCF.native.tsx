// Module ID: 11865
// Function ID: 11866
// Name: usePerksCoachmarkDCF
// Dependencies: [6024, 1377, 11859, 11866, 2]
// Exports: useBoostToUnlockCoachmarkDCF, useExpiringPowerupCoachmarkDCF, useGameServerPricingCoachmarkDCF, useGuildPowerupNotificationDCF, useNewGamesCoachmarkDC, useNewPerkAvailableCoachmarkDCF, usePerksCoachmarkDCF

// Module 11865 (usePerksCoachmarkDCF)
const result = require("GUILD_POWERUP_NOTIFICATION_COOLDOWN").fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export const usePerksCoachmarkDCF = function usePerksCoachmarkDCF(arg0) {
  if (arg0) {
    const items = [require(1377) /* DismissibleContent */.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  return require(6024) /* useSelectedDismissibleContent */.useSelectedDismissibleContent(items1);
};
export const useNewPerkAvailableCoachmarkDCF = function useNewPerkAvailableCoachmarkDCF(arg0, latestVersion) {
  let prop = null;
  if (arg0) {
    prop = null;
    if (latestVersion > 0) {
      prop = require(1377) /* DismissibleContent */.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
    }
  }
  return require(6024) /* useSelectedDismissibleContent */.useSelectedVersionedDismissibleContent(prop, latestVersion);
};
export const useGuildPowerupNotificationDCF = function useGuildPowerupNotificationDCF(arg0) {
  let obj = require(6024) /* useSelectedDismissibleContent */;
  let prop = null;
  if (arg0) {
    prop = tmp(1377).DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  obj = { cooldownDurationMs: tmp(11859).GUILD_POWERUP_NOTIFICATION_COOLDOWN };
  return obj.useSelectedTimeRecurringDismissibleContent(prop, obj);
};
export function useNewGamesCoachmarkDC(arg0) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export function useGameServerPricingCoachmarkDCF(arg0) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
export const useBoostToUnlockCoachmarkDCF = function useBoostToUnlockCoachmarkDCF(arg0, id, GUILD_HEADER_TOOLTIPS) {
  let obj = importDefault(11866);
  let prop = null;
  if (arg0) {
    prop = null;
    if (obj.useConfig({ location: "useBoostToUnlockCoachmarkDCF" }).showCoachmark) {
      prop = tmp2(1377).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  obj = { cooldownDurationMs: tmp2(11859).BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: tmp2(11859).BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR };
  return require(6024) /* useSelectedDismissibleContent */.useSelectedTimeRecurringGuildDismissibleContent(prop, id, obj, GUILD_HEADER_TOOLTIPS);
};
export function useExpiringPowerupCoachmarkDCF(arg0, c0) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
