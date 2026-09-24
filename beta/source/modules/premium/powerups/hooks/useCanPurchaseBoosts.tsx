// Module ID: 12704
// Function ID: 12705
// Name: useCanPurchaseBoosts
// Dependencies: [1376, 1378, 558, 568, 7669, 504, 2]

// Module 12704 (useCanPurchaseBoosts)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7669 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const FractionalPremiumStates = fn(1378).FractionalPremiumStates;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      currentUser = currentUser.getCurrentUser();
      let isPremiumGroupMemberResult;
      if (currentUser != null) {
        isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
      }
      return true === isPremiumGroupMemberResult;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = initialize;
  return useFractionalPremiumInfoDefault().fractionalState === FractionalPremiumStates.NONE && !initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  return useFractionalPremiumInfoDefault().fractionalState === FractionalPremiumStates.NONE && !initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
});
