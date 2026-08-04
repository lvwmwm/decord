// Module ID: 11388
// Function ID: 11389
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [3958, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11388 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3958) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
