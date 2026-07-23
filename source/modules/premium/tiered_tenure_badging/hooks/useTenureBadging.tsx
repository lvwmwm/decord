// Module ID: 8557
// Function ID: 68014
// Name: useTieredTenureBadge
// Dependencies: [6856, 1849, 3782, 1851, 566, 8558, 1872, 3712, 6877, 2]
// Exports: useTieredTenureBadgeData, useTieredTenureBadgesFromSubscriptionData

// Module 8557 (useTieredTenureBadge)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";

let closure_6;
let closure_7;
let require = arg1;
function useTieredTenureBadge() {
  let id;
  const items = [closure_4];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_4.getCurrentUser());
  const obj = require(566) /* initialize */;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tieredTenureBadgeForUser = require(8558) /* useTieredTenureBadgeForUser */.useTieredTenureBadgeForUser(id);
  let tmp4 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp4 = tieredTenureBadgeForUser;
  }
  return tmp4;
}
function usePremiumSinceForUser(userId) {
  const _require = userId;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    if (null == closure_0) {
      return null;
    } else {
      const userProfile = outer1_3.getUserProfile(closure_0);
      let premiumSince;
      if (null != userProfile) {
        premiumSince = userProfile.premiumSince;
      }
      return premiumSince;
    }
  });
}
function usePremiumSince() {
  const items = [closure_4];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_4.getCurrentUser());
  const obj = require(566) /* initialize */;
  const isPremiumExactlyResult = require(1872) /* isPremiumAtLeast */.isPremiumExactly(stateFromStores, closure_6.TIER_2);
  require = isPremiumExactlyResult;
  const obj2 = require(1872) /* isPremiumAtLeast */;
  const items1 = [closure_5];
  const items2 = [isPremiumExactlyResult];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => {
    const premiumSubscription = outer1_5.getPremiumSubscription();
    let premiumSince = null;
    if (null != premiumSubscription) {
      premiumSince = null;
      if (closure_0) {
        premiumSince = premiumSubscription.premiumSince;
      }
    }
    return premiumSince;
  }, items2);
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  let tmp4Result = usePremiumSinceForUser(id);
  if (null != stateFromStores1) {
    tmp4Result = stateFromStores1;
  }
  return tmp4Result;
}
function useTieredTenureEarnedOnDate() {
  const tmp = useTieredTenureBadge();
  const items = [closure_5];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_5.getPremiumTypeSubscription());
  let earnedOnDate = null;
  if (null != tmp) {
    earnedOnDate = null;
    if (null != stateFromStores) {
      earnedOnDate = null;
      if (null != stateFromStores.premiumSince) {
        earnedOnDate = require(6877) /* getTieredTenureBadgeData */.getEarnedOnDate(tmp, stateFromStores.premiumSince);
        const obj2 = require(6877) /* getTieredTenureBadgeData */;
      }
    }
  }
  return earnedOnDate;
}
function useTieredTenureBadgeDataForUser(userId) {
  const tieredTenureBadgeForUser = require(8558) /* useTieredTenureBadgeForUser */.useTieredTenureBadgeForUser(userId);
  let tmp2 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp2 = table[tieredTenureBadgeForUser];
  }
  return tmp2;
}
({ PremiumTypes: closure_6, TENURE_BADGES: closure_7 } = GuildFeatures);
let obj = { UPCOMING: "upcoming", EARNED: "earned" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx");

export const TieredTenureBadgeStatus = obj;
export { useTieredTenureBadge };
export { usePremiumSinceForUser };
export { usePremiumSince };
export const useTieredTenureBadgesFromSubscriptionData = function useTieredTenureBadgesFromSubscriptionData() {
  const values = Object.values(closure_7);
  const items = [closure_4];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.getCurrentUser());
  const obj = _require(566);
  const items1 = [closure_5];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => outer1_5.getPremiumTypeSubscription());
  const obj2 = _require(566);
  if (obj3.isPremiumExactly(stateFromStores, closure_6.TIER_2)) {
    if (null != stateFromStores1) {
      if (null != stateFromStores1.premiumSince) {
        const obj4 = importDefault(3712)();
        _require = obj4.diff(importDefault(3712)(stateFromStores1.premiumSince).add(1, "day"), "months");
        return values.reduce((arg0, tenureReqNumMonths) => {
          let id = arg0;
          if (closure_0 >= tenureReqNumMonths.tenureReqNumMonths) {
            id = tenureReqNumMonths.id;
          }
          return id;
        }, null);
      }
    }
  }
  return null;
};
export { useTieredTenureEarnedOnDate };
export const useTieredTenureBadgeData = function useTieredTenureBadgeData() {
  let obj = require(566) /* initialize */;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getCurrentUser());
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp2Result = useTieredTenureBadgeDataForUser(id);
  if (null != tmp2Result) {
    obj = {};
    const merged = Object.assign(tmp2Result);
    obj["earnedOnDate"] = tmp5;
    obj["status"] = obj.EARNED;
    let tmp7 = obj;
  } else {
    tmp7 = null;
    if (null != tmp6) {
      obj = {};
      const _Object = Object;
      const merged1 = Object.assign(Object.values(closure_7)[0]);
      obj["status"] = obj.UPCOMING;
      tmp7 = obj;
    }
  }
  return tmp7;
};
export { useTieredTenureBadgeDataForUser };
