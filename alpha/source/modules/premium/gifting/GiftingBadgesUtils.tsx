// Module ID: 10795
// Function ID: 10796
// Name: GiftingBadgesUtils
// Dependencies: [19, 8904, 1385, 1113, 2763, 10789, 10796, 504, 5171, 4974, 8896, 8909, 2]
// Exports: getGiftingBadgeAccessibilityLabel, getGiftingBadgeProgressPercent, getGiftingBadgeTierIconUrl, getIsGiftingBadgesDesktopEnabled, useGiftingBadgeCoachmarkVariant, useIsGiftingBadgesDesktopEnabled

// Module 10795 (GiftingBadgesUtils)
import intl2 from "intl" /* 1113 */;
import _modDef2763 from "module_2763" /* 2763 */;
import BadgeId from "BadgeId" /* 8896 */;
import BadgeDirectoryStore2 from "BadgeDirectoryStore" /* 8904 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8909 */;
import GiftingBadgeExperiment2 from "GiftingBadgeExperiment" /* 10789 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const BadgeDirectoryStore = BadgeDirectoryStore2;
let _require, currentUser;

let closure_5 = BadgeDirectoryStore2.getSingleRequirementThreshold;
let result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgesUtils.tsx");

export function getGiftingBadgeAccessibilityLabel(name) {
  let str;
  const count = closure_5(name);
  if (name != null) {
    str = name.name;
  }
  if (str == null) {
    str = "";
  }
  const intl = intl2.intl;
  return "" + str + ", " + intl.formatToPlainString(_modDef2763.qvx9E4, { count });
}
export function getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier) {
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
}
export function useIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  const obj = { location };
  return GiftingBadgeExperiment.useConfig(obj).enabled;
}
export function getIsGiftingBadgesDesktopEnabled(location) {
  const GiftingBadgeExperiment = GiftingBadgeExperiment2.GiftingBadgeExperiment;
  const obj = { location };
  return GiftingBadgeExperiment.getConfig(obj).enabled;
}
export function getGiftingBadgeTierIconUrl(nextTier) {
  let prop;
  if (nextTier != null) {
    prop = nextTier.complex_icon_static_url;
  }
  if (prop == null) {
    let simple_icon_url;
    if (nextTier != null) {
      simple_icon_url = nextTier.simple_icon_url;
    }
    prop = simple_icon_url;
  }
  return prop;
}
export function useGiftingBadgeCoachmarkVariant(arg0) {
  let _location;
  let badgeById;
  let closure_0;
  let enabled;
  let str2;
  ({ location: _location, enabled } = arg0);
  if (enabled === undefined) {
    enabled = true;
  }
  _require = undefined;
  let closure_1;
  let tmp = _require;
  let tmp2 = dependencyMap;
  const GiftingBadgeExperiment = require("GiftingBadgeExperiment").GiftingBadgeExperiment;
  let enabled2 = GiftingBadgeExperiment.useConfig({ location: _location }).enabled;
  const GiftingBadgeCoachmarkAudienceExperiment = require("GiftingBadgeCoachmarkAudienceExperiment").GiftingBadgeCoachmarkAudienceExperiment;
  let str = "-DISABLED";
  const useConfig = GiftingBadgeCoachmarkAudienceExperiment.useConfig;
  if (enabled2) {
    str = "";
  }
  let obj = { location: "" + _location + str };
  const enabled3 = useConfig(obj).enabled;
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
  const tmpResult3 = tmp(5171);
  const result = tmpResult3.useIsDismissibleContentDismissed_UNSAFE(tmp(4974).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK);
  const items1 = [BadgeDirectoryStore];
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(items1, () => badgeById.getBadgeById(closure_0(dependencyMap[10]).BadgeId.GIFTING));
  if (enabled2) {
    enabled2 = !result;
  }
  if (enabled2) {
    enabled2 = enabled;
  }
  _require = tmp6;
  let tmp7 = enabled2 && enabled3;
  if (tmp7) {
    tmp7 = null == stateFromStores1;
  }
  closure_1 = tmp7;
  const items2 = [tmp6, tmp7];
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
  if (enabled3) {
    let tmp10 = null;
    if (enabled2) {
      tmp10 = null;
      if (null != stateFromStores1) {
        tmp10 = null;
        if (!stateFromStores1.hidden) {
          if (stateFromStores) {
            tmp10 = "noCount";
          } else {
            tmp10 = null;
          }
        }
      }
    }
    str2 = tmp10;
  } else {
    str2 = null;
    if (enabled2) {
      str2 = null;
      if (stateFromStores) {
        str2 = null;
        if (null != stateFromStores1) {
          str2 = "count";
        }
      }
    }
  }
  return str2;
}
