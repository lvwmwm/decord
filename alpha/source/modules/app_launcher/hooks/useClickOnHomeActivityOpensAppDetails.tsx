// Module ID: 12866
// Function ID: 12867
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4617, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12866 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4617 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
