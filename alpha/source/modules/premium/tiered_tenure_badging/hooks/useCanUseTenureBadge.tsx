// Module ID: 15177
// Function ID: 15178
// Name: useCanUseTenureBadge
// Dependencies: [1385, 504, 10015, 2]
// Exports: useCanUseTenureBadge

// Module 15177 (useCanUseTenureBadge)
import get_initialized from "get initialized" /* 504 */;
import PremiumPerkGates from "PremiumPerkGates" /* 10015 */;
import UserStore from "UserStore" /* 1385 */;
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
