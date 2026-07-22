// Module ID: 7419
// Function ID: 59627
// Name: useMaybeFetchReferralsRemaining
// Dependencies: []
// Exports: useMaybeFetchReferralsRemaining

// Module 7419 (useMaybeFetchReferralsRemaining)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ PremiumTypes: closure_6, FractionalPremiumStates: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = function useMaybeFetchReferralsRemaining(flag) {
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  let importDefault;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = arg1(dependencyMap[4]);
  const hasDiscountApplied = arg1(dependencyMap[5]).useHasDiscountApplied();
  const obj2 = arg1(dependencyMap[5]);
  const hasActiveTrial = arg1(dependencyMap[6]).useHasActiveTrial();
  const tmp4 = importDefault(dependencyMap[7])();
  let verified;
  if (null != stateFromStores) {
    verified = stateFromStores.verified;
  }
  let fetched = true === verified;
  if (fetched) {
    fetched = arg1(dependencyMap[8]).isPremiumExactly(stateFromStores, TIER_2.TIER_2);
    const obj4 = arg1(dependencyMap[8]);
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
  importDefault = fetched;
  const items1 = [fetched, flag];
  const effect = React.useEffect(() => {
    let tmp = fetched;
    if (fetched) {
      tmp = !flag;
    }
    if (tmp) {
      const result = closure_5.checkAndFetchReferralsRemaining();
    }
  }, items1);
};
