// Module ID: 11778
// Function ID: 11779
// Name: useCanPurchaseBoosts
// Dependencies: [1874, 1876, 6769, 589, 2]
// Exports: default

// Module 11778 (useCanPurchaseBoosts)
import mergeGuildAvatar from "mergeGuildAvatar";
import { FractionalPremiumStates } from "GuildFeatures";

const require = arg1;
const result = require("calculateFractionalPremiumInfo").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [mergeGuildAvatar];
  const obj = require(589) /* initialize */;
  return importDefault(6769)().fractionalState === FractionalPremiumStates.NONE && !require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};
