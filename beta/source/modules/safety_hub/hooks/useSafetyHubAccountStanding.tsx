// Module ID: 12423
// Function ID: 12424
// Name: useSafetyHubAccountStanding
// Dependencies: [7835, 504, 2]
// Exports: useSafetyHubAccountStanding

// Module 12423 (useSafetyHubAccountStanding)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7835 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export function useSafetyHubAccountStanding() {
  let accountStanding;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => accountStanding.getAccountStanding());
}
