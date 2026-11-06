// Module ID: 12608
// Function ID: 12609
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [4995, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12608 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 4995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
}
