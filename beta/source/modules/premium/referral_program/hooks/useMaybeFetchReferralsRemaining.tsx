// Module ID: 8321
// Function ID: 8322
// Name: useMaybeFetchReferralsRemaining
// Dependencies: [19, 1376, 7699, 1378, 558, 568, 504, 8322, 8323, 7637, 1973, 2]

// Module 8321 (useMaybeFetchReferralsRemaining)
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7637 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7699 */;

const require = globalThis.__r;

const require = fn;
const PremiumConstants = fn(1378);
({ PremiumTypes: metroRequire, FractionalPremiumStates: closure_7 } = PremiumConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(11);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function f() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  const tmpResult = require("initialize");
  const hasDiscountApplied = require("PremiumSubscriptionOfferUtil").useHasDiscountApplied();
  const tmpResult4 = require("PremiumSubscriptionOfferUtil");
  const hasActiveTrial = require("PremiumSubscriptionTrialUtil").useHasActiveTrial();
  const tmp11 = useFractionalPremiumInfoDefault();
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === tmp11) {
      if (cResult[4] === hasActiveTrial) {
        if (cResult[5] === hasDiscountApplied) {
          let tmp12 = cResult[6];
        }
        importDefault = tmp12;
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp12) {
            let tmp16 = cResult[9];
            let tmp17 = cResult[10];
          }
          const effect = noop.useEffect(tmp16, tmp17);
        }
        const fn2 = function y() {
          let tmp = closure_1;
          if (closure_1) {
            tmp = !closure_0;
          }
          if (tmp) {
            const result = ReferralTrialStore.checkAndFetchReferralsRemaining();
          }
        };
        const items1 = [tmp12, tmp4];
        cResult[7] = tmp4;
        cResult[8] = tmp12;
        cResult[9] = fn2;
        cResult[10] = items1;
        tmp17 = items1;
        tmp16 = fn2;
      }
    }
  }
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  let fetched = true === verified;
  if (fetched) {
    fetched = tmp(1973).isPremiumExactly(stateFromStores, closure_6.TIER_2);
    const tmpResult6 = tmp(1973);
  }
  if (fetched) {
    fetched = tmp11.fetched;
  }
  if (fetched) {
    fetched = tmp11.fractionalState !== constants.FP_ONLY;
  }
  if (fetched) {
    fetched = !hasDiscountApplied;
  }
  if (fetched) {
    fetched = !hasActiveTrial;
  }
  cResult[2] = stateFromStores;
  cResult[3] = tmp11;
  cResult[4] = hasActiveTrial;
  cResult[5] = hasDiscountApplied;
  cResult[6] = fetched;
  tmp12 = fetched;
}) : (() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let fetched;
  const items = [UserStore];
  const stateFromStores = flag(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = flag(504);
  let tmp = flag;
  const hasDiscountApplied = flag(8322).useHasDiscountApplied();
  const obj2 = flag(8322);
  const hasActiveTrial = flag(8323).useHasActiveTrial();
  const tmp6 = fetched(7637)();
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  fetched = true === verified;
  if (fetched) {
    fetched = tmp(1973).isPremiumExactly(stateFromStores, closure_6.TIER_2);
    const tmpResult = tmp(1973);
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
});
