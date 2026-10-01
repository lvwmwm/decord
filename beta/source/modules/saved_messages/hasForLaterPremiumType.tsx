// Module ID: 7276
// Function ID: 7277
// Name: hasForLaterPremiumType
// Dependencies: [1372, 1374, 1970, 504, 2]
// Exports: default, useHasForLaterPremiumType

// Module 7276 (hasForLaterPremiumType)
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1970 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  const currentUser = UserStore.getCurrentUser();
  const obj = PremiumTypeUtils;
  return obj.isPremium(currentUser, PremiumTypes.TIER_2);
};
export const useHasForLaterPremiumType = function useHasForLaterPremiumType() {
  let TIER_2;
  let currentUser;
  let obj = get_initialized;
  const items = [UserStore];
  return obj.useStateFromStores(items, () => {
    const obj = PremiumTypeUtils;
    return obj.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2);
  });
};
