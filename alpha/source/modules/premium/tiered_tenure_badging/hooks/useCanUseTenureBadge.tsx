// Module ID: 13932
// Function ID: 13933
// Name: useCanUseTenureBadge
// Dependencies: [1388, 504, 13869, 2]
// Exports: useCanUseTenureBadge

// Module 13932 (useCanUseTenureBadge)
import get_initialized from "get initialized" /* 504 */;
import PremiumPerkGates from "PremiumPerkGates" /* 13869 */;
import UserStore from "UserStore" /* 1388 */;
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
