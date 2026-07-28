// Module ID: 7815
// Function ID: 61883
// Name: useMaybeFetchReferralsRemaining
// Dependencies: [31, 1850, 6192, 1852, 566, 7816, 7817, 5830, 1873, 2]
// Exports: useMaybeFetchReferralsRemaining

// Module 7815 (useMaybeFetchReferralsRemaining)
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
  const hasDiscountApplied = flag(7816).useHasDiscountApplied();
  const obj2 = flag(7816);
  const hasActiveTrial = flag(7817).useHasActiveTrial();
  const tmp4 = fetched(5830)();
  let verified;
  if (null != stateFromStores) {
    verified = stateFromStores.verified;
  }
  fetched = true === verified;
  if (fetched) {
    fetched = flag(1873).isPremiumExactly(stateFromStores, TIER_2.TIER_2);
    const obj4 = flag(1873);
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
