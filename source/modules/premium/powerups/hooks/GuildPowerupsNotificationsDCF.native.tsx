// Module ID: 11522
// Function ID: 89773
// Name: usePerksCoachmarkDCF
// Dependencies: []
// Exports: useBoostToUnlockCoachmarkDCF, useExpiringPowerupCoachmarkDCF, useGameServerPricingCoachmarkDCF, useGuildPowerupNotificationDCF, useNewGamesCoachmarkDC, useNewPerkAvailableCoachmarkDCF, usePerksCoachmarkDCF

// Module 11522 (usePerksCoachmarkDCF)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export const usePerksCoachmarkDCF = function usePerksCoachmarkDCF(arg0) {
  if (arg0) {
    const items = [require(dependencyMap[1]).DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  return require(dependencyMap[0]).useSelectedDismissibleContent(items1);
};
export const useNewPerkAvailableCoachmarkDCF = function useNewPerkAvailableCoachmarkDCF(arg0, latestVersion) {
  let prop = null;
  if (arg0) {
    prop = null;
    if (latestVersion > 0) {
      prop = require(dependencyMap[1]).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
    }
  }
  return require(dependencyMap[0]).useSelectedVersionedDismissibleContent(prop, latestVersion);
};
export const useGuildPowerupNotificationDCF = function useGuildPowerupNotificationDCF(arg0) {
  let obj = require(dependencyMap[0]);
  let prop = null;
  if (arg0) {
    prop = require(dependencyMap[1]).DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  obj = { cooldownDurationMs: require(dependencyMap[2]).GUILD_POWERUP_NOTIFICATION_COOLDOWN };
  return obj.useSelectedTimeRecurringDismissibleContent(prop, obj);
};
export const useNewGamesCoachmarkDC = function useNewGamesCoachmarkDC(arg0) {
  const items = [
    true,
    () => {

    }
  ];
  return items;
};
export const useGameServerPricingCoachmarkDCF = function useGameServerPricingCoachmarkDCF(arg0) {
  const items = [
    true,
    () => {

    }
  ];
  return items;
};
export const useBoostToUnlockCoachmarkDCF = function useBoostToUnlockCoachmarkDCF(arg0, id, GUILD_HEADER_TOOLTIPS) {
  let obj = importDefault(dependencyMap[3]);
  let prop = null;
  if (arg0) {
    prop = null;
    if (obj.useConfig({ location: "useBoostToUnlockCoachmarkDCF" }).showCoachmark) {
      prop = require(dependencyMap[1]).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  obj = { cooldownDurationMs: require(dependencyMap[2]).BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: require(dependencyMap[2]).BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR };
  return require(dependencyMap[0]).useSelectedTimeRecurringGuildDismissibleContent(prop, id, obj, GUILD_HEADER_TOOLTIPS);
};
export const useExpiringPowerupCoachmarkDCF = function useExpiringPowerupCoachmarkDCF(arg0, guildId) {
  const items = [
    true,
    () => {

    }
  ];
  return items;
};
