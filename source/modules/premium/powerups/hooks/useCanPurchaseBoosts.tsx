// Module ID: 11723
// Function ID: 11724
// Name: useCanPurchaseBoosts
// Dependencies: [1922, 1924, 5361, 589, 2]
// Exports: default

// Module 11723 (useCanPurchaseBoosts)
import initialize from "initialize" /* 589 */;
import calculateFractionalPremiumInfoDefault from "calculateFractionalPremiumInfo" /* 5361 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import { FractionalPremiumStates } from "GuildFeatures" /* 1924 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [closure_3];
  const obj = initialize;
  return calculateFractionalPremiumInfoDefault().fractionalState === FractionalPremiumStates.NONE && !initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};
