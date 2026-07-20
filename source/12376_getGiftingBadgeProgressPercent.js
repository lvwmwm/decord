// Module ID: 12376
// Function ID: 94642
// Name: getGiftingBadgeProgressPercent
// Dependencies: []
// Exports: getGiftingBadgeProgressPercent, getIsGiftingBadgesDesktopEnabled, useIsEligibleToShowGiftingBadgeCoachmark, useIsGiftingBadgesDesktopEnabled

// Module 12376 (getGiftingBadgeProgressPercent)
let closure_2 = require(dependencyMap[0]).getSingleRequirementThreshold;
let closure_3 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/premium/gifting/GiftingBadgesUtils.tsx");

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
  const GiftingBadgeExperiment = require(dependencyMap[2]).GiftingBadgeExperiment;
  let obj = { location };
  const enabled = GiftingBadgeExperiment.useConfig(obj).enabled;
  const GiftingBadgeDesktopExperiment = require(dependencyMap[3]).GiftingBadgeDesktopExperiment;
  obj = {};
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  obj.location = "" + location + str;
  return GiftingBadgeDesktopExperiment.useConfig(obj).enabled && enabled;
};
export const getIsGiftingBadgesDesktopEnabled = function getIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = require(dependencyMap[2]).GiftingBadgeExperiment;
  let obj = { location };
  const tmp = !GiftingBadgeExperiment.getConfig(obj).enabled;
  let enabled = !tmp;
  if (!tmp) {
    const GiftingBadgeDesktopExperiment = require(dependencyMap[3]).GiftingBadgeDesktopExperiment;
    obj = { location };
    enabled = GiftingBadgeDesktopExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const useIsEligibleToShowGiftingBadgeCoachmark = function useIsEligibleToShowGiftingBadgeCoachmark(location) {
  const _location = location.location;
  const GiftingBadgeExperiment = require(dependencyMap[2]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: _location }).enabled;
  const GiftingBadgeDesktopExperiment = require(dependencyMap[3]).GiftingBadgeDesktopExperiment;
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
  const items = [closure_3];
  const stateFromStores = require(dependencyMap[4]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let hasHadPremiumResult;
    if (null != currentUser) {
      hasHadPremiumResult = currentUser.hasHadPremium();
    }
    return null != hasHadPremiumResult && hasHadPremiumResult;
  });
  const obj2 = require(dependencyMap[4]);
  const result = require(dependencyMap[5]).useIsDismissibleContentDismissed_UNSAFE(require(dependencyMap[6]).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK);
  if (tmp2) {
    tmp2 = stateFromStores;
  }
  if (tmp2) {
    tmp2 = !result;
  }
  return tmp2;
};
