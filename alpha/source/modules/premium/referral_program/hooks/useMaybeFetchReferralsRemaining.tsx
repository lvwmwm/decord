// Module ID: 8517
// Function ID: 8518
// Name: useMaybeFetchReferralsRemaining
// Dependencies: [19, 1384, 7625, 504, 8518, 8519, 2]
// Exports: useMaybeFetchReferralsRemaining

// Module 8517 (useMaybeFetchReferralsRemaining)
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7625 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export function useMaybeFetchReferralsRemaining(flag) {
  let closure_1;
  let currentUser;
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  const items = [UserStore];
  const obj = flag(504);
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = flag(8518);
  const hasDiscountApplied = obj3.useHasDiscountApplied();
  let verified;
  const obj4 = flag(8519);
  const hasActiveTrial = obj4.useHasActiveTrial();
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  const tmp4 = true === verified && stateFromStores.hasPaidTier2Subscription() && !hasDiscountApplied && !hasActiveTrial;
  dependencyMap = tmp4;
  const items1 = [tmp4, flag];
  const effect = react.useEffect(() => {
    const tmp = closure_1 && !flag;
    if (tmp) {
      const result = ReferralTrialStore.checkAndFetchReferralsRemaining();
    }
  }, items1);
}
