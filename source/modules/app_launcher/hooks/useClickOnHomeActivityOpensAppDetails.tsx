// Module ID: 11479
// Function ID: 11480
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [3993, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11479 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3993) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
