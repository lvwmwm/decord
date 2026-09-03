// Module ID: 12305
// Function ID: 12306
// Name: useCanPurchaseBoosts
// Dependencies: [1921, 1923, 7151, 586, 2]
// Exports: default

// Module 12305 (useCanPurchaseBoosts)
import initialize from "initialize" /* 586 */;
import calculateFractionalPremiumInfoDefault from "calculateFractionalPremiumInfo" /* 7151 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import { FractionalPremiumStates } from "GuildFeatures" /* 1923 */;

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
