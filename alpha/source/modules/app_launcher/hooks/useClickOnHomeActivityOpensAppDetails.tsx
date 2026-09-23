// Module ID: 12422
// Function ID: 12423
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [2020, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12422 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 2020 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
