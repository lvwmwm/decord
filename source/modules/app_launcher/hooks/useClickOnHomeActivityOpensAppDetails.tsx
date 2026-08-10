// Module ID: 11476
// Function ID: 11477
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [3974, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11476 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3974) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
