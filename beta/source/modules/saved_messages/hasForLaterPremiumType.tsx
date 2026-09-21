// Module ID: 8104
// Function ID: 8105
// Name: hasForLaterPremiumType
// Dependencies: [1376, 1378, 1973, 558, 568, 504, 2]
// Exports: default

// Module 8104 (hasForLaterPremiumType)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1973 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const PremiumTypes = fn(1378).PremiumTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  const currentUser = UserStore.getCurrentUser();
  return PremiumTypeUtils.isPremium(currentUser, PremiumTypes.TIER_2);
};
export const useHasForLaterPremiumType = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return PremiumTypeUtils.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => PremiumTypeUtils.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2));
});
