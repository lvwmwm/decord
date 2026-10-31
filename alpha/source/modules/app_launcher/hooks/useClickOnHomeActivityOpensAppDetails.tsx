// Module ID: 12278
// Function ID: 12279
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4839, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12278 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
