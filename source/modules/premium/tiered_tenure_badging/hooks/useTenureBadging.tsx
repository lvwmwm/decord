// Module ID: 8550
// Function ID: 67965
// Name: useTieredTenureBadge
// Dependencies: []
// Exports: useTieredTenureBadgeData, useTieredTenureBadgesFromSubscriptionData

// Module 8550 (useTieredTenureBadge)
function useTieredTenureBadge() {
  let id;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = arg1(dependencyMap[4]);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tieredTenureBadgeForUser = arg1(dependencyMap[5]).useTieredTenureBadgeForUser(id);
  let tmp4 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp4 = tieredTenureBadgeForUser;
  }
  return tmp4;
}
function usePremiumSinceForUser(userId) {
  const arg1 = userId;
  const items = [closure_3];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    if (null == arg0) {
      return null;
    } else {
      const userProfile = userProfile.getUserProfile(arg0);
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
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = arg1(dependencyMap[4]);
  const isPremiumExactlyResult = arg1(dependencyMap[6]).isPremiumExactly(stateFromStores, closure_6.TIER_2);
  const arg1 = isPremiumExactlyResult;
  const obj2 = arg1(dependencyMap[6]);
  const items1 = [closure_5];
  const items2 = [isPremiumExactlyResult];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => {
    const premiumSubscription = premiumSubscription.getPremiumSubscription();
    let premiumSince = null;
    if (null != premiumSubscription) {
      premiumSince = null;
      if (isPremiumExactlyResult) {
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
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let earnedOnDate = null;
  if (null != tmp) {
    earnedOnDate = null;
    if (null != stateFromStores) {
      earnedOnDate = null;
      if (null != stateFromStores.premiumSince) {
        earnedOnDate = arg1(dependencyMap[8]).getEarnedOnDate(tmp, stateFromStores.premiumSince);
        const obj2 = arg1(dependencyMap[8]);
      }
    }
  }
  return earnedOnDate;
}
function useTieredTenureBadgeDataForUser(userId) {
  const tieredTenureBadgeForUser = arg1(dependencyMap[5]).useTieredTenureBadgeForUser(userId);
  let tmp2 = null;
  if (null != tieredTenureBadgeForUser) {
    tmp2 = closure_7[tieredTenureBadgeForUser];
  }
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ PremiumTypes: closure_6, TENURE_BADGES: closure_7 } = arg1(dependencyMap[3]));
const obj = { UPCOMING: "upcoming", EARNED: "earned" };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx");

export const TieredTenureBadgeStatus = obj;
export { useTieredTenureBadge };
export { usePremiumSinceForUser };
export { usePremiumSince };
export const useTieredTenureBadgesFromSubscriptionData = function useTieredTenureBadgesFromSubscriptionData() {
  const values = Object.values(closure_7);
  const items = [closure_4];
  const stateFromStores = callback(dependencyMap[4]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = callback(dependencyMap[4]);
  const items1 = [closure_5];
  const stateFromStores1 = callback(dependencyMap[4]).useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = callback(dependencyMap[4]);
  if (obj3.isPremiumExactly(stateFromStores, closure_6.TIER_2)) {
    if (null != stateFromStores1) {
      if (null != stateFromStores1.premiumSince) {
        const obj4 = importDefault(dependencyMap[7])();
        const callback = obj4.diff(importDefault(dependencyMap[7])(stateFromStores1.premiumSince).add(1, "day"), "months");
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
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
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
