// Module ID: 6625
// Function ID: 50811
// Name: calculateFractionalPremiumInfo
// Dependencies: []
// Exports: default

// Module 6625 (calculateFractionalPremiumInfo)
function calculateFractionalPremiumInfo(isFetching) {
  let entitlements;
  let excludeReverseTrialFromCountdown;
  let fetchedAllEntitlements;
  let premiumSubscription;
  let unactivatedFractionalPremiumUnits;
  let flag = isFetching.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  ({ entitlements, unactivatedFractionalPremiumUnits, premiumSubscription, fetchedAllEntitlements, excludeReverseTrialFromCountdown } = isFetching);
  let obj = { isFractionalPremiumActive: false, fractionalState: constants3.NONE, startsAt: importDefault(dependencyMap[7])(0), endsAt: importDefault(dependencyMap[7])(0), currentEntitlementId: "", currentEntitlementEndsAt: importDefault(dependencyMap[7])(0), unactivatedUnits: [], fetched: fetchedAllEntitlements };
  let str = "";
  if (flag) {
    obj = {};
    const merged = Object.assign(obj);
    obj["fetched"] = false;
    return obj;
  } else {
    if (null != isFetching.currentUser) {
      const found = entitlements.filter((endsAt) => null != endsAt.endsAt && null != endsAt.startsAt);
      const sorted = found.sort((endsAt, endsAt2) => {
        let tmp2 = null != endsAt.endsAt;
        if (tmp2) {
          tmp2 = null != endsAt2.endsAt;
        }
        callback(closure_2[8])(tmp2, "endsAt should not be null");
        let num = -1;
        if (endsAt.endsAt >= endsAt2.endsAt) {
          let num2 = 0;
          if (endsAt.endsAt > endsAt2.endsAt) {
            num2 = 1;
          }
          num = num2;
        }
        return num;
      });
      const reversed = sorted.reverse();
      if (sorted.length > 0) {
        const _Array = Array;
        const mapped = Array.from(entitlements.values()).map((id) => id.id);
        const arr = Array.from(entitlements.values());
        obj = {};
        const obj1 = { entitlementIds: mapped };
        obj.extra = obj1;
        const result = arg1(dependencyMap[9]).captureBillingMessage("fractional redemption entitlements should have startsAt/endsAt", obj);
        const _Error = Error;
        const error = new Error("fractional redemption entitlements should have startsAt/endsAt");
        throw error;
      }
      const first = sorted[0];
      let tmp4 = null;
      if (null != first) {
        tmp4 = first;
      }
      if (null == tmp4) {
        if (excludeReverseTrialFromCountdown) {
          let sourceType;
          if (null != tmp4) {
            sourceType = tmp4.sourceType;
          }
          excludeReverseTrialFromCountdown = sourceType === constants.REVERSE_TRIAL;
        }
        const obj2 = { isFractionalPremiumActive: null != tmp4, fractionalState: tmp6 };
        if (null != tmp4) {
          let tmp14 = importDefault(dependencyMap[7])(tmp4.startsAt);
        } else {
          tmp14 = importDefault(dependencyMap[7])(0);
        }
        obj2.startsAt = tmp14;
        if (null != tmp4) {
          const obj4 = arg1(dependencyMap[10]);
          let tmp22Result = importDefault(dependencyMap[7])(obj4.extendDateWithUnconsumedFractionalPremium(tmp4.endsAt, unactivatedFractionalPremiumUnits, undefined, excludeReverseTrialFromCountdown));
          const tmp22 = importDefault(dependencyMap[7]);
        } else {
          tmp22Result = importDefault(dependencyMap[7])(0);
        }
        obj2.endsAt = tmp22Result;
        if (null != tmp4) {
          str = tmp4.id;
        }
        obj2.currentEntitlementId = str;
        if (null != tmp4) {
          let tmp29 = importDefault(dependencyMap[7])(tmp4.endsAt);
        } else {
          tmp29 = importDefault(dependencyMap[7])(0);
        }
        obj2.currentEntitlementEndsAt = tmp29;
        obj2.unactivatedUnits = unactivatedFractionalPremiumUnits;
        obj2.fetched = fetchedAllEntitlements;
        return obj2;
      } else {
        if (null == premiumSubscription) {
          const FP_ONLY = constants3.FP_ONLY;
        }
        const FP_SUB_PAUSED = constants3.FP_SUB_PAUSED;
      }
    }
    return obj;
  }
}
function shouldFetchRedemptionEntitlements(forceFetch, stateFromStores) {
  let tmp = null != stateFromStores;
  if (tmp) {
    tmp = !closure_7.fetchingAllEntitlements;
  }
  if (tmp) {
    tmp = !closure_7.fetchedAllEntitlements || forceFetch;
    const tmp4 = !closure_7.fetchedAllEntitlements || forceFetch;
  }
  return tmp;
}
function shouldFetchApplicationEntitlements(stateFromStores) {
  let tmp = null != stateFromStores;
  if (tmp) {
    const applicationIdsFetching = closure_7.applicationIdsFetching;
    tmp = !applicationIdsFetching.has(closure_12);
  }
  if (tmp) {
    const applicationIdsFetched = closure_7.applicationIdsFetched;
    tmp = !applicationIdsFetched.has(closure_12);
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ EntitlementSourceTypes: closure_8, EntitlementTypes: closure_9, SubscriptionStatusTypes: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ FractionalPremiumStates: closure_11, PREMIUM_SUBSCRIPTION_APPLICATION: closure_12 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/billing/hooks/useFractionalPremiumInfo.tsx");

export default function useFractionalPremiumInfo() {
  let excludeReverseTrialFromCountdown;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { <string:2585612720>: true, <string:2505165921>: false, <string:1365402028>: false };
  }
  const forceFetch = obj.forceFetch;
  const arg1 = forceFetch;
  ({ excludeReverseTrial: closure_1, excludeReverseTrialFromCountdown } = obj);
  const dependencyMap = excludeReverseTrialFromCountdown;
  let callback;
  let React;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[11]).useStateFromStores(items, () => stateFromStores1.getCurrentUser());
  callback = stateFromStores;
  const obj2 = arg1(dependencyMap[11]);
  const items1 = [closure_7];
  const stateFromStoresArray = arg1(dependencyMap[11]).useStateFromStoresArray(items1, () => stateFromStores2.getFractionalPremium({ excludeReverseTrial: closure_1 }));
  React = stateFromStoresArray;
  const obj3 = arg1(dependencyMap[11]);
  const items2 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[11]).useStateFromStores(items2, () => stateFromStores2.fetchedAllEntitlements);
  closure_5 = stateFromStores1;
  const obj4 = arg1(dependencyMap[11]);
  const items3 = [closure_7];
  const stateFromStoresArray1 = arg1(dependencyMap[11]).useStateFromStoresArray(items3, () => stateFromStores2.getUnactivatedFractionalPremiumUnits());
  closure_6 = stateFromStoresArray1;
  const obj5 = arg1(dependencyMap[11]);
  const items4 = [closure_6];
  const stateFromStores2 = arg1(dependencyMap[11]).useStateFromStores(items4, () => stateFromStoresArray1.getPremiumTypeSubscription());
  closure_7 = stateFromStores2;
  obj = {};
  let fetchingAllEntitlements = shouldFetchRedemptionEntitlements(forceFetch, stateFromStores);
  if (!fetchingAllEntitlements) {
    fetchingAllEntitlements = closure_7.fetchingAllEntitlements;
  }
  if (!fetchingAllEntitlements) {
    fetchingAllEntitlements = shouldFetchApplicationEntitlements(stateFromStores);
  }
  if (!fetchingAllEntitlements) {
    const applicationIdsFetching = closure_7.applicationIdsFetching;
    fetchingAllEntitlements = applicationIdsFetching.has(closure_12);
  }
  obj.isFetching = fetchingAllEntitlements;
  obj.entitlements = stateFromStoresArray;
  obj.unactivatedFractionalPremiumUnits = stateFromStoresArray1;
  obj.currentUser = stateFromStores;
  obj.premiumSubscription = stateFromStores2;
  obj.fetchedAllEntitlements = stateFromStores1;
  obj.excludeReverseTrialFromCountdown = excludeReverseTrialFromCountdown;
  const tmp12 = callback(React.useState(calculateFractionalPremiumInfo(obj)), 2);
  closure_8 = tmp12[1];
  importDefault(dependencyMap[12])(() => {
    if (callback3(forceFetch, stateFromStores)) {
      let obj = forceFetch(excludeReverseTrialFromCountdown[13]);
      obj = { entitlementType: constants.FRACTIONAL_REDEMPTION };
      const userEntitlements = obj.fetchUserEntitlements(obj);
    }
    if (callback4(stateFromStores)) {
      const userEntitlementsForApplication = forceFetch(excludeReverseTrialFromCountdown[13]).fetchUserEntitlementsForApplication(closure_12);
      const obj3 = forceFetch(excludeReverseTrialFromCountdown[13]);
    }
  });
  const items5 = [stateFromStores, stateFromStoresArray, stateFromStores2, stateFromStoresArray1, stateFromStores1, excludeReverseTrialFromCountdown];
  const effect = React.useEffect(() => {
    let closure_0 = callback2({ entitlements: stateFromStoresArray, unactivatedFractionalPremiumUnits: stateFromStoresArray1, currentUser: stateFromStores, premiumSubscription: stateFromStores2, fetchedAllEntitlements: stateFromStores1, excludeReverseTrialFromCountdown });
    callback((arg0) => {
      let tmp = arg0;
      if (!obj.isEqual(arg0, callback)) {
        tmp = callback;
      }
      return tmp;
    });
  }, items5);
  return tmp12[0];
};
