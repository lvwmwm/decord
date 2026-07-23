// Module ID: 12504
// Function ID: 96871
// Name: getGiftingBadgeProgressPercent
// Dependencies: [8268, 1849, 8776, 12505, 566, 3946, 1334, 2]
// Exports: getGiftingBadgeProgressPercent, getIsGiftingBadgesDesktopEnabled, useIsEligibleToShowGiftingBadgeCoachmark, useIsGiftingBadgesDesktopEnabled

// Module 12504 (getGiftingBadgeProgressPercent)
import { getSingleRequirementThreshold as closure_2 } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let result = require("apexExperiment").fileFinishedImporting("modules/premium/gifting/GiftingBadgesUtils.tsx");

export const getGiftingBadgeProgressPercent = function getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier) {
  const tmp = callback(currentTier);
  const tmp2 = callback(nextTier);
  if (null != nextTier) {
    let num6 = 100;
    if (tmp2 > 0) {
      num6 = badgeProgress / tmp2 * 100;
    }
    let num3 = num6;
  } else {
    num3 = 100;
    if (tmp > 0) {
      const _Math = Math;
      num3 = Math.min(tmp, badgeProgress) / tmp * 100;
    }
  }
  return Math.min(Math.max(num3, 0), 100);
};
export const useIsGiftingBadgesDesktopEnabled = function useIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = require(8776) /* apexExperiment */.GiftingBadgeExperiment;
  let obj = { location };
  const enabled = GiftingBadgeExperiment.useConfig(obj).enabled;
  const GiftingBadgeDesktopExperiment = require(12505) /* apexExperiment */.GiftingBadgeDesktopExperiment;
  obj = {};
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  obj.location = "" + location + str;
  return GiftingBadgeDesktopExperiment.useConfig(obj).enabled && enabled;
};
export const getIsGiftingBadgesDesktopEnabled = function getIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = require(8776) /* apexExperiment */.GiftingBadgeExperiment;
  let obj = { location };
  const tmp = !GiftingBadgeExperiment.getConfig(obj).enabled;
  let enabled = !tmp;
  if (!tmp) {
    const GiftingBadgeDesktopExperiment = require(12505) /* apexExperiment */.GiftingBadgeDesktopExperiment;
    obj = { location };
    enabled = GiftingBadgeDesktopExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const useIsEligibleToShowGiftingBadgeCoachmark = function useIsEligibleToShowGiftingBadgeCoachmark(location) {
  const _location = location.location;
  const GiftingBadgeExperiment = require(8776) /* apexExperiment */.GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: _location }).enabled;
  const GiftingBadgeDesktopExperiment = require(12505) /* apexExperiment */.GiftingBadgeDesktopExperiment;
  const obj = {};
  let str = "-DISABLED";
  if ("web" === location.platform) {
    str = "";
  }
  obj.location = "" + _location + str;
  let enabled2 = GiftingBadgeDesktopExperiment.useConfig(obj).enabled;
  let tmp2 = enabled;
  if ("web" === location.platform) {
    if (enabled2) {
      enabled2 = enabled;
    }
    tmp2 = enabled2;
  }
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_3.getCurrentUser();
    let hasHadPremiumResult;
    if (null != currentUser) {
      hasHadPremiumResult = currentUser.hasHadPremium();
    }
    return null != hasHadPremiumResult && hasHadPremiumResult;
  });
  const obj2 = require(566) /* initialize */;
  const result = require(3946) /* UNSAFE_isDismissibleContentDismissed */.useIsDismissibleContentDismissed_UNSAFE(require(1334) /* DismissibleContent */.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK);
  if (tmp2) {
    tmp2 = stateFromStores;
  }
  if (tmp2) {
    tmp2 = !result;
  }
  return tmp2;
};
