// Module ID: 15318
// Function ID: 15319
// Name: useReferralProgramBannerDetails
// Dependencies: [19, 1383, 7632, 504, 8752, 2]
// Exports: useReferralProgramBannerDetails

// Module 15318 (useReferralProgramBannerDetails)
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7632 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx");

export const MAX_REFERRALS_SENT = 3;
export function useReferralProgramBannerDetails() {
  let items3;
  let obj4;
  let stateFromStoresArray;
  let obj = stateFromStoresArray(504);
  const items = [ReferralTrialStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => authStore.getSentUserIds());
  const items1 = [UserStore];
  const items2 = [stateFromStoresArray];
  const obj2 = stateFromStoresArray(504);
  const stateFromStoresArray1 = obj2.useStateFromStoresArray(items1, () => {
    let user;
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  });
  const effect = react.useEffect(() => {
    const item = stateFromStoresArray.forEach((item) => {
      const obj = stateFromStoresArray(closure_1_1[4]);
      const user = obj.getUser(item);
    });
  }, items2);
  const obj3 = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length, refreshAt: obj4.useStateFromStores(items3, () => authStore.getRefreshAt()) };
  items3 = [ReferralTrialStore];
  obj4 = stateFromStoresArray(504);
  return obj3;
}
