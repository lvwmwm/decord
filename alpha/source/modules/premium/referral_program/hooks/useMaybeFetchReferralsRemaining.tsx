// Module ID: 7696
// Function ID: 7697
// Name: useMaybeFetchReferralsRemaining
// Dependencies: [19, 1372, 7068, 1374, 504, 7697, 7698, 7009, 1970, 2]
// Exports: useMaybeFetchReferralsRemaining

// Module 7696 (useMaybeFetchReferralsRemaining)
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7068 */;

const require = fn;
const PremiumConstants = fn(1374);
({ PremiumTypes: metroRequire, FractionalPremiumStates: closure_7 } = PremiumConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = function useMaybeFetchReferralsRemaining(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let fetched;
  const items = [UserStore];
  const stateFromStores = flag(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = flag(504);
  let tmp = flag;
  const hasDiscountApplied = flag(7697).useHasDiscountApplied();
  const obj2 = flag(7697);
  const hasActiveTrial = flag(7698).useHasActiveTrial();
  const tmp6 = fetched(7009)();
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  fetched = true === verified;
  if (fetched) {
    fetched = tmp(1970).isPremiumExactly(stateFromStores, TIER_2.TIER_2);
    const tmpResult = tmp(1970);
  }
  if (fetched) {
    fetched = tmp6.fetched;
  }
  if (fetched) {
    fetched = tmp6.fractionalState !== constants.FP_ONLY;
  }
  if (fetched) {
    fetched = !hasDiscountApplied;
  }
  if (fetched) {
    fetched = !hasActiveTrial;
  }
  const items1 = [fetched, flag];
  const effect = noop.useEffect(() => {
    let tmp = fetched;
    if (fetched) {
      tmp = !flag;
    }
    if (tmp) {
      const result = ReferralTrialStore.checkAndFetchReferralsRemaining();
    }
  }, items1);
};
