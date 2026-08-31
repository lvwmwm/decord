// Module ID: 11628
// Function ID: 11629
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4136, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11628 (useClickOnHomeActivityOpensAppDetails)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4136 */;

const result = set.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  return DeveloperMode.useSetting();
};
