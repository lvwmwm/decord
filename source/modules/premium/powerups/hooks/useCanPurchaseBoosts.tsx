// Module ID: 11537
// Function ID: 89865
// Name: useCanPurchaseBoosts
// Dependencies: [1849, 1851, 6636, 566, 2]
// Exports: default

// Module 11537 (useCanPurchaseBoosts)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FractionalPremiumStates } from "GuildFeatures";

const require = arg1;
const result = require("calculateFractionalPremiumInfo").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [_isNativeReflectConstruct];
  const obj = require(566) /* initialize */;
  return importDefault(6636)().fractionalState === FractionalPremiumStates.NONE && !require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_3.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (null != currentUser) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};
