// Module ID: 11534
// Function ID: 89832
// Name: useCanPurchaseBoosts
// Dependencies: [1850, 1852, 5820, 566, 2]
// Exports: default

// Module 11534 (useCanPurchaseBoosts)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FractionalPremiumStates } from "GuildFeatures";

const require = arg1;
const result = require("calculateFractionalPremiumInfo").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [_isNativeReflectConstruct];
  const obj = require(566) /* initialize */;
  return importDefault(5820)().fractionalState === FractionalPremiumStates.NONE && !require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_3.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (null != currentUser) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};
