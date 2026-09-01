// Module ID: 11661
// Function ID: 11662
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4166, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11661 (useClickOnHomeActivityOpensAppDetails)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;

const result = set.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  return DeveloperMode.useSetting();
};
