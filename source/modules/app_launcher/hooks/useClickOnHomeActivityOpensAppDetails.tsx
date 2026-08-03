// Module ID: 11387
// Function ID: 11388
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [3928, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11387 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3928) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
