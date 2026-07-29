// Module ID: 11262
// Function ID: 11263
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [3862, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11262 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3862) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
