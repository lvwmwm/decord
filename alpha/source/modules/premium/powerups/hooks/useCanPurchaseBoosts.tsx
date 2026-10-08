// Module ID: 12258
// Function ID: 12259
// Name: useCanPurchaseBoosts
// Dependencies: [1389, 1391, 558, 576, 7097, 504, 2]

// Module 12258 (useCanPurchaseBoosts)
import react from "react" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7097 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser;

let tmp;
const get_initialized = tmp(504);
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanPurchaseBoosts() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const fractionalState = useFractionalPremiumInfoDefault().fractionalState;
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
  const tmpResult = get_initialized;
  const tmp7 = fractionalState === FractionalPremiumStates.NONE && !tmpResult.useStateFromStores(tmp4, tmp5);
  return tmp7;
}) : (function useCanPurchaseBoosts() {
  const fractionalState = useFractionalPremiumInfoDefault().fractionalState;
  const items = [UserStore];
  const obj = get_initialized;
  const tmp = fractionalState === FractionalPremiumStates.NONE && !obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
  return tmp;
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default tmp2;
