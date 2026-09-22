// Module ID: 12638
// Function ID: 12639
// Name: useCanPurchaseBoosts
// Dependencies: [1371, 1373, 7496, 504, 2]
// Exports: default

// Module 12638 (useCanPurchaseBoosts)
import initialize from "initialize" /* 504 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7496 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const FractionalPremiumStates = fn(1373).FractionalPremiumStates;
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
