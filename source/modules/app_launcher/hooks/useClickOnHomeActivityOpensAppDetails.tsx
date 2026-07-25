// Module ID: 11199
// Function ID: 87199
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [3804, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11199 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3804) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
