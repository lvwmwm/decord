// Module ID: 14081
// Function ID: 14082
// Name: useSafetyHubAccountStanding
// Dependencies: [8165, 504, 2]
// Exports: useSafetyHubAccountStanding

// Module 14081 (useSafetyHubAccountStanding)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8165 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export function useSafetyHubAccountStanding() {
  let accountStanding;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => accountStanding.getAccountStanding());
}
