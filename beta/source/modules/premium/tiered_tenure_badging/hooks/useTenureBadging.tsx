// Module ID: 10646
// Function ID: 10647
// Name: useTenureBadging
// Dependencies: [7035, 1372, 4494, 1374, 504, 10647, 1970, 7048, 10648, 2]
// Exports: usePremiumSinceForUser, useTieredTenureBadge, useTieredTenureBadgeData, useTieredTenureBadgeDataForUser, useTieredTenureBadgesFromSubscriptionData, useTieredTenureEarnedOnDate

// Module 10646 (useTenureBadging)
import get_initialized from "get initialized" /* 504 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1970 */;
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7048 */;
import useTieredTenureBadgeForUser2 from "useTieredTenureBadgeForUser" /* 10647 */;
import TenureBadgeWithheldStateExperiment from "TenureBadgeWithheldStateExperiment" /* 10648 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import UserStore from "UserStore" /* 1372 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

let _require, userProfile;

let hasOwnProperty;
let metroRequire;
const f91632 = () => authStore.getCurrentUser();
const f91636 = () => premiumTypeSubscription.getPremiumTypeSubscription();
function usePremiumSince() {
  let currentUser;
  let require;
  const tmp = require;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = PremiumTypeUtils;
  const isPremiumExactlyResult = obj2.isPremiumExactly(stateFromStores, TIER_2.TIER_2);
  require = isPremiumExactlyResult;
  const items1 = [SubscriptionStore];
  const items2 = [isPremiumExactlyResult];
  const obj3 = get_initialized;
  let stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const premiumSubscription = SubscriptionStore.getPremiumSubscription();
    let premiumSince = null;
    if (null != premiumSubscription) {
      premiumSince = null;
      if (require) {
        premiumSince = premiumSubscription.premiumSince;
      }
    }
    return premiumSince;
  }, items2);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items3 = [UserProfileStore];
  const tmpResult = get_initialized;
  if (stateFromStores1 == null) {
    stateFromStores1 = tmpResult.useStateFromStores(items3, () => {
      if (null == id) {
        return null;
      } else {
        userProfile = userProfile.getUserProfile(tmp);
        let premiumSince;
        if (userProfile != null) {
          premiumSince = userProfile.premiumSince;
        }
        return premiumSince;
      }
    });
  }
  return stateFromStores1;
}
({ PremiumTypes: hasOwnProperty, TENURE_BADGES: metroRequire } = PremiumConstants);
const TieredTenureBadgeStatus = { UPCOMING: "upcoming", WITHHELD: "withheld", EARNED: "earned" };
let result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx");

export { TieredTenureBadgeStatus };
export const useTieredTenureBadge = function useTieredTenureBadge() {
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f91632);
  let id;
  const useTieredTenureBadgeForUser = useTieredTenureBadgeForUser2.useTieredTenureBadgeForUser;
  useTieredTenureBadgeForUser2;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tieredTenureBadgeForUser = useTieredTenureBadgeForUser(id);
  if (tieredTenureBadgeForUser == null) {
    tieredTenureBadgeForUser = null;
  }
  return tieredTenureBadgeForUser;
};
export const usePremiumSinceForUser = function usePremiumSinceForUser(userId) {
  _require = userId;
  const items = [UserProfileStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null == id) {
      return null;
    } else {
      userProfile = userProfile.getUserProfile(tmp);
      let premiumSince;
      if (userProfile != null) {
        premiumSince = userProfile.premiumSince;
      }
      return premiumSince;
    }
  });
};
export { usePremiumSince };
export const useTieredTenureBadgesFromSubscriptionData = function useTieredTenureBadgesFromSubscriptionData() {
  let currentUser;
  let premiumTypeSubscription;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [SubscriptionStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let earnedTenureBadge = null;
  const obj3 = PremiumTypeUtils;
  if (obj3.isPremiumExactly(stateFromStores, hasOwnProperty.TIER_2)) {
    let premiumSince;
    const getEarnedTenureBadge = tmp(7048).getEarnedTenureBadge;
    TieredTenureBadgeUtils;
    if (stateFromStores1 != null) {
      premiumSince = stateFromStores1.premiumSince;
    }
    earnedTenureBadge = getEarnedTenureBadge(premiumSince);
  }
  return earnedTenureBadge;
};
export const useTieredTenureEarnedOnDate = function useTieredTenureEarnedOnDate() {
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f91632);
  let id;
  const useTieredTenureBadgeForUser = useTieredTenureBadgeForUser2.useTieredTenureBadgeForUser;
  useTieredTenureBadgeForUser2;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tieredTenureBadgeForUser = useTieredTenureBadgeForUser(id);
  if (tieredTenureBadgeForUser == null) {
    tieredTenureBadgeForUser = null;
  }
  const items1 = [SubscriptionStore];
  const tmpResult = get_initialized;
  const stateFromStores1 = tmpResult.useStateFromStores(items1, f91636);
  let earnedOnDate = null;
  if (null != tieredTenureBadgeForUser) {
    earnedOnDate = null;
    if (null != stateFromStores1) {
      earnedOnDate = null;
      if (null != stateFromStores1.premiumSince) {
        const tmpResult2 = TieredTenureBadgeUtils;
        earnedOnDate = tmpResult2.getEarnedOnDate(tieredTenureBadgeForUser, stateFromStores1.premiumSince);
      }
    }
  }
  return earnedOnDate;
};
export const useTieredTenureBadgeData = function useTieredTenureBadgeData() {
  let premiumTypeSubscription;
  let tmpResult14;
  const obj = get_initialized;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => authStore.getCurrentUser());
  let id;
  const tmp3 = UserStore;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmpResult = useTieredTenureBadgeForUser2;
  const tieredTenureBadgeForUser = tmpResult.useTieredTenureBadgeForUser(id);
  let tmp6 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp6 = metroRequire[tieredTenureBadgeForUser];
  }
  const items1 = [tmp3];
  const tmpResult8 = get_initialized;
  const stateFromStores1 = tmpResult8.useStateFromStores(items1, f91632);
  let id1;
  const useTieredTenureBadgeForUser = useTieredTenureBadgeForUser2.useTieredTenureBadgeForUser;
  useTieredTenureBadgeForUser2;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  let tieredTenureBadgeForUser1 = useTieredTenureBadgeForUser(id1);
  if (tieredTenureBadgeForUser1 == null) {
    tieredTenureBadgeForUser1 = null;
  }
  const items2 = [SubscriptionStore];
  const tmpResult10 = get_initialized;
  const stateFromStores2 = tmpResult10.useStateFromStores(items2, f91636);
  let earnedOnDate = null;
  if (null != tieredTenureBadgeForUser1) {
    earnedOnDate = null;
    if (null != stateFromStores2) {
      earnedOnDate = null;
      if (null != stateFromStores2.premiumSince) {
        const tmpResult11 = TieredTenureBadgeUtils;
        earnedOnDate = tmpResult11.getEarnedOnDate(tieredTenureBadgeForUser1, stateFromStores2.premiumSince);
      }
    }
  }
  const tmp14 = usePremiumSince();
  if (null != tmp6) {
    const obj2 = { earnedOnDate, status: obj.EARNED };
    const merged = Object.assign(tmp6);
    return obj2;
  } else if (null == tmp14) {
    return null;
  } else {
    let result;
    if (stateFromStores != null) {
      result = stateFromStores.hasPaidTier2Subscription();
    }
    if (!result) {
      const tmpResult12 = TieredTenureBadgeUtils;
      const earnedTenureBadge = tmpResult12.getEarnedTenureBadge(tmp14);
      if (null != earnedTenureBadge) {
        const tmpResult13 = TenureBadgeWithheldStateExperiment;
        if (tmpResult13.shouldShowWithheldTenureBadge("useTieredTenureBadgeData")) {
          const obj3 = { earnedOnDate: tmpResult14.getEarnedOnDate(earnedTenureBadge, tmp14), status: obj.WITHHELD };
          const merged1 = Object.assign(metroRequire[earnedTenureBadge]);
          tmpResult14 = TieredTenureBadgeUtils;
          return obj3;
        }
      }
    }
    const _Object = Object;
    const obj4 = { status: obj.UPCOMING };
    const merged2 = Object.assign(Object.values(metroRequire)[0]);
    return obj4;
  }
};
export const useTieredTenureBadgeDataForUser = function useTieredTenureBadgeDataForUser(userId) {
  const obj = useTieredTenureBadgeForUser2;
  const tieredTenureBadgeForUser = obj.useTieredTenureBadgeForUser(userId);
  let tmp2 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp2 = metroRequire[tieredTenureBadgeForUser];
  }
  return tmp2;
};
