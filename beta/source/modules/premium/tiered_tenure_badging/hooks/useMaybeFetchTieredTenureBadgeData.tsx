// Module ID: 13728
// Function ID: 13729
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1376, 1378, 558, 568, 504, 11411, 8461, 5203, 2]

// Module 13728 (useMaybeFetchTieredTenureBadgeData)
import useMountEffectDefault from "useMountEffect" /* 5203 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8461 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

const require = fn;
const PremiumTypes = fn(1378).PremiumTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(568).c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(568);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  const tmpResult = stateFromStores(504);
  const isPremiumSubscriber = stateFromStores(11411).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === isPremiumSubscriber) {
      let tmp9 = cResult[4];
    }
    isPremiumSubscriber(5203)(tmp9);
  }
  const fn2 = function c() {
    let id;
    if (stateFromStores != null) {
      id = tmp.id;
    }
    if (tmp3) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  };
  cResult[2] = stateFromStores;
  cResult[3] = isPremiumSubscriber;
  cResult[4] = fn2;
  tmp9 = fn2;
}) : (() => {
  const items = [UserStore];
  _require = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require("initialize");
  importDefault = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountEffectDefault(() => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (tmp3) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  });
});
