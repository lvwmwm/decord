// Module ID: 12328
// Function ID: 12329
// Name: useSafetyHubAccountStanding
// Dependencies: [7716, 504, 2]
// Exports: useSafetyHubAccountStanding

// Module 12328 (useSafetyHubAccountStanding)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 7716 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export function useSafetyHubAccountStanding() {
  let accountStanding;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => accountStanding.getAccountStanding());
}
