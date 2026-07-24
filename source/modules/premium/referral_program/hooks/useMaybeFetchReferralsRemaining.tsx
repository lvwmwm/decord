// Module ID: 7832
// Function ID: 61820
// Name: useMaybeFetchReferralsRemaining
// Dependencies: [31, 1849, 6689, 1851, 566, 7833, 7834, 6636, 1872, 2]
// Exports: useMaybeFetchReferralsRemaining

// Module 7832 (useMaybeFetchReferralsRemaining)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";

let closure_6;
let closure_7;
const require = arg1;
({ PremiumTypes: closure_6, FractionalPremiumStates: closure_7 } = GuildFeatures);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = function useMaybeFetchReferralsRemaining(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let fetched;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = flag(566).useStateFromStores(items, () => outer1_4.getCurrentUser());
  const obj = flag(566);
  const hasDiscountApplied = flag(7833).useHasDiscountApplied();
  const obj2 = flag(7833);
  const hasActiveTrial = flag(7834).useHasActiveTrial();
  const tmp4 = fetched(6636)();
  let verified;
  if (null != stateFromStores) {
    verified = stateFromStores.verified;
  }
  fetched = true === verified;
  if (fetched) {
    fetched = flag(1872).isPremiumExactly(stateFromStores, TIER_2.TIER_2);
    const obj4 = flag(1872);
  }
  if (fetched) {
    fetched = tmp4.fetched;
  }
  if (fetched) {
    fetched = tmp4.fractionalState !== constants.FP_ONLY;
  }
  if (fetched) {
    fetched = !hasDiscountApplied;
  }
  if (fetched) {
    fetched = !hasActiveTrial;
  }
  const items1 = [fetched, flag];
  const effect = React.useEffect(() => {
    let tmp = fetched;
    if (fetched) {
      tmp = !flag;
    }
    if (tmp) {
      const result = outer1_5.checkAndFetchReferralsRemaining();
    }
  }, items1);
};
