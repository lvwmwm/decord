// Module ID: 13396
// Function ID: 13397
// Name: useCanPurchaseBoosts
// Dependencies: [1386, 1388, 8119, 504, 2]
// Exports: default

// Module 13396 (useCanPurchaseBoosts)
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 8119 */;
import UserStore from "UserStore" /* 1386 */;
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
