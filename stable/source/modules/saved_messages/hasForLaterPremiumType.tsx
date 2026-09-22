// Module ID: 7958
// Function ID: 7959
// Name: hasForLaterPremiumType
// Dependencies: [1371, 1373, 1885, 504, 2]
// Exports: default, useHasForLaterPremiumType

// Module 7958 (hasForLaterPremiumType)
import initialize from "initialize" /* 504 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1885 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  const currentUser = UserStore.getCurrentUser();
  return PremiumTypeUtils.isPremium(currentUser, PremiumTypes.TIER_2);
};
export const useHasForLaterPremiumType = function useHasForLaterPremiumType() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => PremiumTypeUtils.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2));
};
