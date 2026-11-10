// Module ID: 12634
// Function ID: 12635
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4967, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12634 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4967 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
