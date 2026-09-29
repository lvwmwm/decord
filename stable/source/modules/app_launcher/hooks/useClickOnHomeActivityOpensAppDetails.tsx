// Module ID: 12371
// Function ID: 12372
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [2019, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12371 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 2019 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
