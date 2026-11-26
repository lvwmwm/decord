// Module ID: 14027
// Function ID: 14028
// Name: useCanUseTenureBadge
// Dependencies: [1386, 504, 13964, 2]
// Exports: useCanUseTenureBadge

// Module 14027 (useCanUseTenureBadge)
import get_initialized from "get initialized" /* 504 */;
import PremiumPerkGates from "PremiumPerkGates" /* 13964 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useCanUseTenureBadge.tsx");

export function useCanUseTenureBadge() {
  let currentUser;
  let obj = get_initialized;
  const items = [UserStore];
  return obj.useStateFromStores(items, () => {
    const obj = PremiumPerkGates;
    return obj.canUseTenureBadge(currentUser.getCurrentUser());
  });
}
