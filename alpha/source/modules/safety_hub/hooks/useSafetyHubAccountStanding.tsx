// Module ID: 12141
// Function ID: 12142
// Name: useSafetyHubAccountStanding
// Dependencies: [8706, 504, 2]
// Exports: useSafetyHubAccountStanding

// Module 12141 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8706 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
};
