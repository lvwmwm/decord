// Module ID: 12884
// Function ID: 12885
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4648, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12884 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4648 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
