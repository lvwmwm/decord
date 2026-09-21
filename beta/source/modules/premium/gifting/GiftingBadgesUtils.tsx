// Module ID: 11041
// Function ID: 11042
// Name: GiftingBadgesUtils
// Dependencies: [8466, 1376, 558, 568, 11037, 11042, 11043, 504, 4579, 2031, 2]
// Exports: getGiftingBadgeProgressPercent, getGiftingBadgeTierIconUrl, getIsGiftingBadgesDesktopEnabled

// Module 11041 (GiftingBadgesUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4579 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8466 */;
import GiftingBadgeExperiment2 from "GiftingBadgeExperiment" /* 11037 */;
import GiftingBadgeDesktopExperiment2 from "GiftingBadgeDesktopExperiment" /* 11042 */;
import GiftingBadgeComplexArtExperiment2 from "GiftingBadgeComplexArtExperiment" /* 11043 */;
import UserStore from "UserStore" /* 1376 */;
import "ReactCompilerGating";
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = BadgeDirectoryStore.getSingleRequirementThreshold;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(4);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const GiftingBadgeExperiment = tmp(11037).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig(tmp4).enabled;
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  const combined = "" + location + str;
  if (cResult[2] !== combined) {
    const obj3 = { location: combined };
    cResult[2] = combined;
    cResult[3] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[3];
  }
  const GiftingBadgeDesktopExperiment = tmp(11042).GiftingBadgeDesktopExperiment;
  return GiftingBadgeDesktopExperiment.useConfig(tmp6).enabled && enabled;
}) : ((location) => {
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location }).enabled;
  const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
  let str = "-DISABLED";
  if (enabled) {
    str = "";
  }
  const obj = { location };
  const obj2 = { location: "" + location + str };
  return GiftingBadgeDesktopExperiment.useConfig({ location: "" + location + str }).enabled && enabled;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const GiftingBadgeComplexArtExperiment = GiftingBadgeComplexArtExperiment2.GiftingBadgeComplexArtExperiment;
  return GiftingBadgeComplexArtExperiment.useConfig(tmp4).enabled;
}) : ((location) => {
  const GiftingBadgeComplexArtExperiment = GiftingBadgeComplexArtExperiment2.GiftingBadgeComplexArtExperiment;
  return GiftingBadgeComplexArtExperiment.useConfig({ location }).enabled;
});
let result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgesUtils.tsx");

export const getGiftingBadgeProgressPercent = function getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier) {
  const tmp = closure_2(currentTier);
  const tmp2 = closure_2(nextTier);
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
export const useIsGiftingBadgesDesktopEnabled = tmp2;
export const getIsGiftingBadgesDesktopEnabled = function getIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.getConfig({ location }).enabled;
  if (enabled) {
    const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
    const obj2 = { location };
    enabled = GiftingBadgeDesktopExperiment.getConfig(obj2).enabled;
  }
  return enabled;
};
export const useIsGiftingBadgeComplexArtEnabled = tmp3;
export const getGiftingBadgeTierIconUrl = function getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled) {
  if (isGiftingBadgeComplexArtEnabled) {
    let prop;
    if (!tmp) {
      prop = currentTier.complex_icon_static_url;
    }
    if (prop == null) {
      let simple_icon_url1;
      if (currentTier != null) {
        simple_icon_url1 = currentTier.simple_icon_url;
      }
      prop = simple_icon_url1;
    }
    let simple_icon_url = prop;
  } else if (!tmp) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  return simple_icon_url;
};
export const useIsEligibleToShowGiftingBadgeCoachmark = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ location: _location, platform } = arg0);
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const GiftingBadgeExperiment = tmp(11037).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig(tmp4).enabled;
  let str = "-DISABLED";
  if ("web" === platform) {
    str = "";
  }
  const combined = "" + _location + str;
  if (cResult[2] !== combined) {
    const obj3 = { location: combined };
    cResult[2] = combined;
    cResult[3] = obj3;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[3];
  }
  const GiftingBadgeDesktopExperiment = tmp(11042).GiftingBadgeDesktopExperiment;
  let enabled2 = GiftingBadgeDesktopExperiment.useConfig(tmp7).enabled;
  let tmp8 = enabled;
  if ("web" === platform) {
    if (enabled2) {
      enabled2 = enabled;
    }
    tmp8 = enabled2;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class E {
      constructor() {
        currentUser = closure_1_3.getCurrentUser();
        flag = undefined;
        if (currentUser != null) {
          flag = currentUser.hasHadPremium();
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
    cResult[4] = items;
    cResult[5] = E;
    let tmp10 = E;
    let tmp9 = items;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const stateFromStores = initialize.useStateFromStores(tmp9, tmp10);
  const tmpResult = initialize;
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(tmp(2031).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK);
  if (tmp8) {
    tmp8 = stateFromStores;
  }
  if (tmp8) {
    tmp8 = !result;
  }
  return tmp8;
}) : ((location) => {
  const _location = location.location;
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: _location }).enabled;
  const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
  let str = "-DISABLED";
  if ("web" === location.platform) {
    str = "";
  }
  let enabled2 = GiftingBadgeDesktopExperiment.useConfig({ location: "" + _location + str }).enabled;
  let tmp4 = enabled;
  if ("web" === location.platform) {
    if (enabled2) {
      enabled2 = enabled;
    }
    tmp4 = enabled2;
  }
  const obj = { location: "" + _location + str };
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.hasHadPremium();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const tmpResult = initialize;
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(tmp(2031).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK);
  if (tmp4) {
    tmp4 = stateFromStores;
  }
  if (tmp4) {
    tmp4 = !result;
  }
  return tmp4;
});
