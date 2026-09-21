// Module ID: 12664
// Function ID: 12665
// Name: GuildPowerupsNotificationsDCF
// Dependencies: [558, 568, 2031, 7632, 12658, 12665, 2]
// Exports: useExpiringPowerupCoachmarkDCF, useGameServerPricingCoachmarkDCF, useNewGamesCoachmarkDC, useNewPerkAvailableCoachmarkDCF

// Module 12664 (GuildPowerupsNotificationsDCF)
import c from "c" /* 568 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7632 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 12658 */;
import BoostToUnlockMobileCoachmarkExperimentDefault from "BoostToUnlockMobileCoachmarkExperiment" /* 12665 */;
import "ReactCompilerGating";
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    if (arg0) {
      const items = [tmp(2031).DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = arg0;
    cResult[1] = items1;
  } else {
    return tmp(7632).useSelectedDismissibleContent(cResult[1]);
  }
}) : ((arg0) => {
  if (arg0) {
    const items = [dismissible_content.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK];
    let items1 = items;
  } else {
    items1 = [];
  }
  return useSelectedDismissibleContent.useSelectedDismissibleContent(items1);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { cooldownDurationMs: tmp(12658).GUILD_POWERUP_NOTIFICATION_COOLDOWN };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let prop = null;
  if (arg0) {
    prop = tmp(2031).DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  return useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(prop, first);
}) : ((arg0) => {
  let prop = null;
  if (arg0) {
    prop = tmp(2031).DismissibleContent.GUILD_POWERUP_NOTIFICATION;
  }
  const obj = useSelectedDismissibleContent;
  return obj.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: GuildPowerupsNotification.GUILD_POWERUP_NOTIFICATION_COOLDOWN });
});
const fn = (arg0, arg1) => {
  let prop = null;
  if (arg0) {
    prop = null;
    if (arg1 > 0) {
      prop = dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
    }
  }
  return useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(prop, arg1);
};
const result1 = size.fileFinishedImporting("modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx");

export const usePerksCoachmarkDCF = tmp2;
export const useNewPerkAvailableCoachmarkDCF = fn;
export const useGuildPowerupNotificationDCF = tmp4;
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
export const useBoostToUnlockCoachmarkDCF = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  const cResult = c.c(3);
  let str = "useBoostToUnlockCoachmarkDCF-ineligible";
  if (arg0) {
    str = "useBoostToUnlockCoachmarkDCF-eligible";
  }
  if (cResult[0] !== str) {
    const obj2 = { location: str };
    cResult[0] = str;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { cooldownDurationMs: tmp(12658).BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: tmp(12658).BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR };
    cResult[2] = obj4;
    let tmp5 = obj4;
  } else {
    tmp5 = cResult[2];
  }
  const obj3 = BoostToUnlockMobileCoachmarkExperimentDefault;
  let prop = null;
  if (arg0) {
    prop = null;
    if (obj3.useConfig(tmp4).showCoachmark) {
      prop = tmp(2031).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  return useSelectedDismissibleContent.useSelectedTimeRecurringGuildDismissibleContent(prop, arg1, tmp5, arg2);
}) : ((arg0, arg1, arg2) => {
  let _location = "useBoostToUnlockCoachmarkDCF-ineligible";
  if (arg0) {
    _location = "useBoostToUnlockCoachmarkDCF-eligible";
  }
  const obj = BoostToUnlockMobileCoachmarkExperimentDefault;
  let prop = null;
  if (arg0) {
    prop = null;
    if (obj.useConfig({ location: _location }).showCoachmark) {
      prop = tmp2(2031).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
    }
  }
  const obj2 = useSelectedDismissibleContent;
  return obj2.useSelectedTimeRecurringGuildDismissibleContent(prop, arg1, { cooldownDurationMs: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN, numTimesToRecur: GuildPowerupsNotification.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR }, arg2);
});
export function useExpiringPowerupCoachmarkDCF() {
  const items = [
    null,
    () => {

    }
  ];
  return items;
}
