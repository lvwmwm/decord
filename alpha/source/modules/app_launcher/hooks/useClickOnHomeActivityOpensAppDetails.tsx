// Module ID: 13059
// Function ID: 13060
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4868, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 13059 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4868 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
