// Module ID: 12368
// Function ID: 96122
// Name: MAX_REFERRALS_SENT
// Dependencies: [31, 1849, 6689, 566, 7889, 2]
// Exports: useReferralProgramBannerDetails

// Module 12368 (MAX_REFERRALS_SENT)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx");

export const MAX_REFERRALS_SENT = 3;
export const useReferralProgramBannerDetails = function useReferralProgramBannerDetails() {
  let obj = stateFromStoresArray(566);
  const items = [closure_4];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => outer1_4.getSentUserIds());
  const items1 = [_isNativeReflectConstruct];
  const items2 = [stateFromStoresArray];
  const stateFromStoresArray1 = stateFromStoresArray(566).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((arg0) => outer2_3.getUser(arg0));
    return mapped.filter((arg0) => null != arg0);
  });
  const effect = React.useEffect(() => {
    const item = stateFromStoresArray.forEach((arg0) => {
      const user = stateFromStoresArray(outer2_1[4]).getUser(arg0);
    });
  }, items2);
  obj = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length };
  const obj2 = stateFromStoresArray(566);
  const items3 = [closure_4];
  obj.refreshAt = stateFromStoresArray(566).useStateFromStores(items3, () => outer1_4.getRefreshAt());
  return obj;
};
