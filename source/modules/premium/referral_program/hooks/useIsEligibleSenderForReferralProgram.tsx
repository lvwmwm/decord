// Module ID: 7418
// Function ID: 59613
// Name: useIsEligibleSenderForReferralProgram
// Dependencies: []
// Exports: useIsEligibleSenderForReferralProgram

// Module 7418 (useIsEligibleSenderForReferralProgram)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = arg1(dependencyMap[1]).useMaybeFetchReferralsRemaining(flag);
  const obj = arg1(dependencyMap[1]);
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};
