// Module ID: 11586
// Function ID: 11587
// Name: useTenureBadging
// Dependencies: [19, 7848, 1385, 2176, 1387, 504, 11587, 2107, 7857, 2]
// Exports: usePremiumSinceForUser, useTieredTenureBadge, useTieredTenureBadgeData, useTieredTenureBadgeDataForUser, useTieredTenureBadgesFromSubscriptionData, useTieredTenureEarnedOnDate

// Module 11586 (useTenureBadging)
import react from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2107 */;
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7857 */;
import useTieredTenureBadgeForUser2 from "useTieredTenureBadgeForUser" /* 11587 */;
import UserProfileStore from "UserProfileStore" /* 7848 */;
import UserStore from "UserStore" /* 1385 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import size from "module_2" /* 2 */;

let _require, userProfile;

let metroImportDefault;
let metroRequire;
const f101012 = () => authStore.getCurrentUser();
const f101018 = () => premiumTypeSubscription.getPremiumTypeSubscription();
function usePremiumSince() {
  let currentUser;
  let require;
  let stateFromStores1;
  const tmp = require;
  let tmp2 = stateFromStores1;
  const items = [UserStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("PremiumTypeUtils");
  const isPremiumExactlyResult = obj2.isPremiumExactly(stateFromStores, TIER_2.TIER_2);
  require = isPremiumExactlyResult;
  const items1 = [SubscriptionStore];
  const items2 = [isPremiumExactlyResult];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
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
  const tmpResult = tmp(tmp2[5]);
  const stateFromStores2 = tmpResult.useStateFromStores(items3, () => {
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
  const items4 = [stateFromStores2];
  const tmp8 = useMemo;
  if (stateFromStores1 == null) {
    stateFromStores1 = useMemo(function() {
      let tmp2 = stateFromStores2;
      if (null != stateFromStores2) {
        const _Date = Date;
        let date = tmp;
        if (!(stateFromStores2 instanceof Date)) {
          const _Date2 = Date;
          const self = this;
          const self2 = this;
          date = new Date(tmp);
        }
        const _Number = Number;
        let tmp5 = null;
        if (!Number.isNaN(date.getTime())) {
          tmp5 = date;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    }, items4);
  }
  const items5 = [stateFromStores1];
  return tmp8(function() {
    let tmp2 = stateFromStores1;
    if (null != stateFromStores1) {
      const _Date = Date;
      let date = tmp;
      if (!(stateFromStores1 instanceof Date)) {
        const _Date2 = Date;
        const self = this;
        const self2 = this;
        date = new Date(tmp);
      }
      const _Number = Number;
      let tmp5 = null;
      if (!Number.isNaN(date.getTime())) {
        tmp5 = date;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }, items5);
}
const useMemo = react.useMemo;
({ PremiumTypes: metroRequire, TENURE_BADGES: metroImportDefault } = PremiumConstants);
const TieredTenureBadgeStatus = { UPCOMING: "upcoming", WITHHELD: "withheld", EARNED: "earned" };
let result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx");

export { TieredTenureBadgeStatus };
export function useTieredTenureBadge() {
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f101012);
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
}
export function usePremiumSinceForUser(userId) {
  let stateFromStores;
  _require = userId;
  const items = [UserProfileStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
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
  const items1 = [stateFromStores];
  return useMemo(function() {
    let tmp2 = stateFromStores2;
    if (null != stateFromStores2) {
      const _Date = Date;
      let date = tmp;
      if (!(stateFromStores2 instanceof Date)) {
        const _Date2 = Date;
        const self = this;
        const self2 = this;
        date = new Date(tmp);
      }
      const _Number = Number;
      let tmp5 = null;
      if (!Number.isNaN(date.getTime())) {
        tmp5 = date;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }, items1);
}
export { usePremiumSince };
export function useTieredTenureBadgesFromSubscriptionData() {
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
  if (obj3.isPremiumExactly(stateFromStores, metroRequire.TIER_2)) {
    let premiumSince;
    const getEarnedTenureBadge = tmp(7857).getEarnedTenureBadge;
    TieredTenureBadgeUtils;
    if (stateFromStores1 != null) {
      premiumSince = stateFromStores1.premiumSince;
    }
    earnedTenureBadge = getEarnedTenureBadge(premiumSince);
  }
  return earnedTenureBadge;
}
export function useTieredTenureEarnedOnDate() {
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f101012);
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
  const stateFromStores1 = tmpResult.useStateFromStores(items1, f101018);
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
}
export function useTieredTenureBadgeData() {
  let premiumTypeSubscription;
  let tmpResult12;
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
    tmp6 = metroImportDefault[tieredTenureBadgeForUser];
  }
  const items1 = [tmp3];
  const tmpResult7 = get_initialized;
  const stateFromStores1 = tmpResult7.useStateFromStores(items1, f101012);
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
  const tmpResult9 = get_initialized;
  const stateFromStores2 = tmpResult9.useStateFromStores(items2, f101018);
  let earnedOnDate = null;
  if (null != tieredTenureBadgeForUser1) {
    earnedOnDate = null;
    if (null != stateFromStores2) {
      earnedOnDate = null;
      if (null != stateFromStores2.premiumSince) {
        const tmpResult10 = TieredTenureBadgeUtils;
        earnedOnDate = tmpResult10.getEarnedOnDate(tieredTenureBadgeForUser1, stateFromStores2.premiumSince);
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
      const tmpResult11 = TieredTenureBadgeUtils;
      const earnedTenureBadge = tmpResult11.getEarnedTenureBadge(tmp14);
      if (null != earnedTenureBadge) {
        const obj3 = { earnedOnDate: tmpResult12.getEarnedOnDate(earnedTenureBadge, tmp14), status: obj.WITHHELD };
        const merged1 = Object.assign(metroImportDefault[earnedTenureBadge]);
        tmpResult12 = TieredTenureBadgeUtils;
        return obj3;
      }
    }
    const _Object = Object;
    const obj4 = { status: obj.UPCOMING };
    const merged2 = Object.assign(Object.values(metroImportDefault)[0]);
    return obj4;
  }
}
export function useTieredTenureBadgeDataForUser(userId) {
  const obj = useTieredTenureBadgeForUser2;
  const tieredTenureBadgeForUser = obj.useTieredTenureBadgeForUser(userId);
  let tmp2 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp2 = metroImportDefault[tieredTenureBadgeForUser];
  }
  return tmp2;
}
