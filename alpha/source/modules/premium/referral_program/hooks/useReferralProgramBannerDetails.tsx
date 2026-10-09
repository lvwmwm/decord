// Module ID: 13650
// Function ID: 13651
// Name: useReferralProgramBannerDetails
// Dependencies: [19, 1390, 7168, 558, 576, 504, 8289, 2]

// Module 13650 (useReferralProgramBannerDetails)
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7168 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useReferralProgramBannerDetails() {
  let stateFromStoresArray;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  let obj = stateFromStoresArray(576);
  const cResult = obj.c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReferralTrialStore];
    const fn = function n() {
      return authStore.getSentUserIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = stateFromStoresArray(504);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[2] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== stateFromStoresArray) {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
    cResult[3] = stateFromStoresArray;
    cResult[4] = S;
    tmp9 = S;
  } else {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
  }
  const tmpResult3 = stateFromStoresArray(504);
  const stateFromStoresArray1 = tmpResult3.useStateFromStoresArray(tmp7, tmp9);
  if (cResult[5] !== stateFromStoresArray) {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
    const items2 = [stateFromStoresArray];
    cResult[5] = stateFromStoresArray;
    cResult[6] = tmp13;
    cResult[7] = items2;
    tmp12 = items2;
    tmp11 = tmp13;
  } else {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
    tmp12 = cResult[7];
  }
  const effect = react.useEffect(tmp11, tmp12);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
    const items3 = [ReferralTrialStore];
    const fn2 = function v() {
      return authStore.getRefreshAt();
    };
    cResult[8] = items3;
    cResult[9] = fn2;
    tmp16 = fn2;
    tmp15 = items3;
  } else {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
    tmp16 = cResult[9];
  }
  const tmpResult4 = stateFromStoresArray(504);
  const stateFromStores = tmpResult4.useStateFromStores(tmp15, tmp16);
  if (cResult[10] === 3 === stateFromStoresArray.length) {
    class S {
      constructor() {
        mapped = closure_0.map((item) => user.getUser(item));
        return mapped.filter((item) => null != item);
      }
    }
  }
  const obj2 = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length, refreshAt: stateFromStores };
  cResult[10] = 3 === stateFromStoresArray.length;
  cResult[11] = stateFromStores;
  cResult[12] = stateFromStoresArray1;
  cResult[13] = obj2;
}) : (function useReferralProgramBannerDetails() {
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
      const obj = stateFromStoresArray(closure_1_1[6]);
      const user = obj.getUser(item);
    });
  }, items2);
  const obj3 = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length, refreshAt: obj4.useStateFromStores(items3, () => authStore.getRefreshAt()) };
  items3 = [ReferralTrialStore];
  obj4 = stateFromStoresArray(504);
  return obj3;
});
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx");

export const MAX_REFERRALS_SENT = 3;
export const useReferralProgramBannerDetails = tmp2;
