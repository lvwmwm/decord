// Module ID: 13321
// Function ID: 13322
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [5068, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 13321 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 5068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
