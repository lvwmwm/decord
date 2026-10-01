// Module ID: 11782
// Function ID: 11783
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [2021, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11782 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 2021 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
