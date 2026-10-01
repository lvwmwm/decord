// Module ID: 7501
// Function ID: 7502
// Name: useMaybeFetchReferralsRemaining
// Dependencies: [19, 1372, 6872, 1374, 504, 7502, 7503, 6813, 1970, 2]
// Exports: useMaybeFetchReferralsRemaining

// Module 7501 (useMaybeFetchReferralsRemaining)
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6872 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
({ PremiumTypes: metroRequire, FractionalPremiumStates: metroImportDefault } = PremiumConstants);
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = function useMaybeFetchReferralsRemaining(flag) {
  let currentUser;
  if (flag === undefined) {
    flag = false;
  }
  let fetched;
  let tmp = flag;
  const items = [UserStore];
  const obj = flag(504);
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = flag(7502);
  const hasDiscountApplied = obj2.useHasDiscountApplied();
  const obj3 = flag(7503);
  const hasActiveTrial = obj3.useHasActiveTrial();
  const tmp6 = fetched(6813)();
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  fetched = true === verified;
  if (fetched) {
    const tmpResult = tmp(1970);
    fetched = tmpResult.isPremiumExactly(stateFromStores, TIER_2.TIER_2);
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
  const effect = react.useEffect(() => {
    const tmp = fetched && !flag;
    if (tmp) {
      const result = ReferralTrialStore.checkAndFetchReferralsRemaining();
    }
  }, items1);
};
