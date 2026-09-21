// Module ID: 12137
// Function ID: 12138
// Name: useSafetyHubAccountStanding
// Dependencies: [8702, 504, 2]
// Exports: useSafetyHubAccountStanding

// Module 12137 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8702 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};
