// Module ID: 10208
// Function ID: 10209
// Name: GiftingBadgesUtils
// Dependencies: [19, 7637, 1372, 1115, 2583, 10204, 10209, 10210, 10211, 504, 4654, 2029, 7629, 7642, 2]
// Exports: getGiftingBadgeAccessibilityLabel, getGiftingBadgeProgressPercent, getGiftingBadgeTierIconUrl, getIsGiftingBadgesDesktopEnabled, useGiftingBadgeCoachmarkVariant, useIsGiftingBadgeComplexArtEnabled, useIsGiftingBadgesDesktopEnabled

// Module 10208 (GiftingBadgesUtils)
import intl2 from "intl" /* 1115 */;
import _modDef2583 from "module_2583" /* 2583 */;
import BadgeId from "BadgeId" /* 7629 */;
import BadgeDirectoryStore2 from "BadgeDirectoryStore" /* 7637 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7642 */;
import GiftingBadgeExperiment2 from "GiftingBadgeExperiment" /* 10204 */;
import GiftingBadgeDesktopExperiment2 from "GiftingBadgeDesktopExperiment" /* 10209 */;
import GiftingBadgeComplexArtExperiment2 from "GiftingBadgeComplexArtExperiment" /* 10210 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const BadgeDirectoryStore = BadgeDirectoryStore2;
let _require, currentUser;

let closure_5 = BadgeDirectoryStore2.getSingleRequirementThreshold;
let result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgesUtils.tsx");

export const getGiftingBadgeAccessibilityLabel = function getGiftingBadgeAccessibilityLabel(name) {
  let str;
  const count = closure_5(name);
  if (name != null) {
    str = name.name;
  }
  if (str == null) {
    str = "";
  }
  const intl = intl2.intl;
  return "" + str + ", " + intl.formatToPlainString(_modDef2583.qvx9E4, { count });
};
export const getGiftingBadgeProgressPercent = function getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier) {
  let num3;
  const tmp = closure_5(currentTier);
  const tmp2 = closure_5(nextTier);
  if (null != nextTier) {
    let num6 = 100;
    if (tmp2 > 0) {
      num6 = badgeProgress / tmp2 * 100;
    }
    num3 = num6;
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
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  const obj = { location };
  const enabled = GiftingBadgeExperiment.useConfig(obj).enabled;
  const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
  let str = "-DISABLED";
  const useConfig = GiftingBadgeDesktopExperiment.useConfig;
  if (enabled) {
    str = "";
  }
  const obj2 = { location: "" + location + str };
  const tmp = useConfig(obj2).enabled && enabled;
  return tmp;
};
export const getIsGiftingBadgesDesktopEnabled = function getIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  const obj = { location };
  let enabled = GiftingBadgeExperiment.getConfig(obj).enabled;
  if (enabled) {
    const GiftingBadgeDesktopExperiment = GiftingBadgeDesktopExperiment2.GiftingBadgeDesktopExperiment;
    const obj2 = { location };
    enabled = GiftingBadgeDesktopExperiment.getConfig(obj2).enabled;
  }
  return enabled;
};
export const useIsGiftingBadgeComplexArtEnabled = function useIsGiftingBadgeComplexArtEnabled(UserSettingsGiftingBadgeProgress_str) {
  const GiftingBadgeComplexArtExperiment = GiftingBadgeComplexArtExperiment2.GiftingBadgeComplexArtExperiment;
  const obj = { location: UserSettingsGiftingBadgeProgress_str };
  return GiftingBadgeComplexArtExperiment.useConfig(obj).enabled;
};
export const getGiftingBadgeTierIconUrl = function getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled) {
  let simple_icon_url;
  const tmp2 = isGiftingBadgeComplexArtEnabled;
  if (tmp2) {
    let prop;
    if (nextTier != null) {
      prop = nextTier.complex_icon_static_url;
    }
    if (prop == null) {
      let simple_icon_url1;
      if (nextTier != null) {
        simple_icon_url1 = nextTier.simple_icon_url;
      }
      prop = simple_icon_url1;
    }
    simple_icon_url = prop;
  } else if (nextTier != null) {
    simple_icon_url = nextTier.simple_icon_url;
  }
  return simple_icon_url;
};
export const useGiftingBadgeCoachmarkVariant = function useGiftingBadgeCoachmarkVariant(platform) {
  let _location;
  let badgeById;
  let closure_0;
  let enabled;
  let str3;
  ({ location: _location, enabled } = platform);
  platform = platform.platform;
  if (enabled === undefined) {
    enabled = true;
  }
  _require = undefined;
  let closure_1;
  let tmp = _require;
  let tmp2 = dependencyMap;
  const GiftingBadgeExperiment = require("GiftingBadgeExperiment").GiftingBadgeExperiment;
  const enabled2 = GiftingBadgeExperiment.useConfig({ location: _location }).enabled;
  const GiftingBadgeDesktopExperiment = require("GiftingBadgeDesktopExperiment").GiftingBadgeDesktopExperiment;
  let str = "-DISABLED";
  let str2 = "-DISABLED";
  const useConfig = GiftingBadgeDesktopExperiment.useConfig;
  if ("web" === platform) {
    str2 = "";
  }
  let obj = { location: "" + _location + str2 };
  let enabled3 = useConfig(obj).enabled;
  let tmp4 = enabled2;
  if ("web" === platform) {
    if (enabled3) {
      enabled3 = enabled2;
    }
    tmp4 = enabled3;
  }
  const GiftingBadgeCoachmarkAudienceExperiment = tmp(10211).GiftingBadgeCoachmarkAudienceExperiment;
  const useConfig2 = GiftingBadgeCoachmarkAudienceExperiment.useConfig;
  if (tmp4) {
    str = "";
  }
  let obj2 = { location: "" + _location + str };
  const enabled4 = useConfig2(obj2).enabled;
  const items = [UserStore];
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
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
  const tmpResult3 = tmp(4654);
  const result = tmpResult3.useIsDismissibleContentDismissed_UNSAFE(tmp(2029).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK);
  const items1 = [BadgeDirectoryStore];
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(items1, () => badgeById.getBadgeById(closure_0(dependencyMap[12]).BadgeId.GIFTING));
  if (tmp4) {
    tmp4 = !result;
  }
  if (tmp4) {
    tmp4 = enabled;
  }
  _require = tmp8;
  let tmp9 = tmp4 && enabled4;
  if (tmp9) {
    tmp9 = null == stateFromStores1;
  }
  closure_1 = tmp9;
  const items2 = [tmp8, tmp9];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      const obj2 = BadgeDirectoryActionCreators;
      const badgeSummary = obj2.fetchBadgeSummary(BadgeId.BadgeId.GIFTING);
    } else {
      const tmp2 = closure_0;
      if (tmp2) {
        const obj = BadgeDirectoryActionCreators;
        const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
      }
    }
  }, items2);
  if (enabled4) {
    let tmp12 = null;
    if (tmp4) {
      tmp12 = null;
      if (null != stateFromStores1) {
        tmp12 = null;
        if (!stateFromStores1.hidden) {
          if (stateFromStores) {
            tmp12 = "noCount";
          } else {
            tmp12 = null;
          }
        }
      }
    }
    str3 = tmp12;
  } else {
    str3 = null;
    if (tmp4) {
      str3 = null;
      if (stateFromStores) {
        str3 = null;
        if (null != stateFromStores1) {
          str3 = "count";
        }
      }
    }
  }
  return str3;
};
