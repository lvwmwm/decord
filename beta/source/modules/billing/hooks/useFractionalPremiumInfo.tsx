// Module ID: 6813
// Function ID: 6814
// Name: useFractionalPremiumInfo
// Dependencies: [32, 19, 1372, 4494, 6814, 1074, 1374, 4421, 38, 4503, 4488, 504, 5298, 6820, 12, 2]
// Exports: default

// Module 6813 (useFractionalPremiumInfo)
import _modDef38 from "module_38" /* 38 */;
import _modDef4421 from "module_4421" /* 4421 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import BillingUtils from "BillingUtils" /* 4503 */;
import EntitlementActionCreators from "EntitlementActionCreators" /* 6820 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import EntitlementStore from "EntitlementStore" /* 6814 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
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
  const obj = { isFractionalPremiumActive: false, fractionalState: unpackModuleId.NONE, startsAt: _modDef4421(0), endsAt: _modDef4421(0), currentEntitlementId: "", currentEntitlementEndsAt: _modDef4421(0), unactivatedUnits: [], fetched: fetchedAllEntitlements };
  let tmp = unpackModuleId;
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
          if (premiumSubscription.status === constants3.PAUSED) {
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
        excludeReverseTrialFromCountdown = sourceType === metroImportAll.REVERSE_TRIAL;
      }
      const obj7 = { isFractionalPremiumActive: null != first, fractionalState: NONE, startsAt: tmp10, endsAt: tmp2ResultResult, currentEntitlementId: str, currentEntitlementEndsAt: tmp17, unactivatedUnits: unactivatedFractionalPremiumUnits, fetched: fetchedAllEntitlements };
      if (null != first) {
        tmp10 = _modDef4421(first.startsAt);
      } else {
        tmp10 = _modDef4421(0);
      }
      if (null != first) {
        const tmp2Result = _modDef4421;
        const obj4 = PremiumUtils;
        tmp2ResultResult = tmp2Result(obj4.extendDateWithUnconsumedFractionalPremium(first.endsAt, unactivatedFractionalPremiumUnits, undefined, excludeReverseTrialFromCountdown));
      } else {
        tmp2ResultResult = _modDef4421(0);
      }
      str = "";
      if (null != first) {
        str = first.id;
      }
      if (null != first) {
        tmp17 = _modDef4421(first.endsAt);
      } else {
        tmp17 = _modDef4421(0);
      }
      return obj7;
    }
    return obj;
  }
}
({ EntitlementSourceTypes: metroImportAll, EntitlementTypes: c9, SubscriptionStatusTypes: c10 } = Constants);
({ FractionalPremiumStates: unpackModuleId, PREMIUM_SUBSCRIPTION_APPLICATION: closure_12 } = PremiumConstants);
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
  let obj2 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const items = [stateFromStores1];
  const stateFromStores = obj2.useStateFromStores(items, () => stateFromStores1.getCurrentUser());
  let obj3 = forceFetch(excludeReverseTrialFromCountdown[11]);
  let tmp3 = stateFromStores2;
  const items1 = [stateFromStores2];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    const obj = { excludeReverseTrial: importDefault };
    return EntitlementStore.getFractionalPremium(obj);
  });
  const items2 = [stateFromStores2];
  const obj4 = forceFetch(excludeReverseTrialFromCountdown[11]);
  stateFromStores1 = obj4.useStateFromStores(items2, () => stateFromStores2.fetchedAllEntitlements);
  const items3 = [stateFromStores2];
  const obj5 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const stateFromStoresArray1 = obj5.useStateFromStoresArray(items3, () => stateFromStores2.getUnactivatedFractionalPremiumUnits());
  const items4 = [stateFromStoresArray1];
  const obj6 = forceFetch(excludeReverseTrialFromCountdown[11]);
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
      let tmp11 = closure_12;
      tmp10 = !applicationIdsFetching.has(closure_12);
    }
    if (tmp10) {
      let applicationIdsFetched = tmp3.applicationIdsFetched;
      tmp10 = !applicationIdsFetched.has(closure_12);
    }
    fetchingAllEntitlements = tmp10;
  }
  if (!fetchingAllEntitlements) {
    const applicationIdsFetching2 = tmp3.applicationIdsFetching;
    fetchingAllEntitlements = applicationIdsFetching2.has(closure_12);
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
      const obj2 = { entitlementType: constants.FRACTIONAL_REDEMPTION };
      const obj = EntitlementActionCreators;
      const userEntitlements = obj.fetchUserEntitlements(obj2);
    }
    let tmp11 = null != tmp2;
    if (tmp11) {
      const applicationIdsFetching = EntitlementStore.applicationIdsFetching;
      tmp11 = !applicationIdsFetching.has(closure_12);
    }
    if (tmp11) {
      const applicationIdsFetched = EntitlementStore.applicationIdsFetched;
      tmp11 = !applicationIdsFetched.has(closure_12);
    }
    if (tmp11) {
      const obj3 = EntitlementActionCreators;
      const userEntitlementsForApplication = obj3.fetchUserEntitlementsForApplication(closure_12);
    }
  });
  const items5 = [stateFromStores, stateFromStoresArray, stateFromStores2, stateFromStoresArray1, stateFromStores1, excludeReverseTrialFromCountdown];
  const effect = obj7.useEffect(() => {
    let obj = { entitlements: stateFromStoresArray, unactivatedFractionalPremiumUnits: stateFromStoresArray1, currentUser: stateFromStores, premiumSubscription: stateFromStores2, fetchedAllEntitlements: stateFromStores1, excludeReverseTrialFromCountdown };
    let closure_0 = calculateFractionalPremiumInfo(obj);
    let tmp = closure_8((arg0) => {
      let tmp = closure_0;
      const obj = forceFetch(excludeReverseTrialFromCountdown[14]);
      if (obj.isEqual(arg0, closure_0)) {
        tmp = arg0;
      }
      return tmp;
    });
  }, items5);
  return first;
};
