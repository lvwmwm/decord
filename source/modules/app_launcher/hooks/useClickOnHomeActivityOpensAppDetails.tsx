// Module ID: 11673
// Function ID: 11674
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4070, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11673 (useClickOnHomeActivityOpensAppDetails)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;

const result = set.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  return DeveloperMode.useSetting();
};
