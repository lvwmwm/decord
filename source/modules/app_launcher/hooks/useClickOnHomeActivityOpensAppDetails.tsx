// Module ID: 11394
// Function ID: 11395
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [3957, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11394 (useClickOnHomeActivityOpensAppDetails)
const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(3957) /* explicitContentFromProto */.DeveloperMode;
  return DeveloperMode.useSetting();
};
