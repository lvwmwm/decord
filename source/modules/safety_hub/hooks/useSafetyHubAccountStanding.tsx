// Module ID: 11033
// Function ID: 85889
// Name: useSafetyHubAccountStanding
// Dependencies: [11026, 566, 2]
// Exports: useSafetyHubAccountStanding

// Module 11033 (useSafetyHubAccountStanding)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = function useSafetyHubAccountStanding() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getAccountStanding());
};
