// Module ID: 6636
// Function ID: 50919
// Name: calculateFractionalPremiumInfo
// Dependencies: [57, 31, 1849, 3782, 6637, 653, 1851, 3712, 44, 3791, 3776, 566, 4559, 6638, 22, 2]
// Exports: default

// Module 6636 (calculateFractionalPremiumInfo)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

let closure_10;
let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
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
  let obj = { isFractionalPremiumActive: false, fractionalState: constants3.NONE, startsAt: importDefault(3712)(0), endsAt: importDefault(3712)(0), currentEntitlementId: "", currentEntitlementEndsAt: importDefault(3712)(0), unactivatedUnits: [], fetched: fetchedAllEntitlements };
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
        outer1_1(outer1_2[8])(tmp2, "endsAt should not be null");
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
        const result = require(3791) /* _createGatewayCheckoutContext */.captureBillingMessage("fractional redemption entitlements should have startsAt/endsAt", obj);
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
          let tmp14 = importDefault(3712)(tmp4.startsAt);
        } else {
          tmp14 = importDefault(3712)(0);
        }
        obj2.startsAt = tmp14;
        if (null != tmp4) {
          const obj4 = require(3776) /* _createForOfIteratorHelperLoose */;
          let tmp22Result = importDefault(3712)(obj4.extendDateWithUnconsumedFractionalPremium(tmp4.endsAt, unactivatedFractionalPremiumUnits, undefined, excludeReverseTrialFromCountdown));
          const tmp22 = importDefault(3712);
        } else {
          tmp22Result = importDefault(3712)(0);
        }
        obj2.endsAt = tmp22Result;
        if (null != tmp4) {
          str = tmp4.id;
        }
        obj2.currentEntitlementId = str;
        if (null != tmp4) {
          let tmp29 = importDefault(3712)(tmp4.endsAt);
        } else {
          tmp29 = importDefault(3712)(0);
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
({ EntitlementSourceTypes: closure_8, EntitlementTypes: closure_9, SubscriptionStatusTypes: closure_10 } = ME);
({ FractionalPremiumStates: closure_11, PREMIUM_SUBSCRIPTION_APPLICATION: closure_12 } = GuildFeatures);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/billing/hooks/useFractionalPremiumInfo.tsx");

export default function useFractionalPremiumInfo() {
  let excludeReverseTrialFromCountdown;
  let importDefault;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { forceFetch: false, excludeReverseTrial: false, excludeReverseTrialFromCountdown: false };
  }
  const forceFetch = obj.forceFetch;
  ({ excludeReverseTrial: importDefault, excludeReverseTrialFromCountdown } = obj);
  let stateFromStores;
  let stateFromStoresArray;
  let stateFromStores1;
  let stateFromStoresArray1;
  let stateFromStores2;
  let closure_8;
  const items = [stateFromStores1];
  stateFromStores = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStores(items, () => stateFromStores1.getCurrentUser());
  const obj2 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const items1 = [stateFromStores2];
  stateFromStoresArray = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStoresArray(items1, () => stateFromStores2.getFractionalPremium({ excludeReverseTrial: closure_1 }));
  let obj3 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const items2 = [stateFromStores2];
  stateFromStores1 = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStores(items2, () => stateFromStores2.fetchedAllEntitlements);
  const obj4 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const items3 = [stateFromStores2];
  stateFromStoresArray1 = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStoresArray(items3, () => stateFromStores2.getUnactivatedFractionalPremiumUnits());
  const obj5 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const items4 = [stateFromStoresArray1];
  stateFromStores2 = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStores(items4, () => stateFromStoresArray1.getPremiumTypeSubscription());
  obj = {};
  let fetchingAllEntitlements = shouldFetchRedemptionEntitlements(forceFetch, stateFromStores);
  if (!fetchingAllEntitlements) {
    fetchingAllEntitlements = stateFromStores2.fetchingAllEntitlements;
  }
  if (!fetchingAllEntitlements) {
    fetchingAllEntitlements = shouldFetchApplicationEntitlements(stateFromStores);
  }
  if (!fetchingAllEntitlements) {
    const applicationIdsFetching = stateFromStores2.applicationIdsFetching;
    fetchingAllEntitlements = applicationIdsFetching.has(closure_12);
  }
  obj.isFetching = fetchingAllEntitlements;
  obj.entitlements = stateFromStoresArray;
  obj.unactivatedFractionalPremiumUnits = stateFromStoresArray1;
  obj.currentUser = stateFromStores;
  obj.premiumSubscription = stateFromStores2;
  obj.fetchedAllEntitlements = stateFromStores1;
  obj.excludeReverseTrialFromCountdown = excludeReverseTrialFromCountdown;
  const tmp12 = stateFromStores(stateFromStoresArray.useState(calculateFractionalPremiumInfo(obj)), 2);
  closure_8 = tmp12[1];
  importDefault(excludeReverseTrialFromCountdown[12])(() => {
    if (outer1_14(forceFetch, stateFromStores)) {
      let obj = forceFetch(excludeReverseTrialFromCountdown[13]);
      obj = { entitlementType: outer1_9.FRACTIONAL_REDEMPTION };
      const userEntitlements = obj.fetchUserEntitlements(obj);
    }
    if (outer1_15(stateFromStores)) {
      const userEntitlementsForApplication = forceFetch(excludeReverseTrialFromCountdown[13]).fetchUserEntitlementsForApplication(outer1_12);
      const obj3 = forceFetch(excludeReverseTrialFromCountdown[13]);
    }
  });
  const items5 = [stateFromStores, stateFromStoresArray, stateFromStores2, stateFromStoresArray1, stateFromStores1, excludeReverseTrialFromCountdown];
  const effect = stateFromStoresArray.useEffect(() => {
    let closure_0 = outer1_13({ entitlements: stateFromStoresArray, unactivatedFractionalPremiumUnits: stateFromStoresArray1, currentUser: stateFromStores, premiumSubscription: stateFromStores2, fetchedAllEntitlements: stateFromStores1, excludeReverseTrialFromCountdown });
    callback((arg0) => {
      let tmp = arg0;
      if (!obj.isEqual(arg0, closure_0)) {
        tmp = closure_0;
      }
      return tmp;
    });
  }, items5);
  return tmp12[0];
};
