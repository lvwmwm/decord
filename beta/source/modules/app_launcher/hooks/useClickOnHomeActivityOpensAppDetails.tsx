// Module ID: 12962
// Function ID: 12963
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4738, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12962 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
