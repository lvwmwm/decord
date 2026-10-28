// Module ID: 8461
// Function ID: 8462
// Name: useMaybeFetchReferralsRemaining
// Dependencies: [19, 1389, 7597, 558, 576, 504, 8462, 8463, 2]

// Module 8461 (useMaybeFetchReferralsRemaining)
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7597 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchReferralsRemaining(arg0) {
  let closure_0;
  let closure_1;
  let currentUser;
  let tmp5;
  let tmp6;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(10);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult3 = tmp(8462);
  const hasDiscountApplied = tmpResult3.useHasDiscountApplied();
  const tmpResult4 = tmp(8463);
  const hasActiveTrial = tmpResult4.useHasActiveTrial();
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === hasActiveTrial) {
      let tmp10;
      if (cResult[4] === hasDiscountApplied) {
        tmp10 = cResult[5];
      }
      dependencyMap = tmp10;
      if (cResult[6] === (undefined !== arg0 && arg0)) {
        let tmp13;
        let tmp14;
        if (cResult[7] === tmp10) {
          tmp13 = cResult[8];
          tmp14 = cResult[9];
        }
        const effect = react.useEffect(tmp13, tmp14);
      }
      const fn2 = function b() {
        const tmp = closure_1 && !closure_0;
        if (tmp) {
          const result = ReferralTrialStore.checkAndFetchReferralsRemaining();
        }
      };
      const items1 = [tmp10, undefined !== arg0 && arg0];
      cResult[6] = undefined !== arg0 && arg0;
      cResult[7] = tmp10;
      cResult[8] = fn2;
      cResult[9] = items1;
      tmp14 = items1;
      tmp13 = fn2;
    }
  }
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  const tmp12 = true === verified && stateFromStores.hasPaidTier2Subscription() && !hasDiscountApplied && !hasActiveTrial;
  cResult[2] = stateFromStores;
  cResult[3] = hasActiveTrial;
  cResult[4] = hasDiscountApplied;
  cResult[5] = tmp12;
  tmp10 = tmp12;
}) : (function useMaybeFetchReferralsRemaining() {
  let closure_1;
  let currentUser;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  const items = [UserStore];
  const obj = flag(504);
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = flag(8462);
  const hasDiscountApplied = obj3.useHasDiscountApplied();
  let verified;
  const obj4 = flag(8463);
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
});
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = tmp2;
