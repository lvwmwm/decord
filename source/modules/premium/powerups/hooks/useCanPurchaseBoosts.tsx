// Module ID: 11865
// Function ID: 11866
// Name: useCanPurchaseBoosts
// Dependencies: [1903, 1905, 6860, 589, 2]
// Exports: default

// Module 11865 (useCanPurchaseBoosts)
import mergeGuildAvatar from "mergeGuildAvatar";
import { FractionalPremiumStates } from "GuildFeatures";

const require = arg1;
const result = require("calculateFractionalPremiumInfo").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [mergeGuildAvatar];
  const obj = require(589) /* initialize */;
  return importDefault(6860)().fractionalState === FractionalPremiumStates.NONE && !require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};
