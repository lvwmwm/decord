// Module ID: 12418
// Function ID: 12419
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4839, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12418 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
