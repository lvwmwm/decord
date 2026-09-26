// Module ID: 11571
// Function ID: 11572
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [2021, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11571 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 2021 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
