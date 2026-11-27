// Module ID: 13502
// Function ID: 13503
// Name: useCanPurchaseBoosts
// Dependencies: [1387, 1389, 6358, 504, 2]
// Exports: default

// Module 13502 (useCanPurchaseBoosts)
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1389 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 6358 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

let currentUser;

const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
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
};
