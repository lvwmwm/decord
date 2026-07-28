// Module ID: 11238
// Function ID: 87323
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [3838, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11238 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3838) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
