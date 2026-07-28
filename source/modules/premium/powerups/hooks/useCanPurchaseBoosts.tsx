// Module ID: 11573
// Function ID: 89983
// Name: useCanPurchaseBoosts
// Dependencies: [1850, 1852, 5830, 566, 2]
// Exports: default

// Module 11573 (useCanPurchaseBoosts)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FractionalPremiumStates } from "GuildFeatures";

const require = arg1;
const result = require("calculateFractionalPremiumInfo").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [_isNativeReflectConstruct];
  const obj = require(566) /* initialize */;
  return importDefault(5830)().fractionalState === FractionalPremiumStates.NONE && !require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_3.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (null != currentUser) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};
