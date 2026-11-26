// Module ID: 11156
// Function ID: 11157
// Name: GiftingBadgesUtils
// Dependencies: [19, 6383, 1387, 1112, 2943, 11157, 504, 5075, 4876, 6138, 6388, 2]
// Exports: getGiftingBadgeAccessibilityLabel, getGiftingBadgeProgressPercent, getGiftingBadgeTierIconUrl, useGiftingBadgeCoachmarkVariant

// Module 11156 (GiftingBadgesUtils)
import intl2 from "intl" /* 1112 */;
import _modDef2943 from "module_2943" /* 2943 */;
import BadgeId from "BadgeId" /* 6138 */;
import BadgeDirectoryStore2 from "BadgeDirectoryStore" /* 6383 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 6388 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1387 */;
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
  return "" + str + ", " + intl.formatToPlainString(_modDef2943.qvx9E4, { count });
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
export function useGiftingBadgeCoachmarkVariant(enabled) {
  let badgeById;
  let closure_0;
  let str;
  let flag = enabled.enabled;
  const _location = enabled.location;
  if (flag === undefined) {
    flag = true;
  }
  _require = undefined;
  const GiftingBadgeCoachmarkAudienceExperiment = require("GiftingBadgeCoachmarkAudienceExperiment").GiftingBadgeCoachmarkAudienceExperiment;
  enabled = GiftingBadgeCoachmarkAudienceExperiment.useConfig({ location: _location }).enabled;
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  let obj2 = require("DismissibleContentUnsafeUtils");
  const result = obj2.useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.NEW_GIFTING_BADGES_COACHMARK);
  const items1 = [BadgeDirectoryStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => badgeById.getBadgeById(closure_0(dependencyMap[9]).BadgeId.GIFTING));
  _require = tmp5;
  let closure_1 = tmp6;
  const items2 = [tmp5, tmp6];
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
  if (enabled) {
    let tmp9 = null;
    if (!result && flag) {
      tmp9 = null;
      if (null != stateFromStores1) {
        tmp9 = null;
        if (!stateFromStores1.hidden) {
          if (stateFromStores) {
            tmp9 = "noCount";
          } else {
            tmp9 = null;
          }
        }
      }
    }
    str = tmp9;
  } else {
    str = null;
    if (!result && flag) {
      str = null;
      if (stateFromStores) {
        str = null;
        if (null != stateFromStores1) {
          str = "count";
        }
      }
    }
  }
  return str;
}
