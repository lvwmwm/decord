// Module ID: 12249
// Function ID: 93943
// Name: MAX_REFERRALS_SENT
// Dependencies: []
// Exports: useReferralProgramBannerDetails

// Module 12249 (MAX_REFERRALS_SENT)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx");

export const MAX_REFERRALS_SENT = 3;
export const useReferralProgramBannerDetails = function useReferralProgramBannerDetails() {
  let obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => authStore.getSentUserIds());
  const arg1 = stateFromStoresArray;
  const items1 = [closure_3];
  const items2 = [stateFromStoresArray];
  const stateFromStoresArray1 = arg1(dependencyMap[3]).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((arg0) => user.getUser(arg0));
    return mapped.filter((arg0) => null != arg0);
  });
  const effect = React.useEffect(() => {
    const item = stateFromStoresArray.forEach((arg0) => {
      const user = callback(closure_1[4]).getUser(arg0);
    });
  }, items2);
  obj = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length };
  const obj2 = arg1(dependencyMap[3]);
  const items3 = [closure_4];
  obj.refreshAt = arg1(dependencyMap[3]).useStateFromStores(items3, () => authStore.getRefreshAt());
  return obj;
};
