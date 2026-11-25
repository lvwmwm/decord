// Module ID: 12959
// Function ID: 12960
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4738, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12959 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
