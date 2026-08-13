// Module ID: 11532
// Function ID: 11533
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4034, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11532 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(4034) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
