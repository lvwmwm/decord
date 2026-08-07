// Module ID: 11799
// Function ID: 11800
// Name: useCanPurchaseBoosts
// Dependencies: [1903, 1905, 6800, 589, 2]
// Exports: default

// Module 11799 (useCanPurchaseBoosts)
import mergeGuildAvatar from "mergeGuildAvatar";
import { FractionalPremiumStates } from "GuildFeatures";

const require = arg1;
const result = require("calculateFractionalPremiumInfo").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [mergeGuildAvatar];
  const obj = require(589) /* initialize */;
  return importDefault(6800)().fractionalState === FractionalPremiumStates.NONE && !require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};
