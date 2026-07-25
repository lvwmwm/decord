// Module ID: 11529
// Function ID: 89798
// Name: usePerksCoachmarkDCF
// Dependencies: [8379, 1334, 11523, 11530, 2]
// Exports: useBoostToUnlockCoachmarkDCF, useExpiringPowerupCoachmarkDCF, useGameServerPricingCoachmarkDCF, useGuildPowerupNotificationDCF, useNewGamesCoachmarkDC, useNewPerkAvailableCoachmarkDCF, usePerksCoachmarkDCF

// Module 11529 (usePerksCoachmarkDCF)
const result = require("GUILD_POWERUP_NOTIFICATION_COOLDOWN").fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export const usePerksCoachmarkDCF = function usePerksCoachmarkDCF(arg0) {
  if (arg0) {
    const items = [require(1334) /* DismissibleContent */.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  return require(8379) /* useSelectedDismissibleContent */.useSelectedDismissibleContent(items1);
};
export const useNewPerkAvailableCoachmarkDCF = function useNewPerkAvailableCoachmarkDCF(arg0, latestVersion) {
  let prop = null;
  if (arg0) {
    prop = null;
    if (latestVersion > 0) {
      prop = require(1334) /* DismissibleContent */.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
    }
  }
  return require(8379) /* useSelectedDismissibleContent */.useSelectedVersionedDismissibleContent(prop, latestVersion);
};
export const useGuildPowerupNotificationDCF = function useGuildPowerupNotificationDCF(arg0) {
  let obj = require(8379) /* useSelectedDismissibleContent */;
  let prop = null;
  if (arg0) {
    prop = require(1334) /* DismissibleContent */.DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  obj = { cooldownDurationMs: require(11523) /* GUILD_POWERUP_NOTIFICATION_COOLDOWN */.GUILD_POWERUP_NOTIFICATION_COOLDOWN };
  return obj.useSelectedTimeRecurringDismissibleContent(prop, obj);
};
export const useNewGamesCoachmarkDC = function useNewGamesCoachmarkDC(arg0) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
};
export const useGameServerPricingCoachmarkDCF = function useGameServerPricingCoachmarkDCF(arg0) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
};
export const useBoostToUnlockCoachmarkDCF = function useBoostToUnlockCoachmarkDCF(arg0, id, GUILD_HEADER_TOOLTIPS) {
  let obj = importDefault(11530);
  let prop = null;
  if (arg0) {
    prop = null;
    if (obj.useConfig({ location: "useBoostToUnlockCoachmarkDCF" }).showCoachmark) {
      prop = require(1334) /* DismissibleContent */.DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  obj = { cooldownDurationMs: require(11523) /* GUILD_POWERUP_NOTIFICATION_COOLDOWN */.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: require(11523) /* GUILD_POWERUP_NOTIFICATION_COOLDOWN */.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR };
  return require(8379) /* useSelectedDismissibleContent */.useSelectedTimeRecurringGuildDismissibleContent(prop, id, obj, GUILD_HEADER_TOOLTIPS);
};
export const useExpiringPowerupCoachmarkDCF = function useExpiringPowerupCoachmarkDCF(arg0, guildId) {
  const items = [
    null,
    () => {

    }
  ];
  return items;
};
