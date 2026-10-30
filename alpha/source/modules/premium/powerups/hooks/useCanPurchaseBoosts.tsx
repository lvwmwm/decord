// Module ID: 14031
// Function ID: 14032
// Name: useCanPurchaseBoosts
// Dependencies: [1384, 1386, 7572, 504, 2]
// Exports: default

// Module 14031 (useCanPurchaseBoosts)
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7572 */;
import UserStore from "UserStore" /* 1384 */;
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
