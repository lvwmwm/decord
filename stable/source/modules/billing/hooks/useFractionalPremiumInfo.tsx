// Module ID: 7578
// Function ID: 7579
// Name: useFractionalPremiumInfo
// Dependencies: [32, 19, 1383, 2052, 7579, 1072, 1385, 2042, 38, 4827, 7581, 2047, 504, 5593, 7582, 2046, 12, 2]
// Exports: default

// Module 7578 (useFractionalPremiumInfo)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1072 */;
import _modDef2042 from "module_2042" /* 2042 */;
import EntitlementTypes from "EntitlementTypes" /* 2046 */;
import PremiumUtils from "PremiumUtils" /* 2047 */;
import BillingUtils from "BillingUtils" /* 4827 */;
import EntitlementSourceTypes from "EntitlementSourceTypes" /* 7581 */;
import EntitlementActionCreators from "EntitlementActionCreators" /* 7582 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import SubscriptionStore from "SubscriptionStore" /* 2052 */;
import EntitlementStore from "EntitlementStore" /* 7579 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let c9;
function calculateFractionalPremiumInfo(isFetching) {
  let entitlements;
  let excludeReverseTrialFromCountdown;
  let fetchedAllEntitlements;
  let obj6;
  let premiumSubscription;
  let str;
  let tmp10;
  let tmp17;
  let tmp2ResultResult;
  let unactivatedFractionalPremiumUnits;
  let flag = isFetching.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  ({ entitlements, unactivatedFractionalPremiumUnits, premiumSubscription, fetchedAllEntitlements, excludeReverseTrialFromCountdown } = isFetching);
  const obj = { isFractionalPremiumActive: false, fractionalState: constants.NONE, startsAt: _modDef2042(0), endsAt: _modDef2042(0), currentEntitlementId: "", currentEntitlementEndsAt: _modDef2042(0), unactivatedUnits: [], fetched: fetchedAllEntitlements };
  let tmp = constants;
  let tmp2 = importDefault;
  const currentUser = isFetching.currentUser;
  if (flag) {
    const obj2 = { fetched: false };
    const merged = Object.assign(obj);
    return obj2;
  } else {
    if (null != currentUser) {
      const found = entitlements.filter((endsAt) => null != endsAt.endsAt && null != endsAt.startsAt);
      const sorted = found.sort((endsAt, endsAt2) => {
        let tmp2 = null != endsAt.endsAt;
        const tmp = _modDef38;
        if (tmp2) {
          tmp2 = null != endsAt2.endsAt;
        }
        tmp(tmp2, "endsAt should not be null");
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
        const arr = Array.from(entitlements.values());
        const mapped = arr.map((id) => id.id);
        const obj3 = { extra: obj6 };
        obj6 = { entitlementIds: mapped };
        const obj5 = BillingUtils;
        const result = obj5.captureBillingMessage("fractional redemption entitlements should have startsAt/endsAt", obj3);
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("fractional redemption entitlements should have startsAt/endsAt");
        throw error;
      }
      let first = sorted[0];
      if (first == null) {
        first = null;
      }
      let NONE = tmp.NONE;
      if (null != first) {
        if (null != premiumSubscription) {
          let FP_ONLY;
          if (premiumSubscription.status === SubscriptionStatusTypes.PAUSED) {
            FP_ONLY = tmp.FP_SUB_PAUSED;
          }
          NONE = FP_ONLY;
        }
        FP_ONLY = tmp.FP_ONLY;
      }
      if (excludeReverseTrialFromCountdown) {
        let sourceType;
        if (first != null) {
          sourceType = first.sourceType;
        }
        excludeReverseTrialFromCountdown = sourceType === EntitlementSourceTypes.EntitlementSourceTypes.REVERSE_TRIAL;
      }
      const obj7 = { isFractionalPremiumActive: null != first, fractionalState: NONE, startsAt: tmp10, endsAt: tmp2ResultResult, currentEntitlementId: str, currentEntitlementEndsAt: tmp17, unactivatedUnits: unactivatedFractionalPremiumUnits, fetched: fetchedAllEntitlements };
      if (null != first) {
        tmp10 = _modDef2042(first.startsAt);
      } else {
        tmp10 = _modDef2042(0);
      }
      if (null != first) {
        const tmp2Result = _modDef2042;
        const obj4 = PremiumUtils;
        tmp2ResultResult = tmp2Result(obj4.extendDateWithUnconsumedFractionalPremium(first.endsAt, unactivatedFractionalPremiumUnits, undefined, excludeReverseTrialFromCountdown));
      } else {
        tmp2ResultResult = _modDef2042(0);
      }
      str = "";
      if (null != first) {
        str = first.id;
      }
      if (null != first) {
        tmp17 = _modDef2042(first.endsAt);
      } else {
        tmp17 = _modDef2042(0);
      }
      return obj7;
    }
    return obj;
  }
}
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
({ FractionalPremiumStates: c9, PREMIUM_SUBSCRIPTION_APPLICATION: c10 } = PremiumConstants);
let result = size.fileFinishedImporting("modules/billing/hooks/useFractionalPremiumInfo.tsx");

export default function useFractionalPremiumInfo() {
  let excludeReverseTrial;
  let excludeReverseTrialFromCountdown;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { forceFetch: false, excludeReverseTrial: false, excludeReverseTrialFromCountdown: false };
  }
  const forceFetch = obj.forceFetch;
  ({ excludeReverseTrial: importDefault, excludeReverseTrialFromCountdown } = obj);
  let stateFromStores1;
  let stateFromStores2;
  let closure_8;
  let tmp = excludeReverseTrialFromCountdown;
  let obj2 = forceFetch(excludeReverseTrialFromCountdown[12]);
  const items = [stateFromStores1];
  const stateFromStores = obj2.useStateFromStores(items, () => stateFromStores1.getCurrentUser());
  let tmp3 = stateFromStores2;
  const items1 = [stateFromStores2];
  const obj3 = forceFetch(excludeReverseTrialFromCountdown[12]);
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    const obj = { excludeReverseTrial: importDefault };
    return EntitlementStore.getFractionalPremium(obj);
  });
  const items2 = [stateFromStores2];
  const obj4 = forceFetch(excludeReverseTrialFromCountdown[12]);
  stateFromStores1 = obj4.useStateFromStores(items2, () => stateFromStores2.fetchedAllEntitlements);
  const items3 = [stateFromStores2];
  const obj5 = forceFetch(excludeReverseTrialFromCountdown[12]);
  const stateFromStoresArray1 = obj5.useStateFromStoresArray(items3, () => stateFromStores2.getUnactivatedFractionalPremiumUnits());
  const items4 = [stateFromStoresArray1];
  const obj6 = forceFetch(excludeReverseTrialFromCountdown[12]);
  stateFromStores2 = obj6.useStateFromStores(items4, () => stateFromStoresArray1.getPremiumTypeSubscription());
  let fetchingAllEntitlements = null != stateFromStores;
  const useState = stateFromStoresArray.useState;
  const obj7 = stateFromStoresArray;
  const tmp8 = calculateFractionalPremiumInfo;
  if (fetchingAllEntitlements) {
    fetchingAllEntitlements = !tmp3.fetchingAllEntitlements;
  }
  if (fetchingAllEntitlements) {
    let fetchedAllEntitlements = tmp3.fetchedAllEntitlements;
    let tmp9 = !fetchedAllEntitlements;
    if (fetchedAllEntitlements) {
      tmp9 = forceFetch;
    }
    fetchingAllEntitlements = tmp9;
  }
  if (!fetchingAllEntitlements) {
    fetchingAllEntitlements = tmp3.fetchingAllEntitlements;
  }
  if (!fetchingAllEntitlements) {
    let tmp10 = null != stateFromStores;
    if (tmp10) {
      let applicationIdsFetching = tmp3.applicationIdsFetching;
      let tmp11 = closure_10;
      tmp10 = !applicationIdsFetching.has(closure_10);
    }
    if (tmp10) {
      let applicationIdsFetched = tmp3.applicationIdsFetched;
      tmp10 = !applicationIdsFetched.has(closure_10);
    }
    fetchingAllEntitlements = tmp10;
  }
  if (!fetchingAllEntitlements) {
    const applicationIdsFetching2 = tmp3.applicationIdsFetching;
    fetchingAllEntitlements = applicationIdsFetching2.has(closure_10);
  }
  const tmp14 = stateFromStores(useState(tmp8({ isFetching: fetchingAllEntitlements, entitlements: stateFromStoresArray, unactivatedFractionalPremiumUnits: stateFromStoresArray1, currentUser: stateFromStores, premiumSubscription: stateFromStores2, fetchedAllEntitlements: stateFromStores1, excludeReverseTrialFromCountdown })), 2);
  closure_8 = tmp14[1];
  const first = tmp14[0];
  require("useMountEffect")(() => {
    let tmp3 = null != stateFromStores;
    const tmp = forceFetch;
    const tmp2 = stateFromStores;
    if (tmp3) {
      tmp3 = !EntitlementStore.fetchingAllEntitlements;
    }
    if (tmp3) {
      const fetchedAllEntitlements = EntitlementStore.fetchedAllEntitlements;
      let tmp6 = !fetchedAllEntitlements;
      if (fetchedAllEntitlements) {
        tmp6 = tmp;
      }
      tmp3 = tmp6;
    }
    if (tmp3) {
      const obj = { entitlementType: EntitlementTypes.EntitlementTypes.FRACTIONAL_REDEMPTION };
      const fetchUserEntitlements = EntitlementActionCreators.fetchUserEntitlements;
      EntitlementActionCreators;
      const userEntitlements = fetchUserEntitlements(obj);
    }
    let tmp11 = null != tmp2;
    if (tmp11) {
      const applicationIdsFetching = EntitlementStore.applicationIdsFetching;
      tmp11 = !applicationIdsFetching.has(authStore);
    }
    if (tmp11) {
      const applicationIdsFetched = EntitlementStore.applicationIdsFetched;
      tmp11 = !applicationIdsFetched.has(authStore);
    }
    if (tmp11) {
      const obj2 = EntitlementActionCreators;
      const userEntitlementsForApplication = obj2.fetchUserEntitlementsForApplication(authStore);
    }
  });
  const items5 = [stateFromStores, stateFromStoresArray, stateFromStores2, stateFromStoresArray1, stateFromStores1, excludeReverseTrialFromCountdown];
  const effect = obj7.useEffect(() => {
    let obj = { entitlements: stateFromStoresArray, unactivatedFractionalPremiumUnits: stateFromStoresArray1, currentUser: stateFromStores, premiumSubscription: stateFromStores2, fetchedAllEntitlements: stateFromStores1, excludeReverseTrialFromCountdown };
    let closure_0 = calculateFractionalPremiumInfo(obj);
    let tmp = closure_8((arg0) => {
      let tmp = closure_0;
      const obj = forceFetch(excludeReverseTrialFromCountdown[16]);
      if (obj.isEqual(arg0, closure_0)) {
        tmp = arg0;
      }
      return tmp;
    });
  }, items5);
  return first;
};
