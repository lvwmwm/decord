// Module ID: 12759
// Function ID: 12760
// Name: useCanPurchaseBoosts
// Dependencies: [1372, 1374, 7635, 504, 2]
// Exports: default

// Module 12759 (useCanPurchaseBoosts)
import initialize from "initialize" /* 504 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7635 */;
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
