// Module ID: 11360
// Function ID: 11361
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [3928, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11360 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3928) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
