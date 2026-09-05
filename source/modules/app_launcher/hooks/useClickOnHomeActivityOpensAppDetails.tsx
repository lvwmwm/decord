// Module ID: 12089
// Function ID: 12090
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [1935, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12089 (useClickOnHomeActivityOpensAppDetails)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;

const result = set.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  return DeveloperMode.useSetting();
};
