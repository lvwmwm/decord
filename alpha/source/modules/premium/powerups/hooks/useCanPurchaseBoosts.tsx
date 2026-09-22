// Module ID: 12763
// Function ID: 12764
// Name: useCanPurchaseBoosts
// Dependencies: [1372, 1374, 7638, 504, 2]
// Exports: default

// Module 12763 (useCanPurchaseBoosts)
import initialize from "initialize" /* 504 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7638 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const FractionalPremiumStates = fn(1374).FractionalPremiumStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [UserStore];
  return useFractionalPremiumInfoDefault().fractionalState === FractionalPremiumStates.NONE && !initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};
