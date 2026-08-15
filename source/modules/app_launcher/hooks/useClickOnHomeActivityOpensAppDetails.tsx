// Module ID: 11266
// Function ID: 11267
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4066, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11266 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(4066) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
