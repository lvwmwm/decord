// Module ID: 14184
// Function ID: 14185
// Name: useSafetyHubAccountStanding
// Dependencies: [8231, 504, 2]
// Exports: useSafetyHubAccountStanding

// Module 14184 (useSafetyHubAccountStanding)
import get_initialized from "get initialized" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8231 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export function useSafetyHubAccountStanding() {
  let accountStanding;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => accountStanding.getAccountStanding());
}
