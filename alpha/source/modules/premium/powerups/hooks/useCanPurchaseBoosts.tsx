// Module ID: 13306
// Function ID: 13307
// Name: useCanPurchaseBoosts
// Dependencies: [1388, 1390, 8000, 504, 2]
// Exports: default

// Module 13306 (useCanPurchaseBoosts)
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 8000 */;
import UserStore from "UserStore" /* 1388 */;
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
