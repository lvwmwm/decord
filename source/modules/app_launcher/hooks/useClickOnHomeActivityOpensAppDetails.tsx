// Module ID: 11317
// Function ID: 11318
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4069, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11317 (useClickOnHomeActivityOpensAppDetails)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4069 */;

const result = set.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  return DeveloperMode.useSetting();
};
