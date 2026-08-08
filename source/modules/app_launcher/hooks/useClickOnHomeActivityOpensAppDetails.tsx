// Module ID: 11475
// Function ID: 11476
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [3974, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11475 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3974) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
