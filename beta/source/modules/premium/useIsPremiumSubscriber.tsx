// Module ID: 11411
// Function ID: 11412
// Name: useIsPremiumSubscriber
// Dependencies: [1376, 1378, 558, 568, 1973, 504, 2]

// Module 11411 (useIsPremiumSubscriber)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1973 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const PremiumTypes = fn(1378).PremiumTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let TIER_2 = arg0;
  const cResult = TIER_2(568).c(3);
  if (undefined === arg0) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== TIER_2) {
    const fn = function o() {
      const currentUser = UserStore.getCurrentUser();
      return PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2);
    };
    cResult[1] = TIER_2;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = TIER_2(568);
  return TIER_2(504).useStateFromStores(first, tmp7);
}) : (() => {
  let TIER_2 = arg0;
  if (arg0 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const items = [UserStore];
  return TIER_2(504).useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    return PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2);
  });
});
