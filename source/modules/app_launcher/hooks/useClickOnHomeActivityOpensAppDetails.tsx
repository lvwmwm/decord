// Module ID: 11200
// Function ID: 87204
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [3804, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11200 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3804) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
